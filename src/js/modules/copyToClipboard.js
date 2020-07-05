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
    if(lineFeedCodeChecked !== 'br' && lineFeedCodeChecked !== 'p' ) {
        text.map( (value) => copyArray.push(`${value}\n`));
    } else if(lineFeedCodeChecked === 'br') {
        text.map( (value) => copyArray.push(`${value}<br />\n`));
    } else {
        text.map( (value) => copyArray.push(`<p>${value}</p>\n`));
    }
    navigator.clipboard.writeText(copyArray.join('').slice(0, -1));
}