
var Player = function(opts) {
    this.name = opts.name || prompt(opts.prompt)
    this.wins = opts.wins || 0
    this.isTurn = opts.isTurn || false
}
