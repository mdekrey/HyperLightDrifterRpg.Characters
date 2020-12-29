import React from "react";
import { createLens, Stateful, useLens } from "../../../utils/useLens";
import { DrifterResources } from "../../rules";
import { FormSection } from "../components/FormSection";
import { NumericInput } from "../components/NumericInput";

const healthCurrentLens = createLens(
	(i: DrifterResources) => i.health.current,
	(i, next) => (i.health.current = next)
);
const healthMaxLens = createLens(
	(i: DrifterResources) => i.health.max,
	(i, next) => (i.health.max = next)
);
const energyCurrentLens = createLens(
	(i: DrifterResources) => i.energy.current,
	(i, next) => (i.energy.current = next)
);
const energyMaxLens = createLens(
	(i: DrifterResources) => i.energy.max,
	(i, next) => (i.energy.max = next)
);

export const ResourcesSection = ({ resources }: { resources: Stateful<DrifterResources> }) => {
	const [healthCurrent, setHealthCurrent] = useLens(resources, healthCurrentLens);
	const [healthMax, setHealthMax] = useLens(resources, healthMaxLens);
	const [energyCurrent, setEnergyCurrent] = useLens(resources, energyCurrentLens);
	const [energyMax, setEnergyMax] = useLens(resources, energyMaxLens);

	return (
		<>
			<FormSection
				label="Current Health"
				fields={id => <NumericInput id={id} value={healthCurrent} setValue={setHealthCurrent} />}
			/>
			<FormSection
				label="Health Max"
				fields={id => <NumericInput id={id} value={healthMax} setValue={setHealthMax} />}
			/>
			<FormSection
				label="Current Energy"
				fields={id => <NumericInput id={id} value={energyCurrent} setValue={setEnergyCurrent} />}
			/>
			<FormSection
				label="Energy Max"
				fields={id => <NumericInput id={id} value={energyMax} setValue={setEnergyMax} />}
			/>
		</>
	);
};
