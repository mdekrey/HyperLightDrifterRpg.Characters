import React from "react";
import { createLens, Stateful, useLens, Setter } from "../../../utils/useLens";
import { DrifterResources } from "../../rules";
import { FormSection } from "../components/FormSection";
import { NumericInput } from "../components/NumericInput";
import styles from "./resources.module.css";

const healthCurrentLens = createLens(
	(i: DrifterResources) => i.health.current,
	(i, next) => (i.health.current = next)
);
const healthMaxLens = createLens(
	(i: DrifterResources) => i.health.max,
	(i, next) => (i.health.max = next)
);
const energyCurrentLens = createLens(
	(i: DrifterResources) => i.energy.current,
	(i, next) => (i.energy.current = next)
);
const energyMaxLens = createLens(
	(i: DrifterResources) => i.energy.max,
	(i, next) => (i.energy.max = next)
);
const armorLens = createLens(
	(i: DrifterResources) => i.armor,
	(i, next) => (i.armor = next)
);
const resistanceLens = createLens(
	(i: DrifterResources) => i.resistance,
	(i, next) => (i.resistance = next)
);
const gritLens = createLens(
	(i: DrifterResources) => i.grit,
	(i, next) => (i.grit = next)
);
const nerveLens = createLens(
	(i: DrifterResources) => i.nerve,
	(i, next) => (i.nerve = next)
);

function Meter({
	current,
	max,
	setCurrent,
	setMax,
	label,
	className = "",
}: {
	current: number;
	max: number;
	setCurrent: Setter<number>;
	setMax: Setter<number>;
	label: string;
	className?: string;
}) {
	return (
		<section className={`${className} ${styles.resourceMeter}`}>
			<h3>{label}</h3>
			<div className={styles.meter}>
				{Array(12)
					.fill(0)
					.map((_, index) => 12 + index)
					.map(index => (
						<div
							key={index}
							className={current > index ? `bg-pink` : max > index ? `bg-pink-dim` : `bg-black`}
						/>
					))}
				{Array(12)
					.fill(0)
					.map((_, index) => index)
					.map(index => (
						<div
							key={index}
							className={current > index ? `bg-pink` : max > index ? `bg-pink-dim` : `bg-black`}
						/>
					))}
			</div>
			<FormSection
				label={`Current ${label}`}
				className="sr-only"
				fields={id => <NumericInput id={id} className={styles.current} value={current} setValue={setCurrent} />}
			/>
			<FormSection
				label={`Max ${label}`}
				className="sr-only"
				fields={id => (
					<>
						<label htmlFor={id} aria-hidden={true} className={styles.maxLabel}>
							Max
						</label>
						<NumericInput id={id} className={styles.max} value={max} setValue={setMax} />
					</>
				)}
			/>
		</section>
	);
}

export const ResourcesSection = ({ resources }: { resources: Stateful<DrifterResources> }) => {
	const [healthCurrent, setHealthCurrent] = useLens(resources, healthCurrentLens);
	const [healthMax, setHealthMax] = useLens(resources, healthMaxLens);
	const [energyCurrent, setEnergyCurrent] = useLens(resources, energyCurrentLens);
	const [energyMax, setEnergyMax] = useLens(resources, energyMaxLens);
	const [armor, setArmor] = useLens(resources, armorLens);
	const [resistance, setResistance] = useLens(resources, resistanceLens);
	const [grit, setGrit] = useLens(resources, gritLens);
	const [nerve, setNerve] = useLens(resources, nerveLens);

	return (
		<>
			<Meter
				className="resource-health"
				current={healthCurrent}
				max={healthMax}
				setCurrent={setHealthCurrent}
				setMax={setHealthMax}
				label="Health"
			/>
			<Meter
				className="resource-energy"
				current={energyCurrent}
				max={energyMax}
				setCurrent={setEnergyCurrent}
				setMax={setEnergyMax}
				label="Energy"
			/>
			<div className={`${styles.reverse} resource-armor`}>
				<FormSection label="Armor" fields={id => <NumericInput id={id} value={armor} setValue={setArmor} />} />
			</div>
			<div className={`${styles.reverse} resource-resistance`}>
				<FormSection
					label="Resistance"
					fields={id => <NumericInput id={id} value={resistance} setValue={setResistance} />}
				/>
			</div>
			<section className={`${styles.resourceBoost} resource-boost`}>
				<h3>Boost</h3>
				<div className={styles.reverse}>
					<FormSection label="Grit" fields={id => <NumericInput id={id} value={grit} setValue={setGrit} />} />
				</div>
				<div className={styles.reverse}>
					<FormSection
						label="Nerve"
						fields={id => <NumericInput id={id} value={nerve} setValue={setNerve} />}
					/>
				</div>
			</section>
		</>
	);
};
