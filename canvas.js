var canvas = $("#myCanvas");
var context = canvas.get(0).getContext("2d");
var canvasWidth = canvas.width();
var canvasHeight = canvas.height();

var playAnimation = true;
var startButton = $("#startAnimation");
var stopButton = $("#stopAnimation");

var canvasWidth = canvas.width();
var canvasHeight = canvas.height();
$(window).resize(resizeCanvas);

function resizeCanvas() {
  console.log("canvas resized");
  canvas.attr("width", ~~($(window).get(0).innerWidth * 90 / 100));
  canvas.attr("height", ~~($(window).get(0).innerHeight * 90 / 100));
  canvasWidth = canvas.width();
  canvasHeight = canvas.height();
};

stopButton.hide();
startButton.click(function() {
    $(this).hide();
    stopButton.show();
    playAnimation = true;
    animate();
  }
);

stopButton.click(function() {
    $(this).hide();
    startButton.show();
    playAnimation = false;
  }
);

$(window).get(0).requestAnimFrame = (function(){
  return  window.requestAnimationFrame || 
    window.webkitRequestAnimationFrame || 
    window.mozRequestAnimationFrame    || 
    window.oRequestAnimationFrame      || 
    window.msRequestAnimationFrame     || 
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
  };
})();

function degrees(deg) {
  var parsed_deg = parseFloat(deg);
  var pi = Math.PI;
  var rad = parsed_deg * pi / 180;
  return rad;
}

function resetCanvas() {
  canvas.attr("width", $(window).get(0).innerWidth);
  canvas.attr("height", $(window).get(0).innerHeight);
  canvasWidth = canvas.width();
  canvasHeight = canvas.height();
}

function clearCanvas() {
  context.clearRect(0, 0, canvasWidth, canvasHeight);
}

function resetTranformationMatrix() {
  context.setTransform(1, 0, 0, 1, 0, 0);
}

console.log("Canvas loaded");
function animate() {
  if (playAnimation) {
    requestAnimFrame(animate);
  }
}
