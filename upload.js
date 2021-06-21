const play = document.querySelector('.play')

const video = document.querySelector('.video')

if(video.src!==undefined){

	play.addEventListener('click',(e)=>{
		e.preventDefault();
		video.play()
	})
}else{
	
	play.addEventListener('click',(e)=>{
		e.preventDefault();
		console.log('nope')
	})
}