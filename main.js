// elementi catturati

let navbar = document.querySelector("#navbar");
let links = document.querySelectorAll(".links");
let logo = document.querySelector("#logo");
let containerfluid= document.querySelector("#container-fluid");
let hamburger = document.querySelector("#hamburger");
let FirstNumber= document.querySelector("#FirstNumber");
let SecondNumber= document.querySelector("#SecondNumber");
let ThirdNumber= document.querySelector("#ThirdNumber");
let cardsWrapper= document.querySelector("#cardsWrapper");
let swiperWrapper= document.querySelector(".swiper-wrapper")

// foreach default

links.forEach((el)=>{
    el.classList.remove("text-b");
    el.classList.add("text-w");
    
    el.addEventListener("mouseenter",()=>{
        el.classList.remove("text-w");
        el.classList.add("text-y");
    })
    
    el.addEventListener("mouseleave",()=>{
        el.classList.remove("text-y");
        el.classList.add("text-w");
    })
    
})






window.addEventListener("scroll", ()=>{
    
    if (window.scrollY > 0) {
        navbar.style.height = "150px ";
        navbar.classList.remove("bg-b");
        navbar.classList.add("bg-y");
        logo.src="http://127.0.0.1:5500/media/rocketblack.png";
        containerfluid.classList.remove("bg-b");
        containerfluid.classList.add("bg-y");
        
        links.forEach((el)=>{
            el.classList.remove("text-w");
            el.classList.add("text-b");
            el.addEventListener("mouseenter",()=>{
                el.classList.remove("text-b");
                el.classList.add("text-w");
            })
            
            el.addEventListener("mouseleave",()=>{
                el.classList.remove("text-w");
                el.classList.add("text-b");
            })
        })
        
        
        
        
    }else{
        navbar.style.height = "86px";
        navbar.classList.remove("bg-y");
        navbar.classList.add("bg-b");
        logo.src="http://127.0.0.1:5500/media/rocketwhite.png";
        containerfluid.classList.remove("bg-y");
        containerfluid.classList.add("bg-b");
        
        links.forEach((el)=>{
            el.classList.remove("text-b");
            el.classList.add("text-w");
            
            el.addEventListener("mouseenter",()=>{
                el.classList.remove("text-w");
                el.classList.add("text-y");
            })
            
            el.addEventListener("mouseleave",()=>{
                el.classList.remove("text-y");
                el.classList.add("text-w");
            })
            
        })
    } 
})

hamburger.addEventListener("click",()=>{
    logo.classList.toggle("logorotate");
})

// chiamata asincrona

// let counter = 0

// let interval = setInterval(()=>{
//     if (counter < 10) {
//        counter++ 
//     } else {
//         console.log("mi son fermato?");
//         clearInterval(interval);
//     }
// })

function clearInterval(total,FinalNumber, time) {
    let counter = 0
    let interval = setInterval(()=>{
        if (counter<total) {
            counter++ ;
            FinalNumber.innerHTML= counter;
            
        } else {
            console.log("mi son fermato?");
            clearInterval(interval);
        }
    }, time )
    
}

// intersectionObserver

let check = true

let observer = new IntersectionObserver((entries)=>{
    entries.forEach((el)=>{
        if (el.isIntersecting && check == true) {
            clearInterval(500, FirstNumber, 10);
            clearInterval(100, SecondNumber, 50);
            clearInterval(10, ThirdNumber, 500);
            check = false;
            setTimeout(()=>{
                check = true;
            }, 3000)
        } 
        
        
        
    })
})

observer.observe(ThirdNumber)
// isIntersecting

// sezioni annunci

let announcements = [
    
    {name :"Penna" , category : "elettronica", price : 20},
    {name :"Pcgaming", category : "elettronica", price : 1200},
    {name :"Cappello" , category : "abbigliamento", price : 40},
    {name :"Porchetta" , category : "alimento", price : 20},
    {name :"quadro" , category : "arte", price : 20},
    {name :"ChitarraDiLoris" , category : "arredamento", price : 3000},
]




announcements.forEach((announce,i)=>{
    if (i>=(announcements.length-3)) {
        
        let div = document.createElement("div");
        div.classList.add("col-12", "col-md-4");
        div.innerHTML= `
        <div class="card">
        <img class="card-img-top" src="https://picsum.photos/${201+i}" alt="">
        <div class="card-body">
        <h5 class="card-title">${announce.name}</h5>
        <p class="card-text">${announce.category}</p>
        <p class="card-text">${announce.price}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
        
        
        `
        
        cardsWrapper.appendChild(div)
        
    }
    
});


let reviews = [ 

    {name: 'David', description: 'Bellissimo e sublime', vote: 5},
    {name: 'Luca', description: "Loris l'avrebbe fatto meglio", vote: 3},
    {name: 'Loris', description: 'Rivoglio i miei soldi indietro', vote: 1},
    {name: 'Francesco', description: 'sciapo', vote: 4},
    {name: 'Vercingetorige', description: "L'impero romano fa schifo e ci penso spesso", vote: 2 }

]

reviews.forEach( (review)=>{
    let div = document.createElement('div');
    div.classList.add('swiper-slide', 'd-flex', 'align-items-center', 'justify-content-center');
    div.innerHTML= `
    <div class="review-card">
        <p class="lead">${review.name}</p>
        <p>${review.description}</p>
    </div>
    
    `
    swiperWrapper.appendChild(div)
} )



















const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});





