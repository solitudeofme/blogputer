"use strict";
const themeToggleBtns = document.querySelectorAll(".theme-toggle-btn");
const navBarBtn = document.querySelector(".nav-bar-btn");
const overlayMenu = document.querySelector(".overlay-menu");
const overlay = document.querySelector(".overlay");

navBarBtn.addEventListener("click", () => {
  overlay.classList.toggle("hidden");
  overlayMenu.classList.remove("-left-64");
  overlayMenu.classList.add("left-0");
});
overlay.addEventListener("click", () => {
  overlay.classList.toggle("hidden");
  overlayMenu.classList.remove("left-0");
  overlayMenu.classList.add("-left-64");
});

themeToggleBtns.forEach((themeToggleBtn) => {
  themeToggleBtn.addEventListener("click", () => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  });
});
