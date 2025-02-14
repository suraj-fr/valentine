let noMessages = [
    "Are you sure? 🥺",
    "Think again! 😢",
    "Please say yes! 💖",
    "Pleaaaseee🥺?",
    "Don't break my heart 💔",
    "Okay, last chance! 😭"
];

let noIndex = 0;
let yesBtnSize = 22;
let noBtnSize = 22;

function handleNoClick() {
    let noBtn = document.getElementById("noBtn");
    let yesBtn = document.getElementById("yesBtn");

    if (noIndex < noMessages.length) {
        noBtn.innerText = noMessages[noIndex];
        noIndex++;
        noBtn.style.opacity = (1 - noIndex * 0.15).toString(); // Gradual disappearance
    } else {
        noBtn.innerText = "Fine... 😭";
        noBtn.style.opacity = "0";
        setTimeout(() => { noBtn.style.display = "none"; }, 500);
    }

    yesBtnSize += 20;  // Increase size significantly
    yesBtn.style.fontSize = yesBtnSize + "px";

    noBtnSize -= 4;  // Shrink the No button
    noBtn.style.fontSize = noBtnSize + "px";
}

function handleYesClick() {
    window.location.href = "yes_page.html";  // Redirect to Yes Page
}
