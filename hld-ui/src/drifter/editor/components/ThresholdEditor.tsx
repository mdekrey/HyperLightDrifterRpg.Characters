import React from "react";
import { createLens, Stateful, useLens } from "../../../utils/useLens";
import { Thresholds } from "../../rules";
import { NumericInput } from "../components/NumericInput";
import { FormSection } from "./FormSection";

export const fortuneLens = createLens(
	(i: Thresholds) => i.fortune,
	(i, next) => (i.fortune = next)
);
export const temperanceLens = createLens(
	(i: Thresholds) => i.temperance,
	(i, next) => (i.temperance = next)
);

export const ThresholdEditor = ({ threshold }: { threshold: Stateful<Thresholds> }) => {
	const [fortune, setFortune] = useLens(threshold, fortuneLens);
	const [temperance, setTemperance] = useLens(threshold, temperanceLens);

	return (
		<>
			<FormSection
				label="Fortune"
				fields={id => <NumericInput id={id} value={fortune} setValue={setFortune} />}
			/>
			<FormSection
				label="Temperance"
				fields={id => <NumericInput id={id} value={temperance} setValue={setTemperance} />}
			/>
		</>
	);
};
