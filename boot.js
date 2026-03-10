const bootText = document.getElementById("bootText")

const bootLines = [

"Initializing cyber system...",
"Loading modules...",
"Checking network...",
"Accessing secure nodes...",
"Launching interface..."

]

let index = 0

function boot(){

if(index < bootLines.length){

bootText.innerHTML += bootLines[index] + "<br>"

index++

setTimeout(boot,600)

}else{

setTimeout(()=>{
document.getElementById("boot").style.display="none"
},1000)

}

}

boot()