'use strict'

// 스크롤이 될 때마다 등록한 이 함수를 호출해줘
// Arrow function : 아무런 인자를 받지 않고
// 우리가 원하는 블럭을 실행 

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll',()=>{
    // console.log(window.scrollY);
    // console.log('navbarHeight >>> '+    navbarHeight);

    if(window.scrollY > navbarHeight){
        // navbar에 있는 클래스 리스트에 클래스를 추가해 줄건데
        navbar.classList.add('navbar--dark');
    }else{
        navbar.classList.remove('navbar--dark');
    }   
});

// Handle scrolling when tapping on the navbar menu
// 클릭했을때 원하는 아이디를 알아야한다.
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click',(event)=>{
    
    const target = event.target;
    const link = target.dataset.link;

    if(link == null){
        return;
    }
    // console.log(event.target.dataset.link);
    scrollIntoView(link);
});

//Handel click on "contact me" buttom on home
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click',(event)=>{
    scrollIntoView('#contact');
});

function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView( {behavior: "smooth"});
}
