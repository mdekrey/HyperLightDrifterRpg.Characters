import React from "react";
import { createLens, Stateful, useLens } from "../../../utils/useLens";
import { DrifterDashes } from "../../rules";
import { FormSection } from "../components/FormSection";
import { NumericInput } from "../components/NumericInput";

const currentLens = createLens(
	(i: DrifterDashes) => i.current,
	(i, next) => (i.current = next)
);
const maxLens = createLens(
	(i: DrifterDashes) => i.max,
	(i, next) => (i.max = next)
);

export const DashesSection = ({ dashes }: { dashes: Stateful<DrifterDashes> }) => {
	const [current, internalSetCurrent] = useLens(dashes, currentLens);
	const [max, internalSetMax] = useLens(dashes, maxLens);

	return (
		<div className="dashes">
			<FormSection
				label="Current Dashes"
				fields={id => <NumericInput id={id} value={current} setValue={setCurrent} />}
			/>
			<FormSection label="Max Dashes" fields={id => <NumericInput id={id} value={max} setValue={setMax} />} />
		</div>
	);

	function setCurrent(d: number) {
		if (d <= max && d >= 0) internalSetCurrent(d);
	}

	function setMax(d: number) {
		if (d > 4 || d < 2) return;

		if (current > d) dashes[1]({ current: d, max: d });
		else internalSetMax(d);
	}
};
