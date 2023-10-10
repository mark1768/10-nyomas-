let A_száma = 0
let összeg = 0
let B_száma = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    A_száma += 1
    összeg += 2
})
input.onButtonPressed(Button.AB, function () {
    A_száma = 0
    B_száma = 0
    összeg = 0
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    B_száma += 1
    összeg += -1
})
basic.forever(function () {
    if (A_száma + B_száma == 10) {
        basic.clearScreen()
        basic.showNumber(összeg)
    }
})
