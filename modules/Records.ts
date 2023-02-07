class Records {
    score = 0
    level = 1
    scoreEle: HTMLElement
    levelEle: HTMLElement
    upScore: number
    upLevel: number
    constructor(upScore: number = 10, upLevel: number = 10) {
        this.scoreEle = document.querySelector('.score')!;
        this.levelEle = document.querySelector('.level')!;
        this.upLevel = upLevel
        this.upScore = upScore
    }
    addScore() {
        this.scoreEle.innerHTML = this.score++ + ''
        if (this.score % this.upLevel === 0) {
            this.addLevel()
        }
    }
    addLevel() {
        if (this.level < this.upLevel) {
            this.levelEle.innerHTML = this.level++ + ''
        }
    }
}
export default Records