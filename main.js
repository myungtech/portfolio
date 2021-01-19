'use strict'

// 스크롤이 될 때마다 등록한 이 함수를 호출해줘
// Arrow function : 아무런 인자를 받지 않고
// 우리가 원하는 블럭을 실행 

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll',()=>{
    console.log(window.scrollY);
    console.log('navbarHeight >>> '+    navbarHeight);

    if(window.scrollY > navbarHeight){
        // 클래스 리스트를 추가해 줄건데
        navbar.classList.add('navbar--dark');
    }else{
        navbar.classList.remove('navbar--dark');
    }   
})