
var board = [
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 2, 0, 0, 0, 0, 0, 0 ],
    [ 1, 2, 0, 0, 0, 0, 0 ],
    [ 2, 1, 2, 0, 0, 0, 0 ],
    [ 1, 1, 1, 2, 0, 0, 0 ]
]

var lastPeice = [2, 0]
// var lastPeice = [5, 3]
var checkId = 2

function checker(y, x) {
    console.log('checking from point', [y, x])
    var count = 1

    // going to check clockwise starting at 12:00

    // NO NEED TO CHECK TOP, ANY PEICE DROPPED WILL AUTO BE AT THE VERY TOP, LOLOL
    // check up
    // [y - 1][x]
    // if (board[y - 1] && board[y - 1][x] === checkId) {}

    // check up right
    // [y - 1][x + 1]
    if (board[y - 1] && board[y - 1][x + 1] && board[y - 1][x + 1] === checkId) {}

    // check right
    // [y][x + 1]
    if (board[y][x + 1] && board[y][x + 1] === checkId) {}

    // check down right
    // [y + 1][x + 1]
    if (board[y + 1] && board[y + 1][x + 1] && board[y + 1][x + 1] === checkId) {
        console.log('THE NEXT DOWN RIGHT IS A MATCH!')
        for (var k = 1; k < 4; k++) {
            if (board[y + k][x + k] === checkId) {
                count++
            } else {
                count = 1
            }
        }
    }

    // check down
    // [y + 1][x]
    if (board[y + 1] && board[y + 1][x] === checkId) {}

    // check down left
    // [y + 1][x - 1]
    if (board[y + 1] && board[y + 1][x - 1] && board[y + 1][x - 1] === checkId) {}

    // check left
    // [y][x - 1]
    if (board[y][x - 1] && board[y][x - 1] === checkId) {}

    // check up left
    // [y - 1][x - 1]
    if (board[y - 1] && board[y - 1][x - 1] && board[y - 1][x - 1] === checkId) {
        console.log('THE NEXT UP LEFT IS A MATCH!')
    }


    // check the count
    if (count === 4) {
        console.log('VICTORY!!!')
    } else {
        console.log('LOSE!!!')
    }

}

checker(lastPeice[0], lastPeice[1])
