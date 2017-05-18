
var board = [
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 2, 0, 0, 0, 0, 0, 0 ],
    [ 1, 2, 0, 0, 0, 0, 0 ],
    [ 2, 1, 2, 0, 0, 0, 0 ],
    [ 1, 1, 1, 2, 0, 0, 0 ]
]

var lastPeice = [2, 0]
var checkId = 2

function checker(y, x) {
    console.log('checking from point', cords)

    // going to check clockwise starting at 12:00

    // check up
    // [y - 1][x]
    if (board[y - 1] && board[y - 1][x] === checkId) {}

    // check up right
    // [y - 1][x + 1]
    if (board[y - 1] && board[y - 1][x + 1] && board[y - 1][x + 1] === checkId) {}

    // check right
    // [y][x + 1]
    if (board[y][x + 1] && board[y][x + 1] === checkId) {}

    // check down right
    // [y + 1][x + 1]
    if (board[y + 1] && board[y + 1][x + 1] && board[y + 1][x + 1] === checkId) {}

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
    if (board[y - 1] && board[y - 1][x - 1] && board[y - 1][x - 1] === checkId)

}

checker(lastPeice[0], lastPeice[1])
