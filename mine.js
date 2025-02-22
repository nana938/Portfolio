let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let section = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height){
            navLink.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                document.getElementById("menu-icon").innerHTML
            })
        }
    })
}
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#dark-mode-toggle');
const enableDarkMode = () => {
    // add the class dark mode to the body
    document.body.classList.add('darkMode');
    // update darkmode in the localstorage
    localStorage.setItem('darkMode', 'active');
};

const disableDarkMode = () => {
    // remove the class dark mode to the body
    document.body.classList.remove('darkMode');
    // update darkmode in the localstorage
    localStorage.setItem('darkMode', null);
};

darkModeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem('darkMode')
    if (darkMode !== "active") {
        enableDarkMode();
        console.log(darkMode);
    } else {
        disableDarkMode();
        console.log('show')
       
    }
});
const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let index = 0;

nextBtn.addEventListener('click', () => {
  index = (index + 1) % 5;
  carousel.style.transform = `translateX(-${index * 100}%)`;
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + 5) % 5;
  carousel.style.transform = `translateX(-${index * 100}%)`;
});


gsap.registerPlugin(scrollTrigger);
gsap.utils.toArray("section").forEach((section) => {
    gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "section",
            start: "top 80%",
            end: " top 50%",
            toggleActions: "play none none reverse",
        }

    });
});

let lastScrollY = window.scrollY;
const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
        gsap.to(nav, { y: -100, duration: 0.3});
    } else{
        gsap.to(nav, { y: 0, duration: 0.3});
    }
    lastScrollY = window.scrollY;

});



document.getElementById("contact").addEventListener("submit", function(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData
    }).then(response => {
      if (response.ok) {
        document.getElementById("statusMessage").style.display = "block";
        form.reset();
      }
    }).catch(error => console.error("Error submitting form:", error));
  });


document.getElementById("whatsappBtn").addEventListener("click", function (){
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    if (!name || !phone || !message) {
        alert("Please fill in all fields before sending.");
        return;
    }

    let whatsappURL = `https://wa.me/09130801986?text=Name: ${name}%OAEmail: ${email}%OPhone: ${phone}%OMessage: ${message}`;
    window.open(whatsappURL, "_blank");
   
});


document.getElementById("termsPrivacyCheckbox").addEventListener("change", function() {
    let content = document.getElementById("termsPrivacyContent");
    if(this.checked) {
        content.classList.remove("hidden");
        content.classList.add("visible");

    } else {
        content.classList.remove("visible");
        content.classList.add("hidden");
    }
});

document.getElementById("closeTermsPrivacy").addEventListener("click", function(){
    let content = document.getElementById("termsPrivacyContent");
    content.classList.remove("visible");
    content.classList.add("hidden");
    document.getElementById("termsPrivacyCheckbox").checked = false;
});

