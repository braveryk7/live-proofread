export function characterWidthCheck(str) {
	let checkReg, regMessage, returnStr = '';

	const characterWidthChecked = Array.from(document.getElementsByName('character_width')).find((check) => {
		return check.checked;
	});
	const checkedValue = characterWidthChecked.value;

	//半角/全角判定の正規表現
	if (checkedValue === '1') {
		checkReg = /([^\u2190-\u2199\u30a0-\u30ff\u3040-\u309f\u3001-\u3003\u3005-\u3006\u30e0-\u9fffa-zA-Z0-9!-/:-@¥[-`{-~])/g;
		regMessage = '半角';
	} else if (checkedValue === '2') {
		checkReg = /([a-zA-Z0-9!-/:-@¥[-`{-~])/g;
		regMessage = '全角';
	}

	if (checkedValue !== '0' && checkReg.test(str)) {
		const strSplit = str.split(checkReg);
		let strings = strSplit.map((strProcessing) => {
			if (checkReg.test(strProcessing)) {
				strProcessing = `<span class="view__width" title="${regMessage}に直して下さい">${strProcessing}</span>`;
			}
			return strProcessing;
		});
		returnStr = strings.join('');
	} else {
		returnStr = str;
	}
	return returnStr;
}