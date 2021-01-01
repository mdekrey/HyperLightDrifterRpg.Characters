import React from "react";
import { createLens, Stateful, useLens } from "../../../utils/useLens";
import { Thresholds } from "../../rules";
import { NumericInput } from "../components/NumericInput";
import { FormSection } from "./FormSection";
import styles from "./ThresholdEditor.module.css";

export const fortuneLens = createLens(
	(i: Thresholds) => i.fortune,
	(i, next) => (i.fortune = next)
);
export const temperanceLens = createLens(
	(i: Thresholds) => i.temperance,
	(i, next) => (i.temperance = next)
);

export const ThresholdEditor = ({ threshold, label }: { threshold: Stateful<Thresholds>; label: string }) => {
	const [fortune, setFortune] = useLens(threshold, fortuneLens);
	const [temperance, setTemperance] = useLens(threshold, temperanceLens);

	return (
		<section className={styles.thresholdEditor}>
			<span className={styles.header}>{label}</span>
			<span className={styles.image}>{/* TODO */}</span>
			<FormSection
				label={label + " Fortune"}
				className="sr-only"
				fields={id => <NumericInput id={id} className={styles.fortune} value={fortune} setValue={setFortune} />}
			/>
			<FormSection
				label={label + " Temperance"}
				className="sr-only"
				fields={id => (
					<NumericInput id={id} className={styles.temperance} value={temperance} setValue={setTemperance} />
				)}
			/>
		</section>
	);
};
