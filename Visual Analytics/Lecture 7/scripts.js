/* Set the time format
  Ref: https://github.com/d3/d3-time-format */
const parseTime = d3.timeParse("%Y");

/* Load the dataset and formatting variables
  Ref: https://www.d3indepth.com/requests/ */
d3.csv("./data.csv", d => {
  return {
    geo: d.geo,
    country: d.country,
    year: +d.year,
    value: +d.value,
    date: parseTime(d.year)
  }
}).then(data => {
  // Print out the data on the console
  console.log(data);

  /* Data Manipulation in D3 
    Ref: https://observablehq.com/@d3/d3-extent?collection=@d3/d3-array */

  // Get the minimum and maximum of the percent pay gap
  console.log(d3.extent(data, d => d.value));

  // Filter the data from the year 2020
  let newData = data.filter(d => d.year === 2020);
  console.log(newData);

  // Sort the country by the percentage in the descending order
  newData = newData.sort((a, b) => d3.descending(a.value, b.value))
  console.log(newData);

  // Get the mean and median of gender gap percentage
  console.log(d3.mean(newData, d => d.value));
  console.log(d3.median(newData, d => d.value));

  // Move the color scale here to share with both charts


  // Plot the bar chart
  createBarChart(newData);

  // Plot the line chart
  //createLineChart(data, colors);
})

const createBarChart = (data) => {
  /* Set the dimensions and margins of the graph
    Ref: https://observablehq.com/@d3/margin-convention */
  const width = 900, height = 400;
  const margins = {top: 10, right: 30, bottom: 80, left: 20};

  /* Create the SVG container */
  const svg = d3.select("#bar")
    .append("svg")
      .attr("viewBox", [0, 0, width, height]);

  /* Define x-axis, y-axis, and color scales
    Ref: https://observablehq.com/@d3/introduction-to-d3s-scales */

  /* xScale: scaleBand() https://observablehq.com/@d3/d3-scaleband */
  const x = d3.scaleBand()
    .domain(data.map(d => d.country))
    .range([margins.left, width - margins.right])
    .padding(0.2);

  //position of France for example
  console.log(x("France"))
  
  /* yScale: scaleLinear() https://observablehq.com/@d3/d3-scalelinear */
  const y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.value)])
    .range([height - margins.bottom, margins.top]);

  /* Working with Color: https://observablehq.com/@d3/working-with-color 
    D3 color schemes: https://observablehq.com/@d3/color-schemes 
    d3-scale-chromatic: https://github.com/d3/d3-scale-chromatic */
  const countries = data.map(d => d.country);
  const colors = d3.scaleOrdinal()
    .domain(countries)
    .range(d3.quantize(d3.interpolateRainbow, countries.length));
  
  console.log(colors("France"))

  /* Create the bar elements and append to the SVG group
    Ref: https://observablehq.com/@d3/bar-chart */
  let bar = svg.append("g")
    .selectAll("rect")
    .data(data)
    .join("rect")
      .attr("x", d => x(d.country))
      .attr("y", d => y(d.value))
      .attr("height", d => y(0) - y(d.value))
      .attr("width", x.bandwidth())
      .attr("fill", d => colors(d.country));

  /* Add the tooltip when hover on the bar */
  bar.append("title").text(d => d.country);
  
  /* Create the x and y axes and append them to the chart
    Ref: https://www.d3indepth.com/axes/ and https://github.com/d3/d3-axis */
  const yAxis = d3.axisLeft(y);
  
  svg.append("g")
    .attr("transform", translate(${margins.left},0))
    .call(yAxis);

  const xAxis = d3.axisBottom(x);

  const xGroup = svg.append("g")
    .attr("transform", translate(0, ${height - margins.bottom}))
    .call(xAxis);

  xGroup.selectAll("text")
    .style("text-anchor", "end")
    .attr("dx", "-.8em")
    .attr("dy", ".15em")
    .attr("transform", "rotate(-65)");
}

const createLineChart = (data, colors) => {
  /* Set the dimensions and margins of the graph */
  const width = 900, height = 400;
  const margins = {top: 10, right: 100, bottom: 20, left: 20};

  /* Create the SVG container */
  

  /* Define x-axis, y-axis, and color scales */
  

  /* Construct a line generator
    Ref: https://observablehq.com/@d3/line-chart and https://github.com/d3/d3-shape */
  

  /* Group the data for each country
    Ref: https://observablehq.com/@d3/d3-group */
  

  /* Draw a line path for each country */
  

  /* Add the tooltip when hover on the line */
  

  /* Create the x and y axes and append them to the chart */
  

  /* Add text labels on the right of the chart */
  /*const data2020 = data.filter(data => data.year == 2020);
  svg.selectAll('text.label')
    .data(data2020)
    .join('text')
      .attr('x', width - margins.right + 5)
      .attr('y', d => yScale(d.value))
      .attr('dy', '0.35em')
      .style('font-family', 'sans-serif')
      .style('font-size', 12)
      .style('fill', d => colors(d.country))
    .text(d => d.country);*/
}
