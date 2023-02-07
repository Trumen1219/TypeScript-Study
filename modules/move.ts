import Food from "./food";
import Records from "./Records";
import Snake from "./snake";
class Move {
    food: Food
    records: Records
    snake: Snake
    direction: String = ''
    constructor() {
        this.food = new Food()
        this.records = new Records(10, 1)
        this.snake = new Snake()
        this.init()
    }
    init() {
        document.addEventListener('keydown', this.keydownHandler.bind(this))
        this.food.change()
    }
    keydownHandler(Event: KeyboardEvent) {
        this.direction = Event.key
        this.run()
        console.log(this.direction);
    }
    run() {
        // 获取蛇现在坐标
        // let X = this.snake.X;
        // let Y = this.snake.Y;        
        // 根据按键方向来计算X值和Y值（未更新）
        switch (this.direction) {
            case 'ArrowUp':
            case "Up":
                // 向上移动 top 减少
                this.snake.Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                // 向下移动 top 增加
                this.snake.Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                // 向左移动 left 减少
                this.snake.X -= 10;
                break;
            case "ArrowRight":
            case "Right":
                // 向右移动 left 增加
                this.snake.X += 10;
                break;
        }
        
        // setTimeout(() => {
        //     this.run.bind(this)
        // }, 300 - (this.records.level - 1) * 30);
    }
}
export default Move
