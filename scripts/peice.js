
var Peice = function(opts) {
    this.color = opts.color
    this.peiceSize = 92
    this.leftMoveAmt = 99.5
    this.topMoveAmt = 100
    this.leftPos = 5 + (this.leftMoveAmt * 3)
    this.topPos = 2.5

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
        var peice = this.peice.detach()
        $('.board').append(peice)
        peice.css({
            top: `${this.topPos + dropDist}px`
        })
    }

    // console.log('movement in Peice', this.peice, this.peice.css(['left', 'top']))
}
