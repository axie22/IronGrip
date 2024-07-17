import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const ProgressGraph = ({ data }) => {
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
      .domain([0, d3.max(data, d => d.value)]).nice()
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
        .attr("y", d => y(d.value))
        .attr("height", d => y(0) - y(d.value))
        .attr("width", x.bandwidth())
        .attr("fill", "steelblue");

    svg.append("g").call(xAxis);
    svg.append("g").call(yAxis);
  }, [data]);

  return (
    <svg
      ref={svgRef}
      style={{
        width: 500,
        height: 300,
        marginRight: "0px",
        marginLeft: "0px",
      }}
    ></svg>
  );
};

export default ProgressGraph;
