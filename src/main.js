import { createRoot } from "./production/react-dom-client.production.js";
import * as React from "./production/react.production.js";

function App() {
  console.log("App called");
  return React.createElement("h1", null, "Hello world!");
}

const rootElement = document.getElementById("root");
const reactRoot = createRoot(rootElement);
reactRoot.render(React.createElement(App));
