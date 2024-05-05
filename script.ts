let bulb = document.querySelector("#bulb")
let btn: any = document.querySelector("button")

 btn.addEventListener("click", function(){
    let val = 0
    if (val == 0 ) {
        
        btn.style.backgroundColor = "yellow"
        console.log("clicked");
        val = 1
    } else{
        btn.style.backgroundColor = "yellow"
        console.log("againClicked");
        val = 0
    }
})