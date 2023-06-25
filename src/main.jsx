import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { NavigationProvider } from "./context/navigationContext";


ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Suspense fallback="loading...">
			<NavigationProvider>
				<App />
			</NavigationProvider>
		</Suspense>
	</React.StrictMode>
);
