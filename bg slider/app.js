let slider,prev,next,images,count;

slider = document.querySelector('.slider');
prev = document.querySelector('.prev');
next = document.querySelector('.next');

images = [1,2,3,4,5,6,7]; // we will get the picture number

count = 0;
let buttons = document.querySelectorAll('.btn');

console.log(images.length);


next.addEventListener('click',function(){
    count++;
    console.log(count);
    if (count >= images.length - 1){
        count = 0;
    }

    slider.style.backgroundImage = `url(bg-${images[count]}.jpg)`;
});

prev.addEventListener('click',function(){
    console.log(count);
    count-- ;
    if(count < 0){
        count = 6 ;
    }


    slider.style.backgroundImage = `url(bg-${images[count]}.jpg)`;
});