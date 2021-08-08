const images = [
    "01.jpg", "02.jpg", "03.jpg", "04.jpg"
];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.querySelector("body");

bgImage.style.backgroundImage = `url(img/${chosenImage})`;
bgImage.style.backgroundSize = "cover";