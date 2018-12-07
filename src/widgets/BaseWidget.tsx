import * as React from "react";
import * as styles from "./BaseWidget.css";

interface BaseWidgetProps {
	title: string;
	children?: React.ReactNode;
}

export default function BaseWidgetProps({ title, children }: BaseWidgetProps) {
	return (
		<div className={styles.BaseWidget}>
			<h1>{title}</h1>
			{children}
		</div>
	);
}
