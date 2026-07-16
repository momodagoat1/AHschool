let currentVidElement = null;
let vid1, vid2;
let button1, button2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // Grab the native HTML video elements directly (Bypasses p5.js createVideo bug)
  vid1 = document.getElementById('boiledVideo');
  vid2 = document.getElementById('bathVideo');
  
  // Pause them immediately until a button is clicked
  if(vid1) vid1.pause();
  if(vid2) vid2.pause();

  // Button 1 Setup
  button1 = createButton('The Boiled One');
  button1.position(20, 20);
  button1.mousePressed(playVid1);
  styleButton(button1);

  // Button 2 Setup
  button2 = createButton('The Boy and the Bath');
  button2.position(180, 20); 
  button2.mousePressed(playVid2);
  styleButton(button2);
}

function draw() {
  // Deep Blue background proves canvas is running and rendering!
  background(15, 25, 45); 
  
  if (currentVidElement) {
    // Wrap native HTML element into a temporary p5 graphics wrapper to draw safely
    let p5wrapper = new p5.MediaElement(currentVidElement);
    image(p5wrapper, 0, 0, width, height);
  } else {
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(20);
    text("Tap a button above to play", width / 2, height / 2);
  }
}

function playVid1() {
  if (vid2) vid2.pause();
  if (vid1) {
    vid1.play().catch(e => console.log("Play blocked:", e));
    currentVidElement = vid1;
  }
}

function playVid2() {
  if (vid1) vid1.pause();
  if (vid2) {
    vid2.play().catch(e => console.log("Play blocked:", e));
    currentVidElement = vid2;
  }
}

function styleButton(btn) {
  btn.style('padding', '12px 16px');
  btn.style('background-color', '#ffffff');
  btn.style('color', '#000000');
  btn.style('border', '2px solid #000');
  btn.style('border-radius', '6px');
  btn.style('cursor', 'pointer');
  btn.style('font-weight', 'bold');
  btn.style('font-size', '14px');
  btn.style('z-index', '9999'); 
  btn.style('touch-action', 'manipulation'); 
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
  // Button 2
  button2 = createButton('The Boy and the Bath');
  button2.position(180, 20); 
  button2.mousePressed(playVid2);
  styleButton(button2);
}

function draw() {
  // Clear the screen with deep blue so we can tell the canvas is rendering
  background(10, 20, 40); 
  
  if (currentVid) {
    image(currentVid, 0, 0, width, height);
  } else {
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(18);
    text("Tap a button above to play", width / 2, height / 2 - 20);
    
    textSize(12);
    fill(150);
    text(`V1 Loaded: ${vid1Loaded} | V2 Loaded: ${vid2Loaded}`, width / 2, height / 2 + 20);
  }
}

function playVid1() {
  if (currentVid) currentVid.stop();
  currentVid = vid1;
  currentVid.play();
  currentVid.loop();
}

function playVid2() {
  if (currentVid) currentVid.stop();
  currentVid = vid2;
  currentVid.play();
  currentVid.loop();
}

function styleButton(btn) {
  btn.style('padding', '12px 16px');
  btn.style('background-color', '#ffffff');
  btn.style('color', '#000000');
  btn.style('border', '2px solid #000');
  btn.style('border-radius', '6px');
  btn.style('cursor', 'pointer');
  btn.style('font-weight', 'bold');
  btn.style('font-size', '14px');
  btn.style('z-index', '9999'); 
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function draw() {
  // Clear the screen with deep blue so we KNOW if canvas is working
  background(10, 20, 40); 
  
  if (currentVid) {
    // If a video is chosen, render it
    image(currentVid, 0, 0, width, height);
  } else {
    // Helpful on-screen text to debug state
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(20);
    text("Select a video above to begin", width / 2, height / 2 - 20);
    
    textSize(14);
    fill(150);
    text(`Status: Video 1 Loaded: ${vid1Loaded} | Video 2 Loaded: ${vid2Loaded}`, width / 2, height / 2 + 20);
  }
}

function playVid1() {
  if (currentVid) currentVid.stop();
  currentVid = vid1;
  currentVid.play();
  currentVid.loop();
}

function playVid2() {
  if (currentVid) currentVid.stop();
  currentVid = vid2;
  currentVid.play();
  currentVid.loop();
}

function styleButton(btn) {
  btn.style('padding', '12px 20px');
  btn.style('background-color', '#ffffff');
  btn.style('color', '#000000');
  btn.style('border', '2px solid #000');
  btn.style('border-radius', '6px');
  btn.style('cursor', 'pointer');
  btn.style('font-weight', 'bold');
  btn.style('z-index', '9999'); // Ensures buttons float above everything
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
