import React from "react";
import { createLens, Stateful, useLens } from "../../../utils/useLens";
import { DrifterDashes } from "../../rules";
import { FormSection } from "../components/FormSection";
import { NumericInput } from "../components/NumericInput";
import styles from "./dashes.module.css";
import { useSyncCheckboxes } from "../../../utils/useSyncCheckboxes";
import { Checkbox } from "../components/Checkbox";

const currentLens = createLens(
	(i: DrifterDashes) => i.current,
	(i, next) => (i.current = next)
);
const maxLens = createLens(
	(i: DrifterDashes) => i.max,
	(i, next) => (i.max = next)
);

export const DashesSection = ({ dashes }: { dashes: Stateful<DrifterDashes> }) => {
	const [current, internalSetCurrent] = useLens(dashes, currentLens);
	const [max, internalSetMax] = useLens(dashes, maxLens);
	const [individualDashes, dashesSetter] = useSyncCheckboxes(current, internalSetCurrent, 4);
	const [individualDashUpgrades, dashUpgradesSetter] = useSyncCheckboxes(max - 2, v => internalSetMax(v + 2), 2);

	return (
		<div className={`dashes ${styles.dashes}`}>
			<h3>Dashes</h3>

			<span>{/* TODO - icon */}</span>

			{individualDashes.map((v, index) => (
				<div key={index} className={`${styles.dash} ${styles["dash" + (index + 1).toFixed(0)]}`}>
					{index >= 2 ? (
						<div className={styles.dashCheckboxUpgradeContainer}>
							<Checkbox
								checked={individualDashUpgrades[index - 2]}
								setChecked={dashUpgradesSetter(index - 2)}
								className={styles.dashCheckboxUpgrade}
							/>
						</div>
					) : null}
					{index < max ? (
						<div className={styles.dashCheckboxContainer}>
							<Checkbox checked={v} setChecked={dashesSetter(index)} className={styles.dashCheckbox} />
						</div>
					) : null}
				</div>
			))}

			<FormSection
				label="Current Dashes"
				className="sr-only"
				fields={id => <NumericInput id={id} className="sr-only" value={current} setValue={setCurrent} />}
			/>
			<FormSection
				label="Max Dashes"
				className="sr-only"
				fields={id => <NumericInput id={id} className="sr-only" value={max} setValue={setMax} />}
			/>
		</div>
	);

	function setCurrent(d: number) {
		if (d <= max && d >= 0) internalSetCurrent(d);
	}

	function setMax(d: number) {
		if (d > 4 || d < 2) return;

		if (current > d) dashes[1]({ current: d, max: d });
		else internalSetMax(d);
	}
};
