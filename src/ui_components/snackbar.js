import "./styles/snackbar.css";
class Snackbar {
  constructor() {
    this.snackbar = document.createElement("div");
  }
  init() {
    this.snackbar.classList.add("snackbar");
    document.querySelector("body").appendChild(this.snackbar);
  }
  show(message) {
    this.snackbar.textContent = message;
    setTimeout(() => {
      this.snackbar.remove();
    }, 4000);
  }
}

export { Snackbar as default };
