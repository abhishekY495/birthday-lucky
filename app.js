const dateOfBirth = document.querySelector('#date-of-birth');
const luckyNumber = document.querySelector('#lucky-number');
const checkBtn = document.querySelector('.check-btn');
const message = document.querySelector('.message');
const luckyGif = document.querySelector('.lucky-gif');
const unluckyGif = document.querySelector('.unlucky-gif');

message.style.display = "none";

checkBtn.addEventListener('click', luckyOrNot);

function luckyOrNot() {
    const dob = dateOfBirth.value;
    const luckyNum = luckyNumber.value;

    if (dob && luckyNum) {
        checkLuckyOrNot(dob, luckyNum);
    } else {
        unluckyGif.style.display = "none";
        luckyGif.style.display = "none";
        message.style.display = "block";
        message.innerText = 'Enter both fields.'
    }
}

function sum(dob) {
    dob = dob.replaceAll('-','');
    let total = 0;
    for (let i=0; i<dob.length; i++) {
        total = total + Number(dob.charAt(i));
    }
    return total;
}

function checkLuckyOrNot(dob, luckyNum) {
    if (sum(dob) % luckyNum === 0) {
        luckyMsgOutput();
    } else {
        unluckyMsgOutput();
    }
}

function luckyMsgOutput() {
    message.innerHTML = 'Your Birthday is <span>Lucky</span>';
    message.style.display = "block";
    unluckyGif.style.display = "none";
    luckyGif.src = "./Images/lucky-gif.webp";
    luckyGif.style.display = "block";
}

function unluckyMsgOutput() {
    message.innerHTML = 'Your Birthday is <span>Not Lucky</span>';
    message.style.display = "block";
    luckyGif.style.display = "none";
    unluckyGif.src = "./Images/unlucky-gif.webp";
    unluckyGif.style.display = "block";
}
