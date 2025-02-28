const DIRECTION = {
  Up: "UP",
  Down: "DOWN",
};

class ScrollDirection {
  prevPos;
  current = "";
  preview = "";

  constructor() {
    this.prevPos = Math.floor(document.body.getBoundingClientRect().y);
  }

  update() {
    const scrollY = Math.floor(document.body.getBoundingClientRect().y);
    this.current = this.prevPos >= scrollY ? DIRECTION.Down : DIRECTION.Up;
    this.prevPos = scrollY;
  }

  updatePreview() {
    this.preview = this.current;
  }

  isNewDirection() {
    const isNew = this.preview !== this.current;
    return isNew;
  }

  isDown() {
    return this.current === DIRECTION.Down;
  }

  isUp() {
    return this.current === DIRECTION.Up;
  }
}

class ShowHideElement {
  headerElement;
  direction;
  hiddenClassName = "header-hidden";

  constructor(element: HTMLElement) {
    this.headerElement = element;
    this.direction = new ScrollDirection();
  }

  getScrollOffset(offset: number) {
    return offset * -1 > Math.floor(document.body.getBoundingClientRect().y);
  }

  toggle() {
    this.direction.update();
    if (
      this.direction.preview !== this.direction.current &&
      this.getScrollOffset(700)
    ) {
      this.direction.updatePreview();
      if (this.direction.isDown()) {
        if (!this.headerElement.classList.contains(this.hiddenClassName)) {
          this.headerElement.classList.add(this.hiddenClassName);
        }
      } else {
        if (this.headerElement.classList.contains(this.hiddenClassName)) {
          this.headerElement.classList.remove(this.hiddenClassName);
        }
      }
    }
  }

  setClassName(name: string) {
    this.hiddenClassName = name;
  }
}

class Sticky {
  headerElement;
  stickyClassName = "sticky";

  constructor(element: HTMLElement) {
    this.headerElement = element;
  }

  toggle() {
    if (this.headerElement) {
      const stickyOffset = this.headerElement.offsetTop;
      if (window.scrollY > stickyOffset) {
        if (!this.headerElement.classList.contains(this.stickyClassName)) {
          this.headerElement.classList.add(this.stickyClassName);
        }
      } else {
        if (this.headerElement.classList.contains(this.stickyClassName)) {
          this.headerElement.classList.remove(this.stickyClassName);
        }
      }
    }
  }

  setClassName(name: string) {
    this.stickyClassName = name;
  }
}

/**
 * dynamicHeader
 * @param element ie: .header
 */
export default class DynamicHeader {
  headerElement;
  showHide;
  sticky;

  constructor(element: string) {
    this.headerElement = document.querySelector(element) as HTMLElement;
    this.showHide = new ShowHideElement(this.headerElement);
    this.sticky = new Sticky(this.headerElement);

    window.addEventListener("scroll", this.scroll.bind(this));
  }

  scroll() {
    this.sticky.toggle();
    this.showHide.toggle();
  }
}
