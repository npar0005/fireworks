class Firework {
	constructor(spawnPos, size) {
		let r = rand(0, 255);
		let g = rand(0, 255);
		let b = rand(0, 255);
		this.offset = spawnPos;
		this.color = `rgb(${r}, ${g}, ${b})`;
		this.radius = 0;
		this.acceleration = size;
		this.disparity = rand(8, 30);
		this.sparkly = Math.random();
	}

	update() {
		this.acceleration -= 0.05;
		this.radius += this.acceleration;

	}

	show() {
		if(this.sparkly > 0.8) {
			var disparity = rand(8, 30);
		}
		for(let angle = 0; angle < 360; angle += (disparity || this.disparity)){
			let pos = new Vector2d(cos(angle), sin(angle));
			pos.mult(this.radius);
			pos.add(this.offset);
			
			let particleRad = this.acceleration**2;
			let particle = new Particle(pos.x, pos.y, particleRad, this.color);
			
			// Draw particle
			particle.draw();
		}
	}

	finished() {
		return this.acceleration <= 0.05;
	}
}