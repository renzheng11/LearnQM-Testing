let zoomed = false;

let dataset_1 = [];
let dataset_12 = [];
let dataset_13 = []; 

let num_multi=1;

let constant_temperature = 260;
let constant_fermi =Math.round(1000*-0.28*0.026)/1000
let constant_fermi_negative =Math.round(1000*-0.28*0.026)/1000
let constant_fermi_positive =Math.round(1000*-0.28*0.026)/1000

let constant_fermi_final =Math.round(1000*-0.28*0.026)/1000

let band_state_up = [];
let band_state_down = [];

let y_circle = []
let y_line = []

let x_cordi;
let y_cordi;


let x_cordi_real;
let y_cordi_real;

let num_Line_text = 0;
let opacity_circle;
let opacity_circle_up;

let mouse_p = false

let E_conduction = [124,
  130,
  135,
  140,
  143.3333333,
  146.6666667,
  150,
  152.5,
  155,
  157.5,
  160,
  162,
  164,
  166,
  168,
  170,
  171.6666667,
  173.3333333,
  175,
  176.6666667,
  178.3333333,
  180,
  181.4285714,
  182.8571429,
  184.2857143,
  185.7142857,
  187.1428571,
  188.5714286,
  190,
  191.25,
  192.5,
  193.75,
  195,
  196.25,
  197.5,
  198.75,
  200];

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

let ranVal;

colors = {
  green: '#6ECF7F',
  yellow: '#FFF7AE',
  red: '#EA9FA2'
}

let waveToPix = d3.scaleLinear()
  .domain([0, 1.1])
  .range([0, 60]);

let diff = 0,
  diff1 = 0;

d3fourlevels = () => {
  heightD3 = 500,
    widthD3 = 300;

  svg = d3.selectAll('#d3-viz')
    .attr('height', heightD3)
    .attr('width', widthD3)
    .attr('transform', 'translate(-60,0)');

  yScale = d3.scaleLinear()
    .domain([-50, 50])
    .range([heightD3 - 60, 30]);

  xScale = d3.scaleLinear()
    .domain([-500, 500])
    .range([30, widthD3 - 30]);

  let xAxis = d3.axisBottom()
    .scale(xScale)
    .tickValues([]);

  let yAxis = d3.axisLeft()
    .scale(yScale)
    .tickValues([]);

  svg.append('line')
    .attr('id', 'sigmastar')
    // .attr('transform', `translate()`)
    .attr('stroke', '#EA9FA2')
    .attr('stroke-width', 2)
    .attr('x1', 58)
    .attr('y1', yScale(-10))
    .attr('x2', widthD3 - 58)
    .attr('y2', yScale(-10));
  svg.append('line')
    .attr('id', 'sigmastar')
    // .attr('transform', `translate()`)
    .attr('stroke', '#EA9FA2')
    .attr('stroke-width', 2)
    .attr('x1', 58)
    .attr('y1', yScale(-20))
    .attr('x2', widthD3 - 58)
    .attr('y2', yScale(-20));
  svg.append('line')
    .attr('id', 'sigmastar')
    // .attr('transform', `translate()`)
    .attr('stroke', '#EA9FA2')
    .attr('stroke-width', 2)
    .attr('x1', 58)
    .attr('y1', yScale(-30))
    .attr('x2', widthD3 - 58)
    .attr('y2', yScale(-30));
  svg.append('line')
    .attr('id', 'sigmastar')
    // .attr('transform', `translate()`)
    .attr('stroke', '#EA9FA2')
    .attr('stroke-width', 2)
    .attr('x1', 58)
    .attr('y1', yScale(-40))
    .attr('x2', widthD3 - 58)
    .attr('y2', yScale(-40));

  svg.append('line')
    .attr('id', 'sigma')
    // .attr('transform', `translate()`)
    .attr('stroke', '#EA9FA2')
    .attr('stroke-width', 2)
    .attr('x1', 58)
    .attr('y1', yScale(10))
    .attr('x2', widthD3 - 58)
    .attr('y2', yScale(10));
  svg.append('line')
    .attr('id', 'sigma')
    // .attr('transform', `translate()`)
    .attr('stroke', '#EA9FA2')
    .attr('stroke-width', 2)
    .attr('x1', 58)
    .attr('y1', yScale(20))
    .attr('x2', widthD3 - 58)
    .attr('y2', yScale(20));
  svg.append('line')
    .attr('id', 'sigma')
    // .attr('transform', `translate()`)
    .attr('stroke', '#EA9FA2')
    .attr('stroke-width', 2)
    .attr('x1', 58)
    .attr('y1', yScale(30))
    .attr('x2', widthD3 - 58)
    .attr('y2', yScale(30));
  svg.append('line')
    .attr('id', 'sigma')
    // .attr('transform', `translate()`)
    .attr('stroke', '#EA9FA2')
    .attr('stroke-width', 2)
    .attr('x1', 58)
    .attr('y1', yScale(40))
    .attr('x2', widthD3 - 58)
    .attr('y2', yScale(40));

  svg.append('g')
    .call(yAxis)
    .attr('transform', `translate(58,0)`)
    .attr('class', 'axis');

  svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 30)
    .attr("x", 0 - (heightD3 / 2))
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Energy");

  svg.append("text")
    .attr('id', 'band-gap')
    // .attr("transform", "rotate(-90)")
    .attr("x", widthD3 / 2)
    .attr("y", 0 + (heightD3 / 2))
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Band Gap");

  svg.append('line')
    .attr('id', 'band-gap')
    .attr('x1', widthD3 / 3)
    .attr('y1', heightD3 / 2 + 45)
    .attr('x2', widthD3 / 3)
    .attr('y2', heightD3 / 2 - 75)
    .attr('stroke', 'white')
    .attr('stroke-width', 2);
  svg.append('line')
    .attr('id', 'band-gap')
    .attr('x1', widthD3 / 3 - 6)
    .attr('y1', heightD3 / 2 - 75 + 6)
    .attr('x2', widthD3 / 3)
    .attr('y2', heightD3 / 2 - 75)
    .attr('stroke', 'white')
    .attr('stroke-width', 2);
  svg.append('line')
    .attr('id', 'band-gap')
    .attr('x1', widthD3 / 3 + 6)
    .attr('y1', heightD3 / 2 - 75 + 6)
    .attr('x2', widthD3 / 3)
    .attr('y2', heightD3 / 2 - 75)
    .attr('stroke', 'white')
    .attr('stroke-width', 2);
  svg.append('line')
    .attr('id', 'band-gap')
    .attr('x1', widthD3 / 3)
    .attr('y1', heightD3 / 2 + 45)
    .attr('x2', widthD3 / 3 - 6)
    .attr('y2', heightD3 / 2 + 45 - 6)
    .attr('stroke', 'white')
    .attr('stroke-width', 2);
  svg.append('line')
    .attr('id', 'band-gap')
    .attr('x1', widthD3 / 3)
    .attr('y1', heightD3 / 2 + 45)
    .attr('x2', widthD3 / 3 + 6)
    .attr('y2', heightD3 / 2 + 45 - 6)
    .attr('stroke', 'white')
    .attr('stroke-width', 2);

  svg.append("text")
    .attr('id', 'sigma-text')
    .attr("y", yScale(50))
    .attr("x", 2 * widthD3 / 4)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Conduction Band");

  svg.append("text")
    .attr('id', 'sigmastar-text')
    .attr("y", yScale(-45))
    .attr("x", 2 * widthD3 / 4)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Valence Band");
}

updatefourlevels = (orbitalCount) => {
  d3.select('#d3-viz').selectAll('#sigma').remove();
  d3.select('#d3-viz').selectAll('#sigmastar').remove();

  yScalePlus = d3.scaleLinear()
    .domain([(orbitalCount + 2) * 10, 10])
    .range([heightD3 - 90, heightD3 / 2 + 45]);

  yScaleMinus = d3.scaleLinear()
    .domain([-10, -(orbitalCount + 2) * 10])
    .range([heightD3 / 2 - 75, 60]);

  for (let i = 1; i <= orbitalCount; i++) {
    d3.select('#d3-viz')
      .append('line')
      .attr('id', 'sigma')
      .attr('stroke', '#EA9FA2')
      .attr('stroke-width', 2)
      .attr('x1', 58)
      .attr('y1', yScalePlus(i * 10))
      .attr('x2', widthD3 - 58)
      .attr('y2', yScalePlus(i * 10))
      .on('mouseover', function () {
        d3.select(this).attr('stroke', 'white');
        // d3.select('#d3-viz5').selectAll('circle').attr('opacity', 0.2);

        d3.select('#d3-viz')
          .append('circle')
          .attr('class', 'electron')
          .attr('r', 4)
          .attr('fill', colors.yellow)
          .attr('cx', widthD3 / 3)
          // .attr('x2', widthD3 / 3)
          // .attr('y1', yScalePlus(i * 10) - 10)
          .attr('cy', yScalePlus(i * 10));

        d3.select('#d3-viz')
          .append('circle')
          .attr('class', 'electron')
          .attr('r', 4)
          .attr('fill', colors.yellow)
          .attr('cx', 2 * widthD3 / 3 - 50)
          // .attr('x2', widthD3 / 3)
          // .attr('y1', yScalePlus(i * 10) - 10)
          .attr('cy', yScalePlus(i * 10));

        // d3.select('#d3-viz')
        //   .append('line')
        //   .attr('class', 'electron')
        //   .attr('stroke-width', 4)
        //   .attr('stroke', colors.yellow)
        //   .attr('x1', 2 * widthD3 / 3)
        //   .attr('x2', 2 * widthD3 / 3)
        //   .attr('y1', yScalePlus(i * 10) - 10)
        //   .attr('y2', yScalePlus(i * 10) + 10);

        d3.select('#d3-viz')
          .append('text')
          .attr('id', 'text-label')
          .text("2 electrons in this level")
          .attr('fill', 'white')
          .attr('text-anchor', 'middle')
          .attr('transform', `translate(${widthD3/2},${heightD3/2})`);

        d3.selectAll('#band-gap')
          .attr('opacity', 0);
      })
      .on('mouseout', function () {
        d3.select(this).attr('stroke', colors.red);
        // d3.select('#d3-viz5').selectAll('circle').attr('opacity', 1);
        d3.select('#d3-viz').selectAll('.electron').remove();

        d3.select('#d3-viz').select('#text-label').remove();

        d3.selectAll('#band-gap')
          .attr('opacity', 1);
      });

    d3.select('#d3-viz')
      .append('line')
      .attr('id', 'sigmastar')
      .attr('stroke', '#EA9FA2')
      .attr('stroke-width', 2)
      .attr('x1', 58)
      .attr('y1', yScaleMinus(-i * 10))
      .attr('x2', widthD3 - 58)
      .attr('y2', yScaleMinus(-i * 10))
      .attr('opacity', '0.3')
      .on('mouseover', function () {
        d3.select(this).attr('stroke', 'white');

        d3.select('#d3-viz')
          .append('text')
          .attr('id', 'text-label')
          .text("0 electrons in this level")
          .attr('fill', 'white')
          .attr('text-anchor', 'middle')
          .attr('transform', `translate(${widthD3/2},${heightD3/2})`);

        d3.selectAll('#band-gap')
          .attr('opacity', 0);
      })
      .on('mouseout', function () {
        d3.select(this).attr('stroke', colors.red);

        d3.select('#d3-viz').select('#text-label').remove();

        d3.selectAll('#band-gap')
          .attr('opacity', 1);
      });
  }
}



updateBands = (a) => {
  let numLines = 100;

  let yScalePlus = d3.scaleLinear()
    .domain([(numLines + 2) * 10, 10])
    .range([heightD3 - 60, heightD3 / 2 + 15]);

  let yScaleMinus = d3.scaleLinear()
    .domain([-10, -(numLines + 2) * 10])
    .range([heightD3 / 2 - 45, 30]);

  if (a < 80) {
    d3.selectAll('#d3-viz7')
      .select('#s-electron')
      .attr('cy', yScalePlus(0.5 * numLines * 10));
  } else {
    d3.selectAll('#d3-viz7')
      .select('#s-electron')
      .attr('cy', yScaleMinus(-0.5 * numLines * 10));
  }
}

d3bands2 = () => {

  heightD3 = 500,
    widthD3 = 300;

  let numLines = 100;

  let yScalePlus = d3.scaleLinear()
    .domain([(numLines + 2) * 10, 10])
    .range([heightD3 - 60, heightD3 / 2 + 45]);

  let yScaleMinus = d3.scaleLinear()
    .domain([-10, -(numLines + 2) * 10])
    .range([heightD3 / 2 - 75, 30]);

  let svg = d3.selectAll('#d3-viz7')
    .attr('height', heightD3)
    .attr('width', widthD3)
    // .attr('viewBox', `0 0 ${widthD3} ${heightD3}`)
    .attr('transform', 'translate(-60,0)')
    .append('g')
    .attr('opacity', 1);

  yScale = d3.scaleLinear()
    .domain([-2, 0])
    .range([heightD3 - 60, 30]);

  let yAxis = d3.axisLeft()
    .scale(yScale)
    .tickValues([]);

  d3.selectAll('#d3-viz7').append('g')
    .call(yAxis)
    .attr('transform', `translate(58,0)`)
    .attr('class', 'axis');

  d3.selectAll('#d3-viz7').append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 30)
    .attr("x", 0 - (heightD3 / 2))
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Energy");

  d3.selectAll('#d3-viz7').append("text")
    .attr('id', 'sigma-text')
    .attr("y", heightD3 / 2 + 15)
    .attr("x", widthD3 / 2)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "start")
    .text("Valence Band");

  d3.selectAll('#d3-viz7').append("text")
    .attr('id', 'sigmastar-text')
    .attr("y", heightD3 / 2 - 55)
    .attr("x", widthD3 / 2)
    .attr('class', 'label')
    .style("text-anchor", "start")
    .text("Conduction Band");

  for (let i = 1; i <= numLines; i++) {
    d3.selectAll('#d3-viz7')
      .append('line')
      .attr('id', 'sigma')
      .attr('stroke', '#EA9FA2')
      .attr('stroke-width', 1)
      .attr('x1', 58)
      .attr('y1', yScalePlus(i * 10))
      .attr('x2', widthD3 - 58)
      .attr('y2', yScalePlus(i * 10));

    d3.selectAll('#d3-viz7')
      .append('line')
      .attr('id', 'sigmastar')
      .attr('stroke', '#EA9FA2')
      .attr('stroke-width', 1)
      .attr('x1', 58)
      .attr('y1', yScaleMinus(-i * 10))
      .attr('x2', widthD3 - 58)
      .attr('y2', yScaleMinus(-i * 10))
      .attr('opacity', '0.3');

  }
  d3.selectAll('#d3-viz7')
    .append('line')
    .attr('x1', 80)
    .attr('x2', 80)
    .attr('y1', yScalePlus(10))
    .attr('y2', yScaleMinus(-10))
    .attr('stroke', '#fff')
    .attr('stroke-width', 1);

  d3.selectAll('#d3-viz7').append("text")
    .attr('id', 'sigmastar-text')
    .attr("y", heightD3 / 2)
    .attr("x", 90)
    .attr('class', 'label')
    .style("text-anchor", "start")
    .text("1.1 eV");
}

d3bands2AddElec = () => {
  heightD3 = 500,
    widthD3 = 300;

  let numLines = 100;

  let yScalePlus = d3.scaleLinear()
    .domain([(numLines + 2) * 10, 10])
    .range([heightD3 - 60, heightD3 / 2 + 15]);

  let yScaleMinus = d3.scaleLinear()
    .domain([-10, -(numLines + 2) * 10])
    .range([heightD3 / 2 - 45, 30]);

  let svg = d3.select('#d3-viz7');

  svg.select('#curr')
    .attr('id', '')
    .transition()
    // .attr('cx', widthD3 / 2 + (0.5 * Math.random()) * 200)
    .attr('cy', heightD3 / 2 - 15 + diff1);

  svg.append('circle')
    .attr('id', 'hole')
    .attr('fill', 'none')
    .attr('stroke', colors.green)
    .attr('stroke-width', 2)
    .attr('cx', widthD3 / 2)
    .attr('cy', heightD3 / 2 - 15 + diff)
    .attr('r', 5);
}

bringElecBackD3 = () => {
  d3.select('#d3-viz7')
    .selectAll('.current-electron')
    .remove();

  d3.select('#d3-viz7')
    .selectAll('#hole')
    .remove();
}

showCurrElect = (a) => {
  heightD3 = 500,
    widthD3 = 300;
  let wv = 1240 / a;
  let cen = waveToPix(wv);
  let dg = waveToPix(1.1);
  diff = dg + Math.floor(Math.random() * Math.floor(2 * (cen - dg)));
  diff1 = diff - 2 * cen;
  d3.select('#d3-viz7')
    .append('circle')
    .attr('id', 'curr')
    .attr('class', 'current-electron')
    .attr('cx', widthD3 / 2)
    .attr('cy', heightD3 / 2 - 15 + diff)
    .attr('opacity', 1)
    .attr('r', 5)
    .attr('fill', colors.yellow);
}

//  scene 2

d3bands = () => {
  heightD3 = 500,
    widthD3 = 350;

  svg_1 = d3.selectAll('#d3-viz6')
    // .attr('height', heightD3)
    // .attr('width', widthD3)
    // .attr('viewBox', `0 0 ${widthD3} ${heightD3}`)
    // .on('mousemove', function() {
    //   console.log( d3.mouse(this) ) // log the mouse x,y position
    // })
    .attr('transform', 'translate(-60,0)')
    .append('g')
    .attr('id', 'zoom-out')
    .attr('opacity', 1) 
   ;

  svg_1.append('rect')
    .attr('width', '100%')
    .attr('height', '100%')
    .attr('fill', '#121212');

  yScale = d3.scaleLinear()
    .domain([-100, 100])
    .range([heightD3 - 60, 30]);

  xScale = d3.scaleLinear()
    .domain([0, 100])
    .range([30, widthD3 - 30]);

  let xAxis = d3.axisBottom()
    .scale(xScale)
    .tickValues([]);

  let yAxis = d3.axisLeft()
    .scale(yScale)
    .tickValues([]);

  d3.selectAll('#d3-viz6').append('g')
    .call(yAxis)
    .attr('transform', `translate(58,0)`)
    .attr('class', 'axis');

    // d3.selectAll('#d3-viz6').append('g')
    // .call(xAxis)
    // .attr('transform', `translate(0,0)`)
    // .attr('class', 'axis');

    svg_1.append('path')
    .attr('id', 'area');

  d3.selectAll('#d3-viz6').append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 30)
    .attr("x", 0 - (heightD3 / 2))
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Energy(eV)");

    if (settings.nucleus == true){
      d3.selectAll('#d3-viz6').append("text")
      // .attr("transform", "rotate(-90)")
      .attr("y", 8*heightD3/9)
      .attr("x", widthD3/2)
      .attr("dy", "1em")
      .attr('class', 'label')
      .style("text-anchor", "middle")
      .text("Probability");
    

    

    d3.selectAll('#d3-viz6').append("text")
    .attr('id', 'sigmastar-text')
    .attr("y", heightD3-70+15 )
    .attr("x", 60)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "start")
    .text("0");

    d3.selectAll('#d3-viz6').append("text")
    .attr('id', 'sigmastar-text')
    .attr("y", heightD3-70+15 )
    .attr("x", widthD3-65)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "start")
    .text("1");
    
    }
    d3.selectAll('#d3-viz6').append("text")
    .attr('id', 'sigma-text')
    .attr("y", heightD3 / 2 +5+5+50)
    .attr("x", 2 * widthD3 / 3)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "start")
    .text("Valence Band");

    svg_1.append('circle')
    .attr('id', 'circle_1_2')
    .attr('stroke', '#EA9FA2');

    svg_1.append('circle')
    .attr('id', 'circle_2_2')
    .attr('stroke', '#EA9FA2');

    svg_1.append('circle')
    .attr('id', 'circle_1_2_up')
    .attr('stroke', '#EA9FA2');

    svg_1.append('circle')
    .attr('id', 'circle_2_2_up')
    .attr('stroke', '#EA9FA2');

    svg_1.append('line')
    .attr('id', 'line_1_2')
    .attr('stroke', '#EA9FA2');

    svg_1.append('text')
    .attr('id', 'text_1_2');

    svg_1.append('text')
    .attr('id', 'text_1_2_e');

    svg_1.append('text')
    .attr('id', 'text_1_2_hh');

    svg_1.append('line')
    .attr('id', 'line_s1')
    .attr('stroke', '#EA9FA2');

    svg_1.append('line')
    .attr('id', 'line_s1_u')
    .attr('stroke', '#EA9FA2');

    svg_1.append('line')
    .attr('id', 'line_s1_d')
    .attr('stroke', '#EA9FA2');

    svg_1.append('line')
    .attr('id', 'line_s2')
    .attr('stroke', '#EA9FA2');

    svg_1.append('line')
    .attr('id', 'line_s2_u')
    .attr('stroke', '#EA9FA2');

    svg_1.append('line')
    .attr('id', 'line_s2_d')
    .attr('stroke', '#EA9FA2');


    svg_1.append('line')
    .attr('id', 'line_1')
    .attr('stroke', '#EA9FA2');

    svg_1.append('text')
    .attr('id', 'text_1');

    svg_1.append('text')
    .attr('id', 'text_2');

    svg_1.append('text')
    .attr('id', 'text_3');

    svg_1.append('text')
    .attr('id', 'text_4');

    svg_1.append('text')
    .attr('id', 'text_5');

    svg_1.append('text')
    .attr('id', 'text_6');

    svg_1.append('text')
    .attr('id', 'text_fermi');
    
  

    

  d3.selectAll('#d3-viz6').append("text")
    .attr('id', 'sigmastar-text')
    .attr("y", heightD3 / 2 - 15 - 20-20-50)
    .attr("x", 2 * widthD3 / 3)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "start")
    .text("Conduction Band");

    

    d3.selectAll('#d3-viz6').append("text")
    .attr('id', 'sigmastar-text')
    .attr("y", heightD3-70 )
    .attr("x", 20)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "start")
    .text("-1.00");

    d3.selectAll('#d3-viz6').append("text")
    .attr('id', 'sigmastar-text')
    .attr("y", heightD3-70-90)
    .attr("x", 20)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "start")
    .text("-0.56");

    d3.selectAll('#d3-viz6').append("text")
    .attr('id', 'sigmastar-text')
    .attr("y", heightD3-70-90-225-90 )
    .attr("x", 23)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "start")
    .text("1.00");

    d3.selectAll('#d3-viz6').append("text")
    .attr('id', 'sigmastar-text')
    .attr("y", heightD3-70-90-225)
    .attr("x", 23)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "start")
    .text("0.56");


  var areaPath_1 = svg_1.append('path')
    .attr("fill-opacity","0.1")
    .style("fill","#F1E77D");

  let ryScale = d3.scaleLinear()
    .domain([0, 1])
    .range([heightD3 / 2 + 20, heightD3 / 2 + 160]);

  let rxScale = d3.scaleLinear()
    .domain([0, 1])
    .range([90, widthD3 - 90]);

  let numLines = 100;

  let yScalePlus = d3.scaleLinear()
    .domain([(numLines + 2) * 10, 10])
    .range([heightD3 - 60, heightD3 / 2 + 15]);

  let yScaleMinus = d3.scaleLinear()
    .domain([-10, -(numLines + 2) * 10])
    .range([heightD3 / 2 - 45, 30]);

    d3.select('#d3-viz6')
    .append('line')
    .attr('id', 'sigma2')
    .attr('stroke', '#FEF6B6')
    .attr('stroke-width', 2)
    .style("stroke-dasharray", ("8, 8"))
    .attr('x1', 58)
    .attr('y1', yScale(100*constant_fermi))
    .attr('x2', widthD3 - 58)
    .attr('y2', yScale(100*constant_fermi));

    d3.selectAll('#d3-viz6').append("text")
    .attr('id', 'sigma2-text')
    .style('fill', '#FEF6B6')
    .attr("y", yScale(100*constant_fermi+10))
    .attr("x", 1 * widthD3 / 5)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "start")
    .text("fermi energy = "+constant_fermi+ " eV");

//scene 1
    // d3.selectAll('#d3-viz6').append("text")
    // .attr('id', 'fermi-text')
    // .style('fill', '#FEF6B6')
    // .attr("y", yScale(100*constant_fermi+10))
    // .attr("x", 1 * widthD3 / 5+100)
    // .attr("dy", "1em")
    // .attr('class', 'label')
    // .style("text-anchor", "start")
    // .text(constant_fermi);

    svg_1.append('text')
    .attr('id', 'fermi-text');




for (let i = 0; i < 60; i++) {

    y_circle[i] = 'circle_group'+str(i)
    svg_1.append('circle')
    .attr('id', y_circle[i])
    .attr('stroke', '#EA9FA2');
}


for (let i = 0; i < 60; i++) {

  y_line[i] = 'line_group'+str(i)
  svg_1.append('line')
  .attr('id', y_line[i])
  .attr('stroke', '#EA9FA2');
}
    

    for (let i = 0; i < band_state_up.length; i++) {
      d3.select('#d3-viz6')
        .append('line')
        .attr('id', 'sigma')
        .attr('stroke', '#EA9FA2')
        .attr('stroke-width', 0.02)
        .attr('x1', 58)
        .attr('y1', yScale(100*band_state_up[i]))
        .attr('x2', widthD3 - 58)
        .attr('y2', yScale(100*band_state_up[i]));
    }
        for (let i = 0; i < band_state_down.length; i++) {
      d3.select('#d3-viz6')
        .append('line')
        .attr('id', 'sigmastar')
        .attr('stroke', '#EA9FA2')
        .attr('stroke-width', 0.02)
        .attr('x1', 58)
        .attr('y1', yScale(100*band_state_down[i]))
        .attr('x2', widthD3 - 58)
        .attr('y2', yScale(100*band_state_down[i]));
    }

      $('#zoom1').anythingZoomer({
          smallArea: 'small',
          clone: true,
          edge: 0,
          switchEvent: 'none'
        });

  

function e_probability()  {
  for (let i = 0; i < 810; i+=1) {
    dataset_1[i] = {
      x: i/10+9.2,
      y: Math.round(350*((Math.log((1/((i+1)/10/82))-1))*0.026*constant_temperature/300+constant_fermi))
      // y: Math.round(100*(constant_temperature*(Math.log((1/((i+10)/100))-1))+constant_fermi))

    };
  }





  d3.selectAll('#d3-viz6').append("path")
    .datum(dataset_1)
    .attr("fill", "#cce5df")
    .attr("stroke", "#none")
    .attr('opacity', 0.2)
    .attr("d", d3.area()
      // .curve(d3.curveMonotoneX)
      .x(function(d) { return xScale(d.x) })
      .y0(yScale(-100))
      .y1(function(d) { return yScale(d.y) })
      )

}

if (settings.nucleus == true) {
  e_probability()
}
  
}

reset_d3bands = () => {
  svg_1.selectAll("*").remove();
}

d3bands_update = () => {

 
if (settings.nucleus == false){





    svg_1.select('#text_fermi')
    .attr("y", yScale(y_cordi) )
      .attr("x",  widthD3-20 )
      .attr("dy", "1em")
      .attr('class', 'label')
      .style("text-anchor", "start")
      .text("# of states: "+ num_Line_text );

    svg_1.select('#line_1')
    .attr('stroke', '#FEF6B6')
    .attr('stroke-width', 3)
    .attr('x1', 58)
    .attr('y1', yScale(y_cordi))
    .attr('x2', widthD3 - 58)
    .attr('y2', yScale(y_cordi));

    var n = "-20"
		var s = "eV"
					// var p = (Math.round((-0.009863*(y+20)+2.552329)*100)/100).toString()+ "+/-10"
		var p = (Math.round(y_cordi)/100).toString()
		//base.edit.html( p.sub()+n.sup() +s.sub());

  
      svg_1.select('#text_1')
      .attr("y", yScale(y_cordi) )
      .attr("x",  widthD3-20 )
      .attr("dy", "1em")
      .attr('class', 'label')
      .style("text-anchor", "start")
      .text("# of states: "+ num_Line_text );

      svg_1.select('#text_2')
      .attr("y", yScale(y_cordi+30) )
      .attr("x",  xScale(x_cordi-10) )
      .attr("dy", "1em")
      .attr('class', 'label')
      .style("text-anchor", "start")
      .text(p+"eV");

     

      svg_1.select('#text_3')
      .attr("y", yScale(y_cordi-30) )
      .attr("x",  xScale(x_cordi-10) )
      .attr("dy", "1em")
      .attr('class', 'label')
      .style("text-anchor", "start")
      .text(p+"eV");


      svg_1.select('#text_4')
      .attr("y", yScale(y_cordi+30+3+1) )
      .attr("x",  xScale(x_cordi-10+22+5+10) )
      .attr("dy", "1em")
      .style("font-size", "10px")
      .attr('class', 'label')
      .style("text-anchor", "start")
      .text("-20");

      svg_1.select('#text_5')
      .attr("y", yScale(y_cordi+30) )
      .attr("x",  xScale(x_cordi-10+15+1) )
      .attr("dy", "1em")
      .attr('class', 'label')
      .style("text-anchor", "start")
      .text("+ " + Math.round(num_multi*100)/100 );


      svg_1.select('#text_6')
      .attr("y", yScale(y_cordi+30) )
      .attr("x",  xScale(x_cordi-10+15+1+13) )
      .attr("dy", "1em")
      .attr('class', 'label')
      .style("text-anchor", "start")
      .text("* 10 "+ " "+ "     eV");
      

    //   let num_Line = Math.round(88*Math.pow(i/100-0.56,1/2))
  
    // let num_Line_n = 50*Math.pow(-0.56+m/100,1/2)

  


    svg_1.select('#text_1_2')
    .attr("y", yScale(y_cordi) )
    .attr("x",  widthD3-20 )
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "start")
    .text("# of states: "+ num_Line_text );

    if (y_cordi>0){
      svg_1.select('#text_1_2_e')
    .attr("y", yScale(y_cordi)+20 )
    .attr("x",  widthD3-20 )
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "start")
    .text("# of electrons: "+ (2*1*num_Line_text*(1/(1+(Math.exp(y_cordi/100/(0.026*constant_temperature/300)))))).toExponential(2) );


    } else if (y_cordi<0){
      svg_1.select('#text_1_2_hh')
      .attr("y", yScale(y_cordi)+20 )
      .attr("x",  widthD3-20 )
      .attr("dy", "1em")
      .attr('class', 'label')
      .style("text-anchor", "start")
      .text("# of electrons: "+ Math.round((2*1*num_Line_text*(1/(1+(Math.exp(y_cordi/100/(0.026*constant_temperature/300))))))) );

      svg_1.select('#text_1_2_e')
      .attr("y", yScale(y_cordi)+40 )
      .attr("x",  widthD3-20 )
      .attr("dy", "1em")
      .attr('class', 'label')
      .style("text-anchor", "start")
      .text("# of holes: "+ (2*num_Line_text*(1-(1/(1+(Math.exp(y_cordi/100/(0.026*constant_temperature/300))))))).toExponential(2)  );
  

      
    }

  }

}

d3bands_update_up = () => {



  if (settings.nucleus==false) {
    for (let i = 0; i < num_Line_text; i++) {
      svg_1.select('#'+y_circle[i])
      .attr("cx", x_cordi_real+75-0.2+random(-0.5,0.5))
      .attr("cy", y_cordi_real-6+0.2+random(-0.5,0.5))
      .attr("r", 0.03)
      .attr('opacity', opacity_circle)
      .style("stroke", "none")
      .style("fill", "#FEF6B6");
    }
   
    if (num_Line_text !=0){
      for (let i = 0; i < (num_Line_text+1); i++) {
        svg_1.select('#'+y_line[i])
        .attr('stroke', '#EA9FA2')
            .attr('stroke-width', 0.02)
            .attr('x1', (x_cordi_real+75-0.2-1))
            .attr('y1', (y_cordi_real-6+0.2-0.5)+i*(1/(num_Line_text+1)))
            .attr('x2', (x_cordi_real+75-0.2+1))
            .attr('y2', (y_cordi_real-6+0.2-0.5)+i*(1/(num_Line_text+1)));
      }
      
    }


    //a=-2/(446-35)
//b=1+35*2/(446-35)
//

  }

 

  // if (num_Line_text !=0){
  //   for (let i = 0; i < (num_Line_text+1); i++) {
  //     svg_1.select('#'+y_line[i])
  //     .attr('stroke', '#EA9FA2')
  //         .attr('stroke-width', 0.02)
  //         .attr('x1', x_cordi_real+75-0.2-1)
  //         .attr('y1', y_cordi_real-6+0.2-0.5+i*(1/(num_Line_text+1)))
  //         .attr('x2', x_cordi_real+75-0.2+1)
  //         .attr('y2', y_cordi_real-6+0.2-0.5+i*(1/(num_Line_text+1)));
  //   }
    
  // }




///add line group/////////////////////////


// for (let i = 0; i < 60; i++) {
//   svg_1.select('#'+y_circle[i])
//   .attr('stroke', '#EA9FA2')
//         .attr('stroke-width', 0.02)
//         .attr('x1', xScale(x_cordi_real-100))
//         .attr('y1', yScale(y_cordi_real))
//         .attr('x2', xScale(x_cordi_real+100))
//         .attr('y2', yScale(y_cordi_real));

// }

// for (let i = 0; i < 60; i++) {
//   svg_1.select('#'+y_circle[i])
//   .attr('stroke', '#EA9FA2')
//         .attr('stroke-width', 0.02)
//         .attr('x1', x_cordi_real+85-100)
//         .attr('y1', y_cordi_real-2)
//         .attr('x2', x_cordi_real+85+100)
//         .attr('y2', y_cordi_real-2);

// }
  


}



d3bands_remove_circle = () => {


  svg_1.select('#circle_1_2_up').remove

  svg_1.select('#circle_1_2').remove


  svg_1.select('#circle_2_2').remove
  svg_1.select('#circle_2_2_up').remove




}

// svg_3.selectAll("*").remove();
// positive
d3bands_2 = () => {
  heightD3 = 500,
    widthD3 = 350;

  svg_12= d3.selectAll('#d3-viz6-2')
    // .attr('height', heightD3)
    // .attr('width', widthD3)
    // .attr('viewBox', `0 0 ${widthD3} ${heightD3}`)
    .attr('transform', 'translate(-60,0)')
    .append('g')
    .attr('id', 'zoom-out')
    .attr('opacity', 1);

  svg_12.append('rect')
    .attr('width', '100%')
    .attr('height', '100%')
    .attr('fill', '#121212');

    svg_12.append('line')
    .attr('id', 'line_1')
    .attr('stroke', '#EA9FA2');

    svg_12.append('text')
    .attr('id', 'text_1');


    svg_12.append('text')
    .attr('id', 'text_2_2');

    svg_12.append('text')
    .attr('id', 'text_2');

    svg_12.append('text')
    .attr('id', 'text_2_e');

    svg_12.append('text')
    .attr('id', 'text_3');

    svg_12.append('text')
    .attr('id', 'text_4');

    svg_12.append('text')
    .attr('id', 'text_5');

    svg_12.append('text')
    .attr('id', 'text_6');

    svg_12.append('text')
    .attr('id', 'text_fermi');

  yScale = d3.scaleLinear()
    .domain([-100, 100])
    .range([heightD3 - 60, 30]);

  xScale = d3.scaleLinear()
    .domain([0, 100])
    .range([30, widthD3 - 30]);

  let xAxis = d3.axisBottom()
    .scale(xScale)
    .tickValues([]);

  let yAxis = d3.axisLeft()
    .scale(yScale)
    .tickValues([]);

  d3.selectAll('#d3-viz6-2').append('g')
    .call(yAxis)
    .attr('transform', `translate(58,0)`)
    .attr('class', 'axis');

    svg_1.append('path')
    .attr('id', 'area');


    if (settings.nn == true){
    d3.selectAll('#d3-viz6-2').append("text")
    // .attr("transform", "rotate(-90)")
    .attr("y", 8*heightD3/9)
    .attr("x", widthD3/2)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Probability");

    d3.selectAll('#d3-viz6-2').append("text")
    .attr('id', 'sigmastar-text')
    .attr("y", heightD3-70+15 )
    .attr("x", 60)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "start")
    .text("0");

    d3.selectAll('#d3-viz6-2').append("text")
    .attr('id', 'sigmastar-text')
    .attr("y", heightD3-70+15 )
    .attr("x", widthD3-65)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "start")
    .text("1");
    }

  d3.selectAll('#d3-viz6-2').append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 30)
    .attr("x", 0 - (heightD3 / 2))
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Energy(eV)");

    d3.selectAll('#d3-viz6-2').append("text")
    .attr('id', 'sigma-text')
    .attr("y", heightD3 / 2 +5+5+50)
    .attr("x", 2 * widthD3 / 3)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "start")
    .text("Valence Band");

    

  d3.selectAll('#d3-viz6-2').append("text")
    .attr('id', 'sigmastar-text')
    .attr("y", heightD3 / 2 - 15 - 20-20-50)
    .attr("x", 2 * widthD3 / 3)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "start")
    .text("Conduction Band");

    d3.selectAll('#d3-viz6-2').append("text")
    .attr('id', 'sigmastar-text')
    .attr("y", heightD3-70 )
    .attr("x", 20)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "start")
    .text("-1.00");


 
     
    d3.selectAll('#d3-viz6-2').append("text")
    .attr('id', 'sigmastar-text')
    .attr("y", heightD3-70-90)
    .attr("x", 20)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "start")
    .text("-0.56");

    d3.selectAll('#d3-viz6-2').append("text")
    .attr('id', 'sigmastar-text')
    .attr("y", heightD3-70-90-225-90 )
    .attr("x", 23)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "start")
    .text("1.00");

    d3.selectAll('#d3-viz6-2').append("text")
    .attr('id', 'sigmastar-text')
    .attr("y", heightD3-70-90-225)
    .attr("x", 23)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "start")
    .text("0.56");

    d3.select('#d3-viz6-2')
    .append('line')
    .attr('id', 'sigma2')
    .attr('stroke', '#FEF6B6')
    .attr('stroke-width', 2)
    .style("stroke-dasharray", ("8, 8"))
    .attr('x1', 58)
    .attr('y1', yScale(100*constant_fermi_positive))
    .attr('x2', widthD3 - 58)
    .attr('y2', yScale(100*constant_fermi_positive));

    d3.selectAll('#d3-viz6-2').append("text")
    .attr('id', 'sigma2-text')
    .style('fill', '#FEF6B6')
    .attr("y", yScale(100*constant_fermi_positive+10))
    .attr("x", 1 * widthD3 / 5)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "start")
    .text("fermi energy = "+Math.round(constant_fermi_positive*1000)/1000+ " eV");



  var areaPath_1 = svg_1.append('path')
    .attr("fill-opacity","0.1")
    .style("fill","#F1E77D");

  let ryScale = d3.scaleLinear()
    .domain([0, 1])
    .range([heightD3 / 2 + 20, heightD3 / 2 + 160]);

  let rxScale = d3.scaleLinear()
    .domain([0, 1])
    .range([90, widthD3 - 90]);

  let numLines = 100;

  let yScalePlus = d3.scaleLinear()
    .domain([(numLines + 2) * 10, 10])
    .range([heightD3 - 60, heightD3 / 2 + 15]);

  let yScaleMinus = d3.scaleLinear()
    .domain([-10, -(numLines + 2) * 10])
    .range([heightD3 / 2 - 45, 30]);



    

    for (let i = 0; i < band_state_up.length; i++) {
      d3.select('#d3-viz6-2')
        .append('line')
        .attr('id', 'sigma')
        .attr('stroke', '#EA9FA2')
        .attr('stroke-width', 0.02)
        .attr('x1', 58)
        .attr('y1', yScale(100*band_state_up[i]))
        .attr('x2', widthD3 - 58)
        .attr('y2', yScale(100*band_state_up[i]));
    }
        for (let i = 0; i < band_state_down.length; i++) {
      d3.select('#d3-viz6-2')
        .append('line')
        .attr('id', 'sigmastar')
        .attr('stroke', '#EA9FA2')
        .attr('stroke-width', 0.02)
        .attr('x1', 58)
        .attr('y1', yScale(100*band_state_down[i]))
        .attr('x2', widthD3 - 58)
        .attr('y2', yScale(100*band_state_down[i]));
    }

  $('#zoom2').anythingZoomer({
    smallArea: 'small',
    clone: true,
    edge: 0,
    switchEvent: 'none'
  });

function e_probability()  {
  for (let i = 0; i < 810; i+=1) {
    dataset_12[i] = {
      x: i/10+9.2,
      y: Math.round(350*((Math.log((1/((i+1)/10/82))-1))*0.026*constant_temperature/300))+100*constant_fermi
      // y: Math.round(100*(constant_temperature*(Math.log((1/((i+10)/100))-1))+constant_fermi))

  //500
//320
//scne2 
    };
  }





  d3.selectAll('#d3-viz6-2').append("path")
    .datum(dataset_12)
    .attr("fill", "#cce5df")
    .attr("stroke", "#none")
    .attr('opacity', 0.2)
    .attr("d", d3.area()
      // .curve(d3.curveMonotoneX)
      .x(function(d) { return xScale(d.x) })
      .y0(yScale(-100))
      .y1(function(d) { return yScale(d.y) })
      )

}


if (settings.nn == true){
  e_probability()
}

}

reset_d3bands_2 = () => {
  svg_12.selectAll("*").remove();
}

// no probablity scene 1 
bands_function = () =>{
  for (let i = 57; i <= 100; i++) {
    let num_Line = Math.round(88*Math.pow(i/100-0.56,1/2))
    let constant_gap = 0.01/num_Line
    for (let j=0; j<num_Line; j++)  {
      band_state_up.push((i-1)/100+constant_gap*(j))

    }
}


for (let m = 57; m <= 100; m++) {
  let num_Line_n = Math.round(50*Math.pow(-0.56+m/100,1/2))
  let constant_gap_n = 0.01/num_Line_n
  // console.log(constant_gap)
   

  for (let n=0; n<Math.round(num_Line_n); n++)  {

    band_state_down.push(-(m-1)/100-constant_gap_n*(n))
  
 
    // console.log(j)

  }
}

}

d3bands_update_2 = () => {

 
  if (settings.nn == false){

    svg_12.select('#text_fermi')
    .attr("y", yScale(y_cordi) )
      .attr("x",  widthD3-20 )
      .attr("dy", "1em")
      .attr('class', 'label')
      .style("text-anchor", "start")
      .text("# of states: "+ num_Line_text );

    svg_12.select('#line_1')
    .attr('stroke', '#FEF6B6')
    .attr('stroke-width', 3)
    .attr('x1', 58)
    .attr('y1', yScale(y_cordi))
    .attr('x2', widthD3 - 58)
    .attr('y2', yScale(y_cordi));

    var n = "-20"
		var s = "eV"
					// var p = (Math.round((-0.009863*(y+20)+2.552329)*100)/100).toString()+ "+/-10"
		var p = (Math.round(y_cordi)/100).toString()
		//base.edit.html( p.sub()+n.sup() +s.sub());

  
      svg_12.select('#text_1')
      .attr("y", yScale(y_cordi) )
      .attr("x",  widthD3-20 )
      .attr("dy", "1em")
      .attr('class', 'label')
      .style("text-anchor", "start")
      .text("# of states: "+ num_Line_text );

      svg_12.select('#text_2_2')
      .attr("y", yScale(y_cordi+30) )
      .attr("x",  xScale(x_cordi-10) )
      .attr("dy", "1em")
      .attr('class', 'label')
      .style("text-anchor", "start")
      .text(p+"eV");

     

      svg_12.select('#text_3')
      .attr("y", yScale(y_cordi-30) )
      .attr("x",  xScale(x_cordi-10) )
      .attr("dy", "1em")
      .attr('class', 'label')
      .style("text-anchor", "start")
      .text(p+"eV");


      svg_12.select('#text_4')
      .attr("y", yScale(y_cordi+30+3+1) )
      .attr("x",  xScale(x_cordi-10+22+5+10) )
      .attr("dy", "1em")
      .style("font-size", "10px")
      .attr('class', 'label')
      .style("text-anchor", "start")
      .text("-20");

      svg_12.select('#text_5')
      .attr("y", yScale(y_cordi+30) )
      .attr("x",  xScale(x_cordi-10+15+1) )
      .attr("dy", "1em")
      .attr('class', 'label')
      .style("text-anchor", "start")
      .text("+ " + Math.round(num_multi*100)/100 );


      svg_12.select('#text_6')
      .attr("y", yScale(y_cordi+30) )
      .attr("x",  xScale(x_cordi-10+15+1+13) )
      .attr("dy", "1em")
      .attr('class', 'label')
      .style("text-anchor", "start")
      .text("* 10 "+ " "+ "     eV");
  
      svg_12.select('#text_1')
      .attr("y", yScale(y_cordi) )
      .attr("x",  widthD3-20 )
      .attr("dy", "1em")
      .attr('class', 'label')
      .style("text-anchor", "start")
      .text("# of states: "+ num_Line_text );
  
      if (y_cordi>0){
        svg_12.select('#text_2')
      .attr("y", yScale(y_cordi)+20 )
      .attr("x",  widthD3-20 )
      .attr("dy", "1em")
      .attr('class', 'label')
      .style("text-anchor", "start")
      .text("# of electrons: "+ (2*1*num_Line_text*(1/(1+(Math.exp((y_cordi/100-constant_fermi)/(0.026*constant_temperature/300)))))).toExponential(2) );
  
  
      } else if (y_cordi<0){
        svg_12.select('#text_2_e')
        .attr("y", yScale(y_cordi)+20 )
        .attr("x",  widthD3-20 )
        .attr("dy", "1em")
        .attr('class', 'label')
        .style("text-anchor", "start")
        .text("# of electrons: "+ Math.round((2*1*num_Line_text*(1/(1+(Math.exp((y_cordi/100-constant_fermi)/(0.026*constant_temperature/300)))))))  );

       

        svg_12.select('#text_2')
        .attr("y", yScale(y_cordi)+40 )
        .attr("x",  widthD3-20 )
        .attr("dy", "1em")
        .attr('class', 'label')
        .style("text-anchor", "start")
        .text("# of holes: "+ (2*num_Line_text*(1-(1/(1+(Math.exp((y_cordi/100-constant_fermi)/(0.026*constant_temperature/300))))))).toExponential(2)  );

    
      }
  
    }
  
  }






d3bands_0 = () => {


  heightD3 = 500,
    widthD3 = 350;

  svg_0= d3.selectAll('#d3-viz6-0')
    // .attr('height', heightD3)
    // .attr('width', widthD3)
    // .attr('viewBox', `0 0 ${widthD3} ${heightD3}`)
    .attr('transform', 'translate(-60,0)')
    .append('g')
    .attr('id', 'zoom-out');
    // .style("stroke", "white")
    // .style("fill", "none")
    // .attr("stroke-width", 0.8)
    // .attr('opacity', 1);

  svg_0.append('rect')
    .attr('width', '100%')
    .attr('height', '100%')
    .attr('fill', '#121212');

    svg_0.append('circle')
    .attr('id', 'circle_1')
    .attr('stroke', '#EA9FA2');

    svg_0.append('circle')
    .attr('id', 'circle_2')
    .attr('stroke', '#EA9FA2');

    svg_0.append('line')
    .attr('id', 'line_1')
    .attr('stroke', '#EA9FA2');

    svg_0.append('text')
    .attr('id', 'text_1');

    svg_0.append('text')
    .attr('id', 'text_2');

    svg_0.append('text')
    .attr('id', 'text_3');

    svg_0.append('text')
    .attr('id', 'text_4');

    svg_0.append('text')
    .attr('id', 'text_5');

    svg_0.append('text')
    .attr('id', 'text_6');

    svg_0.append('text')
    .attr('id', 'text_fermi');
   

  yScale = d3.scaleLinear()
    .domain([-100, 100])
    .range([heightD3 - 60, 30]);

  xScale = d3.scaleLinear()
    .domain([0, 100])
    .range([30, widthD3 - 30]);

  let xAxis = d3.axisBottom()
    .scale(xScale)
    .tickValues([]);

  let yAxis = d3.axisLeft()
    .scale(yScale)
    .tickValues([-100,-56,0,56,100]);

    // d3.selectAll('#d3-viz6-0').append("text")
    // // .attr("transform", "rotate(-90)")
    // .attr("y", 8*heightD3/9)
    // .attr("x", widthD3/2)
    // .attr("dy", "1em")
    // .attr('class', 'label')
    // .style("text-anchor", "middle")
    // .text("Probability");

    // d3.selectAll('#d3-viz6-0').append("text")
    // .attr('id', 'sigmastar-text')
    // .attr("y", heightD3-70+15 )
    // .attr("x", 60)
    // .attr("dy", "1em")
    // .attr('class', 'label')
    // .style("text-anchor", "start")
    // .text("0");

    // d3.selectAll('#d3-viz6-0').append("text")
    // .attr('id', 'sigmastar-text')
    // .attr("y", heightD3-70+15 )
    // .attr("x", widthD3-65)
    // .attr("dy", "1em")
    // .attr('class', 'label')
    // .style("text-anchor", "start")
    // .text("1");

  d3.selectAll('#d3-viz6-0').append('g')
    .call(yAxis)
    .attr('transform', `translate(58,0)`)
    .attr('class', 'axis');

    svg_0.append('path')
    .attr('id', 'area');

  d3.selectAll('#d3-viz6-0').append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 30)
    .attr("x", 0 - (heightD3 / 2))
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Energy (eV)");

    // d3.select('#d3-viz6-0')
    // .append('line')
    // .attr('id', 'sigma2')
    // .attr('stroke', '#FEF6B6')
    // .attr('stroke-width', 2)
    // .style("stroke-dasharray", ("8, 8"))
    // .attr('x1', 58)
    // .attr('y1', yScale(0))
    // .attr('x2', widthD3 - 58)
    // .attr('y2', yScale(0));

    // d3.selectAll('#d3-viz6-0').append("text")
    // .attr('id', 'sigma2-text')
    // .style('fill', '#FEF6B6')
    // .attr("y", yScale(0))
    // .attr("x", 1 * widthD3 / 5)
    // .attr("dy", "1em")
    // .attr('class', 'label')
    // .style("text-anchor", "start")
    // .text("fermi energy");

  d3.selectAll('#d3-viz6-0').append("text")
    .attr('id', 'sigma-text')
    .attr("y", heightD3 / 2 +5+5+50)
    .attr("x", 2 * widthD3 / 3)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "start")
    .text("Valence Band");

    

  d3.selectAll('#d3-viz6-0').append("text")
    .attr('id', 'sigmastar-text')
    .attr("y", heightD3 / 2 - 15 - 20-20-50)
    .attr("x", 2 * widthD3 / 3)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "start")
    .text("Conduction Band");

    d3.selectAll('#d3-viz6-0').append("text")
    .attr('id', 'sigmastar-text')
    .attr("y", heightD3-70 )
    .attr("x", 20)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "start")
    .text("-1.00");

    d3.selectAll('#d3-viz6-0').append("text")
    .attr('id', 'sigmastar-text')
    .attr("y", heightD3-70-90)
    .attr("x", 20)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "start")
    .text("-0.56");

    d3.selectAll('#d3-viz6-0').append("text")
    .attr('id', 'sigmastar-text')
    .attr("y", heightD3-70-90-225-90 )
    .attr("x", 23)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "start")
    .text("1.00");

    d3.selectAll('#d3-viz6-0').append("text")
    .attr('id', 'sigmastar-text')
    .attr("y", heightD3-70-90-225)
    .attr("x", 23)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "start")
    .text("0.56");

  var areaPath_1 = svg_0.append('path')
    .attr("fill-opacity","0.1")
    .style("fill","#F1E77D");

  let ryScale = d3.scaleLinear()
    .domain([-100, 100])
    .range([heightD3 / 2 + 20, heightD3 / 2 + 160]);

  let rxScale = d3.scaleLinear()
    .domain([0, 1])
    .range([90, widthD3 - 90]);

  let numLines = 100;

  // let yScalePlus = d3.scaleLinear()
  //   .domain([(numLines + 2) * 10, 10])
  //   .range([heightD3 - 60, heightD3 / 2 + 15]);

  // let yScaleMinus = d3.scaleLinear()
  //   .domain([-10, -(numLines + 2) * 10])
  //   .range([heightD3 / 2 - 45, 30]);

    

  for (let i = 0; i < band_state_up.length; i++) {
    d3.select('#d3-viz6-0')
      .append('line')
      .attr('id', 'sigma')
      .attr('stroke', '#EA9FA2')
      .attr('stroke-width', 0.02)
      .attr('x1', 58)
      .attr('y1', yScale(100*band_state_up[i]))
      .attr('x2', widthD3 - 58)
      .attr('y2', yScale(100*band_state_up[i]));
  }
      for (let i = 0; i < band_state_down.length; i++) {
    d3.select('#d3-viz6-0')
      .append('line')
      .attr('id', 'sigmastar')
      .attr('stroke', '#EA9FA2')
      .attr('stroke-width', 0.02)
      .attr('x1', 58)
      .attr('y1', yScale(100*band_state_down[i]))
      .attr('x2', widthD3 - 58)
      .attr('y2', yScale(100*band_state_down[i]));
  }

  $('#zoom').anythingZoomer({
    smallArea: 'small',
    clone: true,
    edge: 0,
    switchEvent: 'none'
  });


}

reset_d3bands_0 = () => {
  svg_0.selectAll("*").remove();
}

d3bands_0_update = () => {


    // svg_0.select('#circle_1')
    // .attr("cx", xScale(33))
    // .attr("cy", yScale(y_cordi))
    // .attr("r", 5)
    // .attr('opacity', opacity_circle)
    // .style("fill", "#FEF6B6");

    // //"rgb(220, 38, 127)"

    // svg_0.select('#circle_2')
    // .attr("cx", xScale(66))
    // .attr("cy", yScale(y_cordi))
    // .attr("r", 5)
    // .attr('opacity', opacity_circle)
    // .style("fill", "#FEF6B6");

    svg_0.select('#text_fermi')
    .attr("y", yScale(y_cordi) )
      .attr("x",  widthD3-20 )
      .attr("dy", "1em")
      .attr('class', 'label')
      .style("text-anchor", "start")
      .text("# of states: "+ num_Line_text );

    svg_0.select('#line_1')
    .attr('stroke', '#FEF6B6')
    .attr('stroke-width', 3)
    .attr('x1', 58)
    .attr('y1', yScale(y_cordi))
    .attr('x2', widthD3 - 58)
    .attr('y2', yScale(y_cordi));

    var n = "-20"
		var s = "eV"
					// var p = (Math.round((-0.009863*(y+20)+2.552329)*100)/100).toString()+ "+/-10"
		var p = (Math.round(y_cordi)/100).toString()
		//base.edit.html( p.sub()+n.sup() +s.sub());

  
      svg_0.select('#text_1')
      .attr("y", yScale(y_cordi) )
      .attr("x",  widthD3-20 )
      .attr("dy", "1em")
      .attr('class', 'label')
      .style("text-anchor", "start")
      .text("# of states: "+ num_Line_text );

      svg_0.select('#text_2')
      .attr("y", yScale(y_cordi+30) )
      .attr("x",  xScale(x_cordi-10) )
      .attr("dy", "1em")
      .attr('class', 'label')
      .style("text-anchor", "start")
      .text(p+"eV");

     

      svg_0.select('#text_3')
      .attr("y", yScale(y_cordi-30) )
      .attr("x",  xScale(x_cordi-10) )
      .attr("dy", "1em")
      .attr('class', 'label')
      .style("text-anchor", "start")
      .text(p+"eV");


      svg_0.select('#text_4')
      .attr("y", yScale(y_cordi+30+3+1) )
      .attr("x",  xScale(x_cordi-10+22+5-2) )
      .attr("dy", "1em")
      .style("font-size", "10px")
      .attr('class', 'label')
      .style("text-anchor", "start")
      .text("-20");

      svg_0.select('#text_5')
      .attr("y", yScale(y_cordi+30) )
      .attr("x",  xScale(x_cordi-10+15+1) )
      .attr("dy", "1em")
      .attr('class', 'label')
      .style("text-anchor", "start")
      .text("+ " );


      svg_0.select('#text_6')
      .attr("y", yScale(y_cordi+30) )
      .attr("x",  xScale(x_cordi-10+15+1+5) )
      .attr("dy", "1em")
      .attr('class', 'label')
      .style("text-anchor", "start")
      .text("10 "+ " "+ "   eV");
      

    //   let num_Line = Math.round(88*Math.pow(i/100-0.56,1/2))
  
    // let num_Line_n = 50*Math.pow(-0.56+m/100,1/2)

  

}



/////scene 2

d3bands_0_5 = () => {


  heightD3 = 500,
    widthD3 = 350;

  svg_0_5= d3.selectAll('#d3-viz6-0_5')
    // .attr('height', heightD3)
    // .attr('width', widthD3)
    // .attr('viewBox', `0 0 ${widthD3} ${heightD3}`)
    .attr('transform', 'translate(-60,0)')
    .append('g')
    .attr('id', 'zoom-out');
    // .style("stroke", "white")
    // .style("fill", "none")
    // .attr("stroke-width", 0.8)
    // .attr('opacity', 1);

  svg_0_5.append('rect')
    .attr('width', '100%')
    .attr('height', '100%')
    .attr('fill', '#121212');

    svg_0_5.append('circle')
    .attr('id', 'circle_1')
    .attr('stroke', '#EA9FA2');

    svg_0_5.append('circle')
    .attr('id', 'circle_2')
    .attr('stroke', '#EA9FA2');

    svg_0_5.append('line')
    .attr('id', 'line_1')
    .attr('stroke', '#EA9FA2');

    svg_0_5.append('text')
    .attr('id', 'text_1');

    svg_0_5.append('text')
    .attr('id', 'text_2');

    svg_0_5.append('text')
    .attr('id', 'text_3');

    svg_0_5.append('text')
    .attr('id', 'text_4');

    svg_0_5.append('text')
    .attr('id', 'text_5');

    svg_0_5.append('text')
    .attr('id', 'text_6');

    svg_0_5.append('text')
    .attr('id', 'text_fermi');
   

  yScale = d3.scaleLinear()
    .domain([-100, 100])
    .range([heightD3 - 60, 30]);

  xScale = d3.scaleLinear()
    .domain([0, 100])
    .range([30, widthD3 - 30]);

  let xAxis = d3.axisBottom()
    .scale(xScale)
    .tickValues([]);

  let yAxis = d3.axisLeft()
    .scale(yScale)
    .tickValues([-100,-56,0,56,100]);

  

  d3.selectAll('#d3-viz6-0_5').append('g')
    .call(yAxis)
    .attr('transform', `translate(58,0)`)
    .attr('class', 'axis');

    svg_0.append('path')
    .attr('id', 'area');

  d3.selectAll('#d3-viz6-0_5').append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 30)
    .attr("x", 0 - (heightD3 / 2))
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Energy (eV)");

  

  d3.selectAll('#d3-viz6-0_5').append("text")
    .attr('id', 'sigma-text')
    .attr("y", heightD3 / 2 +5+5+50)
    .attr("x", 2 * widthD3 / 3)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "start")
    .text("Valence Band");

    

  d3.selectAll('#d3-viz6-0_5').append("text")
    .attr('id', 'sigmastar-text')
    .attr("y", heightD3 / 2 - 15 - 20-20-50)
    .attr("x", 2 * widthD3 / 3)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "start")
    .text("Conduction Band");

    d3.selectAll('#d3-viz6-0_5').append("text")
    .attr('id', 'sigmastar-text')
    .attr("y", heightD3-70 )
    .attr("x", 20)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "start")
    .text("-1.00");

    d3.selectAll('#d3-viz6-0_5').append("text")
    .attr('id', 'sigmastar-text')
    .attr("y", heightD3-70-90)
    .attr("x", 20)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "start")
    .text("-0.56");

    d3.selectAll('#d3-viz6-0_5').append("text")
    .attr('id', 'sigmastar-text')
    .attr("y", heightD3-70-90-225-90 )
    .attr("x", 23)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "start")
    .text("1.00");

    d3.selectAll('#d3-viz6-0_5').append("text")
    .attr('id', 'sigmastar-text')
    .attr("y", heightD3-70-90-225)
    .attr("x", 23)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "start")
    .text("0.56");

  var areaPath_1 = svg_0_5.append('path')
    .attr("fill-opacity","0.1")
    .style("fill","#F1E77D");

  let ryScale = d3.scaleLinear()
    .domain([-100, 100])
    .range([heightD3 / 2 + 20, heightD3 / 2 + 160]);

  let rxScale = d3.scaleLinear()
    .domain([0, 1])
    .range([90, widthD3 - 90]);

  let numLines = 100;

  // let yScalePlus = d3.scaleLinear()
  //   .domain([(numLines + 2) * 10, 10])
  //   .range([heightD3 - 60, heightD3 / 2 + 15]);

  // let yScaleMinus = d3.scaleLinear()
  //   .domain([-10, -(numLines + 2) * 10])
  //   .range([heightD3 / 2 - 45, 30]);

    

  for (let i = 0; i < band_state_up.length; i++) {
    d3.select('#d3-viz6-0_5')
      .append('line')
      .attr('id', 'sigma')
      .attr('stroke', '#EA9FA2')
      .attr('stroke-width', 0.02)
      .attr('x1', 58)
      .attr('y1', yScale(100*band_state_up[i]))
      .attr('x2', widthD3 - 58)
      .attr('y2', yScale(100*band_state_up[i]));
  }
      for (let i = 0; i < band_state_down.length; i++) {
    d3.select('#d3-viz6-0_5')
      .append('line')
      .attr('id', 'sigmastar')
      .attr('stroke', '#EA9FA2')
      .attr('stroke-width', 0.02)
      .attr('x1', 58)
      .attr('y1', yScale(100*band_state_down[i]))
      .attr('x2', widthD3 - 58)
      .attr('y2', yScale(100*band_state_down[i]));
  }

  $('#zoom05').anythingZoomer({
    smallArea: 'small',
    clone: true,
    edge: 0,
    switchEvent: 'none'
  });


}

reset_d3bands_0_5 = () => {
  svg_0_5.selectAll("*").remove();
}

d3bands_0_update_5 = () => {


    // svg_0.select('#circle_1')
    // .attr("cx", xScale(33))
    // .attr("cy", yScale(y_cordi))
    // .attr("r", 5)
    // .attr('opacity', opacity_circle)
    // .style("fill", "#FEF6B6");

    // //"rgb(220, 38, 127)"

    // svg_0.select('#circle_2')
    // .attr("cx", xScale(66))
    // .attr("cy", yScale(y_cordi))
    // .attr("r", 5)
    // .attr('opacity', opacity_circle)
    // .style("fill", "#FEF6B6");

    svg_0_5.select('#text_fermi')
    .attr("y", yScale(y_cordi) )
      .attr("x",  widthD3-20 )
      .attr("dy", "1em")
      .attr('class', 'label')
      .style("text-anchor", "start")
      .text("# of states: "+ num_Line_text );

    svg_0_5.select('#line_1')
    .attr('stroke', '#FEF6B6')
    .attr('stroke-width', 3)
    .attr('x1', 58)
    .attr('y1', yScale(y_cordi))
    .attr('x2', widthD3 - 58)
    .attr('y2', yScale(y_cordi));

    var n = "-20"
		var s = "eV"
					// var p = (Math.round((-0.009863*(y+20)+2.552329)*100)/100).toString()+ "+/-10"
		var p = (Math.round(y_cordi)/100).toString()
		//base.edit.html( p.sub()+n.sup() +s.sub());

  
      svg_0_5.select('#text_1')
      .attr("y", yScale(y_cordi) )
      .attr("x",  widthD3-20 )
      .attr("dy", "1em")
      .attr('class', 'label')
      .style("text-anchor", "start")
      .text("# of states: "+ num_Line_text );

      svg_0_5.select('#text_2')
      .attr("y", yScale(y_cordi+30) )
      .attr("x",  xScale(x_cordi-10) )
      .attr("dy", "1em")
      .attr('class', 'label')
      .style("text-anchor", "start")
      .text(p+"eV");

     

      svg_0_5.select('#text_3')
      .attr("y", yScale(y_cordi-30) )
      .attr("x",  xScale(x_cordi-10) )
      .attr("dy", "1em")
      .attr('class', 'label')
      .style("text-anchor", "start")
      .text(p+"eV");


      svg_0_5.select('#text_4')
      .attr("y", yScale(y_cordi+30+3+1) )
      .attr("x",  xScale(x_cordi-10+22+5+10) )
      .attr("dy", "1em")
      .style("font-size", "10px")
      .attr('class', 'label')
      .style("text-anchor", "start")
      .text("-20");

      svg_0_5.select('#text_5')
      .attr("y", yScale(y_cordi+30) )
      .attr("x",  xScale(x_cordi-10+15+1) )
      .attr("dy", "1em")
      .attr('class', 'label')
      .style("text-anchor", "start")
      .text("+ " + Math.round(num_multi*100)/100 );


      svg_0_5.select('#text_6')
      .attr("y", yScale(y_cordi+30) )
      .attr("x",  xScale(x_cordi-10+15+1+13) )
      .attr("dy", "1em")
      .attr('class', 'label')
      .style("text-anchor", "start")
      .text("* 10 "+ " "+ "     eV");
      

    //   let num_Line = Math.round(88*Math.pow(i/100-0.56,1/2))
  
    // let num_Line_n = 50*Math.pow(-0.56+m/100,1/2)

  

}

//negative 
d3bands_3 = () => {
  heightD3 = 500,
    widthD3 = 350;

  svg_3= d3.selectAll('#d3-viz6-3')
    // .attr('height', heightD3)
    // .attr('width', widthD3)
    // .attr('viewBox', `0 0 ${widthD3} ${heightD3}`)
    .attr('transform', 'translate(-60,0)')
    .append('g')
    .attr('id', 'zoom-out')
    .attr('opacity', 1);

  svg_3.append('rect')
    .attr('width', '100%')
    .attr('height', '100%')
    .attr('fill', '#121212');

  yScale = d3.scaleLinear()
    .domain([-100, 100])
    .range([heightD3 - 60, 30]);

  xScale = d3.scaleLinear()
    .domain([0, 100])
    .range([30, widthD3 - 30]);

  let xAxis = d3.axisBottom()
    .scale(xScale)
    .tickValues([]);

  let yAxis = d3.axisLeft()
    .scale(yScale)
    .tickValues([]);

  d3.selectAll('#d3-viz6-3').append('g')
    .call(yAxis)
    .attr('transform', `translate(58,0)`)
    .attr('class', 'axis');

    svg_3.append('path')
    .attr('id', 'area');

    if (settings.kk == true){

    d3.selectAll('#d3-viz6-3').append("text")
    // .attr("transform", "rotate(-90)")
    .attr("y", 8*heightD3/9)
    .attr("x", widthD3/2)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Probability");

    d3.selectAll('#d3-viz6-3').append("text")
    .attr('id', 'sigmastar-text')
    .attr("y", heightD3-70+15 )
    .attr("x", 60)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "start")
    .text("0");

    d3.selectAll('#d3-viz6-3').append("text")
    .attr('id', 'sigmastar-text')
    .attr("y", heightD3-70+15 )
    .attr("x", widthD3-65)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "start")
    .text("1");
    }

  d3.selectAll('#d3-viz6-3').append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 30)
    .attr("x", 0 - (heightD3 / 2))
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Energy(eV)");


    d3.select('#d3-viz6-3')
    .append('line')
    .attr('id', 'sigma2')
    .attr('stroke', '#FEF6B6')
    .attr('stroke-width', 2)
    .style("stroke-dasharray", ("8, 8"))
    .attr('x1', 58)
    .attr('y1', yScale(100*constant_fermi_negative))
    .attr('x2', widthD3 - 58)
    .attr('y2', yScale(100*constant_fermi_negative));

    d3.selectAll('#d3-viz6-3').append("text")
    .attr('id', 'sigma2-text')
    .style('fill', '#FEF6B6')
    .attr("y", yScale(100*constant_fermi_negative+10))
    .attr("x", 1 * widthD3 / 5)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "start")
    .text("fermi energy = "+Math.round(constant_fermi_negative*1000)/1000+ " eV");

    d3.selectAll('#d3-viz6-3').append("text")
    .attr('id', 'sigma-text')
    .attr("y", heightD3 / 2 +5+5+50)
    .attr("x", 2 * widthD3 / 3)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "start")
    .text("Valence Band");

    

  d3.selectAll('#d3-viz6-3').append("text")
    .attr('id', 'sigmastar-text')
    .attr("y", heightD3 / 2 - 15 - 20-20-50)
    .attr("x", 2 * widthD3 / 3)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "start")
    .text("Conduction Band");

    d3.selectAll('#d3-viz6-3').append("text")
    .attr('id', 'sigmastar-text')
    .attr("y", heightD3-70 )
    .attr("x", 20)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "start")
    .text("-1.00");

    d3.selectAll('#d3-viz6-3').append("text")
    .attr('id', 'sigmastar-text')
    .attr("y", heightD3-70-90)
    .attr("x", 20)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "start")
    .text("-0.56");

    svg_3.append('text')
    .attr('id', 'text_1');

    svg_3.append('text')
    .attr('id', 'text_2_2');

    svg_3.append('text')
    .attr('id', 'text_3');

    svg_3.append('text')
    .attr('id', 'line_1');

    svg_3.append('text')
    .attr('id', 'text_2');

    svg_3.append('text')
    .attr('id', 'text_2_e');

    // svg_1.append('text')
    // .attr('id', 'text_3');

    svg_3.append('text')
    .attr('id', 'text_4');

    svg_3.append('text')
    .attr('id', 'text_5');

    svg_3.append('text')
    .attr('id', 'text_6');

    svg_3.append('text')
    .attr('id', 'text_fermi');

    d3.selectAll('#d3-viz6-3').append("text")
    .attr('id', 'sigmastar-text')
    .attr("y", heightD3-70-90-225-90 )
    .attr("x", 23)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "start")
    .text("1.00");

    d3.selectAll('#d3-viz6-3').append("text")
    .attr('id', 'sigmastar-text')
    .attr("y", heightD3-70-90-225)
    .attr("x", 23)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "start")
    .text("0.56");


  var areaPath_1 = svg_3.append('path')
    .attr("fill-opacity","0.1")
    .style("fill","#F1E77D");

  let ryScale = d3.scaleLinear()
    .domain([0, 1])
    .range([heightD3 / 2 + 20, heightD3 / 2 + 160]);

  let rxScale = d3.scaleLinear()
    .domain([0, 1])
    .range([90, widthD3 - 90]);

  let numLines = 100;

  let yScalePlus = d3.scaleLinear()
    .domain([(numLines + 2) * 10, 10])
    .range([heightD3 - 60, heightD3 / 2 + 15]);

  let yScaleMinus = d3.scaleLinear()
    .domain([-10, -(numLines + 2) * 10])
    .range([heightD3 / 2 - 45, 30]);


    for (let i = 0; i < band_state_up.length; i++) {
      d3.select('#d3-viz6-3')
        .append('line')
        .attr('id', 'sigma')
        .attr('stroke', '#EA9FA2')
        .attr('stroke-width', 0.02)
        .attr('x1', 58)
        .attr('y1', yScale(100*band_state_up[i]))
        .attr('x2', widthD3 - 58)
        .attr('y2', yScale(100*band_state_up[i]));
    }
        for (let i = 0; i < band_state_down.length; i++) {
      d3.select('#d3-viz6-3')
        .append('line')
        .attr('id', 'sigmastar')
        .attr('stroke', '#EA9FA2')
        .attr('stroke-width', 0.02)
        .attr('x1', 58)
        .attr('y1', yScale(100*band_state_down[i]))
        .attr('x2', widthD3 - 58)
        .attr('y2', yScale(100*band_state_down[i]));
    }
    

  $('#zoom3').anythingZoomer({
    smallArea: 'small',
    clone: true,
    edge: 0,
    switchEvent: 'none'
  });

  function e_probability()  {
    for (let i = 0; i < 810; i+=1) {
      dataset_13[i] = {
        x: i/10+9.2,
        y: Math.round(350*((Math.log((1/((i+1)/10/82))-1))*0.026*constant_temperature/300))+100*constant_fermi_negative
        // y: Math.round(100*(constant_temperature*(Math.log((1/((i+10)/100))-1))+constant_fermi))
  
        //scne 3
      };
    }
  
  
  
  
  
    d3.selectAll('#d3-viz6-3').append("path")
      .datum(dataset_13)
      .attr("fill", "#cce5df")
      .attr("stroke", "#none")
      .attr('opacity', 0.2)
      .attr("d", d3.area()
        // .curve(d3.curveMonotoneX)
        .x(function(d) { return xScale(d.x) })
        .y0(yScale(-100))
        .y1(function(d) { return yScale(d.y) })
        )
  
  }
  
  if (settings.kk == true) {
    e_probability()
  }
   


}

d3bands_update_3 = () => {

 
  if (settings.kk == false){

    svg_0.select('#text_fermi')
    .attr("y", yScale(y_cordi) )
      .attr("x",  widthD3-20 )
      .attr("dy", "1em")
      .attr('class', 'label')
      .style("text-anchor", "start")
      .text("# of states: "+ num_Line_text );

    svg_0.select('#line_1')
    .attr('stroke', '#FEF6B6')
    .attr('stroke-width', 3)
    .attr('x1', 58)
    .attr('y1', yScale(y_cordi))
    .attr('x2', widthD3 - 58)
    .attr('y2', yScale(y_cordi));

    var n = "-20"
		var s = "eV"
					// var p = (Math.round((-0.009863*(y+20)+2.552329)*100)/100).toString()+ "+/-10"
		var p = (Math.round(y_cordi)/100).toString()
		//base.edit.html( p.sub()+n.sup() +s.sub());

  
      svg_3.select('#text_1')
      .attr("y", yScale(y_cordi) )
      .attr("x",  widthD3-20 )
      .attr("dy", "1em")
      .attr('class', 'label')
      .style("text-anchor", "start")
      .text("# of states: "+ num_Line_text );

      svg_3.select('#text_2_2')
      .attr("y", yScale(y_cordi+30) )
      .attr("x",  xScale(x_cordi-10) )
      .attr("dy", "1em")
      .attr('class', 'label')
      .style("text-anchor", "start")
      .text(p+"eV");

     

      svg_3.select('#text_3')
      .attr("y", yScale(y_cordi-30) )
      .attr("x",  xScale(x_cordi-10) )
      .attr("dy", "1em")
      .attr('class', 'label')
      .style("text-anchor", "start")
      .text(p+"eV");


      svg_3.select('#text_4')
      .attr("y", yScale(y_cordi+30+3+1) )
      .attr("x",  xScale(x_cordi-10+22+5+10) )
      .attr("dy", "1em")
      .style("font-size", "10px")
      .attr('class', 'label')
      .style("text-anchor", "start")
      .text("-20");

      svg_3.select('#text_5')
      .attr("y", yScale(y_cordi+30) )
      .attr("x",  xScale(x_cordi-10+15+1) )
      .attr("dy", "1em")
      .attr('class', 'label')
      .style("text-anchor", "start")
      .text("+ " + Math.round(num_multi*100)/100 );


      svg_3.select('#text_6')
      .attr("y", yScale(y_cordi+30) )
      .attr("x",  xScale(x_cordi-10+15+1+13) )
      .attr("dy", "1em")
      .attr('class', 'label')
      .style("text-anchor", "start")
      .text("* 10 "+ " "+ "     eV");

  
      svg_3.select('#text_1')
      .attr("y", yScale(y_cordi) )
      .attr("x",  widthD3-20 )
      .attr("dy", "1em")
      .attr('class', 'label')
      .style("text-anchor", "start")
      .text("# of states: "+ num_Line_text );
  
      if (y_cordi>0){
        svg_3.select('#text_2')
      .attr("y", yScale(y_cordi)+20 )
      .attr("x",  widthD3-20 )
      .attr("dy", "1em")
      .attr('class', 'label')
      .style("text-anchor", "start")
      .text("# of electrons: "+ num_e.toExponential(2) );

      svg_3.select('#text_2_e')
      .attr("y", yScale(y_cordi)+20 )
      .attr("x",  widthD3-20 )
      .attr("dy", "1em")
      .attr('class', 'label')
      .style("text-anchor", "start")
      .text("" );
  
      // console.log(num_e)
  
      } else if (y_cordi<0){
        svg_3.select('#text_2_e')
        .attr("y", yScale(y_cordi)+20 )
        .attr("x",  widthD3-20 )
        .attr("dy", "1em")
        .attr('class', 'label')
        .style("text-anchor", "start")
        .text("# of electrons: "+ Math.round(num_e)  );

        svg_3.select('#text_2')
        .attr("y", yScale(y_cordi)+40 )
        .attr("x",  widthD3-20 )
        .attr("dy", "1em")
        .attr('class', 'label')
        .style("text-anchor", "start")
        .text("# of holes: "+ num_h.toExponential(2)  );

        
    
      }
  
    }
  
  }


reset_d3bands_3 = () => {
  svg_3.selectAll("*").remove();
}



//final scene 

d3bands_3_1 = () => {
  heightD3 = 500,
    widthD3 = 350;

  svg_3_1= d3.selectAll('#d3-viz6-3-1')
    // .attr('height', heightD3)
    // .attr('width', widthD3)
    // .attr('viewBox', `0 0 ${widthD3} ${heightD3}`)
    .attr('transform', 'translate(-60,0)')
    .append('g')
    .attr('id', 'zoom-out')
    .attr('opacity', 1);

  svg_3_1.append('rect')
    .attr('width', '100%')
    .attr('height', '100%')
    .attr('fill', '#121212');

  yScale = d3.scaleLinear()
    .domain([-100, 100])
    .range([heightD3 - 60, 30]);

  xScale = d3.scaleLinear()
    .domain([0, 100])
    .range([30, widthD3 - 30]);

  let xAxis = d3.axisBottom()
    .scale(xScale)
    .tickValues([]);

  let yAxis = d3.axisLeft()
    .scale(yScale)
    .tickValues([]);

  d3.selectAll('#d3-viz6-3-1').append('g')
    .call(yAxis)
    .attr('transform', `translate(58,0)`)
    .attr('class', 'axis');

    svg_3.append('path')
    .attr('id', 'area');

    if (settings.kk == true){

    d3.selectAll('#d3-viz6-3-1').append("text")
    // .attr("transform", "rotate(-90)")
    .attr("y", 8*heightD3/9)
    .attr("x", widthD3/2)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Probability");

    d3.selectAll('#d3-viz6-3-1').append("text")
    .attr('id', 'sigmastar-text')
    .attr("y", heightD3-70+15 )
    .attr("x", 60)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "start")
    .text("0");

    d3.selectAll('#d3-viz6-3-1').append("text")
    .attr('id', 'sigmastar-text')
    .attr("y", heightD3-70+15 )
    .attr("x", widthD3-65)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "start")
    .text("1");
    }

  d3.selectAll('#d3-viz6-3-1').append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 30)
    .attr("x", 0 - (heightD3 / 2))
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Energy(eV)");


    d3.select('#d3-viz6-3-1')
    .append('line')
    .attr('id', 'sigma2')
    .attr('stroke', '#FEF6B6')
    .attr('stroke-width', 2)
    .style("stroke-dasharray", ("8, 8"))
    .attr('x1', 58)
    .attr('y1', yScale(100*constant_fermi_positive))
    .attr('x2', widthD3 - 58)
    .attr('y2', yScale(100*constant_fermi_positive));

    d3.selectAll('#d3-viz6-3-1').append("text")
    .attr('id', 'sigma2-text')
    .style('fill', '#FEF6B6')
    .attr("y", yScale(100*constant_fermi_positive+10))
    .attr("x", 1 * widthD3 / 5)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "start")
    .text("fermi energy = "+Math.round(constant_fermi_positive*1000)/1000+ " eV");

    d3.selectAll('#d3-viz6-3-1').append("text")
    .attr('id', 'sigma-text')
    .attr("y", heightD3 / 2 +5+5+50)
    .attr("x", 2 * widthD3 / 3)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "start")
    .text("Valence Band");

    

  d3.selectAll('#d3-viz6-3-1').append("text")
    .attr('id', 'sigmastar-text')
    .attr("y", heightD3 / 2 - 15 - 20-20-50)
    .attr("x", 2 * widthD3 / 3)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "start")
    .text("Conduction Band");

    d3.selectAll('#d3-viz6-3-1').append("text")
    .attr('id', 'sigmastar-text')
    .attr("y", heightD3-70 )
    .attr("x", 20)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "start")
    .text("-1.00");

    d3.selectAll('#d3-viz6-3-1').append("text")
    .attr('id', 'sigmastar-text')
    .attr("y", heightD3-70-90)
    .attr("x", 20)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "start")
    .text("-0.56");

    svg_3_1.append('text')
    .attr('id', 'text_1');

    svg_3_1.append('text')
    .attr('id', 'text_2_2');

    svg_3_1.append('text')
    .attr('id', 'text_3');

    svg_3_1.append('text')
    .attr('id', 'line_1');

    svg_3_1.append('text')
    .attr('id', 'text_2');

    svg_3_1.append('text')
    .attr('id', 'text_2_e');

    // svg_1.append('text')
    // .attr('id', 'text_3');

    svg_3_1.append('text')
    .attr('id', 'text_4');

    svg_3_1.append('text')
    .attr('id', 'text_5');

    svg_3_1.append('text')
    .attr('id', 'text_6');

    svg_3_1.append('text')
    .attr('id', 'text_fermi');

    d3.selectAll('#d3-viz6-3-1').append("text")
    .attr('id', 'sigmastar-text')
    .attr("y", heightD3-70-90-225-90 )
    .attr("x", 23)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "start")
    .text("1.00");

    d3.selectAll('#d3-viz6-3-1').append("text")
    .attr('id', 'sigmastar-text')
    .attr("y", heightD3-70-90-225)
    .attr("x", 23)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "start")
    .text("0.56");


  var areaPath_1 = svg_3_1.append('path')
    .attr("fill-opacity","0.1")
    .style("fill","#F1E77D");

  let ryScale = d3.scaleLinear()
    .domain([0, 1])
    .range([heightD3 / 2 + 20, heightD3 / 2 + 160]);

  let rxScale = d3.scaleLinear()
    .domain([0, 1])
    .range([90, widthD3 - 90]);

  let numLines = 100;

  let yScalePlus = d3.scaleLinear()
    .domain([(numLines + 2) * 10, 10])
    .range([heightD3 - 60, heightD3 / 2 + 15]);

  let yScaleMinus = d3.scaleLinear()
    .domain([-10, -(numLines + 2) * 10])
    .range([heightD3 / 2 - 45, 30]);


    for (let i = 0; i < band_state_up.length; i++) {
      d3.select('#d3-viz6-3-1')
        .append('line')
        .attr('id', 'sigma')
        .attr('stroke', '#EA9FA2')
        .attr('stroke-width', 0.02)
        .attr('x1', 58)
        .attr('y1', yScale(100*band_state_up[i]))
        .attr('x2', widthD3 - 58)
        .attr('y2', yScale(100*band_state_up[i]));
    }
        for (let i = 0; i < band_state_down.length; i++) {
      d3.select('#d3-viz6-3-1')
        .append('line')
        .attr('id', 'sigmastar')
        .attr('stroke', '#EA9FA2')
        .attr('stroke-width', 0.02)
        .attr('x1', 58)
        .attr('y1', yScale(100*band_state_down[i]))
        .attr('x2', widthD3 - 58)
        .attr('y2', yScale(100*band_state_down[i]));
    }
    

  $('#zoom3_1').anythingZoomer({
    smallArea: 'small',
    clone: true,
    edge: 0,
    switchEvent: 'none'
  });

  function e_probability()  {
    for (let i = 0; i < 810; i+=1) {
      dataset_13[i] = {
        x: i/10+9.2,
        y: Math.round(350*((Math.log((1/((i+1)/10/82))-1))*0.026*constant_temperature/300))+100*constant_fermi_final
        // y: Math.round(100*(constant_temperature*(Math.log((1/((i+10)/100))-1))+constant_fermi))
  
      };
    }
  
  
  
  
  
    d3.selectAll('#d3-viz6-3-1').append("path")
      .datum(dataset_13)
      .attr("fill", "#cce5df")
      .attr("stroke", "#none")
      .attr('opacity', 0.2)
      .attr("d", d3.area()
        // .curve(d3.curveMonotoneX)
        .x(function(d) { return xScale(d.x) })
        .y0(yScale(-100))
        .y1(function(d) { return yScale(d.y) })
        )
  
  }
  
  if (settings.kk == true) {
    e_probability()
  }
   


}

d3bands_update_3_1 = () => {

 
  if (settings.kk == false){


    var n = "-20"
		var s = "eV"
					// var p = (Math.round((-0.009863*(y+20)+2.552329)*100)/100).toString()+ "+/-10"
		var p = (Math.round(y_cordi)/100).toString()
		//base.edit.html( p.sub()+n.sup() +s.sub());

  
      svg_3_1.select('#text_1')
      .attr("y", yScale(y_cordi) )
      .attr("x",  widthD3-20 )
      .attr("dy", "1em")
      .attr('class', 'label')
      .style("text-anchor", "start")
      .text("# of states: "+ num_Line_text );

      svg_3_1.select('#text_2_2')
      .attr("y", yScale(y_cordi+30) )
      .attr("x",  xScale(x_cordi-10) )
      .attr("dy", "1em")
      .attr('class', 'label')
      .style("text-anchor", "start")
      .text(p+"eV");

     

      svg_3_1.select('#text_3')
      .attr("y", yScale(y_cordi-30) )
      .attr("x",  xScale(x_cordi-10) )
      .attr("dy", "1em")
      .attr('class', 'label')
      .style("text-anchor", "start")
      .text(p+"eV");


      svg_3_1.select('#text_4')
      .attr("y", yScale(y_cordi+30+3+1) )
      .attr("x",  xScale(x_cordi-10+22+5+10) )
      .attr("dy", "1em")
      .style("font-size", "10px")
      .attr('class', 'label')
      .style("text-anchor", "start")
      .text("-20");

      svg_3_1.select('#text_5')
      .attr("y", yScale(y_cordi+30) )
      .attr("x",  xScale(x_cordi-10+15+1) )
      .attr("dy", "1em")
      .attr('class', 'label')
      .style("text-anchor", "start")
      .text("+ " + Math.round(num_multi*100)/100 );


      svg_3_1.select('#text_6')
      .attr("y", yScale(y_cordi+30) )
      .attr("x",  xScale(x_cordi-10+15+1+13) )
      .attr("dy", "1em")
      .attr('class', 'label')
      .style("text-anchor", "start")
      .text("* 10 "+ " "+ "     eV");

  
      svg_3_1.select('#text_1')
      .attr("y", yScale(y_cordi) )
      .attr("x",  widthD3-20 )
      .attr("dy", "1em")
      .attr('class', 'label')
      .style("text-anchor", "start")
      .text("# of states: "+ num_Line_text );
  
      if (y_cordi>0){
        svg_3_1.select('#text_2')
      .attr("y", yScale(y_cordi)+20 )
      .attr("x",  widthD3-20 )
      .attr("dy", "1em")
      .attr('class', 'label')
      .style("text-anchor", "start")
      .text("# of electrons: "+ num_e.toExponential(2) );

      svg_3_1.select('#text_2_e')
      .attr("y", yScale(y_cordi)+20 )
      .attr("x",  widthD3-20 )
      .attr("dy", "1em")
      .attr('class', 'label')
      .style("text-anchor", "start")
      .text(""  );
  
      // console.log(num_e)
  
      } else if (y_cordi<0){
        svg_3_1.select('#text_2_e')
        .attr("y", yScale(y_cordi)+20 )
        .attr("x",  widthD3-20 )
        .attr("dy", "1em")
        .attr('class', 'label')
        .style("text-anchor", "start")
        .text("# of electrons: "+ Math.round(num_e) );

        svg_3_1.select('#text_2')
        .attr("y", yScale(y_cordi)+40 )
        .attr("x",  widthD3-20 )
        .attr("dy", "1em")
        .attr('class', 'label')
        .style("text-anchor", "start")
        .text("# of holes: "+ num_h.toExponential(2)  );

        
    
      }
  
    }
  
  }


reset_d3bands_3_1 = () => {
  svg_3_1.selectAll("*").remove();
}