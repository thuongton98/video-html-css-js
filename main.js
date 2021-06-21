const video = document.querySelectorAll('.video')

const body =document.querySelector('#body')



let z;

for(let i=0;i<video.length;i++){
	
		video[i].addEventListener('mouseover',(e)=>{
	if(z!==undefined){
		if(z!==video[i]){
			var me = z.load()
			if(me!==undefined){
				
				me.then(() => { z.load(); })
			
			}
		}
	}
if(e.target!==undefined){
	e.target.muted = true;
	e.target.play()
}
	
	
		z=e.target

	
})

}

body.addEventListener('mouseover',(e)=>{
	if(z!==undefined){
		if(e.target!==z){
		
		var dit =z.load()
			if(dit!==undefined){
				dit.then(() => { z.load(); })
			}
		
        
   
	}
	}
})

const channel = document.querySelectorAll('.channel-i')
const channelvideo = document.querySelectorAll('.channel-video')

for(let i=0;i<channel.length;i++){
	channel[i].addEventListener('click',()=>{
		channel[i].className='channel-i active'
		channelvideo[i].style.display='flex'
		for(let j=0;j<channel.length;j++){
			if(channel[j]!==channel[i]){
				channel[j].className='channel-i'
				channelvideo[j].style.display='none'
			}
		}
	})
}