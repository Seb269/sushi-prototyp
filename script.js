const quickNavToggle = document.getElementById("quickNavToggle");
const quickNav = document.getElementById("quickNav");
const menuTabs = document.querySelectorAll(".menu-tab");
const menuPanels = document.querySelectorAll(".menu-panel");
const quickNavLinks = document.querySelectorAll(".quick-nav a");

quickNavToggle.addEventListener("click", () => {
  quickNav.classList.toggle("open");
});

quickNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    quickNav.classList.remove("open");
  });
});

menuTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const category = tab.dataset.category;
    const targetPanel = document.querySelector(`.menu-panel[data-category="${category}"]`);

    if (!targetPanel) return;

    menuTabs.forEach((currentTab) => {
      currentTab.classList.remove("active");
      currentTab.setAttribute("aria-selected", "false");
    });

    menuPanels.forEach((panel) => panel.classList.remove("active"));

    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");
    targetPanel.classList.add("active");
  });
});
