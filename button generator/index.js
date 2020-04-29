/*
   padding: 1rem 2rem;
    font-size: 2rem;
    border-radius: 2rem;
    border: none;
    text-transform: uppercase;
    background-color: gray;
    color: white;
    box-shadow: 0 0 1rem  rgba(black,0.7);
 */

 console.log('working');

 let theButton = document.querySelector('.btn');

//  console.log(randomFontSize);

 document.querySelector('.generate').addEventListener('click',function(){
    //  Random Values
    let randomFontSize = (Math.random() * 2) + 1;
    let randomR = (Math.random() * 255);
    let randomG = (Math.random() * 255);
    let randomB = (Math.random() * 255);
    let bgColor = `rgba(${randomR},${randomG},${randomB})`;
    let padY = (Math.random() * 2) + 1;
    let padX = (Math.random() * 3) + 1;
    let borderRadius = (Math.random() * 2);
    let properties = theButton.style;


    // APPLICATION
    theButton.style.fontSize = randomFontSize + 'rem';
    theButton.style.backgroundColor = bgColor;
    theButton.style.padding = `${padY}rem ${padX}rem`;
    theButton.style.borderRadius = borderRadius + 'rem';
    theButton.style.boxShadow = `0 0 ${randomFontSize}rem ${bgColor}`;


    console.log(bgColor);
    console.log(randomFontSize);
 });