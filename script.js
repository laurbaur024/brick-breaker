const cvs = document.getElementById('canvas')
canvas.width = 500
canvas.height = 400

var c = cvs.getContext('2d')


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
//sad array
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

var platform = {
        firstName: "John",
        lastName: "Doe",
        age: 50,
        eyeColor: "blue",
        animate: function (){},
        collsion: function(){
                
        }

}





