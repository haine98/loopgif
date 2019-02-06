var myNickname = "chaine";
var nFramesInLoop = 240;
var bEnableExport = true;
 
// Other global variables you don't need to touch.
var nElapsedFrames;
var bRecording;
var theCanvas;
 
//===================================================
function setup() {
  theCanvas = createCanvas(640, 640);
  bRecording = false;
  nElapsedFrames = 0;
}
 
//===================================================
function keyTyped() {
  if (bEnableExport) {
    if ((key === 'f') || (key === 'F')) {
      bRecording = true;
      nElapsedFrames = 0;
    }
  }
}
 
//===================================================
function draw() {
 
  // Compute a percentage (0...1) representing where we are in the loop.
  var percentCompleteFraction = 0;
  if (bRecording) {
    percentCompleteFraction = float(nElapsedFrames) / float(nFramesInLoop);
  } else {
    percentCompleteFraction = float(frameCount % nFramesInLoop) / float(nFramesInLoop);
  }
 
  // Render the design, based on that percentage. 
  // This function renderMyDesign() is the one for you to change. 
  renderMyDesign (percentCompleteFraction);
 
  // If we're recording the output, save the frame to a file. 
  // Note that the output images may be 2x large if you have a Retina mac. 
  // You can compile these frames into an animated GIF using a tool like: 
  if (bRecording &amp;&amp; bEnableExport) {
    var frameOutputFilename = myNickname + "_frame_" + nf(nElapsedFrames, 4) + ".png";
    print("Saving output image: " + frameOutputFilename);
    saveCanvas(theCanvas, frameOutputFilename, 'png');
    nElapsedFrames++;
 
    if (nElapsedFrames &gt;= nFramesInLoop) {
      bRecording = false;
    }
  }
}
 
//===================================================
function renderMyDesign (percent) {
  //----------------------
  // here, I set the background and some other graphical properties
  background(255);
  smooth();
  stroke(0, 0, 0);
  strokeWeight(2);
 
  //----------------------
  // Here, I assign some handy variables. 
  var cx = 320;
  var cy = 320;
  noStroke();
  var arcSize = 20;
  var topY = 0 - arcSize - 2;
  var botY = height + 2;
 
    push();
 
    //I ended up not using this because it looked better starting centered
    //var eased = doubleExponentialSigmoid ((percent), 0.7); 
    //eased = (eased)%1.0; 
    //var yPosition2 = map(eased, 0, 1, topY, botY/2); 
 
    var eased2 = exponential (percent*1.2);
    var circleGrow = map(eased2, 0, 2, 0, 600);
    //ellipse (width/2, yPosition2, 20, 20);
 
    var eased3 = bounceInOut (percent * 0.5);
    var circle2Grow = map(eased3, 0, 1, 0, 2000);
 
    var eased4 = bounceInOut (percent * 0.5);
    var circle3Grow = map(eased4, 0, 1, 0, 1500);
 
    var eased5 = bounceInOut (percent * 0.5);
    var circle4Grow = map(eased5, 0, 1, 0, 1000);
 
    var easedLast = exponential (percent);
    var easedGrow = map(easedLast, 0, 1, 0, 1000);
 
    //black arc
    var test = map(percent, 0, 1, 0, 2*PI);
    //neon green arc
    var test1 = map(percent, 0, 1, 0, (3 * PI)/2);
    //light green arc
    var test2 = map(percent, 0, 1, 0, PI);
    //pink arc
    var test3 = map(percent, 0, 1, 0, PI/2);
 
 
    var arcCol1 = map(percent, 0.2, 1, 255, 204);
    var arcCol11 = map(percent, 0.2, 1, 204, 0);
    var arcCol111 = map(percent, 0.2, 1, 229, 102);
 
    //arc 1 light pink 255 204 229 -&gt; 204 0 102
    fill (arcCol1,arcCol11,arcCol111);
    arc(width/2, height/2, 1100*percent,1100*percent,0,test);
 
    var arcCol2 = map(percent, 0.2, 1, 204, 76);
    var arcCol22 = map(percent, 0.2, 1, 255, 153);
    var arcCol222 = map(percent, 0.2, 1, 229, 0);
 
    //arc 2 light green 204 255 229 -&gt; 76 153 0
    fill (arcCol2, arcCol22, arcCol222);
    arc(width/2, height/2, 1100*percent,1100*percent,0,test1);
 
 
    var arcCol3 = map(percent, 0.2, 1, 200, 0);
    var arcCol33 = map(percent, 0.2, 1, 255, 102);
    var arcCol333 = map(percent, 0.2, 1, 200, 102);
 
    //arc 3 200 255 200 -&gt; 0 102 102
    fill (arcCol3, arcCol33, arcCol333);
    arc(width/2, height/2, 1100*percent,1100*percent,0,test2);
 
    var arcCol4 = map(percent, 0.2, 1, 204, 76);
    var arcCol44 = map(percent, 0.2, 1, 229, 0);
    var arcCol444 = map(percent, 0.2, 1, 255, 153);
 
    //arc 4 light blue 204 229 255 -&gt; 76 0 153
    fill (arcCol4, arcCol44, arcCol444);
    arc(width/2, height/2, 1100*percent,1100*percent,0,test3);
 
 
    var circleCol1 = map(eased3, 0, 0.5, 102, 0);
    var circleCol11 = map(eased3, 0, 0.5, 178, 0);
    var circleCol111 = map(eased3, 0, 0.5, 255, 0);
 
    //center circle 1 pink 255 102 178
    fill (circleCol111,circleCol1,circleCol11); 
    ellipse (width/2, height/2, circle2Grow, circle2Grow); 
 
    var circleCol2 = map(eased4, 0, 0.75, 255, 0);
    var circleCol22 = map(eased4, 0, 0.75, 102, 0);
    var circleCol222 = map(eased4, 0, 0.75, 255, 0);
 
    //center circle 2 lighter pink 255 102 255
    fill (circleCol2, circleCol22, circleCol222); 
    ellipse (width/2, height/2, circle3Grow, circle3Grow); 
 
    var circleCol3 = map(eased5, 0, 1, 255, 0);
    var circleCol33 = map(eased5, 0, 1, 204, 0);
    var circleCol333 = map(eased5, 0, 1, 255, 0);
 
    //center circle 2 lightest pink 255 204 255
    fill (circleCol3, circleCol33, circleCol333); 
    ellipse (width/2, height/2, circle4Grow, circle4Grow); 
 
 
    var circleCol0 = map(easedLast, 0.1, 0.15, 200, 255);
    var circleCol00 = map(easedLast, 0.1, 0.15, 200, 255);
    var circleCol000 = map(easedLast, 0.1, 0.15, 200, 255);
 
    //center circle 2 white
    fill (circleCol0, circleCol00, circleCol000); 
    ellipse (width/2, height/2, easedGrow, easedGrow); 
 
 
    pop();
 
}
 
 
// Symmetric double-element sigmoid function ('_a' is the slope)
// See https://github.com/IDMNYU/p5.js-func/blob/master/lib/p5.func.js
// From: https://idmnyu.github.io/p5.js-func/
//===================================================
function doubleExponentialSigmoid (_x, _a){
  if(!_a) _a = 0.75; // default
 
  var min_param_a = 0.0 + Number.EPSILON;
  var max_param_a = 1.0 - Number.EPSILON;
  _a = constrain(_a, min_param_a, max_param_a);
  _a = 1-_a;
 
  var _y = 0;
  if (_x&lt;=0.5){
    _y = (pow(2.0*_x, 1.0/_a))/2.0;
  }
  else {
    _y = 1.0 - (pow(2.0*(1.0-_x), 1.0/_a))/2.0;
  }
  return(_y);
}
 
function exponential (_x){
  return((_x == 0.0) ? _x : pow(2, 10 * (_x - 1)));
}
 
function bounceIn (_x){
  return(1 - this.bounceOut(1 - _x));
}
 
function bounceOut (_x){
    if(_x &lt; 4/11.0)
    {
      return((121 * _x * _x)/16.0);
    }
    else if(_x &lt; 8/11.0)
    {
      return((363/40.0 * _x * _x) - (99/10.0 * _x) + 17/5.0);
    }
    else if(_x &lt; 9/10.0)
    {
      return((4356/361.0 * _x * _x) - (35442/1805.0 * _x) + 16061/1805.0);
    }
    else
    {
      return((54/5.0 * _x * _x) - (513/25.0 * _x) + 268/25.0);
    }
}
 
function bounceInOut (_x){
      if(_x &lt; 0.5)
    {
      return(0.5 * this.bounceIn(_x*2));
    }
    else
    {
      return(0.5 * this.bounceOut(_x * 2 - 1) + 0.5);
    }
}
 
function exponentialEmphasis (_x, _a){
    if(!_a) _a = 0.25; // default
 
    var min_param_a = 0.0 + Number.EPSILON;
    var max_param_a = 1.0 - Number.EPSILON;
    _a = constrain(_a, min_param_a, max_param_a);
 
    if (_a &lt; 0.5) {
      // emphasis
      _a = 2*(_a);
      var _y = pow(_x, _a);
      return(_y);
    }
    else {
      // de-emphasis
      _a = 2*(_a-0.5);
      var _y = pow(_x, 1.0/(1-_a));
      return(_y);
    }
}
