import React from "react";
import { Helmet } from "react-helmet";
import { ajax } from "rxjs/ajax";
import { map } from "rxjs/operators";
import { IdentitySection } from "../drifter/editor/sections/identity";
import { drifterToPdf, pdfEndpoint } from "../drifter/pdf";
import { defaultDrifter, Drifter, identityLens } from "../drifter/rules";
import { Button, buttonStyles } from "../style/button";
import { useLens } from "../utils/useLens";
import { useLocalstorageState } from "../utils/useLocalstorageState";

const IndexPage = () => {
	const [drifter, setDrifter] = useLocalstorageState("editor", defaultDrifter);
	const identity = useLens([drifter, setDrifter], identityLens);

	return (
		<>
			<Helmet title="Hyper Light Drifter Character Sheet" />
			<IdentitySection identity={identity} />

			<div className="py-3 px-4 sm:p-6 sm:flex sm:flex-row-reverse">
				<Button className={buttonStyles.green} onClick={() => saveDrifter(drifter)}>
					Generate
				</Button>
				<Button onClick={() => setDrifter(defaultDrifter)}>Reset</Button>
			</div>
		</>
	);

	function saveDrifter(drifter: Drifter) {
		const pdfCreationParams = drifterToPdf(drifter);
		ajax({
			method: "POST",
			url: pdfEndpoint,
			body: { fields: pdfCreationParams, version: "v5", style: "HLD" },
			headers: { "Content-Type": "application/json" },
			responseType: "blob",
		})
			.pipe(map(response => response))
			.subscribe(r => downloadBlob(r.response, `character.pdf`));
	}
};

function downloadBlob(blob: Blob, name = "file.pdf") {
	if (window.navigator && window.navigator.msSaveOrOpenBlob) return window.navigator.msSaveOrOpenBlob(blob);

	// For other browsers:
	// Create a link pointing to the ObjectURL containing the blob.
	const data = window.URL.createObjectURL(blob);

	const link = document.createElement("a");
	link.href = data;
	link.download = name;

	// this is necessary as link.click() does not work on the latest firefox
	link.dispatchEvent(
		new MouseEvent("click", {
			bubbles: true,
			cancelable: true,
			view: window,
		})
	);

	setTimeout(() => {
		// For Firefox it is necessary to delay revoking the ObjectURL
		window.URL.revokeObjectURL(data);
		link.remove();
	}, 100);
}

export default IndexPage;
