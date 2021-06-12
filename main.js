document.getElementById("toggleTheme").addEventListener("click", () => {
  const html = document.documentElement;

  if (html.classList.contains("light")) {
      html.classList.remove("light");
      localStorage.setItem("lightTheme", "false");
  } else {
      html.classList.add("light");
      localStorage.setItem("lightTheme", "true");
  }
});

const storedTheme = localStorage.getItem("lightTheme");


if (storedTheme !== null) {
    if (storedTheme === "true") {
        document.documentElement.classList.add("light");
    }
} else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    document.documentElement.classList.add("light");
}