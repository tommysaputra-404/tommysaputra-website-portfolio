const scanner = document.createElement("div")

scanner.style.position="fixed"
scanner.style.left="0"
scanner.style.width="100%"
scanner.style.height="2px"
scanner.style.background="#00ff9f"
scanner.style.zIndex="2"

document.body.appendChild(scanner)

let pos = 0

function scan(){

pos += 2

scanner.style.top = pos + "px"

if(pos > window.innerHeight){
pos = 0
}

requestAnimationFrame(scan)

}

scan()