const sIcons = document.querySelectorAll(".social div");
sIcons.forEach(function (social, index) {
   social.style.animation = `cameOutSocialIcon 0.5s cubic-bezier(.51,.92,.24,1.15) forwards ${
      index / 5
   }s`;
});

const rocketPcs = document.querySelectorAll(
   ".rocket-section .middle-part span"
);
const rocket = document.querySelector(".rocket-section");

const sectionAreaStart = rocket.offsetTop;
const lastHeight = rocketPcs[2].offsetTop;
console.log(rocketPcs);

let viewHeight = window.innerHeight / 5;

document.addEventListener("scroll", (e) => {
   if (window.scrollY > sectionAreaStart - viewHeight) {
      rocketPcs[0].classList.add("active2");
      rocketPcs[1].classList.add("active2");
   } else {
      rocketPcs[0].classList.remove("active2");
      rocketPcs[1].classList.remove("active2");
   }

   if (window.scrollY > lastHeight - viewHeight) {
      rocketPcs[2].classList.add("active2");
   } else {
      rocketPcs[2].classList.remove("active2");
   }
});
