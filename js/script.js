let fireworks = [];
$(function() {
	// Set up:;

	$('#myCanvas').click(function(e) {
		let offset = new Vector2d(getMousePos(canvas, e).x, getMousePos(canvas, e).y);
		let size = rand(2, 5);
		const firework = new Firework(offset, size);

		fireworks.push(firework);	
	});

	function fwShow() {
		let time = 800;
		setInterval(function() {
			let size = rand(2, 5);
			let offset = new Vector2d(rand(50, canvas.width-50), rand(50, canvas.height-50));
			const firework = new Firework(offset, size);

			fireworks.push(firework);	
		}, time);
	}

	fwShow();

	
	interval = setInterval(function() {
		clearCanvas(canvas, ctx); // Clear for rerender.
		newFireworks = [];
		for(firework of fireworks) {
			firework.update();
			firework.show();

			if(!firework.finished()) {
				newFireworks.push(firework);
			}
		}
		fireworks = newFireworks;
		
	}, 1000/60);
	
});