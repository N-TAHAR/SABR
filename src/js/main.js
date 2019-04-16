let svgLine = document.querySelectorAll('.line');

for(let i = 0; i < svgLine.length; i++){
  let line = svgLine[i];
  let length = line.getTotalLength();
  console.log(length);
  line.style.strokeDasharray = length;
  line.style.strokeDashoffset = length;
}

