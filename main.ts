input.onButtonPressed(Button.A, function () {
    if (Start == 1) {
        Pass = "" + Pass + "A"
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . .
            . . . . .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    if (Start == 1) {
        Pass = "" + Pass + "B"
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . #
            . . . . .
            . . . . .
            `)
    }
})
let Pass = ""
let Start = 0
Start = 0
Pass = ""
basic.clearScreen()
basic.showString("A")
basic.pause(200)
basic.clearScreen()
basic.pause(100)
basic.showString("B")
basic.pause(200)
basic.clearScreen()
basic.pause(100)
basic.showString("B")
basic.pause(200)
basic.clearScreen()
basic.pause(100)
basic.showString("A")
basic.pause(200)
basic.clearScreen()
basic.pause(100)
basic.showString("B")
basic.pause(200)
basic.clearScreen()
Start += 1
basic.showLeds(`
    . # . . .
    . # # . .
    . # # # .
    . # # . .
    . # . . .
    `)
basic.pause(200)
basic.clearScreen()
basic.forever(function () {
    if (Pass == "ABBAB") {
        basic.showIcon(IconNames.Yes)
    } else if (Pass.length > 5) {
        basic.showIcon(IconNames.No)
        control.reset()
    } else {
        basic.pause(100)
    }
})
