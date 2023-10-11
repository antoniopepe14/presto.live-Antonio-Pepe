// elementi catturati

let navbar = document.querySelector("#navbar");
let links = document.querySelectorAll(".links");
let logo = document.querySelector("#logo");
let containerfluid= document.querySelector("#container-fluid");
let hamburger = document.querySelector("#hamburger");


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

