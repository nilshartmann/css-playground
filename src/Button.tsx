import * as React from "react";
import * as styles from "./Button.css";
import classnames from "classnames";
type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export default function Button({ className, ...attr }: ButtonProps) {
	const buttonClasses = classnames("Button", styles.Button, className);
	return <button {...attr} className={buttonClasses} />;
}
