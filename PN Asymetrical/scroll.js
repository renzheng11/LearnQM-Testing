let sceneCount = 0;
let opening = 1;

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

				// setConcentration(1);
			} else {
				sceneCount = 0;
				resetScene();
			}
		})
		.addTo(controller);

	let scene_1 = new ScrollMagic.Scene({
		triggerElement: "#scene_1",
	})
		.setClassToggle("#scene_1", "fade-in")
		.on("start", () => {
			if (sceneCount == 0.5) {
				document.getElementById("slider_6").value = 130;
				opening = 1;

				sceneCount = 1;
				updateDopingConcentration(130);
				setVelocity(9);
				setDistance(9);
				setScattering(20);

				resetScene();

				factor_new = 0.3;

				constant_fermi =
					Math.round(((1000 * -0.28 * 0.026) / 300) * constant_temperature) /
					1000;
			} else {
				sceneCount = 0.5;
				concentration = 50 / 3;

				resetScene();
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

				setScattering(20);
				document.getElementById("slider_61").value = 130;
				document.getElementById("v_p").value = 0;

				setBandDiagramVScale(2);

				updateAppliedVoltage(0);

				constant_fermi =
					Math.round(((1000 * -0.28 * 0.026) / 300) * constant_temperature) /
					1000;
			} else {
				sceneCount = 1;

				setBandDiagramVScale(1);
				setScattering(20);

				document.getElementById("slider_6").value = 130;

				resetScene();
			}
		})
		.addTo(controller);

	let scene_3 = new ScrollMagic.Scene({
		triggerElement: "#scene_3",
	})
		.setClassToggle("#scene_3", "fade-in")
		.on("start", () => {
			if (sceneCount == 2) {
				document.getElementById("v_p_2").value = 0;
				document.getElementById("slider_611").value = 130;

				sceneCount = 3;

				setVelocity(9);
				opening = 1;

				hole_add = 0;

				updateAppliedVoltage(0);
				updateDopingConcentration(130);
				setScattering(20);

				constant_fermi =
					Math.round(((1000 * -0.28 * 0.026) / 300) * constant_temperature) /
					1000;
			} else {
				sceneCount = 2;
				electron_add = 0;

				setScattering(1);
				// setConcentration(1);
				setVelocity(9);
				document.getElementById("slider_61").value = 130;
				document.getElementById("v_p").value = 0;

				updateAppliedVoltage(0);
				concentration = 50 / 3;

				updateDopingConcentration(130);

				resetScene();
			}
		})
		.addTo(controller);
};
