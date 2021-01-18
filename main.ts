input.onButtonPressed(Button.A, function () {
    if (!(numbers == 1)) {
        numbers += -1
    }
    basic.showNumber(numbers)
})
function Roll () {
    if (die_number == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
    if (die_number == 1) {
        basic.showLeds(`
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `)
    }
    if (die_number == 2) {
        basic.showLeds(`
            . . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . .
            `)
    }
    if (die_number == 3) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
    }
    if (die_number == 4) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
    }
    if (die_number == 5) {
        basic.showLeds(`
            # . . . #
            . . . . .
            # . . . #
            . . . . .
            # . . . #
            `)
    }
    if (die_number == 6) {
        basic.showLeds(`
            # . . . #
            . . . . .
            # . # . #
            . . . . .
            # . . . #
            `)
    }
    if (die_number == 7) {
        basic.showLeds(`
            # . # . #
            . . . . .
            # . . . #
            . . . . .
            # . # . #
            `)
    }
    if (die_number == 8) {
        basic.showLeds(`
            # . # . #
            . . . . .
            # . # . #
            . . . . .
            # . # . #
            `)
    }
    if (die_number == 9) {
        basic.showLeds(`
            # . . . #
            . # . # .
            # . . . #
            . # . # .
            # . . . #
            `)
    }
    if (die_number == 10) {
        basic.showLeds(`
            # . . . #
            . # . # .
            # . # . #
            . # . # .
            # . . . #
            `)
    }
    if (die_number == 11) {
        basic.showLeds(`
            # . # . #
            . # . # .
            # . . . #
            . # . # .
            # . # . #
            `)
    }
    if (die_number == 12) {
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            `)
    }
}
input.onButtonPressed(Button.B, function () {
    if (!(numbers == 13)) {
        numbers += 1
    }
    basic.showNumber(numbers)
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 6; index++) {
        die_number = randint(1, numbers)
        die_number += -1
        Roll()
    }
})
let die_number = 0
let numbers = 0
numbers = 6
