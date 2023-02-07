import Food from "./Food";
import Records from "./Records";
import Snake from "./Snake";

class Move {
    food: Food
    records: Records
    snake: Snake
    direction: string = ''

    constructor() {
        this.food = new Food()
        this.records = new Records()
        this.snake = new Snake()
        this.food.change()
        this.init()
    }
    init() {
        document.addEventListener('keydown', this.keydownHandler.bind(this))
        this.run()
    }
    keydownHandler(event: KeyboardEvent) {
        this.direction = event.key
        console.log('this.direction', this.direction);
        this.run()
    }
    run() {
        console.log('try');
        switch (this.direction) {
            case "ArrowUp":
                this.snake.Y = 10
                console.log('this.snake.Y',this.snake.Y);
                break;
            case "ArrowDown":
                this.snake.Y += 10
                console.log('this.snake.Y',this.snake.Y);
                break;
            case "ArrowRight":
                this.snake.X += 10
                console.log('this.snake.Y',this.snake.X);
                break;
            case "ArrowLeft":
                this.snake.X -= 10
                console.log('this.snake.X',this.snake.X);
                break;
        }
        setTimeout(() => {
            this.run.bind(this)
        }, 300-(this.records.level - 1)* 30);
    }
}
export default Move