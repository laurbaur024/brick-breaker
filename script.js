const cvs = document.getElementById('canvas')
canvas.width = 600
canvas.height = 700

var c = cvs.getContext('2d')

//this draws the ball in the starting position
c.beginPath();
c.strokeStyle = '#ef946c';
c.fillStyle = '#ef946c';
c.arc(300,660,20,0, Math.PI *2, false);
c.fill();
c.stroke();

class Ball{
        constructor( x, y, dx, dy, rad ){
                this.x = x;
                this.y = y;
                this.dx = dx;
                this.dy = dy;
                this.rad = rad;
        }

        animate(){

        }
}

brickArray = []
//sad array ... hip hip array!!!!!!
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





