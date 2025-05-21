input.onPinPressed(TouchPin.P0, function () {
    basic.showString("you know what i rate ping pongs irl")
    basic.showString("0/10")
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # . . # .
        . # # . .
        # . . # .
        . # # . .
        # . . # .
        `)
    basic.clearScreen()
    basic.showNumber(-11000000)
    basic.clearScreen()
})
input.onGesture(Gesture.FreeFall, function () {
    basic.showString("ya u are from that pik or pak, whatever")
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 3; index++) {
        basic.showString("yo bro chill")
    }
    basic.showString("YO")
    basic.showString("BRO")
    basic.showString("CHILL")
})
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Nyan), music.PlaybackMode.LoopingInBackground)
basic.showString("i dont like pak. just my opinion")
basic.clearScreen()
basic.forever(function () {
	
})
