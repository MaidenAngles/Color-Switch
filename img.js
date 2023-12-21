const Img = ["url(dog1.jpg)", ];
const btn = document.getElementById("btn");
const Imgs = document.querySelector(".Img");

btn.addEventListener("click", function () {
  const randomImg = getRandomNumber();
  // console.log(randomNumber);

 
  document.body.style.backgroundImage = Img[randomImg];
  color.textContent = Img[randomImg];
});

function getRandomNumber() {
  return Math.floor(Math.random() * Img.length);
}