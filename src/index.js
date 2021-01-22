import Tooltip from "./ui_components/tooltip";
import Dropdown from "./ui_components/dropdown";

const tooltip = new Tooltip(document.querySelector("span.tooltip"));
tooltip.init();

const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
  const instance = new Dropdown(dropdown);
  instance.init();
});
