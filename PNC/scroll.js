let sceneCount = 0;
let opening = 1;

let StartScroll = () => {
  let controller = new ScrollMagic.Controller();

  d3fourlevels();
  updatefourlevels(75);
  // d3bands();
  d3bands2();
  bands_function();


  let scene_0 = new ScrollMagic.Scene({
      triggerElement: '#scene_0'
    })
    .setClassToggle('#scene_0', 'fade-in')

    .on('start', () => {
      if (sceneCount == 0) {
      


        // nn_live.checked = true  
        sceneCount = 0.5;
        opening = 0;

        constant_temperature = 400;
        temp = 400

        
        scattering_count =1

        // scattering_velocity=1
        setConcentration(1)

        
        array_positive_y_0 = []
        array_negative_y_0 = []
        array_plot_0 = []
        for ( var i = 0; i < point_count; i++ ) {
          array_plot[i] = []; 
          array_positive_y[i] = []; 
         array_negative_y[i] = []; 
        }


        
        d3bands_0();
      } else {
        sceneCount = 0;
        reset_scene1()
      }
    })
    .addTo(controller);







    // let scene_1 = new ScrollMagic.Scene({
    //   triggerElement: '#scene_1'
    // })
    // .setClassToggle('#scene_1', 'fade-in')
    // // .addIndicators({
    // //   name: 'fade scene',
    // //   colorTrigger: 'white',
    // //   colorStart: '#FFF7AE'
    // // })
    // .on('start', () => {
    //   if (sceneCount == 0.5) {

       
    //     opening = 1
        
    //     sceneCount = 1;
    //     concentration=50/3
    //     reset_scene1()


        
    //     document.getElementById("switch_re").checked = true
    //     document.getElementById("slider_1").value = 1
    //     document.getElementById("slider_2").value = 1
    //     document.getElementById("slider_3").value = 1
    //     document.getElementById("slider_4").value = 1
    //     // constant_temperature=400

    //     switch_1 = 2//both

    //     array_positive_y_0 = []
    //     array_negative_y_0 = []
    //     array_plot_0 = []

    //     array_positive_y_0_e = []
    //     array_negative_y_0_e = []
    //     array_plot_e_0 = []

    //     array_positive_y_0_h = []
    //     array_negative_y_0_h = []
    //     array_plot_h_0 = []

    //     for ( var i = 0; i < point_count; i++ ) {
    //       array_plot[i] = []; 
    //       array_positive_y[i] = []; 
    //      array_negative_y[i] = []; 

    //      array_plot_e[i] = []; 
    //       array_positive_y_e[i] = []; 
    //      array_negative_y_e[i] = []; 

    //      array_plot_h[i] = []; 
    //       array_positive_y_h[i] = []; 
    //      array_negative_y_h[i] = []; 
    //     }
    //     // constant_fermi = Math.round(1000*-0.28*0.026)/1000
    //     // console.log(constant_fermi) 
    //     // console.log(constant_temperature)
    //     constant_fermi = Math.round(1000*-0.28*0.026/300*constant_temperature)/1000
    //     // $('#zoom1').anythingZoomer({
    //     //   smallArea: 'small',
    //     //   clone: true,
    //     //   edge: 0,
    //     //   switchEvent: 'none'
    //     // });

    //     d3bands();
    //     reset_d3bands()
    //     d3bands();
    //   } else {
    //     sceneCount = 0.5;
    //     // switch_1 = 0

       
       
    //     reset_scene1()
    //   }
    // })
    // .addTo(controller);


  


    let scene_1_5 = new ScrollMagic.Scene({
      triggerElement: '#scene_1_5'
    })
    .setClassToggle('#scene_1_5', 'fade-in')
    // .addIndicators({
    //   name: 'fade scene',
    //   colorTrigger: 'white',
    //   colorStart: '#FFF7AE'
    // })
    .on('start', () => {
      if (sceneCount == 0.5) {

  

        // document.getElementById("switch_re1").checked = true
        // document.getElementById("switch_re").checked = true
            //     document.getElementById("switch_re").checked = true

        // document.getElementById("slider_5").value = 1
        document.getElementById("slider_6").value = 130
        // document.getElementById("slider_7").value = 1
        // document.getElementById("slider_8").value = 1
        opening = 1
        
        sceneCount = 1.5;
        add_h(130)
        // reset_scene1()
        setVelocity(9)
        // setScattering(5)
        // add_h(123)
        setDistance(9)
        // setDistance(999)
        setScattering(20)

        reset_scene1()

        // setFactor(28)

        factor_new = 0.3

        // recombine = 1

        // rate_e = 0.1


        // constant_temperature=400

        switch_1 = 2//both

        array_positive_y_0 = []
        array_negative_y_0 = []
        array_plot_0 = []

        array_positive_y_0_e = []
        array_negative_y_0_e = []
        array_plot_e_0 = []

        array_positive_y_0_h = []
        array_negative_y_0_h = []
        array_plot_h_0 = []

        for ( var i = 0; i < point_count; i++ ) {
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
        constant_fermi = Math.round(1000*-0.28*0.026/300*constant_temperature)/1000
        // $('#zoom1').anythingZoomer({
        //   smallArea: 'small',
        //   clone: true,
        //   edge: 0,
        //   switchEvent: 'none'
        // });

        d3bands();
        reset_d3bands()
        d3bands();
      } else {
        sceneCount = 0.5;
        // switch_1 = 0
        concentration=50/3
        // scattering_velocity=1
        // setScattering(1)
        // setConcentration(1)
        // setVelocity(1)

        // document.getElementById("slider_1").value=1
        // document.getElementById("slider_2").value=1
        // document.getElementById("slider_3").value=1
        // document.getElementById("slider_4").value=1
        // document.getElementById("switch_re").checked = true
        reset_scene1()
      }
    })
    .addTo(controller);



    let scene_2 = new ScrollMagic.Scene({
      triggerElement: '#scene_2'
    })
    .setClassToggle('#scene_2', 'fade-in')
    // .addIndicators({
    //   name: 'fade scene',
    //   colorTrigger: 'white',
    //   colorStart: '#FFF7AE'
    // })
    .on('start', () => {
      if (sceneCount == 1.5) {

        // document.getElementById("switch_re2").checked = true
        opening = 1
        
        sceneCount = 2;
       
       
        add_h(130)
        // document.getElementById("switch_re").checked = true

        // setDistance(999)
        setScattering(20)
        document.getElementById("slider_61").value = 130
        document.getElementById("v_p").value = 0
        // setFactor(1)
        // setScattering(1)
        // setConcentration(1)
        setChangeV(2)

        apply_V_p(0)
        // setVelocity(1)
        // document.getElementById("slider_9").value=1
        // document.getElementById("slider_10").value=1
        // document.getElementById("slider_11").value=1
        // document.getElementById("slider_12").value=1
        // document.getElementById("slider_13").value=123
        // document.getElementById("add_h_text").value=Math.pow(10,13).toExponential(1)
        // reset_scene1()
        // constant_temperature=400

        switch_1 = 2//both

        array_positive_y_0 = []
        array_negative_y_0 = []
        array_plot_0 = []

        array_positive_y_0_e = []
        array_negative_y_0_e = []
        array_plot_e_0 = []

        array_positive_y_0_h = []
        array_negative_y_0_h = []
        array_plot_h_0 = []

        for ( var i = 0; i < point_count; i++ ) {
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
        constant_fermi = Math.round(1000*-0.28*0.026/300*constant_temperature)/1000
        // $('#zoom1').anythingZoomer({
        //   smallArea: 'small',
        //   clone: true,
        //   edge: 0,
        //   switchEvent: 'none'
        // });

        d3bands();
        reset_d3bands()
        d3bands();

        // let rect_density_new = Math.pow(10,-13)*hole_add_new

        // for (let k = 0; k < Math.round(count_pn_num*10); k++) {
        //   //left of 0 negative
        //   let x = (550)*s_x-k/10*s_x;
        
        //   let n = (10+385/2+96.25)*s_y-rect_density_new*4*s_y*(1-Math.exp(-Math.pow((count_pn_num-k/10),2)/0.026))
         
        //     new_array_rou_e_set.push({ x: x, y: (n)*1 });
        //   // }
        
        // }
      } else {
        sceneCount = 1.5;
        // setVelocity(5)
        // setScattering(5)
        
        setChangeV(1)
        // switch_1 = 0
        // constant_fermi = Math.round(1000*-0.28*0.026/300*constant_temperature)/1000
        // $('#zoom1').anythingZoomer({
          // setDistance(999)
          setScattering(20)
          // setFactor(28)

          document.getElementById("slider_6").value = 130

        array_positive_y_0 = []
        array_negative_y_0 = []
        array_plot_0 = []

        array_positive_y_0_e = []
        array_negative_y_0_e = []
        array_plot_e_0 = []

        array_positive_y_0_h = []
        array_negative_y_0_h = []
        array_plot_h_0 = []

        for ( var i = 0; i < point_count; i++ ) {
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


        // concentration=50/3
        // setScattering(1)
        // setConcentration(1)
        // setVelocity(1)
        // // document.getElementById("slider_5").value=1
        // // document.getElementById("slider_6").value=1
        // // document.getElementById("slider_7").value=1
        // // document.getElementById("slider_8").value=1

        // reset_scene1()
        // d3bands();
        // reset_d3bands()
        reset_scene1()
        // d3bands();

      }
    })
    .addTo(controller);


    let scene_3 = new ScrollMagic.Scene({
      triggerElement: '#scene_3'
    })
    .setClassToggle('#scene_3', 'fade-in')
    // .addIndicators({
    //   name: 'fade scene',
    //   colorTrigger: 'white',
    //   colorStart: '#FFF7AE'
    // })
    .on('start', () => {
      if (sceneCount == 2) {

        // document.getElementById("switch_re3").checked = true
        // document.getElementById("switch_re2").checked = true
        // document.getElementById("slider_14").value=1
        // document.getElementById("slider_15").value=1
        // document.getElementById("slider_16").value=1
        document.getElementById("v_p_2").value=0
        document.getElementById("slider_611").value=130

        sceneCount = 3;

        setVelocity(9)
        opening = 1
        
        hole_add =0
   
        apply_V_p(0)
      
        add_h(130)
 
        // document.getElementById("switch_re").checked = true

        // setDistance(999)
        setScattering(20)

       
        // setFactor(1)
        // setScattering(1)
        // setConcentration(1)
        // setVelocity(1)
        // document.getElementById("slider_9").value=1
        // document.getElementById("slider_10").value=1
        // document.getElementById("slider_11").value=1
        // document.getElementById("slider_12").value=1
        // document.getElementById("slider_13").value=123
        // document.getElementById("add_h_text").value=Math.pow(10,13).toExponential(1)
        // reset_scene1()
        // constant_temperature=400

        switch_1 = 2//both

        array_positive_y_0 = []
        array_negative_y_0 = []
        array_plot_0 = []

        array_positive_y_0_e = []
        array_negative_y_0_e = []
        array_plot_e_0 = []

        array_positive_y_0_h = []
        array_negative_y_0_h = []
        array_plot_h_0 = []

        for ( var i = 0; i < point_count; i++ ) {
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
        constant_fermi = Math.round(1000*-0.28*0.026/300*constant_temperature)/1000
        // $('#zoom1').anythingZoomer({
        //   smallArea: 'small',
        //   clone: true,
        //   edge: 0,
        //   switchEvent: 'none'
        // });

        d3bands();
        reset_d3bands()
        d3bands();
      } else {
        sceneCount = 2;
        // switch_1 = 0
        electron_add  = 0

        setScattering(1)
        setConcentration(1)
        setVelocity(1)
        setVelocity(9)
        document.getElementById("slider_61").value = 130
        document.getElementById("v_p").value = 0
        

        apply_V_p(0)
        concentration=50/3
        // document.getElementById("slider_9").value=1
        // document.getElementById("slider_10").value=1
        // document.getElementById("slider_11").value=1
        // document.getElementById("slider_12").value=1
        // document.getElementById("slider_13").value=123
        // document.getElementById("add_h_text").value=(Math.pow(10,13)).toExponential(1)
        add_h(130)
     
        reset_scene1()
      }
    })
    .addTo(controller);



   
 
}