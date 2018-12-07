import * as React from "react";
import * as ReactDOM from "react-dom";
import AppOne from "./AppOne";
import AppTwo from "./AppTwo";
import WidgetsApp from "./widgets/WidgetsApp";

ReactDOM.render(<AppOne />, document.getElementById("app_one"));

async function loadAppTwo() {
	const stylesContent = await fetch("/dist/main.css");
	const styles = await stylesContent.text();

	console.log("styles", styles);

	const styleElement = document.createElement("style");
	styleElement.textContent = styles;
	const appDiv = document.createElement("div");

	const appTwoElement = document.getElementById("app_two");
	const shadow = appTwoElement!.attachShadow({ mode: "open" });
	shadow.appendChild(styleElement);
	shadow.appendChild(appDiv);

	ReactDOM.render(<AppTwo />, appDiv);
}

loadAppTwo();

async function loadAppThree() {
	const stylesContent = await fetch("/dist/main.css");
	const styles = await stylesContent.text();

	console.log("styles", styles);

	const styleElement = document.createElement("style");
	styleElement.textContent = styles;
	const appDiv = document.createElement("div");

	const appTwoElement = document.getElementById("app_three");
	const shadow = appTwoElement!.attachShadow({ mode: "open" });
	shadow.appendChild(styleElement);
	shadow.appendChild(appDiv);

	ReactDOM.render(<WidgetsApp />, appDiv);
}

loadAppThree();
