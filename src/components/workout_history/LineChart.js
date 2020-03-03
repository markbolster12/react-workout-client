import * as d3 from 'd3';
import React from 'react';
import { useEffect } from 'react';


export function doChart(width, height, data, chart_name){
    data.map(d=>d.dateval = new Date(d.month + "/" + d.day + "/" + d.year));
    
    data.forEach(element => {
        const mapped_exercises = {};
        element.sets.forEach(set=> {
            if(set.exerciseName in mapped_exercises){
                mapped_exercises[set.exerciseName] += set.meters;
            }
            else{
                mapped_exercises[set.exerciseName] = set.meters;
            }
            
        })
        element["exercise_totals"] = mapped_exercises;
    });
    
    //console.log(mapped_exercises);
    console.log(data);

    const scale = d3.scaleTime()
    .domain(d3.extent(data, d=>d.dateval))
    .range([width/20, width-width/20]);

    const scale_y = d3.scaleLinear()
    .domain(d3.extent(data, d=>d.exercise_totals["Walking"]))
    .range([height-50, 0]);

    var y_axis = d3.axisLeft(scale_y);

    //d3.extent(data), wo => wo.weight

    var x_axis = d3.axisBottom(scale)
    .tickFormat(d3.timeFormat("%m/%d/%Y"));

    var svg_wrapper = d3.selectAll("#" + chart_name);
    svg_wrapper.select("svg").remove();
    var svg = svg_wrapper.append("svg").attr("width", width)
    .attr("height", height)
    .style("background-color", "black");

    /*svg.select("g")
    .join()
    .append("g")
    .attr("class", "xaxis")
    .attr("transform", `translate(0,${height-50})`)
    .call(x_axis);*/

    svg.append("g")
    .attr("class", "xaxis")
    .attr("transform", `translate(0,${height-50})`)
    .call(x_axis);

    svg.append("g")
    .attr("class", "yaxis")
    .attr("transform", `translate(${width/20},0)`)
    .call(y_axis);

    //Move the x axis text
    svg.selectAll(".xaxis text")  // select all the text elements for the xaxis
          .attr("transform", function(d) {
              return "translate(" + this.getBBox().height*-2 + "," + this.getBBox().height*2 + ")rotate(-45)";
        });


    var line = d3.line()
    .x(d => scale(d.dateval))
    .y(d => scale_y(d.exercise_totals["Walking"]));

    svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("d", line);
    
    
}

/* props should contain the width, height, and data*/

function LineChart(props){
    const width = 700;
    const height = 300;
    useEffect(()=>doChart(width, height, props.data, props.chart_name));


    return <div id={props.chart_name}></div>;
}

export default LineChart;