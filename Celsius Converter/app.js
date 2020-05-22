// get elements - input , select , button

const convertBtn = document.querySelector('.btn');
const conversionInput = document.querySelector('.convert');
const type = document.getElementById('type');
const result = document.querySelector('.result');

// formula

convertBtn.addEventListener('click',convertValue);
document.addEventListener('keypress',(e)=>{
    if (e.keyCode === 13 && e.which === 13){
        convertValue();
    }
});

type.addEventListener('change',()=>{
    if(type.value === 'ctf'){
        result.nextSibling.textContent = 'Fahrenheit'
        result.textContent = '0';
    }
    else if (type.value === 'ftc'){
        result.nextSibling.textContent = 'Celsius'
        result.textContent = '0';
    }
});

function convertValue(){
    let toConvertValue,convertedValue;

    if(!isNaN(conversionInput.value) && conversionInput.value !== ''){
        if(type.value === 'ctf'){
            console.log('Convert from Celsius to Fahrenheit')
            toConvertValue = parseFloat(conversionInput.value);
            console.log(typeof toConvertValue);
            convertedValue = ((toConvertValue * (9/5)) + 32).toFixed(2);
            console.log(`${toConvertValue} degree celcius is equal to ${convertedValue} fahrenheit`);
        }
        else if (type.value === 'ftc'){
            //T(°C) = (T(°F) - 32) × 5/9
            console.log('Convert from Celsius to Fahrenheit')
            toConvertValue = parseFloat(conversionInput.value);
            console.log(typeof toConvertValue);
            convertedValue = ((toConvertValue - 32) * (5/9)).toFixed(2);
            console.log(`${toConvertValue} degree fahrenheit is equal to ${convertedValue} celsius`);
        }
    
        // display the results
    
        result.textContent = convertedValue;
    
        // Clear
    
        conversionInput.value = '';    }
    else{
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error';
        errorDiv.appendChild(document.createTextNode('Invalid Input'));

        document.querySelector('.converter').insertBefore(errorDiv,document.querySelector('.heading'));

        setTimeout(()=>{
            errorDiv.remove();
        },2000);
    }
    

   
}