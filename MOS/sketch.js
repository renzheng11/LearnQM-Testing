/***********************************************************************
 * Section: set variables
 ***********************************************************************/
let appearArray_s1 = [] //appear list 

let blackArray_h = []; //green dot list
let blackID_h  = []; //green dot id
let whiteArray_e = []; //yellow dot list

let d_factor = 1; //distance factor

let array_band_depletion1 = [] //list for help drawing lines of band diagram

let change_v = 1 //change the distribution scale of band diagram 


let hole_new //for getting added dopants number
let V_applied_p =0; //added voltage for p dopant
let V_applied_n=0; //added voltage for n dopant

let isOn = false;  //turn on or off the switch between charge density and electric field graph

let tempe_fraction_e //from ealier chapter

let gg_rate =1000 //generation rate

let factor_c = 1 //concentration 

let new_array_rou_e_set = [] //draw charge density graph
let new_array_rou_h_set = [] //draw charge density graph
let new_array_rou_h_set_neg = [] //draw charge density graph

let new_array_rou_h_set_Efield = [] //draw e-field graph
let new_array_rou_h_set_Efield_neg = [] //draw e-field graph

let changg = 0; //slope for the addig dopant factor
let e_field_c = 0; //electric field factor

let rect_density //from ealier chapter

let hole_add_new //for getting added dopants number

let factor_new =1; //factor for applied voltage

let whiteArray_dot = [] //draw yellow dot for testing(not using)
let blackArray_dot = [] //draw green dot for testing(not using)

let array_band_hardcode = [] //hardcoding array band (not usinng)


//fraction
//donor
let n_c //
let delta_ED
let fraction_e = []
let fraction_e_count
let fraction_e_count_t
let dif_e //difference in freeze count
let dif_e_current //difference in freeze difference count and existing paired e count

//acceptor 
let n_v //from before
let fraction_h = [] //from ealier
let fraction_h_count //from ealier
let fraction_h_count_t //from ealier
let dif_h //difference in freeze count
let dif_h_current //difference in freeze difference count and existing paired e count


let new_generate = 6;

//eletron hole

var browserZoomLevel = Math.round(window.devicePixelRatio * 100); // zoom level from earlier


settings = {
  //setting initial state from earlier chapter
  nucleus: false,
  nn: false,
  kk: false,
  valence: true,
  conduction: true,
  nn_live: true
}
var generation_R = 100; //generation rate from ealier
var generation_Rate;  //generation rate from ealier
var generation_Rate_c; //generation rate from ealier
var current_Electron = 0; //electron count 
var current_Hole = 0; //hole count 
var current_Electron_c = 0;  //electron count 
var current_Hole_c = 0;   //hole count 
var recombination_R = 0; //recombinationn rate from earlier
var recombination_Rate = 1; //recombinationn rate from earlier
var recombination_Rate_c = 1; //recombinationn rate from earlier
var ni;  //from earlier
var nn; //from earlier
var constant_beta = Math.pow(10,-12);  //from earlier
let count_buffer = 0; //from earlier

var time_count =0; //count down for timeIt functionn


////////////////////////////////
let whiteArray = []; //yellow dot storing 
let blackArray = []; //green dot storing 
let whiteID = []; //yellow dot id storing 
let blackID = []; // green dot id storing
let white_seek_ball = []; //seek function from ealier
let black_seek_ball = [];//seek function from ealier
let global_id = 0; //global id

let appearArray = []; //appear animation
let disappearArray = []; //disappear aimation
let disappearArray_s1 = []; //disappear animation 

let disappearArray_2 = []; //circles disappear animation 
let disappearArray_2_pair = []; //circles  disappear animation 
let disappearArray_dot = [];// disappear animation 

let gap = 200; //test from earlier
let l = 560; //test from earlier
let w = 120; //test from earlier

// let scene1_aArray = []; //
// let scene1_dArray = [];
// let scene1_aArray2 = [];
// let scene1_dArray2 = [];

let switch_1 = 0 //switch from earlier
let recombine = 1 //recombine on or off


let fading = 255; //fading starting number

let change_square = -30 //change square dimension 
let change_length = 100+change_square; //change square length dimension 

let temp = 270; //set temperature

let array_band = []//for graphing
let array_band1 = [] //for graphing
let array_band2 = []//for graphing
let array_band3 = []//for graphing
let array_band4 = []//for graphing
let random_botz = [] //velocity of random distribution
var generation_Rate_s1;  //generation rate from earlier 
var current_Electron_s1 = 0; //current elctro from earlier
var current_Hole_s1 = 0;  //current hole from earlier 
var recombination_Rate_s1 = 1; //recombination rate from earlier
// var constant_beta_s1 = Math.pow(10,-12); //constant 

let g_rate; //generation rate

// let stop_s1 = false; 

// let numm; 

let interval_1 = 2000; //interval for generation 
let interval_3 = 2000;//interval for generation 
let interval_45 = 2000;//interval for generation 

let interval_pn = 100;//interval for generation 

let interval_s = 1000;//interval for generation 

var run1; // initiation for geenration 
var run45;// initiation for geenration 
var run3;// initiation for geenration 

var count_pn; //for animation for electric field from earlier

// let num_speed =1;

var count_pn_num =0; //for animation for electric field from earlier

let button_reset; //reset button 

let middle_position_Array = []; //middle position store
let disappear_count = 0; //disappear number count
/////////
let scale_x = 1440; //scale for x-axis adaptive window
let scale_y = 789;//scale for y-axis adaptive window

let s_x; //scale for x-axis adaptive window
let s_y; //scale for y-axis adaptive window

// let ran_num = 2; //

let electron_add = 0; //added electron number
let hole_add = 0; //added hole number

// var time_count_blink =100; //

// let fade;
// var appear1 = 0;

// let latticeAtoms = [];
// let latticeAtoms_2 = [];
// let latticeAtoms_e = [];
// let latticeAtoms_h = [];
// var globalOrbitalCount = 0;

// let free_electron = [];
// let free_hole = [];
let random_direction; //random direction 

var opacity; //opacity from earlier 

// let electronLatticePositions = []; //lattice 

// let random_num1 = [];

// let id_electron_s1 = 0;
// let id_hole_s1 = 0;

var blink; //from earlier 
let interval_blink = 1000; //from earlier 

var scattering_c //scattering interval

var count_g //count from earlier 
let count_graph = 10 //count from earlier 

let count_n = 0; ////count from earlier 

let scattering_velocity //scattering velocity
let scattering_count = 0 //scattering count 
let scattering_count_c = 0 //scattering count

let scatter_tf = false //scatter true or false 

let constant_temperature_real //temeprature from earlier 
let temp_real //temperature from earlier 
// let box_count = [] //

let concentration = 50/3 //concennration from ealier

let context_1 //set up canvas 

// var zincrement = 0.001; //increment 
// var increment = 0.1;
// var zoff = 0.0;

// let test_num = 10
let ratio_num // for counting how many elemnts been modified

let point_count = 200; //
// let array_plot = [] //graphing from earlier
// let array_plot_0 = []
// let array_positive_y = []
// let array_negative_y = []
// let array_positive_y_0 = []
// let array_negative_y_0 = []

// let box_count_e = []
// let box_count_h = []

// let array_plot_e = []
// let array_plot_h = []
// let array_plot_e_0 = []
// let array_plot_h_0 = []

// let array_positive_y_e = []
// let array_negative_y_e = []
// let array_positive_y_0_e = []
// let array_negative_y_0_e = []

// let array_positive_y_h = []
// let array_negative_y_h = []
// let array_positive_y_0_h = []
// let array_negative_y_0_h = []

let distance_dis = 9; //distance for recombine

let array_graph_con = [] //set concentration 
let array_graph_current = [] //set concentration

let con_count = 0; //settinng from earlier
let x_con=0; //setting from earlier
let y_con =0//setting from earlier
let real_graph = 0 //see if real time graph from earlier 
let real_graph_live = 0 //see if real time graph from earlier 
let start_graph = 1//see if start graph from earlier 

let test_a ;  //testing from slider
let y_run; //set the y axis real time change from earlier
let y_con_c=0; //from earlier 
let y_con_2=0;//from earlier 

let X_n //width of the depletion regionn 


let test_current_scale =3; //test for the scale 
let test_x_scale =0.2; //test for x scale 

let line_yellow =[] //graph yellow line 
let line_green = [] //graph green line 

let line_yellow_data = new Array(100).fill(0); //store yellow line data
let line_green_data = [] //store green line data
let line_green_data_indice = [] //store green line data

let E_gap_factor = 10; //Electric field gap for cushion when drawing 
 
// let  array_plot_e_set //
// let array_plot_e_0_set
// let array_plot_h_set
// let array_plot_h_0_set

let x_num_count = 3 //draw ticker 

let run11 //initiation 
let run_outer //initiation 

let line_green_v1 = [] //for json data v_data_1.json store green line data
let line_yellow_v1 = [] //for json data v_data_1.json store yellow line data
let line_green_data_v1 = [] //for json data v_data_1.json store green line data
let line_yellow_data_v1 = [] //for json data v_data_1.json store yellow line data

//// get the excel sheet data for when donor density = 10^17
let numberArray1_neg_2_0
let numberArray1_neg_1_8
let numberArray1_neg_1_6 
let numberArray1_neg_1_4 
let numberArray1_neg_1_2
let numberArray1_neg_1_0
let numberArray1_neg_0_8 
let numberArray1_neg_0_6 
let numberArray1_neg_0_4
let numberArray1_neg_0_2 
let numberArray1_0
let numberArray1_pos_0_2 
let numberArray1_pos_0_4 
let numberArray1_pos_0_6 
let numberArray1_pos_0_8
let numberArray1_pos_1_0 
let numberArray1_pos_1_2 
let numberArray1_pos_1_4 
let numberArray1_pos_1_6 
let numberArray1_pos_1_8 
let numberArray1_pos_2_0 
let x_values_1

let numberArray2_neg_2_0
let numberArray2_neg_1_8
let numberArray2_neg_1_6 
let numberArray2_neg_1_4 
let numberArray2_neg_1_2
let numberArray2_neg_1_0
let numberArray2_neg_0_8 
let numberArray2_neg_0_6 
let numberArray2_neg_0_4
let numberArray2_neg_0_2 
let numberArray2_0
let numberArray2_pos_0_2 
let numberArray2_pos_0_4 
let numberArray2_pos_0_6 
let numberArray2_pos_0_8
let numberArray2_pos_1_0 
let numberArray2_pos_1_2 
let numberArray2_pos_1_4 
let numberArray2_pos_1_6 
let numberArray2_pos_1_8 
let numberArray2_pos_2_0 
let x_values_2

let current_array = [] //current array displayibg
let charge_density_temp_data = [] //charge density temp data store
let E_field_temp_data = [] //electric field temp data


fetch('v_data_1.json')
    .then(response => response.json())
    .then(jsonData => {
        // Assuming jsonData is an array and we're interested in specific object properties
        //using https://tableconvert.com/excel-to-json to convert excel to json 
        //when density = 10^17
        numberArray1_neg_2_0 = jsonData[0]["0"].map(Number);  // Data for one condition
        numberArray1_neg_1_8 = jsonData[1]["1"].map(Number); // Data for another condition
        numberArray1_neg_1_6 = jsonData[2]["2"].map(Number); //
        numberArray1_neg_1_4 = jsonData[3]["3"].map(Number); //
        numberArray1_neg_1_2 = jsonData[4]["4"].map(Number); //
        numberArray1_neg_1_0 = jsonData[5]["5"].map(Number); //
        numberArray1_neg_0_8 = jsonData[6]["6"].map(Number); //
        numberArray1_neg_0_6 = jsonData[7]["7"].map(Number); //
        numberArray1_neg_0_4 = jsonData[8]["8"].map(Number); //
        numberArray1_neg_0_2 = jsonData[9]["9"].map(Number); //
        numberArray1_0 = jsonData[10]["10"].map(Number); //
        numberArray1_pos_0_2 = jsonData[11]["11"].map(Number); //
        numberArray1_pos_0_4 = jsonData[12]["12"].map(Number); //
        numberArray1_pos_0_6 = jsonData[13]["13"].map(Number); //
        numberArray1_pos_0_8 = jsonData[14]["14"].map(Number); //
        numberArray1_pos_1_0 = jsonData[15]["15"].map(Number); //
        numberArray1_pos_1_2 = jsonData[16]["16"].map(Number); //
        numberArray1_pos_1_4 = jsonData[17]["17"].map(Number); //
        numberArray1_pos_1_6 = jsonData[18]["18"].map(Number); //
        numberArray1_pos_1_8 = jsonData[19]["19"].map(Number); //
        numberArray1_pos_2_0 = jsonData[20]["20"].map(Number); //
        x_values_1 = jsonData[21]["21"].map(Number); //


        // Output the array to verify
        // console.log(numberArray1_pos_2_0); 
    })
    .catch(error => console.error('Error loading the JSON data:', error));

    fetch('v_data_2.json')
    .then(response => response.json())
    .then(jsonData => {
        // Assuming jsonData is an array and we're interested in specific object properties
        //using https://tableconvert.com/excel-to-json to convert excel to json 
        //when density = 10^17
        numberArray2_neg_2_0 = jsonData[0]["0"].map(Number);  // Data for one condition
        numberArray2_neg_1_8 = jsonData[1]["1"].map(Number); // Data for another condition
        numberArray2_neg_1_6 = jsonData[2]["2"].map(Number); //
        numberArray2_neg_1_4 = jsonData[3]["3"].map(Number); //
        numberArray2_neg_1_2 = jsonData[4]["4"].map(Number); //
        numberArray2_neg_1_0 = jsonData[5]["5"].map(Number); //
        numberArray2_neg_0_8 = jsonData[6]["6"].map(Number); //
        numberArray2_neg_0_6 = jsonData[7]["7"].map(Number); //
        numberArray2_neg_0_4 = jsonData[8]["8"].map(Number); //
        numberArray2_neg_0_2 = jsonData[9]["9"].map(Number); //
        numberArray2_0 = jsonData[10]["10"].map(Number); //
        numberArray2_pos_0_2 = jsonData[11]["11"].map(Number); //
        numberArray2_pos_0_4 = jsonData[12]["12"].map(Number); //
        numberArray2_pos_0_6 = jsonData[13]["13"].map(Number); //
        numberArray2_pos_0_8 = jsonData[14]["14"].map(Number); //
        numberArray2_pos_1_0 = jsonData[15]["15"].map(Number); //
        numberArray2_pos_1_2 = jsonData[16]["16"].map(Number); //
        numberArray2_pos_1_4 = jsonData[17]["17"].map(Number); //
        numberArray2_pos_1_6 = jsonData[18]["18"].map(Number); //
        numberArray2_pos_1_8 = jsonData[19]["19"].map(Number); //
        numberArray2_pos_2_0 = jsonData[20]["20"].map(Number); //
        // x_values_2 = jsonData[21]["21"].map(Number); //


        // Output the array to verify
        // console.log(numberArray1_pos_2_0); 
    })
    .catch(error => console.error('Error loading the JSON data:', error));


function mouseClicked() {

  if(abs(910*s_x-mouseX)<30*s_x && abs(377*s_y-mouseY)<9*s_y){
    if(isOn == true) isOn = false;
    else isOn = true;
  }

}

/***********************************************************************
 * Section: preload variables or functions
 ***********************************************************************/
function setup() {
  s_x = windowWidth/scale_x;
  s_y = windowHeight/scale_y;
  setInterval(toggleRecombine, 2000);
  
  onRefresh();
  let canvas = createCanvas(2 * windowWidth / 3, windowHeight);
  canvas.parent('visualization');

  frameRate(10);


  context_1 = canvas.drawingContext;

  ////////////
 // generate balls based on frequency
 run45 = setInterval(function(){genBalls(1);}, interval_45); // scene changing T
 // generate balls straight 
 run11 = setInterval(function(){genBalls_straight(1);}, 2000); // scene changing T

 count_pn = setInterval(function(){count_pn_f();}, interval_pn); 





 scattering_c = setInterval(function(){scattering();}, 50); // scattring time 



 y_run = setInterval(function(){y_change();}, 1700); // y axis real time change 

 
 

/////////
  sceneCount = 0;

  ///
  goToHole = [];


  random_hole = [];

  random_direction=[];

  xLimit = ((int)(width / 180));
  yLimit = ((int)(height / 180));











}

/***********************************************************************
 * Section: draw on canvas for different sceneCount
 ***********************************************************************/
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
  else if (sceneCount == 2) {

   

    ///calculating width from earlier chapter, overwriting later
    count_pn_num = X_n
    let ratio = (-V_applied_p/10+V_applied_n/10)/(1.6*Math.pow(10,-13)*hole_add_new)
    count_pn_num = X_n*(1+ratio)


  if (V_applied_p>0) {
    //when V_applied_p = applied volatge > 0 
    //count_pn_num = W (width of depletion region) here
    count_pn_num = 3.63*Math.pow(10,7)*Math.pow(V_applied_p/40/hole_new,1/2)



  }


  ///////////////// draw background upper boxes
    stroke(125, 241, 148,100);
    strokeWeight(1);
    noFill();
    rect((10+100+70+change_square)*s_x,(10+385)*s_y,(940-change_length-70)*s_x,(770/2)*s_y);
    fill(30)
    //one
    rect((10+100+70+change_square)*s_x,(10)*s_y,(940-change_length-70)*s_x,(770/4)*s_y);
    //two
    rect((10+100+70+change_square)*s_x,(10+385/2)*s_y,(940-change_length-70)*s_x,(770/4)*s_y);
    noFill();

/////////////////



 

 

    //////////////////////////////////////////////////////////setting scaling factor for the window 
    s_x = windowWidth/scale_x;
    s_y = windowHeight/scale_y;

    



      
    
    



  ///////////////////////////////////////////////////the function to update the electron hole movements and animations
    update_electron_hole()
    ///////////////////////






//////////// if recombination is turned on, recombine happen, distance_dis is the distance between each recombine (carrier lifetime)
if (recombine == 1 ) {

 
  

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
       
        // var vehicle = new Vehicle((170)*s_x, b, 10, "h", 1)
        // vehicle.botz = blackArray[k].botz
        // blackArray.push(vehicle);
  
        // blackID_h.push(global_id);
        // global_id += 1;

        // var vehicle2 = new Vehicle((930)*s_x, b, 10, "e", 0)
        // vehicle2.botz = whiteArray[i].botz
        // whiteArray.push(vehicle2);

        // whiteArray_e.push(new Vehicle((930)*s_x, b, 10, "e", 0));
        // whiteID_e.push(global_id);
        // global_id += 1;

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

        
        // let b = whiteArray[i].position.y;
       
        // var vehicle = new Vehicle((170)*s_x, b, 10, "h", 1)
        // vehicle.botz = blackArray_h[k].botz
        // blackArray_h.push(vehicle);
  
        // blackID_h.push(global_id);
        // global_id += 1;

        // var vehicle2 = new Vehicle((930)*s_x, b, 10, "e", 0)
        // vehicle2.botz = whiteArray[i].botz
        // whiteArray.push(vehicle2);

        // // whiteArray_e.push(new Vehicle((930)*s_x, b, 10, "e", 0));
        // // whiteID_e.push(global_id);
        // global_id += 1;

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
           

            // let b = whiteArray_e[i].position.y;
       
            // var vehicle = new Vehicle((170)*s_x, b, 10, "h", 1)
            // vehicle.botz = blackArray[k].botz
            // blackArray.push(vehicle);
      
            // blackID_h.push(global_id);
            // global_id += 1;
    
            // var vehicle2 = new Vehicle((930)*s_x, b, 10, "e", 0)
            // vehicle2.botz = whiteArray_e[i].botz
            // whiteArray_e.push(vehicle2);
    
            // // whiteArray_e.push(new Vehicle((930)*s_x, b, 10, "e", 0));
            // // whiteID_e.push(global_id);
            // global_id += 1;

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
           

   

        // let b = whiteArray_e[i].position.y;
       
        // var vehicle = new Vehicle((170)*s_x, b, 10, "h", 1)
        // vehicle.botz = blackArray_h[k].botz
        // blackArray_h.push(vehicle);
  
        // blackID_h.push(global_id);
        // global_id += 1;

        // var vehicle2 = new Vehicle((930)*s_x, b, 10, "e", 0)
        // vehicle2.botz = whiteArray_e[i].botz
        // whiteArray_e.push(vehicle2);

        // // whiteArray_e.push(new Vehicle((930)*s_x, b, 10, "e", 0));
        // // whiteID_e.push(global_id);
        // global_id += 1;

          whiteArray.splice(i, 1);
             blackArray.splice(k, 1);

             break
         
           }
       }
    
        }

      }

    

////////////////////////////////////////////DRAW THE horizon on the second graph
noFill();
//coordinates
//up
stroke(102, 194, 255,180);
////horizoN
// ////////////new
//horizon down 1
line((10+100+70+change_square+940-change_length-70-760+30)*s_x,(10+385/2+96.25)*s_y,(10+100+70+change_square+790-30)*s_x,(10+385/2+96.25)*s_y)
//vertical down 1
line(250*s_x,(10+385/2+30)*s_y, 250*s_x, (10+385/2+770/4-30)*s_y)


//////////////////////////////////////////////////// tickers draw on x axis
for (let i = 0; i < x_num_count; i++) {
  let x = 550 * s_x + ((400 / 8 ) * s_x * i*2 + ((400 / 8*2 ) * s_x));
  let y = (10 + 385 / 2 + 96.25) * s_y;
  line(x, y, x, y - 5 * s_y); // Draw the line
}

for (let i = 0; i < x_num_count; i++) {
  let x = 550 * s_x - ((400 / 8 ) * s_x * i*2);
  let y = (10 + 385 / 2 + 96.25) * s_y;
  line(x, y, x, y - 5 * s_y); // Draw the line
}
//////////////////////////////////////////////////// tickers draw on y axis

if (isOn ==false) {
  for (let i = 0; i < 4; i++) {
    let x = 250 * s_x;
    let y = (10+385/2+96.25)*s_y+ 12.5 * s_y  + 12.5 * s_y  * i;
    line(x, y, x + 5 * s_x, y); // Draw the line
  }
  
  for (let i = 0; i < 4; i++) {
    let x = 250 * s_x;
    let y = (10+385/2+96.25)*s_y- 12.5 * s_y  - 12.5 * s_y  * i;
    line(x, y, x + 5 * s_x, y); // Draw the line
  }

  noStroke()
  fill(102, 194, 255,180);
  textSize(10*s_x)
  // text("20 μC/cm\u00B3",560*s_x,252*s_y);
  // text("-20 μC/cm\u00B3",560*s_x,351*s_y);
  


} else {
  for (let i = 0; i < 4; i++) {
    let x = 250 * s_x;
    let y = (10+385/2+96.25)*s_y+ 40/1530*500 * s_y + 40/1530*500 * s_y  * i;
    line(x, y, x + 5 * s_x, y); // Draw the line
  }
  
  for (let i = 0; i < 4; i++) {
    let x = 250 * s_x;
    let y = (10+385/2+96.25)*s_y- 40/1530*500 * s_y - 40/1530*500 * s_y  * i;
    line(x, y, x + 5 * s_x, y); // Draw the line
  }

  noStroke()
fill(102, 194, 255,180);
textSize(10*s_x)
// text("2000 V/cm",560*s_x,249*s_y);
// text("-2000 V/cm",560*s_x,353*s_y);


}



//////////////////////////////////////////////////// x axis labeling

noStroke()
fill(102, 194, 255,180);
textSize(10*s_x)
text("1 \u00B5m",340*s_x,313*s_y);


///////////new box graphing

noStroke()
fill(254,246,182,100)
rect_density = 10+0.7*Math.pow(10,-13)*hole_add_new-V_applied_p/2+V_applied_n/2


//////////////////////////////////////////////////// draw charge density when switch is False
if (isOn ==false) {

  if (hole_new == 50000000000000 && line_yellow_data_v1.length>0) {
    //test case for v_data_1.json


    for (let i =0; i<137;i++) {
      let y1 = 1.6*Math.pow(10,-13)*50000000000000*(-1+Math.exp(-current_array[i]/0.026)+Math.exp(current_array[i]/0.026))
      charge_density_temp_data[i] = {x:line_yellow_data_v1[i].x,y:y1}
    }


    if (V_applied_p>0) {

     
       ///charge density graph
       beginShape();
  
       vertex(250*s_x, (10+385/2+96.25) * s_y)
   
   
       // Add all points as curve vertices
       for (let i = 0; i < charge_density_temp_data.length; i++) {
       let x = charge_density_temp_data[i].x
       let y = charge_density_temp_data[i].y/Math.pow(10,14)+(10+385/2+96.25) * s_y
       vertex(x, y);
       }
      //  vertex(charge_density_temp_data[136].x, charge_density_temp_data[136].y)
   
       endShape();

    }else if (V_applied_p==0) {
  
    }else {

      ///charge density graph
      beginShape();
  
      vertex(250*s_x, (10+385/2+96.25) * s_y)
  
  
      // Add all points as curve vertices
      for (let i = 0; i < charge_density_temp_data.length; i++) {
      let x = charge_density_temp_data[i].x
      let y = -charge_density_temp_data[i].y/Math.pow(10,2)+(10+385/2+96.25) * s_y
      vertex(x, y);
      }
     //  vertex(charge_density_temp_data[136].x, charge_density_temp_data[136].y)
  
      endShape();

    }


  } else {

    if (V_applied_p>0) {

      ///charge density graph
      beginShape();
  
      vertex(250*s_x, (10+385/2+96.25) * s_y)
  
  
      // Add all points as curve vertices
      for (let i = 0; i < new_array_rou_h_set.length; i++) {
      let x = new_array_rou_h_set[i].x
      let y = new_array_rou_h_set[i].y
      vertex(x, y);
      }
      vertex(250 * s_x+((400)/8*count_pn_num)*s_x, (10+385/2+96.25) * s_y)
  
      endShape();
  
  
    } else if (V_applied_p==0) {
  
    }else {
      ///charge density graph
      beginShape();
  
      vertex(250*s_x, (10+385/2+96.25) * s_y)
  
  
      // Add all points as curve vertices
      for (let i = 0; i < new_array_rou_h_set_neg.length; i++) {
      let x = new_array_rou_h_set_neg[i].x
      let y = new_array_rou_h_set_neg[i].y
      vertex(x, y);
      }
      vertex(250 * s_x+((400)/8*count_pn_num)*s_x, (10+385/2+96.25) * s_y)
  
      endShape();
    }
  }

  





}

noFill()

fill(218,112,214,100)



////////////////////////////////////////////////////count how much holes or electron in depletion region (electron for positive voltage applied), and send out e/h if reach maximum threshold
let count_electron = 0
for (let i = 0; i < whiteArray.length; i++) {
  if (whiteArray[i].position.x <(250 * s_x+(100*count_pn_num)*s_x) && whiteArray[i].position.x >(250*s_x) ) {
    count_electron+=1
  }

 
}

for (let i = 0; i < whiteArray.length; i++) {
  if (whiteArray[i].position.x >((250+100*(count_pn_num+2))*s_x)){
    whiteArray[i].push = 0

  } 
}



ratio_num = hole_new*V_applied_p/10000000000000/5


if (count_electron > ratio_num) {
  let modifyCount = 0; // Counter to track how many elements have been modified

  for (let i = 0; i < whiteArray.length; i++) {
    if (whiteArray[i].position.x < (250 * s_x + (100 * count_pn_num) * s_x)) {
      whiteArray[i].push = 1; // Set push to 1
      modifyCount++; // Increment the counter

      // Break out of the loop once we have modified the required number of elements
      if (modifyCount >= (count_electron - ratio_num)) {
        break;
      }
    }
  }
}




//////////////////////////////////////////////////// draw E-field graph on second graph when switch is On, and draw charge density graph when not clicked switch
if (isOn==true){

  if (hole_new == 99763115748444.14 && line_yellow_data_v1.length>0) {
    //test case for v_data_1.json

    for (let i =0; i<136;i++) {
      let y1 = (current_array[i+1]-current_array[i])/(x_values_1[i+1]-x_values_1[i])*Math.pow(10,7)
      E_field_temp_data[i] = {x:line_yellow_data_v1[i].x,y:y1}
    }

    if (V_applied_p>0) {
      ///charge density graph
      beginShape();
  
      vertex(250*s_x, (10+385/2+96.25) * s_y)
  
  
      // Add all points as curve vertices
      for (let i = 0; i < E_field_temp_data.length; i++) {
      let x = E_field_temp_data[i].x
      let y = E_field_temp_data[i].y/Math.pow(10,4)*2+(10+385/2+96.25) * s_y
      vertex(x, y);
      }
      vertex(E_field_temp_data[135].x, E_field_temp_data[135].y/Math.pow(10,5)+(10+385/2+96.25) * s_y)
  
      endShape();
    
      } else if(V_applied_p==0){
     
      }
      else{
    
         ///charge density graph
         beginShape();
  
         vertex(250*s_x, (10+385/2+96.25) * s_y)
     
     
         // Add all points as curve vertices
         for (let i = 0; i < E_field_temp_data.length; i++) {
         let x = E_field_temp_data[i].x
         let y = E_field_temp_data[i].y/Math.pow(10,4)+(10+385/2+96.25) * s_y
         vertex(x, y);
         }
        //  vertex(charge_density_temp_data[136].x, charge_density_temp_data[136].y)
     
         endShape();
   
    
      
    }

  }else if(hole_new == 50000000000000 && line_yellow_data_v1.length>0) {
    //test case for v_data_1.json

    for (let i =0; i<136;i++) {
      let y1 = (current_array[i+1]-current_array[i])/(x_values_1[i+1]-x_values_1[i])*Math.pow(10,7)
      E_field_temp_data[i] = {x:line_yellow_data_v1[i].x,y:y1}
    }

    if (V_applied_p>0) {
      ///charge density graph
      beginShape();
  
      vertex(250*s_x, (10+385/2+96.25) * s_y)
  
  
      // Add all points as curve vertices
      for (let i = 0; i < E_field_temp_data.length; i++) {
      let x = E_field_temp_data[i].x
      let y = E_field_temp_data[i].y/Math.pow(10,4)*2+(10+385/2+96.25) * s_y
      vertex(x, y);
      }
      vertex(E_field_temp_data[135].x, E_field_temp_data[135].y/Math.pow(10,5)+(10+385/2+96.25) * s_y)
  
      endShape();
    
      } else if(V_applied_p==0){
     
      }
      else{
    
         ///charge density graph
         beginShape();
  
         vertex(250*s_x, (10+385/2+96.25) * s_y)
     
     
         // Add all points as curve vertices
         for (let i = 0; i < E_field_temp_data.length; i++) {
         let x = E_field_temp_data[i].x
         let y = E_field_temp_data[i].y/Math.pow(10,4)+(10+385/2+96.25) * s_y
         vertex(x, y);
         }
        //  vertex(charge_density_temp_data[136].x, charge_density_temp_data[136].y)
     
         endShape();
   
    
      
    }

  }else {
    if (V_applied_p>0) {
      beginShape();
    
    vertex(250*s_x, (10+385/2+96.25) * s_y)
    
    let scaleY = 2;  // Adjust this scaling factor as needed to affect the y-axis scale
    
    // Adjust the y-values of points above the base level
    for (let i = 0; i < new_array_rou_h_set_Efield.length; i++) {
      let x = new_array_rou_h_set_Efield[i].x;
      let y = new_array_rou_h_set_Efield[i].y;
      
      // Apply scaling if the point is above the base level
      if (y < (10 + 385 / 2 + 96.25) * s_y) {
          y = (y-(10 + 385 / 2 + 96.25) * s_y)*scaleY+y;
      }
      
      vertex(x, y);
    }
    
    vertex(250 * s_x+((400)/8*count_pn_num)*s_x, (10+385/2+96.25) * s_y)
    
    endShape();
    
      } else if(V_applied_p==0){
     
      }
      else{
    
        beginShape();
    
        vertex(250*s_x, (10+385/2+96.25) * s_y)
        
        
        // Add all points as curve vertices
        for (let i = 0; i < new_array_rou_h_set_Efield_neg.length; i++) {
        let x = new_array_rou_h_set_Efield_neg[i].x
        let y = new_array_rou_h_set_Efield_neg[i].y
        vertex(x, y);
        }
        vertex(250 * s_x+((400)/8*1)*s_x, (10+385/2+96.25) * s_y)
      
        endShape();
    
    
      
    }

  }

 

}


//////////////////////////////////////////////////// graph switch on and off change looks
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

////////////////////////////////////////////////////draw band diagram lines data calcuation based on array: array_band_depletion1

stroke(125, 241, 148,100);
noFill()

for (var i = 0; i<80; i++) {
  //0-8 micro meter range
  //start from 250 , 100 * s_x  per micrometer , 10 i count per micrometer here, count_pn_num = W here,
  if (V_applied_p<0) {


    if (i/10<count_pn_num) {
      array_band_depletion1[i] = -7.59*Math.pow(10,-16)*hole_add_new*Math.pow((count_pn_num-i/10),2)
  
    } else {
      array_band_depletion1[i] = 0
    }

  } else if (V_applied_p==0){
    array_band_depletion1[i] = 0
 } else {
    if (i/10<count_pn_num) {
      array_band_depletion1[i] = 7.59*Math.pow(10,-16)*hole_add_new*Math.pow((count_pn_num-i/10),2)
  
    } else {
      array_band_depletion1[i] = 0
    }
  } 
}
////////////////////////////////////////////////////draw shapes using beginShape() and endShape()

stroke(254,246,182)

 //yellow curve data storing 
for (var k = 0; k < 100; k++) {
  // line_yellow[k] = [(250+10*k)*s_x,  (171.25+array_band_depletion1[k]*40-100)*s_y]
 
}

//green curve data storing 
for (var k = 0; k < 100; k++) {

   
  // line_green[k] = [ (250+10*k)*s_x, (171.25+array_band_depletion1[k]*40-30-30)*s_y]


}

   
//draw yellow curve
beginShape();

  for (var k = 0; k < 70; k++) {
 //yellow curve
      if (hole_new != 50000000000000){
        // curveVertex((250+10*k)*s_x,(171.25+array_band_depletion1[k]*40-100)*s_y)

      }

      line_yellow_data[k] = { x: (250+10*k)*s_x, y: (171.25+array_band_depletion1[k]*40-100)*s_y};
  
  }
endShape();
noStroke()
stroke(125, 241, 148)

//draw green curve
beginShape();

  for (var k = 0; k < 70; k++) {
    //green curve
 
      if (hole_new != 50000000000000){
        // curveVertex((250+10*k)*s_x,(-30+171.25+array_band_depletion1[k]*40-30)*s_y)

      }
      line_green_data[k] = { x: (250+10*k)*s_x, y: (171.25+array_band_depletion1[k]*40-30-30)*s_y};


  }
endShape();
noStroke()



/////////////////////////////////draw red dashed line ox


///red box 
///middle 550
//150 

    stroke(255, 58, 23,210);
    context_1.beginPath();
        context_1.setLineDash([10,10]);
        // context_1.rect((550-(400)/8*count_pn_num)*s_x,(10+385)*s_y,((400)/8*count_pn_num*2)*s_x,(770/2)*s_y);
        context_1.rect((150)*s_x,(10+385)*s_y,((400)/8*1*2)*s_x,(770/2)*s_y);
        context_1.closePath();
    context_1.stroke();
    context_1.setLineDash([]);

///////////////////////////////////////////////////////////////////draw new band diagram using json data

stroke(254,246,182)


if (hole_new ==99763115748444.14) {
  //10^17 case

  if (V_applied_p/20==-2) {
    current_array= numberArray1_neg_2_0
  } else if (V_applied_p/20==-1.6) {
    current_array= numberArray1_neg_1_6 
  }else if (V_applied_p/20==-1.2) {
    current_array= numberArray1_neg_1_2
  }else if (V_applied_p/20==-0.8) {
    current_array= numberArray1_neg_0_8
  }else if (V_applied_p/20==-0.4) {
    current_array= numberArray1_neg_0_4
  }else if (V_applied_p/20==0) {
    current_array= numberArray1_0
  }else if (V_applied_p/20==0.4) {
    current_array= numberArray1_pos_0_4
  }else if (V_applied_p/20==0.8) {
    current_array= numberArray1_pos_0_8
  }else if (V_applied_p/20==1.2) {
    current_array= numberArray1_pos_1_2
  }else if (V_applied_p/20==1.6) {
    current_array= numberArray1_pos_1_6
  }else if (V_applied_p/20==2) {
    current_array= numberArray1_pos_2_0
  }
} else if (hole_new == 50000000000000) {

  if (V_applied_p/20==-2) {
    current_array= numberArray2_neg_2_0
  } else if (V_applied_p/20==-1.6) {
    current_array= numberArray2_neg_1_6 
  }else if (V_applied_p/20==-1.2) {
    current_array= numberArray2_neg_1_2
  }else if (V_applied_p/20==-0.8) {
    current_array= numberArray2_neg_0_8
  }else if (V_applied_p/20==-0.4) {
    current_array= numberArray2_neg_0_4
  }else if (V_applied_p/20==0) {
    current_array= numberArray2_0
  }else if (V_applied_p/20==0.4) {
    current_array= numberArray2_pos_0_4
  }else if (V_applied_p/20==0.8) {
    current_array= numberArray2_pos_0_8
  }else if (V_applied_p/20==1.2) {
    current_array= numberArray2_pos_1_2
  }else if (V_applied_p/20==1.6) {
    current_array= numberArray2_pos_1_6
  }else if (V_applied_p/20==2) {
    current_array= numberArray2_pos_2_0
  }
}

   
//draw yellow curve
beginShape();

  for (var k = 0; k < 137; k++) {
 //yellow curve


 if (hole_new == 50000000000000 || hole_new == 99763115748444.14){
  // curveVertex((250+10*k/2)*s_x,(171.25+current_array[k]*40-100)*s_y)
  let x1 = 17
  let x2 = 349
  let y1 = 0 
  let y2 = 679
  let a = (y2-y1)/(x2-x1)
  let b = y1-a*x1
  let y = a*x_values_1[k]+b
  curveVertex((250+y)*s_x,(171.25+current_array[k]*40-100)*s_y)
  line_yellow_data_v1[k] = { x: (250+y)*s_x, y: (171.25+current_array[k]*40-100)*s_y};
  line_yellow_data[k] = { x: (250+y)*s_x, y: (171.25+current_array[k]*40-100)*s_y};
  // line_yellow[k] = { x: (250+y)*s_x, y: (171.25+current_array[k]*40-100)*s_y};
  line_yellow[k] = [(250+y)*s_x,  (171.25+current_array[k]*40-100)*s_y]
 
}

  
  }
endShape();
noStroke()
stroke(125, 241, 148)

//draw green curve
beginShape();

  for (var k = 0; k < 137; k++) {
    //green curve

    let x1 = 17
    let x2 = 349
    let y1 = 0 
    let y2 = 679
    let a = (y2-y1)/(x2-x1)
    let b = y1-a*x1
    let y = a*x_values_1[k]+b
 
    if (hole_new == 50000000000000 || hole_new == 99763115748444.14){

      curveVertex((250+y)*s_x,(-30+171.25+current_array[k]*40-30)*s_y)
      line_green_data_v1[k] = { x: (250+y)*s_x, y: (171.25+current_array[k]*40-30-30)*s_y};
      line_green_data[k] = { x: (250+y)*s_x, y: (171.25+current_array[k]*40-30-30)*s_y};

      // line_green[k]= { x: (250+y)*s_x, y: (171.25+current_array[k]*40-30-30)*s_y};
      line_green[k] = [ (250+y)*s_x, (171.25+current_array[k]*40-30-30)*s_y]

    }


  }
endShape();
noStroke()

  
///////////////////////////////////////////////////////////////////other text on diagrams

    stroke(125, 241, 148,100);

    textSize(17)
    noStroke()
    strokeWeight(1)
    fill(255);
   ///////////////////

   fill(102, 194, 255,180)

 
textSize(14*s_x);
  
text("Band Diagram",(160)*s_x,(30)*s_y)

text("Charge Density",(160)*s_x,(223)*s_y)
text(" / ",(260)*s_x,(223)*s_y)
text("Electric Field",(273)*s_x,(223)*s_y)


//choosing the E-field or charge density box around text
if (isOn) {


  fill(218,112,214,50)
  rect(271*s_x,210*s_y,85*s_x,18*s_y,5*s_y, 5*s_y)

  
} else {


  fill(255,40);
  rect(158*s_x,210*s_y,100*s_x,18*s_y,5*s_y, 5*s_y)


}


noStroke()
  fill(102, 194, 255,180)

 
  textSize(14);

if (count_pn_num >=X_n && V_applied_p ==0) {
  text("Equilibrium",(760)*s_x,(223)*s_y)
}



  } 
}




/***********************************************************************
 * Section: functions
 ***********************************************************************/

//reset button
reset_scene1 = ()=> {

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



  
    array_graph_con.push(new Concentration(scattering_velocity,scattering_count))

    if (sceneCount ==2|| sceneCount ==3) {
   
      if (sceneCount ==2){
        add_h(document.getElementById("slider_61").value)

      } else if (sceneCount==3) {
        add_h(document.getElementById("slider_611").value)

      }
  
 

    
      }


   

  

   
  
}

//set temperature slider
setTemperature = (te) => {
  constant_temperature = te;
  temp = te;
  if (sceneCount == 1 || sceneCount == 2) {
   
    temp = te;
    constant_fermi = Math.round(1000*-0.28*0.026/300*constant_temperature)/1000
    // console.log(constant_fermi) 
    // console.log(constant_temperature)
    // reset_d3bands()
    // d3bands()

  } 

}

//set carrier lifetime slider
setDistance = (te) => {
 distance_dis = te
}

//
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

//turn on or off recombine
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



//set electron velocity slider
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

//set scattering time slider
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

//set factor E (scale the final electric field by a factor)
setFactor = (c) => {
  factor_new =1/c*10

  let ll = factor_new.toFixed(2)

 
  // document.getElementById("factor_E" ).value=ll
}



//set count down of some function
timeIt = () => {
  if (time_count > 0) {
    time_count--;
  }
}


//actual scattering happening
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
    for (let i = 0; i < whiteArray.length; i++){
      if (whiteArray[i].push ==0) {
        whiteArray[i].botz = random_botz[Math.floor(Math.random() * random_botz.length)]
        let xx = findClosestValue(line_yellow, whiteArray[i].position.x)
        whiteArray[i].origin.x = xx;
      }
     
    }

    for (let i = 0; i < blackArray.length; i++){
      if (blackArray[i].push ==0) {
        blackArray[i].botz = random_botz[Math.floor(Math.random() * random_botz.length)]
        let xx = findClosestValue(line_green, blackArray[i].position.x)
        blackArray[i].origin.y = xx;
      }


    }  
    
    for (let i = 0; i < blackArray_h.length; i++){
      if (blackArray_h[i].push ==0) {
        blackArray_h[i].botz = random_botz[Math.floor(Math.random() * random_botz.length)]
        let xx = findClosestValue(line_green, blackArray_h[i].position.x)
        blackArray_h[i].origin.y = xx;
      }
   

    }

    scattering_count_c = parseInt(scattering_count)+2
  }

}


//animation of increasing shapes of electric field and charge density
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
  // e_field_c = 0
  count_n +=3;
  // count_pn_num +=0.01
  // e_field_c +=0.1*1/rect_density*5
  // count_n +=1;
}


  
}

//y axis real time change 
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



//generating electron hole pairs based on frequency
genBalls = (num) =>{
  clearInterval(run45);
  interval_45 = 4000/g_rate;

  run45 = setInterval(function(){genBalls(1);}, 500);




if (sceneCount ==2){
  // console.log("haha")
  if (time_count>0) {
    whiteArray = [];
    blackArray = [];
  

    recombination_Rate_c = 0;
  
    recombination_Rate = 0;


    recombination_Rate_c = 0;

  } else if (time_count==0){
for (let i=0; i < num; i ++){
  let a = random(250*s_x,930*s_x);
  let b = random((20+385)*s_y,770*s_y);

  appearArray.push(new Appear(a,b,10,0));

  let xx = findClosestValue(line_yellow, a)

  
  let aa = new Vehicle(a, b, 10, global_id, 0);
  aa.origin.x = xx;
  aa.top =1;
  ////botz is the velocity here, and it comes from a randomly generated number list
  aa.botz = random_botz[Math.floor(Math.random() * random_botz.length)]
  whiteArray.push(aa);


  let yy = findClosestValue(line_green, a)
  // console.log(yy)

  let bb = new Vehicle(a, b, 10, global_id, 1);
  bb.origin.y  = yy;
  bb.top = 1;
  bb.botz = random_botz[Math.floor(Math.random() * random_botz.length)]
  blackArray.push(bb);

  whiteID.push(global_id);
  blackID.push(global_id);
  global_id += 1;
}
}
}




}


//straight moving balls generating for higher velocity
genBalls_straight = (num) =>{





// if (sceneCount ==1.5 ){
//   // console.log("haha")
//   if (time_count>0) {
//     whiteArray = [];
//     blackArray = [];
  

//     recombination_Rate_c = 0;
  
//     recombination_Rate = 0;


//     recombination_Rate_c = 0;

//   } else if (time_count==0){
// for (let i=0; i < num; i ++){
//   let a = random(500*s_x,930*s_x);
//   let b = random((20+385)*s_y,770*s_y);

//   appearArray.push(new Appear(a,b,10,0));

//   let xx = findClosestValue(line_yellow, a)

  
//   let aa = new Vehicle(a, b, 10, global_id, 0);
//   aa.origin.x = xx;
//   aa.top =1;
//   aa.straight=1;
//   aa.botz =3
//   whiteArray.push(aa);


 
//   // console.log(yy)

//   let a_2 = random(300*s_x,530*s_x);
//   let b_2 = random((20+385)*s_y,770*s_y);

//   appearArray.push(new Appear(a_2,b_2,10,0));

//   let yy = findClosestValue(line_green, a_2)

//   let bb = new Vehicle(a_2, b_2, 10, global_id, 1);
//   bb.origin.y  = yy;
//   bb.top = 1;
//   bb.straight=1;
//   bb.botz =3
//   blackArray.push(bb);

//   whiteID.push(global_id);
//   blackID.push(global_id);
//   global_id += 1;
// }
// }
// }

 


}



//adding electrons
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

//adding holes
add_h= (a) =>{
  // distance_dis = 10-((a-123)/10*8+1)



  

 



  array_band_hardcode = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -0.008894972236313038, -0.1601095002536185, -0.4536435840519165, -0.8894972236312069, -1.46767041899149, -2.188163170132765, -3.050975477055033, -4.056107339758293, -5.203558758242546, -6.493329732507791, -7.925420262554029, -9.46425045943601, -10.896340989482248, -12.186111963747493, -13.333563382231745, -14.338695244935005, -15.201507551857272, -15.922000302998548, -16.50017349835883, -16.93602713793812, -17.229561221736418, -17.380775749753724, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036, -17.389670721990036]


 

  count_pn_num = 0

  d_factor = Math.pow((a-123)/10*5,1/2)
  // distance_dis = 10-factor_ca*(d_factor)
  
  changg = (a-123)/10*(122) 

  // changg =80

  hole_new  = Math.pow(10,((10 / 10)*(a - 124)+124)/10)*5
  hole_add = Math.pow(10,a/10)
  electron_add = Math.pow(10,a/10)

  // console.log(hole_add)
  let mm = Math.pow(10,((10 / 10)*(a - 124)+124)/10)*5
  let pp = mm.toExponential(1)
  // document.getElementById("add_h_text").value=pp
  document.getElementById("add_h_text_2").value=pp

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
        new_array_rou_h_set_Efield = []
        new_array_rou_h_set_Efield_neg = []
        new_array_rou_h_set_neg = []
  
        let rect_density_new = Math.pow(10,-13)*hole_add_new
  
        X_n = 5811*Math.pow(Math.log(hole_add_new/Math.pow(10,10))/(Math.pow(10,6)*hole_add_new),1/2)*Math.pow(10,6)
        count_pn_num = X_n
  
        let ratio = (-V_applied_p/10+V_applied_n/10)/(1.6*Math.pow(10,-13)*hole_add_new)
    
        count_pn_num = X_n*(1+ratio)
  
        // for (let k = 0; k < Math.round(count_pn_num*100); k++) {
        //   //left of 0 negative
        //   let x = (250)*s_x-(10*k/100)*s_x;
        
        //   let n = (10+385/2+96.25)*s_y+rect_density_new*4*s_y*(1-Math.exp(-Math.pow((count_pn_num-k/100),2)/0.026))
         
        //     new_array_rou_e_set.push({ x: x, y: (n)*1 });
        //   // }
        
        // }
  
        for (let k = 0; k < Math.round(count_pn_num*100); k++) {
          //right of 0 negative

          if (V_applied_p>0) {
            //count_pn_num = W here
            count_pn_num = 3.63*Math.pow(10,7)*Math.pow(V_applied_p/40/hole_new,1/2)
            // console.log(count_pn_num)
          }

          // if (V_applied_p<=0) {
          //   let x = (250)*s_x+(10*k/10)*s_x;

          //   new_array_rou_h_set.push({ x: x, y: (10+385/2+96.25)*s_y });

          // } else {
            //charge density data
            let V = 7.59*Math.pow(10,-16)*hole_add_new*Math.pow((count_pn_num-k/100),2)

            let x = (250)*s_x+(10*k/10)*s_x;
          
            let bottom = Math.pow(10,20)/Math.pow(hole_add_new,2)*Math.exp(-V/0.026)
            // let n = (10+385/2+96.25)*s_y-1.6*Math.pow(10,-13)*hole_add_new*(-1+Math.exp(-V/0.026)+bottom)
            let n = (10+385/2+96.25)*s_y-1.6*Math.pow(10,-13)*hole_add_new*(-1+Math.exp(-V/0.026))
            let n_neg = (10+385/2+96.25)*s_y+1.6*Math.pow(10,-13)*hole_add_new*(-1+Math.exp(-V/0.026))

            let E = (10+385/2+96.25)*s_y-3.8*Math.pow(10,-16)*hole_add_new*(Math.round(count_pn_num*100)-(10*k/10)*s_x)
            // console.log(n)
           
              new_array_rou_h_set.push({ x: x, y: n });
              new_array_rou_h_set_neg.push({ x: x, y: n_neg });


              //electric field data
              new_array_rou_h_set_Efield.push({ x: x, y: E });
            // }

          // }

        
        
        }

        for (let k = 0; k < 20; k++) {
          let  x = (250)*s_x+5*(10*k/10)*s_x;
          let y = (10+385/2+96.25)*s_y-(-225)*count_pn_num*Math.pow((20-k),2)/7000
          
          new_array_rou_h_set_Efield_neg.push({ x: x, y: y });
    
    
    
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



      ///////////////////////calculating the random generated list from boltzmann distribution
      ///////////////////////generating random number on y and x axis, and if it falls within the graph area, then add it into the list
      while(random_botz.length < (e_count-2)){
        //v
     let aa = random(1,2000)/100*Math.pow(10,6)
     //p
     let bb = random(1,400)/100*Math.pow(10,6)
     let y = 4 * Math.PI * Math.pow(1.03*Math.pow(10,-10), 3/2) * Math.pow(Math.pow(10,4)*aa, 2) * Math.exp(-1.3*Math.pow(10, -21)*Math.pow(aa*Math.pow(10,4),2)) 
 
     if (bb<y){
       random_botz.push(Math.round(aa/Math.pow(10,6)*2)/4)

    
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
    

         ////////add electron pairs/////////////////////////////////////////////////////////////////////////
    //   for (let i=0; i < e_count; i ++){
    
    //     let a = random(250*s_x,930*s_x);
    //     // let b = random(30*s_y,730*s_y);  
    //     let b = random((20+385)*s_y,760*s_y);
    //     appearArray_s1.push(new Appear(a,b,10,4,i));
    // //id start from 0 ,color 4
    //     var vehicle = new Vehicle(a, b, 10, "e", 0)
    //     vehicle.botz = random_botz[i]
    //     whiteArray_e.push(vehicle);
    //     // whiteID_e.push(global_id);
    //     global_id += 1;
    //     }
      
             ////////add holes pairs/////////////////////////////////////////////////////////////////////////
      
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
     

     ////////add holes pairs/////////////////////////////////////////////////////////////////////////
    
         for (let i=0; i < h_count; i ++){
    
          let a = random(250*s_x,930*s_x);
          let b = random((20+385)*s_y,760*s_y);
        
          appearArray_s1.push(new Appear(a,b,10,5,i));

          var vehicle2 = new Vehicle(a, b, 10, "h", 1)
          vehicle2.botz = random_botz[i]
          blackArray_h.push(vehicle2);
          blackID_h.push(global_id);
          global_id += 1;
          }
        
  
     ////////add holes pairs/////////////////////////////////////////////////////////////////////////
    
      
      
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







//find closest value of the y value of the generated point
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


//change applied voltage slider
apply_V_p = (a) => {

  // if ( a>0) {
  //   factor_new=0
  // }


  V_applied_p = a;

  if (parseInt(V_applied_p)>=0) {

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
    // line_yellow[k] = [(250+10*k)*s_x,  (171.25+array_band_depletion1[k]*40-100)*s_y]
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

//change applied voltage negative value case
apply_V_n = (a) =>{

  V_applied_n = a 
}



//refreshing page reset
function onRefresh() {
  // console.log("The page was refreshed or loaded!");
  add_h(130)
  reset_scene1()

  
}


//recombine toggle between 0 and 1 every 3 seconds
function toggleRecombine() {
  if (recombine === 0) {
    recombine = 1;
  } else {
    recombine = 0;
  }
  // Now recombine will toggle between 0 and 1 every 3 seconds
}




// the function to update the electron hole movements and animations
update_electron_hole = () =>{



  for (let i = 0; i < whiteArray.length; i++) {
 

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

 
    if (blackArray[i].appear>255) {
      blackArray[i].random_walk();
    }
  }


  

   
  }

  for (let i = 0; i < blackArray_h.length; i++) {

    
    blackArray_h[i].display();
    blackArray_h[i].appear_update();
    blackArray_h[i].update();

   
    if (blackArray_h[i].appear>255) {
      blackArray_h[i].straight_walk()
      if (blackArray_h[i].position.y > 49*s_y) {
      blackArray_h[i].random_walk();
      }
    }
  

   
  }


  for (let i = 0; i < whiteArray_e.length; i++) {
 
    
    whiteArray_e[i].display();
    whiteArray_e[i].appear_update();
    whiteArray_e[i].update();

   
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
}

setScale_v = (v) =>{ 


  change_v = v

}