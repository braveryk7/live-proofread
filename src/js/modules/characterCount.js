export function characterCount(str) {
	if(document.getElementById('blankCheckBox').checked === false) {
		return str.length;
	} else {
		return str.replace(/\s+/g, '').length;
	}
}