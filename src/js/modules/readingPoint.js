import { counter } from './counter.js';

export function readingPoint(arr) {
    let readingPointResult = arr.map((line) => {
        if (Array.isArray(line)) {
            let lines = line.map((doubleLine) => {
                if(counter(doubleLine, '、') > document.getElementById('reading_point_number').value) {
                    return `<span class="view-word--underline" title="読点（、）の数を減らして下さい">${doubleLine}</span>`;
                } else {
                    return doubleLine;
                }
            })
            return lines;
        } else if (counter(line, '、') > document.getElementById('reading_point_number').value) {
                return `<span class="view-word--underline" title="読点（、）の数を減らして下さい">${line}</span>`;
        } else {
            return line;
        }
    })
    return readingPointResult;
}