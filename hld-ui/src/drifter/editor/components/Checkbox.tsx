import React from "react";
import styles from "./Checkbox.module.css";

export function Checkbox({
	checked,
	setChecked,
	checkboxAttrs: { className: checkboxClassName, ...checkboxProps } = {},
	visibleCheckboxAttrs: { className: visibleCheckboxClassName, ...visibleCheckboxProps } = {},
	className: labelClassName = "",
	...labelProps
}: {
	checked: boolean;
	setChecked: (value: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;

	checkboxAttrs?: JSX.IntrinsicElements["input"];
	visibleCheckboxAttrs?: JSX.IntrinsicElements["span"];
} & JSX.IntrinsicElements["label"]) {
	return (
		<label className={`${styles.label} ${labelClassName || ""}`} {...labelProps}>
			<input
				type="checkbox"
				checked={checked}
				onChange={e => setChecked(e.currentTarget.checked, e)}
				className={`sr-only ${checkboxClassName || ""}`}
				{...checkboxProps}
			/>
			<span
				className={`${styles.visibleCheckbox} ${visibleCheckboxClassName || ""}`}
				{...visibleCheckboxProps}
			></span>
		</label>
	);
}
