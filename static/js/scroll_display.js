var elementVisibleDict = {
    'image-container': 300,
    'landing-image': 500,
    'overlay-text': 150, 
    'home-container': 150,
    'text-container': 50
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal")
    for (var i = 0; i < reveals.length; i++) {
        var name = reveals[i].className.split(' ')[0];
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = elementVisibleDict[name];
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();