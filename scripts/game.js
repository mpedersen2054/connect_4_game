
var Game = function(opts) {
    this.player1 = opts.player1 || new Player({ prompt: 'Name of the first player?' })
    this.player2 = opts.player2 || new Player({ prompt: 'Name of the second player?' })
    this.board = new Board()
}

Game.prototype.init = function() {
    console.log('from init!', this)
}

var newGame = new Game({})
newGame.init()
