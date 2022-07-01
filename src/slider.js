const images = {
  unsplash: [
    "https://images.unsplash.com/photo-1656473031743-fa310ac815f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1656446413640-290e985532ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1656464411931-be8ee35d8c6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    "https://images.unsplash.com/photo-1656501029164-d1fefd9689f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1656414460775-af649ef3d968?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    "https://images.unsplash.com/photo-1656339882264-da09696c4480?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1656339882143-b629f18bfa52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1653958531645-fef7d3b83fc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80",
    "https://images.unsplash.com/photo-1654541245278-392677ee68ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
    "https://images.unsplash.com/photo-1655742043955-96ddc29cdfd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1655940646105-3f1afd0ecf72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  ],
};

const arrayEl = images.unsplash.length;
const sliderBg = document.querySelector(".ctn-slider");
const arrowLeft = document.querySelectorAll(".arrow")[0];
const arrowRight = document.querySelectorAll(".arrow")[1];
let indextImg = 0;

const dotDiv = document.querySelector(".dots-ctn");
const dotArr = new Array();
for (const item of images.unsplash) {
  const dotEl = document.createElement("div");
  dotEl.classList.add("dots");
  dotDiv.appendChild(dotEl);
  dotArr.push(dotEl);
}

window.addEventListener("load", function () {
  dotArr[0].classList.add("-a");
});

const elementPos = {
  left(index) {
    index === arrayEl - arrayEl
      ? arrowLeft.classList.add("-i")
      : arrowLeft.classList.remove("-i");
  },
  right(index) {
    index === arrayEl - 1
      ? arrowRight.classList.add("-i")
      : arrowRight.classList.remove("-i");
  },
};

arrowLeft.onclick = () => {
  arrowRight.classList.contains("-i") ? arrowRight.classList.remove("-i") : "";
  if (indextImg > 0) {
    indextImg--;
    elementPos.left(indextImg);
    dotArr[indextImg].classList.add("-a");
    sliderBg.style.backgroundImage = `url('${images.unsplash[indextImg]}')`;
    indextImg >= 0 ? dotArr[indextImg + 1].classList.remove("-a") : "";
  }
};

arrowRight.onclick = () => {
  arrowLeft.classList.contains("-i") ? arrowLeft.classList.remove("-i") : "";
  if (indextImg < arrayEl - 1) {
    indextImg++;
    elementPos.right(indextImg);
    dotArr[indextImg].classList.add("-a");
    sliderBg.style.backgroundImage = `url('${images.unsplash[indextImg]}')`;
    indextImg > 0 ? dotArr[indextImg - 1].classList.remove("-a") : "";
  }
};

sliderBg.style.backgroundImage = `url('${images.unsplash[0]}')`;
sliderBg.style.backgroundPosition = "center center";
sliderBg.style.backgroundRepeat = "no-repeat";

document.addEventListener("keydown", function (e) {
  e.key === "ArrowLeft" ? arrowLeft.click() : "";
  e.key === "ArrowRight" ? arrowRight.click() : "";
});
