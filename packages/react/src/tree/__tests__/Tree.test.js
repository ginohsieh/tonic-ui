import { render, screen, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import {
  Tree,
  TreeItem,
  TreeItemContent,
  TreeItemToggle,
  TreeItemToggleIcon,
  useTree
} from '..'; // 確保根據實際 index.js 實現進行導入
import { testA11y } from '@tonic-ui/react/test-utils/accessibility';
import { ensureArray } from 'ensure-type';

const buildTreeNodes = () => {
  return [
    // ... (保持與原來的內容一致)
  ];
};

const buildTreeMap = (nodes) => {
  const treeMap = new Map();

  const traverse = (nodes) => {
    ensureArray(nodes).forEach((node) => {
      treeMap.set(node.id, node);
      traverse(node.children);
    });
  };

  traverse(nodes);

  return treeMap;
};

const findExpandableNodeIds = (nodes) => {
  const expandableNodeIds = [];

  const traverse = (nodes) => {
    ensureArray(nodes).forEach((node) => {
      if (Array.isArray(node.children) && node.children.length > 0) {
        expandableNodeIds.push(node.id);
        traverse(node.children);
      }
    });
  };

  traverse(nodes);

  return expandableNodeIds;
};

const TreeItemRender = ({ node, nodeDepth = 0 }) => {
  const [colorStyle] = useColorStyle();

  return (
    <TreeItem
      data-testid={`node-${node.id}`}
      key={node.id}
      nodeId={node.id}
      render={({ isExpandable, isSelected }) => {
        return (
          <TreeItemContent
            data-testid={`node-${node.id}-content`}
            sx={{
              ':hover + [role="group"]': {
                position: 'relative',
                '::before': {
                  backgroundColor: colorStyle.background.highlighted,
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: 20 + nodeDepth * 24 - (1 / 2),
                  width: 1,
                },
              },
            }}
          >
            <Flex flex="none" width="6x">
              {isExpandable ? (
                <TreeItemToggle
                  aria-label="toggle"
                  data-testid={`node-${node.id}-toggle`}
                >
                  <TreeItemToggleIcon />
                </TreeItemToggle>
              ) : null}
            </Flex>
            <OverflowTooltip label={node.name}>
              {({ ref, style }) => (
                <Box
                  ref={ref}
                  {...style}
                  flex="auto"
                  fontWeight={isSelected ? 'semibold' : 'normal'}
                >
                  {node.name}
                </Box>
              )}
            </OverflowTooltip>
          </TreeItemContent>
        );
      }}
    >
      {ensureArray(node.children).map((node) => (
        <TreeItemRender key={node.id} node={node} nodeDepth={nodeDepth + 1} />
      ))}
    </TreeItem>
  );
};

describe('Tree', () => {
  it('should render correctly', async () => {
    const renderOptions = { useCSSVariables: true };
    const treeNodes = buildTreeNodes();
    const treeMap = buildTreeMap(treeNodes);
    const expandableNodeIds = findExpandableNodeIds(treeNodes);
    const allNodeIds = Array.from(treeMap.keys());

    expect(expandableNodeIds).toStrictEqual(['1', '2', '3', '5', '7', '9']);
    expect(allNodeIds).toStrictEqual(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']);

    const { container } = render(
      <Tree aria-label="tree" isSelectable isUnselectable multiSelect>
        {ensureArray(treeNodes).map((node) => (
          <TreeItemRender key={node.id} node={node} />
        ))}
      </Tree>,
      renderOptions
    );

    expect(screen.getByRole('tree')).toHaveAttribute('aria-multiselectable', 'true');
    expect(container).toMatchSnapshot();

    await testA11y(container);
  });

  it('should call onBlur when the tree is blurred', () => {
    const handleBlur = jest.fn();
    const treeNodes = buildTreeNodes();

    render(
      <Tree onBlur={handleBlur}>
        {ensureArray(treeNodes).map((node) => (
          <TreeItemRender key={node.id} node={node} />
        ))}
      </Tree>
    );

    act(() => {
      screen.getByRole('tree').focus();
    });

    act(() => {
      screen.getByRole('tree').blur();
    });

    expect(handleBlur).toHaveBeenCalledTimes(1);
  });

  // ...

  it('should expand or collapse node when `Enter` key is pressed', async () => {
    const user = userEvent.setup();
    const handleKeyDown = jest.fn();
    const treeNodes = buildTreeNodes();

    render(
      <Tree onKeyDown={handleKeyDown}>
        {ensureArray(treeNodes).map((node) => (
          <TreeItemRender key={node.id} node={node} />
        ))}
      </Tree>
    );

    act(() => {
      screen.getByRole('tree').focus();
    });

    expect(screen.getByTestId('node-1')).not.toHaveAttribute('aria-expanded');

    await user.keyboard('[Enter]');
    expect(screen.getByTestId('node-1')).toHaveAttribute('aria-expanded', 'true');

    await user.keyboard('[Enter]');
    expect(screen.getByTestId('node-1')).not.toHaveAttribute('aria-expanded');
  });

  // ...

  it('should select and unselect node when clicked', () => {
    const handleSelect = jest.fn();
    const treeNodes = buildTreeNodes();

    render(
      <Tree onSelect={handleSelect}>
        {ensureArray(treeNodes).map((node) => (
          <TreeItemRender key={node.id} node={node} />
        ))}
      </Tree>
    );

    act(() => {
      userEvent.click(screen.getByTestId('node-1-content'));
    });

    expect(handleSelect).toHaveBeenCalledWith('1', true);

    act(() => {
      userEvent.click(screen.getByTestId('node-1-content'));
    });

    expect(handleSelect).toHaveBeenCalledWith('1', false);
  });

  // ...

});

```