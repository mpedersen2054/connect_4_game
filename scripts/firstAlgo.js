
// decent fake board, red won with a diag
// that starts at b[5][0] & goes up & right
// var board = [
//     [ 0, 0, 0, 0, 0, 0, 0 ],
//     [ 0, 0, 0, 1, 0, 0, 0 ],
//     [ 0, 2, 1, 1, 1, 0, 0 ],
//     [ 0, 1, 1, 2, 2, 0, 0 ],
//     [ 1, 2, 2, 1, 2, 0, 0 ],
//     [ 1, 2, 1, 2, 1, 2, 2 ]
// ]

var board = [
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 2, 0, 0, 0, 0, 0, 0 ],
    [ 1, 2, 0, 0, 0, 0, 0 ],
    [ 2, 1, 2, 0, 0, 0, 0 ],
    [ 1, 1, 1, 2, 0, 0, 0 ]
]

// check the loser first...
var checking = 2
var outcome = 'not determined yet.'
var connectArr = []
var count = 0

// nested loop to check each column of each row
_yLoop:
for (var y = 5; y >= 5; y--) {
    _xLoop:
    for (var x = 0; x < 7; x++) {
        var curr = board[y][x]

        if (curr == checking) {
            count++
            connectArr.push([y, x])

            // check up left
            // [y - 1][x - 1]
            // first check if it isnt at the furthest top or furthest left
            if (board[y - 1] && board[y][x - 1] && board[y - 1][x - 1] === checking) {

                _checkerLoop:
                for (var k = 1; k < 4; k++) {
                    // var pointer = board[y - k][x - k]
                    if (board[y - k][x - k] === checking) {
                        connectArr.push([y - k, x - k])
                        count++
                    } else {
                        continue _xLoop
                    }
                }

                if (count === 4) {
                    outcome = `player${checking} had a connect4 going up and left`
                    break _yLoop
                }

                // break
            }

            // check up
            // [y - 1][x]
            if (board[y - 1] && board[y - 1][x] === checking) {}

            // check up right
            // [y - 1][x + 1]
            if (board[y - 1] && board[y - 1][x] && board[y - 1][x] === checking) {}

            // check right
            // [y][x + 1]
            if (board[y][x + 1] && board[y][x + 1] === checking) {}

        }

    }
}

console.log('COUNT: ', count)
console.log('OUTCOME: ', outcome)
console.log('OUTCOME: ', connectArr)
