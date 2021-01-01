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
const armorLens = createLens(
	(i: DrifterResources) => i.armor,
	(i, next) => (i.armor = next)
);
const resistanceLens = createLens(
	(i: DrifterResources) => i.resistance,
	(i, next) => (i.resistance = next)
);
const gritLens = createLens(
	(i: DrifterResources) => i.grit,
	(i, next) => (i.grit = next)
);
const nerveLens = createLens(
	(i: DrifterResources) => i.nerve,
	(i, next) => (i.nerve = next)
);

export const ResourcesSection = ({ resources }: { resources: Stateful<DrifterResources> }) => {
	const [healthCurrent, setHealthCurrent] = useLens(resources, healthCurrentLens);
	const [healthMax, setHealthMax] = useLens(resources, healthMaxLens);
	const [energyCurrent, setEnergyCurrent] = useLens(resources, energyCurrentLens);
	const [energyMax, setEnergyMax] = useLens(resources, energyMaxLens);
	const [armor, setArmor] = useLens(resources, armorLens);
	const [resistance, setResistance] = useLens(resources, resistanceLens);
	const [grit, setGrit] = useLens(resources, gritLens);
	const [nerve, setNerve] = useLens(resources, nerveLens);

	return (
		<>
			<div className="resource-health">
				<FormSection
					label="Current Health"
					fields={id => <NumericInput id={id} value={healthCurrent} setValue={setHealthCurrent} />}
				/>
				<FormSection
					label="Health Max"
					fields={id => <NumericInput id={id} value={healthMax} setValue={setHealthMax} />}
				/>
			</div>
			<div className="resource-energy">
				<FormSection
					label="Current Energy"
					fields={id => <NumericInput id={id} value={energyCurrent} setValue={setEnergyCurrent} />}
				/>
				<FormSection
					label="Energy Max"
					fields={id => <NumericInput id={id} value={energyMax} setValue={setEnergyMax} />}
				/>
			</div>
			<div className="resource-armor">
				<FormSection label="Armor" fields={id => <NumericInput id={id} value={armor} setValue={setArmor} />} />
			</div>
			<div className="resource-resistance">
				<FormSection
					label="Resistance"
					fields={id => <NumericInput id={id} value={resistance} setValue={setResistance} />}
				/>
			</div>
			<div className="resource-boost">
				<FormSection label="Grit" fields={id => <NumericInput id={id} value={grit} setValue={setGrit} />} />
				<FormSection label="Nerve" fields={id => <NumericInput id={id} value={nerve} setValue={setNerve} />} />
			</div>
		</>
	);
};
