let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");

hamMenuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
  hamMenuIcon.classList.toggle("fa-times");
});
navLinks.forEach((navLinks) => {
  navLinks.addEventListener("click", () => {
    navBar.classList.remove("active");
    hamMenuIcon.classList.toggle("fa-times");
  });
});


GitHubCalendar(".calendar", "ysathe991");

// or enable responsive functionality:
GitHubCalendar(".calendar", "ysathe991", { responsive: true });

// Use a proxy
GitHubCalendar(".calendar", "ysathe991", {
  proxy(username) {
    return fetch(`https://your-proxy.com/github?user=${username}`)
  }
})

