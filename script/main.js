var typed= new Typed (".text", {
        strings : ["Frontend Developer","Web Developer","Backend Developer"],
        typeSpeed : 100,
        backSpeed : 100,
        backDelay : 100,
        loop : true
    });


    const hamburger = document.querySelector(".hamburger")
    const navMenu = document.querySelector(".nav-menu")
    
    hamburger.addEventListener("click", mobileMenu)
    
    function mobileMenu() {
        hamburger.classList.toggle("active")
        navMenu.classList.toggle("active")
    }
    
    
    // when we click on hamburger icon its close 
    
    const navLink = document.querySelectorAll(".nav-link")
    
    navLink.forEach(n => n.addEventListener("click", closeMenu))
    
    function closeMenu() {
        hamburger.classList.remove("active")
        navMenu.classList.remove("active")
    }