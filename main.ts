basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) >= 500) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
