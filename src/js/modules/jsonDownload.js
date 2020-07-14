import { valueAcquisition } from './valueAcquisition.js';

export function jsonDownload() {
	const jsonData = valueAcquisition();

	const jsonBlob = new Blob(
		[JSON.stringify(jsonData, null, '    ')],
		{ type: 'application/json' }
	);

	return document.getElementById('downloadJson').href = window.URL.createObjectURL(jsonBlob);
}