import { TreeNode } from "./constants";

export function TreeNodeComponent({ node }: { node: TreeNode | null }) {
  if (!node) return null;

  return (
    <div style={{ textAlign: "center", margin: "10px" }}>
      <div
        style={{
          display: "inline-block",
          padding: "8px",
          border: "1px solid black",
          borderRadius: "50%",
          margin: "5px",
        }}
      >
        {node.value}
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <div style={{ margin: "0 10px" }}>
          {node.left && (
            <div
              style={{
                width: "1px",
                height: "20px",
                borderLeft: "1px solid black",
                transform: "rotate(45deg)",
                transformOrigin: "top left",
                position: "relative",
                left: "10px",
              }}
            ></div>
          )}
          <TreeNodeComponent node={node.left} />
        </div>
        <div style={{ margin: "0 10px" }}>
          {node.right && (
            <div
              style={{
                width: "1px",
                height: "20px",
                borderLeft: "1px solid black",
                transform: "rotate(-45deg)",
                transformOrigin: "top right",
                position: "relative",
                left: "-10px",
              }}
            ></div>
          )}
          <TreeNodeComponent node={node.right} />
        </div>
      </div>
    </div>
  );
}
