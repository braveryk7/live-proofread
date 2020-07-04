export function copyToClipboard(e) {
    //ラジオボタンの確認
    let lineFeedCodeChecked;
    for(let i = 0; i < this.check.length; i++) {
        if(this.check[i].checked) {
            lineFeedCodeChecked = this.check[i].value;
            break;
        }
    }

    //クリップボードに書き込み
    let text = this.value.value.replace(/\r\n|\r/g, '\n').split('\n');
    const copyArray = [];
    for (let i = 0; i < text.length; i++) {
        if(lineFeedCodeChecked !== 'br' && lineFeedCodeChecked !== 'p' ) {
            copyArray.push(`${text[i]}\n`);
        } else if(lineFeedCodeChecked === 'br') {
            copyArray.push(`${text[i]}<br />\n`);
        } else {
            copyArray.push(`<${lineFeedCodeChecked}>${text[i]}</${lineFeedCodeChecked}>\n`)
        }
    }
    navigator.clipboard.writeText(copyArray.join('').slice(0, -1));
}