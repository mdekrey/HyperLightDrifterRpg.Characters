import React from "react";
import { createLens, Stateful, useLens } from "../../../utils/useLens";
import { DrifterAdvancement } from "../../rules";
import { FormSection } from "../components/FormSection";
import { NumericInput } from "../components/NumericInput";
import { TextAreaInput } from "../components/TextAreaInput";
import { ValueInput } from "../components/ValueInput";

const xpLens = createLens(
	(i: DrifterAdvancement) => i.xp,
	(i, next) => (i.xp = next)
);
const namedAdvancement0Lens = createLens(
	(i: DrifterAdvancement) => i.namedAdvancements[0],
	(i, next) => (i.namedAdvancements[0] = next)
);
const namedAdvancement1Lens = createLens(
	(i: DrifterAdvancement) => i.namedAdvancements[1],
	(i, next) => (i.namedAdvancements[1] = next)
);
const namedAdvancement2Lens = createLens(
	(i: DrifterAdvancement) => i.namedAdvancements[2],
	(i, next) => (i.namedAdvancements[2] = next)
);
const namedAdvancement3Lens = createLens(
	(i: DrifterAdvancement) => i.namedAdvancements[3],
	(i, next) => (i.namedAdvancements[3] = next)
);
const perksLens = createLens(
	(i: DrifterAdvancement) => i.perks,
	(i, next) => (i.perks = next)
);
const vigorLens = createLens(
	(i: DrifterAdvancement) => i.vigor,
	(i, next) => (i.vigor = next)
);
const agilityLens = createLens(
	(i: DrifterAdvancement) => i.agility,
	(i, next) => (i.agility = next)
);
const insightLens = createLens(
	(i: DrifterAdvancement) => i.insight,
	(i, next) => (i.insight = next)
);
const presenceLens = createLens(
	(i: DrifterAdvancement) => i.presence,
	(i, next) => (i.presence = next)
);

export const AdvancementSection = ({ advancement }: { advancement: Stateful<DrifterAdvancement> }) => {
	const [xp, setXp] = useLens(advancement, xpLens);
	const [namedAdvancement0, setNamedAdvancement0] = useLens(advancement, namedAdvancement0Lens);
	const [namedAdvancement1, setNamedAdvancement1] = useLens(advancement, namedAdvancement1Lens);
	const [namedAdvancement2, setNamedAdvancement2] = useLens(advancement, namedAdvancement2Lens);
	const [namedAdvancement3, setNamedAdvancement3] = useLens(advancement, namedAdvancement3Lens);
	const [perks, setPerks] = useLens(advancement, perksLens);
	const [vigor, setVigor] = useLens(advancement, vigorLens);
	const [agility, setAgility] = useLens(advancement, agilityLens);
	const [insight, setInsight] = useLens(advancement, insightLens);
	const [presence, setPresence] = useLens(advancement, presenceLens);

	return (
		<>
			<div className="advancement-xp">
				<FormSection label="XP" fields={id => <NumericInput value={xp} setValue={setXp} />} />
				<FormSection
					label="Advancement 1"
					fields={id => <ValueInput value={namedAdvancement0} setValue={setNamedAdvancement0} />}
				/>
				<FormSection
					label="Advancement 2"
					fields={id => <ValueInput value={namedAdvancement1} setValue={setNamedAdvancement1} />}
				/>
				<FormSection
					label="Advancement 3"
					fields={id => <ValueInput value={namedAdvancement2} setValue={setNamedAdvancement2} />}
				/>
				<FormSection
					label="Advancement 4"
					fields={id => <ValueInput value={namedAdvancement3} setValue={setNamedAdvancement3} />}
				/>
			</div>

			<div className="advancement-perks">
				<FormSection label="Perks" fields={id => <TextAreaInput id={id} value={perks} setValue={setPerks} />} />
			</div>
			<div className="advancement-grit">
				<FormSection label="Vigor" fields={id => <NumericInput id={id} value={vigor} setValue={setVigor} />} />
				<FormSection
					label="Agility"
					fields={id => <NumericInput id={id} value={agility} setValue={setAgility} />}
				/>
			</div>
			<div className="advancement-nerve">
				<FormSection
					label="Insight"
					fields={id => <NumericInput id={id} value={insight} setValue={setInsight} />}
				/>
				<FormSection
					label="Presence"
					fields={id => <NumericInput id={id} value={presence} setValue={setPresence} />}
				/>
			</div>
		</>
	);
};
