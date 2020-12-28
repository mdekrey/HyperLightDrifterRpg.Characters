import React from "react";
import {
	AbilitiesSection,
	AdvancementSection,
	ConditionsSection,
	CorruptionSection,
	DashesSection,
	DisciplineSection,
	EquipmentSection,
	FeaturesSection,
	IdentitySection,
	ResourcesSection,
} from "./sections";
import {
	Drifter,
	identityLens,
	featuresLens,
	resourcesLens,
	disciplineLens,
	dashesLens,
	conditionsLens,
	equipmentLens,
	advancementLens,
	abilitiesLens,
	corruptionLens,
} from "../rules";
import { Setter, useLens } from "../../utils/useLens";

export function Editor({ drifter, setDrifter }: { drifter: Readonly<Drifter>; setDrifter: Setter<Drifter> }) {
	const identity = useLens([drifter, setDrifter], identityLens);
	const features = useLens([drifter, setDrifter], featuresLens);
	const resources = useLens([drifter, setDrifter], resourcesLens);
	const discipline = useLens([drifter, setDrifter], disciplineLens);
	const dashes = useLens([drifter, setDrifter], dashesLens);
	const conditions = useLens([drifter, setDrifter], conditionsLens);
	const equipment = useLens([drifter, setDrifter], equipmentLens);
	const advancement = useLens([drifter, setDrifter], advancementLens);
	const abilities = useLens([drifter, setDrifter], abilitiesLens);
	const corruption = useLens([drifter, setDrifter], corruptionLens);

	return (
		<>
			<IdentitySection identity={identity} />
			<FeaturesSection features={features} />
			<ResourcesSection resources={resources} />
			<DisciplineSection discipline={discipline} />
			<DashesSection dashes={dashes} />
			<ConditionsSection conditions={conditions} />
			<EquipmentSection equipment={equipment} />
			<AdvancementSection advancement={advancement} />
			<AbilitiesSection abilities={abilities} />
			<CorruptionSection corruption={corruption} />
		</>
	);
}
