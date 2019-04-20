// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);

// Add data

chart.data = [
 {
   "City": "Boston",
   "Date": "2019/04/11 03:00",
   "Actual": 36.61,
   "Forecast": 36.28,
   "Difference": 0.33
 },
 {
   "City": "Boston",
   "Date": "2019/04/11 04:00",
   "Actual": 35.21,
   "Forecast": 35.48,
   "Difference": -0.27
 },
 {
   "City": "Boston",
   "Date": "2019/04/11 05:00",
   "Actual": 33.81,
   "Forecast": 34.9,
   "Difference": -1.09
 },
 {
   "City": "Boston",
   "Date": "2019/04/11 06:00",
   "Actual": 32.91,
   "Forecast": 34.85,
   "Difference": -1.94
 },
 {
   "City": "Boston",
   "Date": "2019/04/11 07:00",
   "Actual": 33.05,
   "Forecast": 34.46,
   "Difference": -1.41
 },
 {
   "City": "Boston",
   "Date": "2019/04/11 08:00",
   "Actual": 32.76,
   "Forecast": 33.95,
   "Difference": -1.19
 },
 {
   "City": "Boston",
   "Date": "2019/04/11 09:00",
   "Actual": 32.94,
   "Forecast": 33.87,
   "Difference": -0.93
 },
 {
   "City": "Boston",
   "Date": "2019/04/11 10:00",
   "Actual": 33.69,
   "Forecast": 34.48,
   "Difference": -0.79
 },
 {
   "City": "Boston",
   "Date": "2019/04/11 11:00",
   "Actual": 35.16,
   "Forecast": 35.58,
   "Difference": -0.42
 },
 {
   "City": "Boston",
   "Date": "2019/04/11 12:00",
   "Actual": 39.37,
   "Forecast": 37.99,
   "Difference": 1.38
 },
 {
   "City": "Boston",
   "Date": "2019/04/11 13:00",
   "Actual": 41.42,
   "Forecast": 41.17,
   "Difference": 0.25
 },
 {
   "City": "Boston",
   "Date": "2019/04/11 14:00",
   "Actual": 43.01,
   "Forecast": 43.02,
   "Difference": -0.01
 },
 {
   "City": "Boston",
   "Date": "2019/04/11 15:00",
   "Actual": 44.52,
   "Forecast": 44.5,
   "Difference": 0.02
 },
 {
   "City": "Boston",
   "Date": "2019/04/11 16:00",
   "Actual": 45.94,
   "Forecast": 45.96,
   "Difference": -0.02
 },
 {
   "City": "Boston",
   "Date": "2019/04/11 17:00",
   "Actual": 47.05,
   "Forecast": 47.56,
   "Difference": -0.51
 },
 {
   "City": "Boston",
   "Date": "2019/04/11 18:00",
   "Actual": 48.85,
   "Forecast": 49.71,
   "Difference": -0.86
 },
 {
   "City": "Boston",
   "Date": "2019/04/11 19:00",
   "Actual": 52.67,
   "Forecast": 51.68,
   "Difference": 0.99
 },
 {
   "City": "Boston",
   "Date": "2019/04/11 20:00",
   "Actual": 53.72,
   "Forecast": 53.08,
   "Difference": 0.64
 },
 {
   "City": "Boston",
   "Date": "2019/04/11 21:00",
   "Actual": 52.47,
   "Forecast": 53.52,
   "Difference": -1.05
 },
 {
   "City": "Boston",
   "Date": "2019/04/11 22:00",
   "Actual": 51.15,
   "Forecast": 52.87,
   "Difference": -1.72
 },
 {
   "City": "Boston",
   "Date": "2019/04/11 23:00",
   "Actual": 50.76,
   "Forecast": 51.51,
   "Difference": -0.75
 },
 {
   "City": "Boston",
   "Date": "2019/04/12 00:00",
   "Actual": 48.58,
   "Forecast": 47.93,
   "Difference": 0.65
 },
 {
   "City": "Boston",
   "Date": "2019/04/12 01:00",
   "Actual": 46.9,
   "Forecast": 45.87,
   "Difference": 1.03
 },
 {
   "City": "Boston",
   "Date": "2019/04/12 02:00",
   "Actual": 45.89,
   "Forecast": 44.17,
   "Difference": 1.72
 },
 {
   "City": "Boston",
   "Date": "2019/04/12 03:00",
   "Actual": 44.64,
   "Forecast": 44.78,
   "Difference": -0.14
 },
 {
   "City": "Boston",
   "Date": "2019/04/12 04:00",
   "Actual": 43.51,
   "Forecast": 43.7,
   "Difference": -0.19
 },
 {
   "City": "Boston",
   "Date": "2019/04/12 05:00",
   "Actual": 41.06,
   "Forecast": 42.45,
   "Difference": -1.39
 },
 {
   "City": "Boston",
   "Date": "2019/04/12 06:00",
   "Actual": 39.51,
   "Forecast": 41.43,
   "Difference": -1.92
 },
 {
   "City": "Boston",
   "Date": "2019/04/12 07:00",
   "Actual": 38.64,
   "Forecast": 40.1,
   "Difference": -1.46
 },
 {
   "City": "Boston",
   "Date": "2019/04/12 08:00",
   "Actual": 37.97,
   "Forecast": 39.04,
   "Difference": -1.07
 },
 {
   "City": "Boston",
   "Date": "2019/04/12 09:00",
   "Actual": 37.56,
   "Forecast": 38.71,
   "Difference": -1.15
 },
 {
   "City": "Boston",
   "Date": "2019/04/12 10:00",
   "Actual": 39.54,
   "Forecast": 39.3,
   "Difference": 0.24
 },
 {
   "City": "Boston",
   "Date": "2019/04/12 11:00",
   "Actual": 41.74,
   "Forecast": 40.63,
   "Difference": 1.11
 },
 {
   "City": "Boston",
   "Date": "2019/04/12 12:00",
   "Actual": 43.56,
   "Forecast": 42.47,
   "Difference": 1.09
 },
 {
   "City": "Boston",
   "Date": "2019/04/12 13:00",
   "Actual": 45.33,
   "Forecast": 45.15,
   "Difference": 0.18
 },
 {
   "City": "Boston",
   "Date": "2019/04/12 14:00",
   "Actual": 46.96,
   "Forecast": 47.83,
   "Difference": -0.87
 },
 {
   "City": "Boston",
   "Date": "2019/04/12 15:00",
   "Actual": 47.12,
   "Forecast": 49.41,
   "Difference": -2.29
 },
 {
   "City": "Boston",
   "Date": "2019/04/12 16:00",
   "Actual": 47.95,
   "Forecast": 50.31,
   "Difference": -2.36
 },
 {
   "City": "Boston",
   "Date": "2019/04/12 17:00",
   "Actual": 49.56,
   "Forecast": 51.44,
   "Difference": -1.88
 },
 {
   "City": "Boston",
   "Date": "2019/04/12 18:00",
   "Actual": 51.7,
   "Forecast": 52.56,
   "Difference": -0.86
 },
 {
   "City": "Boston",
   "Date": "2019/04/12 19:00",
   "Actual": 53.05,
   "Forecast": 53.86,
   "Difference": -0.81
 },
 {
   "City": "Boston",
   "Date": "2019/04/12 20:00",
   "Actual": 53.23,
   "Forecast": 54.98,
   "Difference": -1.75
 },
 {
   "City": "Boston",
   "Date": "2019/04/12 21:00",
   "Actual": 51.67,
   "Forecast": 55.65,
   "Difference": -3.98
 },
 {
   "City": "Boston",
   "Date": "2019/04/12 22:00",
   "Actual": 51.83,
   "Forecast": 54.79,
   "Difference": -2.96
 },
 {
   "City": "Boston",
   "Date": "2019/04/12 23:00",
   "Actual": 51.11,
   "Forecast": 52.35,
   "Difference": -1.24
 },
 {
   "City": "Boston",
   "Date": "2019/04/13 00:00",
   "Actual": 51.17,
   "Forecast": 50.91,
   "Difference": 0.26
 },
 {
   "City": "Boston",
   "Date": "2019/04/13 01:00",
   "Actual": 51.33,
   "Forecast": 51.16,
   "Difference": 0.17
 },
 {
   "City": "Boston",
   "Date": "2019/04/13 02:00",
   "Actual": 51.43,
   "Forecast": 51.79,
   "Difference": -0.36
 },
 {
   "City": "Boston",
   "Date": "2019/04/13 03:00",
   "Actual": 52.25,
   "Forecast": 52.73,
   "Difference": -0.48
 },
 {
   "City": "Boston",
   "Date": "2019/04/13 04:00",
   "Actual": 54,
   "Forecast": 54.08,
   "Difference": -0.08
 },
 {
   "City": "Boston",
   "Date": "2019/04/13 05:00",
   "Actual": 57.67,
   "Forecast": 56.33,
   "Difference": 1.34
 },
 {
   "City": "Boston",
   "Date": "2019/04/13 06:00",
   "Actual": 57.93,
   "Forecast": 58.22,
   "Difference": -0.29
 },
 {
   "City": "Boston",
   "Date": "2019/04/13 07:00",
   "Actual": 59.4,
   "Forecast": 58.54,
   "Difference": 0.86
 },
 {
   "City": "Boston",
   "Date": "2019/04/13 08:00",
   "Actual": 60.08,
   "Forecast": 58.71,
   "Difference": 1.37
 },
 {
   "City": "Boston",
   "Date": "2019/04/13 09:00",
   "Actual": 60.21,
   "Forecast": 58.54,
   "Difference": 1.67
 },
 {
   "City": "Boston",
   "Date": "2019/04/13 10:00",
   "Actual": 59.73,
   "Forecast": 57.91,
   "Difference": 1.82
 },
 {
   "City": "Boston",
   "Date": "2019/04/13 11:00",
   "Actual": 59.68,
   "Forecast": 57.41,
   "Difference": 2.27
 },
 {
   "City": "Boston",
   "Date": "2019/04/13 12:00",
   "Actual": 60.74,
   "Forecast": 58.44,
   "Difference": 2.3
 },
 {
   "City": "Boston",
   "Date": "2019/04/13 13:00",
   "Actual": 60.15,
   "Forecast": 58.79,
   "Difference": 1.36
 },
 {
   "City": "Boston",
   "Date": "2019/04/13 14:00",
   "Actual": 60.93,
   "Forecast": 59.27,
   "Difference": 1.66
 },
 {
   "City": "Boston",
   "Date": "2019/04/13 15:00",
   "Actual": 61.18,
   "Forecast": 59.01,
   "Difference": 2.17
 },
 {
   "City": "Boston",
   "Date": "2019/04/13 16:00",
   "Actual": 61.84,
   "Forecast": 61.03,
   "Difference": 0.81
 },
 {
   "City": "Boston",
   "Date": "2019/04/13 17:00",
   "Actual": 63.71,
   "Forecast": 63.76,
   "Difference": -0.05
 },
 {
   "City": "Boston",
   "Date": "2019/04/13 18:00",
   "Actual": 69.04,
   "Forecast": 67.81,
   "Difference": 1.23
 },
 {
   "City": "Boston",
   "Date": "2019/04/13 19:00",
   "Actual": 72.51,
   "Forecast": 72.7,
   "Difference": -0.19
 },
 {
   "City": "Boston",
   "Date": "2019/04/13 20:00",
   "Actual": 73.74,
   "Forecast": 74.82,
   "Difference": -1.08
 },
 {
   "City": "Boston",
   "Date": "2019/04/13 21:00",
   "Actual": 73.43,
   "Forecast": 74.85,
   "Difference": -1.42
 },
 {
   "City": "Boston",
   "Date": "2019/04/13 22:00",
   "Actual": 71.7,
   "Forecast": 72.64,
   "Difference": -0.94
 },
 {
   "City": "Boston",
   "Date": "2019/04/13 23:00",
   "Actual": 70.08,
   "Forecast": 69.97,
   "Difference": 0.11
 },
 {
   "City": "Boston",
   "Date": "2019/04/14 00:00",
   "Actual": 66.59,
   "Forecast": 66.22,
   "Difference": 0.37
 },
 {
   "City": "Boston",
   "Date": "2019/04/14 01:00",
   "Actual": 64.44,
   "Forecast": 64.09,
   "Difference": 0.35
 },
 {
   "City": "Boston",
   "Date": "2019/04/14 02:00",
   "Actual": 62.65,
   "Forecast": 62.5,
   "Difference": 0.15
 },
 {
   "City": "Boston",
   "Date": "2019/04/14 03:00",
   "Actual": 60.35,
   "Forecast": 61.2,
   "Difference": -0.85
 },
 {
   "City": "Boston",
   "Date": "2019/04/14 04:00",
   "Actual": 55.54,
   "Forecast": 55.94,
   "Difference": -0.4
 },
 {
   "City": "Boston",
   "Date": "2019/04/14 05:00",
   "Actual": 55.26,
   "Forecast": 59.04,
   "Difference": -3.78
 },
 {
   "City": "Boston",
   "Date": "2019/04/14 06:00",
   "Actual": 54.5,
   "Forecast": 61.44,
   "Difference": -6.94
 },
 {
   "City": "Boston",
   "Date": "2019/04/14 07:00",
   "Actual": 54.55,
   "Forecast": 62.74,
   "Difference": -8.19
 },
 {
   "City": "Boston",
   "Date": "2019/04/14 08:00",
   "Actual": 55.46,
   "Forecast": 63.63,
   "Difference": -8.17
 },
 {
   "City": "Boston",
   "Date": "2019/04/14 09:00",
   "Actual": 55.25,
   "Forecast": 64.27,
   "Difference": -9.02
 },
 {
   "City": "Boston",
   "Date": "2019/04/14 10:00",
   "Actual": 57.78,
   "Forecast": 64.52,
   "Difference": -6.74
 },
 {
   "City": "Boston",
   "Date": "2019/04/14 11:00",
   "Actual": 60.48,
   "Forecast": 65.48,
   "Difference": -5
 },
 {
   "City": "Boston",
   "Date": "2019/04/14 12:00",
   "Actual": 57.57,
   "Forecast": 65.2,
   "Difference": -7.63
 },
 {
   "City": "Boston",
   "Date": "2019/04/14 13:00",
   "Actual": 57.93,
   "Forecast": 65.15,
   "Difference": -7.22
 },
 {
   "City": "Boston",
   "Date": "2019/04/14 14:00",
   "Actual": 58.04,
   "Forecast": 65.65,
   "Difference": -7.61
 },
 {
   "City": "Boston",
   "Date": "2019/04/14 15:00",
   "Actual": 59.11,
   "Forecast": 65.73,
   "Difference": -6.62
 },
 {
   "City": "Boston",
   "Date": "2019/04/14 16:00",
   "Actual": 60.26,
   "Forecast": 68.52,
   "Difference": -8.26
 },
 {
   "City": "Boston",
   "Date": "2019/04/14 17:00",
   "Actual": 63.95,
   "Forecast": 69.87,
   "Difference": -5.92
 },
 {
   "City": "Boston",
   "Date": "2019/04/14 18:00",
   "Actual": 67.88,
   "Forecast": 69.83,
   "Difference": -1.95
 },
 {
   "City": "Boston",
   "Date": "2019/04/14 19:00",
   "Actual": 68.33,
   "Forecast": 67.56,
   "Difference": 0.77
 },
 {
   "City": "Boston",
   "Date": "2019/04/14 20:00",
   "Actual": 58.47,
   "Forecast": 63.22,
   "Difference": -4.75
 },
 {
   "City": "Boston",
   "Date": "2019/04/14 21:00",
   "Actual": 58.43,
   "Forecast": 60.48,
   "Difference": -2.05
 },
 {
   "City": "Boston",
   "Date": "2019/04/14 22:00",
   "Actual": 56.17,
   "Forecast": 58.15,
   "Difference": -1.98
 },
 {
   "City": "Boston",
   "Date": "2019/04/14 23:00",
   "Actual": 53.03,
   "Forecast": 56.44,
   "Difference": -3.41
 },
 {
   "City": "Boston",
   "Date": "2019/04/15 00:00",
   "Actual": 51.44,
   "Forecast": 53.32,
   "Difference": -1.88
 },
 {
   "City": "Boston",
   "Date": "2019/04/15 01:00",
   "Actual": 49.67,
   "Forecast": 51.19,
   "Difference": -1.52
 },
 {
   "City": "Boston",
   "Date": "2019/04/15 02:00",
   "Actual": 48.46,
   "Forecast": 49.16,
   "Difference": -0.7
 },
 {
   "City": "Boston",
   "Date": "2019/04/15 03:00",
   "Actual": 47.37,
   "Forecast": 47.46,
   "Difference": -0.09
 },
 {
   "City": "Boston",
   "Date": "2019/04/15 04:00",
   "Actual": 46.59,
   "Forecast": 46.34,
   "Difference": 0.25
 },
 {
   "City": "Boston",
   "Date": "2019/04/15 05:00",
   "Actual": 45.46,
   "Forecast": 45.6,
   "Difference": -0.14
 },
 {
   "City": "Boston",
   "Date": "2019/04/15 06:00",
   "Actual": 44.88,
   "Forecast": 46.05,
   "Difference": -1.17
 },
 {
   "City": "Boston",
   "Date": "2019/04/15 07:00",
   "Actual": 45.85,
   "Forecast": 45.55,
   "Difference": 0.3
 },
 {
   "City": "Boston",
   "Date": "2019/04/15 08:00",
   "Actual": 45.3,
   "Forecast": 44.93,
   "Difference": 0.37
 },
 {
   "City": "Boston",
   "Date": "2019/04/15 09:00",
   "Actual": 44.79,
   "Forecast": 44.06,
   "Difference": 0.73
 },
 {
   "City": "Boston",
   "Date": "2019/04/15 10:00",
   "Actual": 42.51,
   "Forecast": 43.57,
   "Difference": -1.06
 },
 {
   "City": "Boston",
   "Date": "2019/04/15 11:00",
   "Actual": 42.67,
   "Forecast": 43.53,
   "Difference": -0.86
 },
 {
   "City": "Boston",
   "Date": "2019/04/15 12:00",
   "Actual": 45.83,
   "Forecast": 44.31,
   "Difference": 1.52
 },
 {
   "City": "Boston",
   "Date": "2019/04/15 13:00",
   "Actual": 47.65,
   "Forecast": 45.97,
   "Difference": 1.68
 },
 {
   "City": "Boston",
   "Date": "2019/04/15 14:00",
   "Actual": 48.91,
   "Forecast": 48.6,
   "Difference": 0.31
 },
 {
   "City": "Boston",
   "Date": "2019/04/15 15:00",
   "Actual": 50.51,
   "Forecast": 51.03,
   "Difference": -0.52
 },
 {
   "City": "Boston",
   "Date": "2019/04/15 16:00",
   "Actual": 52.4,
   "Forecast": 53.19,
   "Difference": -0.79
 },
 {
   "City": "Boston",
   "Date": "2019/04/15 17:00",
   "Actual": 54.39,
   "Forecast": 55.39,
   "Difference": -1
 },
 {
   "City": "Boston",
   "Date": "2019/04/15 18:00",
   "Actual": 56.19,
   "Forecast": 59.55,
   "Difference": -3.36
 },
 {
   "City": "Boston",
   "Date": "2019/04/15 19:00",
   "Actual": 57.49,
   "Forecast": 61.6,
   "Difference": -4.11
 },
 {
   "City": "Boston",
   "Date": "2019/04/15 20:00",
   "Actual": 58.78,
   "Forecast": 61.83,
   "Difference": -3.05
 },
 {
   "City": "Boston",
   "Date": "2019/04/15 21:00",
   "Actual": 60.31,
   "Forecast": 62.62,
   "Difference": -2.31
 },
 {
   "City": "Boston",
   "Date": "2019/04/15 22:00",
   "Actual": 59.3,
   "Forecast": 61.28,
   "Difference": -1.98
 },
 {
   "City": "Boston",
   "Date": "2019/04/15 23:00",
   "Actual": 59.14,
   "Forecast": 58.72,
   "Difference": 0.42
 }];
 
chart.dateFormatter.inputDateFormat = "yyyy-MM-dd HH:mm";


var legend = new am4charts.Legend();
legend.isMeasured = true;
legend.y = am4core.percent(100);
legend.verticalCenter = "bottom";
legend.parent = chart.chartContainer;
legend.data = [{
"name": "Difference of Actual Weather",
"fill": chart.colors.getIndex(0)
}];                          

// Create axes
var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
dateAxis.startLocation = 0.5;
dateAxis.endLocation = 0.5;

// Create value axis
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

// Create series
var series = chart.series.push(new am4charts.LineSeries());
series.dataFields.valueY = "Difference";
series.dataFields.dateX = "Date";
series.strokeWidth = 3;
series.tooltipText = "{valueY.value}";
series.fillOpacity = 0.1;

// Create a range to change stroke for values below 0
var range = valueAxis.createSeriesRange(series);
range.value = 0;
range.endValue = -1000;
range.contents.stroke = chart.colors.getIndex(4);
range.contents.fill = range.contents.stroke;
range.contents.strokeOpacity = 0.7;
range.contents.fillOpacity = 0.1;

// Add cursor
chart.cursor = new am4charts.XYCursor();
chart.cursor.xAxis = dateAxis;
chart.scrollbarX = new am4core.Scrollbar();