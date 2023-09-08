// JavaScript code for calculating carbon emissions
function calculateCarbonEmission() {
    // Get the selected travel mode and km usage
    var travelMode = document.getElementById('travel-mode').value;
    var kmUsage = parseFloat(document.getElementById('km-usage').value);

    // Define emission factors for different travel modes (you can adjust these values)
    var emissionFactors = {
        'Small Diesel Car': 1.1,  // Emission factor in kg CO2 per km
        'Medium Diesel Car': 1.1,
        'Big Diesel Car': 1.2,
        'Small Petrol Car': 0.4,
        'Medium Petrol Car': 0.6,
        'Big Petrol Car': 0.9
    };

    // Calculate the carbon emissions
    var carbonEmissionMonth = kmUsage * emissionFactors[travelMode];
    var carbonEmissionYear = carbonEmissionMonth * 12

    // Display the result per Month
    var resultElement = document.getElementById('result-month');
    resultElement.innerHTML = '<h3>' + carbonEmissionMonth.toFixed(2) + '</h3>';

    var resultElement = document.getElementById('result-year');
    resultElement.innerHTML = '<h3>' + carbonEmissionYear.toFixed(2) + '</h3>';
}

document.getElementById('calculator-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from actually submitting
    calculateCarbonEmission(); // Call the calculation function
});