const testimonials = [
    {
        quote:"I'm not a great programmer; I'm just a good programmer with great habits.",
        name:"Kent Beck",
        picture:'/user1.jpg'
    },
    
    {
        quote:`Give a man a program, frustrate him for a day.Teach a man to program frustrate him for a lifetime.`,
        name:"Muhammad Waaseem",
        picture:'/user2.jpg'
    },

    {
        quote:`Give a man a program, frustrate him for a day.Teach a man to program, frustrate him for a lifetime.`,
        name:"Your Mom",
        picture:'/user3.jpg'
    },

    {
        quote:`The most disastrous thing that you can ever learn is your first programming language`,
        name:"Some Guy",
        picture:'/user4.jpg'
    },

    {
        quote:`A computer is like a violin. You can imagine a novice trying ﬁrst a phonograph and then a violin. The latter, he says, sounds terrible. That is the argument we have heard from our humanists and most of our computer scientists. Computer programs are good, they say, for particular purposes, but they aren’t ﬂexible. Neither is a violin, or a typewriter, until you learn how to use it.`,
        name:"The One",
        picture:'/user5.jpg'
    }

]

let user,username,quote,count,next,prev;
user = document.querySelector('.testimonial__img');
username = document.querySelector('.name');
quote = document.querySelector('.testimonial__text');
next = document.querySelector('.next');
prev = document.querySelector('.prev');

// count default
count = 0;

next.addEventListener('click',function(){
    count++;
    if(count >= testimonials.length){
        count = 0;
    }

    console.log(user.src);
    user.src = testimonials[count].picture;
    username.textContent = testimonials[count].name;
    quote.textContent = testimonials[count].quote;

});

prev.addEventListener('click',function(){
    count--;
    if(count < 0){
        count = testimonials.length - 1;
    }

    console.log(user.src);
    user.src = testimonials[count].picture;
    username.textContent = testimonials[count].name;
    quote.textContent = testimonials[count].quote;

});




