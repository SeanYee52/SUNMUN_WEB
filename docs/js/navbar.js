const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');

let isOpen = false;

menuToggle.addEventListener('click', () => {
    isOpen = !isOpen;

    if (isOpen) {
        // OPEN MENU
        navMenu.classList.remove('max-h-0', 'opacity-0', 'pointer-events-none');
        navMenu.classList.add('max-h-[500px]', 'opacity-100', 'pointer-events-auto');
        
        // ANIMATE ICON TO 'X'
        line1.style.transform = "rotate(45deg) translate(2px, -2px)";
        line2.style.transform = "translateX(50px)";
        line2.style.opacity = "0";
        line3.style.transform = "rotate(-45deg) translate(2px, 2px)";
    } else {
        // CLOSE MENU
        navMenu.classList.add('max-h-0', 'opacity-0', 'pointer-events-none');
        navMenu.classList.remove('max-h-[500px]', 'opacity-100', 'pointer-events-auto');
        
        // RESET ICON TO HAMBURGER
        line1.style.transform = "rotate(0) translate(0, 0)";
        line2.style.transform = "translateX(0)";
        line2.style.opacity = "1";
        line3.style.transform = "rotate(0) translate(0, 0)";
    }
});

// Close menu if a link is clicked
const links = navMenu.querySelectorAll('a');
links.forEach(link => {
    link.addEventListener('click', () => {
        if(isOpen) menuToggle.click();
    });
});