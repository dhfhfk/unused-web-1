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

$(function() {
  function slideMenu() {
      var activeState = $("#menu-container .menu-list").hasClass("active");
      $("#menu-container .menu-list").animate({left: activeState ? "0%" : "-100%"}, 400);
  }
  $("#menu-wrapper").click(function(event) {
      event.stopPropagation();
      $("#hamburger-menu").toggleClass("open");
      $("#menu-container .menu-list").toggleClass("active");
      slideMenu();

      $("body").toggleClass("overflow-hidden");
  });

  $(".menu-list").find(".accordion-toggle").click(function() {
      $(this).next().toggleClass("open").slideToggle("fast");
      $(this).toggleClass("active-tab").find(".menu-link").toggleClass("active");

      $(".menu-list .accordion-content").not($(this).next()).slideUp("fast").removeClass("open");
      $(".menu-list .accordion-toggle").not(jQuery(this)).removeClass("active-tab").find(".menu-link").removeClass("active");
  });
}); // jQuery load