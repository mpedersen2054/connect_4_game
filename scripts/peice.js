
var Peice = function(opts) {
    this.color = opts.color
    this.peiceSize = 92
    this.leftPos = 5
    this.topPos = 2.25
    // this.topPos = 105
    this.leftMoveAmt = 99.5
    this.topMoveAmt = 102.75

    // create the new peice & append it to peice-placer
    this.peice = $('<div/>')
        .addClass(`peice ${this.color}`)
        .css({
            width: `${this.peiceSize}px`,
            height: `${this.peiceSize}px`,
            left: `${this.leftPos}px`,
            top: `${this.topPos}px`
        })
    $('.peice-placer').append(this.peice)
}

// called from Board, recieves direction so it knows which way to move peice
Peice.prototype.move = function(direction) {
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
}
