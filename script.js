const quickNavToggle = document.getElementById("quickNavToggle");
const quickNav = document.getElementById("quickNav");
const menuTabs = document.querySelectorAll(".menu-tab");
const menuPanels = document.querySelectorAll(".menu-panel");

quickNavToggle.addEventListener("click", () => {
  quickNav.classList.toggle("open");
});

menuTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const category = tab.dataset.category;

    menuTabs.forEach((currentTab) => currentTab.classList.remove("active"));
    menuPanels.forEach((panel) => panel.classList.remove("active"));

    tab.classList.add("active");
    document.querySelector(`.menu-panel[data-category="${category}"]`)?.classList.add("active");
  });
});
