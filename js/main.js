const infoButtons = document.querySelectorAll('.info-dot');
const infoHints = document.querySelectorAll('.info-hint');

for (let button of infoButtons) {
    button.addEventListener('click', (showHint));
}

function showHint(e) {
    e.stopPropagation();
    const parentNode = this.parentNode;
    const infoHint = parentNode.querySelector('.info-hint');
    infoHint.classList.toggle('none');
}

document.addEventListener('click', closeHints);

function closeHints() {
    for (let hint of infoHints) {
        hint.classList.add('none');
    }
}

for (let hint of infoHints) {
    hint.addEventListener('click', (e) => e.stopPropagation());
}
