var canvas = $("#myCanvas");
var context = canvas.get(0).getContext("2d");

var playAnimation = true;
var startButton = $("#startAnimation");
var stopButton = $("#stopAnimation");

var canvasWidth = canvas.width();
var canvasHeight = canvas.height();
$(window).resize(resizeCanvas);

// if we resize browser window
function resizeCanvas() {
  console.log("canvas resized");
  canvas.attr("width", ~~($(window).get(0).innerWidth * 99 / 100));
  canvas.attr("height", ~~($(window).get(0).innerHeight * 99 / 100));
  canvasWidth = canvas.width();
  canvasHeight = canvas.height();
};

stopButton.hide();
//stop animation
startButton.click(function() {
    $(this).hide();
    stopButton.show();
    playAnimation = true;
    animate();
  }
);

//start animation
stopButton.click(function() {
    $(this).hide();
    startButton.show();
    playAnimation = false;
  }
);

//we don't use setTimeout anymore, but use better function
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

//convert degrees to radian
function degrees(deg) {
  var parsed_deg = parseFloat(deg);
  var pi = Math.PI;
  var rad = parsed_deg * pi / 180;
  return rad;
}

//little known canvas function
//resizing will reset canvas to default
function resetCanvas() {
  canvas.attr("width", $(window).get(0).innerWidth);
  canvas.attr("height", $(window).get(0).innerHeight);
  canvasWidth = canvas.width();
  canvasHeight = canvas.height();
}

//make canvas blank again
function clearCanvas() {
  context.clearRect(0, 0, canvasWidth, canvasHeight);
}

//reset any transformation
function resetTranformationMatrix() {
  context.setTransform(1, 0, 0, 1, 0, 0);
}

console.log("Canvas loaded");

//main loop
function animate() {
  if (playAnimation) {
    requestAnimFrame(animate);
  }
}

