import * as React from "react";
import * as styles from "./ErrorWidget.css";

import BaseWidget from "./BaseWidget";
import WidgetButton from "./WidgetButton";

export default function WarningWidget() {
	return (
		<div className={styles.ErrorWidget}>
			<BaseWidget title="Error Widget">
				<WidgetButton label="Button (should be red)" />
			</BaseWidget>
		</div>
	);
}
