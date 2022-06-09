import {f_Update as f_snakeUpdate , f_Draw as f_snakeDraw , SNAKE_SPEED } from './snake.js'

//const SNAKE_SPEED = 1 // Snake moves 1 times per second
let lastRenderTime = 0

// Loop Function
function f_mainLoop(currentTime){

    window.requestAnimationFrame(f_mainLoop) // Request when is the Next Frame Render

    // Calculate seconds since the last Render
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000 // Divide to 1000 to convert the milliseconds to seconds

    // Check if seconds since last render are less than the time between the two renders
    if(secondsSinceLastRender < 1 / SNAKE_SPEED) return // 1 seconds is the time between the two moves/renders (delay)

    lastRenderTime = currentTime // Update the last render time
    console.log(currentTime)

    f_Update() // Update the game/page logyc (snake' movement, snake' food, snake' length)
    f_Draw() // Draw everything on the screen based on update information (draw snake on the correct position, food position)
}

window.requestAnimationFrame(f_mainLoop) // Call Loop Function

function f_Update(){
    f_snakeUpdate()
}

function f_Draw() {
    f_snakeDraw()
}