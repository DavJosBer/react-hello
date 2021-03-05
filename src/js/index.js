//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { App } from "./app.js";

//render your react application
let count = 0;
setInterval(() => {
	const ms = Math.floor(count / 1);
	const s = Math.floor(count / 10);
	const m = Math.floor(count / 100);
	const h = Math.floor(count / 1000);
	console.log(ms, s, m, h);
	count++;
	ReactDOM.render(
		<App ms={ms} s={s} m={m} h={h} />,
		document.querySelector("#app")
	);
}, 1000);
