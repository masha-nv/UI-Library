import "./styles/tabs.css";

class Tabs {
  constructor(container) {
    this.container = container;
    this.tabs = container.querySelectorAll(".trigger");
  }
  init() {
    this.tabs.forEach((tab) => {
      tab.addEventListener("click", (e) => {
        this.toggleTabs(e);
        this.toggleContent(e);
      });
    });
  }
  toggleTabs(e) {
    this.tabs.forEach((tab) =>
      tab.classList.contains("active") ? tab.classList.remove("active") : null
    );
    e.target.classList.add("active");
  }
  toggleContent(e) {
    this.container.querySelectorAll(".content").forEach((content) => {
      content.classList.contains("active")
        ? content.classList.remove("active")
        : null;

      content.getAttribute("id") ===
      e.target.getAttribute("data-target").slice(1)
        ? content.classList.add("active")
        : null;
    });
  }
}

export { Tabs as default };
