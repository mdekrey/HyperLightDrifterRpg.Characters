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
			<div className="talents-list vertical-editor">
				<FormSection
					label="Talents"
					fields={id => <TextAreaInput id={id} value={talentList} setValue={setTalentList} />}
				/>
			</div>
			<div className="talents-passive vertical-editor">
				<TalentEditor label="Passive" talent={passiveTalent} />
			</div>
			<div className="talent-dash vertical-editor">
				<TalentEditor label="Dash Talent" talent={dashTalent} />
			</div>
			<div className="talent-1 vertical-editor">
				<TalentEditor label="Talent 1" talent={talent1} />
			</div>
			<div className="talent-2 vertical-editor">
				<TalentEditor label="Talent 2" talent={talent2} />
			</div>
			<div className="talent-3 vertical-editor">
				<TalentEditor label="Talent 3" talent={talent3} />
			</div>
			<div className="talent-4 vertical-editor">
				<TalentEditor label="Talent 4" talent={talent4} />
			</div>
		</>
	);
};
