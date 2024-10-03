let sceneCount = 0;
let opening = 1; //open boundary

let StartScroll = () => {
	let controller = new ScrollMagic.Controller();

	let scene_0 = new ScrollMagic.Scene({
		triggerElement: "#scene_0",
	})
		.setClassToggle("#scene_0", "fade-in")

		.on("start", () => {
			if (sceneCount == 0) {
				sceneCount = 0.5;
				opening = 0;
				constant_temperature = 400;
				temp = 400;
				scattering_count = 1;
				setConcentration(1);
			} else {
				sceneCount = 0;
				reset_scene1();
			}
		})
		.addTo(controller);

	let scene_1 = new ScrollMagic.Scene({
		triggerElement: "#scene_1",
	})
		.setClassToggle("#scene_1", "fade-in")

		.on("start", () => {
			if (sceneCount == 0.5) {
				opening = 1;

				sceneCount = 1;

				updateDopingConcentration(130);
				setVelocity(9);

				setDistance(9);

				setScattering(20);

				reset_scene1();

				document.getElementById("slider_61").value = 130;
				document.getElementById("v_p").value = 0;

				switch_1 = 2; //both

				constant_fermi =
					Math.round(((1000 * -0.28 * 0.026) / 300) * constant_temperature) /
					1000;
			} else {
				sceneCount = 0.5;

				setScattering(20);

				reset_scene1();
			}
		})
		.addTo(controller);

	let scene_2 = new ScrollMagic.Scene({
		triggerElement: "#scene_2",
	})
		.setClassToggle("#scene_2", "fade-in")

		.on("start", () => {
			if (sceneCount == 1) {
				opening = 1;

				sceneCount = 2;

				updateDopingConcentration(130);
				setVelocity(9);

				setDistance(9);

				setScattering(20);

				reset_scene1();

				document.getElementById("slider_61").value = 130;
				document.getElementById("v_p").value = 0;

				switch_1 = 2; //both

				constant_fermi =
					Math.round(((1000 * -0.28 * 0.026) / 300) * constant_temperature) /
					1000;
			} else {
				sceneCount = 0.5;

				setScattering(20);

				reset_scene1();
			}
		})
		.addTo(controller);
};
