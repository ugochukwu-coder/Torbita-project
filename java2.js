const subslide = document.querySelectorAll('.sub-slide');

subslide.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`
});

let curSlide = 0;

let maxSlide = subslide.length -  1;

const nextSlide = document.querySelector('.btn-next1');
nextSlide.addEventListener('click', function () {
    curSlide++;
    subslide.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`
    });
    if ( curSlide === maxSlide) {
        curSlide = 0; 
    } else{
        curSlide++;
    }
})


const prevSlide = document.querySelector('.btn-prev1');
prevSlide.addEventListener('click', function () {
    if (curSlide === 0) {
        curSlide = maxSlide
    } else {
        curSlide--;
    }
    subslide.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`
    });
});



const modal = document.querySelector('.modal');
const overlay =document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelector('.show-modal');

const openModal = function(){
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function (){
    modal.classList.add('hidden');
    overlay.classList.add(hidden);
};

btnOpenModal.addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);


// const modalOne = document.querySelector('.modal-1');
// const overlayOne =document.querySelector('.overlay-1');
// const btnCloseModalOne = document.querySelector('.close-modal-1');
// const btnOpenModalOne = document.querySelector('.show-modal-1');

// const openModalOne = function(){
//     console.log('Button clicked');
//     modalOne.classList.remove('hidden');
//     overlayOne.classList.remove('hidden');
// };

// const closeModalOne = function (){
//     modalOne.classList.add('hidden');
//     overlayOne.classList.add(hidden);
// };

// btnOpenModalOne.addEventListener('click', openModal);

// btnCloseModalOne.addEventListener('click', closeModal);
// overlayOne.addEventListener('click', closeModal);

