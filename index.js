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
                this.width = 100;
                this.height = 20;
                this.color = 'cyan'
                //color bug
        }

        draw(){
                c.fillStyle = this.color
                c.strokeStyle = 'black'
                c.lineWidth = 10
                c.rect(this.x,this.y,this.width,this.height)
                c.fill()
                c.stroke()
        }

        becomeOneOfTheBricks(){
                
        }

        break(){

        }
};



// document.onkeydown = function(event) {
//         console.log(event)
//         switch (event.keyCode) {
//            case 37:
//               alert('Left key');
//            break;
//            case 38:
//               alert('Up key');
//            break;
//            case 39:
//               alert('Right key');
//            break;
//            case 40:
//               alert('Down key');
//            break;
//         }
//      };
let mvLeft = false;
let mvRight = false;
//functinolize eventlistner to key
//keydown to true
        //keyup to false
//key to veriable

class KeyReaction{
        //I love class
        //it's just a switch that change boolean for keys
        constructor(object, key){
                this.object = object
                this.key = key
                this.value = 0
        }

        bind(){
        //is that really the best name?
        //still fixing 
                document.addEventListener('keydown', e =>{
                        if(e.key === this.key){
                                this.value = 1

                        }
                })
                document.addEventListener('keyup', e =>{
                        if(e.key === this.key){
                                this.value = 0
                        }
                })
        }
}

let leftKeyBind = new KeyReaction(mvLeft, 'a')
leftKeyBind.mvValue = 25;

let rightKeyBind = new KeyReaction(mvRight,'d')
rightKeyBind.mvValue = -25;
console.log(`currentspeed = ${leftKeyBind.mvValue}`)


        rightKeyBind.bind()
        leftKeyBind.bind()

// document.addEventListener('keypress', function(event) {
//         console.log(event)
//         switch(event.charCode){
//                 case 97: 
//                         console.log('right');
//                 case 100: 
//                         console.log('left');
//         }
        
// })
var platform = {
        //if we are already useing class for ball and brick, I really like how class work, it's quite clean, qwq
        //c.fillRect (250, 680, 100, 20)
        x: 200,
        y: 300,
        dx: this.dx,
        //the movement of the platform, 
        // rightkey set to 4 left set to -4, if they are trigger they will time 1, if not times 0
        width: 100,
        height: 20,
        color: 'white',


        update: function(){
                this.dx = rightKeyBind.mvValue * rightKeyBind.value + leftKeyBind.mvValue * leftKeyBind.value
                this.x += this.dx;
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






let brick1 = new Brick(100,250)
let maball = new Ball(100, 200)
//declare ball


function nextFrame(){
        maball.update()
        maball.draw()
        brick1.draw()
        platform.update()
        platform.draw()
        //calc nextFrom, input to render()
}

function render(){
        c.clearRect(0,0,cvs.width,cvs.height)
        //for clearing last frame
        nextFrame()
        requestAnimationFrame(render)
        //rendering loop
}
render()


