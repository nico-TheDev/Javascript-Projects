let button  = document.querySelector('.btn');


button.addEventListener('click',function(){
    let message = document.getElementById('message-content').value;
    let lastMessage = document.querySelector('.last-message');

    lastMessage.textContent = message;

});
