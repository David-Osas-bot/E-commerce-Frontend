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


// function MoveLeft()
// {
//     const a = document.querySelector(".carousel-container-div");
    
//     //a.ScrollBy({left: -350, behaviour: 'smooth'});
//     a.scrollBy(300, 0,)
// }

// function MoveRight()
// {
//     const b = document.querySelector(".carousel-container-div")
//     b.scrollBy(-300, 0)
//     //b.ScrollBy({left: 300, behaviour: 'smooth'});
// }




// let span = document.getElementById('span');
// let product = document.getElementsByClassName('carousel-product');
// let product_page = Math.ceil(product.length/4);
// let l = 0;
// let movePer = 25.34; 
// let maxMove = 203;


// // Mobile View
// let mobile_view = window.matchMedia("(max-width: 768px)");
// if(mobile_view.matches)
// {
//     movePer = 50.36;
//     maxMove = 504;
// }

// let right_mover = () =>  {
//     l = l + movePer;
//     if(product === 1) {l = 0}
//     for(const i of product)
//     {
//         if(l > maxMove) {l = l - movePer;}
//         i.style.left = '-' + l + '%';
//     }
// }

// let left_mover = () =>{
//     l = l - movePer;
//     if(l<=0) {l=0;}
//     for(const i of product)
//     {
//         if(product_page > 1)
//         i.style.left = '-' + l + '%';
//     }
// }

// span[1].onclick = ()=>{right_mover();}
// span[0].onclick = ()=>{left_mover();}




// let span = document.getElementsByTagName('span');
// let product = document.getElementsByClassName('product');
// let product_page = Math.ceil(product.length / 4);
// let l = 0;
// let movePer = 25.34;
// let maxMove = 203;

// // Mobile View
// let mobile_view = window.matchMedia("(max-width: 768px)");
// if (mobile_view.matches) {
//     movePer = 50.36;
//     maxMove = 504;
// }

// let right_mover = () => {
//     l = l + movePer;
//     if (l > maxMove) {
//         l = maxMove;
//     }
//     for (const i of product) {
//         i.style.left = '-' + l + '%';
//     }
// }

// let left_mover = () => {
//     l = l - movePer;
//     if (l < 0) {
//         l = 0;
//     }
//     for (const i of product) {
//         i.style.left = '-' + l + '%';
//     }
// }

// // Event listeners
// span[1].onclick = () => { right_mover(); }
// span[0].onclick = () => { left_mover(); }



let spans = document.querySelectorAll('.span'); // Assuming buttons have class="span"
let products = document.getElementsByClassName('carousel-product');
let product_page = Math.ceil(products.length / 4);
let l = 0;
let movePer = 25.34; 
let maxMove = 203;

// Mobile View
let mobile_view = window.matchMedia("(max-width: 768px)");
if (mobile_view.matches) {
    movePer = 50.36;
    maxMove = 504;
}

let right_mover = () => {
    l = l + movePer;
    if (products.length === 1) l = 0;
    if (l > maxMove) l = maxMove;
    for (let i = 0; i < products.length; i++) {
        products[i].style.left = '-' + l + '%';
    }
}

let left_mover = () => {
    l = l - movePer;
    if (l < 0) l = 0;
    for (let i = 0; i < products.length; i++) {
        products[i].style.left = '-' + l + '%';
    }
}

// Assuming there are at least two span buttons
if (spans.length >= 2) {
    spans[1].addEventListener('click', right_mover);
    spans[0].addEventListener('click', left_mover);
}
