import { h } from './h.js';
import { counter } from './counter.js';
import { readingPoint } from './readingPoint.js';
import { characterWidthCheck } from './characterWidthCheck.js';

export function inputWord(inputWordResult) {
    /*
        文字列分割の処理
        ・HTMLタグのエスケープ
        ・一行に2つ以上句点がある場合は句点で区切って配列に格納
        ex)Array['str', 'str', Array['str', 'str'], 'str']
    */
    const inputWordResultLines = inputWordResult.value.replace(/\r\n|\r/g, '\n').split('\n');    
    let inputWordResultLine = [];
    let lineEnd = /([。！？）!?)])/

    for(let i = 0; i < inputWordResultLines.length; i++) {
        let multiFlag = 0;
        if(counter(inputWordResultLines[i], '。') >= 2) {
            inputWordResultLine.push(h(inputWordResultLines[i]).replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'').split(lineEnd));

            if(inputWordResultLine[inputWordResultLine.length - 1].slice(-1) !== lineEnd); {
                multiFlag = 1;
            }
            for(let i2 = 0; i2 < inputWordResultLine[i].length; i2++) {
                if(multiFlag === 0 || (multiFlag === 1 && i2 < inputWordResultLine[i].length - 1)) {
                    inputWordResultLine[i][i2] = characterWidthCheck(inputWordResultLine[i][i2]);
                } else if(multiFlag === 1 && i2 !== inputWordResultLine[i].length - 1) {
                    inputWordResultLine[i][i2] = characterWidthCheck(inputWordResultLine[i][i2]);
                }
            }
        } else {
            inputWordResultLine.push(characterWidthCheck(h(inputWordResultLines[i]).replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '')))
        }
        multiFlag = 0;
    }

    // console.log(inputWordResultLine);

    // 読点の処理
    readingPoint(inputWordResultLine);

    for(let i = 0; i < inputWordResultLine.length; i++) {
        if(Array.isArray(inputWordResultLine[i])) {
            inputWordResultLine[i] = inputWordResultLine[i].join('');
        }
    }

    return inputWordResultLine;
}