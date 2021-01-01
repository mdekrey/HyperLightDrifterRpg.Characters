import React from "react";
import { createLens, Stateful, useLens } from "../../../utils/useLens";
import { DrifterDiscipline } from "../../rules";
import { ThresholdEditor } from "../components/ThresholdEditor";
import styles from "./discipline.module.css";

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
		<div className={`discipline ${styles.discipline}`}>
			<ThresholdEditor label="Combat" threshold={combat} />
			<ThresholdEditor label="Social" threshold={social} />
			<ThresholdEditor label="Manipulative" threshold={manipulative} />
			<ThresholdEditor label="Exploration" threshold={exploration} />
			<ThresholdEditor label="Survival" threshold={survival} />
		</div>
	);
};
