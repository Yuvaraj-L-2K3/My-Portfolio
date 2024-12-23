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
  

    // scrollreveal animation

    const sr =ScrollReveal({
        origin:'top',
        distance:'60px',
        duration:2500,
        delay:400,
    })
    
    sr.reveal(`.last-text`)
    sr.reveal(`.about-img`,{delay:700, origin:'bottom'})
    sr.reveal(`.row,.view,.pricing__card ,.bottom`,{interval:100})
    sr.reveal(` .left-sidet`,{origin:'left'})
    sr.reveal(`.right-side`,{origin:'right'})