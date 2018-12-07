import * as React from "react";
import * as styles from "./WidgetButton.css";

interface WidgetButtonProps {
	label: string;
}

export default function WidgetButton({ label }: WidgetButtonProps) {
	return <button className={styles.WidgetButton}>{label}</button>;
}
