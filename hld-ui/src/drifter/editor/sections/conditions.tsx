import React from "react";
import { createLens, Stateful, useLens } from "../../../utils/useLens";
import { DrifterConditions } from "../../rules";
import { FormSection } from "../components/FormSection";
import { NumericInput } from "../components/NumericInput";
import { ThresholdEditor } from "../components/ThresholdEditor";
import { ValueInput } from "../components/ValueInput";

const woeLens = createLens(
	(i: DrifterConditions) => i.woe,
	(i, next) => (i.woe = next)
);
const woeThresholdLens = createLens(
	(i: DrifterConditions) => i.woeThreshold,
	(i, next) => (i.woeThreshold = next)
);
const boonsLens = createLens(
	(i: DrifterConditions) => i.boons,
	(i, next) => (i.boons = next)
);
const burdensLens = createLens(
	(i: DrifterConditions) => i.burdens,
	(i, next) => (i.burdens = next)
);

export const ConditionsSection = ({ conditions }: { conditions: Stateful<DrifterConditions> }) => {
	const woeThreshold = useLens(conditions, woeThresholdLens);
	const [woe, setWoe] = useLens(conditions, woeLens);
	const [boons, setBoons] = useLens(conditions, boonsLens);
	const [burdens, setBurdens] = useLens(conditions, burdensLens);

	return (
		<>
			<FormSection label="Woe" fields={id => <ThresholdEditor threshold={woeThreshold} />} />
			<FormSection label="Woe" fields={id => <NumericInput value={woe} setValue={setWoe} />} />
			<FormSection label="Boons" fields={id => <ValueInput value={boons} setValue={setBoons} />} />
			<FormSection label="Burdens" fields={id => <ValueInput value={burdens} setValue={setBurdens} />} />
		</>
	);
};
