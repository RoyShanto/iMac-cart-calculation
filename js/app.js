function setPrice(item, price) {
    document.getElementById(item).innerText = price;
    const bestPrice = parseInt(document.getElementById('best-price').innerText);
    const memoryCost = parseInt(document.getElementById('memory-cost').innerText);
    const storageCost = parseInt(document.getElementById('storage-cost').innerText);
    const deliveryCost = parseInt(document.getElementById('delivery-cost').innerText);
    const totalCost = bestPrice + memoryCost + storageCost + deliveryCost;
    document.getElementById('total-cost').innerText = totalCost;
    document.getElementById('total-price').innerText = totalCost;
}
function finalCost() {
    const pomoInput = document.getElementById('pomo-field');
    const pomoCode = pomoInput.value;
    pomoInput.value = '';
    if (pomoCode == 'stevekaku') {
        const finalCost = document.getElementById('total-cost').innerText;
        document.getElementById('total-price').innerText = finalCost * 0.8;
    }
}
document.getElementById('pomo-apply-btn').addEventListener('click', function () {
    finalCost();
})