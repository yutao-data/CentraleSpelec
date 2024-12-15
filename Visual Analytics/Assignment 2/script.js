// Load the dataset and scale variables
d3.csv("./job_data.csv", d => ({
  Country: d.Country,
  JobTitle: d["Job Title"],
  JobCategory: d["Job Category"],
  AverageSalary: +d["Average Salary"],
  RedirectURL: d["Redirect URL"]
})).then(data => {
  console.log("Loaded Data:", data);

  const countries = Array.from(new Set(data.map(d => d.Country))).sort();

  const countryColor = d3.scaleOrdinal()
      .domain(countries)
      .range(d3.schemeCategory10);

  const countryButtons = d3.select("#countryButtons");

  countryButtons.selectAll("button")
      .data(["All", ...countries])
      .enter()
      .append("button")
      .text(d => d)
      .style("margin", "5px")
      .style("padding", "10px 20px")
      .style("border", "none")
      .style("background-color", d => d === "All" ? "grey" : countryColor(d))
      .style("color", "white")
      .style("cursor", "pointer")
      .on("click", function(event, selectedCountry) {
          d3.selectAll("button").style("opacity", 0.5);
          d3.select(this).style("opacity", 1);
          updateVisualization(selectedCountry);
      });

  createVisualization(data, countryColor);

  function updateVisualization(selectedCountry) {
      const filteredData = selectedCountry === "All" ? data : data.filter(d => d.Country === selectedCountry);
      createVisualization(filteredData, countryColor);
  }
});

function createVisualization(data, countryColor) {
  d3.select("#visualization").html("");

  const margin = { top: 20, right: 30, bottom: 80, left: 70 };
  const width = 900 - margin.left - margin.right;
  const height = 500 - margin.top - margin.bottom;

  const svg = d3.select("#visualization")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

  const groupedData = Array.from(
      d3.group(data, d => d.JobCategory),
      ([key, values]) => ({
          JobCategory: key,
          AverageSalary: d3.mean(values, d => d.AverageSalary)
      })
  );

  const xScale = d3.scaleBand()
      .domain(groupedData.map(d => d.JobCategory))
      .range([0, width])
      .padding(0.2);

  const yScale = d3.scaleLinear()
      .domain([0, d3.max(groupedData, d => d.AverageSalary)])
      .nice()
      .range([height, 0]);

  svg.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(xScale))
      .selectAll("text")
      .attr("transform", "rotate(-45)")
      .style("text-anchor", "end");

  svg.append("g").call(d3.axisLeft(yScale));

  svg.selectAll(".bar")
      .data(groupedData)
      .join("rect")
      .attr("class", "bar")
      .attr("x", d => xScale(d.JobCategory))
      .attr("y", d => yScale(d.AverageSalary))
      .attr("height", d => height - yScale(d.AverageSalary))
      .attr("width", xScale.bandwidth())
      .attr("fill", d => countryColor(d.Country || "All"))
      .append("title")
      .text(d => `${d.JobCategory}: $${d.AverageSalary.toFixed(2)}`);
}
