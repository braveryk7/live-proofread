export function settingsUrl() {
    const url = `${location.protocol}//${location.hostname}/`;    
    let rpc, cw, hm, kj, kv = '';

    if(document.getElementById('character_width_none').checked) { cw = 0; }
    else if(document.getElementById('character_width_half').checked) { cw = 1; }
    else if(document.getElementById('character_width_full').checked) { cw = 2; }

    document.getElementById('reading_point_checkbox').checked === true ? rpc = 1 : rpc = 0;
    document.getElementById('heatmap').checked === true ? hm = 1 : hm = 0;
    document.getElementById('kanjiCheckBox').checked === true ? kj = 1 : kj = 0;
    document.getElementById('kanjiValue').value && kj === 1 ? kv = encodeURI(document.getElementById('kanjiValue').value) : kv = '';
    
    let returnUrl = `${url}?cw=${cw}&`;
    if(rpc === 1) returnUrl = `${returnUrl}rpc=${rpc}&`;
    if(hm === 1) returnUrl = `${returnUrl}hm=${hm}&`;
    if(kj === 1) returnUrl = `${returnUrl}kj=${kj}&`;
    if(kv) returnUrl = `${returnUrl}kv=${kv}`
    if(returnUrl.slice(-1) === '&') returnUrl = returnUrl.slice(0, -1);

    document.getElementById('settingsUrl').value = returnUrl;
}