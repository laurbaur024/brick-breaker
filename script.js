const cvs = document.getElementById('canvas')
canvas.width = 600
canvas.height = 700

var c = cvs.getContext('2d')
//this draws the ball in the starting position
//bro why we using just 'c', it's kinda ugly no kidding. :(

// c.beginPath();
// c.strokeStyle = '#ef946c';
// c.fillStyle = '#ef946c';
// c.arc(300,660,20,0, Math.PI *2, false);
// c.fill();
// c.stroke();
//these needs to go into the ball class My dude
//theze nuts
class Ball{
        //still need collision info
        constructor(x, y){
                this.x = x;
                this.y = y;
                this.dx = 5
                this.dy = 5
                this.size = 20
                // this.rad = rad;
                // it's a ball
                this.color = 'white';
        }
        //got rid of dx,dy as a part of constructor becase it's going to be constant?
        //debatablle so talk to me later i guess

        update(){
                this.x += this.dx;
                this.y += this.dy;
        }
        //update is to make the ball move

        draw(){
                c.fillStyle = this.color
                c.beginPath()
                c.arc(this.x, this.y, this.size,0, Math.PI * 2)
                //arc(x, y, radius, startAngle, endAngle)
                c.fill()
        }
}

brickArray = []
//sad array ... hip hip array!!!!!!
//geez good one :D

class Brick{
        constructor(x, y){
                this.x = x;
                this.y = y;
                this.width = width;
                this.height = height;
        }

        becomeOneOfTheBricks(){
                
        }

        break(){

        }
}


//this draws the platform in the starting position



var platform = {
        //if we are already useing class for ball and brick, I really like how class work, it's quite clean, qwq
        //c.fillRect (250, 680, 100, 20)
        x: 200,
        y: 300,
        dx: 5,
        width: 100,
        height: 20,
        color: 'white',

        update: function(){
                x += dx
        },
        
        draw: function() {
                //can't use arrow function as methods, 'this' refers to global object
                c.fillStyle = this.color
                c.rect(this.x,this.y,this.width,this.height)
                c.fill()
        },

        collision: function(){
                
        }

}

let maball = new Ball(100, 200)
//declare ball


function nextFrame(){
        maball.update()
        maball.draw()
        platform.draw()
        //calc nextFrom, input to render()
}

function render(){
        c.clearRect(0,0,cvs.width,cvs.height)
        //for clearing last frame
        nextFrame()
        requestAnimationFrame(render)
        //rendering looop
}
render()


