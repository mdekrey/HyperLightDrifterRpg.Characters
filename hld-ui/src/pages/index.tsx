import React from "react";
import { Helmet } from "react-helmet";
import { ajax } from "rxjs/ajax";
import { map, tap } from "rxjs/operators";
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
} from "../drifter/editor/sections";
import { drifterToPdf, pdfEndpoint } from "../drifter/pdf";
import {
	defaultDrifter,
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
} from "../drifter/rules";
import { Button, buttonStyles } from "../style/button";
import { useLens } from "../utils/useLens";
import { useLocalstorageState } from "../utils/useLocalstorageState";
import { downloadBlob } from "../utils/downloadBlob";
import { isSuccess, isFailure } from "../utils/delayedProgress";
import { neverEver } from "../utils/neverEver";
import { useDefaultCancelableEvent } from "../utils/useDefaultCancelableEvent";

const IndexPage = () => {
	const [drifter, innerSetDrifter] = useLocalstorageState("editor", defaultDrifter);
	const [savingState, saveDrifter, resetSaveDrifter] = useDefaultCancelableEvent(downloadDrifterPdf, []);

	const setDrifter = React.useCallback<typeof innerSetDrifter>(
		drifter => {
			innerSetDrifter(drifter);
			// also clear saving state
			resetSaveDrifter();
		},
		[innerSetDrifter, resetSaveDrifter]
	);
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
			<Helmet title="Hyper Light Drifter Character Sheet" />
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

			<div className="py-3 px-4 sm:p-6 sm:flex sm:flex-row sm:justify-end sm:items-center">
				{savingState === undefined ? (
					<Button className={buttonStyles.green} onClick={() => saveDrifter(drifter)}>
						Generate
					</Button>
				) : savingState === "progress" ? (
					<Button className={`${buttonStyles.green} opacity-25`} disabled={true}>
						Working...
					</Button>
				) : isSuccess(savingState) ? (
					<>
						<span>Downloaded.</span>
						<Button onClick={() => resetSaveDrifter()}>Download again?</Button>
					</>
				) : isFailure(savingState) ? (
					<span>Failed to download. Try again later.</span>
				) : (
					neverEver(savingState)
				)}
				<Button onClick={() => setDrifter(defaultDrifter)}>Reset</Button>
			</div>
		</>
	);
};

function downloadDrifterPdf(drifter: Readonly<Drifter>) {
	return ajax({
		method: "POST",
		url: pdfEndpoint,
		body: { fields: drifterToPdf(drifter), version: "v5", style: "HLD" },
		headers: { "Content-Type": "application/json" },
		responseType: "blob",
	}).pipe(
		tap(({ response }) => downloadBlob(response, `character.pdf`)),
		map(response => response.status >= 200 && response.status < 300)
	);
}

export default IndexPage;
