import React from "react";

export function TextAreaInput({
	value,
	setValue,
	className,
	...props
}: {
	setValue: (value: string) => void;
} & JSX.IntrinsicElements["textarea"]) {
	return (
		<textarea
			value={value}
			onChange={e => setValue(e.currentTarget.value)}
			className={`bg-black border border-white flex-1 m-2 ${className || ""}`}
			{...props}
		/>
	);
}
