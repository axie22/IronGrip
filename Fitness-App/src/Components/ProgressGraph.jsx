import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const ExerciseGraph = ({ exerciseName, data }) => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear previous drawings

    const width = 500;
    const height = 300;
    const margin = { top: 20, right: 30, bottom: 30, left: 40 };

    const x = d3.scaleBand()
      .domain(data.map(d => d.date))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.weight)]).nice()
      .range([height - margin.bottom, margin.top]);

    const xAxis = g => g
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x).tickFormat(d3.timeFormat("%b %d")))
      .attr("font-size", '12px');

    const yAxis = g => g
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y))
      .attr("font-size", '12px');

    svg.append("g")
      .selectAll("rect")
      .data(data)
      .enter().append("rect")
        .attr("x", d => x(d.date))
        .attr("y", d => y(d.weight))
        .attr("height", d => y(0) - y(d.weight))
        .attr("width", x.bandwidth())
        .attr("fill", "steelblue");

    svg.append("g").call(xAxis);
    svg.append("g").call(yAxis);
  }, [data]);

  return (
    <div>
      <h2>{exerciseName}</h2>
      <svg
        ref={svgRef}
        style={{
          width: 500,
          height: 300,
          marginRight: "0px",
          marginLeft: "0px",
        }}
      ></svg>
    </div>
  );
};

const ProgressGraph = ({ data }) => {
  // Transform the raw workout data into a format suitable for the graph
  const transformedData = data.flatMap(workout => 
    workout.exercises.map(exercise => ({
      date: new Date(workout.date),
      exerciseName: exercise.exerciseName,
      weight: Math.max(...exercise.rows.map(row => parseFloat(row.weight) || 0)) // Find the highest weight
    }))
  );

  // Group data by exercise name
  const groupedData = d3.groups(transformedData, d => d.exerciseName);

  return (
    <div>
      {groupedData.map(([exerciseName, exerciseData]) => (
        <ExerciseGraph key={exerciseName} exerciseName={exerciseName} data={exerciseData} />
      ))}
    </div>
  );
};

export default ProgressGraph;
