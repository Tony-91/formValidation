// 'linking' html elements into js (forming them into const)
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// prevents page refresh
form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

// If+else statements for each input. We define valid/invaild input with setSuccessfor & setErrorfor functions respectively. REMINDER: Are nessesary elements included within brackets?

// taking newly formed const and created functions (in this case 'checking inputs' and thier value)
function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        // show error
        // add error class
        setErrorFor(username, 'Username cannot be blank');
    } else {
        // add success class
        setSuccessFor(username);
    }

    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
    }

    if(passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank')
    }else { 
        setSuccessFor(password);
    }

    if(password2Value === '') {
        setErrorFor(password2, 'Password2 cannot be blank')
    // if passwords do not match show error
    } else if(passwordValue !== password2Value) {
        setErrorFor(password2, 'Passwords do not match')
    } else { 
        setSuccessFor(password2);
    }
}

// defining ERROR class
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    // add  error message inside small
    small.innerText = message;

    // add error class
    formControl.className = 'form-control error';
}
// defining SUCCESS class
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Testing email
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
