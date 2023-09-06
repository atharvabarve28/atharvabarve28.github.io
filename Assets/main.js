var typed = new Typed('.typer', {
  strings: ['Developer. ', 'Graphic Designer. ', 'Gamer. '],
  typeSpeed: 80,
  backSpeed: 80,
  loop: true
});

let valueNumbers = document.querySelectorAll(".exp-number");
let interval = 100000;

valueNumbers.forEach((valueNumbers) => {
  let startValue = 0;
  let endValue = parseInt(valueNumbers.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(() => {
    startValue += 1;
    valueNumbers.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration)
});


document.addEventListener("click", function (e) {
  if (e.target.classList.contains(gallery - item)) {
    const src = e.target.getAttribute("src");
    document.querySelector(".modal-img").src = src;
    const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'))
    myModal.show();
  }
});