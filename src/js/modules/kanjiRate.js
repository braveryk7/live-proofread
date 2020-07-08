export function kanjiRate(str) {
    const kanjiCheckReg = /([\u3400-\u9FFF])/;
    let total = 0;
    let kanji = 0;

    const strChara = Array.from(str.replace(/\s+/g, '')).map((chara) => {
        if(kanjiCheckReg.test(chara)) {
            total++;
            kanji++;
        } else {
            total++;
        }
    });
    return (kanji / total * 100).toFixed(1);
}