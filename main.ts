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
        basic.pause(50)
        basic.clearScreen()
        basic.pause(50)
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
        basic.pause(50)
        basic.clearScreen()
        basic.pause(50)
    }
})
let Pass = ""
let Start = 0
Start = 0
Pass = ""
let Solution = ""
let Length = 5
for (let index = 0; index <= Length - 1; index++) {
    if (randint(0, 1) == 0) {
        Solution = "" + Solution + "A"
        basic.showString("A")
    } else {
        Solution = "" + Solution + "B"
        basic.showString("B")
    }
    basic.pause(200)
    basic.clearScreen()
    basic.pause(200)
}
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
    if (Pass == Solution) {
        basic.showIcon(IconNames.Yes)
        Start = 0
    } else if (Pass.length > 5) {
        basic.showIcon(IconNames.No)
        control.reset()
    } else {
        basic.pause(100)
    }
})
