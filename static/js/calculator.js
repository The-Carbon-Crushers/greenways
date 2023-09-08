// JavaScript code for calculating carbon emissions
function calculateCarbonEmission() {
    // Get the selected travel mode and km usage
    var travelMode = document.getElementById('car-type').value;
    var kmUsage = parseFloat(document.getElementById('km-usage').value);

    // Define emission factors for different travel modes (you can adjust these values)
    var emissionFactors = {
        'Small Diesel Car': 0.13,  // Emission factor in kg CO2 per km
        'Medium Diesel Car': 0.16,
        'Big Diesel Car': 0.22,
        'Small Petrol Car': 0.14,
        'Medium Petrol Car': 0.17,
        'Big Petrol Car': 0.22
    };

    // Calculate the carbon emissions
    var carbonEmissionMonth = (kmUsage * emissionFactors[travelMode]) / 1000;
    var carbonEmissionYear = carbonEmissionMonth * 12;

    // Display the result per Month
    var resultElement = document.getElementById('result-month');
    resultElement.innerHTML = '<h3>' + carbonEmissionMonth.toFixed(3) + '</h3>';

    var resultElement = document.getElementById('result-year');
    resultElement.innerHTML = '<h3>' + carbonEmissionYear.toFixed(3) + '</h3>';
}

document.getElementById('calculator-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from actually submitting
    calculateCarbonEmission(); // Call the calculation function
});