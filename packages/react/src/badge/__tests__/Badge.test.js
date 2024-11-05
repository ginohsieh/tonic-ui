import { render, screen } from '@testing-library/react';
import React from 'react';
import { Badge, Flex } from '../index';
import { AlertIcon } from '@tonic-ui/react-icons/src';

describe('Badge', () => {
  it('should render correctly', async () => {
    const renderOptions = {
      useCSSVariables: true,
    };
    const { container } = render(
      <Flex columnGap="4x">
        <Badge variant="dot" />
        <Badge variant="solid" badgeContent={5} />
        <Badge variant="dot">
          <AlertIcon size="4x" />
        </Badge>
        <Badge variant="solid" badgeContent={5}>
          <AlertIcon size="4x" />
        </Badge>
        <Badge variant="solid" badgeContent="99+">
          <AlertIcon size="4x" />
        </Badge>
      </Flex>,
      renderOptions
    );

    expect(container).toMatchSnapshot();
  });

  it('should render with the correct badge content', () => {
    render(<Badge variant="solid" badgeContent={10} />);
    expect(screen.getByText('10')).toBeInTheDocument();
  });

  it('should not render badge content if isInvisible is true', () => {
    render(<Badge variant="solid" badgeContent={10} isInvisible />);
    expect(screen.queryByText('10')).not.toBeInTheDocument();
  });

  it('should render children correctly', () => {
    render(
      <Badge variant="solid" badgeContent={8}>
        <AlertIcon size="4x" />
      </Badge>
    );
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('should place the badge content correctly based on placement prop', () => {
    render(<Badge variant="solid" badgeContent={5} placement="bottom-left" />);
    expect(screen.getByText('5')).toHaveClass('placement-bottom-left');
  });

  it('should not render badge content if badgeContent is null or undefined and variant is not dot', () => {
    render(<Badge variant="solid" badgeContent={null} />);
    expect(screen.queryByText('')).not.toBeInTheDocument();
  });

  it('should render dot variant correctly', () => {
    render(<Badge variant="dot" />);
    expect(screen.getByRole('img', { hidden: true })).toHaveClass('dot-variant');
  });
});