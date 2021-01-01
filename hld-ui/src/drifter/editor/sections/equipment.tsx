import React from "react";
import { createLens, Stateful, useLens } from "../../../utils/useLens";
import { DrifterEquipment } from "../../rules";
import { FormSection } from "../components/FormSection";
import { NumericInput } from "../components/NumericInput";
import { TextAreaInput } from "../components/TextAreaInput";
import styles from "./equipment.module.css";

const gearLens = createLens(
	(i: DrifterEquipment) => i.gear,
	(i, next) => (i.gear = next)
);
const gear2Lens = createLens(
	(i: DrifterEquipment) => i.gear2,
	(i, next) => (i.gear2 = next)
);
const bitsLens = createLens(
	(i: DrifterEquipment) => i.bits,
	(i, next) => (i.bits = next)
);
const ingredientsLens = createLens(
	(i: DrifterEquipment) => i.ingredients,
	(i, next) => (i.ingredients = next)
);
const componentsLens = createLens(
	(i: DrifterEquipment) => i.components,
	(i, next) => (i.components = next)
);

export const EquipmentSection = ({ equipment }: { equipment: Stateful<DrifterEquipment> }) => {
	const gear = useLens(equipment, gearLens);
	const gear2 = useLens(equipment, gear2Lens);
	const bits = useLens(equipment, bitsLens);
	const ingredients = useLens(equipment, ingredientsLens);
	const components = useLens(equipment, componentsLens);

	return (
		<section className={`equipment ${styles.equipment}`}>
			<h3>Equipment</h3>
			<div className={`paired-editors ${styles.gear}`}>
				<FormSection
					label="Gear"
					className="left sr-only"
					fields={id => <TextAreaInput id={id} value={gear[0]} setValue={gear[1]} />}
				/>
				<FormSection
					label="Gear"
					className="right sr-only"
					fields={id => <TextAreaInput id={id} value={gear2[0]} setValue={gear2[1]} />}
				/>
			</div>
			<FormSection
				label="Bits"
				className={styles.bitsLabel}
				fields={id => <NumericInput id={id} className={styles.bitsInput} value={bits[0]} setValue={bits[1]} />}
			/>
			<FormSection
				label="Ingredients"
				className={styles.ingredientsLabel}
				fields={id => (
					<NumericInput
						id={id}
						className={styles.ingredientsInput}
						value={ingredients[0]}
						setValue={ingredients[1]}
					/>
				)}
			/>
			<FormSection
				label="Components"
				className={styles.componentsLabel}
				fields={id => (
					<NumericInput
						id={id}
						className={styles.componentsInput}
						value={components[0]}
						setValue={components[1]}
					/>
				)}
			/>
		</section>
	);
};
