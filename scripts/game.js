
var Game = function(opts) {
    this.player1 = opts.player1 || new Player({ id: 1, name: prompt('Name of the first player?') })
    this.player2 = opts.player2 || new Player({ id: 2, name: prompt('Name of the second player?') })
    // this.player1 = new Player({ id: 1, name: 'Matt', wins: 0, isTurn: false })
    // this.player2 = new Player({ id: 2, name: 'Enemy', wins: 0, isTurn: false })
    this.board = new Board({ player1: this.player1, player2: this.player2 })
}

Game.prototype.init = function() {
    // append the html for the game onto DOM
    var startingHtml = `
        <div class="container-fluid">
            <div class="row no-gutters">
                <div class="col-lg-7 col-md-12 no-gutters">
                    <div class="game-col">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="peice-placer"></div>
                            </div>
                            <div class="col-lg-12">
                                <div class="board"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-12 no-gutters">
                    <div class="game-meta-col">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="title-image">
                                    Connect 4
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="player player1">
                                    <div class="card">
                                        <div class="card-block">
                                            <h3 class="card-title">${this.player1.name}</h3>
                                            <p class="card-text">
                                                <b>Wins:</b> ${this.player1.wins}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="player player2">
                                    <div class="card">
                                        <div class="card-block">
                                            <h3 class="card-title">${this.player2.name}</h3>
                                            <p class="card-text">
                                                <b>Wins:</b> ${this.player2.wins}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-12">
                                <div class="game-info">
                                    <div class="card">
                                        <div class="card-block">
                                            <p class="card-text">
                                                Turn count: <b class="turn-count">0</b>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    $('#main').html(startingHtml)

    // initiate the turn for the first player
    this.board.turn()
}
