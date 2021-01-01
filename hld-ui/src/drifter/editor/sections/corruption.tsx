import React from "react";
import { createLens, Stateful, useLens } from "../../../utils/useLens";
import { DrifterCorruption } from "../../rules";
import { FormSection } from "../components/FormSection";
import { NumericInput } from "../components/NumericInput";
import { useSyncCheckboxes } from "../../../utils/useSyncCheckboxes";
import styles from "./corruption.module.css";
import { Checkbox } from "../components/Checkbox";

const corruptionLens = createLens(
	(i: DrifterCorruption) => i.corruption,
	(i, next) => (i.corruption = next)
);

export const CorruptionSection = ({ corruption }: { corruption: Stateful<DrifterCorruption> }) => {
	const [corruptionValue, setCorruption] = useLens(corruption, corruptionLens);
	const [individualCorruption, corruptionSetter] = useSyncCheckboxes(corruptionValue, setCorruption, 12);

	return (
		<section className={`corruption ${styles.corruption}`}>
			<h3>Corruption</h3>
			<FormSection
				label="Corruption"
				className="sr-only"
				fields={id => (
					<NumericInput id={id} className="sr-only" value={corruptionValue} setValue={setCorruption} />
				)}
			/>

			{individualCorruption.map((value, index) => (
				<Checkbox checked={value} setChecked={corruptionSetter(index)} className={styles.woeCheckbox} />
			))}
		</section>
	);
};
