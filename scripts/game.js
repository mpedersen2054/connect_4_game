
var Game = function(opts) {
    this.player1 = opts.player1 || new Player({ id: 1, name: prompt('Name of the first player?') })
    this.player2 = opts.player2 || new Player({ id: 2, name: prompt('Name of the second player?') })
    // this.player1 = opts.player1 || new Player({ id: 1, name: 'Matt', wins: 0, isTurn: false })
    // this.player2 = opts.player2 || new Player({ id: 2, name: 'Enemy', wins: 0, isTurn: false })
    this.gamesPlayed = opts.gamesPlayed || 0

    this.board = new Board({
        player1: this.player1,
        player2: this.player2,
        gamesPlayed: this.gamesPlayed
    })
}

Game.prototype.init = function() {
    // append the html for the game onto DOM
    var startingHtml = `
        <div class="container">
            <div class="game-col">
                <div class="peice-placer"></div>
                <div class="board"></div>
            </div>

            <div class="game-meta-col">
                <div class="title-image">Connect 4</div>
                <div class="player player1">
                    <h3>${this.player1.name}</h3>
                    <p>
                        Wins: <b>${this.player1.wins}</b>
                    </p>
                </div>
                <div class="player player2">
                    <h3>${this.player2.name}</h3>
                    <p>
                        Wins: <b>${this.player2.wins}</b>
                    </p>
                </div>
                <div class="game-info">
                    <p>
                        Turn count: <b class="turn-count">0</b> <br/>
                        Game count: <b>${this.gamesPlayed}</b>
                    </p>
                </div>
                <div class="game-directions">
                    <div class="key left-key">
                        <i class="fa fa-caret-square-o-left" aria-hidden="true"></i> : Move peice left
                    </div>
                    <div class="key right-key">
                        <i class="fa fa-caret-square-o-right" aria-hidden="true"></i> : Move peice right
                    </div>

                    <div class="key right-drop">
                        SPACE : Drop peice
                    </div>
                </div>
            </div>
        </div>
    `
    $('#main').html(startingHtml)

    // initiate the turn for the first player
    this.board.turn()
}
