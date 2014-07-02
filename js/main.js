M.registerEntity("ball", function () {
	var ball = new M.Entity();

	ball.shows("itself").as("sprite").set({
		fill: "ball", x: M.renderer.getCenter().x, y: M.renderer.getCenter().y, scaleX: 0.5, scaleY: 0.5
	});

	ball.roll = function () {
		ball.view("itself").play("roll", true);
	};

	ball.stop = function () {
		ball.view("itself").stop();
	};

	return ball;

});

M.registerEntity("field", function () {
	var field = new M.Entity();

	field.shows("itself").as("sprite").set({
		fill: "field", x: M.renderer.getCenter().x, y: M.renderer.getCenter().y, scaleX: 1.85, scaleY: 1.85
	});

	return field;
});
function main() {
	M.sprites.load({
		//ball: "assets/ball_spritesheet.png"
		field: "assets/canchita_futbol.png",
		ball: {
			source: "assets/ball_spritesheet.png",
			frames: [{ x: 0, y: 0, width: 64, height: 64 },
				{ x: 64, y: 0, width: 64, height: 64 },
				{ x: 0, y: 64, width: 64, height: 64 },
				{ x: 64, y: 64, width: 64, height: 64 },
				{ x: 0, y: 128, width: 64, height: 64 },
				{ x: 64, y: 128, width: 64, height: 64 },
				{ x: 0, y: 192, width: 64, height: 64 }],
			animations: {
				roll: {
					frames: [0,1,2,3,4,5,6],
					duration: 100
				}
			}
		}
	}, function () {
		var ball = M.createEntity("ball"),
			field = M.createEntity("field");

		M.push(field).to("world");
		M.push(ball).to("world");
	});


}
