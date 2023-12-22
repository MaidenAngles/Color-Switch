const Img = ["url(burger.jpg)", "url(chicken.jpg)", "url(pizza.jpg)"];
const btn = document.getElementById("btn");
const Imgs = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomImg = getRandomNumber();
  // console.log(randomNumber);

 
  document.body.style.backgroundImage = Img[randomImg];
  Imgs.textContent = Img[randomImg];
});

function getRandomNumber() {
  return Math.floor(Math.random() * Img.length);
}