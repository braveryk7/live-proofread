import { h } from './h.js';

export function kanji(arr) {
    if(document.getElementById('kanjiValue').value !== '') {
        const checkReg = new RegExp(`(${h(document.getElementById('kanjiValue').value.replace(',', '|').replace(/\s+/g, ''))})`);
        const htmlTagReg = /(<[^>]+>)/;

        const kanjiArray = arr.map((line) => {
            const htmlCheck = line.split(htmlTagReg);
            const kanjiLine = htmlCheck.map((kanjiValue) => {
                return htmlTagReg.test(kanjiValue) ? kanjiValue : kanjiValue.split(checkReg);
            })        
            const kanjiCheck = kanjiLine.map((kanjiValue) => {
                if(Array.isArray(kanjiValue)){
                    const kanjiList = kanjiValue.map((kanjiListValue) => {
                        return checkReg.test(kanjiListValue) ? `<span class="view-word--kanji-check" title="ひらがなに直して下さい">${kanjiListValue}</span>` : kanjiListValue;
                    })
                    return kanjiList.join('');
                } else {
                    return kanjiValue;
                }
            })
            return kanjiCheck.join('')
        })
        return kanjiArray;
    } else {
        return arr;
    }
}