let passwordLength = document.getElementById("passwordLength");
let password = document.getElementById("password");
let saveButtonPassword = document.getElementById("saveButtonPassword");


function generatePassword(len) {
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialCharacters = "!@#$%^&*()_+=[];'\\,./{}|:<>?~`";

    const data = lowerCase + upperCase + numbers + specialCharacters;
    let generator = '';
    for (let index = 0; index < len; index++) {
        generator += data[~~(Math.random() * data.length)];

    }
    return generator;
}
function getPassword() {
    const newPassword = generatePassword(passwordLength.value)
    password.value = newPassword;
}
function savePassword() {
    saveButtonPassword.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`password saya: ${password.value}`));
    saveButtonPassword.setAttribute('download', 'password.txt');
}

