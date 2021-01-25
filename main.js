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
    navbarMenu.classList.remove('open'); //메뉴를 눌러서 지점으로 가면 창이 닫힐수 있도록
    scrollIntoView(link);
});

//Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click',()=>{
navbarMenu.classList.toggle('open');

});

// Handle click on "contact me" buttom on home
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click',(event)=>{
    scrollIntoView('#contact');
});

// Make home slowly fade to transparent as the window scrolls down
// home의 요소가져옴
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{

// console.log(`homeHeight>>> ${homeHeight}`);
// console.log(1 - window.scrollY / homeHeight);
// opacity >> 0(투명) 1(불투명)

home.style.opacity = 1 - window.scrollY / homeHeight;

});

// "Show arrow up" button when scrolling down (스크롤링이 되면 나타나게)
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll',()=>{
    // 현재 스크롤 상태가 home의 절반 높이를 넘어 섰을때
    if(window.scrollY > homeHeight/2){  
        arrowUp.classList.add('visible');
    }else{
        arrowUp.classList.remove('visible');
    }
});

//Handle click on the "arrow up" button
arrowUp.addEventListener('click',()=>{
    scrollIntoView('#home');
});

//Projects
//work 버튼들이 들어있는 컨테이너
const workBtnContainer = document.querySelector('.work__categories');
//프로젝트가 들어있는 컨테이너
const projectContainer = document.querySelector('.work__projects');
//각각의 프로젝트들을 배열로 전부의 프로젝트를
const projects = document.querySelectorAll('.project');

workBtnContainer.addEventListener('click',(e) =>{
const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;

if(filter == null){
    return;
}

//Remove selection from the previous item and select the new one
const active = document.querySelector('.category__btn.selected');
active.classList.remove('selected');
// 노드이름이 버튼이면 그냥 타겟 but 아니라면( span 이라면) 부모노드 버튼으로 타겟
const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
target.classList.add('selected');

projectContainer.classList.add('anim-out');

//0.3초가 지나고 settimeout안에 함수 실행
    setTimeout(() =>{
        //projects array의 아이템들을 foreach하나당 각각 번갈아 가면서 하나씩!
    projects.forEach((project) =>{
        // console.log(project.dataset.type);
        
        //all이거나 filter가 project에 있는 dataset.type이 똑같으면
        if(filter ==='*'||filter ===project.dataset.type){
            //프로젝트의 클래스 제거
            project.classList.remove('invisible');
        }else{
            project.classList.add('invisible');
        }
    });

        projectContainer.classList.remove('anim-out');
    
    },300);

});


function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView( {behavior: "smooth"});
}
