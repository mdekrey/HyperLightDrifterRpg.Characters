import React from "react";
import styles from "./Checkbox.module.css";

export function Checkbox({
	checked,
	setChecked,
	checkboxAttrs: { className: checkboxClassName, ...checkboxProps } = {},
	labelAttrs: { className: labelClassName, ...labelProps } = {},
	visibleCheckboxAttrs: { className: visibleCheckboxClassName, ...visibleCheckboxProps } = {},
}: {
	checked: boolean;
	setChecked: (value: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;

	checkboxAttrs?: JSX.IntrinsicElements["input"];
	labelAttrs?: JSX.IntrinsicElements["label"];
	visibleCheckboxAttrs?: JSX.IntrinsicElements["span"];
}) {
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
