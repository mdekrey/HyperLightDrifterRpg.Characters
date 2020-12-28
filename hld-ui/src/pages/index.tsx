import React from "react";
import { Helmet } from "react-helmet";
import { ajax } from "rxjs/ajax";
import { map, tap } from "rxjs/operators";
import { IdentitySection } from "../drifter/editor/sections/identity";
import { drifterToPdf, pdfEndpoint } from "../drifter/pdf";
import { defaultDrifter, Drifter, identityLens } from "../drifter/rules";
import { Button, buttonStyles } from "../style/button";
import { useLens } from "../utils/useLens";
import { useLocalstorageState } from "../utils/useLocalstorageState";
import { downloadBlob } from "../utils/downloadBlob";
import { delayedProgress, isSuccess, isFailure, isComplete } from "../utils/delayedProgress";
import { useCancelableEvent } from "../utils/useCancelableEvent";
import { neverEver } from "../utils/neverEver";

const IndexPage = () => {
	const [drifter, innerSetDrifter] = useLocalstorageState("editor", defaultDrifter);

	const [savingState, saveDrifter, resetSaveDrifter] = useCancelableEvent(
		React.useCallback(
			delayedProgress((drifter: Readonly<Drifter>) =>
				ajax({
					method: "POST",
					url: pdfEndpoint,
					body: { fields: drifterToPdf(drifter), version: "v5", style: "HLD" },
					headers: { "Content-Type": "application/json" },
					responseType: "blob",
				}).pipe(
					tap(({ response }) => downloadBlob(response, `character.pdf`)),
					map(response => response.status >= 200 && response.status < 300)
				)
			),
			// TODO - save id from response
			[]
		),
		undefined
	);

	const setDrifter: typeof innerSetDrifter = (...params) => {
		innerSetDrifter(...params);
		resetSaveDrifter();
	};
	const identity = useLens([drifter, setDrifter], identityLens);

	return (
		<>
			<Helmet title="Hyper Light Drifter Character Sheet" />
			<IdentitySection identity={identity} />

			<div className="py-3 px-4 sm:p-6 sm:flex sm:flex-row sm:justify-end sm:items-center">
				{!isComplete(savingState) ? (
					<Button
						className={buttonStyles.green}
						disabled={savingState === "progress"}
						onClick={() => saveDrifter(drifter)}
					>
						Generate
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

export default IndexPage;
