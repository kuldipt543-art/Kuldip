/* MOBILE MENU TOGGLE */
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", function(){
        navMenu.classList.toggle("active");
    });
}

/* CLOSE MOBILE MENU AFTER CLICK */
const navLinks = document.querySelectorAll(".nav-menu a");
if (navLinks.length > 0) {
    navLinks.forEach(function(link){
        link.addEventListener("click", function(){
            if (navMenu) navMenu.classList.remove("active");
        });
    });
}

/* SCROLL TO TOP BUTTON */
const scrollTop = document.getElementById("scrollTop");

if (scrollTop) {
    window.addEventListener("scroll", function(){
        if(window.scrollY > 400){
            scrollTop.style.display = "block";
        }else{
            scrollTop.style.display = "none";
        }
    });

    scrollTop.addEventListener("click", function(){
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    });
}

/* CONTACT FORM SUBMIT */
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event){
        event.preventDefault();

        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

        if(name === "" || phone === "" || message === ""){
            alert("Please fill all the fields.");
            return;
        }

        alert("Thank you " + name + "! Your enquiry has been received.");
        contactForm.reset();
    });
}

/* SAFE FADE-IN SCROLL ANIMATION */
const sections = document.querySelectorAll(".section");

if (sections.length > 0) {
    const observer = new IntersectionObserver(
        function(entries){
            entries.forEach(function(entry){
                if(entry.isIntersecting){
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }
            });
        },
        { threshold: 0.10 }
    );

    sections.forEach(function(section){
        section.style.opacity = "0";
        section.style.transform = "translateY(25px)";
        section.style.transition = "opacity 0.7s ease, transform 0.7s ease";
        observer.observe(section);
    });
}
