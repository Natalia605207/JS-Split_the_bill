gsap.from("#container", {duration: 2.5, x: -150, ease: "power1.inOut", opacity: 0})
gsap.from("#icon", {duration: 2.7, rotate: 360, opacity: 0})


let heading = `Let's Split Our Bill!`;
let i = 0;
let speed = 90;

function type() {
    if (i < heading.length) {
        document.querySelector('h1').textContent += heading.charAt(i);
        i++;
        setTimeout(type, speed);
    }
}

type();

const button = document.querySelector('#btn');
button.addEventListener("click", calculateAmount);

const buttonTip = document.querySelector('#addTip');
buttonTip.addEventListener('click', showTip);

function showTip(e) {
    e.preventDefault();
    tip.style.display = 'block';
}

function calculateAmount(e) {
    e.preventDefault();
    const bill = Number(document.querySelector('#bill').value);
    const people = Number(document.querySelector('#people').value);
    const tip = Number(document.querySelector('#tip').value);
    const dividedBill = document.querySelector('#dividedBill');
    const dividedTip = document.querySelector('#dividedTip');
    const billAndTip = document.querySelector('#billAndTip');

    if (isNaN(bill) || isNaN(people) || people == "" || bill == "") {
        dividedBill.textContent = 0;
        dividedTip.textContent = 0;
        billAndTip.textContent = 0;
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Please enter correct information!',
        })
    }

    else {

    let amountPerPerson = bill / people;
    let tipPerPerson = (bill * tip) / people;
    let totalSum = amountPerPerson + tipPerPerson;

    amountPerPerson = +amountPerPerson.toFixed(2);
    tipPerPerson = +tipPerPerson.toFixed(2);
    totalSum = +totalSum.toFixed(2);

    dividedBill.textContent = amountPerPerson;
    dividedTip.textContent = tipPerPerson;
    billAndTip.textContent = totalSum;
}
}

