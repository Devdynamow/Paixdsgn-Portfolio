function scrol(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    
  
    
    
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    
}
scrol()
// var tlm = gsap.timeline({
//     scrollTrigger:{
//         trigger:"#page1 #part1",
//         scroller:"body",
//         markers:true,
//         scrub:5,
//         start:"top -20%"
//     }
// })
// tlm.to("#page1",{
//     filter:"blur(1px)"
//  })
window.addEventListener("mousemove",function(dets){
    gsap.to(".cursor",{
        x:dets.x,
        y:dets.y
    })
    // var cursor = document.querySelector(".cursor")
    // cursor.style.left = dets.x + "px"
    // cursor.style.top = dets.y + "px"
})

var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#page1 h1",
        scroller:"#main",
        // markers:true,
        scrub:5,
        start:"top -25%"
    }
})

tl.to("#page2",{
    backgroundColor:"#F7F7F7"
})
var tlm = gsap.timeline({
    scrollTrigger:{
        trigger:"#page2 .ptext1",
        scroller:"#main",
        // markers:true,
        scrub:5,
        start:"top 32%",
        end:"top -40%",
    }
})

tlm.to("#page2 img",{
    y:-600,
    duration:10
},"b")

tlm.to("#page2 .pagepart1 h2",{
    color: "#FD6535"

},"b")

var box = document.querySelectorAll("#page3 .elem")
box.forEach(function(e){
e.addEventListener("mouseenter",function(){
    gsap.to(".cursor",{
       scale:"4",
       duration:0.2,
    })
    console.log(e)
   
})
e.addEventListener("mouseleave", function(){
    gsap.to(".cursor",{
        scale:"1"
    })
})
})
// gsap.to("#page4 img",{
//     width:"100%",
//     duration:3,
//     scrollTrigger:{
//         trigger:"#page4",
//         scroller:"#main",

//     }
// })
document.addEventListener("DOMContentLoaded", function() {
    // List of image URLs
    var images = ["https://www.paix-design.com/wp-content/uploads/2023/12/gallery2-04.jpg", "https://www.paix-design.com/wp-content/uploads/2023/12/gallery2-03.jpg", "https://www.paix-design.com/wp-content/uploads/2023/10/gallery2-02-1.jpg", "https://www.paix-design.com/wp-content/uploads/2023/10/gallery2-02-1.jpg", "https://www.paix-design.com/wp-content/uploads/2023/12/gallery2-05.jpg"]; // Add more image URLs as needed
    var currentIndex = 0;
    var slider = document.getElementById('slider');
  
    // Function to change the image
    function changeImage() {
      slider.src = images[currentIndex];
      currentIndex = (currentIndex + 1) % images.length;
    }
  
    // Change image every 2 seconds
    setInterval(changeImage, 1500);
  });
var tll = gsap.timeline();
tll.to("#loader",{
    filter:"blur(200px)",
})
.to("#loader",{
    x:"100%",
    // opacity:0,
    duration:2,
    filter:"blur(0px)"
})
gsap.to("#nav", {
    y: -100,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "#main",
        scrub: 3,
        // markers: true,
        start: "top top", // Adjusted start and end positions
        end: "top -20%"
    }
});

var mtl = gsap.timeline();
var isMenuOpen = false;

document.querySelector("#navpart2 span").addEventListener("click", function(){
    if (!isMenuOpen) {
        mtl.to("#menu",{
           display:"block",
            duration:0.5,
            opacity:1
        })
        .from("#menu h1",{
            y:10,
            stagger:0.1,
            // delay:0.2,
            opacity:0
        });
        isMenuOpen = true;
    } else {
        mtl.to("#menu",{
            display:"none",
            opacity:0,

            duration:0.5
        });
        isMenuOpen = false;
    }
});
var e = document.querySelectorAll("#menu h1")
// var menu = document.querySelector("#menu")
// menu.addEventListener("mouseenter",function(enter){
//     gsap.to(".cursor",{
//         x:enter.x,
//         y:enter.y,
//         ease:"power4"
//     })
// })
e.forEach(function(m){
    m.addEventListener("mouseenter",function(){
        gsap.to(m,{
            color:" #FE6A00",
            duration:0.2
        })
        gsap.to(".cursor",{
            scale:"4",
            
            
        })
    })
    m.addEventListener("mouseleave",function(){
        gsap.to(m,{
            color:"#000",
            duration:0.2

        })
        gsap.to(".cursor",{
            scale:"1",
            
            
        })
    })
})


document.querySelector("#navpart1 img").addEventListener("mouseenter",function(){
   
    gsap.to(".cursor",{
        scale:"4"
        
        
    })
})



// document.querySelector("#navpart2 span").addEventListener("click", function(){
//     mtl.from("#menu",{
//         opacity:0,
//         duration:0.5
//     })
// })

