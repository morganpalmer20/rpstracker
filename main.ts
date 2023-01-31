input.onButtonPressed(Button.A, function () {
    OLED.init(128, 64)
    P1 += 1
    Rounds += 1
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    update_scores()
})
input.onButtonPressed(Button.AB, function () {
    OLED.init(128, 64)
    Ties += 1
    Rounds += 1
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    update_scores()
})
input.onButtonPressed(Button.B, function () {
    OLED.init(128, 64)
    P2 += 1
    Rounds += 1
    basic.showLeds(`
        # # # . .
        # . . # .
        # # # . .
        # . . # .
        # # # . .
        `)
    update_scores()
})
input.onGesture(Gesture.Shake, function () {
    reset()
    basic.clearScreen()
})
function reset () {
    OLED.init(128, 64)
    OLED.writeStringNewLine("Want To Play A Game?")
    P1 = 0
    P2 = 0
    Ties = 0
    Rounds = 0
    basic.pause(2000)
    update_scores()
}
function update_scores () {
    OLED.clear()
    OLED.writeStringNewLine("Player 1 ; " + P1)
    OLED.newLine()
    OLED.writeStringNewLine("Player 2 ; " + P2)
    OLED.newLine()
    OLED.writeStringNewLine("Ties ; " + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds ; " + Rounds)
}
let P2 = 0
let Ties = 0
let Rounds = 0
let P1 = 0
reset()
