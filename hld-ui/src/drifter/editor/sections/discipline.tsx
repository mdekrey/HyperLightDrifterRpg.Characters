import React from "react";
import { createLens, Stateful, useLens } from "../../../utils/useLens";
import { DisciplineThresholds, DrifterDiscipline } from "../../rules";
import { FormSection } from "../components/FormSection";
import { NumericInput } from "../components/NumericInput";

const combatLens = createLens(
	(i: DrifterDiscipline) => i.combat,
	(i, next) => (i.combat = next)
);
const socialLens = createLens(
	(i: DrifterDiscipline) => i.social,
	(i, next) => (i.social = next)
);
const manipulativeLens = createLens(
	(i: DrifterDiscipline) => i.manipulative,
	(i, next) => (i.manipulative = next)
);
const explorationLens = createLens(
	(i: DrifterDiscipline) => i.exploration,
	(i, next) => (i.exploration = next)
);
const survivalLens = createLens(
	(i: DrifterDiscipline) => i.survival,
	(i, next) => (i.survival = next)
);

const fortuneLens = createLens(
	(i: DisciplineThresholds) => i.fortune,
	(i, next) => (i.fortune = next)
);
const temperanceLens = createLens(
	(i: DisciplineThresholds) => i.temperance,
	(i, next) => (i.temperance = next)
);

const DisciplineThresholdEditor = ({ threshold }: { threshold: Stateful<DisciplineThresholds> }) => {
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

export const DisciplineSection = ({ discipline }: { discipline: Stateful<DrifterDiscipline> }) => {
	const combat = useLens(discipline, combatLens);
	const social = useLens(discipline, socialLens);
	const manipulative = useLens(discipline, manipulativeLens);
	const exploration = useLens(discipline, explorationLens);
	const survival = useLens(discipline, survivalLens);

	return (
		<>
			<FormSection label="Combat" fields={id => <DisciplineThresholdEditor threshold={combat} />} />
			<FormSection label="Social" fields={id => <DisciplineThresholdEditor threshold={social} />} />
			<FormSection label="Manipulative" fields={id => <DisciplineThresholdEditor threshold={manipulative} />} />
			<FormSection label="Exploration" fields={id => <DisciplineThresholdEditor threshold={exploration} />} />
			<FormSection label="Survival" fields={id => <DisciplineThresholdEditor threshold={survival} />} />
		</>
	);
};
