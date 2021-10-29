const track=document.querySelector('.carousel__track');
const nextButton=document.querySelector('.carousel__button--next');
const prevButton=document.querySelector('.carousel__button--prev');
const slides=Array.from(track.children);
const dotsNav=document.querySelector('.carousel__nav');
const dots=Array.from(dotsNav.children);

//get width of the slide
const slideWidth=slides[0].getBoundingClientRect().width;

//arrange slides next to each other
const setSlidePosition=(slide,index)=>{
    slide.style.left=slideWidth*index+'px';
}
slides.forEach(setSlidePosition);

//move to slides
const moveToSlides=(track,currentSlide,targetSlide)=>{
    track.style.transform=`translateX(-${targetSlide.style.left})`;
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

//move nav indicators
const moveToDot=(currentDot,targetDot)=>{
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
} 
//Hide buttons for first and last slides
const hideButtons=(index)=>{
    if(index===0){
        prevButton.classList.add("is-hidden");
        nextButton.classList.remove("is-hidden")

    }
    else if(index===slides.length-1){
       prevButton.classList.remove("is-hidden");
       nextButton.classList.add("is-hidden")
    }
    else{
       prevButton.classList.remove("is-hidden");
       nextButton.classList.remove("is-hidden") 
    }
}
//move slide to next on click of next button
nextButton.addEventListener('click',()=>{
    const currentSlide=track.querySelector('.current-slide');
    const nextSlide=currentSlide.nextElementSibling;
    const nextSlideIndex=slides.findIndex(slide=>slide===nextSlide);
    hideButtons(nextSlideIndex);
    moveToSlides(track,currentSlide,nextSlide);
    const currentDot=dotsNav.querySelector('.current-slide');
    const targetDot=currentDot.nextElementSibling;
    moveToDot(currentDot,targetDot)
})

//move slide to prev on click of prev button
prevButton.addEventListener('click',()=>{
    const currentSlide=track.querySelector('.current-slide');
    const prevSlide=currentSlide.previousElementSibling;
    const prevSlideIndex=slides.findIndex(slide=>slide===prevSlide);
    hideButtons(prevSlideIndex);
    moveToSlides(track,currentSlide,prevSlide);
    const currentDot=dotsNav.querySelector('.current-slide');
    const targetDot=currentDot.previousElementSibling;
    moveToDot(currentDot,targetDot);
   
})


//on click of dot move to the slide on particular index
dots.forEach((item,index)=>{
    item.addEventListener('click',()=>{
    const currentSlide=track.querySelector('.current-slide');
    const targetSlide=slides[index];
    const currentDot=dotsNav.querySelector('.current-slide');
    moveToSlides(track,currentSlide,targetSlide);
    moveToDot(currentDot,item);
    hideButtons(index);
    })
})