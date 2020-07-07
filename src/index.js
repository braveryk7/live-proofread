import './_scss/style.scss';
import { inputWord } from './js/modules/inputWord.js';
import { copyToClipboard } from './js/modules/copyToClipboard.js';
import { readingPointCheck } from './js/modules/readingPointCheck.js';
import { kanjiRate } from './js/modules/kanjiRate.js';

const inputWordResult = document.forms.input_word.input_word_result;
const readingPointCheckboxStatus = document.forms.reading_point_form.reading_point_checkbox;
const readingPointNumberResult = document.forms.reading_point_form.reading_point_number;

// function inputWordTry() {
    inputWordResult.addEventListener('input', () => {
        document.getElementById('view_word').innerHTML = inputWord(inputWordResult).join('<br />');
        document.getElementById('word_count').textContent = inputWordResult.value.length;
        document.getElementById('kanji_rate').textContent = kanjiRate(inputWordResult.value);
    }, false);
// }
// inputWordTry();

//改行コードの処理
document.getElementById('copy-btn').addEventListener('click', {
    value: inputWordResult,
    check: document.forms.input_code,
    handleEvent: copyToClipboard
}, false);

/*
    オプションの処理
    各フォームのclick/inputのイベントハンドラでview-areaの更新
*/

//読点のチェックボックス・テキストエリアをイベントハンドラ
document.getElementById('reading_point_checkbox').addEventListener('input', () => {
    document.getElementById('view_word').innerHTML = inputWord(inputWordResult).join('<br />');
    document.getElementById('word_count').textContent = inputWordResult.value.length;
    document.getElementById('kanji_rate').textContent = kanjiRate(inputWordResult.value);
});
document.getElementById('reading_point_number').addEventListener('input', () => {
    document.getElementById('view_word').innerHTML = inputWord(inputWordResult).join('<br />');
    document.getElementById('word_count').textContent = inputWordResult.value.length;
    document.getElementById('kanji_rate').textContent = kanjiRate(inputWordResult.value);
});

//読点の処理
document.getElementById('reading_point_checkbox').addEventListener('input', {
    readingPointCheckboxStatus: readingPointCheckboxStatus,
    readingPointNumberResult: readingPointNumberResult,
    value: inputWordResult,
    handleEvent: readingPointCheck
});

// 全角/半角のチェックボックス・テキストエリアをイベントハンドラ
document.getElementById('character_width_none').addEventListener('click', () => {
    document.getElementById('view_word').innerHTML = inputWord(inputWordResult).join('<br />');
    document.getElementById('word_count').textContent = inputWordResult.value.length;
    document.getElementById('kanji_rate').textContent = kanjiRate(inputWordResult.value);
});
document.getElementById('character_width_half').addEventListener('click', () => {
    document.getElementById('view_word').innerHTML = inputWord(inputWordResult).join('<br />');
    document.getElementById('word_count').textContent = inputWordResult.value.length;
    document.getElementById('kanji_rate').textContent = kanjiRate(inputWordResult.value);
});
document.getElementById('character_width_full').addEventListener('click', () => {
    document.getElementById('view_word').innerHTML = inputWord(inputWordResult).join('<br />');
    document.getElementById('word_count').textContent = inputWordResult.value.length;
    document.getElementById('kanji_rate').textContent = kanjiRate(inputWordResult.value);
});

// ヒートマップのイベントハンドラ
document.getElementById('heatmap').addEventListener('click', () => {
    document.getElementById('view_word').innerHTML = inputWord(inputWordResult).join('<br />');
    document.getElementById('word_count').textContent = inputWordResult.value.length;
    document.getElementById('kanji_rate').textContent = kanjiRate(inputWordResult.value);
});

//低可読性漢字の指摘用イベントハンドラ
document.getElementById('kanjiCheckBox').addEventListener('click', () =>{
    document.getElementById('view_word').innerHTML = inputWord(inputWordResult).join('<br />');
    document.getElementById('word_count').textContent = inputWordResult.value.length;
    document.getElementById('kanji_rate').textContent = kanjiRate(inputWordResult.value);
})

//低可読性漢字の指摘用チェックボックス制御
document.getElementById('kanjiCheckBox').addEventListener('input', () => {
    const kanjiCheck = document.getElementById('kanjiValue');
    document.getElementById('kanjiCheckBox').checked ? kanjiCheck.disabled = false : kanjiCheck.disabled = true;
    console.log(kanjiCheck)
})