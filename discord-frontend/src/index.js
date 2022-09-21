import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
//import * as reportWebVitals from "./reportWebVitals";

//STORE -> GLOBALIZED STATE

//ACTION -> Just a name. Does something when dispatched

//REDUCER -> Describes how the actions will transform into the next state

//DISPATCH -> Used to execute an action

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
