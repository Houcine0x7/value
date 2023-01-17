let value = 0
let strip = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
basic.forever(function () {
    value = pins.analogReadPin(AnalogPin.P1)
    strip.showColor(value)
})
