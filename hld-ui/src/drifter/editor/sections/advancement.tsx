import React from "react";
import { createLens, Stateful, useLens } from "../../../utils/useLens";
import { DrifterAdvancement } from "../../rules";
import { Checkbox } from "../components/Checkbox";
import { FormSection } from "../components/FormSection";
import { NumericInput } from "../components/NumericInput";
import { TextAreaInput } from "../components/TextAreaInput";
import { ValueInput } from "../components/ValueInput";
import styles from "./advancement.module.css";
import { useSyncCheckboxes } from "../../../utils/useSyncCheckboxes";

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
	const [individualXp, checkboxSetter] = useSyncCheckboxes(xp, setXp, 20);

	return (
		<>
			<section className={`${styles.advancementXp} advancement-xp`}>
				<h3>Advancement</h3>
				<FormSection
					label="XP"
					className="sr-only"
					fields={id => <NumericInput className="sr-only" id={id} value={xp} setValue={setXp} />}
				/>
				<div className={`${styles.xp} ${styles.xp1}`}>
					<Checkbox checked={individualXp[0]} setChecked={checkboxSetter(0)} />
					<Checkbox checked={individualXp[1]} setChecked={checkboxSetter(1)} />
					<Checkbox checked={individualXp[2]} setChecked={checkboxSetter(2)} />
					<Checkbox checked={individualXp[3]} setChecked={checkboxSetter(3)} />
					<Checkbox checked={individualXp[4]} setChecked={checkboxSetter(4)} />
				</div>
				<div className={`${styles.xp} ${styles.xp2}`}>
					<Checkbox checked={individualXp[5]} setChecked={checkboxSetter(5)} />
					<Checkbox checked={individualXp[6]} setChecked={checkboxSetter(6)} />
					<Checkbox checked={individualXp[7]} setChecked={checkboxSetter(7)} />
					<Checkbox checked={individualXp[8]} setChecked={checkboxSetter(8)} />
					<Checkbox checked={individualXp[9]} setChecked={checkboxSetter(9)} />
				</div>
				<div className={`${styles.xp} ${styles.xp3}`}>
					<Checkbox checked={individualXp[10]} setChecked={checkboxSetter(10)} />
					<Checkbox checked={individualXp[11]} setChecked={checkboxSetter(11)} />
					<Checkbox checked={individualXp[12]} setChecked={checkboxSetter(12)} />
					<Checkbox checked={individualXp[13]} setChecked={checkboxSetter(13)} />
					<Checkbox checked={individualXp[14]} setChecked={checkboxSetter(14)} />
				</div>
				<div className={`${styles.xp} ${styles.xp4}`}>
					<Checkbox checked={individualXp[15]} setChecked={checkboxSetter(15)} />
					<Checkbox checked={individualXp[16]} setChecked={checkboxSetter(16)} />
					<Checkbox checked={individualXp[17]} setChecked={checkboxSetter(17)} />
					<Checkbox checked={individualXp[18]} setChecked={checkboxSetter(18)} />
					<Checkbox checked={individualXp[19]} setChecked={checkboxSetter(19)} />
				</div>
				<FormSection
					label="Advancement 1"
					className="sr-only"
					fields={id => <ValueInput id={id} value={namedAdvancement0} setValue={setNamedAdvancement0} />}
				/>
				<FormSection
					label="Advancement 2"
					className="sr-only"
					fields={id => <ValueInput id={id} value={namedAdvancement1} setValue={setNamedAdvancement1} />}
				/>
				<FormSection
					label="Advancement 3"
					className="sr-only"
					fields={id => <ValueInput id={id} value={namedAdvancement2} setValue={setNamedAdvancement2} />}
				/>
				<FormSection
					label="Advancement 4"
					className="sr-only"
					fields={id => <ValueInput id={id} value={namedAdvancement3} setValue={setNamedAdvancement3} />}
				/>
			</section>

			<div className="advancement-perks vertical-editor">
				<FormSection label="Perks" fields={id => <TextAreaInput id={id} value={perks} setValue={setPerks} />} />
			</div>
			<section className={`${styles.advancementGrit} advancement-grit`}>
				<h3>Grit</h3>
				<FormSection
					label="Vigor"
					className={styles.vigor}
					fields={id => <NumericInput id={id} className={styles.vigor} value={vigor} setValue={setVigor} />}
				/>
				<FormSection
					label="Agility"
					className={styles.agility}
					fields={id => (
						<NumericInput id={id} className={styles.agility} value={agility} setValue={setAgility} />
					)}
				/>
			</section>
			<section className={`${styles.advancementNerve} advancement-nerve`}>
				<h3>Nerve</h3>
				<FormSection
					label="Insight"
					className={styles.insight}
					fields={id => (
						<NumericInput id={id} className={styles.insight} value={insight} setValue={setInsight} />
					)}
				/>
				<FormSection
					label="Presence"
					className={styles.presence}
					fields={id => (
						<NumericInput id={id} className={styles.presence} value={presence} setValue={setPresence} />
					)}
				/>
			</section>
		</>
	);
};
