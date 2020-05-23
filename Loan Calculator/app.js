document.querySelector('#loan-form').addEventListener('submit',(e)=>{
    const loader = document.querySelector('.loading');
    const results = document.getElementById('results');

    loader.style.display = 'block';
    results.style.display = 'none';

    setTimeout(calculateResult,2000);
    e.preventDefault();

});


// calculate results

function calculateResult() {
    
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');

    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    // Monthly payments
    const x = Math.pow(1 + calculatedInterest,calculatedPayments );
    const monthly = (principal*x*calculatedInterest) / (x - 1);

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);

        document.getElementById('results').style.display = 'block';
        document.querySelector('.loading').style.display = 'none';

     
    }else{
        showError('Please check your inputs');
    }
    
    console.log('calculate');
}

function showError(error){
    document.querySelector('.loading').style.display = 'none';
    const errorDiv = document.createElement('div');

    // get element

    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(error));


    card.insertBefore(errorDiv,heading);

    setTimeout(()=>{
        errorDiv.remove();
    },2000);
}