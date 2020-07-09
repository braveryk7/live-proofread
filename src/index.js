import './_scss/style.scss';
import { copyToClipboard } from './js/modules/copyToClipboard.js';
import { checkboxToggle } from './js/modules/checkboxToggle.js'
import { formEvent } from './js/modules/formEvent.js'
import { optionsToggle } from './js/modules/optionsToggle.js';

const inputWordResult = document.forms.input_word.input_word_result;

/*
    オプションエリアの開閉設定
    チェックボックスのオンオフをイベントハンドラで管理
*/
document.getElementById('openToggle').addEventListener('input', () => {
    optionsToggle();
})

/*
    オプションの処理
    各フォームのclick/inputのイベントハンドラでview-areaの更新
*/

//main-areaのイベントハンドラ
inputWordResult.addEventListener('input', () => {
    formEvent(inputWordResult)
}, false);

//文字数に空白や改行を含めるかチェックボックスの制御
document.getElementById('blankCheckBox').addEventListener('input', () => {
    formEvent(inputWordResult)
});

//改行コードのラジオボタン用イベントハンドラ
document.getElementById('copy-btn').addEventListener('click', {
    value: inputWordResult,
    check: document.forms.input_code,
    handleEvent: copyToClipboard
}, false);

//読点のチェックボックス・テキストエリア用イベントハンドラ
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

// 全角/半角のチェックボックス・テキストエリア用イベントハンドラ
document.getElementById('character_width_none').addEventListener('click', () => {
    formEvent(inputWordResult)
});
document.getElementById('character_width_half').addEventListener('click', () => {
    formEvent(inputWordResult)
});
document.getElementById('character_width_full').addEventListener('click', () => {
    formEvent(inputWordResult)
});

// ヒートマップ用イベントハンドラ
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