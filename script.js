const quickNavToggle = document.getElementById("quickNavToggle");
const quickNav = document.getElementById("quickNav");

quickNavToggle.addEventListener("click", () => {
  quickNav.classList.toggle("open");
});
