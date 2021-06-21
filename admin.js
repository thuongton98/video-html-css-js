const num = document.querySelector('.num')

const tr = document.querySelectorAll('.tr')

const toilui = document.querySelector('.admin-toilui')

var numi=5;
num.addEventListener('change',(e)=>{
	lui.style.display='none'
	numi=e.target.value
	for(let i=0;i<tr.length;i++){
	if(i>(numi-1)){
		tr[i].style.display='none'
	}else{
		tr[i].style.display=''
	}
}
if(e.target.value>=tr.length){
	toilui.style.display='none'
}else{
	toilui.style.display=''
}
})

for(let i=0;i<tr.length;i++){
	if(i>(numi-1)){
		tr[i].style.display='none'
	}else{
		tr[i].style.display=''
	}
}

const toi = document.querySelector('.admin-toi')
const lui = document.querySelector('.admin-lui')
lui.style.display='none'
var tiep = numi
toi.addEventListener('click',(e)=>{
	
	lui.style.display='block'
	for(let i=0;i<tr.length;i++){

		if(i<tiep){
			tr[i].style.display='none'
		}else if(i<(tiep+tiep)){
			if(tr[i]!==undefined){
				tr[i].style.display=''
			}
		}
	}
	tiep=tiep+numi;
if(tiep>tr.length){
			toi.style.display='none'
		}
})

lui.addEventListener('click',(e)=>{
	tiep=(tiep-numi)
	toi.style.display='block'
	for(let i=0;i<tr.length;i++){
		if(i>=tiep){
			tr[i].style.display='none'
		}else if(i<=tiep&&i>=tiep-numi){
			tr[i].style.display=''
		}
	}
	if(tiep<=numi){
		lui.style.display='none'
	}
	
})

const video = document.querySelectorAll('.video')

const body = document.querySelector('.body')
let x;
for(let i=0;i<video.length;i++){
	video[i].addEventListener('mouseover',(e)=>{
	if(e.target!==undefined){
		if(x!==undefined){
			if(x!==e.target){
					var v = x.load()
					x=undefined
		if (v !== undefined) {
  v.then(_ => {
    
  }).catch(error => {
   
  });
}
			}
		}
		e.target.muted = false;
		var v = e.target.play()
		if (v !== undefined) {
  v.then(_ => {
    
  }).catch(error => {
   
  });
}
	x=e.target
	}
})
}

body.addEventListener('mouseover',(e)=>{
	if(x!==undefined){
		if(x!==e.target){
			var v = x.load()
			x=undefined
			if(v!==undefined){
				v.then(()=>{

				})
			}
		}
	}
})
