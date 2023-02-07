class Snake {
    element: HTMLElement
    head: HTMLElement
    bodies: HTMLCollection
    constructor() {
        this.element = document.querySelector('.snake')!;
        this.head = document.querySelector('.snake > div')!;
        this.bodies = this.element.getElementsByTagName('div');
    }
    get X() {
        return this.head.offsetLeft
    }
    get Y() {
        return this.head.offsetTop
    }
    set X(value) {
        if (this.X === value) {
            return
        }
        if (value < 290 && value > 0) {
            if(this.bodies[1]&&(this.bodies[1] as HTMLElement).offsetLeft === value){
                if(this.X > value){
                    value = this.X + 10
                }
                else{
                    value = this.X - 10
                }
            }
            for (var i = 0; i < this.bodies.length; i++) {
                if ((this.bodies[i] as HTMLElement).offsetLeft === this.X && (this.bodies[i] as HTMLElement).offsetTop === this.Y) {
                    this.head.style.left = value + 'px';
                }
                else {
                    throw new Error("撞墙了")
                }
            }
        }
        else {
            throw new Error("撞墙了");
        }
    }
    set Y(value) {
        if (this.Y === value) {
            return
        }
        if(this.bodies[1]&&(this.bodies[1] as HTMLElement).offsetTop === value){
            if(this.Y > value){
                value = this.Y + 10
            }
            else{
                value = this.Y - 10
            }
        }
        if (value < 290 && value > 0) {
            for (var i = 0; i < this.bodies.length; i++) {
                if ((this.bodies[i] as HTMLElement).offsetLeft === this.Y && (this.bodies[i] as HTMLElement).offsetTop === this.Y) {
                    this.head.style.top = value + 'px';
                }
                else {
                    throw new Error("撞墙了")
                }
            }
        }
        else {
            throw new Error("撞墙了");
        }
    }
    addBody(){
        
    }
    // moveBody(key: Event){
    //     console.log(key);
    // }
}
export default Snake