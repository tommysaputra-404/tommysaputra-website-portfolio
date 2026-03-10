// Ambil input dan output terminal
const input = document.getElementById("terminalInput");
const output = document.getElementById("terminalOutput");

// Daftar perintah
const commands = {
    help: () => "commands: help about skills projects clear",
    about: () => "Tommy Saputra — Cyber Security Explorer",
    skills: () => "Cyber Security | Linux | Networking | Web",
    projects: () => "TommyCyberPortfolio | Cyber Terminal",
    ceo: () => "Future Security Engineer",
    clear: () => ""
};

// Audio keyboard
let keySound;

// Inisialisasi audio saat user pertama kali klik/fokus input
input.addEventListener("focus", function initAudio() {
    keySound = new Audio("assets/sounds/keyboard.mp3");
    keySound.volume = 0.5; // optional, biar ga terlalu keras
    // hapus listener ini supaya tidak bikin audio baru tiap klik
    input.removeEventListener("focus", initAudio);
});

// Mainkan sound setiap karakter ketik
input.addEventListener("keydown", function(e){
    // pastikan audio sudah siap & hanya mainkan untuk karakter normal
    if(keySound && e.key.length === 1){
        keySound.currentTime = 0;
        keySound.play().catch(err => {
            console.log("Autoplay blocked, coba klik dulu terminal");
        });
    }

    // Jalankan command saat tekan ENTER
    if(e.key === "Enter"){
        const cmd = input.value.trim().toLowerCase();

        // tampilkan command yang diketik
        output.innerHTML += `<p>>> ${cmd}</p>`;

        if(commands[cmd]){
            const result = commands[cmd]();
            if(cmd === "clear"){
                output.innerHTML = ""; // bersihkan terminal
            } else {
                output.innerHTML += `<p>${result}</p>`;
            }
        } else {
            output.innerHTML += "<p>command not found</p>";
        }

        input.value = ""; // reset input
        // scroll ke bawah biar terlihat hasil baru
        output.scrollTop = output.scrollHeight;
    }
});
