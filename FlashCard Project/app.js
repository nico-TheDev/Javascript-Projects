// UI CONTROLLER
let UIController = (function(){

    let DOMStrings = {
        addCardBtn:'.add-card',
        questionContainer:'.question',
        saveBtn:'.question__submit',
        showBtn:'flashcard__show',
        editBtn:'edit',
        deleteBtn:'delete',
        questionInput:'.question__text',
        answerInput:'.question__answer',
        flashcardContainer:'.flashcards'
    }

    return{

        getInput:function(){
            return {
                questionText: document.querySelector(DOMStrings.questionInput).value,
                ansText: document.querySelector(DOMStrings.answerInput).value
            }
        },

        getDOMStrings:function(){
            return DOMStrings;
        },

        addCard:function(obj){
            let html;

            html = `<div class="flashcard" id="${localStorage.length - 1}"><h3 class="flashcard__title">Question</h3><p class="flashcard__question">${obj.question}</p><button class="flashcard__show btn">Show Answer</button><p class="flashcard__answer">${obj.answer}</p><div class="flashcard__buttons"><button class="edit">🖋</button><button class="delete">&times;</button></div></div>`;


            document.querySelector(DOMStrings.flashcardContainer).insertAdjacentHTML('beforeend',html);

        }
       
    }

})();


// QUESTION CONTROLLER 
let QuestionController = (function(){

    let QuestionText = function(question,answer){
        this.question = question;
        this.answer = answer;
    }


    let allQuestions = [];

    return{
        saveToArray:function(q,ans){

            let questionCard = new QuestionText(q,ans);
            allQuestions.push(questionCard);

            for(let i = 0; i < allQuestions.length;i++){
                localStorage.setItem(i,JSON.stringify(allQuestions[i]));
            }

            return questionCard;
            
        }
    }
})();


// GLOBAL CONTROLLER

let controller = (function(UICtrl,QuestionCtrl){

    let DOMStrings = UICtrl.getDOMStrings();
    let inputValues;
    let showBtnAll,delBtnAll,editBtnAll;
    updateEventHandlers();
    updateCards();

    function setupEventHandlers(){

            // Open Card
        document.querySelector(DOMStrings.addCardBtn).addEventListener('click',()=>{
            document.querySelector(DOMStrings.questionContainer).classList.add('open');
        });

        // Save Event 

        document.querySelector(DOMStrings.saveBtn).addEventListener('click',()=>{
            updateEventHandlers();
            let flashcard;
            inputValues = UICtrl.getInput()
            flashcard = QuestionCtrl.saveToArray(inputValues.questionText,inputValues.ansText);
            UICtrl.addCard(flashcard);
            updateEventHandlers();
            document.querySelector(DOMStrings.answerInput).value = '';
            document.querySelector(DOMStrings.questionInput).value = '';
        });


       
    }

    function updateEventHandlers(){
        showBtnAll = document.getElementsByClassName(DOMStrings.showBtn);
        delBtnAll = document.getElementsByClassName(DOMStrings.deleteBtn);
        editBtnAll = document.getElementsByClassName(DOMStrings.editBtn);

        Array.from(showBtnAll).forEach(button =>{
            // shows the answer 
            button.addEventListener('click',(e)=>{
                console.log('clicking');
                e.target.nextElementSibling.classList.toggle('show');
                
            });
        });

        Array.from(delBtnAll).forEach(button =>{
            // delete object from local Storage based on id 
            //set current element display to none
            button.addEventListener('click',(e)=>{
                console.log('clicking');
                e.target.parentElement.parentElement.style.display = 'none';
                let elemID = e.target.parentElement.parentElement.id;
                localStorage.removeItem(elemID);
            });
        });

        Array.from(editBtnAll).forEach(button =>{
            // edit object from local Storage based on id 
            //set current element display to none
            button.addEventListener('click',(e)=>{
                // e.target.parentElement.parentElement.style.display = 'none';

                // let elemID = e.target.parentElement.parentElement.id;
                // localStorage.SetItem(elemID);

                //get the set the local storage item with the id
                //show the question input with item values from local storage
                //remove the current item with display none

                
            });
        });
    }

    function updateCards(){
        //Update flashcards based on the local storage items

        for (let i = 0; i < localStorage.length;i++){
            updateEventHandlers();
            let parsedItem = JSON.parse(localStorage.getItem(i));
            inputValues = UICtrl.getInput()
            UICtrl.addCard(parsedItem);
            updateEventHandlers();
        }
    }


    return{
        init:function(){
            setupEventHandlers();
        }
    }

})(UIController,QuestionController);


controller.init();

