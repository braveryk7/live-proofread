export function jsonDownload() {   
    let rpc, cw, hm, kj, kv = '';

    if(document.getElementById('character_width_none').checked) { cw = 0; }
    else if(document.getElementById('character_width_half').checked) { cw = 1; }
    else if(document.getElementById('character_width_full').checked) { cw = 2; }

    document.getElementById('reading_point_checkbox').checked === true ? rpc = 1 : rpc = 0;
    document.getElementById('heatmap').checked === true ? hm = 1 : hm = 0;
    document.getElementById('kanjiCheckBox').checked === true ? kj = 1 : kj = 0;
    document.getElementById('kanjiValue').value && kj === 1 ? kv = document.getElementById('kanjiValue').value : kv = '';

    const jsonData = { rpc, cw, hm, kj, kv }
    const jsonBlob = new Blob(
        [JSON.stringify(jsonData, null, '    ')],
        { type: 'application/json' }
    );

    return document.getElementById('downloadJson').href = window.URL.createObjectURL(jsonBlob);
}