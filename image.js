const imageDivs = document.querySelectorAll(".promote-section__instagram-to");

imageDivs.forEach((div, i)=> {
    const src = `./cat-${i + 1}.jpg`;
    div.style.backgroundImage = `url(${src})`;
})

