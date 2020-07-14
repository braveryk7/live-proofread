export function copyToClipboard() {
	//ラジオボタンの確認
	const lineFeedCodeChecked = Array.from(this.check).find((check) => check.checked);
	const checkedValue = lineFeedCodeChecked.value;

	//クリップボードに書き込み
	let text = this.value.value.replace(/\r\n|\r/g, '\n').split('\n');
	const copyArray = [];
	if(checkedValue !== 'br' && checkedValue !== 'p' ) {
		text.map( (value) => copyArray.push(`${value}\n`));
	} else if(checkedValue === 'br') {
		text.map( (value) => copyArray.push(`${value}<br />\n`));
	} else {
		text.map( (value) => copyArray.push(`<p>${value}</p>\n`));
	}
	navigator.clipboard.writeText(copyArray.join('').slice(0, -1));
}