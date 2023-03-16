const insta = document.getElementById("insta");
const fb = document.getElementById("fb");
const twitter = document.getElementById("twitter");

let timer = 0;


let count = setInterval(function(){
    insta.innerText = timer* 4;
    fb.innerText = timer*35;
    twitter.innerText = timer*3;

    timer++
    if (timer == 101) {
        window.clearInterval(count)
    }
},20)

