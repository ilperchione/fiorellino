let w=600
let h=300

    function drawFlower(x, y, d){
        fill(255, 190, 0)
        circle(x+d/2, y-d/2, d);
        circle(x-d/2, y+d/2, d);
        circle(x-d/2, y-d/2, d);
        circle(x+d/2, y+d/2, d);
        fill(255, 120, 0)
        circle(x, y, d);
    }

    function setup(){
        createCanvas(600, 300)
    }

    function draw(){
        let d=125
        background(0, 255, 51)
        strokeWeight(2)
        drawFlower(w/2, h/2, d)
        drawFlower(w, h/2, d)
        drawFlower(w/w, h/2, d)
    }