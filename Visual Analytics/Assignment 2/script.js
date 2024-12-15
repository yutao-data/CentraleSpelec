// Load the dataset and scale variables
d3.csv("./job_data.csv", d => ({
  Country: d.Country,
  JobTitle: d["Job Title"],
  JobCategory: d["Job Category"],
  JobLevel: d["Job Level"],
  AverageSalary: +d["Average Salary"],
  RedirectURL: d["Redirect URL"]
})).then(data => {
  console.log("Loaded Data:", data);

  const validJobLevels = ["Internship", "Junior", "Mid-level", "Senior", "Technical Director"];
  const filteredData = data.filter(d => validJobLevels.includes(d.JobLevel));

  const countries = Array.from(new Set(filteredData.map(d => d.Country))).sort();

  const countryColor = d3.scaleOrdinal()
      .domain(countries)
      .range(d3.schemeCategory10);

  const maxSalary = d3.max(filteredData, d => d.AverageSalary);

  let currentCountry = "All";
  let currentJobLevel = validJobLevels[0];

  const countryButtons = d3.select("#countryButtons");
  countryButtons.selectAll("button")
      .data(["All", ...countries])
      .enter()
      .append("button")
      .text(d => d)
      .style("background-color", d => d === "All" ? "grey" : countryColor(d))
      .style("opacity", 1)
      .on("click", function (event, selectedCountry) {
          d3.selectAll("#countryButtons button").style("opacity", 0.5);
          d3.select(this).style("opacity", 1);
          currentCountry = selectedCountry;
          updateVisualization(currentCountry, currentJobLevel);
      });

  const slider = d3.select("#jobLevelSlider");
  const label = d3.select("#jobLevelLabel");
  const relaxButton = d3.select("#relaxButton");
  const workHardButton = d3.select("#workHardButton");

  function updateJobLevel(newIndex) {
      slider.property("value", newIndex);
      currentJobLevel = validJobLevels[newIndex];
      label.text(currentJobLevel);
      updateVisualization(currentCountry, currentJobLevel);
  }

  slider.on("input", function () {
      const levelIndex = +this.value;
      updateJobLevel(levelIndex);
  });

  relaxButton.on("click", function () {
      const currentIndex = +slider.property("value");
      if (currentIndex > 0) {
          updateJobLevel(currentIndex - 1);
      }
  });

  workHardButton.on("click", function () {
      const currentIndex = +slider.property("value");
      if (currentIndex < validJobLevels.length - 1) {
          updateJobLevel(currentIndex + 1);
      }
  });

  createVisualization(filteredData, countryColor);
  createSalaryLine(maxSalary);

  function updateVisualization(selectedCountry, selectedJobLevel) {
      const filtered = filteredData.filter(d =>
          (selectedCountry === "All" || d.Country === selectedCountry) &&
          (selectedJobLevel === "All" || d.JobLevel === selectedJobLevel)
      );
      createVisualization(filtered, countryColor);
      updateSalaryLine(selectedCountry, selectedJobLevel, filteredData);
  }
});

function createVisualization(data, countryColor) {
  d3.select("#visualization").html("");

  const margin = { top: 20, right: 30, bottom: 120, left: 70 };
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
      .attr("y", height)
      .attr("height", 0)
      .attr("width", xScale.bandwidth())
      .attr("fill", "steelblue")
      .transition()
      .duration(1000)
      .ease(d3.easeBounceOut)
      .attr("y", d => yScale(d.AverageSalary))
      .attr("height", d => height - yScale(d.AverageSalary));
}

function createSalaryLine(maxSalary) {
  const width = 900;
  const height = 100;

  const svg = d3.select("#salaryLine")
      .append("svg")
      .attr("width", width)
      .attr("height", height);

  svg.append("line")
      .attr("x1", 50)
      .attr("x2", width - 50)
      .attr("y1", height / 2)
      .attr("y2", height / 2)
      .attr("stroke", "black")
      .attr("stroke-width", 2);

  svg.append("text")
      .attr("x", 50)
      .attr("y", height / 2 - 10)
      .text("$0");

  svg.append("text")
      .attr("x", width - 50)
      .attr("y", height / 2 - 10)
      .text(`$${maxSalary}`);
}

function updateSalaryLine(selectedCountry, selectedJobLevel, data) {
  const width = 900;
  const xScale = d3.scaleLinear()
      .domain([0, 0.5 * d3.max(data, d => d.AverageSalary)])
      .range([50, width - 50]);

  const avgSalary = d3.mean(data.filter(d =>
      (selectedCountry === "All" || d.Country === selectedCountry) &&
      (selectedJobLevel === "All" || d.JobLevel === selectedJobLevel)
  ), d => d.AverageSalary) || 0;

  const svg = d3.select("#salaryLine svg");
  svg.selectAll(".person").remove();

  svg.append("circle")
      .attr("class", "person")
      .attr("cx", xScale(avgSalary))
      .attr("cy", 50)
      .attr("r", 10)
      .attr("fill", "red");

  svg.append("text")
      .attr("class", "person")
      .attr("x", xScale(avgSalary))
      .attr("y", 30)
      .attr("text-anchor", "middle")
      .text("👤");
}
