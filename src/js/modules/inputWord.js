import { h } from './h.js';
import { counter } from './counter.js';
import { characterWidthCheck } from './characterWidthCheck.js';
import { readingPoint } from './readingPoint.js';
import { heatmap } from './heatmap.js';

export function inputWord(inputWordResult) {
    /*
        文字列分割の処理
        ・HTMLタグのエスケープ
        ・一行に2つ以上句点がある場合は句点で区切って配列に格納
        ex)Array['str', 'str', Array['str', 'str'], 'str']
    */
    const inputWordResultLines = inputWordResult.value.replace(/\r\n|\r/g, '\n').split('\n'); 
    const lineEnd = /([。！？）!?)])/

    const disassembly = inputWordResultLines.map((line) => {
        if (counter(line, '。') >= 2) {
            const htmlReplace = h(line).replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'');
            const doubleLines = htmlReplace.split(lineEnd);
            return doubleLines.map((doubleLine) => characterWidthCheck(doubleLine));
        } else {
            const htmlReplace = h(line).replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '');
            console.log(htmlReplace)
            return characterWidthCheck(htmlReplace);
        }
    });

    // 読点の処理
    const readingPointCheck = document.getElementById('reading_point_checkbox').checked === true;
    let readingPointArray = '';
    readingPointCheck ? readingPointArray = readingPoint(disassembly) : readingPointArray = disassembly;

    //多次元配列の結合
    let joinArray = readingPointArray.map((line) => Array.isArray(line) ? line.join('') : line);

    // ヒートマップ
    const heatmapCheck = document.getElementById('heatmap').checked === true;
    let heatmapArray = '';
    heatmapCheck ? heatmapArray = heatmap(joinArray) : heatmapArray = joinArray; 

    let returnArray = heatmapArray;
    return returnArray;
}