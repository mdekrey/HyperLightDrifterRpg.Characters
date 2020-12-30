import { createLens } from "../utils/useLens";

export type Drifter = {
	identity: {
		name: string;
		pronouns: string;
		description: string;
		mission: string;
	};
	features: {
		drifterClass: string;
		speciality: string;
		trait: string;
		knack: string;
	};
	resources: {
		health: { current: number; max: number };
		energy: { current: number; max: number };
		grit: number;
		nerve: number;
		armor: number;
		resistance: number;
	};
	discipline: {
		combat: Thresholds;
		social: Thresholds;
		manipulative: Thresholds;
		exploration: Thresholds;
		survival: Thresholds;
	};
	dashes: {
		current: number;
		max: number;
	};
	conditions: {
		woeThreshold: Thresholds;
		woe: number;
		boons: string;
		burdens: string;
	};
	equipment: {
		gear: string;
		gear2: string;
		bits: number;
		ingredients: number;
		components: number;
	};
	advancement: {
		xp: number;
		namedAdvancements: string[];
		perks: string;
		vigor: number;
		agility: number;
		insight: number;
		presence: number;
	};
	abilities: {
		talentList: string;
		passiveTalent: Talent;
		talent1: Talent;
		talent2: Talent;
		talent3: Talent;
		talent4: Talent;
		dashTalent: Talent;
	};
	corruption: {
		corruption: number;
	};
};

export type Thresholds = {
	fortune: number;
	temperance: number;
};

export type Talent = {
	title: string;
	description: string;
};

export const defaultDrifter: Drifter = {
	identity: {
		name: "",
		pronouns: "",
		description: "",
		mission: "",
	},
	features: {
		drifterClass: "",
		speciality: "",
		trait: "",
		knack: "",
	},
	resources: {
		health: { current: 10, max: 12 },
		energy: { current: 10, max: 12 },
		armor: 0,
		resistance: 0,
		grit: 1,
		nerve: 2,
	},
	discipline: {
		combat: { fortune: 18, temperance: 12 },
		social: { fortune: 18, temperance: 12 },
		manipulative: { fortune: 18, temperance: 12 },
		exploration: { fortune: 18, temperance: 12 },
		survival: { fortune: 18, temperance: 12 },
	},
	dashes: {
		current: 2,
		max: 2,
	},
	conditions: {
		woeThreshold: { fortune: 17, temperance: 14 },
		woe: 0,
		boons: "",
		burdens: "",
	},
	equipment: {
		gear: "",
		gear2: "",
		bits: 0,
		ingredients: 0,
		components: 0,
	},
	advancement: {
		xp: 0,
		namedAdvancements: [],
		perks: "",
		vigor: 0,
		agility: 0,
		insight: 0,
		presence: 0,
	},
	abilities: {
		talentList: "",
		dashTalent: { title: "", description: "" },
		passiveTalent: { title: "", description: "" },
		talent1: { title: "", description: "" },
		talent2: { title: "", description: "" },
		talent3: { title: "", description: "" },
		talent4: { title: "", description: "" },
	},
	corruption: {
		corruption: 0,
	},
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
