export function characterWidthCheck(inputWordResultLine) {
    const checkCode = document.getElementsByName('character_width');
    let characterWidthChecked = 0;
    let checkReg = '';
    let regMessage = '';

    for(let i = 0; i < checkCode.length; i++) {
        if(checkCode[i].checked) {
            characterWidthChecked = checkCode[i].value;
            break;
        }
    }


    //半角/全角判定の正規表現
    if (characterWidthChecked === '1') {
        checkReg = /([^\u2190-\u2199\u30a0-\u30ff\u3040-\u309f\u3001-\u3003\u3005-\u3006\u30e0-\u9fffa-zA-Z0-9!-/:-@¥[-`{-~])/g;
        regMessage = '半角';
    } else if (characterWidthChecked === '2') {
        checkReg = /([a-zA-Z0-9!-/:-@¥[-`{-~])/g;
        regMessage = '全角';
    }

    if(characterWidthChecked !== '0') {
        if(Array.isArray(inputWordResultLine) === false) {
            if(checkReg.test(inputWordResultLine)) {
                inputWordResultLine = inputWordResultLine.split(checkReg);
                for(let i = 0; i < inputWordResultLine.length; i++) {
                    if(checkReg.test(inputWordResultLine[i])) {
                        inputWordResultLine[i] = '<span class="view-word--width" title="' + regMessage + 'に直して下さい">' + inputWordResultLine[i] + '</span>';
                    }
                }
                inputWordResultLine = inputWordResultLine.join('');
            }
        }
    }

    return inputWordResultLine;
}