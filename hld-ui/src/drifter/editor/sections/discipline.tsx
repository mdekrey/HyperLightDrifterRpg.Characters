import React from "react";
import { createLens, Stateful, useLens } from "../../../utils/useLens";
import { DrifterDiscipline } from "../../rules";
import { FormSection } from "../components/FormSection";
import { ThresholdEditor } from "../components/ThresholdEditor";

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

export const DisciplineSection = ({ discipline }: { discipline: Stateful<DrifterDiscipline> }) => {
	const combat = useLens(discipline, combatLens);
	const social = useLens(discipline, socialLens);
	const manipulative = useLens(discipline, manipulativeLens);
	const exploration = useLens(discipline, explorationLens);
	const survival = useLens(discipline, survivalLens);

	return (
		<>
			<FormSection label="Combat" fields={id => <ThresholdEditor threshold={combat} />} />
			<FormSection label="Social" fields={id => <ThresholdEditor threshold={social} />} />
			<FormSection label="Manipulative" fields={id => <ThresholdEditor threshold={manipulative} />} />
			<FormSection label="Exploration" fields={id => <ThresholdEditor threshold={exploration} />} />
			<FormSection label="Survival" fields={id => <ThresholdEditor threshold={survival} />} />
		</>
	);
};
