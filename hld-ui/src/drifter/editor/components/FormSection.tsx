import React from "react";
import { randomShortString } from "../../../utils/randomShortString";

export function FormSection({
	label,
	fields,
}: {
	label: React.ReactChild;
	fields: React.ReactChild | ((labelId: string) => React.ReactChild);
}) {
	const labelId = React.useMemo(() => randomShortString() + randomShortString(), []);
	return (
		<section className="form-section">
			<label htmlFor={labelId} className="">
				{label}
				{label && ":"}
			</label>
			<div className="flex flex-wrap flex-1">{typeof fields === "function" ? fields(labelId) : fields}</div>
		</section>
	);
}
