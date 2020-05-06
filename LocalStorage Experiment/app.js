let theList = document.querySelector('.theList');
let theInput = document.querySelector('.theInput');

let addBtn = document.querySelector('.add');
let clearBtn = document.querySelector('.clear');
let item = document.querySelector('.item');
let itemCount = 0;

updateList();

function updateList(){

    console.log('im working');
    for(let i = 0 ; i < localStorage.length;i++){
        let itemClone = item.cloneNode(true);
        itemClone.textContent = localStorage.getItem(i);
    
        theList.appendChild(itemClone);
    }
}
    


// theInput.addEventListener('keyup',update);

console.log(localStorage.getItem(0));

addBtn.addEventListener('click',function(){
    updateList();
    console.log(localStorage);
    localStorage.setItem(itemCount,theInput.value);
    itemCount++;

});


clearBtn.addEventListener('click',() =>{
    console.log('Cleared');
    localStorage.clear();
    console.log(localStorage);
    theInput.value = '';
});

