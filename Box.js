class Box {
    constructor(x, y, width, height) {
        var options = {
            restituiton:0.8,
            density: 0.04,
            friction: 1
        }
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.angle;
        push()
        rectMode(CENTER);
        translate(pos.x, pos.y);
        rotate(angle);
        fill("blue");
        stroke("green");
        strokeWeight(4);
        rect(0, 0, this.width, this.height);
        pop();      
        
    }
}