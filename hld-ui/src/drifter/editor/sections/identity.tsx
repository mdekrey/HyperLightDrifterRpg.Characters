import React from "react";
import { createLens, Stateful, useLens } from "../../../utils/useLens";
import { DrifterIdentity } from "../../rules";
import { FormSection } from "../FormSection";
import { TextAreaInput } from "../TextAreaInput";
import { ValueInput } from "../ValueInput";

const nameLens = createLens(
	(i: DrifterIdentity) => i.name,
	(i, next) => (i.name = next)
);
const pronounsLens = createLens(
	(i: DrifterIdentity) => i.pronouns,
	(i, next) => (i.pronouns = next)
);
const descriptionLens = createLens(
	(i: DrifterIdentity) => i.description,
	(i, next) => (i.description = next)
);
const missionLens = createLens(
	(i: DrifterIdentity) => i.mission,
	(i, next) => (i.mission = next)
);

export const IdentitySection = ({ identity }: { identity: Stateful<DrifterIdentity> }) => {
	const [name, setName] = useLens(identity, nameLens);
	const [pronouns, setPronouns] = useLens(identity, pronounsLens);
	const [description, setDescription] = useLens(identity, descriptionLens);
	const [mission, setMission] = useLens(identity, missionLens);

	return (
		<>
			<FormSection label="Name" fields={id => <ValueInput id={id} value={name} setValue={setName} />} />
			<FormSection
				label="Pronouns"
				fields={id => <ValueInput id={id} value={pronouns} setValue={setPronouns} />}
			/>
			<FormSection
				label="Description"
				fields={id => <TextAreaInput id={id} value={description} setValue={setDescription} />}
			/>
			<FormSection
				label="Mission"
				fields={id => <TextAreaInput id={id} value={mission} setValue={setMission} />}
			/>
		</>
	);
};
