const dateOfBirth = document.querySelector('#date-of-birth');
const luckyNumber = document.querySelector('#lucky-number');
const checkBtn = document.querySelector('.check-btn');
const message = document.querySelector('.message');
const gif = document.querySelector('.gif');

gif.style.display = "none";
message.style.display = "none";

checkBtn.addEventListener('click', luckyOrNot);

function luckyOrNot() {
    const dob = dateOfBirth.value;
    const luckyNum = luckyNumber.value;

    if (dob && luckyNum) {
        checkLuckyOrNot(dob, luckyNum);
    } else {
        gif.style.display = "none";
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
        message.innerHTML = 'Your Birthday is <span>Lucky</span>';
        gif.style.display = "block";
        message.style.display = "block";
        gif.src = './Images/lucky-gif.webp';
        gif.alt = 'Party scene from "The Office"'
    } else {
        message.innerHTML = 'Your Birthday is not <span>Lucky</span>';
        gif.style.display = "block";
        message.style.display = "block";
        gif.src = './Images/unlucky-gif.webp';
        gif.alt = 'A man screaming "Unlucky"';
    }
}