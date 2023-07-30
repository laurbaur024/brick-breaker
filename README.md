# Brick - Breaker!
## about
Me( Chen) and Lauren are going to make a mini game, about bricks, to get better at making mini games!

## user story

stationary scene
onclick start

move platform to stop ball form hitting the bottom

win if all bricks gone, lose if hits bottom

## overview
functional HTML5 mini games under canvas element,
launch ball into bricks
brick break, collision detection, reflect movement, 
user use moving platform to bounce ball back to hit more bricks.

## MVP
jul 28
        HTML canvas element setup

        create object:
                ball
                brick
                platform

Jul 29 30
        brick formtion funtion 

        platform moving function
                eventlistner(awsd)  

Jul 31
        tigger(onclick/button) that sets the ball in motion
                ball moving function( animation )

Aug 1
        ball collsions
                brick
                        brick disapper function
                platform
        cvs.L/R border

Aug 2
        ball change direction after collsion

Aug 3
        win condition
                win 
                        all bricks gone
                losses
                        ball hits bottom

Aug 4 
        LAUNCH


## Jul 30
        notes: 
                consider modularizing ball, brick, platfrom class for cleaner code
        
        //the animation needs
                update()
                draw()
                requestAnimationFrame(loop)
        []brick formtion funtion 
        []platform moving function
                eventlistner(awsd)  

        
## feature
timer
different brick formation
        levels
        randomize
difficulties
        ball speed
        different brick 
        small platform
Music

muti ball
## possible dependency
refresh?   "webpack": "^4.42.1",

## Jul 28
HTML canvas element setup
        canvas size(600, 700)
        color choice
                background: #2f2963
                canvas background: #454372
                bricks: #70877f
                ball: #ef946c
                text: #c4a77d
create object(OOP):
        ball
        brick
                3 * 5
        platform




