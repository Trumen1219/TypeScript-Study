class Food {
    element: HTMLElement;
    constructor() {
        this.element = document.querySelector('.food')!;
    }
    get X() {
        return this.element.offsetLeft;
    }
    get Y() {
        return this.element.offsetTop;
    }
    set X(value) {
        (this.element as HTMLElement).style.left = Math.round(Math.random() * 29) * 10 + 'px';
    }
    set Y(value) {
        (this.element as HTMLElement).style.top = Math.round(Math.random() * 29) * 10 + 'px';
    }
}