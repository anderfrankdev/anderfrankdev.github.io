import { $ } from '@builder.io/qwik';

export const closeNav = $(async(event: any ) => {
	const nav = document.getElementById("nav")
	const navLinks = document.getElementById("nav-links")	

	nav!.classList.toggle("animate__fadeOutUp")
	setTimeout(()=>{
		nav!.style.display="none"
		navLinks!.style.display="none"
		nav!.classList.toggle("animate__fadeOutUp")
	},700)
})