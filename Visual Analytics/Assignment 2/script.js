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
  console.log(typeof d3.layout.cloud); 

  const validJobLevels = ["Internship", "Junior", "Mid-level", "Senior", "Technical Director"];
  const filteredData = data.filter(d => validJobLevels.includes(d.JobLevel));

  const countries = Array.from(new Set(filteredData.map(d => d.Country))).sort();

  const jobTitles = data.map(d => d.JobTitle).join(" ");


  const countryColor = d3.scaleOrdinal()
      .domain(countries)
      .range(d3.schemeCategory10);

  const maxSalary = d3.max(filteredData, d => d.AverageSalary);

  let currentCountry = "All";
  let currentJobLevel = validJobLevels[0];
  let selectedJobCategory = null;

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
          selectedJobCategory = null;
          updateVisualization(currentCountry, currentJobLevel);
          updateSalaryLine(currentCountry, currentJobLevel, filteredData, selectedJobCategory);
      });

  const slider = d3.select("#jobLevelSlider");
  const label = d3.select("#jobLevelLabel");
  const relaxButton = d3.select("#relaxButton");
  const workHardButton = d3.select("#workHardButton");

  function updateJobLevel(newIndex) {
      slider.property("value", newIndex);
      currentJobLevel = validJobLevels[newIndex];
      label.text(currentJobLevel);
      selectedJobCategory = null;
      updateVisualization(currentCountry, currentJobLevel);
      updateSalaryLine(currentCountry, currentJobLevel, filteredData, selectedJobCategory);
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
        d.JobLevel === selectedJobLevel
    );
    createVisualization(filtered, countryColor);
    updateSalaryLine(filtered);
    createBubbleMap(filtered);
}

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
      .attr("y", d => yScale(d.AverageSalary))
      .attr("height", d => height - yScale(d.AverageSalary))
      .attr("width", xScale.bandwidth())
      .attr("fill", "steelblue")
      .style("cursor", "pointer")
      .on("click", function (event, d) {
          selectedJobCategory = d.JobCategory;
  
          svg.selectAll(".bar")
              .transition()
              .duration(500)
              .attr("fill", bar => bar.JobCategory === selectedJobCategory ? "darkorange" : "lightgrey")
              .attr("x", bar => {
                  const scaleFactor = bar.JobCategory === selectedJobCategory ? 1.1 : 1;
                  return xScale(bar.JobCategory) + (xScale.bandwidth() * (1 - scaleFactor) / 2);
              })
              .attr("width", bar => {
                  const scaleFactor = bar.JobCategory === selectedJobCategory ? 1.1 : 1;
                  return xScale.bandwidth() * scaleFactor;
              });
  
          updateSalaryLine(currentCountry, currentJobLevel, data, selectedJobCategory);
      })
      .append("title")
      .text(d => `${d.JobCategory}: $${d.AverageSalary.toFixed(2)}`);


      
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
          .text("0");

      svg.append("text")
          .attr("x", width - 50)
          .attr("y", height / 2 - 10)
        //   .text(`$${maxSalary}`);
          .text(`Dream`);
  }
  
  function updateSalaryLine(selectedCountry, selectedJobLevel, data, selectedJobCategory) {
    if (!data || data.length === 0) {
        // console.warn("No data available for the selected filters");
        return;
    }

    const width = 900;

    // Filter data based on current selections
    const filtered = data.filter(d =>
        (selectedCountry === "All" || d.Country === selectedCountry) &&
        (selectedJobLevel === "All" || d.JobLevel === selectedJobLevel) &&
        (selectedJobCategory === null || d.JobCategory === selectedJobCategory)
    );

    // If no data matches, warn and return
    if (filtered.length === 0) {
        // console.warn(`No matching data for filters: Country=${selectedCountry}, JobLevel=${selectedJobLevel}, JobCategory=${selectedJobCategory}`);
        return;
    }

    // Ensure maxSalary includes the range of the current data
    const maxSalary = d3.max(data, d => d.AverageSalary) || 0;

    // Recalculate xScale with the overall data range
    const xScale = d3.scaleLinear()
        .domain([0, maxSalary])
        .range([50, width - 50]);

    // Calculate the average salary for the filtered data
    const avgSalary = d3.mean(filtered, d => d.AverageSalary) || 0;

    // Select the salary line SVG
    const svg = d3.select("#salaryLine svg");

    // Clear previous indicators
    svg.selectAll(".person").remove();

    // Add the "person" image and animate it to the new position
    svg.append("image")
        .attr("class", "person")
        .attr("xlink:href", "./run.webp")
        .attr("width", 200)
        .attr("height", 200)
        .attr("x", xScale(avgSalary) - 300) // Start position
        .attr("y", -70)
        .transition()
        .duration(1000)
        .ease(d3.easeCubicOut)
        .attr("x", xScale(avgSalary) - 100); // Final position

    // Add a text label for the average salary
    svg.append("text")
        .attr("class", "person")
        .attr("x", xScale(avgSalary))
        .attr("y", 90)
        .attr("text-anchor", "middle")
        .style("font-size", "12px")
        .text(`$${Math.round(avgSalary)}`);
}

function createBubbleMap(data) {
    d3.select("#bubbleMap").html("");
    const width = 800, height = 500;

    const bubbleSvg = d3.select("#bubbleMap")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    const groupedData = Array.from(
        d3.group(data, d => d.JobCategory),
        ([key, values]) => ({
            JobCategory: key,
            Count: values.length
        })
    );

    const pack = d3.pack().size([width, height]).padding(5);
    const root = d3.hierarchy({ children: groupedData }).sum(d => d.Count);

    const nodes = pack(root).leaves();

    const color = d3.scaleOrdinal(d3.schemeTableau10);

    const bubbles = bubbleSvg.selectAll("g")
        .data(nodes)
        .enter()
        .append("g")
        .attr("transform", d => `translate(${d.x},${d.y})`);

    bubbles.append("circle")
        .attr("r", d => d.r)
        .attr("fill", d => color(d.data.JobCategory))
        .attr("fill-opacity", 0.7)
        .attr("stroke", "black");

    bubbles.append("title")
        .text(d => `${d.data.JobCategory}\nCount: ${d.data.Count}`);

    bubbles.append("text")
        .attr("text-anchor", "middle")
        .attr("dy", ".3em")
        .style("font-size", "10px")
        .text(d => d.data.JobCategory);
}
createBubbleMap(filteredData);
});
