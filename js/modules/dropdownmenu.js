import outsideClick from "./outsideclick.js";

export default class DropdownMenu {
  constructor(dropdownmenus, events) {
    this.dropdownmenus = document.querySelectorAll(dropdownmenus);
    this.activeClass = "active";

    if (events === undefined) {
      this.events = ["touchstart", "click"];
    } else {
      this.events = events;
    }
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove("active");
    });
  }

  addDropdowMenusEvent() {
    this.dropdownmenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }
  init() {
    if (this.dropdownmenus.length) {
      this.addDropdowMenusEvent();
    }
    return this;
  }
}
