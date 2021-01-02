import { Drifter } from "./rules";

export type SheetHLDv5 = {
	"Advancement Tier0": PdfField<string>;
	"Advancement Tier1": PdfField<string>;
	"Advancement Tier-1": PdfField<string>;
	"Advancement Tier2": PdfField<string>;
	"Advancements Perks": PdfField<string>;
	"Armor Value": PdfField<string>;
	"Att-Agility": PdfField<string>;
	"Att-Insight": PdfField<string>;
	"Att-Presence": PdfField<string>;
	"Att-Vigor": PdfField<string>;
	Bits: PdfField<string>;
	"Boost-Grit": PdfField<string>;
	"Boost-Nerve": PdfField<string>;
	"Button 60": PdfField<boolean>;
	"Character Description": PdfField<string>;
	Class: PdfField<string>;
	"Combat-Fortune": PdfField<string>;
	"Combat-Temperance": PdfField<string>;
	Components: PdfField<string>;
	Conditions: PdfField<string>;
	"Conditions 2": PdfField<string>;
	"Corruption-1": PdfField<boolean>;
	"Corruption-10": PdfField<boolean>;
	"Corruption-11": PdfField<boolean>;
	"Corruption-1f 12": PdfField<boolean>;
	"Corruption-2": PdfField<boolean>;
	"Corruption-3": PdfField<boolean>;
	"Corruption-4": PdfField<boolean>;
	"Corruption-5": PdfField<boolean>;
	"Corruption-6": PdfField<boolean>;
	"Corruption-7": PdfField<boolean>;
	"Corruption-8": PdfField<boolean>;
	"Corruption-9": PdfField<boolean>;
	"Dash-1-fill": PdfField<boolean>;
	"Dash-2-fill": PdfField<boolean>;
	"Dash-4-background": PdfField<boolean>;
	"Dash-4-background 2": PdfField<boolean>;
	"Dash-4-fill": PdfField<boolean>;
	"Dash-4-fill 2": PdfField<boolean>;
	"DashUpgrade-4-hide": PdfField<boolean>;
	"DashUpgrade-4-hide 2": PdfField<boolean>;
	"DashUpgrade-4-show": PdfField<boolean>;
	"DashUpgrade-4-show 2": PdfField<boolean>;
	"Energy Current": PdfField<string>;
	"Energy Max": PdfField<string>;
	"Energy-1": PdfField<boolean>;
	"Energy-10": PdfField<boolean>;
	"Energy-11": PdfField<boolean>;
	"Energy-12": PdfField<boolean>;
	"Energy-13": PdfField<boolean>;
	"Energy-14": PdfField<boolean>;
	"Energy-15": PdfField<boolean>;
	"Energy-16": PdfField<boolean>;
	"Energy-17": PdfField<boolean>;
	"Energy-18": PdfField<boolean>;
	"Energy-19": PdfField<boolean>;
	"Energy-2": PdfField<boolean>;
	"Energy-20": PdfField<boolean>;
	"Energy-21": PdfField<boolean>;
	"Energy-22": PdfField<boolean>;
	"Energy-23": PdfField<boolean>;
	"Energy-24": PdfField<boolean>;
	"Energy-3": PdfField<boolean>;
	"Energy-4": PdfField<boolean>;
	"Energy-5": PdfField<boolean>;
	"Energy-6": PdfField<boolean>;
	"Energy-7": PdfField<boolean>;
	"Energy-8": PdfField<boolean>;
	"Energy-9": PdfField<boolean>;
	"EnergyMax-1": PdfField<boolean>;
	"EnergyMax-10": PdfField<boolean>;
	"EnergyMax-11": PdfField<boolean>;
	"EnergyMax-12": PdfField<boolean>;
	"EnergyMax-13": PdfField<boolean>;
	"EnergyMax-14": PdfField<boolean>;
	"EnergyMax-15": PdfField<boolean>;
	"EnergyMax-16": PdfField<boolean>;
	"EnergyMax-17": PdfField<boolean>;
	"EnergyMax-18": PdfField<boolean>;
	"EnergyMax-19": PdfField<boolean>;
	"EnergyMax-2": PdfField<boolean>;
	"EnergyMax-20": PdfField<boolean>;
	"EnergyMax-21": PdfField<boolean>;
	"EnergyMax-22": PdfField<boolean>;
	"EnergyMax-23": PdfField<boolean>;
	"EnergyMax-24": PdfField<boolean>;
	"EnergyMax-3": PdfField<boolean>;
	"EnergyMax-4": PdfField<boolean>;
	"EnergyMax-5": PdfField<boolean>;
	"EnergyMax-6": PdfField<boolean>;
	"EnergyMax-7": PdfField<boolean>;
	"EnergyMax-8": PdfField<boolean>;
	"EnergyMax-9": PdfField<boolean>;
	"Exploration-Fortune": PdfField<string>;
	"Exploration-Temperance": PdfField<string>;
	"Health Current": PdfField<string>;
	"Health Max": PdfField<string>;
	"HealthMax-1": PdfField<boolean>;
	"HealthMax-10": PdfField<boolean>;
	"HealthMax-11": PdfField<boolean>;
	"HealthMax-12": PdfField<boolean>;
	"HealthMax-13": PdfField<boolean>;
	"HealthMax-14": PdfField<boolean>;
	"HealthMax-15": PdfField<boolean>;
	"HealthMax-16": PdfField<boolean>;
	"HealthMax-17": PdfField<boolean>;
	"HealthMax-18": PdfField<boolean>;
	"HealthMax-19": PdfField<boolean>;
	"HealthMax-2": PdfField<boolean>;
	"HealthMax-20": PdfField<boolean>;
	"HealthMax-21": PdfField<boolean>;
	"HealthMax-22": PdfField<boolean>;
	"HealthMax-23": PdfField<boolean>;
	"HealthMax-24": PdfField<boolean>;
	"HealthMax-3": PdfField<boolean>;
	"HealthMax-4": PdfField<boolean>;
	"HealthMax-5": PdfField<boolean>;
	"HealthMax-6": PdfField<boolean>;
	"HealthMax-7": PdfField<boolean>;
	"HealthMax-8": PdfField<boolean>;
	"HealthMax-9": PdfField<boolean>;
	"HP-1": PdfField<boolean>;
	"HP-10": PdfField<boolean>;
	"HP-11": PdfField<boolean>;
	"HP-12": PdfField<boolean>;
	"HP-13": PdfField<boolean>;
	"HP-14": PdfField<boolean>;
	"HP-15": PdfField<boolean>;
	"HP-16": PdfField<boolean>;
	"HP-17": PdfField<boolean>;
	"HP-18": PdfField<boolean>;
	"HP-19": PdfField<boolean>;
	"HP-2": PdfField<boolean>;
	"HP-20": PdfField<boolean>;
	"HP-21": PdfField<boolean>;
	"HP-22": PdfField<boolean>;
	"HP-23": PdfField<boolean>;
	"HP-24": PdfField<boolean>;
	"HP-3": PdfField<boolean>;
	"HP-4": PdfField<boolean>;
	"HP-5": PdfField<boolean>;
	"HP-6": PdfField<boolean>;
	"HP-7": PdfField<boolean>;
	"HP-8": PdfField<boolean>;
	"HP-9": PdfField<boolean>;
	Ingredients: PdfField<string>;
	Inventory: PdfField<string>;
	"Inventory 2": PdfField<string>;
	Knack: PdfField<string>;
	"Manipulate-Fortune": PdfField<string>;
	"Manipulate-Temperance": PdfField<string>;
	Mission: PdfField<string>;
	Name: PdfField<string>;
	Portrait: PdfField<boolean>;
	Pronouns: PdfField<string>;
	"Resistance Value": PdfField<string>;
	"Social-Fortune": PdfField<string>;
	"Social-Temperance": PdfField<string>;
	"Specialized Disciplines": PdfField<string>;
	"Survival-Fortune": PdfField<string>;
	"Survival-Temperance": PdfField<string>;
	"Talent-1-Title": PdfField<string>;
	"Talent-2-Title": PdfField<string>;
	"Talent-3-Title": PdfField<string>;
	"Talent-4-Title": PdfField<string>;
	"Talent-Dash-Title": PdfField<string>;
	"Talent-Passive-Effect": PdfField<string>;
	"Talent-Passive-Title": PdfField<string>;
	Talents: PdfField<string>;
	"Talents 3": PdfField<string>;
	"Talents 4": PdfField<string>;
	"Talents 5": PdfField<string>;
	"Talents 6": PdfField<string>;
	"Talents 7": PdfField<string>;
	Trait: PdfField<string>;
	"woe-01": PdfField<boolean>;
	"woe-02": PdfField<boolean>;
	"woe-03": PdfField<boolean>;
	"woe-04": PdfField<boolean>;
	"woe-05": PdfField<boolean>;
	"woe-06": PdfField<boolean>;
	"woe-07": PdfField<boolean>;
	"woe-08": PdfField<boolean>;
	"woe-09": PdfField<boolean>;
	"woe-10": PdfField<boolean>;
	"woe-11": PdfField<boolean>;
	"woe-12": PdfField<boolean>;
	"Woe-Fortune": PdfField<string>;
	"Woe-Temperance": PdfField<string>;
	xp0: PdfField<boolean>;
	xp1: PdfField<boolean>;
	"xp-1": PdfField<boolean>;
	"xp-10": PdfField<boolean>;
	"xp-11": PdfField<boolean>;
	"xp-1-1": PdfField<boolean>;
	"xp-110": PdfField<boolean>;
	"xp-111": PdfField<boolean>;
	"xp-12": PdfField<boolean>;
	"xp-1-2": PdfField<boolean>;
	"xp-13": PdfField<boolean>;
	"xp-1-3": PdfField<boolean>;
	"xp-14": PdfField<boolean>;
	"xp-1-4": PdfField<boolean>;
	"xp-15": PdfField<boolean>;
	"xp-16": PdfField<boolean>;
	"xp-17": PdfField<boolean>;
	"xp-18": PdfField<boolean>;
	"xp-19": PdfField<boolean>;
	xp2: PdfField<boolean>;
};

export type PdfField<T> = {
	value?: T;
	generateAppearance?: boolean;
	visible?: boolean | number;
};

const orderedHealth = Array(24)
	.fill(0)
	.map((_, i) => `HP-${i + 1}` as keyof SheetHLDv5);
const orderedHealthMax = Array(24)
	.fill(0)
	.map((_, i) => `HealthMax-${i + 1}` as keyof SheetHLDv5);
const orderedEnergy = Array(24)
	.fill(0)
	.map((_, i) => `Energy-${i + 1}` as keyof SheetHLDv5);
const orderedEnergyMax = Array(24)
	.fill(0)
	.map((_, i) => `EnergyMax-${i + 1}` as keyof SheetHLDv5);
function checkLevels(levelCheckboxes: Array<keyof SheetHLDv5>, value: number) {
	return levelCheckboxes.reduce((prev, next, index) => {
		prev[next] = { visible: index + 1 === value ? 4 : 1 };
		return prev;
	}, {} as Partial<SheetHLDv5>);
}

const woeMeter = Array(12)
	.fill(0)
	.map((_, i) => `woe-${i < 9 ? "0" : ""}${i + 1}` as keyof SheetHLDv5);
function checkboxes(levelCheckboxes: Readonly<Array<keyof SheetHLDv5>>, value: number) {
	return levelCheckboxes.reduce((prev, next, index) => {
		prev[next] = { value: (index < value) as any };
		return prev;
	}, {} as Partial<SheetHLDv5>);
}

const xpMeter = [
	"xp-1",
	"xp-1-1",
	"xp-1-2",
	"xp-1-3",
	"xp-1-4",
	"xp0",
	"xp-10",
	"xp-11",
	"xp-12",
	"xp-13",
	"xp1",
	"xp-14",
	"xp-15",
	"xp-16",
	"xp-17",
	"xp2",
	"xp-18",
	"xp-19",
	"xp-110",
	"xp-111",
] as const;

const corruptionMeter = [
	...Array(11)
		.fill(0)
		.map((_, i) => `Corruption-${i + 1}` as keyof SheetHLDv5),
	"Corruption-1f 12" as const,
];

function newlines(v: string) {
	return v.replace("\r", "").replace("\n", "\r\n");
}

export function drifterToPdf(drifter: Drifter): Partial<SheetHLDv5> {
	return {
		Name: { value: drifter.identity.name, generateAppearance: true },
		Pronouns: { value: drifter.identity.pronouns, generateAppearance: true },
		"Character Description": { value: newlines(drifter.identity.description) },
		Mission: { value: newlines(drifter.identity.mission) },
		Class: { value: drifter.features.drifterClass },
		"Specialized Disciplines": { value: drifter.features.speciality },
		Trait: { value: drifter.features.trait },
		Knack: { value: drifter.features.knack },

		"Health Current": { value: `${drifter.resources.health.current}`, generateAppearance: true },
		"Health Max": { value: `${drifter.resources.health.max}`, generateAppearance: true },
		"Energy Current": { value: `${drifter.resources.energy.current}`, generateAppearance: true },
		"Energy Max": { value: `${drifter.resources.energy.max}`, generateAppearance: true },
		...checkLevels(orderedHealthMax, drifter.resources.health.max),
		...checkLevels(orderedHealth, drifter.resources.health.current),
		...checkLevels(orderedEnergyMax, drifter.resources.energy.max),
		...checkLevels(orderedEnergy, drifter.resources.energy.current),
		"Armor Value": { value: `${drifter.resources.armor}`, generateAppearance: true },
		"Resistance Value": { value: `${drifter.resources.resistance}`, generateAppearance: true },
		"Boost-Grit": { value: `${drifter.resources.grit}`, generateAppearance: true },
		"Boost-Nerve": { value: `${drifter.resources.nerve}`, generateAppearance: true },

		"Combat-Fortune": { value: `${drifter.discipline.combat.fortune}`, generateAppearance: true },
		"Combat-Temperance": { value: `${drifter.discipline.combat.temperance}`, generateAppearance: true },
		"Social-Fortune": { value: `${drifter.discipline.social.fortune}`, generateAppearance: true },
		"Social-Temperance": { value: `${drifter.discipline.social.temperance}`, generateAppearance: true },
		"Manipulate-Fortune": { value: `${drifter.discipline.manipulative.fortune}`, generateAppearance: true },
		"Manipulate-Temperance": { value: `${drifter.discipline.manipulative.temperance}`, generateAppearance: true },
		"Exploration-Fortune": { value: `${drifter.discipline.exploration.fortune}`, generateAppearance: true },
		"Exploration-Temperance": { value: `${drifter.discipline.exploration.temperance}`, generateAppearance: true },
		"Survival-Fortune": { value: `${drifter.discipline.survival.fortune}`, generateAppearance: true },
		"Survival-Temperance": { value: `${drifter.discipline.survival.temperance}`, generateAppearance: true },

		// TODO - current dashes
		"Dash-1-fill": { value: drifter.dashes.current >= 1 },
		"Dash-2-fill": { value: drifter.dashes.current >= 2 },
		"DashUpgrade-4-show": { visible: drifter.dashes.max >= 4 ? 1 : false },
		"Dash-4-background": { visible: drifter.dashes.max >= 4 ? false : true },
		// "Dash-4-fill": { },
		"DashUpgrade-4-hide": { value: drifter.dashes.max >= 4, visible: drifter.dashes.max >= 4 ? false : true },

		"DashUpgrade-4-show 2": { visible: drifter.dashes.max >= 3 ? 1 : false },
		"Dash-4-background 2": { visible: drifter.dashes.max >= 3 ? false : true },
		// "Dash-4-fill 2": { },
		"DashUpgrade-4-hide 2": { value: drifter.dashes.max >= 3, visible: drifter.dashes.max >= 3 ? false : true },

		"Woe-Fortune": { value: `${drifter.conditions.woeThreshold.fortune}`, generateAppearance: true },
		"Woe-Temperance": { value: `${drifter.conditions.woeThreshold.temperance}`, generateAppearance: true },
		...checkboxes(woeMeter, drifter.conditions.woe),
		Conditions: { value: newlines(drifter.conditions.boons) },
		"Conditions 2": { value: newlines(drifter.conditions.burdens) },

		Inventory: { value: newlines(drifter.equipment.gear) },
		"Inventory 2": { value: newlines(drifter.equipment.gear2) },
		Bits: { value: `${drifter.equipment.bits}`, generateAppearance: true },
		Ingredients: { value: `${drifter.equipment.ingredients}`, generateAppearance: true },
		Components: { value: `${drifter.equipment.components}`, generateAppearance: true },

		...checkboxes(xpMeter, drifter.advancement.xp),
		"Advancement Tier-1": { value: drifter.advancement.namedAdvancements[0] || "" },
		"Advancement Tier0": { value: drifter.advancement.namedAdvancements[1] || "" },
		"Advancement Tier1": { value: drifter.advancement.namedAdvancements[2] || "" },
		"Advancement Tier2": { value: drifter.advancement.namedAdvancements[3] || "" },
		"Advancements Perks": { value: newlines(drifter.advancement.perks) },
		"Att-Vigor": { value: `${drifter.advancement.vigor}`, generateAppearance: true },
		"Att-Agility": { value: `${drifter.advancement.agility}`, generateAppearance: true },
		"Att-Insight": { value: `${drifter.advancement.insight}`, generateAppearance: true },
		"Att-Presence": { value: `${drifter.advancement.presence}`, generateAppearance: true },

		Talents: { value: newlines(drifter.abilities.talentList) },
		"Talent-Passive-Effect": { value: newlines(drifter.abilities.passiveTalent.description) },
		"Talent-Passive-Title": { value: drifter.abilities.passiveTalent.title, generateAppearance: true },
		"Talents 3": { value: newlines(drifter.abilities.talent1.description) },
		"Talent-1-Title": { value: drifter.abilities.talent1.title, generateAppearance: true },
		"Talents 4": { value: newlines(drifter.abilities.talent2.description) },
		"Talent-2-Title": { value: drifter.abilities.talent2.title, generateAppearance: true },
		"Talents 5": { value: newlines(drifter.abilities.talent3.description) },
		"Talent-3-Title": { value: drifter.abilities.talent3.title, generateAppearance: true },
		"Talents 6": { value: newlines(drifter.abilities.talent4.description) },
		"Talent-4-Title": { value: drifter.abilities.talent4.title, generateAppearance: true },
		"Talents 7": { value: newlines(drifter.abilities.dashTalent.description) },
		"Talent-Dash-Title": { value: drifter.abilities.dashTalent.title, generateAppearance: true },

		...checkboxes(corruptionMeter, drifter.corruption.corruption),
	};
}

export const pdfEndpoint = "/api/FillSheet";
