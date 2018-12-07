import * as React from "react";
import * as styles from "./WarningWidget.css";

import BaseWidget from "./BaseWidget";
import WidgetButton from "./WidgetButton";

export default function WarningWidget() {
	return (
		<div className={styles.WarningWidget}>
			<BaseWidget title="Warning Widget">
				<WidgetButton label="Button (should be orange)" />
			</BaseWidget>
		</div>
	);
}
