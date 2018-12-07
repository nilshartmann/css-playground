import * as React from "react";
import classnames from "classnames";
import * as styles from "./Confirm.scss";
import Button from "./Button";

type ConfirmProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
	buttonLabel: string;
};

export default function Confirm({ className, children, buttonLabel, ...attrs }: ConfirmProps) {
	return (
		<>
			<div {...attrs} className={classnames(styles.Confirm, className)}>
				<p>CSS-only #1: Buttons selected by their type ('button') in config.scss:</p>
				<Button>Button (should be Aqua)</Button>
				<div>
					<Button>Another button (should be normal, ie green)</Button>
				</div>
			</div>

			<div {...attrs} className={classnames(styles.ConfirmWithGlobalClassName, className)}>
				<p>
					CSS-only #2: Use 'global' classname to indicate our button: (now either each button inside the list can add 'Button' per
					className OR the Button component adds a global 'Button' classname). Very similar to approach #1, where we use the
					element type as CSS selector.
				</p>
				<Button>Button (should be Aqua)</Button>
				<div>
					<Button className="Button">Another button (should be normal, ie green)</Button>
				</div>
			</div>
		</>
	);
}
