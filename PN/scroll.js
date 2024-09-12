let sceneCount = 0;
let opening = 1;

let StartScroll = () => {
	let controller = new ScrollMagic.Controller();

	d3fourlevels();
	updatefourlevels(75);
	d3bands2();
	bands_function();

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

				array_positive_y_0 = [];
				array_negative_y_0 = [];
				array_plot_0 = [];
				for (var i = 0; i < point_count; i++) {
					array_plot[i] = [];
					array_positive_y[i] = [];
					array_negative_y[i] = [];
				}

				d3bands_0();
			} else {
				sceneCount = 0;
				resetScene();
			}
		})
		.addTo(controller);

	let scene_1_5 = new ScrollMagic.Scene({
		triggerElement: "#scene_1_5",
	})
		.setClassToggle("#scene_1_5", "fade-in")
		.on("start", () => {
			if (sceneCount == 0.5) {
				document.getElementById("slider_6").value = 130;
				opening = 1;

				sceneCount = 1;
				add_h(130);
				setVelocity(9);
				setDistance(9);
				setScattering(20);

				resetScene();

				factor_new = 0.3;

				switch_1 = 2; //both

				array_positive_y_0 = [];
				array_negative_y_0 = [];
				array_plot_0 = [];

				array_positive_y_0_e = [];
				array_negative_y_0_e = [];
				array_plot_e_0 = [];

				array_positive_y_0_h = [];
				array_negative_y_0_h = [];
				array_plot_h_0 = [];

				for (var i = 0; i < point_count; i++) {
					array_plot[i] = [];
					array_positive_y[i] = [];
					array_negative_y[i] = [];

					array_plot_e[i] = [];
					array_positive_y_e[i] = [];
					array_negative_y_e[i] = [];

					array_plot_h[i] = [];
					array_positive_y_h[i] = [];
					array_negative_y_h[i] = [];
				}

				constant_fermi =
					Math.round(((1000 * -0.28 * 0.026) / 300) * constant_temperature) /
					1000;

				d3bands();
				reset_d3bands();
				d3bands();
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

				add_h(130);

				setScattering(20);
				document.getElementById("slider_61").value = 130;
				document.getElementById("v_p").value = 0;

				setChangeV(2);

				apply_V_p(0);

				switch_1 = 2; //both

				array_positive_y_0 = [];
				array_negative_y_0 = [];
				array_plot_0 = [];

				array_positive_y_0_e = [];
				array_negative_y_0_e = [];
				array_plot_e_0 = [];

				array_positive_y_0_h = [];
				array_negative_y_0_h = [];
				array_plot_h_0 = [];

				for (var i = 0; i < point_count; i++) {
					array_plot[i] = [];
					array_positive_y[i] = [];
					array_negative_y[i] = [];

					array_plot_e[i] = [];
					array_positive_y_e[i] = [];
					array_negative_y_e[i] = [];

					array_plot_h[i] = [];
					array_positive_y_h[i] = [];
					array_negative_y_h[i] = [];
				}
				// constant_fermi = Math.round(1000*-0.28*0.026)/1000
				// console.log(constant_fermi)
				// console.log(constant_temperature)
				constant_fermi =
					Math.round(((1000 * -0.28 * 0.026) / 300) * constant_temperature) /
					1000;

				d3bands();
				reset_d3bands();
				d3bands();
			} else {
				sceneCount = 1;

				setChangeV(1);
				setScattering(20);

				document.getElementById("slider_6").value = 130;

				array_positive_y_0 = [];
				array_negative_y_0 = [];
				array_plot_0 = [];

				array_positive_y_0_e = [];
				array_negative_y_0_e = [];
				array_plot_e_0 = [];

				array_positive_y_0_h = [];
				array_negative_y_0_h = [];
				array_plot_h_0 = [];

				for (var i = 0; i < point_count; i++) {
					array_plot[i] = [];
					array_positive_y[i] = [];
					array_negative_y[i] = [];

					array_plot_e[i] = [];
					array_positive_y_e[i] = [];
					array_negative_y_e[i] = [];

					array_plot_h[i] = [];
					array_positive_y_h[i] = [];
					array_negative_y_h[i] = [];
				}
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

				apply_V_p(0);
				add_h(130);
				setScattering(20);

				switch_1 = 2; //both

				array_positive_y_0 = [];
				array_negative_y_0 = [];
				array_plot_0 = [];

				array_positive_y_0_e = [];
				array_negative_y_0_e = [];
				array_plot_e_0 = [];

				array_positive_y_0_h = [];
				array_negative_y_0_h = [];
				array_plot_h_0 = [];

				for (var i = 0; i < point_count; i++) {
					array_plot[i] = [];
					array_positive_y[i] = [];
					array_negative_y[i] = [];

					array_plot_e[i] = [];
					array_positive_y_e[i] = [];
					array_negative_y_e[i] = [];

					array_plot_h[i] = [];
					array_positive_y_h[i] = [];
					array_negative_y_h[i] = [];
				}
				constant_fermi =
					Math.round(((1000 * -0.28 * 0.026) / 300) * constant_temperature) /
					1000;

				d3bands();
				reset_d3bands();
				d3bands();
			} else {
				sceneCount = 2;
				electron_add = 0;

				setScattering(1);
				setConcentration(1);
				setVelocity(1);
				setVelocity(9);
				document.getElementById("slider_61").value = 130;
				document.getElementById("v_p").value = 0;

				apply_V_p(0);
				concentration = 50 / 3;

				add_h(130);

				resetScene();
			}
		})
		.addTo(controller);
};
