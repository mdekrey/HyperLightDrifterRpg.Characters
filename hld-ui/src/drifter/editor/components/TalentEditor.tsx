import React from "react";
import { createLens, Stateful, useLens } from "../../../utils/useLens";
import { Talent } from "../../rules";
import { ValueInput } from "../components/ValueInput";
import { TextAreaInput } from "../components/TextAreaInput";
import { FormSection } from "./FormSection";

export const titleLens = createLens(
	(i: Talent) => i.title,
	(i, next) => (i.title = next)
);
export const descriptionLens = createLens(
	(i: Talent) => i.description,
	(i, next) => (i.description = next)
);

export const TalentEditor = ({ talent, label }: { talent: Stateful<Talent>; label: string }) => {
	const [title, setTitle] = useLens(talent, titleLens);
	const [description, setDescription] = useLens(talent, descriptionLens);

	return (
		<>
			<FormSection label={label} fields={id => <ValueInput id={id} value={title} setValue={setTitle} />} />
			<FormSection
				label={label + " Description"}
				fields={id => <TextAreaInput id={id} value={description} setValue={setDescription} />}
			/>
		</>
	);
};
