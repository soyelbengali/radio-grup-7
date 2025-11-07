input.onButtonPressed(Button.A, function () {
    radio.sendString("sonriure")
})
radio.onReceivedString(function (receivedString) {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
radio.setGroup(4)
