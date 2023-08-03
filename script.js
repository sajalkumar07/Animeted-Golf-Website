var cursor = document.querySelector("#cursor")
document.addEventListener("mousemove", function(dets){
    cursor.style.left = dets.x+"px"
    cursor.style.top = dets.y+"px"
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