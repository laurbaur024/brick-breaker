const cvs = document.getElementById('canvas')
canvas.width = 600
canvas.height = 700

var c = cvs.getContext('2d')
//bro why we using just 'c', it's kinda ugly no kidding. :(
//this draws the ball in the starting position

// c.beginPath();
// c.strokeStyle = '#ef946c';
// c.fillStyle = '#ef946c';
// c.arc(300,660,20,0, Math.PI *2, false);
// c.fill();
// c.stroke();
//these needs to go into the ball class My dude
//theze nuts
class Ball{
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

        animate(){
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
        constructor( x, y){
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
c.fillstyle = "#70877f"
c.fillRect (250, 680, 100, 20)

var platform = {
        width: "John",
        height: "Doe",
        animate: function (){},
        collision: function(){
                
        }

}

let maball = new Ball(100, 200)
maball.animate()




