
// UP RIGHT VICTORY
var board = [
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,2,0],
    [0,0,0,0,2,1,0],
    [1,0,0,2,2,2,0],
    [1,0,2,1,1,1,0],
]
var lastPeice = [5, 2]

// RIGHT VICTORY
var board = [
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,2,0],
    [0,1,1,0,0,1,0],
    [2,2,2,2,0,1,0],
    [2,1,2,1,2,1,1],
]
var lastPeice = [4, 0]

// DOWN RIGHT VICTORY
var board = [
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,2,0,0,0,0,0],
    [0,1,2,0,0,0,0],
    [0,2,1,2,0,0,0],
    [1,1,1,2,2,0,1],
]
var lastPeice = [2, 1]

// DOWN VICTORY
var board = [
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,2,0,0,0,0],
    [0,0,2,0,0,0,0],
    [0,0,2,1,0,0,0],
    [1,1,2,1,0,0,0],
]
var lastPeice = [2, 2]

// DOWN LEFT VICTORY
var board = [
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,2,0],
    [0,0,0,0,2,1,0],
    [1,0,0,2,2,2,0],
    [1,0,2,1,1,1,0],
]
var lastPeice = [2, 5]

// LEFT VICTORY
var board = [
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,2,0],
    [0,1,1,0,0,1,0],
    [2,2,2,2,0,1,0],
    [2,1,2,1,2,1,1],
]
var lastPeice = [4, 3]

// UP LEFT VICTORY
var board = [
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,2,0,0,0,0,0],
    [0,1,2,0,0,0,0],
    [0,2,1,2,0,0,0],
    [1,1,1,2,2,0,1],
]
var lastPeice = [5, 4]



var checkId = 2

function checker(y, x) {
    console.log('checking from point', [y, x])
    var count = 1
    var connectArr = [ [y, x] ]

    // going to check clockwise starting at 12:00

    // NO NEED TO CHECK TOP, ANY PEICE DROPPED WILL AUTO BE AT THE VERY TOP, LOLOL
    // check up
    // [y - 1][x]
    // if (board[y - 1] && board[y - 1][x] === checkId) {}

    // check up right
    // [y - 1][x + 1]
    if (board[y - 1][x + 1] === checkId) {}

    // check right
    // [y][x + 1]
    if (board[y][x + 1] === checkId) {}

    // check down right
    // [y + 1][x + 1]
    if (board[y + 1][x + 1] === checkId) {
        console.log('THE NEXT DOWN RIGHT IS A MATCH!')
        for (var k = 1; k < 4; k++) {
            if (board[y + k][x + k] === checkId) {
                connectArr.push([y + k, x + k])
                count++
            } else {
                count = 1
                break
            }
        }
    }

    // check down
    // [y + 1][x]
    if (board[y + 1][x] === checkId) {}

    // check down left
    // [y + 1][x - 1]
    if (board[y + 1][x - 1] === checkId) {}

    // check left
    // [y][x - 1]
    if (board[y][x - 1] === checkId) {}

    // check up left
    // [y - 1][x - 1]
    if (board[y - 1][x - 1] === checkId) {
        console.log('THE NEXT UP LEFT IS A MATCH!')
    }


    // check the count
    if (count === 4) {
        console.log('VICTORY!!!')
        console.log('CONNECT ARR: ', connectArr)
    } else {
        console.log('LOSE!!!')
    }

}

checker(lastPeice[0], lastPeice[1])
