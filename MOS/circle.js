class Vehicle{
    //the class to change electron hole pairs movements
    constructor(x, y, diameter, id,color) {
      this.x = x;
      this.y = y;
      this.position = createVector(x, y);
      this.position2 = createVector(x, y);
      this.diameter = diameter;
      this.isRolling = false; // Is the ball rolling?
      this.time = 0;
      this.id = id;
      this.maxspeed = 5;
      this.velocity = createVector(0, 0);
      this.maxforce = 1;
      this.acceleration = createVector(0, 0);
      this.desired = createVector(0, 0);
      this.steer = createVector(0, 0);
      this.color = color;
      this.show = 1; //showing . if =0 no show
      this.freeze = 0;
      this.botz =1
      this.direction = createVector(random(-1,1), random(-1,1));
      this.movingVelocity=1;
      this.starting_p = createVector(x, y);
      this.alpha = 255;
      this.appear = 0;
      this.override = 0;
      this.target= createVector(0, 0);
      this.assigned =0;
      this.match;
      this.swap =0;
      this.dead = 0;
      this.box = 0;
      this.vehicleCreated = false; // add a flag variable
      this.origin = createVector(0, 0);
      this.near_index =100;
      this.within =0;
      this.top = 0;
      this.straight = 0
      this.push = 0
      this.factor =1

      this.transitionTime = 100; // for example, transition over 60 frames
        this.elapsedTime = 0; // initialize this somewhere in your object


      setTimeout(() => {
        this.checkProperties();
    }, 8000);
    
    }


     /////****** display the electron or hole looks & also the upper part on the graph 
     display(){
        if (this.show == 1) {
        if (this.color == 0) {
            //electron color 
            fill(254,246,182, this.appear);
            stroke(254,246,182, this.appear);



        } else {
        //hole color
        noFill();
        stroke(125, 241, 148,  this.appear); //green
        strokeWeight(1);
        }

        ellipse(this.position.x, this.position.y, this.diameter);




        if (this.color == 0 && sceneCount !=3){

            //electron case drawing on the top graphs

            //this.origin.x and this.origin.y is the baseline based on the curves calculated in the sketch.js with each scattering
            if (this.origin.x == 0 && this.origin.y == 0 ) {

                //original added pairs senario
              
                    fill(254,246,182, 100);
                    stroke(254,246,182, 100);
                    //yellow
                    ellipse(this.position.x,(-array_band_depletion1[99]+72-this.botz*(8.8)*2*0.2)*s_y,5)
                    this.position2.y=(-array_band_depletion1[99]+72-this.botz*(8.8)*2*0.2)*s_y
                    this.position2.x=this.position.x
              
                } else {

                  
                    if (this.straight==0) {
                        //  added pairs electron
                                        
                        fill(254,246,182, 100);
                        stroke(254,246,182, 100);
                        ellipse(this.position.x,this.origin.x-(this.botz*(8.8)*2*0.2)*s_y,5)
                        this.position2.y=this.origin.x-(this.botz*(8.8)*2*0.2)*s_y
                        this.position2.x=this.position.x
      
   
                    } 

              

                }
           
                


            
        } else if (sceneCount !=3){
             //hole case drawing on the top graphs

             let k = 0;
             let s= 0;
            if (sceneCount ==2 || sceneCount ==3) {
                k=-30
                //constant for the scenes dimensions
            }

             if (this.origin.x == 0 && this.origin.y == 0) {

                   //original added pairs senario

                noFill();
                stroke(125, 241, 148,  100); //green
                strokeWeight(1);
                ellipse(this.position.x,((s+111)+this.botz*(8.8)*2*0.2)*s_y,5)
                this.position2.y=((s+111)+this.botz*(8.8)*2*0.2)*s_y
                this.position2.x=this.position.x

             } else {

                if (this.straight==0) {
                    //added pairs senario
                noFill();
                stroke(125, 241, 148,  100); //green
                strokeWeight(1);
                ellipse(this.position.x,this.origin.y+(this.botz*(8.8)*2*0.2*change_v)*s_y,5)
                this.position2.y=this.origin.y+(this.botz*(8.8)*2*0.2)*s_y
                this.position2.x=this.position.x
                }else {
                }
             }
        }
    }


    }

     ////*** update the electron or hole's locations (bounce back or come back to scene) */
     random_walk() {

 
        this.movingVelocity = this.botz*parseInt(scattering_velocity)*this.factor
 
        ////// this.botz is the velocity from random generated earlier
        if (this.botz == 4 || this.botz == 5){

            this.movingVelocity = 4*this.botz*5*parseInt(scattering_velocity)/5
            this.direction.y = this.direction.y*0.1 

        }

        if (isNaN(this.movingVelocity)) {
            this.movingVelocity = 0;
        }
       
       
        //////////////////////////////////update position depend on direction and moving velocity
        try {
            let uPOS = p5.Vector.mult(this.direction, this.movingVelocity);
            this.position.add(uPOS);
        } catch (error) {
            //
            this.position.add(createVector(0,0))
            
        }
      
            this.accelerate(); // accelerate() will update this.velocity
     
            this.position.add(this.velocity); // add the effect of acceleration to position
        // }

        const r = floor(random(10));
        const r2 = floor(random(10));

        if (sceneCount == 2){
            if (this.push == 0) {
                // if not over the limit counting limit of e/h at equalibrium, (normal case)

            



            if (this.position.x >((550-(400)/8*count_pn_num)*s_x) && this.position.x <(((550-(400)/8*count_pn_num)+(400)/8*count_pn_num*2)*s_x)) {
            //setting the range for within or out of the range
                this.within =1
     
            } else {
                this.within =0
            }


          

            if (scatter_tf == false) {
            //if false no scatter , else set the scattering
            } else {this.direction = createVector(random(-1,1), random(-1,1));}
               

                          
        /////////////////// if hole goes out of screne on the right, put back another hole from the right side
        if ((this.position.x > 940*s_x)&& (opening ==1) && this.straight ==0) {
          

            ////put back electron here
            // if (this.id == "e" && !this.vehicleCreated){
            //     // blackArray.push(new Vehicle(160*s_x, 600*s_y, 10, "h", 1));
            //     var vehicle = new Vehicle(950*s_x, random(400,760)*s_y, 10, "e", 0);
            //     vehicle.direction = createVector(-1,random(-1,1));
            //     vehicle.movingVelocity = this.movingVelocity
            //     vehicle.velocity=createVector(-10, 0);
            //     vehicle.botz = this.botz
            //     whiteArray.push(vehicle);
            //     this.vehicleCreated = true;

            
            // }


            //put back holes here 
            if (this.id == "h" && !this.vehicleCreated){
                var vehicle = new Vehicle(940*s_x, random(400,760)*s_y, 10, "h", 1);
                vehicle.direction = createVector(-1,random(-1,1));
                vehicle.movingVelocity = this.movingVelocity
                vehicle.velocity=createVector(-10, 0);
                vehicle.botz = this.botz
                vehicle.straight=0
                blackArray.push(vehicle);
                this.vehicleCreated = true;

            
            }

            this.direction.x = 10; this.show =0; this.velocity = createVector(0,0);
        
        }

        if ((this.position.x > 940*s_x)&& (opening ==1) && this.straight ==1) {
            this.direction.x = 10; this.show =0; 
        }


        ///////////////////////////////// electron or hole bounce off boundaries
        if ((this.position.x > 940*s_x) && (opening == 0)) {this.direction.x = -1;}
        if (this.position.y < 405*s_y) {this.direction.y = 1;}
        if (this.position.y > 770*s_y) {this.direction.y = -1;}
        if (this.position.x < 260*s_x  ) {this.direction.x = 1; this.velocity = createVector(1,random(-1,1));}

   

        if ( sceneCount ==2 ){


            if (this.color ==0) {
                //electron
                ///////find the near_index: find where the electron appear (on which line they should bounce back when hit the band diagram)
                let smallestDifference = Math.abs(line_yellow_data[0].y - this.position2.y);
                for (let i = 0; i < line_yellow_data.length; i++) {
                  let difference = Math.abs(line_yellow_data[i].y - this.position2.y);
      
                  if (difference < smallestDifference) {
                      smallestDifference = difference;
                      this.near_index = i;
  
          
                     
                  }
                }

            } 
            if (this.color ==1){
                //hole
                 ///////find the near_index: find where the hole appear  (on which line they should bounce back when hit the band diagram)
                let smallestDifference = Math.abs(line_green_data[0].y - this.position2.y);
                for (let i = 0; i < line_green_data.length; i++) {
                  let difference = Math.abs(line_green_data[i].y - this.position2.y);
                  if (difference < smallestDifference) {
                      smallestDifference = difference;
                      this.near_index = i;
                  }
                }
            }


  
             

            ///////////////////// Utility functions for slowly approach the band line when hit the line, not sure if working
            function lerp(start, end, t) {
                return start * (1 - t) + end * t;
            }
               

                //////////////////////////////when v applied is positive, holes bounce to right on the line
                if (V_applied_p>0) {
                    try {
    
                        
                        if (this.near_index<60)  {
                            if (this.color ==1 && (this.position2.x) <= (line_green_data[this.near_index].x-E_gap_factor+10)) {
                                if (this.elapsedTime < this.transitionTime) {
                                    // Increment elapsed time
                                    this.elapsedTime++;
                            
                                    // Calculate delta
                                    let delta = this.elapsedTime / this.transitionTime;
                            
                                    // Update direction.x with lerp
                                    if (V_applied_p>0) {
                                        this.direction.x = lerp(0, 2, delta);
                                    }
                            
                                } else {
                                    // After the transition, make sure direction.x stays at -2
                                    this.direction.x = 2;
                                }
                            }
                        }           
                    } catch (error) {
                
                        
                    }
                }


           

                 function findLastSmallerYIndex(line_green_data) {
                  
                ////find the last index that start bending the line of holes when v applied is negative
                    const lastY = line_green_data[line_green_data.length - 1].y;
                    for (let i = line_green_data.length - 2; i >= 0; i--) {
                        if (line_green_data[i].y < lastY) {
                            return i;  // Return the index where line_green_data[i].y is smaller than the last item's y
                        }
                    }
             
                }

                ////////////////////////when v applied is negative, holes bounce to left on the line
                if (V_applied_p<0) {
                    try {
    
                        let smallestindex = findLastSmallerYIndex(line_green_data)

               
                        
                        if (this.near_index<=smallestindex)  {
                            if (this.color ==1 && (this.position2.x) >= (line_green_data[this.near_index].x+E_gap_factor-15)) {
                                if (this.elapsedTime < this.transitionTime) {
                                    // Increment elapsed time
                                    this.elapsedTime++;
                            
                                    // Calculate delta
                                    let delta = this.elapsedTime / this.transitionTime;
                            
                                    // Update direction.x with lerp
                                    if (V_applied_p<0) {
                                        this.direction.x = lerp(0, -1, delta);
                                    }
                            
                                } else {
                                    // After the transition, make sure direction.x stays at -2
                                    this.direction.x = -1;
                                }
                            }

                    }
                        //hole
                
                    } catch (error) {
                 
                        
                    }
                }


                ///////////////////////////////when v applied is positive, electrons bounce off line to left when hit the line

                try {
                    if (parseInt(V_applied_p)>=0) {

                        if (this.color ==0 &&  this.position2.x > (line_yellow_data[this.near_index].x+E_gap_factor+10 )) {
                                this.direction.x = -2;
                        }

                 
                    }   

                    //elecctron
                } catch (error) {
                }
         

         
          

        } 

          



        } else if (this.push ==1) {
              //if over the counting limit of e/h at equalibrium scenario, push the e/h to a certain distance

              if (V_applied_p>0) {
                  //when v applied >0, certain amount of holes go to right side to reach equilibirum
                this.botz = 1
                this.factor = 3
                this.origin.x = line_yellow[75][1] //update baseline to be align with the right side
                if (this.position.x<((250+100*(count_pn_num+2))*s_x)){
                    this.direction.x = 1
                } 
    
                if (this.position.y < 405*s_y) {this.direction.y = 1;}
                if (this.position.y > 770*s_y) {this.direction.y = -1;}
                if (this.position.x < 260*s_x  ) {this.direction.x = 1; this.velocity = createVector(1,random(-1,1));}
        
              }
          
  

        }


       
        } else {
            //////// other scenes effect other than scene 2 (bounce of boundaries etc)


            if (scatter_tf == false) {
                //if false no scatter 
            } else if (this.straight == 1 ){
                if (this.color==0) {
                    this.direction = createVector(-3, 0)
                } else {
                    this.direction = createVector(3, 0)
                }
            } else {this.direction = createVector(random(-1,1), random(-1,1));}
                
                        if (this.position.x < (90+70)*s_x) {this.direction.x = 1;}
                    
                        if ((this.position.x > 940*s_x)&& (opening ==1)) {this.direction.x = 10;}

                        if ((this.position.x > 940*s_x) && (opening == 0)) {this.direction.x = -1;}
                        if (this.position.y < (20+385)*s_y) {this.direction.y = 1;}
                        if (this.position.y > 770*s_y) {this.direction.y = -1;}
        }

        


    }


    checkProperties() {
        // Check if the top is 1 and origin is {x: 0, y: 0}
        if (this.top == 1 && V_applied_p<=0) {
            // if (this.color == 0){    //electron
            //      console.log(this.position.x)}
       
       

            if (this.color == 0  ) {

                if ((this.position.x<(550+(400)/8*count_pn_num)*s_x)){
                    this.show = 0
                }
                    this.origin.x = 0 
                    this.origin.y = 0
                    console.log("The conditions are met for a vehicle instance.");
              
            } else if (this.color ==1 ) {
                 //electron

                 if ((this.position.x>(550-(400)/8*count_pn_num)*s_x)){
                    this.show = 0
                }
                 this.origin.x = 0 
                 this.origin.y = 0
            

            }
         
        } 
    }


    addTime() {
        this.time += 1;
    }

    noShow() {
        this.show = 0;
    }

    deadd() {
        this.dead = 1;
    }

    disappear() {
        this.appear -=20;
    }

    stop(){
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0);
        this.movingVelocity = 0;
        this.maxspeed = 0;

    }

    restart() {
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0);
        this.movingVelocity = 5*parseInt(scattering_velocity)/5*this.botz;
        this.maxspeed = 5;
    }

  

    applyForce(force) {
        this.acceleration.add(force);
    }

    seek(target) {
        this.target = target;
        this.desired = p5.Vector.sub(target, this.position);

        this.desired.setMag(this.maxspeed);

        this.steer = p5.Vector.sub(this.desired, this.velocity);
        this.steer.limit(this.maxforce);

        this.applyForce(this.steer);
    }

    easy_seek() {
        this.velocity =createVector(0, 0);
        this.acceleration =createVector(0, 0);
        this.movingVelocity = 0
        var m = createVector(this.target.x - this.position.x, this.target.y - this.position.y);
        m.normalize()
        this.position.x += 20*m.x
        this.position.y += 20*m.y
    }


    update() {
      this.velocity.add(this.acceleration);
      this.velocity.limit(this.maxspeed);
      this.position.add(this.velocity);
      this.acceleration = createVector(0, 0);
    }

    findClosestValue(array, targetX) {
        let closestDiff = 1000;
        let closestBValue;
      
        for (let i = 0; i < array.length; i++) {
          let diff = Math.abs(targetX - array[i][0]);
          if (diff < closestDiff) {
            closestDiff = diff;
            closestBValue = array[i][1];
          }
        }
      
        return closestBValue;
    }


   

    opposite_walk() {
        let uPOS = p5.Vector.mult(this.direction, this.movingVelocity);
        this.position.add(uPOS);

        const r = floor(random(10));
        const r2 = floor(random(10));

        if (floor(this.position.x) % r == 0 && floor(this.position.y) % r2 ==0) {this.direction = createVector(random(-1,1), random(-1,1));}

        if (this.position.x <  this.diameter || this.position.x > 950*s_x - this.diameter) {this.direction.x *= -1;}
        if (this.position.y < this.diameter || this.position.y > 950*s_y - this.diameter) {this.direction.y *= -1;}

      

    }

    straight_walk() {
        // let uPOS = p5.Vector.mult(this.direction, this.movingVelocity);
        // this.position.add(uPOS);

        try {
            let uPOS = p5.Vector.mult(this.direction, this.movingVelocity);
            this.position.add(uPOS);
        } catch (error) {
            //
            this.position.add(createVector(0,0))
            
        }

        if (this.position.y < 50*s_y) {this.direction = createVector(0, 1);}

    }


   


  
       


    accelerate() {
    


    
    if ((this.position.x > (150)*s_x) && (this.position.x < (250 * s_x+(100*count_pn_num)*s_x)) && V_applied_p>0) {
            
     
        if (this.color == 0  ) {
            //electron


            if ((this.position.x > (250)*s_x) && (this.position.x < (250 * s_x+(100*count_pn_num)*s_x))){
        
                //using a linear function to calculate acceleration here, for smaller x, acceleration is bigger (using electric field graph)

                let added_num = 0
                //added_num is the range added for cushion 
                let x1 = 250*s_x
                let x2 = (250+100*count_pn_num+added_num) *s_x
             
                let y1 = 0.1
                let y2 = 0
                let a = (y2-y1)/(x2-x1)
                let b = y1-a*x1
         
    
                let accelerate = a*this.position.x+b

                this.acceleration = createVector(-accelerate,0) ;
                
    
                this.velocity = p5.Vector.add(this.acceleration, this.velocity);
                this.position.add(this.velocity);

            
    
            } 

          
  

            
      
      
        }  else if (this.color == 1) {
            //hole



            let added_num = -0.5
            //added_num is the range added for cushion 
            let x1 = 250*s_x
            let x2 = (250+100*(count_pn_num+added_num)) *s_x
         
            let y1 = 15
            let y2 = 0
            let a = (y2-y1)/(x2-x1)
            let b = y1-a*x1
     

            let accelerate = a*this.position.x+b
     

            if (accelerate>=0) {
                this.acceleration = createVector(accelerate,0)

                this.velocity = p5.Vector.add(createVector(accelerate,0), this.velocity);
                this.position.add(this.velocity);
                this.direction = createVector(1,random(-1,1))

            }
           
    
        } else {

        }

     
       
     

    } else if ((this.position.x > (250)*s_x) && (this.position.x < (250 * s_x+(100*count_pn_num)*s_x))&& V_applied_p<0 && this.position.x>270*s_x) {


        if (this.color == 0) {
            //electron

            let added_num = 0
            //added_num is the range added for cushion 
            let x1 = 250*s_x
            let x2 = (250+100*count_pn_num+added_num) *s_x
         
            let y1 = 1
            let y2 = 0
            let a = (y2-y1)/(x2-x1)
            let b = y1-a*x1
     

            let accelerate = a*this.position.x+b
     

            if (accelerate>=0) {
                this.acceleration = createVector(accelerate,0)

                this.velocity = p5.Vector.add(createVector(accelerate,0), this.velocity);
                this.position.add(this.velocity);
                this.direction = createVector(1,random(-1,1))

            }
      
      
        }  else if (this.color == 1) {
            //hole

       
            let a = 300
            this.acceleration = -a/100;



            this.velocity = p5.Vector.add(createVector(this.acceleration,0), this.velocity);


          

    
        } else {

        }


       
    } else {
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0);
    }
    }

    tube_walk() {
        let uPOS = p5.Vector.mult(this.direction, this.movingVelocity);
        this.position.add(uPOS);
        
        if (this.time<100) {
            this.direction = createVector(0,1);
            this.time++
        }
    }

    alpha_update(){
        this.alpha -= 10;
    }

    appear_update(){
        this.appear += 20;
    }




    
   
}

class Appear{
    //the class to change appearing animation
    constructor(x, y, length, color, id) {
        this.x = x;
        this.y = y;
        this.position = createVector(x, y);
        this.length = length;
        this.time = 0;
        this.color = color;
        this.show = 1;
        this.starting_p = createVector(x, y);
        this.alpha = 135; //appear opacity
        this.beta = 0;
        this.disappear = 255;
        this.d = 1;
        this.dd = 50;
        this.alpha2 = 0;
        this.id =id;
        this.occupied = 0;
        this.dead = 0;

        // this.id = id

        this.acceleration = createVector(0, 0);
        this.desired = createVector(0, 0);
        this.steer = createVector(0, 0);
        this.velocity = createVector(0, 0);
        this.maxforce = 0.1;
        this.maxspeed = 0.8;
      } 

    display(){
        if (this.show == 1) {
        if (this.color == 0) {
            noStroke();
            fill(254,246,182, this.alpha);
            //fill(125, 241, 148, this.alpha);
           
            ellipse(this.position.x, this.position.y, this.d);
        } else if (this.color == 1){
        
        stroke(125, 241, 148, this.alpha);
        //stroke(255, 121, 97, this.alpha);
        strokeWeight(2);
        noFill();

 

        ellipse(this.position.x, this.position.y, this.dd);

        // }
        // ellipse(this.position.x, this.position.y, this.diameter);
        } else if (this.color == 2) {
            strokeWeight(1);
            fill(254,246,182, this.disappear);
            stroke(254,246,182, this.disappear);
            ellipse(this.position.x, this.position.y, 10);
        } else if (this.color == 3) {

            //hollow
            strokeWeight(1);
            noFill();
            stroke(125, 241, 148, this.disappear);
            ellipse(this.position.x, this.position.y, 10);

        } else if (this.color ==4) {
            //plus sign add electron
            stroke(255,this.beta)
            strokeWeight(5);
            line(this.x-10, this.y, this.x+10, this.y)
            line(this.x, this.y-10, this.x, this.y+10)
            noStroke();
            strokeWeight(1);
            
       
        }else if (this.color ==5) {
           //minus sign add electron
           stroke(255,this.beta)
           strokeWeight(5);
           line(this.x-10, this.y, this.x+10, this.y)
           noStroke();
           strokeWeight(1);
        }

        
    }
    }


    noShow() {
        this.show = 0;
    }

    dead(){
        this.dead = 1;
    }

    stop(){
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0);
        this.movingVelocity = 0;
        this.maxspeed = 0;
    }

    update(){
        if (this.color ==0) {
        this.alpha -= 15;
        this.d += 5;
        } else if (this.color ==1) {
            this.alpha -= 15;
            this.dd -= 3;
        } else if (this.color ==4 ||this.color ==5) {
            if (this.beta<100) {
                this.beta += 30;
                // this.d += 4;
            }
            
        }
        
    }

    update_location() {
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxspeed);
        this.position.add(this.velocity);
        this.acceleration = createVector(0, 0);
      }

    update_circle(){
        this.disappear -= 20;
    }


    seek(target) {
        this.target = target;
        this.desired = p5.Vector.sub(target, this.position);

        this.desired.setMag(this.maxspeed);

        this.steer = p5.Vector.sub(this.desired, this.velocity);
        this.steer.limit(this.maxforce);

        this.applyForce(this.steer);

        // if(abs(this.position.x-target.x)<1 
        // && abs(this.position.y-target.y)<1 ){
        //     this.disappear -= 20;
        //     this.acceleration = createVector(0, 0);
        //     this.velocity = createVector(0, 0);
        //     // console.log("ssss")
        // }
    }
    
    applyForce(force) {
        this.acceleration.add(force);
    }
    
}

class Disappear{
      //the class to change disappearing animation
    constructor(x, y, length, color, target) {
        this.x = x;
        this.y = y;
        this.position = createVector(x, y);
        this.length = length;
        this.time = 0;
        this.maxspeed = 5;
        this.color = color;
        this.show = 1;
        this.starting_p = createVector(x, y);
        this.alpha = 255;
        this.disappear = 255;
        this.d = 1;
        this.dd = 50;
        this.alpha2 = 0;
        this,target = target
        this.occupied = 0;
        // this.id =id;
      } 

    display(){
        if (this.show == 1) {
        if (this.color == 0) {
            noStroke();
            fill(254,246,182, this.alpha);
            //fill(125, 241, 148, this.alpha);
           
            ellipse(this.position.x, this.position.y, this.d);
        } else if (this.color == 1){
        
        stroke(125, 241, 148, this.alpha);
        //stroke(255, 121, 97, this.alpha);
        strokeWeight(2);
        noFill();

        // line(this.position.x-10,this.position.y-10,this.position.x+10,this.position.y+10);
        // line(this.position.x-10,this.position.y+10,this.position.x+10,this.position.y-10);

        // noStroke();
        // fill(125, 241, 148, this.alpha);

        ellipse(this.position.x, this.position.y, this.dd);

        // }
        // ellipse(this.position.x, this.position.y, this.diameter);
        } else if (this.color == 2) {
            strokeWeight(1);
            fill(254,246,182, this.disappear);
            stroke(254,246,182, this.disappear);
            ellipse(this.position.x, this.position.y, 10);
        }
    }
    }

    update(){
        if (this.color ==0) {
        this.alpha -= 15;
        this.d += 5;
        } else if (this.color ==1) {
            this.alpha -= 15;
            this.dd -= 3;
        }
    }

    update_circle(){
        this.disappear -= 20;
    }
    
    
}




 

  class Concentration {
    constructor(v,t) {
        this.v = v
        this.t = t
        this.counting = 1
        this.x = 0
    }

    update(){
        if (this.counting==1 && count_graph ==0){
            this.x = this.v*Math.pow(this.t*con_count*test_x_scale,1/2)
        }
      
    }

    stop_count(){
        this.counting = 0
    }
  }


  