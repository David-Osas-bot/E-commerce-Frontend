// let currentIndex = 0;
// const  slides = document.querySelector('.slide');

// function showSlide(){
//     // slides.forEach((slide, i) => {
//     //     slide.classList.remove('active');
//     //     if (i === index)
//     //     {
//     //         slide.classList.add('active');
//     //     }
//     // });
//     var image = new Image()
// }

// function nextSlide()
// {
//     currentIndex++ ;
//     showSlide(currentIndex);
// }

// function prevSlide() {
//     currentIndex--;
//     showSlide(currentIndex);
// }


function MoveLeft()
{
    const a = document.querySelector(".carousel-container-div");
    
    //a.ScrollBy({left: -350, behaviour: 'smooth'});
    a.scrollBy(300, 0,)
}

function MoveRight()
{
    const b = document.querySelector(".carousel-container-div")
    b.scrollBy(-300, 0)
    //b.ScrollBy({left: 300, behaviour: 'smooth'});
}