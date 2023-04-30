// login page 
const Einput = document.querySelector('.einput')
const Pinput = document.querySelector('.pinput')
const submitButton = document.querySelector('.btn')


function sbmitfunction() {
    if (Einput.value && Pinput.value) {
        alert('Welcome! you signed in')
    }
    else {
        alert('something went wrong try again later or creat a new account')
    }
}

submitButton.addEventListener('click' , sbmitfunction)

