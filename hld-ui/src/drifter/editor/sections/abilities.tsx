import React from "react";
import { createLens, Stateful, useLens } from "../../../utils/useLens";
import { DrifterAbilities } from "../../rules";
import { FormSection } from "../components/FormSection";
import { TextAreaInput } from "../components/TextAreaInput";
import { TalentEditor } from "../components/TalentEditor";

const talentListLens = createLens(
	(i: DrifterAbilities) => i.talentList,
	(i, next) => (i.talentList = next)
);
const passiveTalentLens = createLens(
	(i: DrifterAbilities) => i.passiveTalent,
	(i, next) => (i.passiveTalent = next)
);
const dashTalentLens = createLens(
	(i: DrifterAbilities) => i.dashTalent,
	(i, next) => (i.dashTalent = next)
);
const talent1Lens = createLens(
	(i: DrifterAbilities) => i.talent1,
	(i, next) => (i.talent1 = next)
);
const talent2Lens = createLens(
	(i: DrifterAbilities) => i.talent2,
	(i, next) => (i.talent2 = next)
);
const talent3Lens = createLens(
	(i: DrifterAbilities) => i.talent3,
	(i, next) => (i.talent3 = next)
);
const talent4Lens = createLens(
	(i: DrifterAbilities) => i.talent4,
	(i, next) => (i.talent4 = next)
);

export const AbilitiesSection = ({ abilities }: { abilities: Stateful<DrifterAbilities> }) => {
	const [talentList, setTalentList] = useLens(abilities, talentListLens);
	const passiveTalent = useLens(abilities, passiveTalentLens);
	const dashTalent = useLens(abilities, dashTalentLens);
	const talent1 = useLens(abilities, talent1Lens);
	const talent2 = useLens(abilities, talent2Lens);
	const talent3 = useLens(abilities, talent3Lens);
	const talent4 = useLens(abilities, talent4Lens);

	return (
		<>
			<FormSection label="Talents" fields={id => <TextAreaInput value={talentList} setValue={setTalentList} />} />
			<FormSection label="Passive" fields={id => <TalentEditor talent={passiveTalent} />} />
			<FormSection label="Dash Talent" fields={id => <TalentEditor talent={dashTalent} />} />
			<FormSection label="Talent 1" fields={id => <TalentEditor talent={talent1} />} />
			<FormSection label="Talent 2" fields={id => <TalentEditor talent={talent2} />} />
			<FormSection label="Talent 3" fields={id => <TalentEditor talent={talent3} />} />
			<FormSection label="Talent 4" fields={id => <TalentEditor talent={talent4} />} />
		</>
	);
};
