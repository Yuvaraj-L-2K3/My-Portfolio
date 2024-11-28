var typed= new Typed (".text", {
        strings : ["Frontend Developer","Web Developer","Backend Developer"],
        typeSpeed : 100,
        backSpeed : 100,
        backDelay : 100,
        loop : true
    });



    document.getElementById('btn-nav').addEventListener('click', function() {
        var navbar = document.getElementById('navbar');
        var overlay = document.getElementById('nav-overlay');
        if (navbar.style.display === "block") {
            navbar.style.display = "none";
            overlay.style.display = "none";
        } else {
            navbar.style.display = "block";
            overlay.style.display = "block";
        }
    });
    