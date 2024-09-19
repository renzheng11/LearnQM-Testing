let appearArray_s1 = []

let blackArray_h = [];
let blackID_h  = [];
let whiteArray_e = [];
var time_count_graph =0;

let factor_ca = 1;
let d_factor = 1;

let num_e;
let num_h;

let changeV = 1
let volume1;

let V_applied_p =0;
let V_applied_n=0;

let cc=0

let isOn = false;

let appear_id 
let disappear_id 

let tempe_fraction_e

let gg_rate =1000

let factor_c = 1

let new_array_plot_e_set_count = []
let new_array_plot_h_set_count = []

let new_array_rou_e_set = []
let new_array_rou_h_set = []


let changg = 0;
let e_field_c = 0;
var rate_e =1

let rect_density 

let hole_add_new 

let factor_new =1;

let whiteArray_dot = []
let blackArray_dot = []

let array_band_hardcode = []


//fraction
//donor
let n_c
let delta_ED
let fraction_e = []
let fraction_e_count
let fraction_e_count_t
let dif_e //difference in freeze count
let dif_e_current //difference in freeze difference count and existing paired e count

//acceptor 
let n_v
let delta_EA
let fraction_h = []
let fraction_h_count
let fraction_h_count_t
let dif_h //difference in freeze count
let dif_h_current //difference in freeze difference count and existing paired e count


let new_generate = 6;




//eletron hole

var browserZoomLevel = Math.round(window.devicePixelRatio * 100);


settings = {
  nucleus: false,
  nn: false,
  kk: false,
  valence: true,
  conduction: true,
  nn_live: true
}
var generation_R = 100;
var generation_Rate; 
var generation_Rate_c; 
var current_Electron = 0;
var current_Hole = 0; 
var current_Electron_c = 0;
var current_Hole_c = 0; 
var constant_EH = 0.0000001;
var recombination_R = 0;
var recombination_Rate = 1;
var recombination_Rate_c = 1;
var ni; 
var nn;
var constant_beta = Math.pow(10,-12);
let count_buffer = 0;

var time_count =0;

let x_probability;
let x_probability_time;

////////////////////////////////
let whiteArray = [];
let blackArray = [];
let whiteID = [];
let blackID = [];
let white_seek_ball = [];
let black_seek_ball = [];
let global_id = 0;

let global_id_s1 = 0;

let frequency_A = 0;
let frequency_B = 0;

let slider_temperature;
let slider_temperature_s1;

let t_f_prob = false;

let appearArray = [];
let disappearArray = [];
let disappearArray_s1 = [];

let disappearArray_2 = []; //circles 
let disappearArray_2_pair = []; //circles 
let disappearArray_dot = [];

let generate_num; 

let gap = 200;
let l = 560;
let w = 120;

let scene1_aArray = [];
let scene1_dArray = [];
let scene1_aArray2 = [];
let scene1_dArray2 = [];

let switch_1 = 0
let recombine = 1


let fading = 255;

let loopp = true;

let change_square = -30
let change_length = 100+change_square;

let temp = 270; 

let ni_s1;
let array_band = []
let array_band1 = []
let array_band2 = []
let array_band3 = []
let array_band4 = []
let random_botz = []
var generation_Rate_s1; 
var current_Electron_s1 = 0;
var current_Hole_s1 = 0; 
var recombination_Rate_s1 = 1;
var constant_beta_s1 = Math.pow(10,-12);

let g_rate;

let stop_s1 = false; 

let numm;

let interval_1 = 2000;
let interval_3 = 2000;
let interval_45 = 2000;

let interval_pn = 100;

let interval_s = 1000;

var run1;
var run45;
var run3;

var count_pn;

// let num_speed =1;

var count_pn_num =0;

let button_reset;

let middle_position_Array = [];
let disappear_count = 0;
/////////
let scale_x = 1440;
let scale_y = 789;

let s_x;
let s_y;

let ran_num = 2;

let electron_add = 0;
let hole_add = 0;

var time_count =0;

var time_count_blink =100;

let fade;
var appear1 = 0;

let latticeAtoms = [];
let latticeAtoms_2 = [];
let latticeAtoms_e = [];
let latticeAtoms_h = [];
var globalOrbitalCount = 0;

let free_electron = [];
let free_hole = [];
let random_direction;

var opacity;


let electronLatticePositions = [];

let random_num1 = [];

let id_electron_s1 = 0;
let id_hole_s1 = 0;

var blink;
let interval_blink = 1000;

var scattering_c

var count_g
let count_graph = 10

let count_n = 0;

let scattering_velocity
let scattering_count = 0
let scattering_count_c = 0

let scatter_tf = false

let constant_temperature_real 
let temp_real
let box_count = []

let concentration = 50/3

let context_1

var zincrement = 0.001;
var increment = 0.1;
var zoff = 0.0;

let test_num = 10

let point_count = 200;
let array_plot = []
let array_plot_0 = []
let array_positive_y = []
let array_negative_y = []
let array_positive_y_0 = []
let array_negative_y_0 = []

let box_count_e = []
let box_count_h = []

let array_plot_e = []
let array_plot_h = []
let array_plot_e_0 = []
let array_plot_h_0 = []

let array_positive_y_e = []
let array_negative_y_e = []
let array_positive_y_0_e = []
let array_negative_y_0_e = []

let array_positive_y_h = []
let array_negative_y_h = []
let array_positive_y_0_h = []
let array_negative_y_0_h = []

let distance_dis = 9;

let array_graph_con = []
let array_graph_current = []

let con_count = 0;
let x_con=0;
let y_con =0
let real_graph = 0
let real_graph_live = 0
let start_graph = 1

let test_a ;
let y_run;
let y_con_c=0;
let y_con_2=0;

let X_n


let test_current_scale =3;
let test_x_scale =0.2;

let line_yellow =[]
let line_green = []

let line_yellow_data = new Array(100).fill(0);
let line_green_data = []
let line_green_data_indice = []

let E_gap_factor = 10;

let  array_plot_e_set
let array_plot_e_0_set
let array_plot_h_set
let array_plot_h_0_set

let x_num_count = 6

let run11
let run_outer 
function mouseClicked() {

  if(abs(910*s_x-mouseX)<30*s_x && abs(377*s_y-mouseY)<9*s_y){
    if(isOn == true) isOn = false;
    else isOn = true;
  }

}

function setup() {
  s_x = windowWidth/scale_x;
  s_y = windowHeight/scale_y;
  setInterval(toggleRecombine, 2000);
  
  onRefresh();
  let canvas = createCanvas(2 * windowWidth / 3, windowHeight);
  canvas.parent('visualization');

  frameRate(10);
  setInterval(time_graph, 0.00000000002);

  context_1 = canvas.drawingContext;

  ////////////
 // generate balls based on frequency
 run45 = setInterval(function(){genBalls(1);}, interval_45); // scene changing T
 // generate balls straight 
 run11 = setInterval(function(){genBalls_straight(1);}, 2000); // scene changing T

 count_pn = setInterval(function(){count_pn_f();}, interval_pn); 


 run1 = setInterval(function(){genBalls_scene1(1);}, interval_1); // scene 1 gen

 blink = setInterval(function(){blinking();}, interval_blink); // blinking

 scattering_c = setInterval(function(){scattering();}, 50); // scattring time 

//  count_g = setInterval(function(){count_start_graph();}, 130); // scattring time 

 y_run = setInterval(function(){y_change();}, 1700); // y axis real time change 


 run_outer = setInterval(function(){genBalls_outer(1);}, 1000 / new_generate); // scene changing T
 
 
//  setInterval(timeIt, 1000);

//  setInterval(timeIt_blink, 10);

 setInterval(time_concentration,10)
/////////
  sceneCount = 0;

  ///
  goToHole = [];


  random_hole = [];

  random_direction=[];

  xLimit = ((int)(width / 180));
  yLimit = ((int)(height / 180));











}

function draw() {
  background(18, 18, 18);
  s_x = windowWidth/scale_x;
  s_y = windowHeight/scale_y;


  if (mouseX > 0) {
    select('body').addClass('noselect');
  } else {
    if (select('body').hasClass('noselect')) {
      select('body').removeClass('noselect');
    }
  }

   if (sceneCount == 0.5) {

    }
  else if (sceneCount == 1) { 

  } else if (sceneCount == 1.5) {
    // console.log(time_count)

     ///grid for graph


    //  for (let i =0;i<whiteArray.length;i++) {
 
    //   if (whiteArray[i].botz>3 ){
    //   console.log(whiteArray[i].show)
    //   }
    // }

      stroke(125, 241, 148,100);
    strokeWeight(1);
    // fill(25,25,25,100)
    // rect((970-350+20)*s_x,(790-200+80)*s_y,(330-20)*s_x,(190-80)*s_y);

    noFill();
    rect((10+100+70+change_square)*s_x,(10+385)*s_y,(940-change_length-70)*s_x,(770/2)*s_y);

    fill(30)
    //one
    rect((10+100+70+change_square)*s_x,(10)*s_y,(940-change_length-70)*s_x,(770/4)*s_y);

    //two
    rect((10+100+70+change_square)*s_x,(10+385/2)*s_y,(940-change_length-70)*s_x,(770/4)*s_y);

    // line((10+100+70+change_square + (940-change_length-70)/2)*s_x,(10+385/2)*s_y, (10+100+70+change_square + (940-change_length-70)/2)*s_x, (10+385/2+770/4)*s_y)

    noFill();

/////////////////

    // x_probability = 100/(1+((y_cordi/100+constant_fermi)*constant_temperature/0.026/300)/100)
    x_probability = Math.round(100/(1+Math.exp((300*(y_cordi/500-constant_fermi)/(0.026*constant_temperature)))))

  


    x_probability_time=(x_probability)
   
    //tcb = 10 
    if (time_count_blink>x_probability_time){
       opacity_circle=0
       opacity_circle_up=0

    }else if (time_count_blink<=x_probability_time){

  
      if (x_probability_time<30){
        opacity_circle=1
      } else {
        opacity_circle=1
        opacity_circle_up=1
      }
      
    }


    // if (0.56<y_cordi/100 && 2>y_cordi/100){
    //   num_Line_text= Math.round(88*Math.pow(y_cordi/100-0.56,1/2))
    //   // opacity_circle=0
    //   // opacity_circle_up=1
    // } else if (y_cordi/100<-0.56 && -2<y_cordi/100){
    //   num_Line_text= Math.round(50*Math.pow(-0.56-y_cordi/100,1/2))
    //   // opacity_circle=1
    //   // opacity_circle_up=0
    //   //Math.round(50*Math.pow(-0.56+m/100,1/2))
    // } else if (-0.56<y_cordi/100 && y_cordi/100<0.56){
    //   num_Line_text=0
    //   opacity_circle=0
    //   opacity_circle_up=0
    // } 

    // d3bands_update()
    // d3bands_update_up()
    if (time_count ==0) {
      ni = (9.15*Math.pow(10,19))*Math.pow((temp/300),1.5)*Math.exp((-0.59/(0.026*temp/300)))
      generation_Rate_c = 0.01*ni;
      
  
      
      
      current_Electron_c += generation_Rate_c-recombination_Rate_c; 
      current_Hole_c += generation_Rate_c-recombination_Rate_c;
      recombination_Rate_c = current_Electron_c*0.01;
      } else {
        generation_Rate_c =0;
        current_Electron_c =0;
        current_Hole_c =0;
        recombination_Rate_c =0;
      }


    s_x = windowWidth/scale_x;
    s_y = windowHeight/scale_y;

    // electronHoleGraph_generation();
    // temp = slider_temperature_s1.value();
  
  //temp draw

    // fill(235, 177, 52);
    // fill(255)
    // rect((70+110)*s_x, 640*s_y, 10*s_x,105*s_y, 30*s_x);
    // ellipse((70+115)*s_x, (640+105)*s_y,30*s_x)
    // // line(110,640,160,640)

    // fill(235, 58, 52)
    // ellipse((70+115)*s_x, (640+105)*s_y,20*s_y)
    // rect((70+112.5)*s_x, (640+10+(-0.7*((320-260)/300*temp+260)+245))*s_y, 5*s_x, (105-(-0.7*((320-260)/300*temp+260)+245))*s_y, 30*s_x);

    // // console.log("ssss")
    // fill(255)
    // textSize(18);
  
    // text(temp+"K",(70+140)*s_x,(640+115)*s_y)



      // g_rate = 0.000112099*generation_Rate_c+0.999998791


      g_rate = 0.00000112099*generation_Rate_c+0.999998791


      
    

   
    var target = createVector(300, 300);
    

    // for (let i = 0; i < whiteArray.length; i++) {
    //   if (whiteArray[i].dead == 1){
    //     console.log("sss")
    //       whiteArray.splice(i, 1);
    //     //  blackArray.splice(blackArray[k], 1);
    //     break

    //   }
    // }


    for (let i = 0; i < whiteArray.length; i++) {
      // if (whiteArray[i].dead == 1){
      //   console.log("sss")
      //     whiteArray.splice(whiteArray[i], 1);
      //   //  blackArray.splice(blackArray[k], 1);
      //   break

      // }

      if (whiteArray[i].dead == 0){
      whiteArray[i].display();
      whiteArray[i].appear_update();
      whiteArray[i].update();

      
   
      if (whiteArray[i].appear>255) {
        whiteArray[i].random_walk();
      }
    } 


   

     
    }
    

    for (let i = whiteArray.length - 1; i >= 0; i--) {
      if (whiteArray[i].show ==0) {
        // if (whiteArray[i].x > 940*s_x && (whiteArray[i].direction.x ==10)) {
        whiteArray.splice(i, 1);
        // console.log("haha")
      }
    }
  
    for (let i = whiteArray_e.length - 1; i >= 0; i--) {
      if (whiteArray_e[i].show ==0) {
      // if (whiteArray_e[i].x > 940*s_x && whiteArray_e[i].direction.x ==10) {
        whiteArray_e.splice(i, 1);
      }
    }

    for (let i = blackArray.length - 1; i >= 0; i--) {
      if (blackArray[i].show ==0) {
        // if (whiteArray[i].x > 940*s_x && (whiteArray[i].direction.x ==10)) {
          blackArray.splice(i, 1);
      }
    }
  
    for (let i = blackArray_h.length - 1; i >= 0; i--) {
      if (blackArray_h[i].show ==0) {
      // if (whiteArray_e[i].x > 940*s_x && whiteArray_e[i].direction.x ==10) {
        blackArray_h.splice(i, 1);
      }
    }
  


    for (let i = 0; i < blackArray.length; i++) {
      // whiteArray[i].display();
      // whiteArray[i].appear_update();
      // whiteArray[i].update();

      if (blackArray[i].dead == 0){
      blackArray[i].display();
      blackArray[i].appear_update();
      blackArray[i].update();

      // if (whiteArray[i].appear>255) {
      //   whiteArray[i].random_walk();
      // }
      if (blackArray[i].appear>255) {
        blackArray[i].random_walk();
      }
    }

    // if (blackArray[i].show == 0){
    //   blackArray.splice(blackArray[i], 1);
    //   console.log("s")
    //   // break
    // }

    

     
    }

    for (let i = 0; i < blackArray_h.length; i++) {
      // whiteArray[i].display();
      // whiteArray[i].appear_update();
      // whiteArray[i].update();

      
      blackArray_h[i].display();
      blackArray_h[i].appear_update();
      blackArray_h[i].update();

      // if (whiteArray[i].appear>255) {
      //   whiteArray[i].random_walk();
      // }
      if (blackArray_h[i].appear>255) {
        blackArray_h[i].straight_walk()
        if (blackArray_h[i].position.y > 49*s_y) {
        blackArray_h[i].random_walk();
        }
      }
    

     
    }


    for (let i = 0; i < whiteArray_e.length; i++) {
      // whiteArray[i].display();
      // whiteArray[i].appear_update();
      // whiteArray[i].update();

      
      whiteArray_e[i].display();
      whiteArray_e[i].appear_update();
      whiteArray_e[i].update();

      // if (whiteArray[i].appear>255) {
      //   whiteArray[i].random_walk();
      // }
      if (whiteArray_e[i].appear>255) {
        whiteArray_e[i].straight_walk()
        if (whiteArray_e[i].position.y > 49*s_y) {
          whiteArray_e[i].random_walk();
        }
      }
    

     
    }



    for (let i = 0 ; i<disappearArray.length; i++) {
      if (typeof disappearArray[i] != "undefined") {
      if (disappearArray[i].alpha<1) {
        disappearArray.splice(i, 1);
      }
    }
  }

    for (let i = 0 ; i<disappearArray_2_pair.length; i++) {
      if (typeof disappearArray_2_pair[i] != "undefined") {
      if (disappearArray_2_pair[i].disappear<1) {
        disappearArray_2_pair.splice(i, 1);
      }
    }
    }




    for (let i = 0 ; i<appearArray.length; i++) {
      if (appearArray[i].alpha<1) {
        appearArray.splice(i, 1);
      }
    }

    for (let i = 0 ; i<disappearArray_2.length; i++) {
      if (typeof disappearArray_2[i] != "undefined") {
      if (disappearArray_2[i].disappear<1) {
        disappearArray_2.splice(i, 1);
      }
    }
  }

    for (let i = 0 ; i<disappearArray_2_pair.length; i++) {
      if (typeof disappearArray_2_pair[i] != "undefined") {
      if (disappearArray_2_pair[i].disappear<1) {
        disappearArray_2_pair.splice(i, 1);
  
      } else {
        continue
      }
    }
    }

    for (let i = 0; i < appearArray.length; i++) {
      appearArray[i].display();
      appearArray[i].update();

     
    }

    for (let i = 0; i < appearArray_s1.length; i++) {
      appearArray_s1[i].display();
      appearArray_s1[i].update();
     
    }
    for (let i = 0; i < disappearArray.length; i++) {
      if (typeof disappearArray[i] != "undefined") {
      disappearArray[i].display();
      disappearArray[i].update();
      }
    }


    for (let i = 0; i < disappearArray_dot.length; i++) {
      if (typeof disappearArray[i] != "undefined") {
      disappearArray_dot[i].display();
      // disappearArray_dot[i].update();
      }
    }


    
    // new  double circle
    for (let i = 0; i < disappearArray_2.length; i++) {
      if (typeof disappearArray_2[i] != "undefined") {
      disappearArray_2[i].display();
      disappearArray_2[i].update_circle();
      disappearArray_2[i].update_location();
      // disappearArray_2[i].seek(middle_position_Array[i]);
      
      }
    }

    for (let i = 0; i < disappearArray_2_pair.length; i++) {
      if (typeof disappearArray_2_pair[i] != "undefined") {

    disappearArray_2_pair[i].display();
    disappearArray_2_pair[i].update_circle();
    disappearArray_2_pair[i].update_location();
    // disappearArray_2_pair[i].seek(middle_position_Array[i]);
   
      }
    }

    for (let i = 0; i < disappearArray_2_pair.length; i++) {
      if (typeof disappearArray_2_pair[i] != "undefined") {
        for (let k = 0; k < disappearArray_2.length; k++) {
          if (typeof disappearArray_2[k] != "undefined") {
           if (disappearArray_2_pair[i].id == disappearArray_2[k].id) {
            disappearArray_2[k].seek(p5.Vector.div(p5.Vector.add(disappearArray_2[k].position, disappearArray_2_pair[i].position),2));
            disappearArray_2_pair[i].seek(p5.Vector.div(p5.Vector.add(disappearArray_2[k].position, disappearArray_2_pair[i].position),2));

           }
          
          
          
          }}}}






if (recombine == 0) {

  

//disappear
      for (let i = 0; i < whiteArray.length; i++) {
      for (let k = 0; k< blackArray.length; k++) {
        if (abs(whiteArray[i].position.x-blackArray[k].position.x)<distance_dis
       && abs(whiteArray[i].position.y-blackArray[k].position.y)<distance_dis && (whiteArray[i].id != blackArray[k].id) 
       && (whiteArray[i].show ==1) && (blackArray[k].show ==1) && (whiteArray[i].position.x>(190*s_x))) {

        //15 
        
        //mark
         whiteArray[i].stop();
         blackArray[k].stop();
         whiteArray[i].noShow();
         blackArray[k].noShow();
         whiteArray[i].deadd();
         blackArray[k].deadd();


        middle_position_Array[disappear_count] = p5.Vector.div(p5.Vector.add(blackArray[k].position, whiteArray[i].position),2);
        //original dots
        // whiteArray[i].seek(middle_position_Array[disappear_count]);
        // blackArray[k].seek(middle_position_Array[disappear_count]);

//effects
 
         disappearArray[disappear_count] =(new Appear( middle_position_Array[disappear_count].x,  middle_position_Array[disappear_count].y,10,1, disappear_count))
         disappearArray_2[disappear_count] =(new Appear(whiteArray[i].position.x, whiteArray[i].position.y,10,2, disappear_count))
         disappearArray_2_pair[disappear_count] =(new Appear(blackArray[k].position.x, blackArray[k].position.y,10,3, disappear_count))

        disappear_count++

        let b = whiteArray[i].position.y;
       
        var vehicle = new Vehicle((170)*s_x, b, 10, "h", 1)
        vehicle.botz = blackArray[k].botz
        blackArray.push(vehicle);
  
        blackID_h.push(global_id);
        global_id += 1;

        var vehicle2 = new Vehicle((930)*s_x, b, 10, "e", 0)
        vehicle2.botz = whiteArray[i].botz
        whiteArray.push(vehicle2);

        // whiteArray_e.push(new Vehicle((930)*s_x, b, 10, "e", 0));
        // whiteID_e.push(global_id);
        global_id += 1;

         whiteArray.splice(i, 1);
         blackArray.splice(k, 1);


        

         break       


       }
   }

    }


    //disappear white & black new h 
    for (let i = 0; i < whiteArray.length; i++) {
      for (let k = 0; k< blackArray_h.length; k++) {
        if (abs(whiteArray[i].position.x-blackArray_h[k].position.x)<distance_dis
       && abs(whiteArray[i].position.y-blackArray_h[k].position.y)<distance_dis && (whiteArray[i].id != blackArray_h[k].id) 
       && (whiteArray[i].show ==1) && (blackArray_h[k].show ==1)) {

        
        //mark
         whiteArray[i].stop();
         blackArray_h[k].stop();
         whiteArray[i].noShow();
         blackArray_h[k].noShow();
         whiteArray[i].deadd();
         blackArray_h[k].deadd();
          // whiteArray[i].update();
          // blackArray[k].update();


        middle_position_Array[disappear_count] = p5.Vector.div(p5.Vector.add(blackArray_h[k].position, whiteArray[i].position),2);
        //original dots
        // whiteArray[i].seek(middle_position_Array[disappear_count]);
        // blackArray[k].seek(middle_position_Array[disappear_count]);

     

//effects
 
         disappearArray[disappear_count] =(new Appear( middle_position_Array[disappear_count].x,  middle_position_Array[disappear_count].y,10,1, disappear_count))
         disappearArray_2[disappear_count] =(new Appear(whiteArray[i].position.x, whiteArray[i].position.y,10,2, disappear_count))
         disappearArray_2_pair[disappear_count] =(new Appear(blackArray_h[k].position.x, blackArray_h[k].position.y,10,3, disappear_count))

        disappear_count++

        
        let b = whiteArray[i].position.y;
       
        var vehicle = new Vehicle((170)*s_x, b, 10, "h", 1)
        vehicle.botz = blackArray_h[k].botz
        blackArray_h.push(vehicle);
  
        blackID_h.push(global_id);
        global_id += 1;

        var vehicle2 = new Vehicle((930)*s_x, b, 10, "e", 0)
        vehicle2.botz = whiteArray[i].botz
        whiteArray.push(vehicle2);

        // whiteArray_e.push(new Vehicle((930)*s_x, b, 10, "e", 0));
        // whiteID_e.push(global_id);
        global_id += 1;

          whiteArray.splice(i, 1);
         blackArray_h.splice(k, 1);
         break
     
       }
   }
 
    }


         //disappear new white e & black 
         for (let i = 0; i < whiteArray_e.length; i++) {
          for (let k = 0; k< blackArray.length; k++) {
            if (abs(whiteArray_e[i].position.x-blackArray[k].position.x)<distance_dis
           && abs(whiteArray_e[i].position.y-blackArray[k].position.y)<distance_dis && (whiteArray_e[i].id != blackArray[k].id) 
           && (whiteArray_e[i].show ==1) && (blackArray[k].show ==1)) {
    
            
            //mark
             whiteArray_e[i].stop();
             blackArray[k].stop();
             whiteArray_e[i].noShow();
             blackArray[k].noShow();
              // whiteArray[i].update();
              // blackArray[k].update();
    
    
            middle_position_Array[disappear_count] = p5.Vector.div(p5.Vector.add(blackArray[k].position, whiteArray_e[i].position),2);
            //original dots
            // whiteArray[i].seek(middle_position_Array[disappear_count]);
            // blackArray[k].seek(middle_position_Array[disappear_count]);
  
         
  
  //effects
     
             disappearArray[disappear_count] =(new Appear( middle_position_Array[disappear_count].x,  middle_position_Array[disappear_count].y,10,1, disappear_count))
             disappearArray_2[disappear_count] =(new Appear(whiteArray_e[i].position.x, whiteArray_e[i].position.y,10,2, disappear_count))
             disappearArray_2_pair[disappear_count] =(new Appear(blackArray[k].position.x, blackArray[k].position.y,10,3, disappear_count))
  
            disappear_count++
           

            let b = whiteArray_e[i].position.y;
       
            var vehicle = new Vehicle((170)*s_x, b, 10, "h", 1)
            vehicle.botz = blackArray[k].botz
            blackArray.push(vehicle);
      
            blackID_h.push(global_id);
            global_id += 1;
    
            var vehicle2 = new Vehicle((930)*s_x, b, 10, "e", 0)
            vehicle2.botz = whiteArray_e[i].botz
            whiteArray_e.push(vehicle2);
    
            // whiteArray_e.push(new Vehicle((930)*s_x, b, 10, "e", 0));
            // whiteID_e.push(global_id);
            global_id += 1;

              whiteArray_e.splice(i, 1);
             blackArray.splice(k, 1);

             break
         
           }
       }
    
        }


        //disappear new white e & new black h
        for (let i = 0; i < whiteArray_e.length; i++) {
          for (let k = 0; k< blackArray_h.length; k++) {
            if (abs(whiteArray_e[i].position.x-blackArray_h[k].position.x)<distance_dis 
           && abs(whiteArray_e[i].position.y-blackArray_h[k].position.y)<distance_dis && (whiteArray_e[i].id != blackArray_h[k].id) 
           && (whiteArray_e[i].show ==1) && (blackArray_h[k].show ==1)) {
    
            
            //mark
             whiteArray_e[i].stop();
             blackArray_h[k].stop();
             whiteArray_e[i].noShow();
             blackArray_h[k].noShow();
              // whiteArray[i].update();
              // blackArray[k].update();
    
    
            middle_position_Array[disappear_count] = p5.Vector.div(p5.Vector.add(blackArray_h[k].position, whiteArray_e[i].position),2);
            //original dots
            // whiteArray[i].seek(middle_position_Array[disappear_count]);
            // blackArray[k].seek(middle_position_Array[disappear_count]);
  
         
  
  //effects
     
             disappearArray[disappear_count] =(new Appear( middle_position_Array[disappear_count].x,  middle_position_Array[disappear_count].y,10,1, disappear_count))
             disappearArray_2[disappear_count] =(new Appear(whiteArray_e[i].position.x, whiteArray_e[i].position.y,10,2, disappear_count))
             disappearArray_2_pair[disappear_count] =(new Appear(blackArray_h[k].position.x, blackArray_h[k].position.y,10,3, disappear_count))
  
            disappear_count++
           

        

        let b = whiteArray_e[i].position.y;
       
        var vehicle = new Vehicle((170)*s_x, b, 10, "h", 1)
        vehicle.botz = blackArray_h[k].botz
        blackArray_h.push(vehicle);
  
        blackID_h.push(global_id);
        global_id += 1;

        var vehicle2 = new Vehicle((930)*s_x, b, 10, "e", 0)
        vehicle2.botz = whiteArray_e[i].botz
        whiteArray_e.push(vehicle2);

        // whiteArray_e.push(new Vehicle((930)*s_x, b, 10, "e", 0));
        // whiteID_e.push(global_id);
        global_id += 1;

          whiteArray.splice(i, 1);
             blackArray.splice(k, 1);

             break
         
           }
       }
    
        }

      } else {
        
      }

    

    // temp = slider_temperature.value();


    // stroke(125, 241, 148,100);
    // strokeWeight(1);
    // // fill(25,25,25,100)
    // // rect((970-350+20)*s_x,(790-200+80)*s_y,(330-20)*s_x,(190-80)*s_y);

    // noFill();
    // rect((10+100+70+change_square)*s_x,(10+385)*s_y,(940-change_length-70)*s_x,(770/2)*s_y);

    // fill(30)
    // //one
    // rect((10+100+70+change_square)*s_x,(10)*s_y,(940-change_length-70)*s_x,(770/4)*s_y);

    // //two
    // rect((10+100+70+change_square)*s_x,(10+385/2)*s_y,(940-change_length-70)*s_x,(770/4)*s_y);

    // // line((10+100+70+change_square + (940-change_length-70)/2)*s_x,(10+385/2)*s_y, (10+100+70+change_square + (940-change_length-70)/2)*s_x, (10+385/2+770/4)*s_y)

    // noFill();

    //plot graph///////////////
    ///up graph x:190-(950-(950-190)/point_count y:down171.25-40up
 
noFill();


    //coordinates
      //up
      stroke(102, 194, 255,180);

//       //horizon
// line((10+100+70+change_square+940-change_length-70-760-20)*s_x,171.25*s_y,(10+100+70+change_square+790)*s_x,171.25*s_y)


//       //vertical
// line((10+100+70+change_square+940-change_length-70-760-20)*s_x,40*s_y, (10+100+70+change_square+940-change_length-70-760-20)*s_x, 171.25*s_y)


// //arrow up right 
// line((10+100+70+change_square+940-change_length-70-20+4)*s_x,(171.25+3)*s_y,(10+100+70+change_square+790)*s_x,(171.25)*s_y)
// line((10+100+70+change_square+940-change_length-70-20+4)*s_x,(171.25-3)*s_y,(10+100+70+change_square+790)*s_x,(171.25)*s_y)
// //arrow up up
// line((10+100+70+change_square+940-change_length-70-760-20-3)*s_x,46*s_y, (10+100+70+change_square+940-change_length-70-760-20)*s_x, (40)*s_y)
// line((10+100+70+change_square+940-change_length-70-760-20+3)*s_x,46*s_y, (10+100+70+change_square+940-change_length-70-760-20)*s_x, (40)*s_y)


//   //down
//       //horizon
//       line((10+100+70+change_square+940-change_length-70-760-20)*s_x,(10+385/2+96.25+70)*s_y,(10+100+70+change_square+790)*s_x,(10+385/2+96.25+70)*s_y)
//       //vertical
// line((10+100+70+change_square+940-change_length-70-760-20)*s_x,(10+385/2+96.25-70)*s_y, (10+100+70+change_square+940-change_length-70-760-20)*s_x, (10+385/2+96.25+70)*s_y)

// //arrow up 
// line((10+100+70+change_square+940-change_length-70-20+4)*s_x,(10+385/2+96.25+3+70)*s_y,(10+100+70+change_square+790)*s_x,(10+385/2+96.25+70)*s_y)
// line((10+100+70+change_square+940-change_length-70-20+4)*s_x,(10+385/2+96.25-3+70)*s_y,(10+100+70+change_square+790)*s_x,(10+385/2+96.25+70)*s_y)
// //arrow down up
// line((10+100+70+change_square+940-change_length-70-760-20)*s_x,(10+385/2+96.25-70)*s_y, (10+100+70+change_square+940-change_length-70-760-20-3)*s_x, (10+385/2+96.25-60-5)*s_y)
// line((10+100+70+change_square+940-change_length-70-760-20)*s_x,(10+385/2+96.25-70)*s_y, (10+100+70+change_square+940-change_length-70-760-20+3)*s_x, (10+385/2+96.25-60-5)*s_y)

// ////////////new
//   //horizon down 1
//   line((10+100+70+change_square+940-change_length-70-760+30)*s_x,(10+385/2+96.25)*s_y,(10+100+70+change_square+790-450)*s_x,(10+385/2+96.25)*s_y)
//   //vertical down 1
// line((10+100+70+change_square + (940-change_length-70)/4)*s_x,(10+385/2+30)*s_y, (10+100+70+change_square + (940-change_length-70)/4)*s_x, (10+385/2+770/4-30)*s_y)

//  //horizon down 2
//  line((10+100+70+change_square+940-change_length-70-760+30+400)*s_x,(10+385/2+96.25)*s_y,(10+100+70+change_square+790-450+400)*s_x,(10+385/2+96.25)*s_y)
//  //vertical down 2
// line((10+100+70+change_square + (940-change_length-70)/4*3)*s_x,(10+385/2+30)*s_y, (10+100+70+change_square + (940-change_length-70)/4*3)*s_x, (10+385/2+770/4-30)*s_y)


// ////////////new
  //horizon down 1
  line((10+100+70+change_square+940-change_length-70-760+30)*s_x,(10+385/2+96.25)*s_y,(10+100+70+change_square+790-30)*s_x,(10+385/2+96.25)*s_y)
  //vertical down 1
line((10+100+70+change_square + (940-change_length-70)/2)*s_x,(10+385/2+30)*s_y, (10+100+70+change_square + (940-change_length-70)/2)*s_x, (10+385/2+770/4-30)*s_y)


for (let i = 0; i < x_num_count; i++) {
  let x = 550 * s_x + ((400 / 8 ) * s_x * i + ((400 / 8 ) * s_x));
  let y = (10 + 385 / 2 + 96.25) * s_y;
  line(x, y, x, y - 5 * s_y); // Draw the line
}

for (let i = 0; i < x_num_count; i++) {
  let x = 550 * s_x - ((400 / 8 ) * s_x * i)- ((400 / 8 ) * s_x);
  let y = (10 + 385 / 2 + 96.25) * s_y;
  line(x, y, x, y - 5 * s_y); // Draw the line
}

if (isOn ==false) {
  for (let i = 0; i < 4; i++) {
    let x = 550 * s_x;
    let y = (10+385/2+96.25)*s_y+ 12.5 * s_y  + 12.5 * s_y  * i;
    line(x, y, x + 5 * s_x, y); // Draw the line
  }
  
  for (let i = 0; i < 4; i++) {
    let x = 550 * s_x;
    let y = (10+385/2+96.25)*s_y- 12.5 * s_y  - 12.5 * s_y  * i;
    line(x, y, x + 5 * s_x, y); // Draw the line
  }

  noStroke()
fill(102, 194, 255,180);
textSize(10*s_x)
text("20 μC/cm\u00B3",560*s_x,252*s_y);
text("-20 μC/cm\u00B3",560*s_x,351*s_y);



} else {

  for (let i = 0; i < 4; i++) {
    let x = 550 * s_x;
    let y = (10+385/2+96.25)*s_y+ 40/1530*500 * s_y + 40/1530*500 * s_y  * i;
    line(x, y, x + 5 * s_x, y); // Draw the line
  }
  
  for (let i = 0; i < 4; i++) {
    let x = 550 * s_x;
    let y = (10+385/2+96.25)*s_y- 40/1530*500 * s_y - 40/1530*500 * s_y  * i;
    line(x, y, x + 5 * s_x, y); // Draw the line
  }

  noStroke()
fill(102, 194, 255,180);
textSize(10*s_x)
text("2000 V/cm",560*s_x,249*s_y);
text("-2000 V/cm",560*s_x,353*s_y);




}



noStroke()
fill(102, 194, 255,180);
textSize(10*s_x)
text("5 \u00B5m",790*s_x,313*s_y);
text("-5 \u00B5m",290*s_x,313*s_y);




///////////new box graphing

noStroke()
fill(254,246,182,100)

// rect_density = 1.6*Math.pow(10,-13)*hole_add_new

//hole_add = 127- 133

rect_density = Math.pow(10,-13)*hole_add_new
      let rect_density_new = Math.pow(10,-13)*hole_add_new
if (isOn ==false) {
// //right up 
// rect((550)*s_x,(10+385/2+96.25)*s_y,((400)/8*count_pn_num)*s_x, -rect_density*4*s_y)
// //left down
// rect((550)*s_x,(10+385/2+96.25)*s_y,-((400)/8*count_pn_num)*s_x, rect_density*4*s_y)



///left
beginShape();
vertex(550*s_x, (10+385/2+96.25) * s_y)
// Add all points as curve vertices
let left_set = []

for (let i = 0; i < Math.floor(count_pn_num*100); i++) {
let x = (550)*s_x-((400)/8*i/100)*s_x;
let y = (10+385/2+96.25)*s_y+rect_density_new*4*s_y*(1-Math.exp(-Math.pow((count_pn_num-i/100),2)/0.026))
vertex(x, y);
}

vertex(550 * s_x-((400)/8*count_pn_num)*s_x, (10+385/2+96.25) * s_y)
endShape();


///right
beginShape();

vertex(550*s_x, (10+385/2+96.25) * s_y)


// Add all points as curve vertices
for (let i = 0; i < Math.floor(count_pn_num*100); i++) {
  let x = (550)*s_x+((400)/8*i/100)*s_x;
  let y = (10+385/2+96.25)*s_y-rect_density_new*4*s_y*(1-Math.exp(-Math.pow((count_pn_num-i/100),2)/0.026))
  vertex(x, y);
  }

vertex(550 * s_x+((400)/8*count_pn_num)*s_x, (10+385/2+96.25) * s_y)

endShape();
}

noFill()

fill(218,112,214,100)


//E- field 
if (isOn==true){
  triangle((550-(400)/8*count_pn_num)*s_x, (10+385/2+96.25)*s_y, (550+(400)/8*count_pn_num)*s_x, (10+385/2+96.25)*s_y, (550)*s_x, (10+385/2+96.25+  2*rect_density/(X_n*100)*count_n*2)*s_y)

}


/////graph on off switch
if(isOn){
  fill("white");
}
else{
  fill(102, 194, 255,100);
}

noStroke();
rect(879*s_x,368*s_y,50*s_x,16*s_y,5*s_y, 5*s_y)
  
textSize(12*s_x);
if(isOn){
  fill("black");
  text("SWITCH",880*s_x,380*s_y);
}
else{
  fill("white");
  text("SWITCH",880*s_x,380*s_y);
}


let V_built = 0.052*Math.log(hole_add_new/Math.pow(10,10))
// console.log(V_built)
X_n = 5811*Math.pow(Math.log(hole_add_new/Math.pow(10,10))/(Math.pow(10,6)*hole_add_new),1/2)*Math.pow(10,6)

// X_n = Math.log(hole_add_new/Math.pow(10,10))
// let array_band = []
for (var i = 0; i<50; i++) {

  ///box length 300-800
  stroke(125, 241, 148,100);
  noFill()
  // rect((150+(800)/50*i)*s_x,(10)*s_y,(800)/50*(i)*s_x,(770/4)*s_y);

  // array_band[i] = -7.76*Math.pow(10,-16)*hole_add_new*Math.pow((X_n*100+(150+(800)/50*i-550)*s_x),2)/100
  // array_band[i] = -Math.pow((count_n/(X_n*100)),2)*V_built*100+(7.76*Math.pow(10,-16)*hole_add_new*Math.pow((X_n*100-(150+(800)/50*i-550)*s_x),2)/100)
// array_band[i] = -Math.pow((count_n/(X_n*100)),2)*V_built*100+(7.76*Math.pow(10,-16)*hole_add_new*Math.pow((X_n*100-(150+(800)/20*i-550)*s_x),2)/100)
  // if ((150+(800)/50*i)*s_x <((550-(400)/8*count_pn_num))*s_x ){
  //   array_band[i] = 0

  // } 
  // if ( ((550-(400)/8*count_pn_num))*s_x <= (150+(800)/50*i)*s_x && ((150+(800)/50*i)*s_x <(550)*s_x) ){
  //   //array_band[i] = -7.76*Math.pow(10,-16)*hole_add*Math.pow((145+(150+(800)/50*i-550)*s_x),2)*Math.pow(10,-2)
  //   array_band[i] = -7.76*Math.pow(10,-16)*hole_add_new*Math.pow((X_n*100/2+(150+(800)/50*i-550)*s_x),2)/100

  //   //array_band[i] = -7.76*Math.pow(10,-16)*hole_add*Math.pow((145+x),2)
  // }
  //  if ( (550)*s_x <= (150+(800)/50*i)*s_x && (  (150+(800)/50*i)*s_x <((550+(400)/8*count_pn_num))*s_x )){
  
  //   array_band[i] = -Math.pow((count_n/(X_n*100)),2)*V_built*100+(7.76*Math.pow(10,-16)*hole_add_new*Math.pow((X_n*100/2-(150+(800)/50*i-550)*s_x),2)/100)
 
  // } 
  //  if ( ((550+(400)/8*count_pn_num))*s_x <= (150+(800)/50*i)*s_x  ){
  //   array_band[i] = -Math.pow((count_n/(X_n*100)),2)*V_built*100
  // }


}



for (var i = 0; i<100; i++) {

  //(800)/100*i
  if ((800)/100*i>(550-(400)/8*count_pn_num) && (800)/100*i<(550)){
    array_band1[i-19]= -Math.pow(((800)/100*i-(550-(400)/8*count_pn_num))/((400)/8*count_pn_num)*(2*rect_density/(X_n*100)*count_n*1.1) ,1)/5/3
  }  else if (i==50) {
    // array_band1[50]= Math.pow((2*rect_density/(X_n*100)*count_n*2),2)/20
  } else {
    array_band1[i]= 0
  } 

}

for (var i = 0; i<100; i++) {
  

  // array_band1[i]=  -0.6;

  if (i>50) {
    array_band1[i]=  array_band1[100-i]
  } else if (i=50){
    array_band1[i]=  -Math.pow((2*rect_density/(X_n*100)*count_n*1.1) ,1)/5/3
  }
//  triangle((550-(400)/8*count_pn_num)*s_x, (10+385/2+96.25)*s_y, (550+(400)/8*count_pn_num)*s_x, (10+385/2+96.25)*s_y, (550)*s_x, (10+385/2+96.25+  2*rect_density/(X_n*100)*count_n*2)*s_y)

}

for (var i = 0; i<100; i++) {
  array_band2[i] = 0; // initialize to 0

  if (i > 0) { // run the inner loop only if i > 0
    for (var k = 0; k<i; k++) {
      array_band2[i] = array_band2[i] + array_band1[k];
    }
  }
}



// for (var i = 0; i<100; i++) {
//   array_band2[i] *=3


// }




// for (var i = 0; i<50; i++) {
//   array_band2[i] = -7.76*Math.pow(10,-16)*hole_add_new*Math.pow((X_n*100/2+(150+(800)/50*i-550)*s_x),2)/100
// //curve down
// }

// for (var i = 0; i<50; i++) {
//   array_band3[i] = -Math.pow((count_n/(X_n*100)),2)*V_built*100+(7.76*Math.pow(10,-16)*hole_add_new*Math.pow((X_n*100/2-(150+(800)/50*i-550)*s_x),2)/100)
// //green curve up
// }


for (var i = 0; i<100; i++) {
  array_band3[i] = array_band2[i]


}

// for (var i = 0; i<50; i++) {
//   array_band4[i] = -Math.pow((count_n/(X_n*100)),2)*V_built*100

//   //purple
// }

/////////new dot on graph 
// for (var k = 0; k < whiteArray.length; k++) {

// whiteArray_dot

// }



  //////band graph
  stroke(254,246,182)
  

strokeWeight(1.5)
beginShape();

  for (var k = 0; k < 50; k++) {
    // if (i!=(point_count-1)||i!=(0)) {
      // curveVertex((150+(800)/20*k)*s_x,(171.25-50+array_band[k]*e_field_c/10)*s_y)
      curveVertex((150+(800)/50*k)*s_x,(171.25-array_band[k])*s_y)

  }
 


endShape();
noStroke()
///
stroke(254,246,182)
// beginShape();

//   for (var k = 0; k < 100; k++) {
 
//       curveVertex((150+(800)/100*k)*s_x,(171.25-array_band1[k])*s_y)

//   }
// endShape();
// noStroke()
// ///
// stroke(300,246,182)
for (var k = 0; k < 100; k++) {
  //yellow curve
       line_yellow[k] = [(150+(800)/100*k)*s_x,(171.25-array_band2[k]-100)*s_y]
 
   }

   for (var k = 0; k < 100; k++) {
    //yellow curve
         line_green[k] = [(150+(800)/100*k)*s_x,(+0+171.25-array_band3[k]-30)*s_y]
   
         //  let a = -(e_field_c)/(550*s_x-((550-(400)/8*count_pn_num)*s_x))*this.position.x+(((550-(400)/8*count_pn_num))*s_x*e_field_c)/((550*s_x-((550-(400)/8*count_pn_num)*s_x)))

     }



beginShape();

  for (var k = 0; k < 100; k++) {
 //yellow curve
      curveVertex((150+(800)/100*k)*s_x,(171.25-array_band2[k]-100)*s_y)

      line_yellow_data[k] = { x: (150+(800)/100*k)*s_x, y: (171.25-array_band2[k]-100)*s_y};
      // console.log(line_yellow_data[k].y)

  }
endShape();



noStroke()
///
stroke(125, 241, 148)
beginShape();

  for (var k = 0; k < 100; k++) {
    //green curve
 
      curveVertex((150+(800)/100*k)*s_x,(-30+171.25-array_band3[k]-30)*s_y)
      line_green_data[k] = { x: (150+(800)/100*k)*s_x, y: (171.25-array_band3[k]-30-30)*s_y};

      // ellipse((150+(800)/100*k)*s_x, (171.25-array_band3[k]-30-30)*s_y, 3, 3);

  }
endShape();
noStroke()
///
stroke(200,146,182)
beginShape();

  for (var k = 0; k < 50; k++) {
 
      curveVertex((150+(800)/50*k)*s_x,(171.25-array_band4[k])*s_y)

  }
endShape();
noStroke()


// for (let i = 0; i < line_green_data.length; i++) {
//   let x = line_green_data[i][0];
//   let y = line_green_data[i][1];
//   ellipse(x, y, 3, 3); // Draws an ellipse at (x, y) with a width and height of 3
// }

//   }




//box

// if ((this.position.x > 235.6*s_x) && (this.position.x < (170+524.4)*s_x))

///red box 
///middle 550
//150 

    stroke(255, 58, 23,210);
    context_1.beginPath();
        context_1.setLineDash([10,10]);
        context_1.rect((550-(400)/8*X_n)*s_x,(10+385)*s_y,((400)/8*X_n*2)*s_x,(770/2)*s_y);
        context_1.closePath();
    context_1.stroke();
    context_1.setLineDash([]);

  
    // noFill();
    // rect((10+100+70+change_square)*s_x,(10)*s_y,(940-change_length-70-760)*s_x,(770)*s_y);

    stroke(125, 241, 148,100);

    textSize(17)
    noStroke()
    strokeWeight(1)
    fill(255);
   ///////////////////

   fill(102, 194, 255,180)

 
   textSize(14*s_x);
  
// text("Electron Concentration (/cm\u00B3)",(160)*s_x,(30)*s_y)
text("Band Diagram",(160)*s_x,(30)*s_y)
// text("Hole Concentration (/cm\u00B3)",(160)*s_x,(223)*s_y)
text("Charge Density",(160)*s_x,(223)*s_y)
text(" / ",(260)*s_x,(223)*s_y)
text("Electric Field",(273)*s_x,(223)*s_y)

if (isOn) {
  // stroke(250)
  // strokeWeight(1.5)
  // line((160+120)*s_x,(223+5)*s_y,(160+120+92)*s_x,(223+5)*s_y )


  fill(218,112,214,50)
  rect(271*s_x,210*s_y,85*s_x,18*s_y,5*s_y, 5*s_y)

  
} else {
  // stroke(250)
  // strokeWeight(1.5)
  // line((160)*s_x,(223+5)*s_y,(160+100+10)*s_x,(223+5)*s_y )

  fill(255,40);
  rect(158*s_x,210*s_y,100*s_x,18*s_y,5*s_y, 5*s_y)


}

// stroke(250)
//   strokeWeight(1.5)
noStroke()
  fill(102, 194, 255,180)

 
  textSize(14);

// text("Electric Field",(560)*s_x,(223)*s_y)

if (count_pn_num >=X_n) {
  text("Equilibrium",(760)*s_x,(223)*s_y)
}
// text("x",(930)*s_x,(190)*s_y)
// text("x",(930)*s_x,(318+70)*s_y)

textSize(12);


// text("Hole",(885)*s_x,(43)*s_y)
// text("Electron",(885)*s_x,(53)*s_y)
// text("0",(158)*s_x,(172)*s_y)
// text("0",(158)*s_x,(298+70)*s_y)

// text("10\u00B9\u2070",(155-3)*s_x,(172+12)*s_y)


// text("10\u00B9\u2070",(153-3)*s_x,(298+70+12)*s_y)

// text("10\u00B9\u2074",(153)*s_x,(298+70-120)*s_y)
 

stroke(125, 241, 148,100);


//    //green
//    stroke(125, 241, 148)
// line((10+100+70+change_square+940-change_length-70-760-20+750-60)*s_x,40*s_y,(10+100+70+change_square+790-60)*s_x,40*s_y)

// //yellow
// stroke(254,246,182)
// line((10+100+70+change_square+940-change_length-70-760-20+750-60)*s_x,50*s_y,(10+100+70+change_square+790-60)*s_x,50*s_y)

//real world graph 
if (real_graph ==1){


  // if (switch_1 ==0){
  noStroke()
  // fill(254,246,182,50)
  // } else if (switch_1 ==1) {
  //   noStroke()
    fill(125, 241, 148,50)
  // }

  // if (count_graph ==0){
    x_con =0
    for (let i = 0; i < array_graph_con.length; i++) {
      if (x_con<750){
        x_con+=array_graph_con[i].x
      } else {
        x_con=750
      }
      

    }


    triangle((170)*s_x, 171.25*s_y, (10+100+70+change_square+940-change_length-70-760-20)*s_x, (171.2-concentration*0.7)*s_y, (170+x_con)*s_x, 171.25*s_y)

    noStroke()
  fill(254,246,182,50)
  // } else if (switch_1 ==1) {
    // noStroke()
    // fill(125, 241, 148,50)
  // }

  // if (count_graph ==0){
    x_con =0
    for (let i = 0; i < array_graph_con.length; i++) {
      if (x_con<750){
        x_con+=array_graph_con[i].x
      } else {
        x_con=750
      }
      

    }


    triangle((170)*s_x, 171.25*s_y, (10+100+70+change_square+940-change_length-70-760-20)*s_x, (171.2-concentration*0.7)*s_y, (170+x_con)*s_x, 171.25*s_y)

  // }


  // if (switch_1==0){
    noStroke()
  fill(254,246,182,50)
//scale current 

// if (count_graph ==0){
    test_a = (5.33*Math.pow(10,5)*Math.pow(scattering_velocity,2)*scattering_count*concentration)/Math.pow(10,7)*test_current_scale //scale by 5
    rect(170*s_x,298.75*s_y,(x_con)*s_x,(test_a/x_con)*s_y)
// }
  // } else if (switch_1 ==1) {
    noStroke()
    fill(125, 241, 148,50)

    // if (count_graph==0){
    test_a = (5.33*Math.pow(10,5)*Math.pow(scattering_velocity,2)*scattering_count*concentration)/Math.pow(10,7)*test_current_scale
    rect(170*s_x,298.75*s_y,(x_con)*s_x,-(test_a/x_con)*s_y)
    // }
  // }
 


  // console.log(con_count)
  // if (count_graph ==0){
  for (let i = 0; i < array_graph_con.length; i++) {
    array_graph_con[i].update()
  }
// }

}





  } else if (sceneCount == 2) {

    // // Wait for 5 seconds using setTimeout
    //   setTimeout(function() {
    //       // Check if the elements in whiteArray meet the condition
    //       whiteArray.forEach(function(vehicle) {
    //           if (vehicle.top==1) {
    //               console.log("The condition is met.");
    //               vehicle.origin.x === 0 && vehicle.origin.y === 0
 
    //           }
    //       });
    //   }, 50000); // 5000ms = 5s


   

    // for (let i = 0; i<whiteArray.length; i++) {
    //   whiteArray[i].checkProperties();
    // }
   




    count_pn_num = X_n

    let ratio = (-V_applied_p/10+V_applied_n/10)/(1.6*Math.pow(10,-13)*hole_add_new)
    
    // console.log (ratio)

    count_pn_num = X_n*(1+ratio)

      stroke(125, 241, 148,100);
    strokeWeight(1);
    // fill(25,25,25,100)
    // rect((970-350+20)*s_x,(790-200+80)*s_y,(330-20)*s_x,(190-80)*s_y);

    noFill();
    rect((10+100+70+change_square)*s_x,(10+385)*s_y,(940-change_length-70)*s_x,(770/2)*s_y);

    fill(30)
    //one
    rect((10+100+70+change_square)*s_x,(10)*s_y,(940-change_length-70)*s_x,(770/4)*s_y);

    //two
    rect((10+100+70+change_square)*s_x,(10+385/2)*s_y,(940-change_length-70)*s_x,(770/4)*s_y);

    // line((10+100+70+change_square + (940-change_length-70)/2)*s_x,(10+385/2)*s_y, (10+100+70+change_square + (940-change_length-70)/2)*s_x, (10+385/2+770/4)*s_y)

    noFill();

/////////////////

    // x_probability = 100/(1+((y_cordi/100+constant_fermi)*constant_temperature/0.026/300)/100)
    x_probability = Math.round(100/(1+Math.exp((300*(y_cordi/500-constant_fermi)/(0.026*constant_temperature)))))

  


    x_probability_time=(x_probability)
   
    //tcb = 10 
    if (time_count_blink>x_probability_time){
       opacity_circle=0
       opacity_circle_up=0

    }else if (time_count_blink<=x_probability_time){

  
      if (x_probability_time<30){
        opacity_circle=1
      } else {
        opacity_circle=1
        opacity_circle_up=1
      }
      
    }


    // if (0.56<y_cordi/100 && 2>y_cordi/100){
    //   num_Line_text= Math.round(88*Math.pow(y_cordi/100-0.56,1/2))
    //   // opacity_circle=0
    //   // opacity_circle_up=1
    // } else if (y_cordi/100<-0.56 && -2<y_cordi/100){
    //   num_Line_text= Math.round(50*Math.pow(-0.56-y_cordi/100,1/2))
    //   // opacity_circle=1
    //   // opacity_circle_up=0
    //   //Math.round(50*Math.pow(-0.56+m/100,1/2))
    // } else if (-0.56<y_cordi/100 && y_cordi/100<0.56){
    //   num_Line_text=0
    //   opacity_circle=0
    //   opacity_circle_up=0
    // } 

    // d3bands_update()
    // d3bands_update_up()
    if (time_count ==0) {
      ni = (9.15*Math.pow(10,19))*Math.pow((temp/300),1.5)*Math.exp((-0.59/(0.026*temp/300)))
      generation_Rate_c = 0.01*ni;
      
  
      
      
      current_Electron_c += generation_Rate_c-recombination_Rate_c; 
      current_Hole_c += generation_Rate_c-recombination_Rate_c;
      recombination_Rate_c = current_Electron_c*0.01;
      } else {
        generation_Rate_c =0;
        current_Electron_c =0;
        current_Hole_c =0;
        recombination_Rate_c =0;
      }


    s_x = windowWidth/scale_x;
    s_y = windowHeight/scale_y;

    // electronHoleGraph_generation();
    // temp = slider_temperature_s1.value();
  
  //temp draw

    // fill(235, 177, 52);
    // fill(255)
    // rect((70+110)*s_x, 640*s_y, 10*s_x,105*s_y, 30*s_x);
    // ellipse((70+115)*s_x, (640+105)*s_y,30*s_x)
    // // line(110,640,160,640)

    // fill(235, 58, 52)
    // ellipse((70+115)*s_x, (640+105)*s_y,20*s_y)
    // rect((70+112.5)*s_x, (640+10+(-0.7*((320-260)/300*temp+260)+245))*s_y, 5*s_x, (105-(-0.7*((320-260)/300*temp+260)+245))*s_y, 30*s_x);

    // // console.log("ssss")
    // fill(255)
    // textSize(18);
  
    // text(temp+"K",(70+140)*s_x,(640+115)*s_y)



      // g_rate = 0.000112099*generation_Rate_c+0.999998791


      g_rate = 0.00000112099*generation_Rate_c+0.999998791


      
    

   
    var target = createVector(300, 300);
    

    // for (let i = 0; i < whiteArray.length; i++) {
    //   if (whiteArray[i].dead == 1){
    //     console.log("sss")
    //       whiteArray.splice(i, 1);
    //     //  blackArray.splice(blackArray[k], 1);
    //     break

    //   }
    // }


    for (let i = 0; i < whiteArray.length; i++) {
      // if (whiteArray[i].dead == 1){
      //   console.log("sss")
      //     whiteArray.splice(whiteArray[i], 1);
      //   //  blackArray.splice(blackArray[k], 1);
      //   break

      // }

      if (whiteArray[i].dead == 0){
      whiteArray[i].display();
      whiteArray[i].appear_update();
      whiteArray[i].update();

      
   
      if (whiteArray[i].appear>255) {
        whiteArray[i].random_walk();
      }
    } 


   

     
    }
    

    for (let i = whiteArray.length - 1; i >= 0; i--) {
      if (whiteArray[i].show ==0) {
        // if (whiteArray[i].x > 940*s_x && (whiteArray[i].direction.x ==10)) {
        whiteArray.splice(i, 1);
        // console.log("haha")
      }
    }
  
    for (let i = whiteArray_e.length - 1; i >= 0; i--) {
      if (whiteArray_e[i].show ==0) {
      // if (whiteArray_e[i].x > 940*s_x && whiteArray_e[i].direction.x ==10) {
        whiteArray_e.splice(i, 1);
      }
    }

    for (let i = blackArray.length - 1; i >= 0; i--) {
      if (blackArray[i].show ==0) {
        // if (whiteArray[i].x > 940*s_x && (whiteArray[i].direction.x ==10)) {
          blackArray.splice(i, 1);
      }
    }
  
    for (let i = blackArray_h.length - 1; i >= 0; i--) {
      if (blackArray_h[i].show ==0) {
      // if (whiteArray_e[i].x > 940*s_x && whiteArray_e[i].direction.x ==10) {
        blackArray_h.splice(i, 1);
      }
    }
  


    for (let i = 0; i < blackArray.length; i++) {
      // whiteArray[i].display();
      // whiteArray[i].appear_update();
      // whiteArray[i].update();

      if (blackArray[i].dead == 0){
      blackArray[i].display();
      blackArray[i].appear_update();
      blackArray[i].update();

      // if (whiteArray[i].appear>255) {
      //   whiteArray[i].random_walk();
      // }
      if (blackArray[i].appear>255) {
        blackArray[i].random_walk();
      }
    }

    // if (blackArray[i].show == 0){
    //   blackArray.splice(blackArray[i], 1);
    //   console.log("s")
    //   // break
    // }

    

     
    }

    for (let i = 0; i < blackArray_h.length; i++) {
      // whiteArray[i].display();
      // whiteArray[i].appear_update();
      // whiteArray[i].update();

      
      blackArray_h[i].display();
      blackArray_h[i].appear_update();
      blackArray_h[i].update();

      // if (whiteArray[i].appear>255) {
      //   whiteArray[i].random_walk();
      // }
      if (blackArray_h[i].appear>255) {
        blackArray_h[i].straight_walk()
        if (blackArray_h[i].position.y > 49*s_y) {
        blackArray_h[i].random_walk();
        }
      }
    

     
    }


    for (let i = 0; i < whiteArray_e.length; i++) {
      // whiteArray[i].display();
      // whiteArray[i].appear_update();
      // whiteArray[i].update();

      
      whiteArray_e[i].display();
      whiteArray_e[i].appear_update();
      whiteArray_e[i].update();

      // if (whiteArray[i].appear>255) {
      //   whiteArray[i].random_walk();
      // }
      if (whiteArray_e[i].appear>255) {
        whiteArray_e[i].straight_walk()
        if (whiteArray_e[i].position.y > 49*s_y) {
          whiteArray_e[i].random_walk();
        }
      }
    

     
    }



    for (let i = 0 ; i<disappearArray.length; i++) {
      if (typeof disappearArray[i] != "undefined") {
      if (disappearArray[i].alpha<1) {
        disappearArray.splice(i, 1);
      }
    }
  }

    for (let i = 0 ; i<disappearArray_2_pair.length; i++) {
      if (typeof disappearArray_2_pair[i] != "undefined") {
      if (disappearArray_2_pair[i].disappear<1) {
        disappearArray_2_pair.splice(i, 1);
      }
    }
    }




    for (let i = 0 ; i<appearArray.length; i++) {
      if (appearArray[i].alpha<1) {
        appearArray.splice(i, 1);
      }
    }

    for (let i = 0 ; i<disappearArray_2.length; i++) {
      if (typeof disappearArray_2[i] != "undefined") {
      if (disappearArray_2[i].disappear<1) {
        disappearArray_2.splice(i, 1);
      }
    }
  }

    for (let i = 0 ; i<disappearArray_2_pair.length; i++) {
      if (typeof disappearArray_2_pair[i] != "undefined") {
      if (disappearArray_2_pair[i].disappear<1) {
        disappearArray_2_pair.splice(i, 1);
  
      } else {
        continue
      }
    }
    }

    for (let i = 0; i < appearArray.length; i++) {
      appearArray[i].display();
      appearArray[i].update();

     
    }

    for (let i = 0; i < appearArray_s1.length; i++) {
      appearArray_s1[i].display();
      appearArray_s1[i].update();
     
    }
    for (let i = 0; i < disappearArray.length; i++) {
      if (typeof disappearArray[i] != "undefined") {
      disappearArray[i].display();
      disappearArray[i].update();
      }
    }


    for (let i = 0; i < disappearArray_dot.length; i++) {
      if (typeof disappearArray[i] != "undefined") {
      disappearArray_dot[i].display();
      // disappearArray_dot[i].update();
      }
    }


    
    // new  double circle
    for (let i = 0; i < disappearArray_2.length; i++) {
      if (typeof disappearArray_2[i] != "undefined") {
      disappearArray_2[i].display();
      disappearArray_2[i].update_circle();
      disappearArray_2[i].update_location();
      // disappearArray_2[i].seek(middle_position_Array[i]);
      
      }
    }

    for (let i = 0; i < disappearArray_2_pair.length; i++) {
      if (typeof disappearArray_2_pair[i] != "undefined") {

    disappearArray_2_pair[i].display();
    disappearArray_2_pair[i].update_circle();
    disappearArray_2_pair[i].update_location();
    // disappearArray_2_pair[i].seek(middle_position_Array[i]);
   
      }
    }

    for (let i = 0; i < disappearArray_2_pair.length; i++) {
      if (typeof disappearArray_2_pair[i] != "undefined") {
        for (let k = 0; k < disappearArray_2.length; k++) {
          if (typeof disappearArray_2[k] != "undefined") {
           if (disappearArray_2_pair[i].id == disappearArray_2[k].id) {
            disappearArray_2[k].seek(p5.Vector.div(p5.Vector.add(disappearArray_2[k].position, disappearArray_2_pair[i].position),2));
            disappearArray_2_pair[i].seek(p5.Vector.div(p5.Vector.add(disappearArray_2[k].position, disappearArray_2_pair[i].position),2));

           }
          
          
          
          }}}}






if (recombine == 1 ) {

  // if ( (whiteArray[i].position.x> ((550-(400)/8*count_pn_num)*s_x))  ||  (whiteArray[i].position.x<(((400)/8*count_pn_num*2)*s_x))   ||  (whiteArray_e[i].position.x<(((400)/8*count_pn_num*2)*s_x)) ||  (whiteArray_e[i].position.x> ((550-(400)/8*count_pn_num)*s_x))  ) {}

  

//disappear
      for (let i = 0; i < whiteArray.length; i++) {
      for (let k = 0; k< blackArray.length; k++) {
        if (abs(whiteArray[i].position.x-blackArray[k].position.x)<distance_dis
       && abs(whiteArray[i].position.y-blackArray[k].position.y)<distance_dis && (whiteArray[i].id != blackArray[k].id) 
       && (whiteArray[i].show ==1) && (blackArray[k].show ==1) && (whiteArray[i].position.x>(190*s_x)) && whiteArray[i].within ==0 ) {


        //huhu

        //15 
        
        //mark
         whiteArray[i].stop();
         blackArray[k].stop();
         whiteArray[i].noShow();
         blackArray[k].noShow();
         whiteArray[i].deadd();
         blackArray[k].deadd();


        middle_position_Array[disappear_count] = p5.Vector.div(p5.Vector.add(blackArray[k].position, whiteArray[i].position),2);
        //original dots
        // whiteArray[i].seek(middle_position_Array[disappear_count]);
        // blackArray[k].seek(middle_position_Array[disappear_count]);

//effects
 
         disappearArray[disappear_count] =(new Appear( middle_position_Array[disappear_count].x,  middle_position_Array[disappear_count].y,10,1, disappear_count))
         disappearArray_2[disappear_count] =(new Appear(whiteArray[i].position.x, whiteArray[i].position.y,10,2, disappear_count))
         disappearArray_2_pair[disappear_count] =(new Appear(blackArray[k].position.x, blackArray[k].position.y,10,3, disappear_count))

        disappear_count++

        let b = whiteArray[i].position.y;
       
        var vehicle = new Vehicle((170)*s_x, b, 10, "h", 1)
        vehicle.botz = blackArray[k].botz
        blackArray.push(vehicle);
  
        blackID_h.push(global_id);
        global_id += 1;

        var vehicle2 = new Vehicle((930)*s_x, b, 10, "e", 0)
        vehicle2.botz = whiteArray[i].botz
        whiteArray.push(vehicle2);

        // whiteArray_e.push(new Vehicle((930)*s_x, b, 10, "e", 0));
        // whiteID_e.push(global_id);
        global_id += 1;

         whiteArray.splice(i, 1);
         blackArray.splice(k, 1);
         console.log("diss")

        

         break       


       }
   }

    }


    //disappear white & black new h 
    for (let i = 0; i < whiteArray.length; i++) {
      for (let k = 0; k< blackArray_h.length; k++) {
        if (abs(whiteArray[i].position.x-blackArray_h[k].position.x)<distance_dis
       && abs(whiteArray[i].position.y-blackArray_h[k].position.y)<distance_dis && (whiteArray[i].id != blackArray_h[k].id) 
       && (whiteArray[i].show ==1) && (blackArray_h[k].show ==1) &&  whiteArray[i].within ==0 ) {

        //huhu

        
        //mark
         whiteArray[i].stop();
         blackArray_h[k].stop();
         whiteArray[i].noShow();
         blackArray_h[k].noShow();
         whiteArray[i].deadd();
         blackArray_h[k].deadd();
          // whiteArray[i].update();
          // blackArray[k].update();


        middle_position_Array[disappear_count] = p5.Vector.div(p5.Vector.add(blackArray_h[k].position, whiteArray[i].position),2);
        //original dots
        // whiteArray[i].seek(middle_position_Array[disappear_count]);
        // blackArray[k].seek(middle_position_Array[disappear_count]);

     

//effects
 
         disappearArray[disappear_count] =(new Appear( middle_position_Array[disappear_count].x,  middle_position_Array[disappear_count].y,10,1, disappear_count))
         disappearArray_2[disappear_count] =(new Appear(whiteArray[i].position.x, whiteArray[i].position.y,10,2, disappear_count))
         disappearArray_2_pair[disappear_count] =(new Appear(blackArray_h[k].position.x, blackArray_h[k].position.y,10,3, disappear_count))

        disappear_count++

        
        let b = whiteArray[i].position.y;
       
        var vehicle = new Vehicle((170)*s_x, b, 10, "h", 1)
        vehicle.botz = blackArray_h[k].botz
        blackArray_h.push(vehicle);
  
        blackID_h.push(global_id);
        global_id += 1;

        var vehicle2 = new Vehicle((930)*s_x, b, 10, "e", 0)
        vehicle2.botz = whiteArray[i].botz
        whiteArray.push(vehicle2);

        // whiteArray_e.push(new Vehicle((930)*s_x, b, 10, "e", 0));
        // whiteID_e.push(global_id);
        global_id += 1;

          whiteArray.splice(i, 1);
         blackArray_h.splice(k, 1);
         break
     
       }
   }
 
    }


         //disappear new white e & black 
         for (let i = 0; i < whiteArray_e.length; i++) {
          for (let k = 0; k< blackArray.length; k++) {
            if (abs(whiteArray_e[i].position.x-blackArray[k].position.x)<distance_dis 
           && abs(whiteArray_e[i].position.y-blackArray[k].position.y)<distance_dis && (whiteArray_e[i].id != blackArray[k].id) 
           && (whiteArray_e[i].show ==1) && (blackArray[k].show ==1) && whiteArray_e[i].within ==0 ) {
    
            //huhu

            //mark
             whiteArray_e[i].stop();
             blackArray[k].stop();
             whiteArray_e[i].noShow();
             blackArray[k].noShow();
              // whiteArray[i].update();
              // blackArray[k].update();
    
    
            middle_position_Array[disappear_count] = p5.Vector.div(p5.Vector.add(blackArray[k].position, whiteArray_e[i].position),2);
            //original dots
            // whiteArray[i].seek(middle_position_Array[disappear_count]);
            // blackArray[k].seek(middle_position_Array[disappear_count]);
  
         
  
  //effects
     
             disappearArray[disappear_count] =(new Appear( middle_position_Array[disappear_count].x,  middle_position_Array[disappear_count].y,10,1, disappear_count))
             disappearArray_2[disappear_count] =(new Appear(whiteArray_e[i].position.x, whiteArray_e[i].position.y,10,2, disappear_count))
             disappearArray_2_pair[disappear_count] =(new Appear(blackArray[k].position.x, blackArray[k].position.y,10,3, disappear_count))
  
            disappear_count++
           

            let b = whiteArray_e[i].position.y;
       
            var vehicle = new Vehicle((170)*s_x, b, 10, "h", 1)
            vehicle.botz = blackArray[k].botz
            blackArray.push(vehicle);
      
            blackID_h.push(global_id);
            global_id += 1;
    
            var vehicle2 = new Vehicle((930)*s_x, b, 10, "e", 0)
            vehicle2.botz = whiteArray_e[i].botz
            whiteArray_e.push(vehicle2);
    
            // whiteArray_e.push(new Vehicle((930)*s_x, b, 10, "e", 0));
            // whiteID_e.push(global_id);
            global_id += 1;

              whiteArray_e.splice(i, 1);
             blackArray.splice(k, 1);

             break
         
           }
       }
    
        }


        //disappear new white e & new black h
        for (let i = 0; i < whiteArray_e.length; i++) {
          for (let k = 0; k< blackArray_h.length; k++) {
            if (abs(whiteArray_e[i].position.x-blackArray_h[k].position.x)<distance_dis 
           && abs(whiteArray_e[i].position.y-blackArray_h[k].position.y)<distance_dis && (whiteArray_e[i].id != blackArray_h[k].id) 
           && (whiteArray_e[i].show ==1) && (blackArray_h[k].show ==1) && whiteArray_e[i].within ==0  ) {
    
            // console.log (whiteArray_e[i].position.x)
            // console.log ((550-(400)/8*count_pn_num)*s_x)

            //huhu
            
            //mark
             whiteArray_e[i].stop();
             blackArray_h[k].stop();
             whiteArray_e[i].noShow();
             blackArray_h[k].noShow();
              // whiteArray[i].update();
              // blackArray[k].update();
    
    
            middle_position_Array[disappear_count] = p5.Vector.div(p5.Vector.add(blackArray_h[k].position, whiteArray_e[i].position),2);
            //original dots
            // whiteArray[i].seek(middle_position_Array[disappear_count]);
            // blackArray[k].seek(middle_position_Array[disappear_count]);
  
         
  
  //effects
     
             disappearArray[disappear_count] =(new Appear( middle_position_Array[disappear_count].x,  middle_position_Array[disappear_count].y,10,1, disappear_count))
             disappearArray_2[disappear_count] =(new Appear(whiteArray_e[i].position.x, whiteArray_e[i].position.y,10,2, disappear_count))
             disappearArray_2_pair[disappear_count] =(new Appear(blackArray_h[k].position.x, blackArray_h[k].position.y,10,3, disappear_count))
  
            disappear_count++
           

            console.log("diss2")

        let b = whiteArray_e[i].position.y;
       
        var vehicle = new Vehicle((170)*s_x, b, 10, "h", 1)
        vehicle.botz = blackArray_h[k].botz
        blackArray_h.push(vehicle);
  
        blackID_h.push(global_id);
        global_id += 1;

        var vehicle2 = new Vehicle((930)*s_x, b, 10, "e", 0)
        vehicle2.botz = whiteArray_e[i].botz
        whiteArray_e.push(vehicle2);

        // whiteArray_e.push(new Vehicle((930)*s_x, b, 10, "e", 0));
        // whiteID_e.push(global_id);
        global_id += 1;

          whiteArray.splice(i, 1);
             blackArray.splice(k, 1);

             break
         
           }
       }
    
        }

      }

    

    // temp = slider_temperature.value();


    // stroke(125, 241, 148,100);
    // strokeWeight(1);
    // // fill(25,25,25,100)
    // // rect((970-350+20)*s_x,(790-200+80)*s_y,(330-20)*s_x,(190-80)*s_y);

    // noFill();
    // rect((10+100+70+change_square)*s_x,(10+385)*s_y,(940-change_length-70)*s_x,(770/2)*s_y);

    // fill(30)
    // //one
    // rect((10+100+70+change_square)*s_x,(10)*s_y,(940-change_length-70)*s_x,(770/4)*s_y);

    // //two
    // rect((10+100+70+change_square)*s_x,(10+385/2)*s_y,(940-change_length-70)*s_x,(770/4)*s_y);

    // // line((10+100+70+change_square + (940-change_length-70)/2)*s_x,(10+385/2)*s_y, (10+100+70+change_square + (940-change_length-70)/2)*s_x, (10+385/2+770/4)*s_y)

    // noFill();

    //plot graph///////////////
    ///up graph x:190-(950-(950-190)/point_count y:down171.25-40up
 
noFill();


    //coordinates
      //up
      stroke(102, 194, 255,180);

//       //horizon


// ////////////new
  //horizon down 1
  line((10+100+70+change_square+940-change_length-70-760+30)*s_x,(10+385/2+96.25)*s_y,(10+100+70+change_square+790-30)*s_x,(10+385/2+96.25)*s_y)
  //vertical down 1
line((10+100+70+change_square + (940-change_length-70)/2)*s_x,(10+385/2+30)*s_y, (10+100+70+change_square + (940-change_length-70)/2)*s_x, (10+385/2+770/4-30)*s_y)



for (let i = 0; i < x_num_count; i++) {
  let x = 550 * s_x + ((400 / 8 ) * s_x * i + ((400 / 8 ) * s_x));
  let y = (10 + 385 / 2 + 96.25) * s_y;
  line(x, y, x, y - 5 * s_y); // Draw the line
}

for (let i = 0; i < x_num_count; i++) {
  let x = 550 * s_x - ((400 / 8 ) * s_x * i)- ((400 / 8 ) * s_x);
  let y = (10 + 385 / 2 + 96.25) * s_y;
  line(x, y, x, y - 5 * s_y); // Draw the line
}


if (isOn ==false) {
  for (let i = 0; i < 4; i++) {
    let x = 550 * s_x;
    let y = (10+385/2+96.25)*s_y+ 12.5 * s_y  + 12.5 * s_y  * i;
    line(x, y, x + 5 * s_x, y); // Draw the line
  }
  
  for (let i = 0; i < 4; i++) {
    let x = 550 * s_x;
    let y = (10+385/2+96.25)*s_y- 12.5 * s_y  - 12.5 * s_y  * i;
    line(x, y, x + 5 * s_x, y); // Draw the line
  }

  noStroke()
  fill(102, 194, 255,180);
  textSize(10*s_x)
  text("20 μC/cm\u00B3",560*s_x,252*s_y);
  text("-20 μC/cm\u00B3",560*s_x,351*s_y);
  


} else {
  for (let i = 0; i < 4; i++) {
    let x = 550 * s_x;
    let y = (10+385/2+96.25)*s_y+ 40/1530*500 * s_y + 40/1530*500 * s_y  * i;
    line(x, y, x + 5 * s_x, y); // Draw the line
  }
  
  for (let i = 0; i < 4; i++) {
    let x = 550 * s_x;
    let y = (10+385/2+96.25)*s_y- 40/1530*500 * s_y - 40/1530*500 * s_y  * i;
    line(x, y, x + 5 * s_x, y); // Draw the line
  }

  noStroke()
fill(102, 194, 255,180);
textSize(10*s_x)
text("2000 V/cm",560*s_x,249*s_y);
text("-2000 V/cm",560*s_x,353*s_y);


}

noStroke()
fill(102, 194, 255,180);
textSize(10*s_x)
text("5 \u00B5m",790*s_x,313*s_y);
text("-5 \u00B5m",290*s_x,313*s_y);


///////////new box graphing

noStroke()
fill(254,246,182,100)

// rect_density = 1.6*Math.pow(10,-13)*hole_add_new-V_applied_p/10+V_applied_n/10

rect_density = 10+0.7*Math.pow(10,-13)*hole_add_new-V_applied_p/2+V_applied_n/2

/////

let rect_density_new = Math.pow(10,-13)*hole_add_new
// if (V_applied_p>=20) {
//   setFactor(1000)
// } else {

//   setFactor(1)
// }



if (isOn ==false) {
// //right up 
// rect((550)*s_x,(10+385/2+96.25)*s_y,((400)/8*count_pn_num)*s_x, -rect_density_new*4*s_y)
// //left down
// rect((550)*s_x,(10+385/2+96.25)*s_y,-((400)/8*count_pn_num)*s_x, rect_density_new*4*s_y)

///left
beginShape();
vertex(550*s_x, (10+385/2+96.25) * s_y)
// Add all points as curve vertices
for (let i = 0; i < new_array_rou_e_set.length; i++) {
let x = new_array_rou_e_set[i].x
let y = new_array_rou_e_set[i].y
vertex(x, y);
}
vertex(550 * s_x-((400)/8*count_pn_num)*s_x, (10+385/2+96.25) * s_y)
endShape();


///right
beginShape();

vertex(550*s_x, (10+385/2+96.25) * s_y)


// Add all points as curve vertices
for (let i = 0; i < new_array_rou_h_set.length; i++) {
let x = new_array_rou_h_set[i].x
let y = new_array_rou_h_set[i].y
vertex(x, y);
}
vertex(550 * s_x+((400)/8*count_pn_num)*s_x, (10+385/2+96.25) * s_y)

endShape();


}

noFill()

fill(218,112,214,100)


//E- field 
if (isOn==true){
  triangle((550-(400)/8*count_pn_num)*s_x, (10+385/2+96.25)*s_y, (550+(400)/8*count_pn_num)*s_x, (10+385/2+96.25)*s_y, (550)*s_x, (10+385/2+96.25+  1/2.5*2*rect_density/(X_n*100)*200*2)*s_y)

}


/////graph on off switch
if(isOn){
  fill("white");
}
else{
  fill(102, 194, 255,100);
}

noStroke();
  rect(879*s_x,368*s_y,50*s_x,16*s_y,5*s_y, 5*s_y)
  
  textSize(12*s_x);
if(isOn){
  fill("black");
  text("SWITCH",880*s_x,380*s_y);
}
else{
  fill("white");
  text("SWITCH",880*s_x,380*s_y);
}


let V_built = 0.052*Math.log(hole_add_new/Math.pow(10,10))
// console.log(V_built)
X_n = 5811*Math.pow(Math.log(hole_add_new/Math.pow(10,10))/(Math.pow(10,6)*hole_add_new),1/2)*Math.pow(10,6)
// X_n = Math.log(hole_add_new/Math.pow(10,10))
// let array_band = []
for (var i = 0; i<50; i++) {

  ///box length 300-800
  stroke(125, 241, 148,100);
  noFill()
  // rect((150+(800)/50*i)*s_x,(10)*s_y,(800)/50*(i)*s_x,(770/4)*s_y);

  // array_band[i] = -7.76*Math.pow(10,-16)*hole_add_new*Math.pow((X_n*100+(150+(800)/50*i-550)*s_x),2)/100
  // array_band[i] = -Math.pow((count_n/(X_n*100)),2)*V_built*100+(7.76*Math.pow(10,-16)*hole_add_new*Math.pow((X_n*100-(150+(800)/50*i-550)*s_x),2)/100)
// array_band[i] = -Math.pow((count_n/(X_n*100)),2)*V_built*100+(7.76*Math.pow(10,-16)*hole_add_new*Math.pow((X_n*100-(150+(800)/20*i-550)*s_x),2)/100)
  // if ((150+(800)/50*i)*s_x <((550-(400)/8*count_pn_num))*s_x ){
  //   array_band[i] = 0

  // } 
  // if ( ((550-(400)/8*count_pn_num))*s_x <= (150+(800)/50*i)*s_x && ((150+(800)/50*i)*s_x <(550)*s_x) ){
  //   //array_band[i] = -7.76*Math.pow(10,-16)*hole_add*Math.pow((145+(150+(800)/50*i-550)*s_x),2)*Math.pow(10,-2)
  //   array_band[i] = -7.76*Math.pow(10,-16)*hole_add_new*Math.pow((X_n*100/2+(150+(800)/50*i-550)*s_x),2)/100

  //   //array_band[i] = -7.76*Math.pow(10,-16)*hole_add*Math.pow((145+x),2)
  // }
  //  if ( (550)*s_x <= (150+(800)/50*i)*s_x && (  (150+(800)/50*i)*s_x <((550+(400)/8*count_pn_num))*s_x )){
  
  //   array_band[i] = -Math.pow((count_n/(X_n*100)),2)*V_built*100+(7.76*Math.pow(10,-16)*hole_add_new*Math.pow((X_n*100/2-(150+(800)/50*i-550)*s_x),2)/100)
 
  // } 
  //  if ( ((550+(400)/8*count_pn_num))*s_x <= (150+(800)/50*i)*s_x  ){
  //   array_band[i] = -Math.pow((count_n/(X_n*100)),2)*V_built*100
  // }


}





for (var i = 0; i<100; i++) {

  //(800)/100*i
  if ((800)/100*i>(550-(400)/8*count_pn_num) && (800)/100*i<(550)){
    
    array_band1[i-19]= -Math.pow(((800)/100*i-(550-(400)/8*count_pn_num))/((400)/8*count_pn_num)*(2*rect_density/(count_pn_num*100)*177*2) ,1)/5/3
  }  else if (i==50) {
    // array_band1[50]= Math.pow((2*rect_density/(X_n*100)*count_n*2),2)/20
  } else {
    array_band1[i]= 0
  } 

  // if (i>50) {
  //   array_band1[i]=  array_band1[100-i]
  // }
//  triangle((550-(400)/8*count_pn_num)*s_x, (10+385/2+96.25)*s_y, (550+(400)/8*count_pn_num)*s_x, (10+385/2+96.25)*s_y, (550)*s_x, (10+385/2+96.25+  2*rect_density/(X_n*100)*count_n*2)*s_y)

}

for (var i = 0; i<100; i++) {

  if (i>50) {
    array_band1[i]=  array_band1[100-i]
  } else if (i=50){
    array_band1[i]=  -Math.pow((2*rect_density/(count_pn_num*100)*177*2) ,1)/5/3
  }
//  triangle((550-(400)/8*count_pn_num)*s_x, (10+385/2+96.25)*s_y, (550+(400)/8*count_pn_num)*s_x, (10+385/2+96.25)*s_y, (550)*s_x, (10+385/2+96.25+  2*rect_density/(X_n*100)*count_n*2)*s_y)

}

for (var i = 0; i<100; i++) {

  array_band1[i] = array_band1[i]/3

}

for (var i = 0; i<100; i++) {
  array_band2[i] = 0; // initialize to 0

  if (i > 0) { // run the inner loop only if i > 0
    for (var k = 0; k<i; k++) {
      array_band2[i] = array_band2[i] + array_band1[k];
    }
  }
}



// for (var i = 0; i<50; i++) {
//   array_band2[i] = -7.76*Math.pow(10,-16)*hole_add_new*Math.pow((X_n*100/2+(150+(800)/50*i-550)*s_x),2)/100
// //curve down
// }

// for (var i = 0; i<50; i++) {
//   array_band3[i] = -Math.pow((count_n/(X_n*100)),2)*V_built*100+(7.76*Math.pow(10,-16)*hole_add_new*Math.pow((X_n*100/2-(150+(800)/50*i-550)*s_x),2)/100)
// //green curve up
// }


for (var i = 0; i<100; i++) {
  array_band3[i] = array_band2[i]


}

// for (var i = 0; i<50; i++) {
//   array_band4[i] = -Math.pow((count_n/(X_n*100)),2)*V_built*100

//   //purple
// }

/////////new dot on graph 
// for (var k = 0; k < whiteArray.length; k++) {

// whiteArray_dot

// }



  //////band graph
  stroke(254,246,182)
  

strokeWeight(1.5)
beginShape();

  for (var k = 0; k < 50; k++) {
    // if (i!=(point_count-1)||i!=(0)) {
      // curveVertex((150+(800)/20*k)*s_x,(171.25-50+array_band[k]*e_field_c/10)*s_y)
      curveVertex((150+(800)/50*k)*s_x,(171.25-array_band[k])*s_y)

  }
 


endShape();
noStroke()
///
stroke(254,246,182)
// beginShape();

//   for (var k = 0; k < 100; k++) {
 
//       curveVertex((150+(800)/100*k)*s_x,(171.25-array_band1[k])*s_y)

//   }
// endShape();
// noStroke()
// ///
// stroke(300,246,182)
for (var k = 0; k < 100; k++) {
  //yellow curve
       line_yellow[k] = [(150+(800)/100*k)*s_x,(171.25-array_band2[k]-100)*s_y]
 
   }

 
   


   for (var k = 0; k < 100; k++) {
    //yellow curve
         line_green[k] = [(150+(800)/100*k)*s_x,(+171.25-array_band3[k]-30)*s_y]
   
         //  let a = -(e_field_c)/(550*s_x-((550-(400)/8*count_pn_num)*s_x))*this.position.x+(((550-(400)/8*count_pn_num))*s_x*e_field_c)/((550*s_x-((550-(400)/8*count_pn_num)*s_x)))

     }

    //  for (let i = 0; i < line_green.length; i++) {
    //   let x = line_green[i][0];
    //   let y = line_green[i][1]-30*s_y;
    //   ellipse(x, y, 3, 3); // Draws an ellipse at (x, y) with a width and height of 3
    // }

beginShape();

  for (var k = 0; k < 100; k++) {
 //yellow curve
      curveVertex((150+(800)/100*k)*s_x,(171.25-array_band2[k]-100)*s_y)

      line_yellow_data[k] = { x: (150+(800)/100*k)*s_x, y: (171.25-array_band2[k]-100)*s_y};
  }
endShape();
noStroke()
///
stroke(125, 241, 148)
beginShape();

  for (var k = 0; k < 100; k++) {
    //green curve
 
      curveVertex((150+(800)/100*k)*s_x,(-30+171.25-array_band3[k]-30)*s_y)
      line_green_data[k] = { x: (150+(800)/100*k)*s_x, y: (171.25-array_band3[k]-30-30)*s_y};


  }
endShape();
noStroke()
///
stroke(200,146,182)
beginShape();




  for (var k = 0; k < 50; k++) {
 
      curveVertex((150+(800)/50*k)*s_x,(171.25-array_band4[k])*s_y)

  }
endShape();
noStroke()




//   }


//box

// if ((this.position.x > 235.6*s_x) && (this.position.x < (170+524.4)*s_x))

///red box 
///middle 550
//150 

    stroke(255, 58, 23,210);
    context_1.beginPath();
        context_1.setLineDash([10,10]);
        context_1.rect((550-(400)/8*count_pn_num)*s_x,(10+385)*s_y,((400)/8*count_pn_num*2)*s_x,(770/2)*s_y);
        context_1.closePath();
    context_1.stroke();
    context_1.setLineDash([]);

  
    // noFill();
    // rect((10+100+70+change_square)*s_x,(10)*s_y,(940-change_length-70-760)*s_x,(770)*s_y);

    stroke(125, 241, 148,100);

    textSize(17)
    noStroke()
    strokeWeight(1)
    fill(255);
   ///////////////////

   fill(102, 194, 255,180)

 
textSize(14*s_x);
  
// text("Electron Concentration (/cm\u00B3)",(160)*s_x,(30)*s_y)
text("Band Diagram",(160)*s_x,(30)*s_y)
// text("Hole Concentration (/cm\u00B3)",(160)*s_x,(223)*s_y)
text("Charge Density",(160)*s_x,(223)*s_y)
text(" / ",(260)*s_x,(223)*s_y)
text("Electric Field",(273)*s_x,(223)*s_y)

if (isOn) {
  // stroke(250)
  // strokeWeight(1.5)
  // line((160+120)*s_x,(223+5)*s_y,(160+120+92)*s_x,(223+5)*s_y )

  fill(218,112,214,50)
  rect(271*s_x,210*s_y,85*s_x,18*s_y,5*s_y, 5*s_y)

  
} else {
  // stroke(250)
  // strokeWeight(1.5)
  // line((160)*s_x,(223+5)*s_y,(160+100+10)*s_x,(223+5)*s_y )

  fill(255,40);
  rect(158*s_x,210*s_y,100*s_x,18*s_y,5*s_y, 5*s_y)


}

noFill()
noStroke()
// text("Electric Field",(560)*s_x,(223)*s_y)

noStroke()
  fill(102, 194, 255,180)

 
  textSize(14);

if (count_pn_num >=X_n && V_applied_p ==0) {
  text("Equilibrium",(760)*s_x,(223)*s_y)
}
// text("x",(930)*s_x,(190)*s_y)
// text("x",(930)*s_x,(318+70)*s_y)

textSize(12);




// text("Hole",(885)*s_x,(43)*s_y)
// text("Electron",(885)*s_x,(53)*s_y)
// text("0",(158)*s_x,(172)*s_y)
// text("0",(158)*s_x,(298+70)*s_y)

// text("10\u00B9\u2070",(155-3)*s_x,(172+12)*s_y)


// text("10\u00B9\u2070",(153-3)*s_x,(298+70+12)*s_y)

// text("10\u00B9\u2074",(153)*s_x,(298+70-120)*s_y)
 

stroke(125, 241, 148,100);


//    //green
//    stroke(125, 241, 148)
// line((10+100+70+change_square+940-change_length-70-760-20+750-60)*s_x,40*s_y,(10+100+70+change_square+790-60)*s_x,40*s_y)

// //yellow
// stroke(254,246,182)
// line((10+100+70+change_square+940-change_length-70-760-20+750-60)*s_x,50*s_y,(10+100+70+change_square+790-60)*s_x,50*s_y)

//real world graph 
if (real_graph ==1){


  // if (switch_1 ==0){
  noStroke()
  // fill(254,246,182,50)
  // } else if (switch_1 ==1) {
  //   noStroke()
    fill(125, 241, 148,50)
  // }

  // if (count_graph ==0){
    x_con =0
    for (let i = 0; i < array_graph_con.length; i++) {
      if (x_con<750){
        x_con+=array_graph_con[i].x
      } else {
        x_con=750
      }
      

    }


    triangle((170)*s_x, 171.25*s_y, (10+100+70+change_square+940-change_length-70-760-20)*s_x, (171.2-concentration*0.7)*s_y, (170+x_con)*s_x, 171.25*s_y)

    noStroke()
  fill(254,246,182,50)
  // } else if (switch_1 ==1) {
    // noStroke()
    // fill(125, 241, 148,50)
  // }

  // if (count_graph ==0){
    x_con =0
    for (let i = 0; i < array_graph_con.length; i++) {
      if (x_con<750){
        x_con+=array_graph_con[i].x
      } else {
        x_con=750
      }
      

    }


    triangle((170)*s_x, 171.25*s_y, (10+100+70+change_square+940-change_length-70-760-20)*s_x, (171.2-concentration*0.7)*s_y, (170+x_con)*s_x, 171.25*s_y)

  // }


  // if (switch_1==0){
    noStroke()
  fill(254,246,182,50)
//scale current 

// if (count_graph ==0){
    test_a = (5.33*Math.pow(10,5)*Math.pow(scattering_velocity,2)*scattering_count*concentration)/Math.pow(10,7)*test_current_scale //scale by 5
    rect(170*s_x,298.75*s_y,(x_con)*s_x,(test_a/x_con)*s_y)
// }
  // } else if (switch_1 ==1) {
    noStroke()
    fill(125, 241, 148,50)

    // if (count_graph==0){
    test_a = (5.33*Math.pow(10,5)*Math.pow(scattering_velocity,2)*scattering_count*concentration)/Math.pow(10,7)*test_current_scale
    rect(170*s_x,298.75*s_y,(x_con)*s_x,-(test_a/x_con)*s_y)
    // }
  // }
 


  // console.log(con_count)
  // if (count_graph ==0){
  for (let i = 0; i < array_graph_con.length; i++) {
    array_graph_con[i].update()
  }
// }

}


//  // Set the circle properties
//  fill(255, 0, 0); // Red color
//  noStroke();
 
//  // Loop through each data point and draw a circle
//  for (let point of line_yellow_data) {
//    circle(point.x, point.y, 4); // Using diameter of 20 (radius of 10)
//  }


  // Set the circle properties
  fill(0, 255, 0); // green
  noStroke();
  
  // Loop through each data point and draw a circle
  // for (let point of line_green_data) {
  //   circle(point.x, point.y, 4); // Using diameter of 20 (radius of 10)
  // }



  } else if (sceneCount == 3) {

    // // Wait for 5 seconds using setTimeout
    //   setTimeout(function() {
    //       // Check if the elements in whiteArray meet the condition
    //       whiteArray.forEach(function(vehicle) {
    //           if (vehicle.top==1) {
    //               console.log("The condition is met.");
    //               vehicle.origin.x === 0 && vehicle.origin.y === 0
 
    //           }
    //       });
    //   }, 50000); // 5000ms = 5s


   

    // for (let i = 0; i<whiteArray.length; i++) {
    //   whiteArray[i].checkProperties();
    // }
   




    count_pn_num = X_n

    let ratio = (-V_applied_p/10+V_applied_n/10)/(1.6*Math.pow(10,-13)*hole_add_new)
    
    // console.log (ratio)

    count_pn_num = X_n*(1+ratio)

      stroke(125, 241, 148,100);
    strokeWeight(1);
    // fill(25,25,25,100)
    // rect((970-350+20)*s_x,(790-200+80)*s_y,(330-20)*s_x,(190-80)*s_y);

    noFill();
    rect((10+100+70+change_square)*s_x,(10+385)*s_y,(940-change_length-70)*s_x,(770/2)*s_y);

    fill(30)
    //one
    rect((10+100+70+change_square)*s_x,(10)*s_y,(940-change_length-70)*s_x,(770/4)*s_y);

    //two
    rect((10+100+70+change_square)*s_x,(10+385/2)*s_y,(940-change_length-70)*s_x,(770/4)*s_y);

    // line((10+100+70+change_square + (940-change_length-70)/2)*s_x,(10+385/2)*s_y, (10+100+70+change_square + (940-change_length-70)/2)*s_x, (10+385/2+770/4)*s_y)

    noFill();

/////////////////

    // x_probability = 100/(1+((y_cordi/100+constant_fermi)*constant_temperature/0.026/300)/100)
    x_probability = Math.round(100/(1+Math.exp((300*(y_cordi/500-constant_fermi)/(0.026*constant_temperature)))))

  


    x_probability_time=(x_probability)
   
    //tcb = 10 
    if (time_count_blink>x_probability_time){
       opacity_circle=0
       opacity_circle_up=0

    }else if (time_count_blink<=x_probability_time){

  
      if (x_probability_time<30){
        opacity_circle=1
      } else {
        opacity_circle=1
        opacity_circle_up=1
      }
      
    }


    // if (0.56<y_cordi/100 && 2>y_cordi/100){
    //   num_Line_text= Math.round(88*Math.pow(y_cordi/100-0.56,1/2))
    //   // opacity_circle=0
    //   // opacity_circle_up=1
    // } else if (y_cordi/100<-0.56 && -2<y_cordi/100){
    //   num_Line_text= Math.round(50*Math.pow(-0.56-y_cordi/100,1/2))
    //   // opacity_circle=1
    //   // opacity_circle_up=0
    //   //Math.round(50*Math.pow(-0.56+m/100,1/2))
    // } else if (-0.56<y_cordi/100 && y_cordi/100<0.56){
    //   num_Line_text=0
    //   opacity_circle=0
    //   opacity_circle_up=0
    // } 

    // d3bands_update()
    // d3bands_update_up()
    if (time_count ==0) {
      ni = (9.15*Math.pow(10,19))*Math.pow((temp/300),1.5)*Math.exp((-0.59/(0.026*temp/300)))
      generation_Rate_c = 0.01*ni;
      
  
      
      
      current_Electron_c += generation_Rate_c-recombination_Rate_c; 
      current_Hole_c += generation_Rate_c-recombination_Rate_c;
      recombination_Rate_c = current_Electron_c*0.01;
      } else {
        generation_Rate_c =0;
        current_Electron_c =0;
        current_Hole_c =0;
        recombination_Rate_c =0;
      }


    s_x = windowWidth/scale_x;
    s_y = windowHeight/scale_y;

    // electronHoleGraph_generation();
    // temp = slider_temperature_s1.value();
  
  //temp draw

    // fill(235, 177, 52);
    // fill(255)
    // rect((70+110)*s_x, 640*s_y, 10*s_x,105*s_y, 30*s_x);
    // ellipse((70+115)*s_x, (640+105)*s_y,30*s_x)
    // // line(110,640,160,640)

    // fill(235, 58, 52)
    // ellipse((70+115)*s_x, (640+105)*s_y,20*s_y)
    // rect((70+112.5)*s_x, (640+10+(-0.7*((320-260)/300*temp+260)+245))*s_y, 5*s_x, (105-(-0.7*((320-260)/300*temp+260)+245))*s_y, 30*s_x);

    // // console.log("ssss")
    // fill(255)
    // textSize(18);
  
    // text(temp+"K",(70+140)*s_x,(640+115)*s_y)



      // g_rate = 0.000112099*generation_Rate_c+0.999998791


      g_rate = 0.00000112099*generation_Rate_c+0.999998791


      
    

   
    var target = createVector(300, 300);
    

    // for (let i = 0; i < whiteArray.length; i++) {
    //   if (whiteArray[i].dead == 1){
    //     console.log("sss")
    //       whiteArray.splice(i, 1);
    //     //  blackArray.splice(blackArray[k], 1);
    //     break

    //   }
    // }


    for (let i = 0; i < whiteArray.length; i++) {
      // if (whiteArray[i].dead == 1){
      //   console.log("sss")
      //     whiteArray.splice(whiteArray[i], 1);
      //   //  blackArray.splice(blackArray[k], 1);
      //   break

      // }

      if (whiteArray[i].dead == 0){
      whiteArray[i].display();
      whiteArray[i].appear_update();
      whiteArray[i].update();

      
   
      if (whiteArray[i].appear>255) {
        whiteArray[i].random_walk();
      }
    } 


   

     
    }
    

    for (let i = whiteArray.length - 1; i >= 0; i--) {
      if (whiteArray[i].show ==0) {
        // if (whiteArray[i].x > 940*s_x && (whiteArray[i].direction.x ==10)) {
        whiteArray.splice(i, 1);
        // console.log("haha")
      }
    }
  
    for (let i = whiteArray_e.length - 1; i >= 0; i--) {
      if (whiteArray_e[i].show ==0) {
      // if (whiteArray_e[i].x > 940*s_x && whiteArray_e[i].direction.x ==10) {
        whiteArray_e.splice(i, 1);
      }
    }

    for (let i = blackArray.length - 1; i >= 0; i--) {
      if (blackArray[i].show ==0) {
        // if (whiteArray[i].x > 940*s_x && (whiteArray[i].direction.x ==10)) {
          blackArray.splice(i, 1);
      }
    }
  
    for (let i = blackArray_h.length - 1; i >= 0; i--) {
      if (blackArray_h[i].show ==0) {
      // if (whiteArray_e[i].x > 940*s_x && whiteArray_e[i].direction.x ==10) {
        blackArray_h.splice(i, 1);
      }
    }
  


    for (let i = 0; i < blackArray.length; i++) {
      // whiteArray[i].display();
      // whiteArray[i].appear_update();
      // whiteArray[i].update();

      if (blackArray[i].dead == 0){
      blackArray[i].display();
      blackArray[i].appear_update();
      blackArray[i].update();

      // if (whiteArray[i].appear>255) {
      //   whiteArray[i].random_walk();
      // }
      if (blackArray[i].appear>255) {
        blackArray[i].random_walk();
      }
    }

    // if (blackArray[i].show == 0){
    //   blackArray.splice(blackArray[i], 1);
    //   console.log("s")
    //   // break
    // }

    

     
    }

    for (let i = 0; i < blackArray_h.length; i++) {
      // whiteArray[i].display();
      // whiteArray[i].appear_update();
      // whiteArray[i].update();

      
      blackArray_h[i].display();
      blackArray_h[i].appear_update();
      blackArray_h[i].update();

      // if (whiteArray[i].appear>255) {
      //   whiteArray[i].random_walk();
      // }
      if (blackArray_h[i].appear>255) {
        blackArray_h[i].straight_walk()
        if (blackArray_h[i].position.y > 49*s_y) {
        blackArray_h[i].random_walk();
        }
      }
    

     
    }


    for (let i = 0; i < whiteArray_e.length; i++) {
      // whiteArray[i].display();
      // whiteArray[i].appear_update();
      // whiteArray[i].update();

      
      whiteArray_e[i].display();
      whiteArray_e[i].appear_update();
      whiteArray_e[i].update();

      // if (whiteArray[i].appear>255) {
      //   whiteArray[i].random_walk();
      // }
      if (whiteArray_e[i].appear>255) {
        whiteArray_e[i].straight_walk()
        if (whiteArray_e[i].position.y > 49*s_y) {
          whiteArray_e[i].random_walk();
        }
      }
    

     
    }



    for (let i = 0 ; i<disappearArray.length; i++) {
      if (typeof disappearArray[i] != "undefined") {
      if (disappearArray[i].alpha<1) {
        disappearArray.splice(i, 1);
      }
    }
  }

    for (let i = 0 ; i<disappearArray_2_pair.length; i++) {
      if (typeof disappearArray_2_pair[i] != "undefined") {
      if (disappearArray_2_pair[i].disappear<1) {
        disappearArray_2_pair.splice(i, 1);
      }
    }
    }




    for (let i = 0 ; i<appearArray.length; i++) {
      if (appearArray[i].alpha<1) {
        appearArray.splice(i, 1);
      }
    }

    for (let i = 0 ; i<disappearArray_2.length; i++) {
      if (typeof disappearArray_2[i] != "undefined") {
      if (disappearArray_2[i].disappear<1) {
        disappearArray_2.splice(i, 1);
      }
    }
  }

    for (let i = 0 ; i<disappearArray_2_pair.length; i++) {
      if (typeof disappearArray_2_pair[i] != "undefined") {
      if (disappearArray_2_pair[i].disappear<1) {
        disappearArray_2_pair.splice(i, 1);
  
      } else {
        continue
      }
    }
    }

    for (let i = 0; i < appearArray.length; i++) {
      appearArray[i].display();
      appearArray[i].update();

     
    }

    for (let i = 0; i < appearArray_s1.length; i++) {
      appearArray_s1[i].display();
      appearArray_s1[i].update();
     
    }
    for (let i = 0; i < disappearArray.length; i++) {
      if (typeof disappearArray[i] != "undefined") {
      disappearArray[i].display();
      disappearArray[i].update();
      }
    }


    for (let i = 0; i < disappearArray_dot.length; i++) {
      if (typeof disappearArray[i] != "undefined") {
      disappearArray_dot[i].display();
      // disappearArray_dot[i].update();
      }
    }


    
    // new  double circle
    for (let i = 0; i < disappearArray_2.length; i++) {
      if (typeof disappearArray_2[i] != "undefined") {
      disappearArray_2[i].display();
      disappearArray_2[i].update_circle();
      disappearArray_2[i].update_location();
      // disappearArray_2[i].seek(middle_position_Array[i]);
      
      }
    }

    for (let i = 0; i < disappearArray_2_pair.length; i++) {
      if (typeof disappearArray_2_pair[i] != "undefined") {

    disappearArray_2_pair[i].display();
    disappearArray_2_pair[i].update_circle();
    disappearArray_2_pair[i].update_location();
    // disappearArray_2_pair[i].seek(middle_position_Array[i]);
   
      }
    }

    for (let i = 0; i < disappearArray_2_pair.length; i++) {
      if (typeof disappearArray_2_pair[i] != "undefined") {
        for (let k = 0; k < disappearArray_2.length; k++) {
          if (typeof disappearArray_2[k] != "undefined") {
           if (disappearArray_2_pair[i].id == disappearArray_2[k].id) {
            disappearArray_2[k].seek(p5.Vector.div(p5.Vector.add(disappearArray_2[k].position, disappearArray_2_pair[i].position),2));
            disappearArray_2_pair[i].seek(p5.Vector.div(p5.Vector.add(disappearArray_2[k].position, disappearArray_2_pair[i].position),2));

           }
          
          
          
          }}}}






if (recombine == 1 ) {

  // if ( (whiteArray[i].position.x> ((550-(400)/8*count_pn_num)*s_x))  ||  (whiteArray[i].position.x<(((400)/8*count_pn_num*2)*s_x))   ||  (whiteArray_e[i].position.x<(((400)/8*count_pn_num*2)*s_x)) ||  (whiteArray_e[i].position.x> ((550-(400)/8*count_pn_num)*s_x))  ) {}

  

//disappear
      for (let i = 0; i < whiteArray.length; i++) {
      for (let k = 0; k< blackArray.length; k++) {
        if (abs(whiteArray[i].position.x-blackArray[k].position.x)<distance_dis
       && abs(whiteArray[i].position.y-blackArray[k].position.y)<distance_dis && (whiteArray[i].id != blackArray[k].id) 
       && (whiteArray[i].show ==1) && (blackArray[k].show ==1) && (whiteArray[i].position.x>(190*s_x)) && whiteArray[i].within ==0 ) {


        //huhu

        //15 
        
        //mark
         whiteArray[i].stop();
         blackArray[k].stop();
         whiteArray[i].noShow();
         blackArray[k].noShow();
         whiteArray[i].deadd();
         blackArray[k].deadd();


        middle_position_Array[disappear_count] = p5.Vector.div(p5.Vector.add(blackArray[k].position, whiteArray[i].position),2);
        //original dots
        // whiteArray[i].seek(middle_position_Array[disappear_count]);
        // blackArray[k].seek(middle_position_Array[disappear_count]);

//effects
 
         disappearArray[disappear_count] =(new Appear( middle_position_Array[disappear_count].x,  middle_position_Array[disappear_count].y,10,1, disappear_count))
         disappearArray_2[disappear_count] =(new Appear(whiteArray[i].position.x, whiteArray[i].position.y,10,2, disappear_count))
         disappearArray_2_pair[disappear_count] =(new Appear(blackArray[k].position.x, blackArray[k].position.y,10,3, disappear_count))

        disappear_count++

        let b = whiteArray[i].position.y;
       
        var vehicle = new Vehicle((170)*s_x, b, 10, "h", 1)
        vehicle.botz = blackArray[k].botz
        blackArray.push(vehicle);
  
        blackID_h.push(global_id);
        global_id += 1;

        var vehicle2 = new Vehicle((930)*s_x, b, 10, "e", 0)
        vehicle2.botz = whiteArray[i].botz
        whiteArray.push(vehicle2);

        // whiteArray_e.push(new Vehicle((930)*s_x, b, 10, "e", 0));
        // whiteID_e.push(global_id);
        global_id += 1;

         whiteArray.splice(i, 1);
         blackArray.splice(k, 1);
         console.log("diss")

        

         break       


       }
   }

    }


    //disappear white & black new h 
    for (let i = 0; i < whiteArray.length; i++) {
      for (let k = 0; k< blackArray_h.length; k++) {
        if (abs(whiteArray[i].position.x-blackArray_h[k].position.x)<distance_dis
       && abs(whiteArray[i].position.y-blackArray_h[k].position.y)<distance_dis && (whiteArray[i].id != blackArray_h[k].id) 
       && (whiteArray[i].show ==1) && (blackArray_h[k].show ==1) &&  whiteArray[i].within ==0 ) {

        //huhu

        
        //mark
         whiteArray[i].stop();
         blackArray_h[k].stop();
         whiteArray[i].noShow();
         blackArray_h[k].noShow();
         whiteArray[i].deadd();
         blackArray_h[k].deadd();
          // whiteArray[i].update();
          // blackArray[k].update();


        middle_position_Array[disappear_count] = p5.Vector.div(p5.Vector.add(blackArray_h[k].position, whiteArray[i].position),2);
        //original dots
        // whiteArray[i].seek(middle_position_Array[disappear_count]);
        // blackArray[k].seek(middle_position_Array[disappear_count]);

     

//effects
 
         disappearArray[disappear_count] =(new Appear( middle_position_Array[disappear_count].x,  middle_position_Array[disappear_count].y,10,1, disappear_count))
         disappearArray_2[disappear_count] =(new Appear(whiteArray[i].position.x, whiteArray[i].position.y,10,2, disappear_count))
         disappearArray_2_pair[disappear_count] =(new Appear(blackArray_h[k].position.x, blackArray_h[k].position.y,10,3, disappear_count))

        disappear_count++

        
        let b = whiteArray[i].position.y;
       
        var vehicle = new Vehicle((170)*s_x, b, 10, "h", 1)
        vehicle.botz = blackArray_h[k].botz
        blackArray_h.push(vehicle);
  
        blackID_h.push(global_id);
        global_id += 1;

        var vehicle2 = new Vehicle((930)*s_x, b, 10, "e", 0)
        vehicle2.botz = whiteArray[i].botz
        whiteArray.push(vehicle2);

        // whiteArray_e.push(new Vehicle((930)*s_x, b, 10, "e", 0));
        // whiteID_e.push(global_id);
        global_id += 1;

          whiteArray.splice(i, 1);
         blackArray_h.splice(k, 1);
         break
     
       }
   }
 
    }


         //disappear new white e & black 
         for (let i = 0; i < whiteArray_e.length; i++) {
          for (let k = 0; k< blackArray.length; k++) {
            if (abs(whiteArray_e[i].position.x-blackArray[k].position.x)<distance_dis 
           && abs(whiteArray_e[i].position.y-blackArray[k].position.y)<distance_dis && (whiteArray_e[i].id != blackArray[k].id) 
           && (whiteArray_e[i].show ==1) && (blackArray[k].show ==1) && whiteArray_e[i].within ==0 ) {
    
            //huhu

            //mark
             whiteArray_e[i].stop();
             blackArray[k].stop();
             whiteArray_e[i].noShow();
             blackArray[k].noShow();
              // whiteArray[i].update();
              // blackArray[k].update();
    
    
            middle_position_Array[disappear_count] = p5.Vector.div(p5.Vector.add(blackArray[k].position, whiteArray_e[i].position),2);
            //original dots
            // whiteArray[i].seek(middle_position_Array[disappear_count]);
            // blackArray[k].seek(middle_position_Array[disappear_count]);
  
         
  
  //effects
     
             disappearArray[disappear_count] =(new Appear( middle_position_Array[disappear_count].x,  middle_position_Array[disappear_count].y,10,1, disappear_count))
             disappearArray_2[disappear_count] =(new Appear(whiteArray_e[i].position.x, whiteArray_e[i].position.y,10,2, disappear_count))
             disappearArray_2_pair[disappear_count] =(new Appear(blackArray[k].position.x, blackArray[k].position.y,10,3, disappear_count))
  
            disappear_count++
           

            let b = whiteArray_e[i].position.y;
       
            var vehicle = new Vehicle((170)*s_x, b, 10, "h", 1)
            vehicle.botz = blackArray[k].botz
            blackArray.push(vehicle);
      
            blackID_h.push(global_id);
            global_id += 1;
    
            var vehicle2 = new Vehicle((930)*s_x, b, 10, "e", 0)
            vehicle2.botz = whiteArray_e[i].botz
            whiteArray_e.push(vehicle2);
    
            // whiteArray_e.push(new Vehicle((930)*s_x, b, 10, "e", 0));
            // whiteID_e.push(global_id);
            global_id += 1;

              whiteArray_e.splice(i, 1);
             blackArray.splice(k, 1);

             break
         
           }
       }
    
        }


        //disappear new white e & new black h
        for (let i = 0; i < whiteArray_e.length; i++) {
          for (let k = 0; k< blackArray_h.length; k++) {
            if (abs(whiteArray_e[i].position.x-blackArray_h[k].position.x)<distance_dis 
           && abs(whiteArray_e[i].position.y-blackArray_h[k].position.y)<distance_dis && (whiteArray_e[i].id != blackArray_h[k].id) 
           && (whiteArray_e[i].show ==1) && (blackArray_h[k].show ==1) && whiteArray_e[i].within ==0  ) {
    
            // console.log (whiteArray_e[i].position.x)
            // console.log ((550-(400)/8*count_pn_num)*s_x)

            //huhu
            
            //mark
             whiteArray_e[i].stop();
             blackArray_h[k].stop();
             whiteArray_e[i].noShow();
             blackArray_h[k].noShow();
              // whiteArray[i].update();
              // blackArray[k].update();
    
    
            middle_position_Array[disappear_count] = p5.Vector.div(p5.Vector.add(blackArray_h[k].position, whiteArray_e[i].position),2);
            //original dots
            // whiteArray[i].seek(middle_position_Array[disappear_count]);
            // blackArray[k].seek(middle_position_Array[disappear_count]);
  
         
  
  //effects
     
             disappearArray[disappear_count] =(new Appear( middle_position_Array[disappear_count].x,  middle_position_Array[disappear_count].y,10,1, disappear_count))
             disappearArray_2[disappear_count] =(new Appear(whiteArray_e[i].position.x, whiteArray_e[i].position.y,10,2, disappear_count))
             disappearArray_2_pair[disappear_count] =(new Appear(blackArray_h[k].position.x, blackArray_h[k].position.y,10,3, disappear_count))
  
            disappear_count++
           

            console.log("diss2")

        let b = whiteArray_e[i].position.y;
       
        var vehicle = new Vehicle((170)*s_x, b, 10, "h", 1)
        vehicle.botz = blackArray_h[k].botz
        blackArray_h.push(vehicle);
  
        blackID_h.push(global_id);
        global_id += 1;

        var vehicle2 = new Vehicle((930)*s_x, b, 10, "e", 0)
        vehicle2.botz = whiteArray_e[i].botz
        whiteArray_e.push(vehicle2);

        // whiteArray_e.push(new Vehicle((930)*s_x, b, 10, "e", 0));
        // whiteID_e.push(global_id);
        global_id += 1;

          whiteArray.splice(i, 1);
             blackArray.splice(k, 1);

             break
         
           }
       }
    
        }

      }

    

    // temp = slider_temperature.value();


    // stroke(125, 241, 148,100);
    // strokeWeight(1);
    // // fill(25,25,25,100)
    // // rect((970-350+20)*s_x,(790-200+80)*s_y,(330-20)*s_x,(190-80)*s_y);

    // noFill();
    // rect((10+100+70+change_square)*s_x,(10+385)*s_y,(940-change_length-70)*s_x,(770/2)*s_y);

    // fill(30)
    // //one
    // rect((10+100+70+change_square)*s_x,(10)*s_y,(940-change_length-70)*s_x,(770/4)*s_y);

    // //two
    // rect((10+100+70+change_square)*s_x,(10+385/2)*s_y,(940-change_length-70)*s_x,(770/4)*s_y);

    // // line((10+100+70+change_square + (940-change_length-70)/2)*s_x,(10+385/2)*s_y, (10+100+70+change_square + (940-change_length-70)/2)*s_x, (10+385/2+770/4)*s_y)

    // noFill();

    //plot graph///////////////
    ///up graph x:190-(950-(950-190)/point_count y:down171.25-40up
 
noFill();


    //coordinates
      //up
      stroke(102, 194, 255,180);

//       //horizon



///////////new box graphing

noStroke()
fill(254,246,182,100)

// rect_density = 1.6*Math.pow(10,-13)*hole_add_new-V_applied_p/10+V_applied_n/10

rect_density = 10+0.7*Math.pow(10,-13)*hole_add_new-V_applied_p/2+V_applied_n/2

/////

let rect_density_new = Math.pow(10,-13)*hole_add_new
// if (V_applied_p>=20) {
//   setFactor(1000)
// } else {

//   setFactor(1)
// }


let V_built = 0.052*Math.log(hole_add_new/Math.pow(10,10))
// console.log(V_built)
X_n = 5811*Math.pow(Math.log(hole_add_new/Math.pow(10,10))/(Math.pow(10,6)*hole_add_new),1/2)*Math.pow(10,6)
// X_n = Math.log(hole_add_new/Math.pow(10,10))
// let array_band = []
for (var i = 0; i<50; i++) {

  ///box length 300-800
  stroke(125, 241, 148,100);
  noFill()
  // rect((150+(800)/50*i)*s_x,(10)*s_y,(800)/50*(i)*s_x,(770/4)*s_y);

  // array_band[i] = -7.76*Math.pow(10,-16)*hole_add_new*Math.pow((X_n*100+(150+(800)/50*i-550)*s_x),2)/100
  // array_band[i] = -Math.pow((count_n/(X_n*100)),2)*V_built*100+(7.76*Math.pow(10,-16)*hole_add_new*Math.pow((X_n*100-(150+(800)/50*i-550)*s_x),2)/100)
// array_band[i] = -Math.pow((count_n/(X_n*100)),2)*V_built*100+(7.76*Math.pow(10,-16)*hole_add_new*Math.pow((X_n*100-(150+(800)/20*i-550)*s_x),2)/100)
  // if ((150+(800)/50*i)*s_x <((550-(400)/8*count_pn_num))*s_x ){
  //   array_band[i] = 0

  // } 
  // if ( ((550-(400)/8*count_pn_num))*s_x <= (150+(800)/50*i)*s_x && ((150+(800)/50*i)*s_x <(550)*s_x) ){
  //   //array_band[i] = -7.76*Math.pow(10,-16)*hole_add*Math.pow((145+(150+(800)/50*i-550)*s_x),2)*Math.pow(10,-2)
  //   array_band[i] = -7.76*Math.pow(10,-16)*hole_add_new*Math.pow((X_n*100/2+(150+(800)/50*i-550)*s_x),2)/100

  //   //array_band[i] = -7.76*Math.pow(10,-16)*hole_add*Math.pow((145+x),2)
  // }
  //  if ( (550)*s_x <= (150+(800)/50*i)*s_x && (  (150+(800)/50*i)*s_x <((550+(400)/8*count_pn_num))*s_x )){
  
  //   array_band[i] = -Math.pow((count_n/(X_n*100)),2)*V_built*100+(7.76*Math.pow(10,-16)*hole_add_new*Math.pow((X_n*100/2-(150+(800)/50*i-550)*s_x),2)/100)
 
  // } 
  //  if ( ((550+(400)/8*count_pn_num))*s_x <= (150+(800)/50*i)*s_x  ){
  //   array_band[i] = -Math.pow((count_n/(X_n*100)),2)*V_built*100
  // }


}





for (var i = 0; i<100; i++) {

  //(800)/100*i
  if ((800)/100*i>(550-(400)/8*count_pn_num) && (800)/100*i<(550)){
    
    array_band1[i-19]= -Math.pow(((800)/100*i-(550-(400)/8*count_pn_num))/((400)/8*count_pn_num)*(2*rect_density/(count_pn_num*100)*177*2) ,1)/5/3
  }  else if (i==50) {
    // array_band1[50]= Math.pow((2*rect_density/(X_n*100)*count_n*2),2)/20
  } else {
    array_band1[i]= 0
  } 

  // if (i>50) {
  //   array_band1[i]=  array_band1[100-i]
  // }
//  triangle((550-(400)/8*count_pn_num)*s_x, (10+385/2+96.25)*s_y, (550+(400)/8*count_pn_num)*s_x, (10+385/2+96.25)*s_y, (550)*s_x, (10+385/2+96.25+  2*rect_density/(X_n*100)*count_n*2)*s_y)

}

for (var i = 0; i<100; i++) {

  if (i>50) {
    array_band1[i]=  array_band1[100-i]
  } else if (i=50){
    array_band1[i]=  -Math.pow((2*rect_density/(count_pn_num*100)*177*2) ,1)/5/3
  }
//  triangle((550-(400)/8*count_pn_num)*s_x, (10+385/2+96.25)*s_y, (550+(400)/8*count_pn_num)*s_x, (10+385/2+96.25)*s_y, (550)*s_x, (10+385/2+96.25+  2*rect_density/(X_n*100)*count_n*2)*s_y)

}

for (var i = 0; i<100; i++) {

  array_band1[i] = array_band1[i]/3

}

for (var i = 0; i<100; i++) {
  array_band2[i] = 0; // initialize to 0

  if (i > 0) { // run the inner loop only if i > 0
    for (var k = 0; k<i; k++) {
      array_band2[i] = array_band2[i] + array_band1[k];
    }
  }
}



// for (var i = 0; i<50; i++) {
//   array_band2[i] = -7.76*Math.pow(10,-16)*hole_add_new*Math.pow((X_n*100/2+(150+(800)/50*i-550)*s_x),2)/100
// //curve down
// }

// for (var i = 0; i<50; i++) {
//   array_band3[i] = -Math.pow((count_n/(X_n*100)),2)*V_built*100+(7.76*Math.pow(10,-16)*hole_add_new*Math.pow((X_n*100/2-(150+(800)/50*i-550)*s_x),2)/100)
// //green curve up
// }


for (var i = 0; i<100; i++) {
  array_band3[i] = array_band2[i]


}

// for (var i = 0; i<50; i++) {
//   array_band4[i] = -Math.pow((count_n/(X_n*100)),2)*V_built*100

//   //purple
// }

/////////new dot on graph 
// for (var k = 0; k < whiteArray.length; k++) {

// whiteArray_dot

// }



 
///
stroke(254,246,182)
// beginShape();

//   for (var k = 0; k < 100; k++) {
 
//       curveVertex((150+(800)/100*k)*s_x,(171.25-array_band1[k])*s_y)

//   }
// endShape();
// noStroke()
// ///
// stroke(300,246,182)
for (var k = 0; k < 100; k++) {
  //yellow curve
       line_yellow[k] = [(150+(800)/100*k)*s_x,(171.25-array_band2[k]-100)*s_y]
 
   }

   for (var k = 0; k < 100; k++) {
    //yellow curve
         line_green[k] = [(150+(800)/100*k)*s_x,(+171.25-array_band3[k]-30)*s_y]
   
         //  let a = -(e_field_c)/(550*s_x-((550-(400)/8*count_pn_num)*s_x))*this.position.x+(((550-(400)/8*count_pn_num))*s_x*e_field_c)/((550*s_x-((550-(400)/8*count_pn_num)*s_x)))

     }

// beginShape();

  for (var k = 0; k < 100; k++) {
 //yellow curve
      // curveVertex((150+(800)/100*k)*s_x,(171.25-array_band2[k]-100)*s_y)

      line_yellow_data[k] = { x: (150+(800)/100*k)*s_x, y: (171.25-array_band2[k]-100)*s_y};
  }
// endShape();
// noStroke()
// ///
// stroke(125, 241, 148)
// beginShape();

  for (var k = 0; k < 100; k++) {
    //green curve
 
      // curveVertex((150+(800)/100*k)*s_x,(-30+171.25-array_band3[k]-30)*s_y)
      line_green_data[k] = { x: (150+(800)/100*k)*s_x, y: (171.25-array_band3[k]-30-30)*s_y};


  }
// endShape();
// noStroke()
// ///
// stroke(200,146,182)
// beginShape();




//   for (var k = 0; k < 50; k++) {
 
//       curveVertex((150+(800)/50*k)*s_x,(171.25-array_band4[k])*s_y)

//   }
// endShape();
// noStroke()



//   }


//box

// if ((this.position.x > 235.6*s_x) && (this.position.x < (170+524.4)*s_x))

///red box 
///middle 550
//150 

    stroke(255, 58, 23,210);
    context_1.beginPath();
        context_1.setLineDash([10,10]);
        context_1.rect((550-(400)/8*count_pn_num)*s_x,(10+385)*s_y,((400)/8*count_pn_num*2)*s_x,(770/2)*s_y);
        // context_1.rect((550-(400)/8*count_pn_num)*s_x,(10+385)*s_y,((400)/8*count_pn_num*2)*s_x,(770/2)*s_y);
        context_1.closePath();
    context_1.stroke();
    context_1.setLineDash([]);




    



// text("Hole",(885)*s_x,(43)*s_y)
// text("Electron",(885)*s_x,(53)*s_y)
// text("0",(158)*s_x,(172)*s_y)
// text("0",(158)*s_x,(298+70)*s_y)

// text("10\u00B9\u2070",(155-3)*s_x,(172+12)*s_y)


// text("10\u00B9\u2070",(153-3)*s_x,(298+70+12)*s_y)

// text("10\u00B9\u2074",(153)*s_x,(298+70-120)*s_y)
 

stroke(125, 241, 148,100);


//    //green
//    stroke(125, 241, 148)
// line((10+100+70+change_square+940-change_length-70-760-20+750-60)*s_x,40*s_y,(10+100+70+change_square+790-60)*s_x,40*s_y)

// //yellow
// stroke(254,246,182)
// line((10+100+70+change_square+940-change_length-70-760-20+750-60)*s_x,50*s_y,(10+100+70+change_square+790-60)*s_x,50*s_y)




//  // Set the circle properties
//  fill(255, 0, 0); // Red color
//  noStroke();
 
//  // Loop through each data point and draw a circle
//  for (let point of line_yellow_data) {
//    circle(point.x, point.y, 4); // Using diameter of 20 (radius of 10)
//  }


  // Set the circle properties
  fill(0, 255, 0); // green
  noStroke();
  
  // Loop through each data point and draw a circle
  // for (let point of line_green_data) {
  //   circle(point.x, point.y, 4); // Using diameter of 20 (radius of 10)
  // }



  stroke(125, 241, 148,100);
  strokeWeight(1);
  // fill(25,25,25,100)
  // rect((970-350+20)*s_x,(790-200+80)*s_y,(330-20)*s_x,(190-80)*s_y);

  noFill();
  rect((10+100+70+change_square)*s_x,(10+385)*s_y,(940-change_length-70)*s_x,(770/2)*s_y);

  fill(30)
  //one
  rect((10+100+70+change_square)*s_x,(10)*s_y,(940-change_length-70)*s_x,(770/4)*s_y);

  //two
  rect((10+100+70+change_square)*s_x,(10+385/2)*s_y,(940-change_length-70)*s_x,(770/4)*s_y);

  noFill();

  //plot graph///////////////
  ///up graph x:190-(950-(950-190)/point_count y:down171.25-40up

noFill();


  //coordinates
    //up
    stroke(102, 194, 255,180);

    //horizon
line((190)*s_x,171.25*s_y,(10+100+70+change_square+790)*s_x,171.25*s_y)


    //vertical
line((190)*s_x,40*s_y, (190)*s_x, 171.25*s_y)


//arrow up right 
line((10+100+70+change_square+940-change_length-70-20+4)*s_x,(171.25+3)*s_y,(10+100+70+change_square+790)*s_x,(171.25)*s_y)
line((10+100+70+change_square+940-change_length-70-20+4)*s_x,(171.25-3)*s_y,(10+100+70+change_square+790)*s_x,(171.25)*s_y)
//arrow up up
line((10+100+70+change_square+940-change_length-70-760-20-3+20)*s_x,46*s_y, (10+100+70+change_square+940-change_length-70-760-20+20)*s_x, (40)*s_y)
line((10+100+70+change_square+940-change_length-70-760-20+3+20)*s_x,46*s_y, (10+100+70+change_square+940-change_length-70-760-20+20)*s_x, (40)*s_y)


//down
    //horizon
    line((190)*s_x,(10+385/2+96.25+70)*s_y,(10+100+70+change_square+790)*s_x,(10+385/2+96.25+70)*s_y)
    //vertical
line((190)*s_x,(10+385/2+96.25-70)*s_y, (190)*s_x, (10+385/2+96.25+70)*s_y)

//arrow up 
line((10+100+70+change_square+940-change_length-70-20+4)*s_x,(10+385/2+96.25+3+70)*s_y,(10+100+70+change_square+790)*s_x,(10+385/2+96.25+70)*s_y)
line((10+100+70+change_square+940-change_length-70-20+4)*s_x,(10+385/2+96.25-3+70)*s_y,(10+100+70+change_square+790)*s_x,(10+385/2+96.25+70)*s_y)
//arrow down up
line((10+100+70+change_square+940-change_length-70-760)*s_x,(10+385/2+96.25-70)*s_y, (10+100+70+change_square+940-change_length-70-760-3)*s_x, (10+385/2+96.25-60-5)*s_y)
line((10+100+70+change_square+940-change_length-70-760)*s_x,(10+385/2+96.25-70)*s_y, (10+100+70+change_square+940-change_length-70-760+3)*s_x, (10+385/2+96.25-60-5)*s_y)



if (switch_1 ==2) {
  // Reset the arrays to be empty before starting the counting
  array_plot_e = new Array(point_count).fill().map(() => []);
  array_plot_e_0 = [];
  array_plot_h = new Array(point_count).fill().map(() => []);
  array_plot_h_0 = [];
for (let i = 0; i < whiteArray.length; i++) {


  for (let k = 0; k<point_count; k++){
    if ((whiteArray[i].position.x <=((190+(950-190)/point_count*(k+1))*s_x) && (whiteArray[i].position.x >=((190+(950-190)/point_count*k)*s_x))) ){
     
      
      array_plot_e[k].push(whiteArray[i])
      // console.log(array_plot)
  }
  }

  if ((whiteArray[i].position.x <=(190*s_x)) && (whiteArray[i].position.x >=((150)*s_x))&&(whiteArray[i].show ==1 )){
     
      
    array_plot_e_0.push(whiteArray[i])
    
    // console.log(array_plot_0.length)
}
}

for (let i = 0; i < whiteArray_e.length; i++) {


  for (let k = 0; k<point_count; k++){
    if ((whiteArray_e[i].position.x <=((190+(950-190)/point_count*(k+1))*s_x) && (whiteArray_e[i].position.x >=((190+(950-190)/point_count*k)*s_x))) ){
     
      
      array_plot_e[k].push(whiteArray_e[i])
      // console.log(array_plot)
  }
  }

  if ((whiteArray_e[i].position.x <=(190*s_x)) && ((whiteArray_e[i].position.x >=((150)*s_x)) && (whiteArray_e[i].show ==1 ))){
     
      
    array_plot_e_0.push(whiteArray_e[i])
    
    // console.log(array_plot_0.length)
}
}

///////////

for (let i = 0; i < blackArray.length; i++) {


  for (let k = 0; k<point_count; k++){
    if ((blackArray[i].position.x <=((190+(950-190)/point_count*(k+1))*s_x) && (blackArray[i].position.x >=((190+(950-190)/point_count*k)*s_x))) ){
     
      
      array_plot_h[k].push(blackArray[i])
      // console.log(array_plot)
  }
  }

  if ((blackArray[i].position.x <=(190*s_x)) && (blackArray[i].position.x >=((150)*s_x)&& (blackArray[i].show ==1))){
     
      
    array_plot_h_0.push(blackArray[i])
    
    // console.log(array_plot_0.length)
}
}

// blackArray_h

for (let i = 0; i < blackArray_h.length; i++) {


  for (let k = 0; k<point_count; k++){
    if ((blackArray_h[i].position.x <=((190+(950-190)/point_count*(k+1))*s_x) && (blackArray_h[i].position.x >=((190+(950-190)/point_count*k)*s_x))) ){
     
      
      array_plot_h[k].push(blackArray_h[i])
      // console.log(array_plot)
  }
  }

  if ((blackArray_h[i].position.x <=(190*s_x)) && (blackArray_h[i].position.x >=((150)*s_x))&&(blackArray_h[i].show ==1)){
     
      
    array_plot_h_0.push(blackArray_h[i])
    
    // console.log(array_plot_0.length)
}
}



///////

fill(255)
noStroke()
for (let i = 0; i < new_array_plot_h_set_count.length; i++) {

      // Get the first and last 'y' values
const firstY = new_array_plot_h_set_count[0].y;
const lastY = new_array_plot_h_set_count[new_array_plot_h_set_count.length - 1].y;
  
      // Find the maximum 'y' value
const maxYY = Math.max(firstY, lastY);
const minYY = Math.min(firstY, lastY);


    // Determine the order of magnitude of the maxY value
const orderOfMagnitude = Math.floor(Math.log10(maxYY));

    // The factor is 10 to the power of (order of magnitude - 1)
const factor_ = Math.pow(10, orderOfMagnitude-1 );
// console.log (orderOfMagnitude)


 
  // if (V_applied_p ==0) {
  //   ellipse((550+(400)/8*new_array_plot_h_set_count[i].x/10)*s_x, 368 * s_y,3);
  

  // } else {
  //   const diff = maxYY-minYY
  //   const xyfactor = (171.25-55)/diff
  //   console.log (xyfactor)


  //   ellipse((550+(400)/8*new_array_plot_h_set_count[i].x/10)*s_x, 368 * s_y-(171.25-55)*(new_array_plot_h_set_count[i].y-minYY)/diff,3);
  
  // }

  noFill()
  stroke(125, 241, 148)

  if (V_applied_p == 0) {
    // Draw ellipses as before
    beginShape(); // Start the shape

    // Calculate first point's coordinates for control point
    let firstX = (550 + (400 / 8) * new_array_plot_h_set_count[0].x / 10) * s_x;
    let firstY = 368 * s_y;
    
    // Duplicate the first point as a control point
    curveVertex(firstX, firstY);
    
    // Add all points as curve vertices
    for (let i = 0; i < new_array_plot_h_set_count.length; i++) {
      let x = (550 + (400 / 8) * new_array_plot_h_set_count[i].x / 10) * s_x;
      let y = 368 * s_y;
      curveVertex(x, y);
    }
    
    // Calculate last point's coordinates for control point
    let lastX = (550 + (400 / 8) * new_array_plot_h_set_count[new_array_plot_h_set_count.length - 1].x / 10) * s_x;
    let lastY = 368 * s_y;
    
    // Duplicate the last point as a control point
    curveVertex(lastX, lastY);
    
    // Add an extra control point at the end if there are multiple points
    if (new_array_plot_h_set_count.length > 1) {
      let secondLastX = (550 + (400 / 8) * new_array_plot_h_set_count[new_array_plot_h_set_count.length - 2].x / 10) * s_x;
      let secondLastY = 368 * s_y;
      curveVertex(secondLastX, secondLastY);
    } else {
      curveVertex(lastX, lastY); // Duplicate last point if there's only one point
    }
    
    endShape(); // End the shape


    checkMouseHoverForStraightLine();

    
    
  } else {
    const diff = maxYY - minYY;
    const xyfactor = (171.25 - 55) / diff;
  
    beginShape(); // Start the shape
  
    // Calculate first point's coordinates
    let firstX = (550 + (400 / 8) * new_array_plot_h_set_count[0].x / 10) * s_x;
    let firstY = 368 * s_y - (171.25 - 55) * (new_array_plot_h_set_count[0].y - minYY) / diff;
  
    // Duplicate first point as a control point
    curveVertex(firstX, firstY);
  
    // Add all points as curve vertices
    for (let i = 0; i < new_array_plot_h_set_count.length; i++) {
      let x = (550 + (400 / 8) * new_array_plot_h_set_count[i].x / 10) * s_x;
      let y = 368 * s_y - (171.25 - 55) * (new_array_plot_h_set_count[i].y - minYY) / diff;
      curveVertex(x, y);
    }
  
    // Calculate last point's coordinates
    let lastX = (550 + (400 / 8) * new_array_plot_h_set_count[new_array_plot_h_set_count.length - 1].x / 10) * s_x;
    let lastY = 368 * s_y - (171.25 - 55) * (new_array_plot_h_set_count[new_array_plot_h_set_count.length - 1].y - minYY) / diff;
  
    // Duplicate last point as a control point
    curveVertex(lastX, lastY);
  
    // Add an extra control point at the end
    if (new_array_plot_h_set_count.length > 1) {
      let secondLastX = (550 + (400 / 8) * new_array_plot_h_set_count[new_array_plot_h_set_count.length - 2].x / 10) * s_x;
      let secondLastY = 368 * s_y - (171.25 - 55) * (new_array_plot_h_set_count[new_array_plot_h_set_count.length - 2].y - minYY) / diff;
      curveVertex(secondLastX, secondLastY);
    } else {
      curveVertex(lastX, lastY); // Duplicate last point if there's only one point
    }
  
    endShape(); // End the shape

    checkMouseHoverForNewCurve(minYY, diff);
  }
  
  

  // if (V_applied_p ==0) {
  //   ellipse((550+(400)/8*new_array_plot_e_set_count[i].x/10)*s_x, 171.25 * s_y,3);
    
  //   // text((minYY).toExponential(1), 250 * s_x, 181.25 * s_y);

  //   noStroke();
  //   fill(102, 194, 255, 10);
  //   textSize(12);
  //   text(minYY.toExponential(1)+"  /cm\u00B3", 212 * s_x, (181.25-15) * s_y);
  //   text(minYY.toExponential(1)+"  /cm\u00B3", 212 * s_x, (181.25-15) * s_y+197.5*s_y);
  //   // text((maxYY).toExponential(1), 250 * s_x, 55 * s_y);

  // } else {
  //   const diff = maxYY-minYY
  //   const xyfactor = (171.25-55)/diff
  //   console.log (xyfactor)


  //   ellipse((550+(400)/8*new_array_plot_e_set_count[i].x/10)*s_x, 171.25 * s_y-(171.25-55)*(new_array_plot_e_set_count[i].y-minYY)/diff,3);
  //   // text((minYY).toExponential(1), 250 * s_x, 181.25 * s_y);

  //   // text((maxYY).toExponential(1), 250 * s_x, 55 * s_y);
  // }

  // if (V_applied_p == 0) {
  //   // Draw ellipses as before
  //   beginShape(); // Start the shape

  //   // Calculate first point's coordinates for control point
  //   let firstX = (550 + (400 / 8) * new_array_plot_e_set_count[0].x / 10) * s_x;
  //   let firstY = 171.25 * s_y
    
  //   // Duplicate the first point as a control point
  //   curveVertex(firstX, firstY);
    
  //   // Add all points as curve vertices
  //   for (let i = 0; i < new_array_plot_e_set_count.length; i++) {
  //     let x = (550 + (400 / 8) * new_array_plot_e_set_count[i].x / 10) * s_x;
  //     let y = 171.25 * s_y
  //     curveVertex(x, y);
  //   }
    
  //   // Calculate last point's coordinates for control point
  //   let lastX = (550 + (400 / 8) * new_array_plot_e_set_count[new_array_plot_e_set_count.length - 1].x / 10) * s_x;
  //   let lastY = 171.25 * s_y
    
  //   // Duplicate the last point as a control point
  //   curveVertex(lastX, lastY);
    
  //   // Add an extra control point at the end if there are multiple points
  //   if (new_array_plot_e_set_count.length > 1) {
  //     let secondLastX = (550 + (400 / 8) * new_array_plot_e_set_count[new_array_plot_e_set_count.length - 2].x / 10) * s_x;
  //     let secondLastY = 171.25 * s_y
  //     curveVertex(secondLastX, secondLastY);
  //   } else {
  //     curveVertex(lastX, lastY); // Duplicate last point if there's only one point
  //   }
    
  //   endShape(); // End the shape
    
  // } else {
  //   const diff = maxYY - minYY;
  //   const xyfactor = (171.25 - 55) / diff;
  
  //   beginShape(); // Start the shape
  
  //   // Calculate first point's coordinates
  //   let firstX = (550 + (400 / 8) * new_array_plot_e_set_count[0].x / 10) * s_x;
  //   let firstY = 368 * s_y - (171.25 - 55) * (new_array_plot_e_set_count[0].y - minYY) / diff;
  
  //   // Duplicate first point as a control point
  //   curveVertex(firstX, firstY);
  
  //   // Add all points as curve vertices
  //   for (let i = 0; i < new_array_plot_e_set_count.length; i++) {
  //     let x = (550 + (400 / 8) * new_array_plot_e_set_count[i].x / 10) * s_x;
  //     let y = 368 * s_y - (171.25 - 55) * (new_array_plot_e_set_count[i].y - minYY) / diff;
  //     curveVertex(x, y);
  //   }
  
  //   // Calculate last point's coordinates
  //   let lastX = (550 + (400 / 8) * new_array_plot_e_set_count[new_array_plot_e_set_count.length - 1].x / 10) * s_x;
  //   let lastY = 368 * s_y - (171.25 - 55) * (new_array_plot_e_set_count[new_array_plot_e_set_count.length - 1].y - minYY) / diff;
  
  //   // Duplicate last point as a control point
  //   curveVertex(lastX, lastY);
  
  //   // Add an extra control point at the end
  //   if (new_array_plot_e_set_count.length > 1) {
  //     let secondLastX = (550 + (400 / 8) * new_array_plot_e_set_count[new_array_plot_e_set_count.length - 2].x / 10) * s_x;
  //     let secondLastY = 368 * s_y - (171.25 - 55) * (new_array_plot_e_set_count[new_array_plot_e_set_count.length - 2].y - minYY) / diff;
  //     curveVertex(secondLastX, secondLastY);
  //   } else {
  //     curveVertex(lastX, lastY); // Duplicate last point if there's only one point
  //   }
  
  //   endShape(); // End the shape
  // }



}



for (let i = 0; i < new_array_plot_e_set_count.length; i++) {
  // Get the first and last 'y' values
const firstY = new_array_plot_e_set_count[0].y;
const lastY = new_array_plot_e_set_count[new_array_plot_e_set_count.length - 1].y;

 // Find the maximum 'y' value
const maxYY = Math.max(firstY, lastY);
const minYY = Math.min(firstY, lastY);



noFill()
stroke(300,246,182)

if (V_applied_p == 0) {
// Draw a smooth curve for V_applied_p == 0
beginShape();

// First control point
let firstX = (550 + (400 / 8) * new_array_plot_e_set_count[0].x / 10) * s_x;
let firstY = 171.25 * s_y;
curveVertex(firstX, firstY);

// Add all points as curve vertices
for (let i = 0; i < new_array_plot_e_set_count.length; i++) {
let x = (550 + (400 / 8) * new_array_plot_e_set_count[i].x / 10) * s_x;
let y = 171.25 * s_y;
curveVertex(x, y);
}

// Last control point
let lastX = (550 + (400 / 8) * new_array_plot_e_set_count[new_array_plot_e_set_count.length - 1].x / 10) * s_x;
let lastY = 171.25 * s_y;
curveVertex(lastX, lastY);

endShape();

checkMouseHoverForNewStraightLine()

// Draw text for minYY
noStroke();
fill(102, 194, 255, 10);
textSize(12);
// text(minYY.toExponential(1) + " /cm\u00B3", 212 * s_x, (181.25 - 15) * s_y);
// text(minYY.toExponential(1) + " /cm\u00B3", 212 * s_x, (181.25 - 15) * s_y + 197.5 * s_y);
 

 // Draw the tick marks and labels

 for (let i = -2; i <= 2; i++) {
  textSize(12);
  let middleX = 550 * s_x;
  let tickSpacing = (400 / 8) * s_x*3; // Spacing between ticks
  let tickLength = 10; // Length of the tick marks
  let yPosition = (10+385/2+96.25+70)*s_y; // Y position for the horizontal line
 

   let tickX = middleX + i * tickSpacing;
   

   noFill();
   stroke(102, 194, 255, 120);
   // Draw the tick mark
   line(tickX, yPosition, tickX, yPosition + tickLength / 2);
   line(tickX, 171.25*s_y, tickX, 171.25*s_y + tickLength / 2);

   
   noStroke();
 fill(102, 194, 255, 5);
 textSize(12);
   // Draw the label
   text(i*3+"\u00B5m", tickX-5, yPosition + 17);
   text(i*3+"\u00B5m", tickX-5, 171.25*s_y + 17);
 }  
// // Draw the tick mark

// const startY = 171.25 * s_y;  // Start of the tick range
//   const endY = 55 * s_y;        // End of the tick range
//   const numTicks = 4;           // Number of ticks excluding the bottom one
//   const tickLength = 7 * s_x;   // Length of each tick mark, adjust as needed

//   for (let i = 1; i <= numTicks; i++) {
//     // Calculate the y-coordinate for each tick
//     const tickY = startY + (endY - startY) * i / (numTicks + 1);

//     // Draw the tick mark
//     noFill();
//     stroke(102, 194, 255, 120);
//     line(190 * s_x, tickY, 190 * s_x + tickLength, tickY);
//     line(190 * s_x, tickY + 197.5 * s_y, 190 * s_x + tickLength, tickY + 197.5 * s_y);
//   }

const diff = 4*Math.pow(10,7) - minYY;
const scale = (171.25 - 55) / diff;
const tickMarks = calculateTickMarks(minYY, 4*Math.pow(10,7));

 // Render text for minYY
 const minYTickY = 171.25 * s_y - scale * (minYY - minYY);
//  noStroke();
//  fill(102, 194, 255, 10);
//  textSize(12);
//  text(minYY.toExponential(1)+"  /cm\u00B3", 212 * s_x, minYTickY - 5);
//  text(minYY.toExponential(1)+"  /cm\u00B3", 212 * s_x, minYTickY - 5+197.5*s_y);

 for (const tick of tickMarks) {
   const tickY = 171.25 * s_y - scale * (tick - minYY);
   if (tick === minYY) {
     // Skip the minimum value for tick mark
     // continue;
     // noFill();
     // stroke(102, 194, 255, 120);
     // line(100 * s_x, tickY+245, 200 * s_x, tickY+245);
   } else {
   // Draw the tick mark
   noFill();
   stroke(102, 194, 255, 120);
   line(190 * s_x, tickY, 197 * s_x, tickY);
   line(190 * s_x, tickY+197.5*s_y, 197 * s_x, tickY+197.5*s_y);

   // Add a label for the tick mark
   noStroke();
   fill(102, 194, 255, 10);
   text(tick.toExponential(1)+"  /cm\u00B3", 212 * s_x, tickY + 5);
   text(tick.toExponential(1)+"  /cm\u00B3", 212 * s_x, tickY + 5+197.5*s_y);

   
   }
     


 }




} else {

  // Draw the tick marks and labels


// Draw a smooth curve for V_applied_p != 0
const diff = maxYY - minYY;
const xyfactor = (171.25 - 55) / diff;

beginShape();

// vertex(190 * s_x, 171.25 * s_y)

// curveVertex(190 * s_x, 171.25 * s_y);
// Calculate first point's coordinates
let firstX = (550 + (400 / 8) * new_array_plot_e_set_count[0].x / 10) * s_x;
let firstY = 171.25 * s_y - (171.25 - 55) * (new_array_plot_e_set_count[0].y - minYY) / diff;
curveVertex(firstX, firstY);

// Add all points as curve vertices
for (let i = 0; i < new_array_plot_e_set_count.length; i++) {
let x = (550 + (400 / 8) * new_array_plot_e_set_count[i].x / 10) * s_x;
let y = 171.25 * s_y - (171.25 - 55) * (new_array_plot_e_set_count[i].y - minYY) / diff;
curveVertex(x, y);
}

// Last control point
let lastX = (550 + (400 / 8) * new_array_plot_e_set_count[new_array_plot_e_set_count.length - 1].x / 10) * s_x;
let lastY = 171.25 * s_y - (171.25 - 55) * (new_array_plot_e_set_count[new_array_plot_e_set_count.length - 1].y - minYY) / diff;
curveVertex(lastX, lastY);


// curveVertex(190 * s_x, 171.25 * s_y);
// vertex(190 * s_x, 171.25 * s_y)

endShape();

checkMouseHover(minYY,diff);

for (let i = -2; i <= 2; i++) {
  textSize(12);
  let middleX = 550 * s_x;
  let tickSpacing = (400 / 8) * s_x*3; // Spacing between ticks
  let tickLength = 10; // Length of the tick marks
  let yPosition = (10+385/2+96.25+70)*s_y; // Y position for the horizontal line
 

   let tickX = middleX + i * tickSpacing;
   

   noFill();
   stroke(102, 194, 255, 120);
   // Draw the tick mark
   line(tickX, yPosition, tickX, yPosition + tickLength / 2);
   line(tickX, 171.25*s_y, tickX, 171.25*s_y + tickLength / 2);

   
   noStroke();
 fill(102, 194, 255, 5);
 textSize(12);
   // Draw the label
   text(i*3+"\u00B5m", tickX-5, yPosition + 17);
   text(i*3+"\u00B5m", tickX-5, 171.25*s_y + 17);
 }  
}


}



  // Reset the arrays to be empty before starting the counting
  array_plot_e_set = new Array(point_count).fill().map(() => []);
  array_plot_e_0_set = [];
  array_plot_h_set = new Array(point_count).fill().map(() => []);
  array_plot_h_0_set = [];
  new_array_plot_e_set_count = []



  for (let k = -72; k < Math.round(-count_pn_num*10); k++) {
    // let x = (190 + (950 - 190) / point_count * (k + 1))*s_x;
    let x = k;

    let n = Math.pow(10,20)/hole_add_new+Math.pow(10,20)/hole_add_new*(Math.exp(V_applied_p/40/0.026)-1)*Math.exp(k/10+((count_pn_num)))
    // console.log (n+"hellpppppppp")
    // if (x<(550-((400)/8*X_n)*s_x)){

      new_array_plot_e_set_count.push({ x: x, y: (n)*1 });
    // }

}

stroke(125, 241, 148,100);

textSize(17)
noStroke()
strokeWeight(1)
fill(255);
///////////////////

fill(102, 194, 255,180)


textSize(14);




for (let i = 0; i < new_array_plot_e_set_count.length; i++) {

      // Get the first and last 'y' values
const firstY = new_array_plot_e_set_count[0].y;
const lastY = new_array_plot_e_set_count[new_array_plot_e_set_count.length - 1].y;
  
      // Find the maximum 'y' value
const maxYY = Math.max(firstY, lastY);
const minYY = Math.min(firstY, lastY);




    // Determine the order of magnitude of the maxY value
const orderOfMagnitude = Math.floor(Math.log10(maxYY));

    // The factor is 10 to the power of (order of magnitude - 1)
const factor_ = Math.pow(10, orderOfMagnitude-1 );
// console.log (orderOfMagnitude)

fill(255);
 
  // if (V_applied_p ==0) {
  //   ellipse((550+(400)/8*new_array_plot_e_set_count[i].x/10)*s_x, 171.25 * s_y,3);
    
  //   // text((minYY).toExponential(1), 250 * s_x, 181.25 * s_y);

  //   noStroke();
  //   fill(102, 194, 255, 10);
  //   textSize(12);
  //   text(minYY.toExponential(1)+"  /cm\u00B3", 212 * s_x, (181.25-15) * s_y);
  //   text(minYY.toExponential(1)+"  /cm\u00B3", 212 * s_x, (181.25-15) * s_y+197.5*s_y);
  //   // text((maxYY).toExponential(1), 250 * s_x, 55 * s_y);

  // } else {
  //   const diff = maxYY-minYY
  //   const xyfactor = (171.25-55)/diff
  //   console.log (xyfactor)


  //   ellipse((550+(400)/8*new_array_plot_e_set_count[i].x/10)*s_x, 171.25 * s_y-(171.25-55)*(new_array_plot_e_set_count[i].y-minYY)/diff,3);
  //   // text((minYY).toExponential(1), 250 * s_x, 181.25 * s_y);

  //   // text((maxYY).toExponential(1), 250 * s_x, 55 * s_y);
  // }

 
  

  fill(102, 194, 255,180)
  // const tickMarks = calculateTickMarks(minYY, maxYY);

   // Calculate the y-coordinates for the tick marks
   if (V_applied_p != 0) {
    const diff = maxYY - minYY;
    const scale = (171.25 - 55) / diff;
    const tickMarks = calculateTickMarks(minYY, maxYY);
  
    // Render text for minYY
    const minYTickY = 171.25 * s_y - scale * (minYY - minYY);
    // noStroke();
    // fill(102, 194, 255, 10);
    // textSize(12);
    // text(minYY.toExponential(1)+"  /cm\u00B3", 212 * s_x, minYTickY - 5);
    // text(minYY.toExponential(1)+"  /cm\u00B3", 212 * s_x, minYTickY - 5+197.5*s_y);
  
    for (const tick of tickMarks) {
      const tickY = 171.25 * s_y - scale * (tick - minYY);
      if (tick === minYY) {
        // Skip the minimum value for tick mark
        // continue;
        // noFill();
        // stroke(102, 194, 255, 120);
        // line(100 * s_x, tickY+245, 200 * s_x, tickY+245);
      } else {
      // Draw the tick mark
      noFill();
      stroke(102, 194, 255, 120);
      line(190 * s_x, tickY, 197 * s_x, tickY);
      line(190 * s_x, tickY+197.5*s_y, 197 * s_x, tickY+197.5*s_y);
  
      // Add a label for the tick mark
      noStroke();
      fill(102, 194, 255, 10);
      text(tick.toExponential(1)+"  /cm\u00B3", 212 * s_x, tickY + 5);
      text(tick.toExponential(1)+"  /cm\u00B3", 212 * s_x, tickY + 5+197.5*s_y);

      
      }
        


    }
  }
  


//   if (V_applied_p != 0) {
//   const diff = maxYY - minYY;
//   const scale = (171.25 - 55) / diff;
//   const tickMarks = calculateTickMarks(minYY, maxYY);

//   // Render the tick marks and their labels
//   for (const tick of tickMarks) {
//     const tickY = 171.25 - scale * (tick - minYY);

//     // Draw the tick mark
//     noFill();
//     stroke(102, 194, 255, 120);
//     line(190, tickY, 197, tickY);

//     // Add a label for the tick mark
//     noStroke();
//     fill(102, 194, 255, 10);
//     textSize(12);
//     text(formatTick(tick), 212, tickY + 5);
//   }
// }






}

// function calculateTickMarks(minYY, maxYY, desiredTicks = 5) {
//   let range = niceNum(maxYY - minYY, false);
//   let tickSpacing = niceNum(range / (desiredTicks - 1), true);
//   let niceMin = Math.max(Math.floor(minYY / tickSpacing) * tickSpacing, minYY);
//   let niceMax = Math.ceil(maxYY / tickSpacing) * tickSpacing;

//   let ticks = [];
//   for (let val = niceMin; val <= niceMax + tickSpacing; val += tickSpacing) {
//       if (val >= minYY) {
//           ticks.push(val);
//       }
//   }


//   return ticks;
// }


// function niceNum(range, round) {
//   let exponent = Math.floor(Math.log10(range)); // Exponent of range
//   let fraction = range / Math.pow(10, exponent); // Fractional part of range
//   let niceFraction;

//   if (round) {
//       if (fraction < 1.5) niceFraction = 1;
//       else if (fraction < 3) niceFraction = 2;
//       else if (fraction < 7) niceFraction = 5;
//       else niceFraction = 10;
//   } else {
//       if (fraction <= 1) niceFraction = 1;
//       else if (fraction <= 2) niceFraction = 2;
//       else if (fraction <= 5) niceFraction = 5;
//       else niceFraction = 10;
//   }

//   return niceFraction * Math.pow(10, exponent);
// }

function niceNum(range, round) {
  let exponent = Math.floor(Math.log10(range)); // Exponent of range
  let niceFraction;

  if (round) {
    niceFraction = 10;
  } else {
    niceFraction = 1;
  }

  return niceFraction * Math.pow(10, exponent);
}

function calculateTickMarks(minYY, maxYY, desiredTicks = 5) {
  let range = niceNum(maxYY - minYY, false);
  let tickSpacing = niceNum(range / (desiredTicks - 1), true);
  let niceMin = Math.floor(minYY / tickSpacing) * tickSpacing;
  let niceMax = Math.ceil(maxYY / tickSpacing) * tickSpacing;

  let ticks = [];
  for (let val = niceMin; val <= niceMax; val += tickSpacing) {
      if (val >= minYY) {
          ticks.push(val);
      }
  }

  return ticks;
}










  // Reset the arrays to be empty before starting the counting
  array_plot_e_set = new Array(point_count).fill().map(() => []);
  array_plot_e_0_set = [];
  array_plot_h_set = new Array(point_count).fill().map(() => []);
  array_plot_h_0_set = [];
  new_array_plot_h_set_count = []

  

  for (let k = Math.round(count_pn_num*10); k < 80; k++) {
    // let x = (190 + (950 - 190) / point_count * (k + 1))*s_x;
    let x = k;

    let n = Math.pow(10,20)/hole_add_new+Math.pow(10,20)/hole_add_new*(Math.exp(V_applied_p/40/0.026)-1)*Math.exp(-(k/10-((count_pn_num))))
    // console.log (n+"hellpppppppp")
    // if (x<(550-((400)/8*X_n)*s_x)){

      new_array_plot_h_set_count.push({ x: x, y: (n)*1 });
    // }

}





// // Draw curve
// beginShape();
// for (let i = 0; i < new_array_plot_e_set_count.length; i++) {
//   if (new_array_plot_e_set_count.y <= 1) {
//     curveVertex(190 * s_x + i, 171.25 * s_y - new_array_plot_e_set_count[i].y * Math.pow(10, 12));

//   }
//   curveVertex(190 * s_x + i, 171.25 * s_y - new_array_plot_e_set_count[i].y * Math.pow(10, 12));
// }
// endShape();

// fill(255)
// noStroke()
// ellipse(190, 190,1);



}
if (real_graph_live ==0){

//green
stroke(125, 241, 148)

strokeWeight(1.5)
// beginShape();

// curveVertex(190*s_x,(171.25+197.5-array_plot_h_0.length*2)*s_y)
// curveVertex(190*s_x,(171.25+197.5-array_plot_h_0.length*2)*s_y)


// for (var k = 0; k < point_count; k++) {

//   curveVertex((210+k*(950-210)/point_count)*s_x,(171.25+197.5-array_plot_h[k].length*2)*s_y)

// }


// curveVertex((950-(950-210)/point_count)*s_x,(171.25+197.5-array_plot_h[point_count-1].length*2)*s_y)



// endShape();
noStroke()


///////



// if (real_graph_live ==0){

//   //green
//   stroke(125, 241, 148)

//   strokeWeight(1.5)
//   beginShape();

//   curveVertex(170*s_x,(171.25+197.5-array_plot_h_0.length*0.7)*s_y)
//   curveVertex(170*s_x,(171.25+197.5-array_plot_h_0.length*0.7)*s_y)


// for (var k = 0; k < point_count; k++) {

//     curveVertex((190+k*(950-190)/point_count)*s_x,(171.25+197.5-array_plot_h[k].length*0.7)*s_y)

// }


//   curveVertex((950-(950-190)/point_count)*s_x,(171.25+197.5-array_plot_h[point_count-1].length*0.7)*s_y)



//   endShape();
//   noStroke()


//   ///////






//yellow
stroke(254,246,182)


strokeWeight(1.5)
// beginShape();
// // for ( var i = 0; i < point_count; i++ ) {
// // if (i==0 ) {
//   curveVertex(190*s_x,(171.25-array_plot_e_0.length*2)*s_y)
//   curveVertex(190*s_x,(171.25-array_plot_e_0.length*2)*s_y)
//   // curveVertex(190*s_x,(171.25-array_plot[0].length*0.7)*s_y)

// // }

// for (var k = 0; k < point_count; k++) {
//   // if (i!=(point_count-1)||i!=(0)) {
//     curveVertex((210+k*(950-210)/point_count)*s_x,(171.25-array_plot_e[k].length*2)*s_y)
//   // }
// }

// // if (i==(point_count-1)) {
//   curveVertex((950-(950-210)/point_count)*s_x,(171.25-array_plot_e[point_count-1].length*2)*s_y)
// // }
// // }


// // endShape();
// if (new_array_plot_e_set_count.length >= 3) {
// beginShape();
//   // The first control point is the first point in the array
//   // This point will not be visible in the curve
//   curveVertex(new_array_plot_e_set_count[0].x-65, 210-new_array_plot_e_set_count[0].y); 
  
//   // Iterate over the array to create the curve
//   for (let i = 20; i < new_array_plot_e_set_count.length; i++) {
//     curveVertex(new_array_plot_e_set_count[i].x-65, 210-new_array_plot_e_set_count[i].y);
//   }

//   // The last control point is the last point in the array
//   // This point will not be visible in the curve
//   curveVertex(new_array_plot_e_set_count[new_array_plot_e_set_count.length - 1].x-65, 210-new_array_plot_e_set_count[new_array_plot_e_set_count.length - 1].y);
  
//   endShape();
// noStroke()
// }

// if (new_array_plot_e_set_count.length >= 2) {
//   for (let i = 0; i < new_array_plot_e_set_count.length - 1; i++) {
//     let x1 = new_array_plot_e_set_count[i].x - 65;
//     let y1 = 210 - new_array_plot_e_set_count[i].y;
//     let x2 = new_array_plot_e_set_count[i + 1].x - 65;
//     let y2 = 210 - new_array_plot_e_set_count[i + 1].y;

//     line(x1, y1, x2, y2);
//   }
// }



//////////////////// plot current

noFill();






//yellow
stroke(254,246,182)




}






  // noFill();
  // rect((10+100+70+change_square)*s_x,(10)*s_y,(940-change_length-70-760)*s_x,(770)*s_y);

  stroke(125, 241, 148,100);

  textSize(17)
  noStroke()
  strokeWeight(1)
  fill(255);
 ///////////////////

 fill(102, 194, 255,180)


textSize(14);

text("Electron Concentration ",(160)*s_x,(30)*s_y)
text("Hole Concentration ",(160)*s_x,(223)*s_y)


text("x",(930)*s_x,(190)*s_y)
text("x",(930)*s_x,(318+70)*s_y)

textSize(14);




// text("Hole",(885)*s_x,(43)*s_y)
// text("Electron",(885)*s_x,(53)*s_y)
// text("0",(158)*s_x,(172)*s_y)
// text("0",(158)*s_x,(298+70)*s_y)

// text("10\u00B9\u2070",(155)*s_x,(172+12+2)*s_y)


// text("10\u00B9\u2070",(155)*s_x,(298+70+12+2)*s_y)

// text("10\u00B9\u00B2",(155)*s_x,(298+70-120-190)*s_y)

// text("10\u00B9\u00B2",(155)*s_x,(298+70-120)*s_y)

// text("10\u00B9\u2074",(153)*s_x,(298+70-120)*s_y)


stroke(125, 241, 148,100);


//    //green
//    stroke(125, 241, 148)
// line((10+100+70+change_square+940-change_length-70-760-20+750-60)*s_x,40*s_y,(10+100+70+change_square+790-60)*s_x,40*s_y)

// //yellow
// stroke(254,246,182)
// line((10+100+70+change_square+940-change_length-70-760-20+750-60)*s_x,50*s_y,(10+100+70+change_square+790-60)*s_x,50*s_y)

//real world graph 
if (real_graph ==1){


// if (switch_1 ==0){
noStroke()
// fill(254,246,182,50)
// } else if (switch_1 ==1) {
//   noStroke()
  fill(125, 241, 148,50)
// }

// if (count_graph ==0){
  x_con =0
  for (let i = 0; i < array_graph_con.length; i++) {
    if (x_con<750){
      x_con+=array_graph_con[i].x
    } else {
      x_con=750
    }
    

  }


  triangle((170)*s_x, 171.25*s_y, (10+100+70+change_square+940-change_length-70-760-20)*s_x, (171.2-concentration*0.7)*s_y, (170+x_con)*s_x, 171.25*s_y)

  noStroke()
fill(254,246,182,50)
// } else if (switch_1 ==1) {
  // noStroke()
  // fill(125, 241, 148,50)
// }

// if (count_graph ==0){
  x_con =0
  for (let i = 0; i < array_graph_con.length; i++) {
    if (x_con<750){
      x_con+=array_graph_con[i].x
    } else {
      x_con=750
    }
    

  }


  triangle((170)*s_x, 171.25*s_y, (10+100+70+change_square+940-change_length-70-760-20)*s_x, (171.2-concentration*0.7)*s_y, (170+x_con)*s_x, 171.25*s_y)

// }


// if (switch_1==0){
  noStroke()
fill(254,246,182,50)
//scale current 

// if (count_graph ==0){
  test_a = (5.33*Math.pow(10,5)*Math.pow(scattering_velocity,2)*scattering_count*concentration)/Math.pow(10,7)*test_current_scale //scale by 5
  rect(170*s_x,298.75*s_y,(x_con)*s_x,(test_a/x_con)*s_y)
// }
// } else if (switch_1 ==1) {
  noStroke()
  fill(125, 241, 148,50)

  // if (count_graph==0){
  test_a = (5.33*Math.pow(10,5)*Math.pow(scattering_velocity,2)*scattering_count*concentration)/Math.pow(10,7)*test_current_scale
  rect(170*s_x,298.75*s_y,(x_con)*s_x,-(test_a/x_con)*s_y)
  // }
// }



// console.log(con_count)
// if (count_graph ==0){
for (let i = 0; i < array_graph_con.length; i++) {
  array_graph_con[i].update()
}
// }

}


  } 
  else if (sceneCount == 3.1) {




    num_e = (2*num_Line_text*(1/(1+(Math.exp((y_cordi/100-constant_fermi_negative)/(0.026*constant_temperature/300))))));
    num_h = (2*num_Line_text*(1-(1/(1+(Math.exp((y_cordi/100-constant_fermi_negative)/(0.026*constant_temperature/300)))))));
        // console.log(num_e)
    
    
        if (0.56<y_cordi/100 && 2>y_cordi/100){
          num_Line_text= Math.round(88*Math.pow(y_cordi/100-0.56,1/2))
          // opacity_circle=0
          // opacity_circle_up=1
        } else if (y_cordi/100<-0.56 && -2<y_cordi/100){
          num_Line_text= Math.round(50*Math.pow(-0.56-y_cordi/100,1/2))
          // opacity_circle=1
          // opacity_circle_up=0
          //Math.round(50*Math.pow(-0.56+m/100,1/2))
        } else if (-0.56<y_cordi/100 && y_cordi/100<0.56){
          num_Line_text=0
          opacity_circle=0
          opacity_circle_up=0
        } 
    
    
        d3bands_update_3_1()
      
     
        
        s_x = windowWidth/scale_x;
        s_y = windowHeight/scale_y;
    
    
        drawingContext.setLineDash([0]);
    
    
        if (time_count ==0) {
          if (electron_add >0 || hole_add>0) {
    
            if (time_count_graph ==0) {
              ni = (9.15*Math.pow(10,19))*Math.pow((temp/300),1.5)*Math.exp((-0.59/(0.026*temp/300)))
              generation_Rate_c = 2*0.01*Math.pow(ni,2)/((current_Electron_c+ni)+(current_Hole_c+ni));
              
          
              // globalX += step;
              
              current_Electron_c += generation_Rate_c-recombination_Rate_c; 
              current_Hole_c += generation_Rate_c-recombination_Rate_c;
              recombination_Rate_c = 2*0.01*current_Electron_c*current_Hole_c/((current_Electron_c+ni)+(current_Hole_c+ni));
    
              time_count_graph=1 
            }  else {
              // globalX += step;
            }
    
           
    
          } else {
    
            if (time_count_graph ==0) {
              ni = (9.15*Math.pow(10,19))*Math.pow((temp/300),1.5)*Math.exp((-0.59/(0.026*temp/300)))
            generation_Rate_c = 0.01*ni;
            
        
            // globalX += step;
            
            current_Electron_c += generation_Rate_c-recombination_Rate_c; 
            current_Hole_c += generation_Rate_c-recombination_Rate_c;
            recombination_Rate_c = current_Electron_c*0.01;
            time_count_graph=1
            } else {
              // globalX += step;
            
            }
          }
        } else {
          // globalX += step;
        }
    
        
    
      
    
    
      
          //temp draw
    
    
        fill(255)
        rect((70+110)*s_x, 640*s_y, 10*s_x,105*s_y, 30*s_x);
        ellipse((70+115)*s_x, (640+105)*s_y,30*s_x)
     
    
        fill(235, 58, 52)
        ellipse((70+115)*s_x, (640+105)*s_y,20*s_y)
        rect((70+112.5)*s_x, (640+10+(-0.7*((320-260)/300*temp+260)+245))*s_y, 5*s_x, (105-(-0.7*((320-260)/300*temp+260)+245))*s_y, 30*s_x);
    
        //270-320 y
        //0-300 x
        // 320 = 300a+270
        // a= (320-270)/300
        // rect(112.5*s_x, (640+10+(-0.7*temp+245))*s_y, 5*s_x, (105-(-0.7*temp+245))*s_y, 30*s_x);
    
        fill(255)
        textSize(18);
      
        text(temp+"K",(70+140)*s_x,(640+115)*s_y)
    
    
        
    
        // g_rate = 0.000000112099*generation_Rate_c+0.999998791
    
    
          // g_rate = 0.000002036*generation_Rate_c+0.99999
        
          g_rate = 0.00000112099*generation_Rate_c+0.999998791
          // g_rate = 0.000000112099*generation_Rate_c+0.999998791
          // g_rate = generation_Rate_c/10000+1
    
       
        var target = createVector(300, 300);
        
    
        for (let i = 0; i < whiteArray.length; i++) {

          if (whiteArray[i].swap ==0) {
          whiteArray[i].display();
          whiteArray[i].appear_update();
          whiteArray[i].update();
    
          
       
          if (whiteArray[i].appear>255) {
            whiteArray[i].random_walk();
          }
    
        }

        if (whiteArray[i].swap ==1) {


           //if not freeze and not override 
           if (whiteArray[i].freeze ==0 &&whiteArray[i].override ==0) {
            if (whiteArray[i].appear>255) {
              whiteArray[i].straight_walk()
              if (whiteArray[i].position.y > 49*s_y) {
                whiteArray[i].random_walk();
              }
            }
          }

          //if override(e move to plus sign), assign target 
        
          if (whiteArray[i].freeze ==0 &&whiteArray[i].override ==1 && whiteArray_e[i].assigned ==0) {
            for (let m = 0 ; m<appearArray_s1.length; m++) {
              if (appearArray_s1[m].occupied ==0 ){
                whiteArray[m].target = createVector(appearArray_s1[m].x,appearArray_s1[m].y)
                appearArray_s1[m].occupied=1
                whiteArray[m].assigned =1
                whiteArray[m].match = m
   
                break
              }

            }

          }
        

          //cancel when close and seek the asisgned cross/minus

          if (whiteArray[i].freeze ==0 &&whiteArray[i].override ==1 && whiteArray[i].assigned ==1) {
            whiteArray[i].easy_seek()

            if (abs(whiteArray[i].position.x-whiteArray[i].target.x)<10 && abs(whiteArray[i].position.y-whiteArray[i].target.y)<10) {

      
              whiteArray[i].stop()
              whiteArray[i].position = createVector(appearArray_s1[whiteArray[i].match].x,appearArray_s1[whiteArray[i].match].y)
            

            }

          }


        }

         
        }
    
      
    
    
        for (let i = 0; i < blackArray.length; i++) {
        
          
          blackArray[i].display();
          blackArray[i].appear_update();
          blackArray[i].update();
    
      
          if (blackArray[i].appear>255) {
            blackArray[i].random_walk();
          }
        
    
         
        }
    ////h 
        for (let i = 0; i < blackArray_h.length; i++) {
  

        
          if (blackArray_h[i].id == "h") {
            blackArray_h[i].display();
            blackArray_h[i].appear_update();
            blackArray_h[i].update();
  
      
            if (fraction_h_count>0){
//not moving in initialize
              blackArray_h[i].freeze = 1
              fraction_h_count-=1
   

            } 


          } 
          


          blackArray_h[i].display();
          blackArray_h[i].appear_update();
          blackArray_h[i].update();


          //if not freeze and not override 
          if (blackArray_h[i].freeze ==0 &&blackArray_h[i].override ==0) {
            if (blackArray_h[i].appear>255) {
              blackArray_h[i].straight_walk()
              if (blackArray_h[i].position.y > 49*s_y) {
                blackArray_h[i].random_walk();
              }
            }
          }

          //if override(e move to plus sign), assign target 
        
          if (blackArray_h[i].freeze ==0 &&blackArray_h[i].override ==1 && blackArray_h[i].assigned ==0) {
            for (let m = 0 ; m<appearArray_s1.length; m++) {
              if (appearArray_s1[m].occupied ==0 && appearArray_s1[m].color ==5){
                blackArray_h[m].target = createVector(appearArray_s1[m].x,appearArray_s1[m].y)
                appearArray_s1[m].occupied=1
                blackArray_h[m].assigned =1
                blackArray_h[m].match = m
   
                break
              }

            }

          }
        

          //cancel when close and seek the asisgned cross/minus

          if (blackArray_h[i].freeze ==0 &&blackArray_h[i].override ==1 && blackArray_h[i].assigned ==1) {
            blackArray_h[i].easy_seek()

            // whiteArray_e[i].position = appearArray_s1[whiteArray_e[i].match].position
            // whiteArray_e[i].stop()
            if (abs(blackArray_h[i].position.x-blackArray_h[i].target.x)<10 && abs(blackArray_h[i].position.y-blackArray_h[i].target.y)<10) {

      
              blackArray_h[i].stop()
              blackArray_h[i].position = createVector(appearArray_s1[blackArray_h[i].match].x,appearArray_s1[blackArray_h[i].match].y)
            

            }

          }

    
       
        
        
      }
    
    
        for (let i = 0; i < whiteArray_e.length; i++) {
  

        
          if (whiteArray_e[i].id == "e") {
            whiteArray_e[i].display();
            whiteArray_e[i].appear_update();
            whiteArray_e[i].update();
  
      
            if (fraction_e_count>0){
//not moving in initialize
              whiteArray_e[i].freeze = 1
              fraction_e_count-=1
   

            } 


          } 
          


          whiteArray_e[i].display();
          whiteArray_e[i].appear_update();
          whiteArray_e[i].update();


          //if not freeze and not override 
          if (whiteArray_e[i].freeze ==0 &&whiteArray_e[i].override ==0) {
            if (whiteArray_e[i].appear>255) {
              whiteArray_e[i].straight_walk()
              if (whiteArray_e[i].position.y > 49*s_y) {
                whiteArray_e[i].random_walk();
              }
            }
          }

          //if override(e move to plus sign), assign target 
        
          if (whiteArray_e[i].freeze ==0 &&whiteArray_e[i].override ==1 && whiteArray_e[i].assigned ==0) {
            for (let m = 0 ; m<appearArray_s1.length; m++) {
              if (appearArray_s1[m].occupied ==0 && appearArray_s1[m].color ==4){
                whiteArray_e[m].target = createVector(appearArray_s1[m].x,appearArray_s1[m].y)
                appearArray_s1[m].occupied=1
                whiteArray_e[m].assigned =1
                whiteArray_e[m].match = m
   
                break
              }

            }

          }
        

          //cancel when close and seek the asisgned cross/minus

          if (whiteArray_e[i].freeze ==0 &&whiteArray_e[i].override ==1 && whiteArray_e[i].assigned ==1) {
            whiteArray_e[i].easy_seek()

            // whiteArray_e[i].position = appearArray_s1[whiteArray_e[i].match].position
            // whiteArray_e[i].stop()
            if (abs(whiteArray_e[i].position.x-whiteArray_e[i].target.x)<10 && abs(whiteArray_e[i].position.y-whiteArray_e[i].target.y)<10) {

      
              whiteArray_e[i].stop()
              whiteArray_e[i].position = createVector(appearArray_s1[whiteArray_e[i].match].x,appearArray_s1[whiteArray_e[i].match].y)
            

            }

          }

    
       
        
        
      }
    
    ////no splice bunny
    
      //   for (let i = 0 ; i<disappearArray.length; i++) {
      //     if (typeof disappearArray[i] != "undefined") {
      //     if (disappearArray[i].alpha<1) {
      //       disappearArray.splice(disappearArray[i], 1);
      //     }
      //   }
      // }
    
      //   for (let i = 0 ; i<disappearArray_2_pair.length; i++) {
      //     if (typeof disappearArray_2_pair[i] != "undefined") {
      //     if (disappearArray_2_pair[i].disappear<1) {
      //       disappearArray_2_pair.splice(disappearArray_2_pair[i], 1);
      //     }
      //   }
      //   }
    
    
    
    
      //   for (let i = 0 ; i<appearArray.length; i++) {
      //     if (appearArray[i].alpha<1) {
      //       appearArray.splice(appearArray[i], 1);
      //     }
      //   }
    
      //   for (let i = 0 ; i<disappearArray_2.length; i++) {
      //     if (typeof disappearArray_2[i] != "undefined") {
      //     if (disappearArray_2[i].disappear<1) {
      //       disappearArray_2.splice(disappearArray_2[i], 1);
      //     }
      //   }
      // }

   

////////////////




    
        for (let i = 0 ; i<disappearArray_2_pair.length; i++) {
          if (typeof disappearArray_2_pair[i] != "undefined") {
          if (disappearArray_2_pair[i].disappear<1) {
            disappearArray_2_pair.splice(i, 1);
      
          } else {
            continue
          }
        }
        }
    
        for (let i = 0; i < appearArray.length; i++) {
          appearArray[i].display();
          appearArray[i].update();
    
         
        }
        

        //note
        for (let i = 0; i < appearArray_s1.length; i++) {
          appearArray_s1[i].display();
          appearArray_s1[i].update();
         
        }
        for (let i = 0; i < disappearArray.length; i++) {
          if (typeof disappearArray[i] != "undefined") {
          disappearArray[i].display();
          disappearArray[i].update();
          }
        }
    
    
        for (let i = 0; i < disappearArray_dot.length; i++) {
          if (typeof disappearArray[i] != "undefined") {
          disappearArray_dot[i].display();
          // disappearArray_dot[i].update();
          }
        }
    
    
        
        // new  double circle
        for (let i = 0; i < disappearArray_2.length; i++) {
          if (typeof disappearArray_2[i] != "undefined") {
          disappearArray_2[i].display();
          disappearArray_2[i].update_circle();
          disappearArray_2[i].update_location();
          // disappearArray_2[i].seek(middle_position_Array[i]);
          
          }
        }
    
        for (let i = 0; i < disappearArray_2_pair.length; i++) {
          if (typeof disappearArray_2_pair[i] != "undefined") {
    
        disappearArray_2_pair[i].display();
        disappearArray_2_pair[i].update_circle();
        disappearArray_2_pair[i].update_location();
        // disappearArray_2_pair[i].seek(middle_position_Array[i]);
       
          }
        }
    
        for (let i = 0; i < disappearArray_2_pair.length; i++) {
          if (typeof disappearArray_2_pair[i] != "undefined") {
            for (let k = 0; k < disappearArray_2.length; k++) {
              if (typeof disappearArray_2[k] != "undefined") {
               if (disappearArray_2_pair[i].id == disappearArray_2[k].id) {
                disappearArray_2[k].seek(p5.Vector.div(p5.Vector.add(disappearArray_2[k].position, disappearArray_2_pair[i].position),2));
                disappearArray_2_pair[i].seek(p5.Vector.div(p5.Vector.add(disappearArray_2[k].position, disappearArray_2_pair[i].position),2));
    
               }
              
              
              
              }}}}
    
    
    
    
    
    
    //disappear
          for (let i = 0; i < whiteArray.length; i++) {
          for (let k = 0; k< blackArray.length; k++) {
            if (abs(whiteArray[i].position.x-blackArray[k].position.x)<15 
           && abs(whiteArray[i].position.y-blackArray[k].position.y)<15 && (whiteArray[i].id != blackArray[k].id) 
           && (whiteArray[i].show ==1) && (blackArray[k].show ==1)) {
    
            
            //mark
             whiteArray[i].stop();
             blackArray[k].stop();
             whiteArray[i].noShow();
             blackArray[k].noShow();
    
    
            middle_position_Array[disappear_count] = p5.Vector.div(p5.Vector.add(blackArray[k].position, whiteArray[i].position),2);
            //original dots
            // whiteArray[i].seek(middle_position_Array[disappear_count]);
            // blackArray[k].seek(middle_position_Array[disappear_count]);
    
    //effects
     
             disappearArray[disappear_count] =(new Appear( middle_position_Array[disappear_count].x,  middle_position_Array[disappear_count].y,10,1, disappear_count))
             disappearArray_2[disappear_count] =(new Appear(whiteArray[i].position.x, whiteArray[i].position.y,10,2, disappear_count))
             disappearArray_2_pair[disappear_count] =(new Appear(blackArray[k].position.x, blackArray[k].position.y,10,3, disappear_count))
    
            disappear_count++
            //  whiteArray.splice(whiteArray[i], 1);
            //  blackArray.splice(blackArray[k], 1);
             break       
           }
       }
    
        }
    
    
        //disappear white & black new h 
        for (let i = 0; i < whiteArray.length; i++) {
          for (let k = 0; k< blackArray_h.length; k++) {
            if (abs(whiteArray[i].position.x-blackArray_h[k].position.x)<15 
           && abs(whiteArray[i].position.y-blackArray_h[k].position.y)<15 && (whiteArray[i].id != blackArray_h[k].id) 
           && (whiteArray[i].show ==1) && (blackArray_h[k].show ==1)) {
    
            
            //mark
             whiteArray[i].stop();
             blackArray_h[k].stop();
             whiteArray[i].noShow();
             blackArray_h[k].noShow();
              // whiteArray[i].update();
              // blackArray[k].update();
    
    
            middle_position_Array[disappear_count] = p5.Vector.div(p5.Vector.add(blackArray_h[k].position, whiteArray[i].position),2);
            //original dots
            // whiteArray[i].seek(middle_position_Array[disappear_count]);
            // blackArray[k].seek(middle_position_Array[disappear_count]);
    
         
    
    //effects
     
             disappearArray[disappear_count] =(new Appear( middle_position_Array[disappear_count].x,  middle_position_Array[disappear_count].y,10,1, disappear_count))
             disappearArray_2[disappear_count] =(new Appear(whiteArray[i].position.x, whiteArray[i].position.y,10,2, disappear_count))
             disappearArray_2_pair[disappear_count] =(new Appear(blackArray_h[k].position.x, blackArray_h[k].position.y,10,3, disappear_count))
    
            disappear_count++
            //  whiteArray.splice(whiteArray[i], 1);
            //  blackArray.splice(blackArray[k], 1);
             break
         
           }
       }
     
        }
    
    
             //disappear new white e & black 
             for (let i = 0; i < whiteArray_e.length; i++) {
              for (let k = 0; k< blackArray.length; k++) {
                if (abs(whiteArray_e[i].position.x-blackArray[k].position.x)<15 
               && abs(whiteArray_e[i].position.y-blackArray[k].position.y)<15 && (whiteArray_e[i].id != blackArray[k].id) 
               && (whiteArray_e[i].show ==1) && (blackArray[k].show ==1)) {
        
                
                //mark
                 whiteArray_e[i].stop();
                 blackArray[k].stop();
                 whiteArray_e[i].noShow();
                 blackArray[k].noShow();
                  // whiteArray[i].update();
                  // blackArray[k].update();
        
        
                middle_position_Array[disappear_count] = p5.Vector.div(p5.Vector.add(blackArray[k].position, whiteArray_e[i].position),2);
                //original dots
                // whiteArray[i].seek(middle_position_Array[disappear_count]);
                // blackArray[k].seek(middle_position_Array[disappear_count]);
      
             
      
      //effects
         
                 disappearArray[disappear_count] =(new Appear( middle_position_Array[disappear_count].x,  middle_position_Array[disappear_count].y,10,1, disappear_count))
                 disappearArray_2[disappear_count] =(new Appear(whiteArray_e[i].position.x, whiteArray_e[i].position.y,10,2, disappear_count))
                 disappearArray_2_pair[disappear_count] =(new Appear(blackArray[k].position.x, blackArray[k].position.y,10,3, disappear_count))
      
                disappear_count++
                //  whiteArray.splice(whiteArray[i], 1);
                //  blackArray.splice(blackArray[k], 1);
                 break
             
               }
           }
        
            }
    
    
            //disappear new white e & new black h
            for (let i = 0; i < whiteArray_e.length; i++) {
              for (let k = 0; k< blackArray_h.length; k++) {
                if (abs(whiteArray_e[i].position.x-blackArray_h[k].position.x)<15 
               && abs(whiteArray_e[i].position.y-blackArray_h[k].position.y)<15 && (whiteArray_e[i].id != blackArray_h[k].id) 
               && (whiteArray_e[i].show ==1) && (blackArray_h[k].show ==1)) {
        
                
                //mark
                 whiteArray_e[i].stop();
                 blackArray_h[k].stop();
                 whiteArray_e[i].noShow();
                 blackArray_h[k].noShow();
                  // whiteArray[i].update();
                  // blackArray[k].update();
        
        
                middle_position_Array[disappear_count] = p5.Vector.div(p5.Vector.add(blackArray_h[k].position, whiteArray_e[i].position),2);
                //original dots
                // whiteArray[i].seek(middle_position_Array[disappear_count]);
                // blackArray[k].seek(middle_position_Array[disappear_count]);
      
             
      
      //effects
         
                 disappearArray[disappear_count] =(new Appear( middle_position_Array[disappear_count].x,  middle_position_Array[disappear_count].y,10,1, disappear_count))
                 disappearArray_2[disappear_count] =(new Appear(whiteArray_e[i].position.x, whiteArray_e[i].position.y,10,2, disappear_count))
                 disappearArray_2_pair[disappear_count] =(new Appear(blackArray_h[k].position.x, blackArray_h[k].position.y,10,3, disappear_count))
      
                disappear_count++
                //  whiteArray.splice(whiteArray[i], 1);
                //  blackArray.splice(blackArray[k], 1);
                 break
             
               }
           }
        
            }
    
    
    
    
    
    
      
        // temp = slider_temperature.value();
    
    
        stroke(125, 241, 148,100);
        strokeWeight(1);
        fill(25,25,25,100)
        rect((970-350+20)*s_x,(790-200+80)*s_y,(330-20)*s_x,(190-80)*s_y);
    
        noFill();
        rect((10+100+70+change_square)*s_x,10*s_y,(940-change_length-70)*s_x,770*s_y);
    
    
    
        textSize(17)
        noStroke()
        strokeWeight(1)
        fill(255);
        // text("Generation Rate: "+ generation_Rate_c.toExponential(1), (970-350+20)*s_x,(790-200+40)*s_y);
        // text("Recombination Rate: "+ recombination_Rate_c.toExponential(1),(970-350+20)*s_x,(790-200+80)*s_y);
        text("Number of Electrons:    "+ current_Electron_c.toExponential(1),(970-350+20+30)*s_x,(790-200+120)*s_y);
        text("Number of Holes:    "+ current_Hole_c.toExponential(1),(970-350+20+30)*s_x,(790-200+160)*s_y);
        
    
        textSize(14*s_x)
          // text("pairs/sec*cm",(970-350+20+190+27)*s_x,(790-200+40)*s_y )
          // text("pairs/sec*cm",(970-350+20+190+27)*s_x,(790-200+80)*s_y )
          text("per cm",(970-350+20+190+58+11)*s_x,(790-200+80+40)*s_y )
          text("per cm",(970-350+20+190+58+11)*s_x,(790-200+80+40+40)*s_y )
    
          textSize(10*s_x)
          // text("3",(970-350+20+190+100+11)*s_x,(790-200+80-8)*s_y )
          text("3",(970-350+20+190+100+11)*s_x,(790-200+80+40-8)*s_y )
          text("3",(970-350+20+190+100+11)*s_x,(790-200+80+40-8+40)*s_y )
          // text("3",(970-350+20+190+100+11)*s_x,(790-200+40-8)*s_y )
    
        //restart
      
    
        // fill(255, 58, 23,210);
        // rect((970-350-55+323-2.5)*s_x,(790-200+185-15)*s_y,(55+5)*s_x,18*s_y,5)
      
    
    
        // textSize(17*s_x)
        // noStroke()
        // strokeWeight(2)
        // fill(255);
        // text("RESET",(970-350-55+325)*s_x,(790-200+185)*s_y);
    
    
        if (abs(generation_Rate_c.toExponential(1)-recombination_Rate_c.toExponential(1))< 10) {
        //   fill(125, 241, 148,210);
        // rect((970-350-55+325-55-2.5)*s_x,(30-15)*s_y,(105+5)*s_x,22*s_y,5)
      
        textSize(17*s_x)
        noStroke()
        strokeWeight(2)
        fill(255);
        text("In Equilibrium",(970-350-55-55)*s_x,(790-200+185-5)*s_y);
        }
     
    
    
    
      } else if (sceneCount == 3.15) {
    
  
    

  } else if (sceneCount == 3.25) {


  } else if (sceneCount == 4) {
  
  }
}

reset_scene1 = ()=> {
  
  // add_h(123)
  
  // console.log("The page was refreshed or loaded!");
  count_n = 0
  count_pn_num =0
  e_field_c = 0

  y_con_c=0
  y_con_2 =0
  y_con = 0
  start_graph =1
  count_graph = 10

  whiteArray = [];
  blackArray = [];
  whiteArray_e  =  []
  blackArray_h = []
  appearArray_s1 = []

  appearArray_s1 = []
  whiteArray_e = [];
  whiteID_e  = [];
  
  appearArray_s1 = []
  appearArray_s2 = []
  blackArray_h = [];
  blackID_h  = [];

  // console.log("sss")
   array_graph_con=[]

   con_count =0

  //  console.log(concentration)

  
    array_graph_con.push(new Concentration(scattering_velocity,scattering_count))

    if (sceneCount ==2|| sceneCount ==3) {
   
      if (sceneCount ==2){
        add_h(document.getElementById("slider_61").value)

      } else if (sceneCount==3) {
        add_h(document.getElementById("slider_611").value)

      }
  
 

    //   current_Electron_c = Math.round(electron_add ) 
    //   e_count = Math.pow(100,((Math.log10(current_Electron_c)-8)/2))/1000
    
    //   ///  fraction cal   // n_c delta_ED
    
    //   n_c = 2.86*Math.pow(10,19)*Math.pow(temp/300,3/2)
    //   // let tempe_fraction_e
    //   tempe_fraction_e = (-1+Math.pow(1+8*current_Electron_c/n_c*Math.exp(45*300/26/temp),1/2))/(4*current_Electron_c/n_c*Math.exp(45*300/26/temp))
    
    //   fraction_e.push(Math.round(100*tempe_fraction_e)/100)
    
    //   fraction_e_count = Math.round(e_count*(1-fraction_e[fraction_e.length-1]))
    //   // console.log(fraction_e_count)
    //   // console.log(tempe_fraction_e+"donor")
    // ///
    
    //   for (let i=0; i < e_count; i ++){
    
    //     let a = random(200*s_x,900*s_x);
    //     let b = random(30*s_y,730*s_y);  
    //     appearArray_s1.push(new Appear(a,b,10,4,i));
    // //id start from 0 ,color 4
    
    //     whiteArray_e.push(new Vehicle(a, b, 10, "e", 0));
    //     whiteID_e.push(global_id);
    //     global_id += 1;
    //     }
      
      
    //     ///////hole
    
    
    
    //       current_Hole_c = Math.round(hole_add) 
    //       // h_count  = (100-0.01)/4*Math.log10(current_Hole_c)+0.01-(100-0.01)*8/4; 
    //       h_count = Math.pow(100,((Math.log10(current_Hole_c)-8)/2))/1000
    
    //       //note_bun
    
    //       ///  fraction cal   // n_c delta_ED
    
    //  n_v = 2.66*Math.pow(10,19)*Math.pow(temp/300,3/2)
    //  let tempe_fraction_h
    //  tempe_fraction_h = (-1+Math.pow(1+8*current_Hole_c/n_v*Math.exp(45*300/26/temp),1/2))/(4*current_Hole_c/n_v*Math.exp(45*300/26/temp))
    
    //  fraction_h.push(Math.round(100*tempe_fraction_h)/100)
    
    //  fraction_h_count = Math.round(e_count*(1-fraction_h[fraction_h.length-1]))
    //  // console.log(fraction_e_count)
    //  // console.log(tempe_fraction_e+"donor")
    // ///
    
    //      for (let i=0; i < h_count; i ++){
    
    //       let a = random(170*s_x,930*s_x);
    //       let b = random((20+385)*s_y,760*s_y);
        
    //       appearArray_s1.push(new Appear(a,b,10,5,i));
      
    //       blackArray_h.push(new Vehicle(a, b, 10, "h", 1));
    //       blackID_h.push(global_id);
    //       global_id += 1;
    //       }
        
    //       // reset_scene1();
    
      }


   

    if (sceneCount ==1.5) {
   

      add_h(document.getElementById("slider_6").value)
  
 
    //   current_Electron_c = Math.round(electron_add ) 
    //   e_count = Math.pow(100,((Math.log10(current_Electron_c)-8)/2))/1000
    
    //   ///  fraction cal   // n_c delta_ED
    
    //   n_c = 2.86*Math.pow(10,19)*Math.pow(temp/300,3/2)
    //   // let tempe_fraction_e
    //   tempe_fraction_e = (-1+Math.pow(1+8*current_Electron_c/n_c*Math.exp(45*300/26/temp),1/2))/(4*current_Electron_c/n_c*Math.exp(45*300/26/temp))
    
    //   fraction_e.push(Math.round(100*tempe_fraction_e)/100)
    
    //   fraction_e_count = Math.round(e_count*(1-fraction_e[fraction_e.length-1]))
    //   // console.log(fraction_e_count)
    //   // console.log(tempe_fraction_e+"donor")
    // ///
    
    //   for (let i=0; i < e_count; i ++){
    
    //     let a = random(550*s_x,930*s_x);
    //     // let b = random(30*s_y,730*s_y);  
    //     let b = random((20+385)*s_y,760*s_y);
    //     appearArray_s1.push(new Appear(a,b,10,4,i));
    // //id start from 0 ,color 4
    
    //     whiteArray_e.push(new Vehicle(a, b, 10, "e", 0));
    //     whiteID_e.push(global_id);
    //     global_id += 1;
    //     }
      
      
    //     ///////hole
    
    
    
    //       current_Hole_c = Math.round(hole_add) 
    //       // h_count  = (100-0.01)/4*Math.log10(current_Hole_c)+0.01-(100-0.01)*8/4; 
    //       h_count = Math.pow(100,((Math.log10(current_Hole_c)-8)/2))/1000
    
    //       //note_bun
    
    //       ///  fraction cal   // n_c delta_ED
    
    //  n_v = 2.66*Math.pow(10,19)*Math.pow(temp/300,3/2)
    //  let tempe_fraction_h
    //  tempe_fraction_h = (-1+Math.pow(1+8*current_Hole_c/n_v*Math.exp(45*300/26/temp),1/2))/(4*current_Hole_c/n_v*Math.exp(45*300/26/temp))
    
    //  fraction_h.push(Math.round(100*tempe_fraction_h)/100)
    
    //  fraction_h_count = Math.round(e_count*(1-fraction_h[fraction_h.length-1]))
    //  // console.log(fraction_e_count)
    //  // console.log(tempe_fraction_e+"donor")
    // ///
    
    //      for (let i=0; i < h_count; i ++){
    
    //       let a = random(170*s_x,550*s_x);
    //       let b = random((20+385)*s_y,760*s_y);
        
    //       appearArray_s1.push(new Appear(a,b,10,5,i));
      
    //       blackArray_h.push(new Vehicle(a, b, 10, "h", 1));
    //       blackID_h.push(global_id);
    //       global_id += 1;
    //       }
        
    //       // reset_scene1();
    
      }

   
  
}

setTemperature = (te) => {
  constant_temperature = te;
  temp = te;
  if (sceneCount == 1 || sceneCount == 2) {
   
    temp = te;
    constant_fermi = Math.round(1000*-0.28*0.026/300*constant_temperature)/1000
    // console.log(constant_fermi) 
    // console.log(constant_temperature)
    reset_d3bands()
    d3bands()

  } 

}

setDistance = (te) => {
  //reverse 
  // te = 999+1-te



  // factor_ca = te

//  distance_dis = 10-factor_ca*(d_factor)
//  distance_dis = parseInt(te)


 distance_dis = te
//  console.log(te)




}

setConcentration = (te) => {
  factor_c=te
  y_con_c =0
  y_con_2 =0
  y_con = 0
  concentration = te/3
  count_graph = 10

  whiteArray = [];
  blackArray = [];
  array_graph_con=[]

   con_count =0
  array_graph_con.push(new Concentration(scattering_velocity,scattering_count))


}

switch_eh_1 = () => {
  if(switch_1 == 0){
    //hole
    switch_1 = 1;
    switch_eh_1.checked = true
    console.log("sss")

    whiteArray = []
    array_graph_con=[]

   con_count =0
  array_graph_con.push(new Concentration(scattering_velocity,scattering_count))

   
  }
  else{
    switch_1 = 0;
    switch_eh_1.checked = false
    blackArray = []
    array_graph_con=[]

    con_count =0
   array_graph_con.push(new Concentration(scattering_velocity,scattering_count))
 
  }


}

switch_recombine= () => { 
  if (recombine ==1) {
    //off
    recombine = 0
    switch_re.checked = false
  } else {
  recombine = 1
  switch_re.checked = true
}
}


setTemperature_real = (te) => {
  constant_temperature_real = te
  temp_real = te

  document.getElementById("speed_1").value=(Math.pow(Math.pow(2.6,2)*Math.pow(10,10)*constant_temperature_real/300,1/2)).toExponential(1)
  document.getElementById("speed_2").value=Math.round(150*Math.pow((constant_temperature_real/300),-2.3)) //scarer

 
  // 
  scattering_velocity = constant_temperature_real/50

 setScattering(Math.round(150*Math.pow((constant_temperature_real/300),-2.3)/14))

  for (let i=0; i < whiteArray.length; i ++){
whiteArray[i].movingVelocity = 5*parseInt(constant_temperature_real/30)/5;
  }

  for (let i=0; i < blackArray.length; i ++){
    blackArray[i].movingVelocity = 5*parseInt(constant_temperature_real/30)/5;
      }



}
setCurrent = (v) => {

  test_current_scale = v
  document.getElementById("scale_1").value=v
}

setTest = (v) => {

  test_x_scale = 2*0.1
  document.getElementById("scale_2").value=Math.round((2*0.1*100))/100
}


setVelocity = (v) => {
  scattering_velocity = v
  // console.log(scattering_velocity)
  for (let i = 0; i < array_graph_con.length; i++) {
    array_graph_con[i].stop_count()
  }
  con_count =0
  array_graph_con.push(new Concentration(scattering_velocity,scattering_count))


  for (let i=0; i < whiteArray.length; i ++){
whiteArray[i].movingVelocity = 5*parseInt(scattering_velocity)/5;
  }

  for (let i=0; i < blackArray.length; i ++){
    blackArray[i].movingVelocity = 5*parseInt(scattering_velocity)/5;
      }

      for (let i=0; i < blackArray_h.length; i ++){
        blackArray_h[i].movingVelocity = 5*parseInt(scattering_velocity)/5;
          }

          for (let i=0; i < whiteArray_e.length; i ++){
            whiteArray_e[i].movingVelocity = 5*parseInt(scattering_velocity)/5;
              }

}

setScattering = (c) => {
  scattering_count = c
  scattering_count_c = parseInt(c)+2
  // console.log(scattering_count_c+"countc")


  for (let i = 0; i < array_graph_con.length; i++) {
    array_graph_con[i].stop_count()
  }
  con_count =0
  array_graph_con.push(new Concentration(scattering_velocity,scattering_count))

}

setFactor = (c) => {
  factor_new =1/c*10

  let ll = factor_new.toFixed(2)

 
  // document.getElementById("factor_E" ).value=ll
}

setPoint = (k) => {
  point_count = k
  for ( var i = 0; i < point_count; i++ ) {
    array_plot[i] = []; 
    array_positive_y[i] = []
    array_negative_y[i] = []
  }

}

setVolume = (v) => {
  volume1 = v
  num_multi = 1/v

}


checkBoundaryAtoms = (latticeAtoms, xLimit, yLimit) => {
  for (let i = -xLimit; i <= xLimit; i++) {
    for (let j = -yLimit; j <= yLimit; j++) {
      if (latticeAtoms[i][j].selected) {
        latticeAtoms[i][j].boundary = false;
      } else if (latticeAtoms[i - 1][j].selected || latticeAtoms[i + 1][j].selected || latticeAtoms[i][j - 1].selected || latticeAtoms[i][j + 1].selected) {
        latticeAtoms[i][j].boundary = true;
      } else {
        latticeAtoms[i][j].boundary = false;
      }
    }
  }
}



timeIt = () => {
  if (time_count > 0) {
    time_count--;
  }
}

time_concentration= () => {
  if (x_con<750 && count_graph ==0){
    con_count+=1
  }
  
}



timeIt_blink = () => {
  if (time_count_blink > 0) {
    time_count_blink--;
  }
  if (time_count_blink ==0) {
    time_count_blink=100
  }
}

scattering = () =>{
  //timebetween scatter 
  if (scattering_count_c>2) {
//time when straight line no scatter

scatter_tf = false
// console.log("no")

// console.log(scattering_count_c) count scatter
  }
  else if ((scattering_count_c<=2) ) {
//time to scatter 2s
scatter_tf = true
// console.log("yes")

  }

  scattering_count_c -=1 

  if (scattering_count_c ==0){
    scattering_count_c = parseInt(scattering_count)+2
  }

}

count_start_graph = () =>{
  if (start_graph =1 && count_graph>0) {
    count_graph -=1
    // console.log(count_graph)
  } 


}

count_pn_f= () =>{

  // clearInterval(count_pn);
  // interval_pn = 1000
  // count_pn = setInterval(function(){count_pn_f(1);},  interval_pn);
// if (count_pn_num <rect_density && hole_add !=0 ) {
//   count_pn_num +=0.01
//   e_field_c +=0.1*1/rect_density*1.7
// }

if (count_pn_num <X_n && hole_add !=0 ) {
  count_pn_num +=0.03
  e_field_c +=0.1*1/rect_density*5*3
  count_n +=3;
  // count_pn_num +=0.01
  // e_field_c +=0.1*1/rect_density*5
  // count_n +=1;
}


  
}

y_change = () =>{
  if ((x_con>750) && (y_con<((concentration*0.7)*s_y))) {
    y_con+=1;
    y_con_2 += (test_a/x_con)/(concentration*0.7)

  } 
  if (y_con>((concentration*0.7)*s_y)){
    y_con = (concentration*0.7)*s_y
    y_con_2 = test_a/x_con
  }

  // y_con_c+=1;


}

// genBalls_scene1 = (num) =>{
//   clearInterval(run1);
//   interval_1 = 2000/g_rate*10000*5/factor_c;
//   run1 = setInterval(function(){genBalls_scene1(1);}, interval_1);

  
//   // generate *num* balls
// if (loopp = true && sceneCount ==0.55 || sceneCount ==  1.5  || sceneCount ==  1.7  || sceneCount ==0.5|| sceneCount ==0.7|| sceneCount ==0.71  || sceneCount ==1  || sceneCount ==2 || sceneCount ==3|| sceneCount ==3.1 && whiteArray.length<13000) {

// if (time_count>0) {

// } else if (time_count==0){

//   if (switch_1 ==0) {
//     for (let i = 0; i < whiteArray.length; i++) {
//       if ((whiteArray[i].position.x <=(190*s_x)) && (whiteArray[i].position.x >=(150*s_x)) ){
       
  
        
//         box_count.push(whiteArray[i])
//         // console.log(box_count.length)
//     }
  
  
//     }
//   } else if (switch_1 ==1) {

//     for (let i = 0; i < blackArray.length; i++) {
//       if ((blackArray[i].position.x <=(190*s_x)) && (blackArray[i].position.x >=(150*s_x)) ){
       
  
        
//         box_count.push(blackArray[i])
//         // console.log(box_count.length)
//     }
  
  
//     }

//   } else if (switch_1 ==2) {

//     // for (let i = 0; i < blackArray.length; i++) {
//     //   if ((blackArray[i].position.x <=(190*s_x)) && (blackArray[i].position.x >=(150*s_x)) ){
       
  
        
//     //     box_count_h.push(blackArray[i])
//     //     // console.log(box_count_h.length)
//     // }
  
  
//     // }

//   } 

 

// if (box_count.length < concentration) {

//   if (switch_1 ==0) {


//   if (sceneCount ==0.55){
//     for (let i=0; i < num; i ++){
//       let a = random(200*s_x,900*s_x);
//       let b = random((20)*s_y,(770)*s_y);
  
//       appearArray.push(new Appear(170*s_x,b,10,0));
  
//       whiteArray.push(new Vehicle(170*s_x, b, 10, global_id, 0));
//       // blackArray.push(new Vehicle(200*s_x, b, 10, global_id, 1));
//       whiteID.push(global_id);
//       blackID.push(global_id);
//       global_id += 1;
      
//     }
//   } else {
//     for (let i=0; i < num; i ++){
//       let a = random(200*s_x,900*s_x);
//       let b = random((20+385)*s_y,(770)*s_y);
  
//       appearArray.push(new Appear(170*s_x,b,10,0));
  
//       whiteArray.push(new Vehicle(170*s_x, b, 10, global_id, 0));
//       // blackArray.push(new Vehicle(200*s_x, b, 10, global_id, 1));
//       whiteID.push(global_id);
//       blackID.push(global_id);
//       global_id += 1;
      
//     }
//   }
// } else if (switch_1 ==1) {

//   if (sceneCount ==0.55){
//     for (let i=0; i < num; i ++){
//       let a = random(200*s_x,900*s_x);
//       let b = random((20)*s_y,(770)*s_y);
  
//       appearArray.push(new Appear(170*s_x,b,10,0));
  
//       blackArray.push(new Vehicle(170*s_x, b, 10, global_id, 1));
//       // blackArray.push(new Vehicle(200*s_x, b, 10, global_id, 1));
//       whiteID.push(global_id);
//       blackID.push(global_id);
//       global_id += 1;
      
//     }
//   } else {
//     for (let i=0; i < num; i ++){
//       let a = random(200*s_x,900*s_x);
//       let b = random((20+385)*s_y,(770)*s_y);
  
//       appearArray.push(new Appear(170*s_x,b,10,0));
  
//       blackArray.push(new Vehicle(170*s_x, b, 10, global_id, 1));
//       // blackArray.push(new Vehicle(200*s_x, b, 10, global_id, 1));
//       whiteID.push(global_id);
//       blackID.push(global_id);
//       global_id += 1;
      
//     }
//   }

// } }

// if ((box_count_h.length < concentration)|| (box_count_h.length >= concentration)) {
// if (switch_1 ==2) {

//   if (sceneCount ==0.55){
//     for (let i=0; i < num; i ++){
//       let a = random(200*s_x,900*s_x);
//       let b = random((20)*s_y,(770)*s_y);
  
//       appearArray.push(new Appear(170*s_x,b,10,0));
  
//       blackArray.push(new Vehicle(170*s_x, b, 10, global_id, 1));
//       // blackArray.push(new Vehicle(200*s_x, b, 10, global_id, 1));
//       whiteID.push(global_id);
//       blackID.push(global_id);
//       global_id += 1;
      
//     }
//   } else {
//     for (let i=0; i < num; i ++){
//       let a = random(200*s_x,900*s_x);
//       let b = random((20+385)*s_y,(770)*s_y);

//       appearArray.push(new Appear(170*s_x,b,10,0));
//       whiteArray.push(new Vehicle(170*s_x, b, 10, global_id, 0));
//       blackArray.push(new Vehicle(170*s_x, b, 10, global_id, 1));
//       // blackArray.push(new Vehicle(200*s_x, b, 10, global_id, 1));
//       whiteID.push(global_id);
//       blackID.push(global_id);
//       global_id += 1;
      
//     }
//       // if (sceneCount==1.5){
//       //     for (let i=0; i < num; i ++){
//       //       //change num 
//       //       let a = random(200*s_x,900*s_x);
//       //       let b = random((20+385)*s_y,(770)*s_y);

//       //       appearArray.push(new Appear(170*s_x,b,10,0));
//       //       whiteArray.push(new Vehicle(170*s_x, b, 10, global_id, 0));
//       //       blackArray.push(new Vehicle(170*s_x, b, 10, global_id, 1));
//       //       // blackArray.push(new Vehicle(200*s_x, b, 10, global_id, 1));
//       //       whiteID.push(global_id);
//       //       blackID.push(global_id);
//       //       global_id += 1;
            
//       //     }
//       //   }



    
//   }

// }
 
// }

// box_count = []
// box_count_h = []
// box_count_e = []

// //////950-190s_x


// for ( var i = 0; i < point_count; i++ ) {
//   array_plot[i] = []; 
//   array_plot_h[i] = []; 
//   array_plot_e[i] = []; 
// }

// array_plot_0 = []
// array_plot_h_0 = []
// array_plot_e_0 = []


// if (switch_1 ==0){
//   for (let i = 0; i < whiteArray.length; i++) {


//     for (let k = 0; k<point_count; k++){
//       if ((whiteArray[i].position.x <=((190+(950-190)/point_count*(k+1))*s_x) && (whiteArray[i].position.x >=((190+(950-190)/point_count*k)*s_x))) ){
       
        
//         array_plot[k].push(whiteArray[i])
//         // console.log(array_plot)
//     }
//     }
  
//     if ((whiteArray[i].position.x <=(190*s_x)) && (whiteArray[i].position.x >=((150)*s_x))){
       
        
//       array_plot_0.push(whiteArray[i])
      
//       // console.log(array_plot_0.length)
//   }
//   }
// } else if (switch_1 == 1) {

//   for (let i = 0; i < blackArray.length; i++) {


//     for (let k = 0; k<point_count; k++){
//       if ((blackArray[i].position.x <=((190+(950-190)/point_count*(k+1))*s_x) && (blackArray[i].position.x >=((190+(950-190)/point_count*k)*s_x))) ){
       
        
//         array_plot[k].push(blackArray[i])
//         // console.log(array_plot)
//     }
//     }
  
//     if ((blackArray[i].position.x <=(190*s_x)) && (blackArray[i].position.x >=((150)*s_x))){
       
        
//       array_plot_0.push(blackArray[i])
      
//       // console.log(array_plot_0.length)
//   }
//   }
// } else if (switch_1 ==2) {
//   for (let i = 0; i < whiteArray.length; i++) {


//     for (let k = 0; k<point_count; k++){
//       if ((whiteArray[i].position.x <=((190+(950-190)/point_count*(k+1))*s_x) && (whiteArray[i].position.x >=((190+(950-190)/point_count*k)*s_x))) ){
       
        
//         array_plot_e[k].push(whiteArray[i])
//         // console.log(array_plot)
//     }
//     }
  
//     if ((whiteArray[i].position.x <=(190*s_x)) && (whiteArray[i].position.x >=((150)*s_x))&&(whiteArray[i].show ==1 )){
       
        
//       array_plot_e_0.push(whiteArray[i])
      
//       // console.log(array_plot_0.length)
//   }
//   }

//   for (let i = 0; i < whiteArray_e.length; i++) {


//     for (let k = 0; k<point_count; k++){
//       if ((whiteArray_e[i].position.x <=((190+(950-190)/point_count*(k+1))*s_x) && (whiteArray_e[i].position.x >=((190+(950-190)/point_count*k)*s_x))) ){
       
        
//         array_plot_e[k].push(whiteArray_e[i])
//         // console.log(array_plot)
//     }
//     }
  
//     if ((whiteArray_e[i].position.x <=(190*s_x)) && ((whiteArray_e[i].position.x >=((150)*s_x)) && (whiteArray_e[i].show ==1 ))){
       
        
//       array_plot_e_0.push(whiteArray_e[i])
      
//       // console.log(array_plot_0.length)
//   }
//   }

// ///////////

//   for (let i = 0; i < blackArray.length; i++) {


//     for (let k = 0; k<point_count; k++){
//       if ((blackArray[i].position.x <=((190+(950-190)/point_count*(k+1))*s_x) && (blackArray[i].position.x >=((190+(950-190)/point_count*k)*s_x))) ){
       
        
//         array_plot_h[k].push(blackArray[i])
//         // console.log(array_plot)
//     }
//     }
  
//     if ((blackArray[i].position.x <=(190*s_x)) && (blackArray[i].position.x >=((150)*s_x)&& (blackArray[i].show ==1))){
       
        
//       array_plot_h_0.push(blackArray[i])
      
//       // console.log(array_plot_0.length)
//   }
//   }

//   // blackArray_h

//   for (let i = 0; i < blackArray_h.length; i++) {


//     for (let k = 0; k<point_count; k++){
//       if ((blackArray_h[i].position.x <=((190+(950-190)/point_count*(k+1))*s_x) && (blackArray_h[i].position.x >=((190+(950-190)/point_count*k)*s_x))) ){
       
        
//         array_plot_h[k].push(blackArray_h[i])
//         // console.log(array_plot)
//     }
//     }
  
//     if ((blackArray_h[i].position.x <=(190*s_x)) && (blackArray_h[i].position.x >=((150)*s_x))&&(blackArray_h[i].show ==1)){
       
        
//       array_plot_h_0.push(blackArray_h[i])
      
//       // console.log(array_plot_0.length)
//   }
//   }





// }


// for ( var i = 0; i < point_count; i++ ) {
//   array_positive_y[i] = []; 
//   array_negative_y[i] = []; 
//   array_positive_y_e[i] = []; 
//   array_negative_y_e[i] = []; 
//   array_positive_y_h[i] = []; 
//   array_negative_y_h[i] = []; 

// }

// array_positive_y_0 = []
// array_negative_y_0 = []; 
// array_positive_y_0_h = []
// array_negative_y_0_h = []; 
// array_positive_y_0_e = []
// array_negative_y_0_e = []; 


// if (switch_1 ==0) {
//   for (let i = 0; i < whiteArray.length; i++) {
//     if ((whiteArray[i].position.x <=((190)*s_x) && (whiteArray[i].position.x >=((150)*s_x))) && whiteArray[i].direction.x>0){
       
        
//       array_positive_y_0.push(whiteArray[i])
//       // console.log(array_positive_y)
//   }
  
  
//   if ((whiteArray[i].position.x <=((190)*s_x) && (whiteArray[i].position.x >=((150)*s_x))) && whiteArray[i].direction.x<0){
       
        
//     array_negative_y_0.push(whiteArray[i])
//     // console.log("array_negative_y")
//   }
  
//     for (let k = 0; k<point_count; k++){
//       if ((whiteArray[i].position.x <=((190+(950-190)/point_count*(k+1))*s_x) && (whiteArray[i].position.x >=((190+(950-190)/point_count*k)*s_x))) && whiteArray[i].direction.x>0){
       
        
//         array_positive_y[k].push(whiteArray[i])
//         // console.log(array_positive_y)
//     }
  
//     if ((whiteArray[i].position.x <=((190+(950-190)/point_count*(k+1))*s_x) && (whiteArray[i].position.x >=((190+(950-190)/point_count*k)*s_x))) && whiteArray[i].direction.x<0){
       
        
//       array_negative_y[k].push(whiteArray[i])
//       // console.log("array_negative_y")
//   }
//     }
//   }


//   // for (let i = 0; i < whiteArray_e.length; i++) {
//   //   if ((whiteArray_e[i].position.x <=((190)*s_x) && (whiteArray_e[i].position.x >=((150)*s_x))) && whiteArray_e[i].direction.x>0){
       
        
//   //     array_positive_y_0.push(whiteArray_e[i])
//   //     // console.log(array_positive_y)
//   // }
  
  
//   // if ((whiteArray_e[i].position.x <=((190)*s_x) && (whiteArray_e[i].position.x >=((150)*s_x))) && whiteArray_e[i].direction.x<0){
       
        
//   //   array_negative_y_0.push(whiteArray_e[i])
//   //   // console.log("array_negative_y")
//   // }
  
//   //   for (let k = 0; k<point_count; k++){
//   //     if ((whiteArray_e[i].position.x <=((190+(950-190)/point_count*(k+1))*s_x) && (whiteArray_e[i].position.x >=((190+(950-190)/point_count*k)*s_x))) && whiteArray_e[i].direction.x>0){
       
        
//   //       array_positive_y[k].push(whiteArray_e[i])
//   //       // console.log(array_positive_y)
//   //   }
  
//   //   if ((whiteArray_e[i].position.x <=((190+(950-190)/point_count*(k+1))*s_x) && (whiteArray_e[i].position.x >=((190+(950-190)/point_count*k)*s_x))) && whiteArray_e[i].direction.x<0){
       
        
//   //     array_negative_y[k].push(whiteArray_e[i])
//   //     // console.log("array_negative_y")
//   // }
//   //   }
//   // }


// } else if (switch_1 == 1) {
//   for (let i = 0; i < blackArray.length; i++) {
//     if ((blackArray[i].position.x <=((190)*s_x) && (blackArray[i].position.x >=((150)*s_x))) && blackArray[i].direction.x>0){
       
        
//       array_positive_y_0.push(blackArray[i])
//       // console.log(array_positive_y)
//   }
  
//   if ((blackArray[i].position.x <=((190)*s_x) && (blackArray[i].position.x >=((150)*s_x))) && blackArray[i].direction.x<0){
       
        
//     array_negative_y_0.push(blackArray[i])
//     // console.log("array_negative_y")
//   }
  
//     for (let k = 0; k<point_count; k++){
//       if ((blackArray[i].position.x <=((190+(950-190)/point_count*(k+1))*s_x) && (blackArray[i].position.x >=((190+(950-190)/point_count*k)*s_x))) && blackArray[i].direction.x>0){
       
        
//         array_positive_y[k].push(blackArray[i])
//         // console.log(array_positive_y)
//     }
  
//     if ((blackArray[i].position.x <=((190+(950-190)/point_count*(k+1))*s_x) && (blackArray[i].position.x >=((190+(950-190)/point_count*k)*s_x))) && blackArray[i].direction.x<0){
       
        
//       array_negative_y[k].push(blackArray[i])
//       // console.log("array_negative_y")
//   }
//     }
//   }

//   // for (let i = 0; i < blackArray_h.length; i++) {
//   //   if ((blackArray_h[i].position.x <=((190)*s_x) && (blackArray_h[i].position.x >=((150)*s_x))) && blackArray_h[i].direction.x>0){
       
        
//   //     array_positive_y_0.push(blackArray_h[i])
//   //     // console.log(array_positive_y)
//   // }
  
//   // if ((blackArray_h[i].position.x <=((190)*s_x) && (blackArray_h[i].position.x >=((150)*s_x))) && blackArray_h[i].direction.x<0){
       
        
//   //   array_negative_y_0.push(blackArray_h[i])
//   //   // console.log("array_negative_y")
//   // }
  
//   //   for (let k = 0; k<point_count; k++){
//   //     if ((blackArray_h[i].position.x <=((190+(950-190)/point_count*(k+1))*s_x) && (blackArray_h[i].position.x >=((190+(950-190)/point_count*k)*s_x))) && blackArray_h[i].direction.x>0){
       
        
//   //       array_positive_y[k].push(blackArray[i])
//   //       // console.log(array_positive_y)
//   //   }
  
//   //   if ((blackArray_h[i].position.x <=((190+(950-190)/point_count*(k+1))*s_x) && (blackArray_h[i].position.x >=((190+(950-190)/point_count*k)*s_x))) && blackArray_h[i].direction.x<0){
       
        
//   //     array_negative_y[k].push(blackArray_h[i])
//   //     // console.log("array_negative_y")
//   // }
//   //   }
//   // }
// } else if (switch_1 == 2) {
//   for (let i = 0; i < whiteArray.length; i++) {
//     if ((whiteArray[i].position.x <=((190)*s_x) && (whiteArray[i].position.x >=((150)*s_x))) && whiteArray[i].direction.x>0){
       
        
//       array_positive_y_0_e.push(whiteArray[i])
//       // console.log(array_positive_y)
//   }
  
//   if ((whiteArray[i].position.x <=((190)*s_x) && (whiteArray[i].position.x >=((150)*s_x))) && whiteArray[i].direction.x<0){
       
        
//     array_negative_y_0_e.push(whiteArray[i])
//     // console.log("array_negative_y")
//   }
  
//     for (let k = 0; k<point_count; k++){
//       if ((whiteArray[i].position.x <=((190+(950-190)/point_count*(k+1))*s_x) && (whiteArray[i].position.x >=((190+(950-190)/point_count*k)*s_x))) && whiteArray[i].direction.x>0){
       
        
//         array_positive_y_e[k].push(whiteArray[i])
//         // console.log(array_positive_y)
//     }
  
//     if ((whiteArray[i].position.x <=((190+(950-190)/point_count*(k+1))*s_x) && (whiteArray[i].position.x >=((190+(950-190)/point_count*k)*s_x))) && whiteArray[i].direction.x<0){
       
        
//       array_negative_y_e[k].push(whiteArray[i])
//       // console.log("array_negative_y")
//   }
//     }
//   }

//   ///
//   for (let i = 0; i < whiteArray_e.length; i++) {
//     if ((whiteArray_e[i].position.x <=((190)*s_x) && (whiteArray_e[i].position.x >=((150)*s_x))) && whiteArray_e[i].direction.x>0){
       
        
//       array_positive_y_0_e.push(whiteArray_e[i])
//       // console.log(array_positive_y)
//   }
  
//   if ((whiteArray_e[i].position.x <=((190)*s_x) && (whiteArray_e[i].position.x >=((150)*s_x))) && whiteArray_e[i].direction.x<0){
       
        
//     array_negative_y_0_e.push(whiteArray_e[i])
//     // console.log("array_negative_y")
//   }
  
//     for (let k = 0; k<point_count; k++){
//       if ((whiteArray_e[i].position.x <=((190+(950-190)/point_count*(k+1))*s_x) && (whiteArray_e[i].position.x >=((190+(950-190)/point_count*k)*s_x))) && whiteArray_e[i].direction.x>0){
       
        
//         array_positive_y_e[k].push(whiteArray_e[i])
//         // console.log(array_positive_y)
//     }
  
//     if ((whiteArray_e[i].position.x <=((190+(950-190)/point_count*(k+1))*s_x) && (whiteArray_e[i].position.x >=((190+(950-190)/point_count*k)*s_x))) && whiteArray_e[i].direction.x<0){
       
        
//       array_negative_y_e[k].push(whiteArray_e[i])
//       // console.log("array_negative_y")
//   }
//     }
//   }


//   ////
//   for (let i = 0; i < blackArray.length; i++) {
//     if ((blackArray[i].position.x <=((190)*s_x) && (blackArray[i].position.x >=((150)*s_x))) && blackArray[i].direction.x>0){
       
        
//       array_positive_y_0_h.push(blackArray[i])
//       // console.log(array_positive_y)
//   }
  
//   if ((blackArray[i].position.x <=((190)*s_x) && (blackArray[i].position.x >=((150)*s_x))) && blackArray[i].direction.x<0){
       
        
//     array_negative_y_0_h.push(blackArray[i])
//     // console.log("array_negative_y")
//   }
  
//     for (let k = 0; k<point_count; k++){
//       if ((blackArray[i].position.x <=((190+(950-190)/point_count*(k+1))*s_x) && (blackArray[i].position.x >=((190+(950-190)/point_count*k)*s_x))) && blackArray[i].direction.x>0){
       
        
//         array_positive_y_h[k].push(blackArray[i])
//         // console.log(array_positive_y)
//     }
  
//     if ((blackArray[i].position.x <=((190+(950-190)/point_count*(k+1))*s_x) && (blackArray[i].position.x >=((190+(950-190)/point_count*k)*s_x))) && blackArray[i].direction.x<0){
       
        
//       array_negative_y_h[k].push(blackArray[i])
//       // console.log("array_negative_y")
//   }
//     }
//   }


//   ////
//   for (let i = 0; i < blackArray_h.length; i++) {
//     if ((blackArray_h[i].position.x <=((190)*s_x) && (blackArray_h[i].position.x >=((150)*s_x))) && blackArray_h[i].direction.x>0){
       
        
//       array_positive_y_0_h.push(blackArray_h[i])
//       // console.log(array_positive_y)
//   }
  
//   if ((blackArray_h[i].position.x <=((190)*s_x) && (blackArray_h[i].position.x >=((150)*s_x))) && blackArray_h[i].direction.x<0){
       
        
//     array_negative_y_0_h.push(blackArray_h[i])
//     // console.log("array_negative_y")
//   }
  
//     for (let k = 0; k<point_count; k++){
//       if ((blackArray_h[i].position.x <=((190+(950-190)/point_count*(k+1))*s_x) && (blackArray_h[i].position.x >=((190+(950-190)/point_count*k)*s_x))) && blackArray_h[i].direction.x>0){
       
        
//         array_positive_y_h[k].push(blackArray_h[i])
//         // console.log(array_positive_y)
//     }
  
//     if ((blackArray_h[i].position.x <=((190+(950-190)/point_count*(k+1))*s_x) && (blackArray_h[i].position.x >=((190+(950-190)/point_count*k)*s_x))) && blackArray_h[i].direction.x<0){
       
        
//       array_negative_y_h[k].push(blackArray_h[i])
//       // console.log("array_negative_y")
//   }
//     }
//   }
// } 




 
// }
// }

// }

genBalls_scene1 = (num) =>{}

blinking = () =>{
  clearInterval(blink);
  interval_blink = 2000;
  blink = setInterval(function(){blinking();}, interval_blink);



}

genBalls = (num) =>{
  clearInterval(run45);
  interval_45 = 4000/g_rate;

  run45 = setInterval(function(){genBalls(1);}, gg_rate);


  // generate *num* balls
//   if (sceneCount == 13 || sceneCount == 12 ||  sceneCount ==2||sceneCount ==3 ||sceneCount ==1.5 ){
//     // console.log("haha")
//     if (time_count>0) {
//       whiteArray = [];
//       blackArray = [];
    

//       recombination_Rate_c = 0;
    
//       recombination_Rate = 0;
 

//       recombination_Rate_c = 0;

//     } else if (time_count==0){
//   for (let i=0; i < num; i ++){
//     let a = random(200*s_x,930*s_x);
//     let b = random((20+385)*s_y,770*s_y);

//     appearArray.push(new Appear(a,b,10,0));

//     whiteArray.push(new Vehicle(a, b, 10, global_id, 0));
//     blackArray.push(new Vehicle(a, b, 10, global_id, 1));
//     whiteID.push(global_id);
//     blackID.push(global_id);
//     global_id += 1;
//   }
// }
//   }



if (sceneCount ==1.5 || sceneCount ==2|| sceneCount ==3){
  // console.log("haha")
  if (time_count>0) {
    whiteArray = [];
    blackArray = [];
  

    recombination_Rate_c = 0;
  
    recombination_Rate = 0;


    recombination_Rate_c = 0;

  } else if (time_count==0){
for (let i=0; i < num; i ++){
  let a = random(200*s_x,930*s_x);
  let b = random((20+385)*s_y,770*s_y);

  appearArray.push(new Appear(a,b,10,0));

  let xx = findClosestValue(line_yellow, a)

  
  let aa = new Vehicle(a, b, 10, global_id, 0);
  aa.origin.x = xx;
  aa.top =1;
  whiteArray.push(aa);


  let yy = findClosestValue(line_green, a)
  // console.log(yy)

  let bb = new Vehicle(a, b, 10, global_id, 1);
  bb.origin.y  = yy;
  bb.top = 1;
  blackArray.push(bb);

  whiteID.push(global_id);
  blackID.push(global_id);
  global_id += 1;
}
}
}

// if (sceneCount ==3){
//   // console.log("haha")
//   if (time_count>0) {
//     whiteArray = [];
//     blackArray = [];
  

//     recombination_Rate_c = 0;
  
//     recombination_Rate = 0;


//     recombination_Rate_c = 0;

//   } else if (time_count==0){
// for (let i=0; i < new_generate; i ++){
//   let a = random(200*s_x,930*s_x);
//   let b = random((20+385)*s_y,770*s_y);

//   appearArray.push(new Appear(a,b,10,0));

//   let xx = findClosestValue(line_yellow, a)

  
//   let aa = new Vehicle(a, b, 10, global_id, 0);
//   aa.origin.x = xx;
//   aa.top =1;
//   whiteArray.push(aa);


//   let yy = findClosestValue(line_green, a)
//   // console.log(yy)

//   let bb = new Vehicle(a, b, 10, global_id, 1);
//   bb.origin.y  = yy;
//   bb.top = 1;
//   blackArray.push(bb);

//   whiteID.push(global_id);
//   blackID.push(global_id);
//   global_id += 1;
// }
// }
// }

 


}

genBalls_outer = (num) =>{
  // clearInterval(run_outer);
  // // interval_45 = 4000/g_rate;

  // run_outer = setInterval(function(){genBalls(1);}, 1000/new_generate);

  clearInterval(run_outer);
  // run_outer = 1000;

  run_outer = setInterval(function() {
    genBalls_outer(1); // Generate 1 new set of balls at the rate defined by new_generate
  }, 1000 / new_generate);


  // generate *num* balls
//   if (sceneCount == 13 || sceneCount == 12 ||  sceneCount ==2||sceneCount ==3 ||sceneCount ==1.5 ){
//     // console.log("haha")
//     if (time_count>0) {
//       whiteArray = [];
//       blackArray = [];
    

//       recombination_Rate_c = 0;
    
//       recombination_Rate = 0;
 

//       recombination_Rate_c = 0;

//     } else if (time_count==0){
//   for (let i=0; i < num; i ++){
//     let a = random(200*s_x,930*s_x);
//     let b = random((20+385)*s_y,770*s_y);

//     appearArray.push(new Appear(a,b,10,0));

//     whiteArray.push(new Vehicle(a, b, 10, global_id, 0));
//     blackArray.push(new Vehicle(a, b, 10, global_id, 1));
//     whiteID.push(global_id);
//     blackID.push(global_id);
//     global_id += 1;
//   }
// }
//   }





if (sceneCount ==3){
  // console.log("haha")
  if (time_count>0) {
    whiteArray = [];
    blackArray = [];
  

    recombination_Rate_c = 0;
  
    recombination_Rate = 0;


    recombination_Rate_c = 0;

  } else if (time_count==0){
for (let i=0; i < num; i ++){
  const condition = Math.random() < 0.5; // This gives a 50-50 chance to choose between the two conditions

  let a;
  if (condition) {
      // If condition is true, satisfy the first condition: a >= (550 - (400 / 8) * X_n) * s_x
      // const min = (550 - (400 / 8) * X_n) * s_x;
      const min = ((400)/8*count_pn_num*2)*s_x + (550 - (400 / 8) * count_pn_num) * s_x;
      const max = 930 * s_x; // Assuming 930*s_x is the upper limit for 'a'
      a = random(min, max); // Generate a random number between min and max
  } else {
      // If condition is false, satisfy the second condition: a <= ((400 / 8) * X_n * 2) * s_x + (550 - (400 / 8) * X_n)
      // const max = ((400 / 8) * X_n * 2) * s_x + (550 - (400 / 8) * X_n) * s_x;
      const max = (550 - (400 / 8) * count_pn_num) * s_x
      const min = 200 * s_x; // Assuming 200*s_x is the lower limit for 'a'
      a = random(min, max); // Generate a random number between min and max
  }

  let b = random((20+385)*s_y,770*s_y);

  appearArray.push(new Appear(a,b,10,0));

  let xx = findClosestValue(line_yellow, a)

  
  let aa = new Vehicle(a, b, 10, global_id, 0);
  aa.origin.x = xx;
  aa.top =1;
  whiteArray.push(aa);


  let yy = findClosestValue(line_green, a)
  // console.log(yy)

  let bb = new Vehicle(a, b, 10, global_id, 1);
  bb.origin.y  = yy;
  bb.top = 1;
  blackArray.push(bb);

  whiteID.push(global_id);
  blackID.push(global_id);
  global_id += 1;
}
}
}

 


}

genBalls_straight = (num) =>{





if (sceneCount ==1.5 ){
  // console.log("haha")
  if (time_count>0) {
    whiteArray = [];
    blackArray = [];
  

    recombination_Rate_c = 0;
  
    recombination_Rate = 0;


    recombination_Rate_c = 0;

  } else if (time_count==0){
for (let i=0; i < num; i ++){
  let a = random(500*s_x,930*s_x);
  let b = random((20+385)*s_y,770*s_y);

  appearArray.push(new Appear(a,b,10,0));

  let xx = findClosestValue(line_yellow, a)

  
  let aa = new Vehicle(a, b, 10, global_id, 0);
  aa.origin.x = xx;
  aa.top =1;
  aa.straight=1;
  aa.botz =3
  whiteArray.push(aa);


 
  // console.log(yy)

  let a_2 = random(300*s_x,530*s_x);
  let b_2 = random((20+385)*s_y,770*s_y);

  appearArray.push(new Appear(a_2,b_2,10,0));

  let yy = findClosestValue(line_green, a_2)

  let bb = new Vehicle(a_2, b_2, 10, global_id, 1);
  bb.origin.y  = yy;
  bb.top = 1;
  bb.straight=1;
  bb.botz =3
  blackArray.push(bb);

  whiteID.push(global_id);
  blackID.push(global_id);
  global_id += 1;
}
}
}

 


}

time_graph = () => {
  if (time_count_graph > 0) {
    time_count_graph-=1;
  }
}

setGeneration = (a) => {
  gg_rate = a

}



add_e= (a) =>{
  //123-133
  // distance_dis = 10-((a-123)/10*8+1)

  d_factor = Math.pow((a-123)/10*5,1/2)
  // distance_dis = 10-factor_ca*(d_factor)


  changg = (a-123)/10*(122) 
  electron_add = Math.pow(10,a/10);
  // let mmm = Math.pow(10,((30 / 23)*(a - 110)+110)/10)
  let mmm = Math.pow(10,((10 / 10)*(a - 124)+124)/10)*5
  let nnn = mmm.toExponential(1)
  // document.getElementById("add_e_text").value=nnn
  document.getElementById("add_e_text_2").value=nnn
  time_count = 0;

  appearArray_s1 = [];
  
  reset_scene1()


appearArray_s1 = []
whiteArray_e = [];
whiteID_e  = [];

appearArray_s1 = []
appearArray_s2 = []
blackArray_h = [];
blackID_h  = [];

 

  if (sceneCount ==3) {
  
    
  
      current_Electron_c = Math.round(electron_add ) 

  e_count = Math.pow(100,((Math.log10(Math.round(electron_add ))-8)/2))/1000

  ///  fraction cal   // n_c delta_ED

  n_c = 2.86*Math.pow(10,19)*Math.pow(temp/300,3/2)
  // let tempe_fraction_e
  tempe_fraction_e = (-1+Math.pow(1+8*Math.round(electron_add ) /n_c*Math.exp(45*300/26/temp),1/2))/(4*Math.round(electron_add ) /n_c*Math.exp(45*300/26/temp))

  current_Electron_c = Math.round(electron_add ) *tempe_fraction_e
  // console.log(Math.round(100*tempe_fraction_e)/100)
  fraction_e.push(Math.round(100*tempe_fraction_e)/100)

  fraction_e_count = Math.round(e_count*(1-fraction_e[fraction_e.length-1]))

  constant_fermi_final = 0.026*constant_temperature/300*Math.log((electron_add+Math.pow(Math.pow(electron_add,2)+  Math.pow(constant_temperature/300*1.06*Math.pow(10,10),2),1/2))/(2*constant_temperature/300*1.06*Math.pow(10,10)))-0.28*0.026*constant_temperature/300
     
  constant_fermi_final = Math.round(1000*constant_fermi_final)/1000

  //freeze

  nn = 4.6*Math.pow(10,15)*Math.pow(temp,1.5)*Math.exp(-1.12/(2*0.026/300*temp)) //new wrong
  let inside = (electron_add*tempe_fraction_e+Math.pow((Math.pow(electron_add*tempe_fraction_e,2)+4*Math.pow(nn,2)),1/2))/(2*nn)
  constant_fermi_positive = (0.026/300)*temp * Math.log(inside)+(-0.28)*(0.026/300*temp)

  
  // nn = 4.6*Math.pow(10,15)*Math.pow(temp,1.5)*Math.exp(-1.12/(2*0.026/300*temp)) //new wrong
  //   let inside = (electron_add+Math.pow((Math.pow(electron_add,2)+4*Math.pow(nn,2)),1/2))/(2*nn)
  //   constant_fermi_positive = (0.026/300)*temp * Math.log(inside)+(-0.28)*(0.026/300*temp)

 
        // reset_d3bands_3_1() 
        // d3bands_3_1()
///

  for (let i=0; i < e_count; i ++){

    let a = random(170*s_x,930*s_x);
    let b = random((20+385)*s_y,760*s_y);
    appearArray_s1.push(new Appear(a,b,10,4,i));
//id start from 0 ,color 4

    whiteArray_e.push(new Vehicle(a, b, 10, "e", 0));
    whiteID_e.push(global_id);
    global_id += 1;
    }
  
  
    ///////hole



      current_Hole_c = Math.round(hole_add) 
      // h_count  = (100-0.01)/4*Math.log10(current_Hole_c)+0.01-(100-0.01)*8/4; 
      h_count = Math.pow(100,((Math.log10(current_Hole_c)-8)/2))/1000

      //note_bun

      ///  fraction cal   // n_c delta_ED

 n_v = 2.66*Math.pow(10,19)*Math.pow(temp/300,3/2)
 let tempe_fraction_h
 tempe_fraction_h = (-1+Math.pow(1+8*current_Hole_c/n_v*Math.exp(45*300/26/temp),1/2))/(4*current_Hole_c/n_v*Math.exp(45*300/26/temp))

 fraction_h.push(Math.round(100*tempe_fraction_h)/100)

 fraction_h_count = Math.round(e_count*(1-fraction_h[fraction_h.length-1]))
 // console.log(fraction_e_count)
 // console.log(tempe_fraction_e+"donor")
///

     for (let i=0; i < h_count; i ++){

      let a = random(200*s_x,900*s_x);
      let b = random(30*s_y,730*s_y);
    
      appearArray_s1.push(new Appear(a,b,10,5,i));
  
      blackArray_h.push(new Vehicle(a, b, 10, "h", 1));
      blackID_h.push(global_id);
      global_id += 1;
      }
    
  

  }

  
       
   if (sceneCount ==22 ) {
    if (electron_add - hole_add >=0) {
      //more e
      
      current_Electron_c = Math.round(electron_add ) - Math.round(hole_add);
      // e_count  = Math.round(Math.log10(current_Electron_c)); 
  
      e_count = Math.pow(100,((Math.log10(current_Electron_c)-8)/2))/1000
  
      
      constant_fermi = 0.026*constant_temperature/300*Math.log((electron_add+Math.pow(Math.pow(electron_add,2)+  Math.pow(constant_temperature/300*1.06*Math.pow(10,10),2),1/2))/(2*constant_temperature/300*1.06*Math.pow(10,10)))-0.28*0.026*constant_temperature/300
     
      constant_fermi = Math.round(1000*constant_fermi)/1000

      //mark me
  
      nn = 4.6*Math.pow(10,15)*Math.pow(temp,1.5)*Math.exp(-1.12/(2*0.026/300*temp)) //new wrong
    let inside = (electron_add+Math.pow((Math.pow(electron_add,2)+4*Math.pow(nn,2)),1/2))/(2*nn)
    constant_fermi_positive = (0.026/300)*temp * Math.log(inside)+(-0.28)*(0.026/300*temp)
 
        reset_d3bands_2() 
        d3bands_2()

      for (let i=0; i < e_count; i ++){
  
   
  
        let a = random(200*s_x,900*s_x);
        let b = random(30*s_y,730*s_y);  
        appearArray_s1.push(new Appear(a,b,10,4));
    
        whiteArray_e.push(new Vehicle(a, b, 10, global_id, 0));
        whiteID_e.push(global_id);
        global_id += 1;
        }
      
  
  
    } 
   }
   
}


add_h= (a) =>{
  // distance_dis = 10-((a-123)/10*8+1)



  

 


  // if (a==130){
  //   array_band_hardcode = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -0.008894972236313038, -0.1601095002536185, -0.4536435840519165, -0.8894972236312069, -1.46767041899149, -2.188163170132765, -3.050975477055033, -4.056107339758293, -5.203558758242546, -6.493329732507791, -7.925420262554029, -9.46425045943601, -10.896340989482248, -12.186111963747493, -13.333563382231745, -14.338695244935005, -15.201507551857272, -15.922000302998548, -16.50017349835883, -16.93602713793812, -17.229561221736418, -17.380775749753724, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036]
  // }  if (a==130.5){
  //   array_band_hardcode = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -0.08400768283403261, -0.33603073133614, -0.7560691455063221, -1.344122925344579, -2.1001920708509108, -3.0242765820253172, -4.116376458867799, -5.376491701378355, -6.8046223095569855, -8.400768283403691, -10.164929622918471, -12.097106328101326, -14.197298398952256, -16.465505835471262, -18.859724796241323, -21.12793223276033, -23.22812430361126, -25.160301008794114, -26.924462348308893, -28.5206083221556, -29.94873893033423, -31.208854172844784, -32.30095404968726, -33.22503856086167, -33.981107706368, -34.569161486206255, -34.989199900376434, -35.241222948878544, -35.32523063171258, -35.32523063171258, -35.32523063171258, -35.32523063171258, -35.32523063171258, -35.32523063171258, -35.32523063171258, -35.32523063171258, -35.32523063171258, -35.32523063171258, -35.32523063171258, -35.32523063171258, -35.32523063171258, -35.32523063171258, -35.32523063171258, -35.32523063171258, -35.32523063171258, -35.32523063171258, -35.32523063171258, -35.32523063171258, -35.32523063171258, -35.32523063171258, -35.32523063171258, -35.32523063171258, -35.32523063171258, -35.32523063171258, -35.32523063171258, -35.32523063171258, -35.32523063171258, -35.32523063171258, -35.32523063171258, -35.32523063171258, -35.32523063171258, -35.32523063171258, -35.32523063171258]
  // } if (a==131) {
  //   array_band_hardcode = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -0.1611741623196563, -0.5207165244173546, -1.078627086293095, -1.8349058479468772, -2.7895528093787014, -3.942567970588568, -5.293951331576476, -6.843702892342426, -8.59182265288642, -10.538310613208454, -12.68316677330853, -15.026391133186648, -17.56798369284281, -20.258352402332502, -22.79994496198866, -25.14316932186678, -27.288025481966855, -29.23451344228889, -30.982633202832883, -32.532384763598834, -33.883768124586744, -35.03678328579661, -35.991430247228436, -36.74770900888222, -37.305619570757955, -37.66516193285565, -37.82633609517531, -37.82633609517531, -37.82633609517531, -37.82633609517531, -37.82633609517531, -37.82633609517531, -37.82633609517531, -37.82633609517531, -37.82633609517531, -37.82633609517531, -37.82633609517531, -37.82633609517531, -37.82633609517531, -37.82633609517531, -37.82633609517531, -37.82633609517531, -37.82633609517531, -37.82633609517531, -37.82633609517531, -37.82633609517531, -37.82633609517531, -37.82633609517531, -37.82633609517531, -37.82633609517531, -37.82633609517531, -37.82633609517531, -37.82633609517531, -37.82633609517531, -37.82633609517531, -37.82633609517531, -37.82633609517531, -37.82633609517531, -37.82633609517531, -37.82633609517531, -37.82633609517531, -37.82633609517531]
  // } if (a==131.5){
  //   array_band_hardcode = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -0.029278089498307763, -0.2927808949830776, -0.7905084164543096, -1.5224606539120038, -2.48863760735616, -3.689039276786778, -5.123665662203859, -6.792516763607401, -8.695592580997406, -10.832893114373872, -13.204418363736801, -15.810168329086192, -18.650143010422045, -21.665786228747745, -24.5057609100836, -27.111510875432987, -29.483036124795916, -31.620336658172384, -33.52341247556239, -35.19226357696593, -36.62688996238301, -37.82729163181363, -38.793468585257784, -39.525420822715475, -40.02314834418671, -40.28665114967148, -40.31592923916978, -40.31592923916978, -40.31592923916978, -40.31592923916978, -40.31592923916978, -40.31592923916978, -40.31592923916978, -40.31592923916978, -40.31592923916978, -40.31592923916978, -40.31592923916978, -40.31592923916978, -40.31592923916978, -40.31592923916978, -40.31592923916978, -40.31592923916978, -40.31592923916978, -40.31592923916978, -40.31592923916978, -40.31592923916978, -40.31592923916978, -40.31592923916978, -40.31592923916978, -40.31592923916978, -40.31592923916978, -40.31592923916978, -40.31592923916978, -40.31592923916978, -40.31592923916978, -40.31592923916978, -40.31592923916978, -40.31592923916978, -40.31592923916978, -40.31592923916978, -40.31592923916978, -40.31592923916978]
  // } if (a==132){
  //   array_band_hardcode = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -0.13829295022583368, -0.5531718009033308, -1.2446365520324916, -2.212687203613316, -3.4573237556458034, -4.978546208129955, -6.776354561065769, -8.850748814453247, -11.20172896829239, -13.829295022583194, -16.733446977325663, -19.914184832519794, -23.302362113052673, -26.483099968246805, -29.38725192298927, -32.014817977280075, -34.36579813111921, -36.44019238450669, -38.238000737442505, -39.75922318992666, -41.00385974195915, -41.97191039353997, -42.66337514466913, -43.07825399534663, -43.21654694557246, -43.21654694557246, -43.21654694557246, -43.21654694557246, -43.21654694557246, -43.21654694557246, -43.21654694557246, -43.21654694557246, -43.21654694557246, -43.21654694557246, -43.21654694557246, -43.21654694557246, -43.21654694557246, -43.21654694557246, -43.21654694557246, -43.21654694557246, -43.21654694557246, -43.21654694557246, -43.21654694557246, -43.21654694557246, -43.21654694557246, -43.21654694557246, -43.21654694557246, -43.21654694557246, -43.21654694557246, -43.21654694557246, -43.21654694557246, -43.21654694557246, -43.21654694557246, -43.21654694557246, -43.21654694557246, -43.21654694557246, -43.21654694557246, -43.21654694557246, -43.21654694557246, -43.21654694557246, -43.21654694557246]
  // } if (a==132.5) {
  //   array_band_hardcode = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -0.2858058539367598, -0.8982469695155282, -1.837323346736305, -3.1030349855990904, -4.695381886103885, -6.614364048250687, -8.859981472039498, -11.432234157470319, -14.331122104543146, -17.55664531325798, -21.108803783614825, -24.905938700203176, -28.45809717056002, -31.683620379274856, -34.582508326347686, -37.154761011778504, -39.40037843556731, -41.319360597714116, -42.91170749821891, -44.17741913708169, -45.11649551430247, -45.72893662988124, -46.014742483818, -46.014742483818, -46.014742483818, -46.014742483818, -46.014742483818, -46.014742483818, -46.014742483818, -46.014742483818, -46.014742483818, -46.014742483818, -46.014742483818, -46.014742483818, -46.014742483818, -46.014742483818, -46.014742483818, -46.014742483818, -46.014742483818, -46.014742483818, -46.014742483818, -46.014742483818, -46.014742483818, -46.014742483818, -46.014742483818, -46.014742483818, -46.014742483818, -46.014742483818, -46.014742483818, -46.014742483818, -46.014742483818, -46.014742483818, -46.014742483818, -46.014742483818, -46.014742483818, -46.014742483818, -46.014742483818, -46.014742483818, -46.014742483818, -46.014742483818]
  // } if (a==133){
  //   array_band_hardcode = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -0.1205538078513229, -0.6268798008268702, -1.518977978926642, -2.7968483421506383, -4.460490890498859, -6.509905623971304, -8.945092542567973, -11.766051646288867, -14.972782935133985, -18.56528640910333, -22.5435620681969, -26.811166866133636, -30.7894425252272, -34.381945999196546, -37.588677288041666, -40.40963639176256, -42.84482331035923, -44.89423804383168, -46.5578805921799, -47.835750955403896, -48.72784913350367, -49.234175126479215, -49.35472893433054, -49.35472893433054, -49.35472893433054, -49.35472893433054, -49.35472893433054, -49.35472893433054, -49.35472893433054, -49.35472893433054, -49.35472893433054, -49.35472893433054, -49.35472893433054, -49.35472893433054, -49.35472893433054, -49.35472893433054, -49.35472893433054, -49.35472893433054, -49.35472893433054, -49.35472893433054, -49.35472893433054, -49.35472893433054, -49.35472893433054, -49.35472893433054, -49.35472893433054, -49.35472893433054, -49.35472893433054, -49.35472893433054, -49.35472893433054, -49.35472893433054, -49.35472893433054, -49.35472893433054, -49.35472893433054, -49.35472893433054, -49.35472893433054, -49.35472893433054, -49.35472893433054, -49.35472893433054, -49.35472893433054, -49.35472893433054]
  //   // console.log("????")
  // }

  array_band_hardcode = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -0.008894972236313038, -0.1601095002536185, -0.4536435840519165, -0.8894972236312069, -1.46767041899149, -2.188163170132765, -3.050975477055033, -4.056107339758293, -5.203558758242546, -6.493329732507791, -7.925420262554029, -9.46425045943601, -10.896340989482248, -12.186111963747493, -13.333563382231745, -14.338695244935005, -15.201507551857272, -15.922000302998548, -16.50017349835883, -16.93602713793812, -17.229561221736418, -17.380775749753724, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036]


 

  count_pn_num = 0

  d_factor = Math.pow((a-123)/10*5,1/2)
  // distance_dis = 10-factor_ca*(d_factor)
  
  changg = (a-123)/10*(122) 

  // changg =80

  hole_add = Math.pow(10,a/10)
  electron_add = Math.pow(10,a/10)

  // console.log(hole_add)
  let mm = Math.pow(10,((10 / 10)*(a - 124)+124)/10)*5
  let pp = mm.toExponential(1)
  document.getElementById("add_h_text").value=pp
  document.getElementById("add_h_text_2").value=pp
  document.getElementById("add_h_text_3").value=pp
  hole_add_new = mm

  time_count = 0;
  appearArray_s1 = [];

  // reset_scene1()
  appearArray_s1 = []
whiteArray_e = [];
whiteID_e  = [];

appearArray_s1 = []
appearArray_s2 = []
blackArray_h = [];
blackID_h  = [];
random_botz =[]
whiteArray = [];
  blackArray = [];

  

  ////

  count_n = 0
  count_pn_num =0
  e_field_c = 0

  y_con_c=0
  y_con_2 =0
  y_con = 0
  start_graph =1
  count_graph = 10

  whiteArray = [];
  blackArray = [];
  whiteArray_e  =  []
  blackArray_h = []
  appearArray_s1 = []

  appearArray_s1 = []
  whiteArray_e = [];
  whiteID_e  = [];
  
  appearArray_s1 = []
  appearArray_s2 = []
  blackArray_h = [];
  blackID_h  = [];

  console.log("sss")
   array_graph_con=[]

   con_count =0

  //  console.log(concentration)

  
    array_graph_con.push(new Concentration(scattering_velocity,scattering_count))


//add ---- hhhh left
    if (sceneCount ==1.5 || sceneCount ==2|| sceneCount ==3) {
     
      if (sceneCount==2) {
        new_array_rou_e_set = []
        new_array_rou_h_set = []
  
        let rect_density_new = Math.pow(10,-13)*hole_add_new
  
        X_n = 5811*Math.pow(Math.log(hole_add_new/Math.pow(10,10))/(Math.pow(10,6)*hole_add_new),1/2)*Math.pow(10,6)
        count_pn_num = X_n
  
        let ratio = (-V_applied_p/10+V_applied_n/10)/(1.6*Math.pow(10,-13)*hole_add_new)
    
        count_pn_num = X_n*(1+ratio)
  
        for (let k = 0; k < Math.round(count_pn_num*100); k++) {
          //left of 0 negative
          let x = (550)*s_x-((400)/8*k/100)*s_x;
        
          let n = (10+385/2+96.25)*s_y+rect_density_new*4*s_y*(1-Math.exp(-Math.pow((count_pn_num-k/100),2)/0.026))
         
            new_array_rou_e_set.push({ x: x, y: (n)*1 });
          // }
        
        }
  
        for (let k = 0; k < Math.round(count_pn_num*100); k++) {
          //right of 0 negative
          let x = (550)*s_x+((400)/8*k/100)*s_x;
        
          let n = (10+385/2+96.25)*s_y-rect_density_new*4*s_y*(1-Math.exp(-Math.pow((count_pn_num-k/100),2)/0.026))
         
            new_array_rou_h_set.push({ x: x, y: (n)*1 });
          // }
        
        }
        
      }
     
      if (sceneCount==1.5) {
        new_array_rou_e_set = []
        new_array_rou_h_set = []
  
        let rect_density_new = Math.pow(10,-13)*hole_add_new
  
        X_n = 5811*Math.pow(Math.log(hole_add_new/Math.pow(10,10))/(Math.pow(10,6)*hole_add_new),1/2)*Math.pow(10,6)
        // count_pn_num = X_n
  
        let ratio = (-V_applied_p/10+V_applied_n/10)/(1.6*Math.pow(10,-13)*hole_add_new)
    
        // count_pn_num = X_n*(1+ratio)
  
        for (let k = 0; k < Math.round(X_n*100); k++) {
          //left of 0 negative
          let x = (550)*s_x-((400)/8*k/100)*s_x;
        
          let n = (10+385/2+96.25)*s_y+rect_density_new*4*s_y*(1-Math.exp(-Math.pow((X_n-k/100),2)/0.026))
         
            new_array_rou_e_set.push({ x: x, y: (n)*1 });
          // }
        
        }
  
        for (let k = 0; k < Math.round(X_n*100); k++) {
          //right of 0 negative
          let x = (550)*s_x+((400)/8*k/100)*s_x;
        
          let n = (10+385/2+96.25)*s_y-rect_density_new*4*s_y*(1-Math.exp(-Math.pow((X_n-k/100),2)/0.026))
         
            new_array_rou_h_set.push({ x: x, y: (n)*1 });
          // }
        
        }
        
      }
     
   
      // console.log(count_pn_num)
 
      current_Electron_c = Math.round(electron_add ) 
      e_count = Math.pow(100,((Math.log10(current_Electron_c)-8)/2))/1000
    
      ///  fraction cal   // n_c delta_ED


      while(random_botz.length < (e_count-2)){
        //v
     let aa = random(1,2000)/100*Math.pow(10,6)
     //p
     let bb = random(1,400)/100*Math.pow(10,6)
     let y = 4 * Math.PI * Math.pow(1.03*Math.pow(10,-10), 3/2) * Math.pow(Math.pow(10,4)*aa, 2) * Math.exp(-1.3*Math.pow(10, -21)*Math.pow(aa*Math.pow(10,4),2)) 
    //  console.log("?")
    //  console.log(y)
     if (bb<y){
       random_botz.push(Math.round(aa/Math.pow(10,6)*2)/4)
        //  random_botz.push(Math.round(10))
    
     }
     }
   
   
    
      n_c = 2.86*Math.pow(10,19)*Math.pow(temp/300,3/2)
      // let tempe_fraction_e
      tempe_fraction_e = (-1+Math.pow(1+8*current_Electron_c/n_c*Math.exp(45*300/26/temp),1/2))/(4*current_Electron_c/n_c*Math.exp(45*300/26/temp))
    
      fraction_e.push(Math.round(100*tempe_fraction_e)/100)
    
      fraction_e_count = Math.round(e_count*(1-fraction_e[fraction_e.length-1]))
      // console.log(fraction_e_count)
      // console.log(tempe_fraction_e+"donor")
    ///
    
      for (let i=0; i < e_count; i ++){
    
        let a = random(550*s_x,930*s_x);
        // let b = random(30*s_y,730*s_y);  
        let b = random((20+385)*s_y,760*s_y);
        appearArray_s1.push(new Appear(a,b,10,4,i));
    //id start from 0 ,color 4
        var vehicle = new Vehicle(a, b, 10, "e", 0)
        vehicle.botz = random_botz[i]
        whiteArray_e.push(vehicle);
        // whiteID_e.push(global_id);
        global_id += 1;
        }
      
      
        ///////hole
    
    
    
          current_Hole_c = Math.round(hole_add) 
          // h_count  = (100-0.01)/4*Math.log10(current_Hole_c)+0.01-(100-0.01)*8/4; 
          h_count = Math.pow(100,((Math.log10(current_Hole_c)-8)/2))/1000
    
          //note_bun
    
          ///  fraction cal   // n_c delta_ED
    
     n_v = 2.66*Math.pow(10,19)*Math.pow(temp/300,3/2)
     let tempe_fraction_h
     tempe_fraction_h = (-1+Math.pow(1+8*current_Hole_c/n_v*Math.exp(45*300/26/temp),1/2))/(4*current_Hole_c/n_v*Math.exp(45*300/26/temp))
    
     fraction_h.push(Math.round(100*tempe_fraction_h)/100)
    
     fraction_h_count = Math.round(e_count*(1-fraction_h[fraction_h.length-1]))
     // console.log(fraction_e_count)
     // console.log(tempe_fraction_e+"donor")
    ///
    
         for (let i=0; i < h_count; i ++){
    
          let a = random(170*s_x,550*s_x);
          let b = random((20+385)*s_y,760*s_y);
        
          appearArray_s1.push(new Appear(a,b,10,5,i));

          var vehicle2 = new Vehicle(a, b, 10, "h", 1)
          vehicle2.botz = random_botz[i]
          blackArray_h.push(vehicle2);
          blackID_h.push(global_id);
          global_id += 1;
          }
        
          // reset_scene1();
    
      
      
        }
  
         
     
    // if (sceneCount == 33) {
     
    //     // more h
    //     current_Hole_c = Math.round(hole_add) - Math.round(electron_add);
    //     // h_count  = Math.round(Math.log10(current_Hole_c)); 
    
    //     h_count = Math.pow(100,((Math.log10(current_Hole_c)-8)/2))/1000
    
    //     // constant_fermi_negative = -0.026*constant_temperature/300*Math.log((hole_add+Math.pow(Math.pow(hole_add,2)+  Math.pow(constant_temperature/300*1.06*Math.pow(10,10),2),1/2))/(2*constant_temperature/300*1.06*Math.pow(10,10)))-0.28*0.026
    //     // constant_fermi_negative = Math.round(1000*constant_fermi_negative)/1000

    //     nn = 4.6*Math.pow(10,15)*Math.pow(temp,1.5)*Math.exp(-1.12/(2*0.026/300*temp)) //new wrong
    // let inside = (hole_add+Math.pow((Math.pow(hole_add,2)+4*Math.pow(nn,2)),1/2))/(2*nn)
    // constant_fermi_negative = -((0.026/300)*temp * Math.log(inside))+((-0.28)*(0.026/300*temp))
 
    //       reset_d3bands_3() 
    //       d3bands_3()

    
    //     for (let i=0; i < h_count; i ++){
    
    //       let a = random(200*s_x,900*s_x);
    //       let b = random(30*s_y,730*s_y);
        
    //       appearArray_s1.push(new Appear(a,b,10,5));
      
    //       blackArray_h.push(new Vehicle(a, b, 10, global_id, 1));
    //       blackID_h.push(global_id);
    //       global_id += 1;
    //       }
        
    
      
    // }
    
    
    
    
  


 
  

    

}


e_field= (a) => {
  e_field_c = a/10

  document.getElementById("e_f_text").value=a
}

e_field_r= (a) => {
  rate_e = a*0.1

  // e_field_c =a


  // if (count_pn_num <rect_density && hole_add !=0 ) {
  //   // count_pn_num +=0.01
  //   e_field_c +=0.01
  // }
  // document.getElementById("e_f_text").value=a
}



resetGraph= () => {

  // settings.nucleus = document.querySelector('#nuclei-freeze').checked;

  // settings.nn = document.querySelector('#nn').checked;
  // settings.kk = document.querySelector('#kk').checked;

  setTemperature(constant_temperature)

  if(real_graph == 0){
    //on
    real_graph = 1;
    settings.nn = document.querySelector('#nn').checked;
    // console.log("real")


   
  }
  else{
    real_graph = 0;
  

  
  }


  // array_graph_con=[]

  // array_graph_con.push(new Concentration(scattering_velocity,scattering_count))

}


resetGraph_live = () => {

  // settings.nucleus = document.querySelector('#nuclei-freeze').checked;

  // settings.nn = document.querySelector('#nn').checked;
  // settings.kk = document.querySelector('#kk').checked;

  // setTemperature(constant_temperature)

  if(real_graph_live == 0){
    //on
    real_graph_live = 1;
    nn_live.checked = true;
   


   
  }
  else{
    real_graph_live = 0;
    nn_live.checked = false;

  

  
  }


  // switch_recombine= () => { 
  //   if (recombine ==0) {
  //     //off
  //     recombine = 1
  //     switch_re.checked = true
  //   } else {
  //   recombine = 0
  //   switch_re.checked = false 
  // }
  // }


  // array_graph_con=[]

  // array_graph_con.push(new Concentration(scattering_velocity,scattering_count))

}




findClosestValue= (array, targetX) =>{
  // Initialize closest diff with a very large value
  let closestDiff = 1000;
  // Initialize closestBValue as undefined
  let closestBValue;

  for (let i = 0; i < array.length; i++) {
    // Calculate absolute difference between targetX and current x value
    let diff = Math.abs(targetX - array[i][0]);
    // If this difference is less than closest diff found so far
    if (diff < closestDiff) {
        // Update closest diff and closestBValue
        closestDiff = diff;
        closestBValue = array[i][1];  // Assuming 'b' is represented as second element in sub-array
    }
}



// Return the 'b' value of the element with the x value closest to targetX
return closestBValue;
}

let isApplyVpCalled = false;
// apply_V_p = (a) =>{

//   V_applied_p = a 

//   for (var k = 0; k < 100; k++) {
//     //yellow curve
//          line_yellow[k] = [(150+(800)/100*k)*s_x,(171.25-array_band2[k]-100)*s_y]
   
//      }
     
//   updateVehicleOrigins()
//   isApplyVpCalled = true;  // set the flag to true
//   // rect_density= rect_density-V_applied_p/15

// }





apply_V_p = (a) => {

  // if ( a>0) {
  //   factor_new=0
  // }


  V_applied_p = a;

  if (parseInt(V_applied_p)>=3) {

    setFactor(1000)
    factor_new =1/1000*10
  } else {

    // factor_new =1*10
    setFactor(1)
    factor_new =1*20
  }

  // console.log(factor_new)


  // console.log ("old"+line_yellow[99][1])
  let old = line_yellow[99][1]
 


  count_pn_num = X_n
  rect_density = 1.6*Math.pow(10,-13)*hole_add_new-V_applied_p/10+V_applied_n/10

    let ratio = (-V_applied_p/10+V_applied_n/10)/(1.6*Math.pow(10,-13)*hole_add_new)
    
    // console.log (ratio)

    count_pn_num = X_n*(1+ratio)

    // X_n = count_pn_num


  



    for (var i = 0; i<100; i++) {

      //(800)/100*i
      if ((800)/100*i>(550-(400)/8*count_pn_num) && (800)/100*i<(550)){
        array_band1[i-19]= -Math.pow(((800)/100*i-(550-(400)/8*count_pn_num))/((400)/8*count_pn_num)*(2*rect_density/(count_pn_num*100)*177*2) ,1)/5/3
      }  else if (i==50) {
        // array_band1[50]= Math.pow((2*rect_density/(X_n*100)*count_n*2),2)/20
      } else {
        array_band1[i]= 0
      } 
    
      // if (i>50) {
      //   array_band1[i]=  array_band1[100-i]
      // }
    //  triangle((550-(400)/8*count_pn_num)*s_x, (10+385/2+96.25)*s_y, (550+(400)/8*count_pn_num)*s_x, (10+385/2+96.25)*s_y, (550)*s_x, (10+385/2+96.25+  2*rect_density/(X_n*100)*count_n*2)*s_y)
    
    }
    
    for (var i = 0; i<100; i++) {
    
      if (i>50) {
        array_band1[i]=  array_band1[100-i]
      } else if (i=50){
        array_band1[i]=  -Math.pow((2*rect_density/(count_pn_num*100)*177*2) ,1)/5/3
      }
    //  triangle((550-(400)/8*count_pn_num)*s_x, (10+385/2+96.25)*s_y, (550+(400)/8*count_pn_num)*s_x, (10+385/2+96.25)*s_y, (550)*s_x, (10+385/2+96.25+  2*rect_density/(X_n*100)*count_n*2)*s_y)
    
    }


    for (var i = 0; i<100; i++) {

      array_band1[i] = array_band1[i]/3
    
    }
    
    for (var i = 0; i<100; i++) {
      array_band2[i] = 0; // initialize to 0
    
      if (i > 0) { // run the inner loop only if i > 0
        for (var k = 0; k<i; k++) {
          array_band2[i] = array_band2[i] + array_band1[k];
        }
      }
    }


  for (var k = 0; k < 100; k++) {
    line_yellow[k] = [(150+(800)/100*k)*s_x, (171.25-array_band2[k]-100)*s_y];
  }

  // console.log(line_yellow[99][1])

  // console.log ("new"+line_yellow[99][1])
  let dif = line_yellow[99][1] - old
  
  for (let i = 0; i < whiteArray.length; i++) {
    
    let vehicle = whiteArray[i];
    // console.log("old"+vehicle.origin.x)
  
    let newOriginX = findClosestValue(line_yellow, vehicle.position.x);
    // // vehicle.origin.x = line_yellow[99][1]
    vehicle.origin.x = line_yellow[99][1];
    // console.log(line_yellow[99][1])


    // console.log("new"+vehicle.origin.x)

  }


  reset_scene1()

}

apply_V_n = (a) =>{

  V_applied_n = a 
}


function updateVehicleOrigins() {
  for (let i = 0; i < whiteArray.length; i++) {
    let vehicle = whiteArray[i];
    let newOriginX = findClosestValue(line_yellow, vehicle.position.x);
    vehicle.origin.x = newOriginX;
  }
}



function onRefresh() {
  // console.log("The page was refreshed or loaded!");
  add_h(130)
  reset_scene1()

  
}
setTest = (a) =>{

 test_num = a

}

function toggleRecombine() {
  if (recombine === 0) {
    recombine = 1;
  } else {
    recombine = 0;
  }
  // Now recombine will toggle between 0 and 1 every 3 seconds
}

function checkMouseHover(minYY,diff) {
  //yelow
  const threshold = 10; // Threshold distance to detect mouse hover
  for (let i = 0; i < new_array_plot_e_set_count.length; i++) {
    let x = (550 + (400 / 8) * new_array_plot_e_set_count[i].x / 10) * s_x;
    let y = 171.25 * s_y - (171.25 - 55) * (new_array_plot_e_set_count[i].y - minYY) / diff;

    // Calculate the distance between the mouse and the current point
    let d = dist(mouseX, mouseY, x, y);
    // console.log(d)

    // If the mouse is within the threshold distance, draw an ellipse
    if (d < threshold) {
      noStroke();
      fill(254,246,182,100); // White color
      ellipse(x, y, 10, 10); // Draw white ellipse with diameter of 10
      // console.log("????")


      // Calculate the value at this point
      let value = new_array_plot_e_set_count[i].y;
      textSize(12);
      fill(254,246,182,100); // Black color for text
      text(value.toExponential(1), x + 15, y); // Display the value next to the ellipse
      break; // Stop checking other points (optional, remove if you want multiple points to be highlighted)
    }
  }

  





  // fill(125, 241, 148,100); // Black color for text

}




function checkMouseHoverForNewCurve(minYY, diff) {
  const threshold = 10; // Threshold distance to detect mouse hover

  for (let i = 0; i < new_array_plot_h_set_count.length; i++) {
    let x = (550 + (400 / 8) * new_array_plot_h_set_count[i].x / 10) * s_x;
    let y = 368 * s_y - (171.25 - 55) * (new_array_plot_h_set_count[i].y - minYY) / diff;

    // Calculate the distance between the mouse and the current point
    let d = dist(mouseX, mouseY, x, y);

    // If the mouse is within the threshold distance, draw an ellipse
    if (d < threshold) {
      strokeWeight(1);
      fill(30)
      stroke(125, 241, 148); // Semi-transparent white color
      ellipse(x, y, 10, 10); // Draw ellipse with diameter of 10

      // Calculate the value at this point
      let value = new_array_plot_h_set_count[i].y;
      textSize(12);
      noStroke()
      fill(125, 241, 148, 100); // Text color
      text(value.toExponential(1), x + 15, y); // Display the value next to the ellipse
      break; // Stop checking other points (optional)
    }
  }
}


function checkMouseHoverForStraightLine() {
  // green
  const threshold = 10; // Threshold distance to detect mouse hover on x-axis

  for (let i = 0; i < new_array_plot_h_set_count.length; i++) {
    let x = (550 + (400 / 8) * new_array_plot_h_set_count[i].x / 10) * s_x;
    let y = 368 * s_y;

    // Check if mouse x-coordinate is close to the point's x-coordinate
    if (abs(mouseX - x) < threshold) {
      strokeWeight(1);
      fill(30)
      stroke(125, 241, 148); // Semi-transparent white color
      ellipse(x, y, 10, 10); // Draw ellipse with diameter of 10

      // Calculate the value at this point
      let value = new_array_plot_h_set_count[i].y;
      textSize(12);
      noStroke()
      fill(125, 241, 148, 100); // Text color
      text(value.toExponential(1), x + 15, y); // Display the value next to the ellipse
      break; // Stop checking other points
    }
  }
}


function checkMouseHoverForNewStraightLine() {
  //yellow
  const threshold = 10; // Threshold distance to detect mouse hover on x-axis

  for (let i = 0; i < new_array_plot_e_set_count.length; i++) {
    let x = (550 + (400 / 8) * new_array_plot_e_set_count[i].x / 10) * s_x;
    let y = 171.25 * s_y; // y-coordinate for the new line

    // Check if mouse x-coordinate is close to the point's x-coordinate
    if (abs(mouseX - x) < threshold) {
      noStroke();
      fill(254,246,182,100); // White color
      ellipse(x, y, 10, 10); // Draw ellipse with diameter of 10

      // Calculate the value at this point
      let value = new_array_plot_e_set_count[i].y;
      textSize(12);
      fill(254,246,182, 100); // Text color
      text(value.toExponential(1), x + 15, y); // Display the value next to the ellipse
      break; // Stop checking other points
    }
  }
}




apply_new_generation = (a) =>{

  new_generate = a 

}

setChangeV = (a) =>{

  changeV = a 

}