// store the choices
//random generator
//display it to the list
//pick something out of that list
//disable the input and the buitton so they cant choose again

const input = document.querySelector('.app__input'),
      addBtn = document.querySelector('.add'),
      chooseBtn = document.querySelector('.choose'),
      choiceList = document.querySelector('.app__list'),
      form = document.querySelector('.app__field'),
      chosen = document.querySelector('.app__choice');

let choices = [];

function getRandom(){
    let random = Math.floor(Math.random() * choices.length);
    return random;
}

form.addEventListener('submit',addChoice);
chooseBtn.addEventListener('click',getChoice);
function addChoice(e){

    if(input.value === ''){
        alert('Enter something');
    }else{
        const li = document.createElement('li');
        li.className = 'app__item';
        li.appendChild(document.createTextNode(input.value));
        choices.push(input.value);
        console.log(choices);
        choiceList.appendChild(li);
        input.value = '';
    }
   
    e.preventDefault();
}

function getChoice(){
    let chosenOne;
    if (choices.length < 3){
        alert('no choices add more than 2')
    }else{
        chosenOne = choices[getRandom()];
    }

    document.querySelector('.loader').style.display = 'block';
    setTimeout(()=>{
        document.querySelector('.loader').style.display = 'none';
        chosen.textContent = chosenOne;
        chooseBtn.disabled = true;
        input.disabled = true;
        addBtn.disabled = true;
    },1500);

}