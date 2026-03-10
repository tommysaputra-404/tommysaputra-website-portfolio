const particleCount = 80

for(let i=0;i<particleCount;i++){

const p = document.createElement("div")

p.style.position="fixed"
p.style.width="2px"
p.style.height="2px"
p.style.background="#00ff9f"

p.style.left=Math.random()*window.innerWidth+"px"
p.style.top=Math.random()*window.innerHeight+"px"

p.style.opacity=Math.random()

document.body.appendChild(p)

animateParticle(p)

}

function animateParticle(p){

let speed = Math.random()*0.5

function move(){

let top = parseFloat(p.style.top)

top += speed

if(top > window.innerHeight){
top = 0
}

p.style.top = top+"px"

requestAnimationFrame(move)

}

move()

}