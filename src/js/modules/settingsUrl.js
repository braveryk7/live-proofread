import { valueAcquisition } from './valueAcquisition.js';

export function settingsUrl() {
	const url = `${location.protocol}//${location.hostname}/`; 
	
	const dataArray = valueAcquisition();
	
	let returnUrl = `${url}?cw=${dataArray.cw}&`;
	if(dataArray.rpc === 1) returnUrl = `${returnUrl}rpc=${dataArray.rpc}&`;
	if(dataArray.hm === 1) returnUrl = `${returnUrl}hm=${dataArray.hm}&`;
	if(dataArray.kj === 1) returnUrl = `${returnUrl}kj=${dataArray.kj}&`;
	if(dataArray.kv) returnUrl = `${returnUrl}kv=${dataArray.kv}`;
	if(returnUrl.slice(-1) === '&') returnUrl = returnUrl.slice(0, -1);

	document.getElementById('settingsUrl').value = returnUrl;
}