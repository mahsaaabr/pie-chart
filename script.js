
let xValues = ["Comedy", "Drama", "Adventure", "Action", "Romantic Comedy"];
let yValues = [44, 30, 20, 10, 5];
let barColors = [
  "#fd5959",
  "#ff9c6d",
  "#fcff82",
  "#afc5ff",
  "#5dacbd"
];
new Chart("myChart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      hoverBackgroundColor:"#500809",
      data: yValues,
    }]
  },
  options: {
    title: {
    display: true,
    }
  }
});
