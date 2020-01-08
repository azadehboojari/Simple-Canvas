let canvas = document.querySelector('canvas')

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let c = canvas.getContext('2d');
// rectangle
// c.fillStyle = '#fa34a3';
// c.fillRect(100, 100, 100, 100)
// c.fillStyle = 'blue';
// c.fillRect(400, 100, 100, 100)
// c.fillStyle = 'green';
// c.fillRect(300, 300, 100, 100);
// // line
// c.beginPath();
// c.moveTo(50, 300)
// c.lineTo(100, 700);
// c.lineTo(400, 600);
// c.strokeStyle = 'pink';
// c.stroke();
// // arc
// for (var i = 0; i < 30; i++) {

//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     c.beginPath()
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     c.strokeStyle = 'blue'
//     c.stroke();
// }

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = () => {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        // c.strokeStyle = 'blue';
        c.fillStyle = "#FF0000";
        c.stroke();
        
    }
    this.update = () => {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw()
    }
}




var circleArray = [];
for (var i = 0; i < 100; i++) {
    var radius = 30;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 8;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dy = (Math.random() - 0.5) * 8;
    var radius = 30;
    circleArray.push(new Circle(x, y, dx, dy, radius))

}
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}
animate();