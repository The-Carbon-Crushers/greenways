// JavaScript code for calculating carbon emissions
function calculateCarbonEmissionKm() {
    // Get the selected travel mode and km usage
    var travelMode = document.getElementById('car-type').value;
    var kmUsage = parseFloat(document.getElementById('km-usage').value);

    // Define emission factors for different travel modes (you can adjust these values)
    var emissionFactorsKM = {
        'Small Diesel Car': 0.13,  // Emission factor in kg CO2 per km
        'Medium Diesel Car': 0.16,
        'Big Diesel Car': 0.22,
        'Small Petrol Car': 0.14,
        'Medium Petrol Car': 0.17,
        'Big Petrol Car': 0.22
    };

    // Calculate the carbon emissions in KM
    var carbonEmissionMonth = (kmUsage * emissionFactorsKM[travelMode]) / 1000;
    var carbonEmissionYear = carbonEmissionMonth * 12;

    // Display the result per Month - KM
    var resultElement = document.getElementById('result-month-km');
    resultElement.innerHTML = '<h3>' + carbonEmissionMonth.toFixed(3) + '</h3>';

    var resultElement = document.getElementById('result-year-km');
    resultElement.innerHTML = '<h3>' + carbonEmissionYear.toFixed(3) + '</h3>';
}

document.getElementById('calculator-form-km').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from actually submitting
    calculateCarbonEmissionKm(); // Call the calculation function
});

// JavaScript code for calculating carbon emissions
function calculateCarbonEmissionMiles() {
    // Get the selected travel mode and miles usage
    var travelMode = document.getElementById('car-type').value;
    var milesUsage = parseFloat(document.getElementById('miles-usage').value);

    // Define emission factors for different travel modes (you can adjust these values)
    var emissionFactorsMile = {
        'Small Diesel Car': 0.28,  // Emission factor in pounds CO2 per mile
        'Medium Diesel Car': 0.35,
        'Big Diesel Car': 0.48,
        'Small Petrol Car': 0.30,
        'Medium Petrol Car': 0.37,
        'Big Petrol Car': 0.48
    };

    // Calculate the carbon emissions in Miles
    var carbonEmissionMonth = (milesUsage * emissionFactorsMile[travelMode]) / 1000;
    var carbonEmissionYear = carbonEmissionMonth * 12;

    // Display the result per Month - Miles
    var resultElement = document.getElementById('result-month-miles');
    resultElement.innerHTML = '<h3>' + carbonEmissionMonth.toFixed(3) + '</h3>';

    var resultElement = document.getElementById('result-year-miles');
    resultElement.innerHTML = '<h3>' + carbonEmissionYear.toFixed(3) + '</h3>';
}

document.getElementById('calculator-form-miles').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from actually submitting
    calculateCarbonEmissionMiles(); // Call the calculation function
});