import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/index.css";
import MainApp from "./main-app";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<MainApp />
	</StrictMode>
);
