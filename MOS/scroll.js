let sceneCount = 0;
let opening = 1; //open boundary

let StartScroll = () => {
  let controller = new ScrollMagic.Controller();




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

        
        // array_positive_y_0 = []
        // array_negative_y_0 = []
        // array_plot_0 = []
        // for ( var i = 0; i < point_count; i++ ) {
        //   array_plot[i] = []; 
        //   array_positive_y[i] = []; 
        //  array_negative_y[i] = []; 
        // }


        

      } else {
        sceneCount = 0;
        reset_scene1()
      }
    })
    .addTo(controller);




    let scene_2 = new ScrollMagic.Scene({
      triggerElement: '#scene_2'
    })
    .setClassToggle('#scene_2', 'fade-in')

    .on('start', () => {
      if (sceneCount == 0.5) {

   
        opening = 1
        
        sceneCount = 2;
       
       
        add_h(130)
        setVelocity(9)

        setDistance(9)

        setScattering(20)

        reset_scene1()


        factor_new = 0


        document.getElementById("slider_61").value = 130
        document.getElementById("v_p").value = 0
 

        switch_1 = 2//both

        // array_positive_y_0 = []
        // array_negative_y_0 = []
        // array_plot_0 = []

        // array_positive_y_0_e = []
        // array_negative_y_0_e = []
        // array_plot_e_0 = []

        // array_positive_y_0_h = []
        // array_negative_y_0_h = []
        // array_plot_h_0 = []

        // for ( var i = 0; i < point_count; i++ ) {
        //   array_plot[i] = []; 
        //   array_positive_y[i] = []; 
        //  array_negative_y[i] = []; 

        //  array_plot_e[i] = []; 
        //   array_positive_y_e[i] = []; 
        //  array_negative_y_e[i] = []; 

        //  array_plot_h[i] = []; 
        //   array_positive_y_h[i] = []; 
        //  array_negative_y_h[i] = []; 
        // }
    
        constant_fermi = Math.round(1000*-0.28*0.026/300*constant_temperature)/1000
    
      } else {
        sceneCount = 0.5;
  
          setScattering(20)


  

        // array_positive_y_0 = []
        // array_negative_y_0 = []
        // array_plot_0 = []

        // array_positive_y_0_e = []
        // array_negative_y_0_e = []
        // array_plot_e_0 = []

        // array_positive_y_0_h = []
        // array_negative_y_0_h = []
        // array_plot_h_0 = []

        // for ( var i = 0; i < point_count; i++ ) {
        //   array_plot[i] = []; 
        //   array_positive_y[i] = []; 
        //  array_negative_y[i] = []; 

        //  array_plot_e[i] = []; 
        //   array_positive_y_e[i] = []; 
        //  array_negative_y_e[i] = []; 

        //  array_plot_h[i] = []; 
        //   array_positive_y_h[i] = []; 
        //  array_negative_y_h[i] = []; 
        // }


        reset_scene1()


      }
    })
    .addTo(controller);




   
 
}