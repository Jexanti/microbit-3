input.onButtonPressed(Button.A, function () {
    if (!(numbers == 1)) {
        numbers += -1
    }
    basic.showNumber(numbers)
})
input.onButtonPressed(Button.B, function () {
    if (!(numbers == 12)) {
        numbers += 1
    }
    basic.showNumber(numbers)
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 11; index++) {
        die_number = randint(1, numbers)
        die_number += -1
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
                . # . # .
                . . . . .
                . # . # .
                . . . . .
                . # . # .
                `)
        }
    }
})
let die_number = 0
let numbers = 0
numbers = 6
