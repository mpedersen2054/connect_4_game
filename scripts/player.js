
var Player = function(opts) {
    this.id = opts.id
    this.name = opts.name || prompt(opts.prompt)
    this.wins = opts.wins || 0
    this.isTurn = opts.isTurn || false
}
