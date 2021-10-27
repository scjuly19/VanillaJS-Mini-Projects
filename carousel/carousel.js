const track=document.querySelector('.carousel__track');
const nextButton=document.querySelector('.carousel__button--next');
const prevButton=document.querySelector('.carousel__button--prev');
const slides=Array.from(track.children);
const dotNavs=document.querySelector('.carousel__nav');
const dots=Array.from(dotNavs);

//get width of the slide
const slideWidth=slides[0].getBoundingClientRect().width;

//arrange slides next to each other
const setSlidePosition=(slide,index)=>{
    slide.style.left=slideWidth*index+'px';
}
slides.forEach(setSlidePosition);

//move slide to next on click of next button
nextButton.addEventListener('click',()=>{
    const currentSlide=track.querySelector('.current-slide');
    const nextSlide=currentSlide.nextElementSibling;
    const moveToPosition=nextSlide.style.left;
    track.style.transform=`translateX(-${moveToPosition})`;
    currentSlide.classList.remove('current-slide');
    nextSlide.classList.add('current-slide');


})

//move slide to prev on click of prev button
//on click of dot move to the slide on particular index
