let canvas = document.querySelector("canvas");

canvas.width = innerWidth;
canvas.height = innerHeight;

let c = canvas.getContext("2d");



function Line (x, y, y2, dy, dy2) {
    this.x = x;
    this.y = y;
    this.y2 = y2;
    this.dy = dy;
    this.dy2 = dy2;

    this.draw = function () {

        c.beginPath();
        c.strokeStyle = "#7998C9"
        c.moveTo(this.x, this.y);
        c.lineTo(this.x, this.y2);
        c.stroke();

        if (this.y2 > innerHeight) {
            this.y = y;
            this.y2 = y2;

        }

        this.y += this.dy;
        this.y2 += this.dy2;
    }
}


let lineArray = [];

for (let i = 0; i < 250; i++) {
    let x = Math.random() * innerWidth;
    let y = Math.random() * 100;
    let y2 = y + Math.random() * 20;
    let dy = 12;
    let dy2 = 12;

    lineArray.push(new Line(x, y, y2, dy, dy2,));
}
console.log(lineArray)




function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = 0; i < lineArray.length; i++) {
        lineArray[i].draw();
    }
    c.beginPath();
    c.arc(1100, 170, 80, 0, Math.PI * 2, false);
    c.fillStyle = "#A4CFBE"
    c.fill();

}


animate();

