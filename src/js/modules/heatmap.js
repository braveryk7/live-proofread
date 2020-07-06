export function heatmap(arr) {
    const checkReg = /([\u3400-\u9FFF])/;
    const htmlTagReg = /(<[^>]+>)/

    const kanjiArr = arr.map((line) => {
        const htmlCheck = line.split(htmlTagReg);
        const kanjiLine = htmlCheck.map((kanjiValue) => {
            return htmlTagReg.test(kanjiValue) ? kanjiValue : kanjiValue.split(checkReg);
        })
        const kanjiCheck = kanjiLine.map((kanjiValue) => {
            if(Array.isArray(kanjiValue)){
                const kanjiList = kanjiValue.map((kanjiListValue) => {
                    return checkReg.test(kanjiListValue) ? `<span class="view-word--kanji">${kanjiListValue}</span>` : kanjiListValue;
                })
                return kanjiList.join('');
            } else {
                return kanjiValue;
            }
        })
        return kanjiCheck.join('')
    })
    return kanjiArr;
}