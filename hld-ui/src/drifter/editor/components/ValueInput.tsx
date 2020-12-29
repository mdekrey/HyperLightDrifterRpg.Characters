import React from "react";

export function ValueInput({
	value,
	setValue,
	className,
	...props
}: {
	setValue: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
} & JSX.IntrinsicElements["input"]) {
	return (
		<input
			type="text"
			value={value}
			onChange={e => setValue(e.currentTarget.value, e)}
			className={`bg-black border border-white flex-1 m-2 ${className || ""}`}
			{...props}
		/>
	);
}
