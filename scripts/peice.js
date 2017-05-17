
var Peice = function(opts) {
    this.color = opts.color
    this.peiceSize = 90
    this.leftPos = 5
    this.topPos = 2.25
    this.movementAmt = 100

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

Peice.prototype.move = function(direction) {
    if (direction === 'right') {
        console.log('moving right')
        this.leftPos = this.leftPos + this.movementAmt
        this.peice.css({
            left: `${this.leftPos}px`
        })
    }
    if (direction === 'left') {
        console.log('moving left')
        this.leftPos = this.leftPos - this.movementAmt
        this.peice.css({
            left: `${this.leftPos}px`
        })
    }
}
