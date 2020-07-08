import { inputWord } from './inputWord.js';
import { kanjiRate } from './kanjiRate.js';
import { characterCount } from './characterCount.js';

export function formEvent(formData) {
    document.getElementById('view_word').innerHTML = inputWord(formData).join('<br />');
    document.getElementById('word_count').textContent = characterCount(formData.value);
    document.getElementById('kanji_rate').textContent = kanjiRate(formData.value);
}