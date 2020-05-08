
// UIController

let UIController = (function(){
    let DOMStrings = {
        nameInput : 'name',
        courseInput :'course',
        authorInput : 'author',
        submitBtn :'.btn',
        card : '.card',
        gallery : '.gallery'
    }


    return{

        getInputValue:function(){
            return{
                nameInput : document.getElementById(DOMStrings.nameInput).value,
                courseInput: document.getElementById(DOMStrings.courseInput).value,
                authorInput: document.getElementById(DOMStrings.authorInput).value,
                submitBtn:document.querySelector(DOMStrings.submitBtn),
                card:document.querySelector(DOMStrings.card),
                gallery:document.querySelector(DOMStrings.gallery)
            }
        },

        getDOMStrings:function(){
            return DOMStrings;
        },

        assignValue:function(obj){
            let htmlCard,element;
            element = document.querySelector(DOMStrings.gallery);
            htmlCard = ` <div class="card">
            <div class="card__cover" style="background-image:url(../img/${ Math.floor(Math.random() * 9)}.jpg);"></div>
            <p class="card__name"><span class="colored">Name:</span> <span class="nameText">${obj.name}</span></p>
            <p class="card__course"><span class="colored">Course:</span> <span class="courseText">${obj.course}</span></p>
            <p class="card__author"><span class="colored">Author:</span> <span class="authorText">${obj.author}</span></p>
        </div>`;


            element.insertAdjacentHTML('beforeend',htmlCard);

        },

    }

})();

// CONTROLLER

let controller = (function(UICtrl){
    let DOMStrings = UICtrl.getDOMStrings();
    let DOMItem = UICtrl.getInputValue();

    let NewCard = function(name,course,author){
        this.name = name;
        this.course = course;
        this.author = author;
    }


    function resetInput(){
        document.getElementById(DOMStrings.authorInput).value = '';
        document.getElementById(DOMStrings.courseInput).value = '';
        document.getElementById(DOMStrings.nameInput).value = '';
    }

    function addCard(){
        DOMItem = UICtrl.getInputValue();

        if (DOMItem.nameInput === '' || DOMItem.authorInput === '' || DOMItem.courseInput === ''){
            alert('Input fields cannot be empty.');
        }
        else{
            // let clonedCard = DOMItem.card.cloneNode(true);
            // let random = Math.floor(Math.random() * 9);
            // clonedCard.children[0].style.backgroundImage = `url(./img/${random}.jpg)`;
            // clonedCard.children[1].lastElementChild.textContent = DOMItem.nameInput;
            // clonedCard.children[2].lastElementChild.textContent = DOMItem.courseInput;
            // clonedCard.children[3].lastElementChild.textContent = DOMItem.authorInput;
            // DOMItem.gallery.appendChild(clonedCard);
            let newCard = new NewCard(DOMItem.nameInput,DOMItem.courseInput,DOMItem.authorInput);

            UICtrl.assignValue(newCard);
            resetInput();

        }
    }

    resetInput();

    DOMItem.submitBtn.addEventListener('click',addCard);

    document.addEventListener('keypress',(e)=>{
        if(e.keyCode === 13 || e.which === 13){
            addCard();
        }
    });

    


})(UIController);