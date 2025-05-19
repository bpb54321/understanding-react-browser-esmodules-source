import { createRoot } from "./production/react-dom-client.production.js";
import { createElement } from "./production/react.production.js";

function App() {
  return createElement(
    "article",
    null,
    createElement("h2", null, "Counter"),
    createElement("p", null, "Button pressed 1 times"),
    createElement("button", null, "Increment"),
  );
}

const rootElement = document.getElementById("root");
const reactRoot = createRoot(rootElement);
reactRoot.render(createElement(App));
