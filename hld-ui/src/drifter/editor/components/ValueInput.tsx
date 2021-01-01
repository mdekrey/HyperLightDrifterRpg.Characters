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
			className={`bg-white text-black border-pink border-2 ${className || ""}`}
			{...props}
		/>
	);
}
