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
  document.body.className = "dark";
});
sun.addEventListener("click", () => {
  document.body.className = "light";
});

// ------xxx----------- Dark and Light Theme ----------xxx------------

// --------------- Search Button ----------------------- //

const searchIcon = document.querySelector(".searchIcon");
const serachModal = document.querySelector(".serachModal");
const blurBg = document.querySelector(".blur-bg");

function closeSearch() {
  serachModal.style.display = "none";
  serachModal.style.backdropFilter = "blur(0)";
  blurBg.style.display = "none";
}
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeSearch();
  } else if (e.ctrlKey && (e.key === "b" || e.key === "B")) {
    openSearch();
  }
});

function openSearch() {
  serachModal.style.display = "flex";
  serachModal.style.backdropFilter = "blur(20px)";
  blurBg.style.display = "block";
}

searchIcon.addEventListener("click", openSearch);
blurBg.addEventListener("click", closeSearch);

// ------xxx--------- Search Button --------------xxx--------- //

// --------------- Hamburger Menu ------------------------------ //
const hamburger = document.querySelector(".hamburgerMenu");
const navbarMenu = document.querySelector(".navbarMenuR");

hamburger.addEventListener("click", () => {
  console.log("working");
  navbarMenu.classList.toggle("activeMenu");
});

// ----xxx-------- Hamburger Menu --------------xxx---------------- //
