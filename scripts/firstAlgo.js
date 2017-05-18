
// decent fake board, red won with a diag
// that starts at b[5][0] & goes up & right
var board = [
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 1, 0, 0, 0 ],
    [ 0, 2, 1, 1, 1, 0, 0 ],
    [ 0, 1, 1, 2, 2, 0, 0 ],
    [ 1, 2, 2, 1, 2, 0, 0 ],
    [ 1, 2, 1, 2, 1, 2, 2 ]
]

// check the loser first...
var checking = 2

// nested loop to check each column of each row
for (var y = 5; y >= 5; y--) {
    for (var x = 0; x < 7; x++) {
        var curr = board[y][x]

        if (curr == checking) {
            var count = 1

            // check up left
            // [y - 1][x - 1]
            if (board[y - 1] && board[y][x - 1] && board[y - 1][x - 1] === checking) {
                count++
                var pointY = y - 1
                var pointX = x - 1
                var pointer = board[y-1][x-1]

                for (var k = 0; k < 2) {
                    
                }

                break
            }

            // check up
            // [y - 1][x]

            // check up right
            // [y - 1][x + 1]

            // check right
            // [y][x + 1]

        }

    }
}
