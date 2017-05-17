
var Peice = function(opts) {
    this.color = opts.color
    this.peiceSize = 90

    $('.peice-placer').append(
        $('<div/>')
            .addClass(`peice ${this.color}`)
            .css({ width: `${this.peiceSize}px`, height: `${this.peiceSize}px` })
    )
}
