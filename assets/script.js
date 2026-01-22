const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Affichage de l'image et du titre du slide en fonction d'un index
function displaySlide(index) {
	slideImg.src = "./assets/images/slideshow/"+slides[slideIndex].image
	slideTitle.innerHTML = slides[slideIndex].tagLine
}

// Affichage du dot sélectionné en fonction d'un index
function displaySelectedDot(index) {
	dots.forEach(dot => {
		dot.classList.remove('dot_selected')
	})
	dots[index].classList.add('dot_selected')
}

// Définition du titre et de l'image du slide
let slideImg = document.querySelector('#banner .banner-img')
let slideTitle = document.querySelector('#banner .tagLine')
let slideIndex = 0

// Insertion des dots et définition de la série de dots
const dotContainer = document.querySelector('.dots')
for(let index=0; index<slides.length; index++) {
	const dot = document.createElement('div')
	dot.classList.add('dot')
	dotContainer.appendChild(dot)
}
const dots = document.querySelectorAll('.dot')

//  Afichage de l'image et du titre de la slide ainsi que du dot sélectionné
displaySlide(slideIndex)
displaySelectedDot(slideIndex)

// Définition et écouteurs d'évènements sur les flèches
const leftArrow = document.querySelector('.arrow_left')
leftArrow.addEventListener('click', (event) => {
	slideIndex--
	displaySlide(slideIndex)
	displaySelectedDot(slideIndex)

})

const rightArrow = document.querySelector('.arrow_right')
rightArrow.addEventListener('click', (event) => {
	slideIndex++
	displaySlide(slideIndex)
	displaySelectedDot(slideIndex)
})


