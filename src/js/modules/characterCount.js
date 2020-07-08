export function characterCount(str) {
    if(document.getElementById('blankCheckBox').checked === false) {
        console.log(1)
        return str.length
    } else {
        console.log(2)
        return str.replace(/\s+/g, '').length;
    }
}