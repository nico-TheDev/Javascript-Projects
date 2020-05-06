let add,minus,bar,count,actualCount;

add = document.querySelector('.add');
minus = document.querySelector('.minus');
bar = document.querySelector('.bar');
count = document.querySelector('.count');
actualCount = 0;

count.textContent = '0';

function increase(){
    console.log('increasing');
    actualCount+=1;
    console.log(actualCount);
    bar.style.height = actualCount + '%';
    bar.style.backgroundColor = '#c0392b';
    count.textContent = actualCount;
}

function decrease(){   
    console.log('decresing');
    actualCount--;
    console.log(actualCount);
    bar.style.height = actualCount + '%';
    bar.style.backgroundColor = '#2980b9';
    count.textContent = actualCount;

}

add.addEventListener('click',increase);
minus.addEventListener('click',decrease);
