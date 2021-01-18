let die_number = 0
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 11; index++) {
        die_number = randint(0, 5)
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
