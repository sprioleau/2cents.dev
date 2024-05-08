import "./styles/index.scss";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
