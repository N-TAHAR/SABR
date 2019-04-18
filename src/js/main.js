let svgLine = document.querySelectorAll('.line');

for(let i = 0; i < svgLine.length; i++){
  let line = svgLine[i];
  let length = line.getTotalLength();
  console.log(length);
  line.style.strokeDasharray = length;
  line.style.strokeDashoffset = length;
  var waypoint = new Waypoint({
    element: line,
    handler: function() {
      line.style.animation = "dash 3s linear forwards";
    },
    offset: '100%'
  });
}