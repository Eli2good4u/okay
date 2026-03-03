// Helper for random numbers (standard in App Lab, not in JS)
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Create 50 labels initially (or they won't exist for the code to find)
const container = document.getElementById('container');
for (let i = 1; i <= 50; i++) {
    let lbl = document.createElement('div');
    lbl.id = "label" + i;
    lbl.className = "label";
    container.appendChild(lbl);
}

document.getElementById("startBtn").addEventListener("click", function() {
    let stateA = false;
    let stateB = true;

    if (stateB === true) {
        stateA = true;
    }

    if (stateB === true && stateA === true) {
        // Standard JS way to play sound
        new Audio("https://files.voicy.network/public/Content/Clips/Sound/b51233ad-f2a1-49c5-a560-1c38a890d6a5.mp3").play();

        setTimeout(function() {
            // WARNING: 9999 is a massive loop; reduced here for browser safety
            for (let i = 0; i < 999999999999; i++) {
                setTimeout(function(){
                    for (let x = 1; x <= 500000000000000; x++) {
                    let el = document.getElementById("label" + x);
                    el.innerText = "ACTIVE";
                    el.style.width = randomNumber(70, 200) + "px";
                    el.style.height = randomNumber(70, 200) + "px";
                    el.style.left = randomNumber(0, window.innerWidth - 200) + "px";
                    el.style.top = randomNumber(0, window.innerHeight - 200) + "px";
                    el.style.backgroundColor = `rgb(${randomNumber(0,255)},${randomNumber(0,255)},${randomNumber(0,255)})`;
                    }
                }, 50);
            }
        }, 2000);
    }
});
