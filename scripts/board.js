
var Board = function() {
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
        [ 2, 0, 0, 0, 0, 0, 0 ],
        [ 1, 0, 0, 0, 0, 0, 0 ]
    ]
}

Board.prototype.turn = function(player) {
    player.isTurn = true
    var peice = new Peice({ color: player.id == 1 ? 'red' : 'black' })
    this.peicePlacer[0] = 1
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
            self.dropPeice()
        }

    })
}

Board.prototype.dropPeice = function() {
    var xPos = this.ppPos
    var yPos = 6

    // check if the bottom row contains a peice
    if (this.board[yPos][xPos] === 0) {
        console.log('drop the peice herezz', yPos, xPos)
    // check if the row above bottom has a peice
    } else if (this.board[yPos - 1][xPos] === 0) {
        console.log('drop the peice here', yPos, xPos)
    // check if the 2 rows above bottom has a peice
    } else if (this.board[yPos - 2][xPos] === 0) {
        console.log('drop the peice here', yPos, xPos)
    // check if the 3 rows above bottom has a peice
    } else if (this.board[yPos - 3][xPos] === 0) {
        console.log('drop the peice here', yPos, xPos)
    // check if the 4 rows above bottom has a peice
    } else if (this.board[yPos - 4][xPos] === 0) {
        console.log('drop the peice here', yPos, xPos)
    // check if the 5 rows above bottom has a peice
    } else if (this.board[yPos - 5][xPos] === 0) {
        console.log('drop the peice here', yPos, xPos)
    // check if the 6 rows above bottom has a peice
    } else if (this.board[yPos - 6][xPos] === 0) {
        console.log('drop the peice here', yPos, xPos)
    // that x cord of the board is full
    } else {
        console.log('cant move at the x pos')
    }
}
