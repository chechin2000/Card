let show = document.querySelectorAll(".show")
let hidden = document.querySelectorAll(".hidden")
let option = document.querySelectorAll(".options")
let borderNone = document.querySelectorAll(".desactive-border")
let img = document.querySelector(".img-box")

let active = [false,false,false,false,false];

show.forEach(button => {
	button.addEventListener("click",()=>{
		button.classList.add("active")
		let validacion = button.classList.contains("active")
		if (validacion) {
			value(show)
			active2 = active[position];
			if (active2 == false) {
				const intervalo = setInterval(()=>{
					hidden[position].style.display = "block"
					show[position].style.transform = "rotateX(180deg)"
					option[position].setAttribute("style","color: #000; opacity: 1;")
					borderNone[position].setAttribute("style","border: none; padding: none;")
					active[position] = true
				},150)
				setTimeout(()=>{
					clearInterval(intervalo)
				},150)
			} else {
				hidden[position].style.display = "none"
				show[position].style.transform = "rotateX(0deg)"
				option[position].removeAttribute("style","color: #000; opacity: 1;")
				borderNone[position].setAttribute("style","border-bottom: 1px solid #ccc;")
				active[position] = false;
			}
		}	
		button.classList.remove("active")
	})
})		

option.forEach(element => {
	element.addEventListener("mousemove",()=>{
		img.style.animation = "move 2s linear forwards"	
	})
})

option.forEach(element => {
	element.addEventListener("mouseout",()=>{
		img.style.animation = "reset 2s linear forwards"
	})
})

const value = (node)=>{
	for (no in node) {
		if (isNaN(no) == false) {
			if (node[no].classList.contains("active")) {
				position = no
			return position;
		}
		}
	}
}

