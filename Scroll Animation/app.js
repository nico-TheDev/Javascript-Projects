const sections = document.querySelectorAll(".section");

window.onscroll = function () {
    const offsetY = window.pageYOffset; // measures the offset of the page from the top
    sections.forEach((section) => { 
        const sectionY = section.offsetTop; // get the offset of each sections from the top of the page
        if (offsetY + 200 > sectionY) { // compare the measurement plus 200 so the animation will show before scrolling through the page
            section.firstElementChild.style.animationPlayState = "running"; // starts the animation
        }
    });
};

const images = document.querySelectorAll("img.panel__sub");
const main = document.querySelector(".panel__main img");

images.forEach((img) => {
    img.addEventListener("mouseover", showMouse);
});

function showMouse(e) {
    const current = e.target.dataset.number;

    const subImg = document.querySelectorAll(".subImg");
    const currentImg = document.querySelector(
        `.subImg[data-number="${current}"]`
    );

    subImg.forEach(img => img.classList.remove('showImg'));
    currentImg.classList.add('showImg');

    // subImg.forEach(img => img.className = 'subImg');
}
