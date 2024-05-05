let bulb = document.querySelector("#bulb");
let btn = document.querySelector("button");
let value = 0;
btn.addEventListener("click", function () {
    if (value == 0) {
        bulb.style.backgroundColor = "yellow";
        console.log("On");
        value = 1;
    }
    else {
        bulb.style.backgroundColor = "transparent";
        console.log("Off");
        value = 0;
    }
});
