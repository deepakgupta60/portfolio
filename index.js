let x = document.getElementById("headerText");
let img = document.getElementById("image");
img.addEventListener("mouseenter", (e) => {
  if (screen.width > 700) {
    x.textContent = "GAJANAN BODHANKAR";
    x.style.color = "white";
    img.style.cursor = "pointer";
    x.style.transform = "translate(10%)";
    x.style.animation = "slider 1s ease-in-out";
    x.style.letterSpacing = "0.2em";
  }
});
img.addEventListener("mouseout", (e) => {
  if (screen.width > 700) {
    x.textContent = "GAJANAN BODHANKAR";
    x.style.transform = "translate(-28%)";
    x.style.animation = "rightToLeft 1s ease-in-out";
    x.style.color = "rgb(42, 40, 40)";
  }
});

document
  .querySelector(".navbar-toggler")
  .addEventListener("click", function (e) {});

async function changeIcon() {
  setTimeout(() => {
    if (document.getElementById("span").className == "navbar-toggler-icon") {
      document.getElementById("span").className = "";
      document.getElementById("span").textContent = "x";
      document.getElementById("span").style.fontSize = "2rem";
      document.getElementById("span").style.padding = "0em 0.2em";
      document.getElementById("span").style.marginBottom = "2rem !important";
    } else {
      document.getElementById("span").className = "navbar-toggler-icon";
      document.getElementById("span").textContent = "";
      document.getElementById("span").style.fontSize = "";
      document.getElementById("span").style.padding = "0rem";
      document.getElementById("span").style.marginBottom = "0rem";
    }
  }, 300);
}

document.addEventListener("DOMContentLoaded", (event) => {
  let body = document.querySelector("body");
  let footer = document.querySelector("footer");
  console.log(body.scrollHeight, window.innerHeight,body.clientHeight)
  if (body.clientWidth < 768) {
    footer.classList.remove('footerFixed')
  } else if (body.scrollHeight < window.innerHeight) {
    footer.classList.add("footerFixed");
  } else {
    footer.classList.remove("footerFixed");
  }
});

document.addEventListener("scroll", () => {});