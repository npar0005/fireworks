class Particle {
	constructor(x, y, radius, color) {
		this.position = new Vector2d(x, y);
		this.color = color;
		this.r = radius;
	}

	draw() {
		ctx.beginPath();
		ctx.arc(this.position.x, this.position.y, this.r, 0, 2 * Math.PI);
		ctx.fillStyle = this.color;
		ctx.fill();
	}

}