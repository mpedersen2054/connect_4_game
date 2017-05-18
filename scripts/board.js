
var Board = function(opts) {
    this.player1 = opts.player1
    this.player2 = opts.player2
    this.turns = 1

    this.ppPos = 0
    this.peicePlacer = [
        0, 0, 0, 0, 0, 0, 0
    ]
    this.board = [
        [ 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0 ],
        // [ 0, 0, 0, 0, 0, 0, 0 ]
    ]
}

Board.prototype.turn = function() {
    var peice
    // reset the peicePlacer & peicePlacer position
    this.peicePlacer = [ 1, 0, 0, 0, 0, 0, 0 ]
    this.ppPos = 0

    // update the 'turn count' div
    $('.turn-count').html(this.turns)

    // handle case if the board is completely full
    if (this.turns === 43) {
        this.endGame('stalemate', null)
    } else {
        // first players turn ( red )
        if (this.turns === 1 || this.player1.isTurn) {
            this.player1.isTurn = true
            peice = new Peice({ color: 'red' })
        }
        // second players turn ( black )
        if (this.player2.isTurn) {
            peice = new Peice({ color: 'black' })
        }

        this.handleMovement(peice)
    }
}

Board.prototype.handleMovement = function(peice) {
    var lArrow = 37,
        rArrow = 39,
        space  = 32,
        self   = this

    $('body').on('keydown', function(e) {
        // if the peice is at the furthest left, dont let it move left
        if (e.keyCode === rArrow && self.peicePlacer[6] === 1) {
            console.log('cant move right!')
            return
        // if the peice is at the furthest right, dont let it move right
        } else if (e.keyCode === lArrow && self.peicePlacer[0] === 1) {
            console.log('cant move left!')
            return
        // move the peice to the right if right arrow pressed
        } else if (e.keyCode === rArrow) {
            e.preventDefault()
            self.peicePlacer[self.ppPos] = 0
            self.ppPos += 1
            self.peicePlacer[self.ppPos] = 1
            peice.move('right')
        // move the peice to the left if left arrow pressed
        } else if (e.keyCode === lArrow) {
            e.preventDefault()
            self.peicePlacer[self.ppPos] = 0
            self.ppPos -= 1
            self.peicePlacer[self.ppPos] = 1
            peice.move('left')

        } else if (e.keyCode === space) {
            e.preventDefault()
            self.dropPeice(peice)
        }

    })
}

Board.prototype.dropPeice = function(peice) {
    var xPos = this.ppPos,
        yPos = 5,
        whoseTurn = this.player1.isTurn ? 1 : 2,
        switchTurns = true

    // check if the bottom row contains a peice
    if (this.board[yPos][xPos] === 0) {
        this.board[yPos][xPos] = whoseTurn
        peice.move('down', yPos)

    // check if the row above bottom has a peice
    } else if (this.board[yPos - 1][xPos] === 0) {
        this.board[yPos - 1][xPos] = whoseTurn
        peice.move('down', yPos - 1)

    // check if the 2 rows above bottom has a peice
    } else if (this.board[yPos - 2][xPos] === 0) {
        this.board[yPos - 2][xPos] = whoseTurn
        peice.move('down', yPos - 2)

    // check if the 3 rows above bottom has a peice
    } else if (this.board[yPos - 3][xPos] === 0) {
        this.board[yPos - 3][xPos] = whoseTurn
        peice.move('down', yPos - 3)

    // check if the 4 rows above bottom has a peice
    } else if (this.board[yPos - 4][xPos] === 0) {
        this.board[yPos - 4][xPos] = whoseTurn
        peice.move('down', yPos - 4)

    // check if the 5 rows above bottom has a peice
    } else if (this.board[yPos - 5][xPos] === 0) {
        this.board[yPos - 5][xPos] = whoseTurn
        peice.move('down', yPos - 5)
    }
    // if the column is full
    else {
        console.log('cant move at the x pos')
        switchTurns = false
    }

    // run only as long as the column isnt full
    if (switchTurns) {
        var self = this
        // dont want to turn it off if switchTurn = false,
        // if they try to put peice above top wont allow
        $('body').off()

        // check if there are 4 connected for the give user
        this.checkIfConnect(function(statement, isOver, winner) {

            // the game is over, either stalemate or winner
            if (isOver) {
                if (statement === 'stalemate') {
                    console.log('there was a stalemate')
                } else if (statement === 'victory') {
                    console.log(`game over! ${winner.name} won the game!`)
                    // handle giving the player a win
                }

            // game is not over
            } else {
                if (self.player1.isTurn) {
                    self.player1.isTurn = false
                    self.player2.isTurn = true
                } else if (self.player2.isTurn) {
                    self.player1.isTurn = true
                    self.player2.isTurn = false
                }

                var viewB = ''

                for (var i = 0; i < 6; i++) {
                    // for (var j = 0; j < 7; j++)
                    viewB += JSON.stringify(self.board[i]) + '\n'
                }

                console.log(viewB)

                // incrment turns and call new turn
                self.turns++
                self.turn()
            }
        })
    }

}

Board.prototype.checkIfConnect = function(callback) {
    callback(null, null, null)
}

Board.prototype.endGame = function(outcome, victor) {
    // stalemate
    if (outcome === 'stalemate') {
        // console.log('THERE WAS A STALEMATE!')
    } else if (outcome === 'victory') {
        // p1 victory
        if (victor === this.player1) {
            // console.log('CONGRATS PLAYER1')
        // p2 victory
        } else if (victor === this.player2) {
            // console.log('CONGRATS PLAYER2')
        }
    }
}
