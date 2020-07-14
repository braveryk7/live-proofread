export function optionsToggle() {
	if(document.getElementById('toggleCheckbox').checked === true) {
		document.getElementById('options').className = 'options__open';
		document.getElementById('openToggle').className = 'header__toggle-open-button--opend';
		document.getElementById('readingPointArea').className = 'options__reading-point';
		document.getElementById('characterWidthArea').className = 'options__character-width';
		document.getElementById('heatmaArea').className = 'options__heatmap';
		document.getElementById('kanjiArea').className = 'options__kanji';
	} else {
		document.getElementById('options').className = 'options__close';
		document.getElementById('openToggle').className = 'header__toggle-open-button';
		document.getElementById('readingPointArea').className = 'options__reading-point__close';
		document.getElementById('characterWidthArea').className = 'options__character-width__close';
		document.getElementById('heatmaArea').className = 'options__heatmap__close';
		document.getElementById('kanjiArea').className = 'options__kanji__close';
	}
}