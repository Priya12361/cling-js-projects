//  light on function

function lightOn() {
    let lightObj = document.querySelector(".lightOff");
    lightObj.setAttribute("src" , "lighton.jpg");
}
function lightOff() {
    let lightObj = document.querySelector(".lightOff");
    lightObj.setAttribute("src" , "lightoff.jpg");
}