export function characterWidthCheck(str) {
    let checkReg = '';
    let regMessage = '';

    const characterWidthChecked = Array.from(document.getElementsByName('character_width')).find(function(check) {
        return check.checked;
    });
    const checkedValue = characterWidthChecked.value;

    //半角/全角判定の正規表現
    if (checkedValue === '1') {
        checkReg = /([^\u2190-\u2199\u30a0-\u30ff\u3040-\u309f\u3001-\u3003\u3005-\u3006\u30e0-\u9fffa-zA-Z0-9!-/:-@¥[-`{-~])/g;
        regMessage = '半角';
    } else if (checkedValue === '2') {
        checkReg = /([a-zA-Z0-9!-/:-@¥[-`{-~])/g;
        regMessage = '全角';
    }

    if(checkedValue !== '0' && Array.isArray(str) === false && checkReg.test(str)) {
        str = str.split(checkReg);
        for(let i = 0; i < str.length; i++) {
            if(checkReg.test(str[i])) {
                str[i] = `<span class="view-word--width" title="${regMessage}に直して下さい">${str[i]}</span>`;
            }
        }
        str = str.join('');
    }

    return str;
}