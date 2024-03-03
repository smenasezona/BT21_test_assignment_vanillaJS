const popup = document.getElementById('popup');
const startBtn = document.getElementById('startBtn');
const submitBtn = document.getElementById('submitBtn');
const result = document.getElementById('result');
const inputs = Array.from(document.querySelectorAll('input'));
const startBtnContainer = document.querySelector('.start-btn-container');

startBtn.onclick = function () {
    popup.style.display = "block";
}
window.onclick = function (event) {
    if (event.target === popup) {
        popup.style.display = "none";
    }
}
submitBtn.onclick = function () {
    let data = inputs.reduce(function (acc, input) {
        acc[input.id] = input.value;
        return acc;
    }, {});
    result.textContent = JSON.stringify(data, null, 2);
    popup.style.display = "none";
    startBtnContainer.style.display = "none";
}
