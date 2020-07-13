export function settingsUrl() {
    const url = `${location.protocol}//${location.hostname}/`;    
    let rpc, cw, hm, kj, kv = '';

    if(document.getElementById('reading_point_checkbox').checked === true) {
        rpc = 1;
    } else if(document.getElementById('reading_point_checkbox').checked === false) {
        rpc = 0;
    }

    if(document.getElementById('character_width_none').checked === true) {
        cw = 0;
    } else if(document.getElementById('character_width_half').checked === true) {
        cw = 1;
    } else if(document.getElementById('character_width_full').checked === true) {
        cw = 2;
    }

    if(document.getElementById('heatmap').checked === true) {
        hm = 1;
    } else if(document.getElementById('heatmap').checked === false) {
        hm = 0;
    }

    if(document.getElementById('kanjiCheckBox').checked === true) {
        kj = 1;
    } else if(document.getElementById('kanjiCheckBox').checked === false) {
        kj = 0;
    }

    if(document.getElementById('kanjiValue').value) {
        kv = encodeURI(document.getElementById('kanjiValue').value)
    }
    
    const returnUrl = `${url}?rpc=${rpc}&cw=${cw}&hm=${hm}$kj=${kj}$kv=${kv}`
    document.getElementById('settingsUrl').value = returnUrl;
}