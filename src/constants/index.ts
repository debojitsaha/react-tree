//Problem Statement : Render a tree structure from the given treeData like shown in the screenshot attached

export type TreeNode = {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;
};

export const treeData: TreeNode = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
      left: {
        value: 8,
        left: null,
        right: null,
      },
      right: {
        value: 9,
        left: null,
        right: null,
      },
    },
    right: {
      value: 5,
      left: null,
      right: {
        value: 6,
        left: null,
        right: null,
      },
    },
  },
  right: {
    value: 7,
    left: {
      value: 3,
      left: {
        value: 10,
        left: {
          value: 12,
          left: null,
          right: {
            value: 13,
            left: null,
            right: null,
          },
        },
        right: null,
      },
      right: {
        value: 11,
        left: null,
        right: null,
      },
    },
    right: {
      value: 14,
      left: null,
      right: {
        value: 15,
        left: null,
        right: null,
      },
    },
  },
};
