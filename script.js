/* Edit this file */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
toggle.addEventListener("click",(e)=>{
	if(video.paused){
		video.play()
		e.target.textContent = "❚❚"
		setInterval(()=>{
	    progressBar.style.flexBasis = `${(video.currentTime/video.duration)*100}%`
		},1000)
	}else{
		video.pause()
		e.target.textContent = "►"
	} 
	
})
ranges[0].addEventListener("change",(e)=>{
	video.volume = e.target.value;
})
ranges[1].addEventListener("change",(e)=>{
	video.playbackRate = e.target.value
})
skipButtons[0].addEventListener("click",(e)=>{
	video.currentTime = video.currentTime-10;
})
skipButtons[1].addEventListener("click",(e)=>{
	video.currentTime = video.currentTime+25;
})