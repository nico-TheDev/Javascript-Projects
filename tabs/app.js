let buttons = document.querySelectorAll('.btn');
let title = document.querySelector('.wrapper__title');
let content = document.querySelector('.wrapper__content');



function setText (titleText,text){
    title.textContent = titleText;
    content.textContent = text;

}

buttons.forEach((item,index)=>{
    item.addEventListener('click',()=>{
        if(index === 0){
            setText('History','Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae vero et qui quam totam cumque distinctio assumenda consectetur necessitatibus dolorem? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus commodi magnam ducimus iure modi veniam.');
            buttons[0].classList.add('selected');
            buttons[1].classList.remove('selected');
            buttons[2].classList.remove('selected');
        }  
        else if(index === 1){
            setText('Mission','Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae natus quos, praesentium accusamus corporis eos similique ratione eum suscipit obcaecati pariatur doloribus adipisci? Excepturi ducimus, aperiam facilis libero doloribus molestiae?');
            buttons[0].classList.remove('selected');
            buttons[1].classList.add('selected');
            buttons[2].classList.remove('selected');
        }
        else if(index === 2){
            setText('Vision','Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae natus quos, praesentium accusamus ');
            buttons[0].classList.remove('selected');
            buttons[1].classList.remove('selected');
            buttons[2].classList.add('selected');
        }
    });
});