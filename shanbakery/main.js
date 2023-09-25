const menuBtn=document.querySelector('#open-menu-btn');
const closeBtn=document.querySelector('#close-menu-btn');
const menu=document.querySelector('.nav_menu');

//open nav menu
menuBtn.addEventListener('click', () => {
    menu.style.display = 'block';
    closeBtn.style.display = 'inline-block';
    menuBtn.style.display = 'none';
})
// close  nav menu 

const closeNav = () => {
   menu.style.display = 'none';
   closeBtn.style.display='none';
   menuBtn.style.display='inline-block';
}
  closeBtn.addEventListener('click',closeNav);

//close nav menu when  menu items are clicked

if(window.innerWidth<1024){

    document.querySelectorAll(".nav_menu li a").forEach(navItem => {
        navItem.addEventListener('click',closeNav)
    })
}
//change navbar styles on scroll
window.addEventListener('scroll',() =>{
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY >0);
})
$(function(){
    $('.carousel-item').eq(0).addClass('active');
    var total = $('.carousel-item').length;
    var current = 0;
    $('#moveRight').on('click', function(){
      var next=current;
      current= current+1;
      setSlide(next, current);
    });
    $('#moveLeft').on('click', function(){
      var prev=current;
      current = current- 1;
      setSlide(prev, current);
    });
    function setSlide(prev, next){
      var slide= current;
      if(next>total-1){
       slide=0;
        current=0;
      }
      if(next<0){
        slide=total - 1;
        current=total - 1;
      }
             $('.carousel-item').eq(prev).removeClass('active');
             $('.carousel-item').eq(slide).addClass('active');
        setTimeout(function(){
  
        },800);
      
  
      
      console.log('current '+current);
      console.log('prev '+prev);
    }
  });