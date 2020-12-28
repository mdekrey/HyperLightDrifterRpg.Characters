import React from "react";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import { Helmet } from "react-helmet";
import { ajax } from "rxjs/ajax";
import { map, tap } from "rxjs/operators";
import { drifterToPdf, pdfEndpoint } from "../drifter/pdf";
import { defaultDrifter, Drifter } from "../drifter/rules";
import { Button, buttonStyles } from "../style/button";
import { useLocalstorageState } from "../utils/useLocalstorageState";
import { downloadBlob } from "../utils/downloadBlob";
import { isSuccess, isFailure } from "../utils/delayedProgress";
import { neverEver } from "../utils/neverEver";
import { useDefaultCancelableEvent } from "../utils/useDefaultCancelableEvent";
import { Editor } from "../drifter/editor/Editor";

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
	// TODO - "corruption detected" error message
	return (
		<div role="alert">
			<p>Something went wrong:</p>
			<pre>{error.message}</pre>
			<button onClick={resetErrorBoundary}>Try again</button>
		</div>
	);
}

function IndexPage() {
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
	return (
		<ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => setDrifter(defaultDrifter)}>
			<Helmet title="Hyper Light Drifter Character Sheet" />
			<Editor drifter={drifter} setDrifter={setDrifter} />

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
		</ErrorBoundary>
	);
}

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
