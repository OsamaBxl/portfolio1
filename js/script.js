// Navbar
let t1 = new TimelineMax({ paused: true });
t1.to(".one", 0.8, {
  y: 7,
  rotation: 45,
  ease: Expo.easeInOut,
});

t1.to(".two", 0.8, {
  y: -7,
  rotation: -45,
  ease: Expo.easeInOut,
  delay: -0.8,
});
t1.to(".nav__menu", 1, {
  top: "0%",
  ease: Expo.easeInOut,
  delay: -1,
});

t1.staggerFrom(
  ".nav__menu ul li",
  1,
  { x: -200, opacity: 0, ease: Expo.easeInOut },
  0.2
);
t1.reverse();
$(document).on("click", ".nav__toggle-btn", function () {
  t1.reversed(!t1.reversed());
});
$(document).on("click", "a", function () {
  t1.reversed(!t1.reversed());
});

const links = document.querySelectorAll(".nav__menu li");

links.forEach((link) => {
  link.addEventListener("click", function () {
    setTimeout(function () {
      console.log("yes");
    }, 3000);
  });
});

// End of Navbar

// About section

let slow1 = document.getElementsByClassName("s1"),
  slow3 = document.getElementsByClassName("s3");

// functions to show slides

let moveR = () => {
  let right = document.getElementById("right");
  let left = document.getElementById("left");
  // normal for slides
  if (right.className.indexOf("moveR") != -1) {
    // change button inner
    document.getElementById("btn").innerHTML = "&larr; Enjoy &rarr;";
    // normal state
    document.getElementById("right").className = right.className.replace(
      "moveR",
      "normalRight"
    );
    document.getElementById("left").className = left.className.replace(
      "moveL",
      "normalLeft"
    );
    // opacity = 0 - animation
    for (let i = 0; i < slow1.length; i++) {
      document.getElementsByClassName("s1")[i].className = slow1[
        i
      ].className.replace(" slow1", "");
    }
    for (let i = 0; i < slow3.length; i++) {
      document.getElementsByClassName("s3")[i].className = slow3[
        i
      ].className.replace(" slow3", "");
    }
  } else if (right.className.indexOf("normalRight") != -1) {
    // btn inner
    document.getElementById("btn").innerHTML = `&rarr; close &larr;`;
    // opacity - animation
    for (let i = 0; i < slow1.length; i++) {
      document.getElementsByClassName("s1")[i].className += " slow1";
    }
    for (let i = 0; i < slow3.length; i++) {
      document.getElementsByClassName("s3")[i].className += " slow3";
    }
    // right slide
    document.getElementById("right").className = right.className.replace(
      "normalRight",
      "moveR"
    );
    // left slide
    document.getElementById("left").className = left.className.replace(
      "normalLeft",
      "moveL"
    );
  } else {
    // btn inner
    document.getElementById("btn").innerHTML = `&rarr; close &larr;`;
    // opacity - animation

    for (let i = 0; i < slow3.length; i++) {
      document.getElementsByClassName("s3")[i].className += " slow3";
    }
    for (let i = 0; i < slow1.length; i++) {
      document.getElementsByClassName("s1")[i].className += " slow1";
    }
    //R & L slides
    document.getElementById("right").className += " moveR";
    document.getElementById("left").className += " moveL";
  }
};

// End of about section

// slide section
const sliderContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const slidesLength = slideRight.querySelectorAll("div").length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }

  slideRight.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  slideLeft.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;
};

// end of slide section
