import { h } from './h.js';
import { counter } from './counter.js';
import { characterWidthCheck } from './characterWidthCheck.js';
import { readingPoint } from './readingPoint.js';

export function inputWord(inputWordResult) {
    /*
        文字列分割の処理
        ・HTMLタグのエスケープ
        ・一行に2つ以上句点がある場合は句点で区切って配列に格納
        ex)Array['str', 'str', Array['str', 'str'], 'str']
    */
    const inputWordResultLines = inputWordResult.value.replace(/\r\n|\r/g, '\n').split('\n');    
    let inputWordResultLine = [];
    const lineEnd = /([。！？）!?)])/

    for(let i = 0; i < inputWordResultLines.length; i++) {
        let multiFlag = 0;
        if(counter(inputWordResultLines[i], '。') >= 2) {
            const htmlReplace = h(inputWordResultLines[i]).replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'');
            inputWordResultLine.push(htmlReplace.split(lineEnd));

            if(inputWordResultLine[inputWordResultLine.length - 1].slice(-1) !== lineEnd); {
                multiFlag = 1;
            }
            for(let i2 = 0; i2 < inputWordResultLine[i].length; i2++) {
                if(multiFlag === 0 || (multiFlag === 1 && i2 < inputWordResultLine[i].length - 1)) {
                    const inputWordCWC = characterWidthCheck(inputWordResultLine[i][i2]);
                    inputWordResultLine[i][i2] = inputWordCWC;
                } else if(multiFlag === 1 && i2 !== inputWordResultLine[i].length - 1) {
                    const inputWordCWC = characterWidthCheck(inputWordResultLine[i][i2]);
                    inputWordResultLine[i][i2] = inputWordCWC;
                }
            }
        } else {
            const htmlReplace = h(inputWordResultLines[i].replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, ''));
            const inputWordCWC = characterWidthCheck(htmlReplace);
            inputWordResultLine.push(inputWordCWC);
        }
        multiFlag = 0;
    }

    // 読点の処理
    readingPoint(inputWordResultLine);

    for(let i = 0; i < inputWordResultLine.length; i++) {
        if(Array.isArray(inputWordResultLine[i])) {
            inputWordResultLine[i] = inputWordResultLine[i].join('');
        }
    }

    return inputWordResultLine;
}