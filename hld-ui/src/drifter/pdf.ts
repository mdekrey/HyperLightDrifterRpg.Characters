import { Drifter } from "./rules";

export type SheetHLDv5 = {
	"Dash-4-background": boolean;
	"DashUpgrade-4-show": boolean;
	"Dash-4-background 2": boolean;
	"DashUpgrade-4-show 2": boolean;
	"Corruption-1": boolean;
	"Boost-Nerve": string;
	"Att-Vigor": string;
	"Att-Agility": string;
	"woe-01": boolean;
	"woe-02": boolean;
	"woe-05": boolean;
	"woe-03": boolean;
	"woe-06": boolean;
	"woe-09": boolean;
	"woe-10": boolean;
	"woe-08": boolean;
	"woe-04": boolean;
	"Att-Insight": string;
	"Att-Presence": string;
	Trait: string;
	Knack: string;
	Conditions: string;
	Talents: string;
	Inventory: string;
	Bits: string;
	Components: string;
	Ingredients: string;
	Name: string;
	Class: string;
	"Specialized Disciplines": string;
	"Combat-Fortune": string;
	"Combat-Temperance": string;
	"Social-Fortune": string;
	"Social-Temperance": string;
	"Manipulate-Fortune": string;
	"Manipulate-Temperance": string;
	"Exploration-Fortune": string;
	"Exploration-Temperance": string;
	"Survival-Fortune": string;
	"Survival-Temperance": string;
	"Health Current": string;
	"Energy Current": string;
	"Dash-1-fill": boolean;
	"Dash-2-fill": boolean;
	"Dash-4-fill": boolean;
	"DashUpgrade-4-hide": boolean;
	"xp-1": boolean;
	"xp-1-1": boolean;
	"xp-1-3": boolean;
	"xp-1-2": boolean;
	"xp-1-4": boolean;
	"Energy Max": string;
	"Talent-Passive-Effect": string;
	"Talents 3": string;
	"Talents 4": string;
	"Talents 5": string;
	"Talents 6": string;
	"Talents 7": string;
	"Corruption-2": boolean;
	"Corruption-3": boolean;
	"Corruption-4": boolean;
	"Corruption-5": boolean;
	"Corruption-6": boolean;
	"Corruption-7": boolean;
	"Corruption-8": boolean;
	"Corruption-9": boolean;
	"Corruption-10": boolean;
	"Corruption-11": boolean;
	"Corruption-1f 12": boolean;
	Pronouns: string;
	"Character Description": string;
	Mission: string;
	"Advancements Perks": string;
	"Woe-Fortune": string;
	"Woe-Temperance": string;
	"Advancement Tier-1": string;
	xp0: boolean;
	"xp-10": boolean;
	"xp-11": boolean;
	"xp-12": boolean;
	"xp-13": boolean;
	xp1: boolean;
	"xp-14": boolean;
	"xp-15": boolean;
	"xp-16": boolean;
	"xp-17": boolean;
	xp2: boolean;
	"xp-18": boolean;
	"xp-19": boolean;
	"xp-110": boolean;
	"xp-111": boolean;
	"Boost-Grit": string;
	"Advancement Tier0": string;
	"Advancement Tier1": string;
	"Advancement Tier2": string;
	"Resistance Value": string;
	"Armor Value": string;
	"woe-11": boolean;
	"woe-12": boolean;
	"woe-07": boolean;
	"Health Max": string;
	"DashUpgrade-4-hide 2": boolean;
	"Dash-4-fill 2": boolean;
	"Button 60": boolean;
	"HP-1": boolean;
	"HP-10": boolean;
	"HP-11": boolean;
	"HP-12": boolean;
	"HP-13": boolean;
	"HP-14": boolean;
	"HP-15": boolean;
	"HP-16": boolean;
	"HP-17": boolean;
	"HP-18": boolean;
	"HP-19": boolean;
	"HP-2": boolean;
	"HP-20": boolean;
	"HP-21": boolean;
	"HP-22": boolean;
	"HP-23": boolean;
	"HP-24": boolean;
	"HP-3": boolean;
	"HP-4": boolean;
	"HP-5": boolean;
	"HP-6": boolean;
	"HP-7": boolean;
	"HP-8": boolean;
	"HP-9": boolean;
	"Energy-11": boolean;
	"Energy-10": boolean;
	"Energy-1": boolean;
	"Energy-9": boolean;
	"Energy-2": boolean;
	"Energy-8": boolean;
	"Energy-7": boolean;
	"Energy-6": boolean;
	"Energy-5": boolean;
	"Energy-4": boolean;
	"Energy-3": boolean;
	"Energy-24": boolean;
	"Energy-23": boolean;
	"Energy-22": boolean;
	"Energy-21": boolean;
	"Energy-20": boolean;
	"Energy-19": boolean;
	"Energy-18": boolean;
	"Energy-17": boolean;
	"Energy-16": boolean;
	"Energy-15": boolean;
	"Energy-14": boolean;
	"Energy-13": boolean;
	"Energy-12": boolean;
	"EnergyMax-8": boolean;
	"EnergyMax-9": boolean;
	"EnergyMax-1": boolean;
	"EnergyMax-10": boolean;
	"EnergyMax-11": boolean;
	"EnergyMax-12": boolean;
	"EnergyMax-13": boolean;
	"EnergyMax-14": boolean;
	"EnergyMax-15": boolean;
	"EnergyMax-16": boolean;
	"EnergyMax-17": boolean;
	"EnergyMax-18": boolean;
	"EnergyMax-19": boolean;
	"EnergyMax-2": boolean;
	"EnergyMax-20": boolean;
	"EnergyMax-21": boolean;
	"EnergyMax-22": boolean;
	"EnergyMax-23": boolean;
	"EnergyMax-24": boolean;
	"EnergyMax-3": boolean;
	"EnergyMax-4": boolean;
	"EnergyMax-5": boolean;
	"EnergyMax-6": boolean;
	"EnergyMax-7": boolean;
	"HealthMax-1": boolean;
	"HealthMax-10": boolean;
	"HealthMax-11": boolean;
	"HealthMax-12": boolean;
	"HealthMax-13": boolean;
	"HealthMax-14": boolean;
	"HealthMax-15": boolean;
	"HealthMax-16": boolean;
	"HealthMax-17": boolean;
	"HealthMax-18": boolean;
	"HealthMax-19": boolean;
	"HealthMax-2": boolean;
	"HealthMax-20": boolean;
	"HealthMax-21": boolean;
	"HealthMax-22": boolean;
	"HealthMax-23": boolean;
	"HealthMax-24": boolean;
	"HealthMax-3": boolean;
	"HealthMax-4": boolean;
	"HealthMax-5": boolean;
	"HealthMax-6": boolean;
	"HealthMax-7": boolean;
	"HealthMax-8": boolean;
	"HealthMax-9": boolean;
	"Talent-Passive-Title": string;
	"Talent-1-Title": string;
	"Talent-2-Title": string;
	"Talent-3-Title": string;
	"Talent-4-Title": string;
	"Talent-Dash-Title": string;
	"Inventory 2": string;
	"Conditions 2": string;
	Portrait: boolean;
};

export function drifterToPdf(drifter: Drifter): Partial<SheetHLDv5> {
	return {
		Name: drifter.identity.name,
		Pronouns: drifter.identity.pronouns,
		"Character Description": drifter.identity.description,
		Mission: drifter.identity.mission,
		Class: drifter.features.drifterClass,
		"Specialized Disciplines": drifter.features.speciality,
		Trait: drifter.features.trait,
		Knack: drifter.features.knack,
		"Health Current": `${drifter.resources.health.current}`,
		"Health Max": `${drifter.resources.health.max}`,
		"Energy Current": `${drifter.resources.energy.current}`,
		"Energy Max": `${drifter.resources.energy.max}`,
	};
}

export const pdfEndpoint = "/api/FillSheet";
