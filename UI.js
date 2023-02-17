export class UI {
    constructor(game){
        this.game = game;
        this.fontSize = 30;
        this.fontFamily = 'Creepster';
        this.livesImage = document.getElementById('lives');
        this.title;
        this.text;
    }
    draw(context){
        context.save();
        context.font = this.fontSize + 'px ' + this.fontFamily;
        context.textAlign = 'left';
        // score
        context.fillStyle = this.game.shadowColor;
        context.fillText('Score: ' + this.game.score, 20, 50);
        context.fillStyle = this.game.fontColor;
        context.fillText('Score: ' + this.game.score, 22, 52);
        // timer
        context.font = this.fontSize * 0.8 + 'px ' + this.fontFamily;
        context.fillStyle = this.game.shadowColor;
        context.fillText('Time: ' + (this.game.time * 0.001).toFixed(1), 20, 80);
        context.fillStyle = this.game.fontColor;
        context.fillText('Time: ' + (this.game.time * 0.001).toFixed(1), 22, 82);
        //lives
        for (let i = 0; i < this.game.lives; i++){
            context.drawImage(this.livesImage, 25 * i + 20, 95, 25, 25);
        }
        //game over options
        if (this.game.lives === 0){
            this.title = 'Love at first bite?';
            this.text = 'Nope. Better luck next time!';
        } else if (this.game.score < 50 && this.game.lives > 0){
            this.title = 'Are you scared?';
            this.text = 'Be brave next time, they don\'t bite. Perhaps...';
        } else if (this.game.score > 50 && this.game.lives > 0){
            this.title = 'Boo-ya';
            this.text = 'What are creatures of the night afraid of? YOU!!!'
        }
        // game over
        if (this.game.gameOver){
            context.textAlign = 'center';
            context.fillStyle = this.game.shadowColor;
            context.font = this.fontSize * 2 + 'px ' + this.fontFamily;
            context.fillText(this.title, this.game.width * 0.5, this.game.height * 0.5 - 20);
            context.font = this.fontSize * 0.8 + 'px ' + this.fontFamily;
            context.fillText(this.text, this.game.width * 0.5, this.game.height * 0.5 + 20);
            context.fillStyle = this.game.fontColor;
            context.font = this.fontSize * 2 + 'px ' + this.fontFamily;
            context.fillText(this.title, this.game.width * 0.5 + 4, this.game.height * 0.5 - 16);
            context.font = this.fontSize * 0.8 + 'px ' + this.fontFamily;
            context.fillText(this.text, this.game.width * 0.5 + 1, this.game.height * 0.5 + 21);
        }
        context.restore();
    }
}