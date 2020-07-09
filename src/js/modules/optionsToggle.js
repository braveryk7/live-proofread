export function optionsToggle() {
    if(document.getElementById('toggleCheckbox').checked === true) {
        document.getElementById('options-area').className = 'options-area__open';
        document.getElementById('openToggle').className = 'header__toggle-open-button--opend';
        document.getElementById('readingPointArea').className = 'reading-point';
        document.getElementById('characterWidthArea').className = 'character-width-area';
        document.getElementById('heatmaArea').className = 'heatmap-area';
        document.getElementById('kanjiArea').className = 'kanji-area';
    } else {
        document.getElementById('options-area').className = 'options-area__close';
        document.getElementById('openToggle').className = 'header__toggle-open-button';
        document.getElementById('readingPointArea').className = 'reading-point__close';
        document.getElementById('characterWidthArea').className = 'character-width-area__close';
        document.getElementById('heatmaArea').className = 'heatmap-area__close';
        document.getElementById('kanjiArea').className = 'kanji-area__close';
    }
}