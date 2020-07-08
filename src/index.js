import './_scss/style.scss';
import { copyToClipboard } from './js/modules/copyToClipboard.js';
import { checkboxToggle } from './js/modules/checkboxToggle.js'
import { formEvent } from './js/modules/formEvent.js'

const inputWordResult = document.forms.input_word.input_word_result;

// function inputWordTry() {
    inputWordResult.addEventListener('input', () => {
        formEvent(inputWordResult)
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
    formEvent(inputWordResult)
});
document.getElementById('reading_point_number').addEventListener('input', () => {
    formEvent(inputWordResult)
});

//読点の指摘用チェックボックス制御
document.getElementById('reading_point_checkbox').addEventListener('input', () => {
    checkboxToggle('reading_point_checkbox', 'reading_point_number')
})

// 全角/半角のチェックボックス・テキストエリアをイベントハンドラ
document.getElementById('character_width_none').addEventListener('click', () => {
    formEvent(inputWordResult)
});
document.getElementById('character_width_half').addEventListener('click', () => {
    formEvent(inputWordResult)
});
document.getElementById('character_width_full').addEventListener('click', () => {
    formEvent(inputWordResult)
});

// ヒートマップのイベントハンドラ
document.getElementById('heatmap').addEventListener('click', () => {
    formEvent(inputWordResult)
});

//低可読性漢字の指摘用イベントハンドラ
document.getElementById('kanjiCheckBox').addEventListener('click', () =>{
    formEvent(inputWordResult)
})
document.getElementById('kanjiValue').addEventListener('keyup', () =>{
    formEvent(inputWordResult)
})

//低可読性漢字の指摘用チェックボックス制御
document.getElementById('kanjiCheckBox').addEventListener('input', () => {
    checkboxToggle('kanjiCheckBox', 'kanjiValue')
})