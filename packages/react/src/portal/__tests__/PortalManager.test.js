import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from '@tonic-ui/react/test-utils/render';
import { Box, Button, PortalManager, usePortalManager } from '@tonic-ui/react/src';
import React, { useCallback, useRef } from 'react';

describe('PortalManager', () => {
  it('should add a portal to the PortalManager and later be removed by calling the close function', async () => {
    const user = userEvent.setup();

    const TestComponent = () => {
      const portal = usePortalManager();
      const addPortal = useCallback(() => {
        portal((close) => (
          <Box data-testid="portal-component">
            This is a portal component
            <Button data-testid="btn-remove-portal" onClick={close}>
              Remove Portal
            </Button>
          </Box>
        ));
      }, [portal]);

      return (
        <Button data-testid="btn-add-portal" onClick={addPortal}>
          Add Portal
        </Button>
      );
    };

    render(
      <PortalManager>
        <TestComponent />
      </PortalManager>
    );

    await user.click(await screen.findByTestId('btn-add-portal'));

    const portalComponent = screen.getByTestId('portal-component');
    expect(portalComponent).toBeInTheDocument();

    await user.click(await screen.findByTestId('btn-remove-portal'));

    expect(portalComponent).not.toBeInTheDocument();
  });

  it('should add a portal to the PortalManager and later be removed by passing the portal\'s id', async () => {
    const user = userEvent.setup();

    const TestComponent = () => {
      const portalIdRef = useRef(null);
      const portal = usePortalManager();
      const handleClickAddPortal = useCallback(() => {
        const id = portal(() => (
          <Box data-testid="portal-component">
            This is a portal component
          </Box>
        ));
        portalIdRef.current = id;
      }, [portal]);
      const handleClickRemovePortal = useCallback(() => {
        const id = portalIdRef.current;
        portal.remove(id);
      }, [portal]);

      return (
        <>
          <Button
            data-testid="btn-add-portal"
            onClick={handleClickAddPortal}
          >
            Add Portal
          </Button>
          <Button
            data-testid="btn-remove-portal"
            onClick={handleClickRemovePortal}
          >
            Remove Portal
          </Button>
        </>
      );
    };

    render(
      <PortalManager>
        <TestComponent />
      </PortalManager>
    );

    await user.click(await screen.findByTestId('btn-add-portal'));

    const portalComponent = screen.getByTestId('portal-component');
    expect(portalComponent).toBeInTheDocument();

    await user.click(await screen.findByTestId('btn-remove-portal'));

    expect(portalComponent).not.toBeInTheDocument();
  });

  it('should retain portals within the same PortalManager instance', async () => {
    const user = userEvent.setup();

    const TestComponent = () => {
      const portal = usePortalManager();
      const addPortal = useCallback(() => {
        portal((close) => (
          <Box data-testid="portal-component">
            This is a portal component
          </Box>
        ));
      }, [portal]);

      return (
        <Button data-testid="btn-add-portal" onClick={addPortal}>
          Add Portal
        </Button>
      );
    };

    const { rerender } = render(
      <PortalManager>
        <TestComponent />
      </PortalManager>
    );

    await user.click(await screen.findByTestId('btn-add-portal'));

    const portalComponent = screen.getByTestId('portal-component');
    expect(portalComponent).toBeInTheDocument();

    rerender(
      <PortalManager>
        <TestComponent />
      </PortalManager>
    );

    expect(portalComponent).toBeInTheDocument();
  });

  it('should add multiple portals and remove them individually', async () => {
    const user = userEvent.setup();

    const TestComponent = () => {
      const portal = usePortalManager();
      const portalIdsRef = useRef([]);
      const handleClickAddPortal = useCallback(() => {
        const id = portal(() => (
          <Box data-testid="portal-component">
            This is a portal component
          </Box>
        ));
        portalIdsRef.current.push(id);
      }, [portal]);
      const handleClickRemoveLastPortal = useCallback(() => {
        const id = portalIdsRef.current.pop();
        if (id) {
          portal.remove(id);
        }
      }, [portal]);

      return (
        <>
          <Button
            data-testid="btn-add-portal"
            onClick={handleClickAddPortal}
          >
            Add Portal
          </Button>
          <Button
            data-testid="btn-remove-last-portal"
            onClick={handleClickRemoveLastPortal}
          >
            Remove Last Portal
          </Button>
        </>
      );
    };

    render(
      <PortalManager>
        <TestComponent />
      </PortalManager>
    );

    await user.click(await screen.findByTestId('btn-add-portal'));
    await user.click(await screen.findByTestId('btn-add-portal'));

    const portalComponents = screen.getAllByTestId('portal-component');
    expect(portalComponents).toHaveLength(2);

    await user.click(await screen.findByTestId('btn-remove-last-portal'));

    expect(screen.getAllByTestId('portal-component')).toHaveLength(1);

    await user.click(await screen.findByTestId('btn-remove-last-portal'));

    expect(screen.queryByTestId('portal-component')).not.toBeInTheDocument();
  });
});