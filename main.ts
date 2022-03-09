function left_wheel (direction: number) {
    if (direction == forward) {
        pins.analogWritePin(AnalogPin.P15, 0)
        pins.analogWritePin(AnalogPin.P16, maxSpeed)
        left_lights(true)
    } else if (direction == reverse) {
        pins.analogWritePin(AnalogPin.P15, maxSpeed)
        pins.analogWritePin(AnalogPin.P16, 0)
    } else {
        pins.analogWritePin(AnalogPin.P15, 0)
        pins.analogWritePin(AnalogPin.P16, 0)
        left_lights(false)
    }
}
input.onButtonPressed(Button.A, function () {
    running = true
})
function left_lights (lights_on: boolean) {
    if (lights_on) {
        led.plot(0, 0)
        led.plot(1, 0)
        led.plot(0, 1)
        led.plot(1, 1)
    } else {
        led.unplot(0, 0)
        led.unplot(1, 0)
        led.unplot(0, 1)
        led.unplot(1, 1)
    }
}
function right_wheel (direction: number) {
    if (direction == forward) {
        pins.analogWritePin(AnalogPin.P13, 0)
        pins.analogWritePin(AnalogPin.P14, maxSpeed)
        right_lights(true)
    } else if (direction == reverse) {
        pins.analogWritePin(AnalogPin.P13, maxSpeed)
        pins.analogWritePin(AnalogPin.P14, 0)
    } else {
        pins.analogWritePin(AnalogPin.P13, 0)
        pins.analogWritePin(AnalogPin.P14, 0)
        right_lights(false)
    }
}
input.onButtonPressed(Button.B, function () {
    running = false
})
function brake () {
    left_wheel(0)
    right_wheel(0)
}
function right_lights (lights_on: boolean) {
    if (lights_on) {
        led.plot(3, 0)
        led.plot(4, 0)
        led.plot(3, 1)
        led.plot(4, 1)
    } else {
        led.unplot(3, 0)
        led.unplot(4, 0)
        led.unplot(3, 1)
        led.unplot(4, 1)
    }
}
let running = false
let reverse = 0
let forward = 0
let maxSpeed = 0
maxSpeed = 1000
forward = 1
reverse = -1
let stop = 0
running = false
/**
 * Sonar-Guided Robot notes:
 * 
 * Each wheel can be controlled independently using the left_wheel() and right_wheel functions.  Pass in any of forward, reverse or stop to control which direction it travels.
 * 
 * maxSpeed controls the speed at which the wheels turn.  1000 should be the maximum, but this could be reduced depending on the surface the robot is running on.
 * 
 * Complete the forever block to get the robot moving through the maze.  This should constantly fire a sonar pulse ahead of the robot, sense the returning pulse, and then give a distance to the next wall.
 * 
 * Use the Sonar extension (should be included) to use a sensor to detect a distance to an object in front of the robot.  If the distance is small enough, make a right turn and try to move forward from there.  If we get too close to a wall, try to reverse a short distance.
 * 
 * Maze solving is based on the principle of the Right-Hand rule, where a simple maze can be solved by following the wall on your right.  While you may hit a number of dead-ends, you should eventually reach the exit.
 */
basic.forever(function () {
    if (running == true) {
    	
    }
})
