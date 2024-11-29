import React from "react";
import TreeNode, { Icons, TreeInfo } from "./TreeNode";

interface Props {
  data: TreeInfo[];
  icons?: Icons;
  expandAll?: boolean;
  showIcon?: boolean;
  showVerticalLine?: boolean;
}

const TreeView: React.FC<Props> = ({
  data,
  icons,
  expandAll = false,
  showIcon = true,
  showVerticalLine = true,
}) => {
  return (
    <ul>
      {data.map((node) => (
        <TreeNode
          key={node.key}
          node={node}
          icons={icons}
          expandAll={expandAll}
          showIcon={showIcon}
          showVerticalLine={showVerticalLine}
        />
      ))}
    </ul>
  );
};

export default TreeView;
