const dateOfBirth = document.querySelector('#date-of-birth');
const luckyNumber = document.querySelector('#lucky-number');
const checkBtn = document.querySelector('.check-btn');
const result = document.querySelector('.result');

checkBtn.addEventListener('click', luckyOrNot);

function luckyOrNot() {
    const dob = dateOfBirth.value;
    const luckyNum = luckyNumber.value;
    
    if (sum(dob) % luckyNum === 0) {
        result.innerText = 'Your Birthday is Lucky.'
    } else {
        result.innerText = 'Not lucky.'
    }
}

function sum(dob) {
    dob = dob.replaceAll('-','');
    let sum = 0;
    for (let i=0; i<dob.length; i++) {
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}