var video;

window.addEventListener("load", function () {
	console.log("Good job opening the window")

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

var video = document.getElementById("player1");
var volume = document.querySelector("#volume");
function playVideo() {
	console.log("video played");
	video.play();
	console.log("volume is" + video.volume);
	volume.innerHTML = video.volume * 100 + "%";
}

function pauseVideo() {
	video.pause();
}

function slowDown() {
	var video_speed = video.playbackRate;
	console.log("video speed is" + video_speed);
	video.playbackRate = video_speed - ((5 * video_speed) / 100);
	console.log("new reduced video speed is" + video.playbackRate);
}

function speedUp() {
	var video_speed = video.playbackRate;
	console.log("video speed is" + video_speed);
	video.playbackRate = video_speed + ((5 * video_speed) / 100);
	console.log("new increased video speed is" + video.playbackRate);
}

function skipAhead() {
	var currentStop = video.currentTime;
	var duration = video.duration;
	console.log("current time is" + currentStop + "and duration is " + duration);
	video.currentTime = currentStop + 15;
	console.log("new current time of video is" + video.currentTime);
	if (duration !== "NaN" && video.currentTime === duration) {
		video.currentTime = 0;
		console.log("video has been reset to start from 0");
	}
}

function mute() {
	var mute = video.muted;
	console.log("value of mute is" + mute);
	if (mute == true) {
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";

	} else {
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
	}
}

function volumeChange() {
	var slider = document.getElementById("slider");
	console.log("value of slider is " + slider.value);
	video.volume = slider.value / 100;
	volume.innerHTML = slider.value + "%";
}

function oldSchool() {
	console.log("old school properties applied");
	video.classList.add("oldSchool");
}

function removeOld() {
	if (video.classList.contains("oldSchool")) {
		console.log("old school properties removed");
		video.classList.remove("oldSchool");
	}
}

