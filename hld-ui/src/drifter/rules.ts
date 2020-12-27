import { createLens } from "../utils/useLens";

export type Drifter = {
	identity: {
		name: string;
		pronouns: string;
		description: string;
		mission: string;
	};
	features: {};
	resources: {};
	discipline: {};
	dashes: {};
	conditions: {};
	equipment: {};
	advancement: {};
	abilities: {};
	corruption: {};
};

export const defaultDrifter: Drifter = {
	identity: {
		name: "",
		pronouns: "",
		description: "",
		mission: "",
	},
	features: {},
	resources: {},
	discipline: {},
	dashes: {},
	conditions: {},
	equipment: {},
	advancement: {},
	abilities: {},
	corruption: {},
};

export type DrifterIdentity = Drifter["identity"];
export const identityLens = createLens(
	(d: Drifter) => d.identity,
	(d, next) => (d.identity = next)
);
export type DrifterFeatures = Drifter["features"];
export const featuresLens = createLens(
	(d: Drifter) => d.features,
	(d, next) => (d.features = next)
);
export type DrifterResources = Drifter["resources"];
export const resourcesLens = createLens(
	(d: Drifter) => d.resources,
	(d, next) => (d.resources = next)
);
export type DrifterDiscipline = Drifter["discipline"];
export const disciplineLens = createLens(
	(d: Drifter) => d.discipline,
	(d, next) => (d.discipline = next)
);
export type DrifterDashes = Drifter["dashes"];
export const dashesLens = createLens(
	(d: Drifter) => d.dashes,
	(d, next) => (d.dashes = next)
);
export type DrifterConditions = Drifter["conditions"];
export const conditionsLens = createLens(
	(d: Drifter) => d.conditions,
	(d, next) => (d.conditions = next)
);
export type DrifterEquipment = Drifter["equipment"];
export const equipmentLens = createLens(
	(d: Drifter) => d.equipment,
	(d, next) => (d.equipment = next)
);
export type DrifterAdvancement = Drifter["advancement"];
export const advancementLens = createLens(
	(d: Drifter) => d.advancement,
	(d, next) => (d.advancement = next)
);
export type DrifterAbilities = Drifter["abilities"];
export const abilitiesLens = createLens(
	(d: Drifter) => d.abilities,
	(d, next) => (d.abilities = next)
);
export type DrifterCorruption = Drifter["corruption"];
export const corruptionLens = createLens(
	(d: Drifter) => d.corruption,
	(d, next) => (d.corruption = next)
);
