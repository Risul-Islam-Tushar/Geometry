document.getElementById('btn-primary').addEventListener('click', function () {
    window.location.href = 'other-page.html';
});


document.getElementById('first-btn').addEventListener('click', function () {
    const firstCardName = document.getElementById('first-name').innerText;
    const firstsFirstInput = document.getElementById('first-a').value;
    const firstsSecondInput = document.getElementById('first-b').value;

    const firstsTotalValue = parseFloat(firstsFirstInput) * parseFloat(firstsSecondInput);

    displayData(firstCardName,firstsTotalValue);
});
document.getElementById('second-btn').addEventListener('click', function () {
    const secondCardName = document.getElementById('second-name').innerText;
    const secondsFirstInput = document.getElementById('second-a').value;
    const secondsSecondInput = document.getElementById('second-b').value;

    const secondsTotalValue = 3.1416 * parseFloat(secondsFirstInput) * parseFloat(secondsSecondInput);

    displayData(secondCardName,secondsTotalValue);
});
document.getElementById('third-btn').addEventListener('click', function () {
    const thirdCardName = document.getElementById('third-name').innerText;
    const thirdsFirstInput = document.getElementById('third-a').value;
    const thirdsSecondInput = document.getElementById('third-b').value;

    const thirdsTotalValue = 0.5 * parseFloat(thirdsFirstInput) * parseFloat(thirdsSecondInput);

    displayData(thirdCardName,thirdsTotalValue);
});
document.getElementById('four-btn').addEventListener('click', function () {
    const fourCardName = document.getElementById('four-name').innerText;
    const foursFirstInput = document.getElementById('four-a').value;
    const foursSecondInput = document.getElementById('four-b').value;

    const foursTotalValue = parseFloat(foursFirstInput) * parseFloat(foursSecondInput);

    displayData(fourCardName,foursTotalValue);
});
document.getElementById('fifth-btn').addEventListener('click', function () {
    const fiveCardName = document.getElementById('five-name').innerText;
    const fivesFirstInput = document.getElementById('five-a').value;
    const fivesSecondInput = document.getElementById('five-b').value;

    const fivesTotalValue = 0.5 * parseFloat(fivesFirstInput) * parseFloat(fivesSecondInput);

    displayData(fiveCardName,fivesTotalValue);
});
document.getElementById('six-btn').addEventListener('click', function () {
    const sixCardName = document.getElementById('six-name').innerText;
    const sixsFirstInput = document.getElementById('six-a').value;
    const sixsSecondInput = document.getElementById('six-b').value;

    const sixsTotalValue = 0.5 * parseFloat(sixsFirstInput) * parseFloat(sixsSecondInput);

    displayData(sixCardName,sixsTotalValue);
});
function displayData(cardName,totalValue){
    const container = document.getElementById('table-container');
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${cardName}</td>
    <td>${totalValue}</td>
    `;
    container.appendChild(tr);
}