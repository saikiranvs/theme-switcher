const themSwitcher = document.querySelector("#themeSwitcher");

const defaultTheme = localStorage.getItem("theme") || "theme-light";

setTheme(defaultTheme);

themSwitcher.addEventListener("change", (e) => {
  // console.log(e.target.value);
  setTheme(e.target.value);
});

function setTheme(theme) {
  theme = theme || "theme-light";
  document.documentElement.className = theme;
  localStorage.setItem("theme", theme);
  // console.log("value " + themSwitcher.value);
  themSwitcher.value = theme;
}
