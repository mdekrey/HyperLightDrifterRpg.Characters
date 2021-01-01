import React from "react";
import { createLens, Stateful, useLens } from "../../../utils/useLens";
import { DrifterCorruption } from "../../rules";
import { FormSection } from "../components/FormSection";
import { NumericInput } from "../components/NumericInput";

const corruptionLens = createLens(
	(i: DrifterCorruption) => i.corruption,
	(i, next) => (i.corruption = next)
);

export const CorruptionSection = ({ corruption }: { corruption: Stateful<DrifterCorruption> }) => {
	const [corruptionValue, setCorruption] = useLens(corruption, corruptionLens);

	return (
		<div className="corruption">
			<FormSection
				label="Corruption"
				fields={id => <NumericInput value={corruptionValue} setValue={setCorruption} />}
			/>
		</div>
	);
};
