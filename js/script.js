const navList = document.querySelector(".nav-lists");
const navListLinks = document.querySelector(".nav-lists-links")
const navToggle = document.querySelector(".menu-toggle");

navToggle.addEventListener("click", () =>{
    const visibility = navList.getAttribute("data-visible");
    if(visibility === "false"){
        navList.setAttribute('data-visible',true);
        navToggle.setAttribute('aria-expanded',true);
    }else if(visibility === "true"){
        navList.setAttribute('data-visible',false);
        navToggle.setAttribute('aria-expanded',false);
    }
})


//  for the active link highlight in nav
document.addEventListener('DOMContentLoaded', function(){
    var navMenus = document.querySelectorAll('#nav-lists ul li a');
    var currentPage = document.location.pathname.split('/').pop();
    
    navMenus.forEach(function(link){
        if(link.getAttribute('href') === currentPage){
            link.classList.add('active');
        }
    });
})
