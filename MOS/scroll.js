let sceneCount = 0;
let opening = 1; //open boundary

let StartScroll = () => {
	let controller = new ScrollMagic.Controller();

	// between title and scene 1
	let scene_0 = new ScrollMagic.Scene({
		triggerElement: "#scene_0",
	})
		.setClassToggle("#scene_0", "fade-in")

		.on("start", () => {
			if (sceneCount == 0) {
				sceneCount = 0.5;
			} else {
				sceneCount = 0;
				resetScene();
			}
		})
		.addTo(controller);

	// scene 1 - p-type dopants
	let scene_1 = new ScrollMagic.Scene({
		triggerElement: "#scene_1",
	})
		.setClassToggle("#scene_1", "fade-in")

		.on("start", () => {
			if (sceneCount == 0.5) {
				sceneCount = 1;
				resetScene();
			} else {
				sceneCount = 0.5;
				resetScene();
			}
		})
		.addTo(controller);

	// scene 2 - n-type dopants
	let scene_2 = new ScrollMagic.Scene({
		triggerElement: "#scene_2",
	})
		.setClassToggle("#scene_2", "fade-in")

		.on("start", () => {
			if (sceneCount == 1) {
				sceneCount = 2;
				resetScene();
			} else {
				sceneCount = 1;
				resetScene();
			}
		})
		.addTo(controller);
};
