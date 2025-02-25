function calculateZakat() {
    // Get input values
    let goldWeight = parseFloat(document.getElementById("goldWeight").value) || 0;
    let goldPrice = parseFloat(document.getElementById("goldPrice").value) || 0;
    let silverWeight = parseFloat(document.getElementById("silverWeight").value) || 0;
    let silverPrice = parseFloat(document.getElementById("silverPrice").value) || 0;
    let cash = parseFloat(document.getElementById("cash").value) || 0;
    let tradeGoods = parseFloat(document.getElementById("tradeGoods").value) || 0;
    let debt = parseFloat(document.getElementById("debt").value) || 0;

    // Calculate total wealth
    let goldValue = goldWeight * goldPrice;
    let silverValue = silverWeight * silverPrice;
    let totalWealth = goldValue + silverValue + cash + tradeGoods - debt;

    // Ensure debt does not exceed total assets
    if (totalWealth < 0) totalWealth = 0;

    // Zakat is 2.5% of the total wealth if it meets the Nisab threshold
    let nisabSilver = 612.36 * silverPrice; // Nisab in silver equivalent
    if (totalWealth >= nisabSilver) {
        let zakat = totalWealth * 0.025;
        document.getElementById("zakatAmount").innerText = `Zakat Amount: ${zakat.toFixed(2)}`;
    } else {
        document.getElementById("zakatAmount").innerText = "Zakat is not due (Below Nisab)";
    }
}
