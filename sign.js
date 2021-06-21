const notk = document.querySelector('.notk')
const tk = document. querySelector('.tk')
const signin = document.querySelector('.signin')
const signup = document.querySelector('.signup')
const passsignin = document.querySelector('#pass')
const passsignup = document.querySelector('#pass1')
const showpasssignin = document.querySelector('#show')
const showpasssignup = document.querySelector('#show1')

notk.addEventListener('click',()=>{
	signin.style.display='none'
	signup.style.display='block'
})

tk.addEventListener('click',()=>{
	signin.style.display='block'
	signup.style.display='none'
})


showpasssignin.addEventListener('click',()=>{
	if(passsignin.type === 'password'){
		passsignin.type = 'text'
	}else{
		passsignin.type='password'
	}
})


showpasssignup.addEventListener('click',()=>{
	if(passsignup.type === 'password'){
		passsignup.type = 'text'
	}else{
		passsignup.type='password'
	}
})