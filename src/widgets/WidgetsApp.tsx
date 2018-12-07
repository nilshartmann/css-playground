import * as React from "react";
import WidgetButton from "./WidgetButton";
import WarningWidget from "./WarningWidget";
import ErrorWidget from "./ErrorWidget";
import * as styles from "./WidgetsApp.css";

export default function() {
	return (
		<div className={styles.WidgetsApp}>
			<WidgetButton label="Regular Button (outside any widget, should be green (default bg color))" />
			<WarningWidget />
			<ErrorWidget />
		</div>
	);
}
