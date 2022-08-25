let currPassword = "";

const setPassword = (e) => {
    currPassword = e.target.value;
    console.log(currPassword);
}

const checkPassword = (e) => {
    console.log('hello');
    if (e.target.value !== currPassword) {
        console.log('hi');
        e.target.classList.add("-error");
    }
}

let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirmpassword');
confirmPassword.addEventListener('input', checkPassword);
password.addEventListener('input', setPassword);
