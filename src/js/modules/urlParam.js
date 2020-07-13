export function urlParam() {
    const urlParam = window.location.search.substring(1);
    const parameters = urlParam.split('&');
    let setParam = {}

    parameters.map((parameter) => {
        const spParameter = parameter.split('=');
        setParam[spParameter[0]] = spParameter[1];
    })
    console.log(setParam)

    //reading_check_point
    if('rpc' in setParam) {
        if(setParam.rpc === '0') {
            document.getElementById('reading_point_checkbox').checked = false;
            document.getElementById('reading_point_number').disabled = true;
        } else if(setParam.rpc === '1') {
            document.getElementById('reading_point_checkbox').checked = true;
            document.getElementById('reading_point_number').disabled = false;

        }
    }

    //character_width
    if('cw' in setParam) {
        if(setParam.cw === '0') {
            document.getElementById('character_width_none').checked = true;
        } else if(setParam.cw === '1') {
            document.getElementById('character_width_half').checked = true;
        } else if(setParam.cw === '2') {
            document.getElementById('character_width_full').checked = true;
        }
    }

    //heatmap
    if('hm' in setParam) {
        if(setParam.hm === '0') {
            document.getElementById('heatmap').checked = false;
        } else if(setParam.hm === '1')
            document.getElementById('heatmap').checked = true;
    }

    //kanjiCheck
    if('kj' in setParam) {
        if(setParam.kj === '0') {
            document.getElementById('kanjiCheckBox').checked = false;
            document.getElementById('kanjiValue').disabled = true;
        } else if(setParam.kj === '1') {
            document.getElementById('kanjiCheckBox').checked = true;
            document.getElementById('kanjiValue').disabled = false;
        }
    }

    //kanjiValue
    if('kv' in setParam) {
        document.getElementById('kanjiValue').value = decodeURI(setParam.kv);
    }
}