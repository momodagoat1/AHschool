let currentVid;
let vid1;
let vid2;
let button1;
let button2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // Load video files uploaded to your GitHub repository root
  vid1 = createVideo('boiled_one.mp4'); 
  vid2 = createVideo('boy_bath.mp4'); 
  
  vid1.hide();
  vid2.hide();
  
  vid1.volume(0);
  vid2.volume(0);

  // Button 1
  button1 = createButton('The Boiled One');
  button1.position(20, 20);
  button1.mousePressed(playVid1);
  styleButton(button1);

  // Button 2
  button2 = createButton('The Boy and the Bath');
  button2.position(160, 20);
  button2.mousePressed(playVid2);
  styleButton(button2);
}

function draw() {
  background(0);
  
  if (currentVid) {
    image(currentVid, 0, 0, width, height);
  } else {
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(24);
    text("Select a video to begin", width / 2, height / 2);
  }
}

function playVid1() {
  if (currentVid) currentVid.stop();
  currentVid = vid1;
  currentVid.loop();
}

function playVid2() {
  if (currentVid) currentVid.stop();
  currentVid = vid2;
  currentVid.loop();
}

function styleButton(btn) {
  btn.style('padding', '10px 15px');
  btn.style('background-color', '#fff');
  btn.style('border', 'none');
  btn.style('border-radius', '5px');
  btn.style('cursor', 'pointer');
  btn.style('font-weight', 'bold');
}

// Automatically adjusts canvas size if user resizes the browser window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
