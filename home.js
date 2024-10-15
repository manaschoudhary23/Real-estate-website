const menuToggle = document.getElementById("menuToggle");
const sideBar = document.getElementById("sideBar");
const closeSidebar = document.getElementById("closeSidebar");
const navBar = document.getElementById("navBar");

menuToggle.addEventListener("click", (e) => {
    e.preventDefault(); 
    sideBar.style.display = "flex";
    navBar.classList.add("hidden"); 
    setTimeout(() => { sideBar.classList.add("active"); }, 10); 
});

closeSidebar.addEventListener('click', (e) => {
    e.preventDefault(); 
    sideBar.classList.remove('active');
    setTimeout(() => {
        sideBar.style.display = "none"; 
        navBar.classList.remove("hidden"); 
    }, 300); 
});

sideBar.querySelectorAll('a').forEach(link => {
    if (link.id !== "closeSidebar") { 
        link.addEventListener('click', () => {
            sideBar.classList.remove("active");
            setTimeout(() => {
                sideBar.style.display = "none"; 
                navBar.classList.remove("hidden"); 
            }, 300); 
        });
    }
});

const slider = document.getElementById('slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentPosition = 0;

slider.addEventListener('mouseover', () => {
    slider.style.animationPlayState = 'paused';
});

slider.addEventListener('mouseout', () => {
    slider.style.animationPlayState = 'running';
});

nextBtn.addEventListener('click', () => {
    const cardWidth = document.querySelector('.card').offsetWidth + 40;
    const sliderWidth = slider.scrollWidth;
    const maxPosition = sliderWidth - slider.parentElement.offsetWidth;

    if (currentPosition < maxPosition) {
        currentPosition += cardWidth;
        slider.style.transform = `translateX(-${currentPosition}px)`;
    }
});

prevBtn.addEventListener('click', () => {
    const cardWidth = document.querySelector('.card').offsetWidth + 40;

    if (currentPosition > 0) {
        currentPosition -= cardWidth;
        slider.style.transform = `translateX(-${currentPosition}px)`;
    }
});

