const circle = document.getElementById("circle");
const upBtn = document.getElementById("upBtn");
const downBtn = document.getElementById("downBtn");

const rotateValue = circle.style.transform;
var rotateSum;

upBtn.addEventListener("click", function() 
{
    // console.log("UP");
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
});

downBtn.addEventListener("click", function() 
{
    // console.log("DOWN");
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
});

