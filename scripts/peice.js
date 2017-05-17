
var Peice = function(opts) {
    this.color = opts.color
    this.peiceSize = 92
    this.leftPos = 5
    this.topPos = 2.5
    // this.topPos = 105
    this.leftMoveAmt = 99.5
    this.topMoveAmt = 100

    // create the new peice & append it to peice-placer
    this.peice = $('<div/>')
        .addClass(`peice ${this.color}`)
        .css({
            position: 'absolute',
            width: `${this.peiceSize}px`,
            height: `${this.peiceSize}px`,
            left: `${this.leftPos}px`,
            top: `${this.topPos}px`
        })
    $('.peice-placer').append(this.peice)
}

// called from Board, recieves direction so it knows which way to move peice
// dist is optional, used when dropping peice, tells what position to adjust it to
Peice.prototype.move = function(direction, dist) {
    if (direction === 'right') {
        this.leftPos = this.leftPos + this.leftMoveAmt
        this.peice.css({
            left: `${this.leftPos}px`
        })
    }
    if (direction === 'left') {
        this.leftPos = this.leftPos - this.leftMoveAmt
        this.peice.css({
            left: `${this.leftPos}px`
        })
    }

    if (direction === 'down') {
        var dropDist = dist * this.topMoveAmt
        // this.topPos = dropDist
        this.peice.css({
            top: `${this.topPos + dropDist + 100}px`
        })
    }
}
