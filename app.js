//Listen for submit
document.querySelector("#loan-form").addEventListener('submit', calculateResults);

// Calculate Results
function calculateResults(e) {
    console.log('CALCULATING...');

    const amount = document.querySelector('#amount');
    const interest = document.querySelector('#interest');
    const years = document.querySelector('#years');
    const monthlyPayment = document.querySelector('#monthly-payment');
    const totalPayment = document.querySelector('#total-payment');
    const totalInterest = document.querySelector('#total-interest');


   e.preventDefault();
}