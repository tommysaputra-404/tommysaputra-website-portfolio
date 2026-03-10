const input = document.getElementById("terminalInput");
const output = document.getElementById("terminalOutput");

const commands = {
    help: () => "commands: help about skills projects clear",
    about: () => "Tommy Saputra — Cyber Security Explorer",
    skills: () => "Cyber Security | Linux | Networking | Web",
    projects: () => "TommyCyberPortfolio | Cyber Terminal",
    ceo: () => "Future Security Engineer",
    clear: () => ""
}

// buat audio object sekali saja
const keySound = new Audio("assets/sounds/keyboard.mp3");

// mainkan setiap kali user ketik di terminal
input.addEventListener("keydown", function(e){
    if(e.key.length === 1){ // semua karakter
        keySound.currentTime = 0;
        keySound.play().catch(err => console.log(err));
    }
});

// event untuk Enter
input.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        const cmd = input.value.trim().toLowerCase();
        output.innerHTML += "<p>>> "+cmd+"</p>";
        if(commands[cmd]){
            const result = commands[cmd]();
            if(cmd === "clear"){
                output.innerHTML = "";
            }else{
                output.innerHTML += "<p>"+result+"</p>";
            }
        }else{
            output.innerHTML += "<p>command not found</p>";
        }
        input.value="";
    }
});

