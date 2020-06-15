import { counter } from './counter.js';

export function readingPoint(inputWordResultLine) {
    //読点の処理
    if(document.getElementById('reading_point_checkbox').checked === true) {
        for(let i = 0; i < inputWordResultLine.length; i++) {
            if(Array.isArray(inputWordResultLine[i]) === true) {
                for(let i2 = 0; i2 < inputWordResultLine[i].length; i2++) {
                    if(counter(inputWordResultLine[i][i2], '、') > document.getElementById('reading_point_number').value) {
                        inputWordResultLine[i][i2] = '<span class="view-word--underline" title="読点（、）の数を減らして下さい">' + inputWordResultLine[i][i2] + '</span>';
                    }
                }
                inputWordResultLine[i] = inputWordResultLine[i].join('');
            } else if(counter(inputWordResultLine[i], '、') > document.getElementById('reading_point_number').value) {
                inputWordResultLine[i] = '<span class="view-word--underline" title="読点（、）の数を減らして下さい">' + inputWordResultLine[i] + '</span>';
            }
        }
    }
}