function computeTotal() {
    const hourInputs = document.querySelectorAll('.hourInput');
    let total = 0;

    hourInputs.forEach(input => {
        const value = parseFloat(input.value);
        if (!isNaN(value)) {
            total += value;
        }
    });
    document.getElementById('totalHoursDisplay').textContent = total;
}
