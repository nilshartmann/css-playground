import * as React from "react";
import Button from "./Button";
import classnames from "classnames";

import * as styles from "./Buttons.css";
import Confirm from "./Confirm";

export default function Buttons() {
	return (
		<>
			<div>
				<h3>Styling with 'global' CSS classes (without CSS Modules) </h3>
				<button>Normal Button (without styling)</button>
				<button className="warn">Warning Button</button>
				<div className="confirm">
					<button className="warn">Confirm Warn Button ('.warn' class overridden by outer div)</button>
				</div>
			</div>
			<div style={{ marginTop: "1rem", paddingTop: "1rem", borderTop: "1px dotted gray" }}>
				<h3>Styling with CSS Modules</h3>
				<Button>Normal</Button>
				<Button className={styles.warn}>Warning button (set by button user)</Button>
				<Confirm buttonLabel="Confirm Button (should be lightgreen)" />
			</div>
		</>
	);
}
