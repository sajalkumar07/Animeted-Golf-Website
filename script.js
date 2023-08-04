var cursor = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-background-blur")

document.addEventListener("mousemove", function(dets){
    cursor.style.left = dets.x + "px"
    cursor.style.top = dets.y + "px"
    blur.style.left = dets.x - 200 +"px"
    blur.style.top = dets.y - 200 +"px"
})

gsap.to("#nav",{
    backgroundColor: "black",
    duration:"1",
    height:"20px",
    scrollTrigger:{
        tirgger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11",
        scrub:0.7,
    },
});

gsap.to("#main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:"main",
        tirgger:"#body", 
        start:"top -30%",
        end:"top -70%",
        scrub:0.7,  
    },
});