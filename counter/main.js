//targeting all elements
const insta = document.getElementById("insta");
const fb = document.getElementById("fb");
const twitter = document.getElementById("twitter");

//initial value Setup
let timer = 0;

//code will run after 2 sec delay
setTimeout(function(){
    let count = setInterval(function(){
        insta.innerText = timer* 4;
        fb.innerText = timer*35;
        twitter.innerText = timer*3;
    
        //timer will increase by 1
        timer++
        
        //count function will stop if condition is true
        if (timer == 101) {
            window.clearInterval(count)
        }
    },10)
},2000)

