function emailValidator() {
    const email = document.getElementById("emailField");
    const emailRegex = /^[^@]+@[^@.]+\.[a-z]+$/i;
    let emailValue = email.value;
    if(emailRegex.test(emailValue)) {
        return true;
    }

    return false;
}

export { emailValidator };
