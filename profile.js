
let bio = document.getElementById('bio');
let education = document.getElementById('education');
let experience = document.getElementById('experience');

let bioSlide = document.getElementById('bio-slide');
let educationSlide = document.getElementById('education-slide');
let experienceSlide = document.getElementById('experience-slide');

//by default Education and Experience sections are hidden
educationSlide.style.display = "none"
experienceSlide.style.display = "none"
bio.style.backgroundColor = "#647bff7d"
bio.style.color = "#647BFF"

bio.addEventListener('click', () => {
    bioSlide.style.display = "block"
    educationSlide.style.display = "none"
    experienceSlide.style.display = "none"
    bio.style.backgroundColor = "#647bff7d"
    bio.style.color = "#647BFF"
    education.style.backgroundColor = ""
    education.style.color = ""
    experience.style.backgroundColor = ""
    experience.style.color = ""
})

education.addEventListener('click', () => {
    bioSlide.style.display = "none"
    educationSlide.style.display = "block"
    experienceSlide.style.display = "none"
    education.style.backgroundColor = "#647bff7d"
    education.style.color = "#647BFF"
    bio.style.backgroundColor = ""
    bio.style.color = ""
    experience.style.backgroundColor = ""
    experience.style.color = ""
})

experience.addEventListener('click', () => {
    bioSlide.style.display = "none"
    educationSlide.style.display = "none"
    experienceSlide.style.display = "block"
    experience.style.backgroundColor = "#647bff7d"
    experience.style.color = "#647BFF"
    education.style.backgroundColor = ""
    education.style.color = ""
    bio.style.backgroundColor = ""
    bio.style.color = ""
})



// typing Animation

var i = 0;
var txt = 'HELLO';
var speed = 500;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
window.onload = typeWriter;



// Navbar responsive





const navbar = document.getElementById("show-nav");
navbar.addEventListener('click', (e) => {
    console.log("hello Nav");

})
