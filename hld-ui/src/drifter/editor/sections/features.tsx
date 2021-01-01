import React from "react";
import { createLens, Stateful, useLens } from "../../../utils/useLens";
import { DrifterFeatures } from "../../rules";
import { FormSection } from "../components/FormSection";
import { ValueInput } from "../components/ValueInput";

const drifterClassLens = createLens(
	(i: DrifterFeatures) => i.drifterClass,
	(i, next) => (i.drifterClass = next)
);
const specialityLens = createLens(
	(i: DrifterFeatures) => i.speciality,
	(i, next) => (i.speciality = next)
);
const traitLens = createLens(
	(i: DrifterFeatures) => i.trait,
	(i, next) => (i.trait = next)
);
const knackLens = createLens(
	(i: DrifterFeatures) => i.knack,
	(i, next) => (i.knack = next)
);

export const FeaturesSection = ({ features }: { features: Stateful<DrifterFeatures> }) => {
	const [drifterClass, setDrifterClass] = useLens(features, drifterClassLens);
	const [speciality, setSpeciality] = useLens(features, specialityLens);
	const [trait, setTrait] = useLens(features, traitLens);
	const [knack, setKnack] = useLens(features, knackLens);

	return (
		<>
			<div className="features-class paired-editors">
				<FormSection
					className="left"
					label="Class"
					fields={id => <ValueInput id={id} value={drifterClass} setValue={setDrifterClass} />}
				/>
				<FormSection
					className="right"
					label="Speciality"
					fields={id => <ValueInput id={id} value={speciality} setValue={setSpeciality} />}
				/>
			</div>
			<div className="features-trait paired-editors">
				<FormSection
					className="left"
					label="Trait"
					fields={id => <ValueInput id={id} value={trait} setValue={setTrait} />}
				/>
				<FormSection
					className="right"
					label="Knack"
					fields={id => <ValueInput id={id} value={knack} setValue={setKnack} />}
				/>
			</div>
		</>
	);
};
