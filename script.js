// script typing

var typed = new Typed(".auto-type",{
    strings : ["a great team" , "happy to see you" , "best SEO agancy" , "always on top"],
    typeSpeed:100,
    backSpeed:50,
    looped:true
})

//script scroll cloud
let cloudBtn1=document.querySelector(".cloudBtn1");
let cloudBtn2=document.querySelector(".cloudBtn2");
let cloudBtn3=document.querySelector(".cloudBtn3");
const slider = document.querySelector(".clouds");
cloudBtn1.addEventListener("click",()=>{
    slider.style.translate = "0";
    cloudBtn1.style.background="var(--blue-color)";
    cloudBtn2.style.background="#fff";
    cloudBtn3.style.background="#fff";
});
cloudBtn2.addEventListener("click",()=>{
    slider.style.translate = "-290px";
    cloudBtn1.style.background="#fff";
    cloudBtn3.style.background="#fff";
    cloudBtn2.style.background="var(--blue-color)";
});
cloudBtn3.addEventListener("click",()=>{
    slider.style.translate = "-570px";
    cloudBtn1.style.background="#fff";
    cloudBtn2.style.background="#fff";
    cloudBtn3.style.background="var(--blue-color)";
});

//responsive
const navListBtn = document.querySelector(".navListBtn");
const navList = document.querySelector(".navList");
const removeMenu = document.querySelector(".removeMenu");
navListBtn.addEventListener("click",()=>{
    navList.style.display="block";
    navList.style.top="64px";
    navListBtn.style.display="none";
    removeMenu.style.display="block";
});
removeMenu.addEventListener("click",()=>{
    navList.style.display="none";
    navList.style.top="-300px";
    navListBtn.style.display="block";
    removeMenu.style.display="none";
});

//scroll 275
let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = 
    document.documentElement.scrollHeight-document.documentElement.clientHeight;
    let scrollValue = Math.round((pos*100)/calcHeight);
    if(pos>275){
        scrollProgress.style.display="block";
    }
    else{
        scrollProgress.style.display="none";
    }
    scrollProgress.addEventListener("click",()=>{
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(var(--blue-color) ${scrollValue}%, #d7d7d7 ${scrollValue}%)`
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

