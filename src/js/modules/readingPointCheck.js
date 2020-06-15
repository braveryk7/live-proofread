export function readingPointCheck() {
    if(this.readingPointCheckboxStatus.checked === false) {
        this.readingPointNumberResult.disabled = true;
    } else {
        this.readingPointNumberResult.disabled = false;
    }
}