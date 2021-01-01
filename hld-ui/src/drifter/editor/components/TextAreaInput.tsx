import React from "react";

export function TextAreaInput({
	value,
	setValue,
	className,
	...props
}: {
	setValue: (value: string) => void;
} & JSX.IntrinsicElements["textarea"]) {
	if (process.env.NODE_ENV === "development" && !props.id) {
		console.warn("no id provided");
	}
	return (
		<textarea
			value={value}
			onChange={e => setValue(e.currentTarget.value)}
			className={`bg-white text-black border-2 border-pink flex-1 ${className || ""}`}
			{...props}
		/>
	);
}
