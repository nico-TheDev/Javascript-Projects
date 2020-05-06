
// GET THE value of inputs, button

let calcBtn,billAmount,numberOfPeople,rate,totalBill,totalTip,splitAmount,tip;

calcBtn = document.querySelector('.calc__result');
billAmount = document.querySelector('#bill');
numberOfPeople = document.querySelector('#count');
rate = document.querySelector('#service');

totalText = document.querySelector('.totalAmount');
splitText = document.querySelector('.splitAmount');
tipText = document.querySelector('.totalTip')
calcBtn.addEventListener('click',getReceipt);


function getReceipt(){
    console.log(billAmount,rate,numberOfPeople);
    if (billAmount.value > 0 && rate.value > 0 & numberOfPeople.value > 0){
        animate();
        setTimeout(calcTip,2000);
    }
    else{
        totalText.textContent = 'Positive Numbers only';
        tipText.textContent = 'greater than 0 only';
        splitText.textContent = 'please choose a service...'; 
        document.querySelector('.receipt').style.height = '100%';
        let para = document.querySelectorAll('p');
        para.forEach(function(item){
            item.style.color = 'red';
        });
        setTimeout(hide,5000);
    }
}


function calcTip(){    
    tip = billAmount.value * rate.value;
    totalBill = Number(billAmount.value) + Number(tip);
    splitAmount = Number(totalBill) / Number(numberOfPeople.value);
    totalText.textContent = 'Total Bill:$ ' + parseFloat(totalBill).toFixed(2);
    tipText.textContent = 'Total Tip:$ ' + parseFloat(tip).toFixed(2);
    splitText.textContent = 'Split Amount:$ ' + parseFloat(splitAmount).toFixed(2); 
    document.querySelector('.receipt').style.height = '100%';
    setTimeout(hide,5000);
}

function hide(){
    document.querySelector('.receipt').style.height = '0%';
    billAmount.value = '';
    numberOfPeople.value = '';
    rate.value = '';
    document.querySelector('.loading').style.opacity ='0';
    document.querySelector('.circle1').classList.remove('animate1');
    document.querySelector('.circle2').classList.remove('animate2');
    document.querySelector('.circle3').classList.remove('animate3');
}

function animate(){
    document.querySelector('.loading').style.opacity ='1';
    document.querySelector('.circle1').classList.add('animate1');
    document.querySelector('.circle2').classList.add('animate2');
    document.querySelector('.circle3').classList.add('animate3');
}