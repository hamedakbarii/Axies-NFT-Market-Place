// ---------------- Scroll To Top Button -------------------
const mybutton = document.querySelector(".scroll__btn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

mybutton.addEventListener("click", topFunction);

// ------xxx---------- Scroll To Top Button -------xxx------------

// ----------------- Dark and Light Theme ----------------------

const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");

moon.addEventListener("click", () => {
  document.body.classList.add("dark");
});
sun.addEventListener("click", () => {
  document.body.classList.add("light");
});

// ------xxx----------- Dark and Light Theme ----------xxx------------

// --------------- Search Button ----------------------- //

const searchIcon = document.querySelector(".searchIcon");
const serachModal = document.querySelector(".serachModal");
searchIcon.addEventListener("click", () => {
  serachModal.style.display = "flex";
});

// ------xxx--------- Search Button --------------xxx--------- //
