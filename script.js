const form = document.getElementById('form');
const username = document.getElementById('username');
console.log(username)
const email = document.getElementById('email');
console.log(email)
const password = document.getElementById('password1');
console.log(password)
const password2 = document.getElementById('password2');
console.log(password2)

// Show Input Error Message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'mb-3 error';

    const small = formControl.querySelector('small');;
    small.innerText = message;
    
    
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'mb-3 success';
}

// // Check Email Is Valid
// function checkEmail(input) {
//     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     if (re.test(input.value)) {
//         showSuccess(input);
//     } else {
//         showError(input, 'Email is not valid');
//     }
// }

// Show Input Error Message
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        console.log(input.id);
        if(input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required!`)
        } else {
            showSuccess(input);
        }

    });
}

// Check Input Legnth
function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters!`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters!`);
    } else {
        showSuccess(input);
    }
}

// Check Password Match
function checkPasswordMatch(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, 'Passwords do not match!')
    }
}

// Get Field Name
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event Listeners
form.addEventListener('submit', function (e) {
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 8, 20);
    // checkEmail(email);
    checkPasswordMatch(password, password2);
});
