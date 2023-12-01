let sound, amplitude;
let spectrum, bass, lowMid, mid, highMid, treble;
let fft;

let element = document.getElementById("element");


function preload(){
    // load your sound file here
    sound = loadSound('night-and-day.mp3');
}


function setup() {
    let cnv = createCanvas(600,600);
    cnv.mouseClicked(togglePlay);
    amplitude = new p5.Amplitude();
    fft = new p5.FFT();
}


function draw() {
    background(220);
    text('tap to play', 20, 20);
    fill(255, 0, 255);

    let level = amplitude.getLevel();

    // *******************
    // METHOD #1
    // If you want to draw using the ways of drawing in p5.js

    // this line takes the output of "level" and remaps it to a range between 0 and 400,
    // which we will use for the size of the ellipse
    let size = map(level, 0, 1, 50, 600);
    
    // this line draws an ellipse with width, height, and size parameters
    ellipse(width/2, height/2, size, size);


    // *******************
    // METHOD #2
    // If you want to use the DOM elements (which is what we've been doing all semester)
    let elementSize = map(level, 0, 1, 50, 600);
    let blurriness = map(level, 0, 1, 0, 20);

    element.style.width = elementSize + "px";
    element.style.filter = `blur(${blurriness}px)`





    // OPTIONAL: USE SPECTRUM
    // let spectrum = fft.analyze();
    // noStroke();
    // for (let i = 0; i< spectrum.length; i++){
    //     let x = map(i, 0, spectrum.length, 0, width);
    //     let h = -height + map(spectrum[i], 0, 255, height, 0);
    //     rect(x, height, width / spectrum.length, h )
    // }
  


    // OPTIONAL: USE WAVEFORM
    // let waveform = fft.waveform();
    // noFill();
    // beginShape();
    // stroke(20);
    // for (let i = 0; i < waveform.length; i++){
    //   let x = map(i, 0, waveform.length, 0, width);
    //   let y = map( waveform[i], -1, 1, 0, height);
    //   vertex(x,y);
    // }
    // endShape();
}



// this is the function that plays or pauses the track when you click
// do not touch it :)
function togglePlay() {
    if (sound.isPlaying() ){
        sound.pause();
    } else {
        sound.loop();
            amplitude = new p5.Amplitude();
            amplitude.setInput(sound);
    }
}

