let currPassword = "";

const setPassword = (e) => {
    currPassword = e.target.value;
    console.log(currPassword);
}

const checkPassword = (e) => {
    let actualPass = document.getElementById('password');
    let pError = document.querySelector('p.error');

    if (e.target.value !== currPassword) {
        e.target.classList.add("-error");
        actualPass.classList.add("-error");
        pError.textContent = "* Passwords don't match!";
    } else {
        e.target.classList.remove("-error");
        actualPass.classList.remove("-error");
        pError.textContent = "";
    }
}

let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirmpassword');
confirmPassword.addEventListener('input', checkPassword);
password.addEventListener('input', setPassword);
