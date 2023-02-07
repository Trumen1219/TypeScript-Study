class Food {
    private element: HTMLElement;
    constructor() {
        this.element = document.querySelector('.food')!;
    }
    get X() {
        return this.element.offsetLeft;
    }
    get Y() {
        return this.element.offsetTop;
    }
    change() {
        (this.element as HTMLElement).style.left = Math.round(Math.random() * 29) * 10 + 'px';
        (this.element as HTMLElement).style.top = Math.round(Math.random() * 29) * 10 + 'px';
    }
}
export default Food