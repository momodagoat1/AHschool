let currentVid;
let vid1;
let vid2;
let button1;
let button2;
let vid1Loaded = false;
let vid2Loaded = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // 1. Create the videos with explicit callbacks
  vid1 = createVideo(['./boiled_one.mp4'], () => { vid1Loaded = true; }); 
  vid2 = createVideo(['./boy_bath.mp4'], () => { vid2Loaded = true; }); 
  
  // 2. FOR ANDROID/MOBILE: Force inline playback and mute the elements natively
  // This stops Android from hijacking the stream or blocking execution
  vid1.elt.setAttribute('playsinline', '');
  vid1.elt.setAttribute('muted', '');
  vid2.elt.setAttribute('playsinline', '');
  vid2.elt.setAttribute('muted', '');

  // Hide the default HTML player elements
  vid1.hide();
  vid2.hide();
  
  // Redundant safety mute for p5.js engine
  vid1.volume(0);
  vid2.volume(0);

  // Button 1
  button1 = createButton('The Boiled One');
  button1.position(20, 20);
  button1.mousePressed(playVid1);
  styleButton(button1);

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
