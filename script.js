// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
            });
        }
    });
});

//scrollbar color change 
window.addEventListener("scroll",function(){
    if(window.scrollY > 100){
        document.body.classList.add("scrolled");
    }else{
        document.body.classList.remove("scrolled");
    }
});
