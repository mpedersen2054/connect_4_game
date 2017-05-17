
var Board = function(opts) {
    this.player1 = opts.player1
    this.player2 = opts.player2
    this.turns = 0

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

    // first players turn ( red )
    if (this.turns === 0 || this.player1.isTurn) {
        this.player1.isTurn = true
        peice = new Peice({ color: 'red' })
    }
    // second players turn ( black )
    if (this.player2.isTurn) {
        peice = new Peice({ color: 'black' })
    }

    // console.log(this.board)
    this.handleMovement(peice)
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
    var xPos = this.ppPos
    var yPos = 5
    var whoseTurn = this.player1.isTurn ? 1 : 2
    var switchTurns = true

    // check if the bottom row contains a peice
    if (this.board[yPos][xPos] === 0) {
        // console.log('drop the peice herezz', yPos, xPos)
        this.board[yPos][xPos] = whoseTurn
        peice.move('down', yPos)

    // check if the row above bottom has a peice
    } else if (this.board[yPos - 1][xPos] === 0) {
        // console.log('drop the peice here', yPos - 1, xPos)
        this.board[yPos - 1][xPos] = whoseTurn
        peice.move('down', yPos - 1)

    // check if the 2 rows above bottom has a peice
    } else if (this.board[yPos - 2][xPos] === 0) {
        // console.log('drop the peice here', yPos - 2, xPos)
        this.board[yPos - 2][xPos] = whoseTurn
        peice.move('down', yPos - 2)

    // check if the 3 rows above bottom has a peice
    } else if (this.board[yPos - 3][xPos] === 0) {
        // console.log('drop the peice here', yPos - 3, xPos)
        this.board[yPos - 3][xPos] = whoseTurn
        peice.move('down', yPos - 3)

    // check if the 4 rows above bottom has a peice
    } else if (this.board[yPos - 4][xPos] === 0) {
        // console.log('drop the peice here', yPos - 4, xPos)
        this.board[yPos - 4][xPos] = whoseTurn
        peice.move('down', yPos - 4)

    // check if the 5 rows above bottom has a peice
    } else if (this.board[yPos - 5][xPos] === 0) {
        // console.log('drop the peice here', yPos - 5, xPos)
        this.board[yPos - 5][xPos] = whoseTurn
        peice.move('down', yPos - 5)

    // check if the 6 rows above bottom has a peice
    }
    // CONNECT 4 IS ONLY 6 HEIGHT???
    // else if (this.board[yPos - 6][xPos] === 0) {
    //     // console.log('drop the peice here', yPos - 6, xPos)
    //     this.board[yPos - 6][xPos] = whoseTurn
    //     peice.move('down', yPos - 6)
    //
    // // that x cord of the board is full
    // }
    else {
        console.log('cant move at the x pos')
        switchTurns = false
    }

    if (switchTurns) {
        // dont want to turn it off if switchTurn = false,
        // if they try to put peice above top wont allow
        $('body').off()
        // switch whose turn it is
        if (this.player1.isTurn) {
            this.player1.isTurn = false
            this.player2.isTurn = true
        } else if (this.player2.isTurn) {
            this.player1.isTurn = true
            this.player2.isTurn = false
        }
        // incrment turns and call new turn
        this.turns++
        this.turn()
    }

}
