import React from "react";
import { createLens, Stateful, useLens } from "../../../utils/useLens";
import { DrifterConditions } from "../../rules";
import { FormSection } from "../components/FormSection";
import { NumericInput } from "../components/NumericInput";
import { TextAreaInput } from "../components/TextAreaInput";
import { ThresholdEditor } from "../components/ThresholdEditor";
import styles from "./conditions.module.css";
import { useSyncCheckboxes } from "../../../utils/useSyncCheckboxes";
import { Checkbox } from "../components/Checkbox";

console.log(styles);

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
	const [individualWoe, woeSetter] = useSyncCheckboxes(woe, setWoe, 12);

	return (
		<>
			<div className={`conditions-woe woe-editor ${styles.woeEditor}`}>
				<ThresholdEditor label="Woe" threshold={woeThreshold} />
				<FormSection
					label="Woe"
					className="sr-only"
					fields={id => <NumericInput id={id} className="sr-only" value={woe} setValue={setWoe} />}
				/>
				<div className={styles.woeMeter}>
					{individualWoe.map((value, index) => (
						<Checkbox
							key={index}
							checked={value}
							setChecked={woeSetter(index)}
							className={styles.woeCheckbox}
							style={{ gridArea: String.fromCharCode(97 + index) }}
						/>
					))}
				</div>
			</div>
			<div className="conditions-boons paired-editors">
				<FormSection
					className="left"
					label="Boons"
					fields={id => <TextAreaInput id={id} value={boons} setValue={setBoons} />}
				/>
				<FormSection
					className="right"
					label="Burdens"
					fields={id => <TextAreaInput id={id} value={burdens} setValue={setBurdens} />}
				/>
			</div>
		</>
	);
};
