var video = document.querySelector('.video')

var playButton = document.querySelector("#play-pause");
  var muteButton = document.querySelector("#mute");
  var fullScreenButton = document.querySelector("#full-screen");

  // Sliders
  var seekBar = document.querySelector("#seek-bar");
  var volumeBar = document.querySelector("#volume-bar");



  playButton.addEventListener("click", function() {
  if (video.paused == true) {
    // Play the video
    video.play();

    // Update the button text to 'Pause'
    playButton.innerHTML = "Pause";
  } else {
    // Pause the video
    video.pause();

    // Update the button text to 'Play'
    playButton.innerHTML = "Play";
  }
});

  muteButton.addEventListener("click", function() {
  if (video.muted == false) {
    // Mute the video
    video.muted = true;

    // Update the button text
    muteButton.innerHTML = "Unmute";
  } else {
    // Unmute the video
    video.muted = false;

    // Update the button text
    muteButton.innerHTML = "Mute";
  }
});

fullScreenButton.addEventListener("click", function() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen(); // Firefox
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen(); // Chrome and Safari
  }
});

seekBar.addEventListener("change", function() {
  // Calculate the new time
  var time = video.duration * (seekBar.value / 100);

  // Update the video time
  video.currentTime = time;
});

video.addEventListener("timeupdate", function() {
  // Calculate the slider value
  var value = (100 / video.duration) * video.currentTime;

  // Update the slider value
  seekBar.value = value;
});

seekBar.addEventListener("mousedown", function() {
  video.pause();
});

// Play the video when the slider handle is dropped
seekBar.addEventListener("mouseup", function() {
  video.play();
});

volumeBar.addEventListener("change", function() {
  // Update the video volume
  video.volume = volumeBar.value;
});

const body = document.querySelector('.upload')
let z;
let k;
const myvideoitem = document.querySelectorAll('.myvideo-item')

const showbuttonplay = document.querySelectorAll('.showbuttonplay')


for(let i=0;i<myvideoitem.length;i++){
	myvideoitem[i].addEventListener('mouseover',(e)=>{
		showbuttonplay[i].style.display='block'
		z = showbuttonplay[i]
		k= myvideoitem[i]
	})
}

body.addEventListener('mouseover',(e)=>{
	if(z!==undefined){
		if(z!==e.target&&k!==e.target){
			z.style.display='none'
		}
	}
})