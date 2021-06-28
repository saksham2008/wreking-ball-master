class Sling {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 250
        }
        this.sling = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.sling);
    }
    display() {
        if (this.sling.bodyA) {
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke("black");
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop();
        }
    }
    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
        this.sling.bodyA = body;
    }
}
