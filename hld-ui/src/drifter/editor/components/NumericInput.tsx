import React from "react";
import { ValueInput } from "./ValueInput";

export function NumericInput({
	value,
	setValue,
	...props
}: {
	value: number;
	setValue: (value: number) => void;
} & Omit<JSX.IntrinsicElements["input"], "value">) {
	return <ValueInput value={"" + value} setValue={e => setValue(Number(e))} type="number" {...props} />;
}
