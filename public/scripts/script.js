const themeToggleBtn = document.querySelector(".theme-toggle-btn");
themeToggleBtn.addEventListener("click", () => {
  if (localStorage.theme === "dark") {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
});
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  darkMode: "selector",
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      cursor: {
        custom: "url(../../images/cursor.png)",
      },
      colors: {
        "light-primary": "#9D8C7A",
        "dark-primary": "#413A31",
      },
      fontFamily: {
        silkscreen: "Silkscreen",
        fredoka: "Fredoka",
      },
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
