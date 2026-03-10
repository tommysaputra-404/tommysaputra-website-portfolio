
// Ambil input dan output terminal
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

// BUAT audio setelah user pertama kali klik / fokus terminal
let keySound;
input.addEventListener("focus", function initAudio(){
    keySound = new Audio("assets/sounds/keyboard.mp3");
    keySound.volume = 0.5; // optional, supaya ga terlalu keras

    // setelah diinisialisasi, hapus listener ini
    input.removeEventListener("focus", initAudio);
});

// Mainkan sound setiap karakter
input.addEventListener("keydown", function(e){
    // pastikan audio sudah dibuat
    if(keySound && e.key.length === 1){
        keySound.currentTime = 0;
        keySound.play().catch(err => console.log("Autoplay blocked, try click first"));
    }

    // ENTER command
    if(e.key === "Enter"){
        const cmd = input.value.trim().toLowerCase();
        output.innerHTML += "<p>>> "+cmd+"</p>";

        if(commands[cmd]){
            const result = commands[cmd]();
            if(cmd === "clear"){
                output.innerHTML = "";
            } else {
                output.innerHTML += "<p>"+result+"</p>";
            }
        } else {
            output.innerHTML += "<p>command not found</p>";
        }
        input.value="";
    }
});


