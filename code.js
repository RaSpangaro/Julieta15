
  const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

let countDown = new Date('Feb 25, 2023 21:00:00').getTime(),
x = setInterval(function() {

  let now = new Date().getTime(),
      distance = countDown - now;

  document.getElementById('dias').innerText = Math.floor(distance / (day)),
  document.getElementById('horas').innerText = Math.floor((distance % (day)) / (hour)),
  document.getElementById('minutos').innerText = Math.floor((distance % (hour)) / (minute)),
  document.getElementById('segundos').innerText = Math.floor((distance % (minute)) / second);

}, second)




const gap = 16;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));
