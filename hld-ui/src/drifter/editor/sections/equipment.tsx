import React from "react";
import { createLens, Stateful, useLens } from "../../../utils/useLens";
import { DrifterEquipment } from "../../rules";
import { FormSection } from "../components/FormSection";
import { NumericInput } from "../components/NumericInput";
import { TextAreaInput } from "../components/TextAreaInput";

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
		<div className="equipment">
			<div className="paired-editors">
				<FormSection
					label="Gear"
					className="left"
					fields={id => <TextAreaInput id={id} value={gear[0]} setValue={gear[1]} />}
				/>
				<FormSection
					label="Gear"
					className="right sr-only"
					fields={id => <TextAreaInput id={id} value={gear2[0]} setValue={gear2[1]} />}
				/>
			</div>
			<FormSection label="Bits" fields={id => <NumericInput id={id} value={bits[0]} setValue={bits[1]} />} />
			<FormSection
				label="Ingredients"
				fields={id => <NumericInput id={id} value={ingredients[0]} setValue={ingredients[1]} />}
			/>
			<FormSection
				label="Components"
				fields={id => <NumericInput id={id} value={components[0]} setValue={components[1]} />}
			/>
		</div>
	);
};
