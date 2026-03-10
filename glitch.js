const glitch = document.querySelector(".glitch")

function glitchEffect(){

const x = Math.floor(Math.random()*10)
const y = Math.floor(Math.random()*10)

glitch.style.textShadow =
x+"px 0 red,"+
(-x)+"px 0 cyan,"+
y+"px 0 blue"

}

setInterval(glitchEffect,150)