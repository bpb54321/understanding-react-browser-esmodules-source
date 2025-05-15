import { createRoot } from "./react-dom-client.development.js";
import * as React from "./react.development.js";

const App = React.createElement("h1", null, "Hello world!");

const rootElement = document.getElementById("root");
const reactRoot = createRoot(rootElement);
reactRoot.render(App);
