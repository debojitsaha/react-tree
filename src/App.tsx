import "./App.css";
import { treeData } from "./constants";
import { TreeNodeComponent } from "./TreeNode";

function App() {
  return <TreeNodeComponent node={treeData} />;
}

export default App;
