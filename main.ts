input.onButtonPressed(Button.A, function () {
    if (puntito.get(LedSpriteProperty.X) == 2) {
        proxLevel = Math.floor((game.score() + 1) / 10)
        if (nivelDeJuego != proxLevel) {
            nivelDeJuego = proxLevel
            basic.showIcon(IconNames.Yes)
            basic.showString("" + (nivelDeJuego))
            basic.pause(200)
            espera = Math.max(100, espera - 50)
        }
        game.addScore(1)
    } else {
        basic.showIcon(IconNames.No)
        game.gameOver()
    }
})
let proxLevel = 0
let espera = 0
let puntito: game.LedSprite = null
let nivelDeJuego = 0
nivelDeJuego = 0
puntito = game.createSprite(2, 2)
espera = 500
basic.forever(function () {
    puntito.move(1)
    puntito.ifOnEdgeBounce()
    basic.pause(espera)
})
