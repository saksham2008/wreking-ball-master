class Ball
{
	constructor(x,y,r)
	{
		var options={
			frictionAir:0.005,
			density:1.2
			}
		this.x=x;
		this.y=y;
		this.r=r
		
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		
            var angle=this.body.angle
			push()
			translate(paperpos.x, paperpos.y);
            rotate(angle)
			rectMode(CENTER)
			//strokeWeight(4);
			fill("lightgray")
			ellipse(0,0,this.r, this.r);
			pop()
			
			
			
	}

}