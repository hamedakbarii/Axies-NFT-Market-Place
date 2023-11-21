window.addEventListener("load", () => {
  const storedTheme = localStorage.getItem("theme");

  if (storedTheme === "dark") {
    document.body.className = "dark";
  } else {
    document.body.className = "light";
  }
});

const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");

moon.addEventListener("click", () => {
  document.body.className = "dark";
  localStorage.setItem("theme", "dark");
});
sun.addEventListener("click", () => {
  document.body.className = "light";
  localStorage.setItem("theme", "light");
});
