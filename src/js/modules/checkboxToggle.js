export function checkboxToggle(id, targetId) {
    const target = document.getElementById(targetId);

    if(document.getElementById(id).checked === true) {
        target.disabled = false;
    } else {
        target.disabled = true;
    }
}