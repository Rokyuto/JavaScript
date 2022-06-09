let lastRenderTime = 0
const SNAKE_SPEED = 2 // Snake moves 2 times per second

// Loop Function
function f_mainLoop(currentTime){

    window.requestAnimationFrame(f_mainLoop) // Request when is the Next Frame Render

    // Calculate seconds since the last Render
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000 // Divide to 1000 to convert the milliseconds to seconds

    // Check if seconds since last render are less than the time between the two renders
    if(secondsSinceLastRender < 1 / SNAKE_SPEED) return // 0.5 seconds is the time between the two moves/renders (delay)

    lastRenderTime = currentTime // Update the last render time
    console.log(currentTime)

    f_Update() // Update the game/page logyc (snake' movement, snake' food, snake' length)
    f_Draw() // Draw everything on the screen based on update information (draw snake on the correct position, food position)
}

window.requestAnimationFrame(f_mainLoop) // Call Loop Function


function f_Update() {

}

function f_Draw() {

}