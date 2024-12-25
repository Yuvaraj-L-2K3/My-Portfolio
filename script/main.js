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
    

    

    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var number=document.getElementById('number').value;
        var message = document.getElementById('message').value;
        
        var receiver = 'yuvarajl2025@gmail.com'; // Replace with the actual receiver's email
        var subject = 'Feedback from ' + name;
        var body = 'Name: ' + name +"\n" ;
        body += 'Email: ' + email + "\n";   
        body += 'Number: ' + number + "\n";   
        body += 'Message:\r\n' + message;
        
        window.location.href = 'mailto:' + receiver + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    });
