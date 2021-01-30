let theme_btn = document.querySelector("#theme-type");

let user_theme = localStorage.getItem("SOCIAL_DASHBOARD_THEME");
console.log(user_theme);
if (user_theme == null) {
  // document.documentElement.classList.add("is_dark");
  localStorage.setItem("SOCIAL_DASHBOARD_THEME", "dark");
} else if (user_theme == "light") {
  document.documentElement.classList.remove("is_dark");
  theme_btn.checked=true;
} 


theme_btn.addEventListener("change", () => {

  if (theme_btn.checked) {
    document.documentElement.classList.remove("is_dark");
    localStorage.setItem("SOCIAL_DASHBOARD_THEME", "light");

  } else {
    document.documentElement.classList.add("is_dark");
    localStorage.setItem("SOCIAL_DASHBOARD_THEME", "dark");

  }
});