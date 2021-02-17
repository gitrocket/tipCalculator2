

var quality = document.getElementById('quality'); // this targets select (not options)
var billAmount = document.getElementById('amount');
var people = document.getElementById('people');
var tipAmount = document.getElementById('tip-amount');
var total = document.getElementById('total');
var error = document.getElementById('error');
var reset = document.getElementById('reset');

function changeOption(e) {

    // validate input
    if(billAmount.value === '' || e.currentTarget.value === 0) {
        error.textContent = "enter values"
        return;
    }

    // calculate tip and total amount owed
    tip = e.currentTarget.value * billAmount.value / people.value;
    tipAmount.textContent = `Tip Amount: ${parseFloat(tip).toFixed(2)}`
    total.textContent = `Total: ${(parseFloat(billAmount.value) + (parseFloat(tip) * people.value)).toFixed(2)}` 
        
}

function resetForm() {
    billAmount.value = "";
    people.value = "1";
    quality.value = "0";
    tipAmount.textContent = "";
    total.textContent = "";
    error.textContent = "";
    billAmount.focus();
}

window.onload = function() {
    document.getElementById('amount').focus()
}

quality.addEventListener('change', changeOption)
reset.addEventListener('click', resetForm)

