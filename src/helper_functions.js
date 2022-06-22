function emailValidator() {
    const email = document.getElementById("emailField");
    const emailRegex = /^[^@]+@[^@.]+\.[a-z]+$/i;
    let emailValue = sanitize(email.value);
    if(emailRegex.test(emailValue)) {
        return true;
    }

    return false;
}

function sanitize(string) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        "/": '&#x2F;',
        "`": '&grave;',
    };
    const reg = /[&<>"'/`]/ig;
    return string.replace(reg, (match)=>(map[match]));
  }

export { emailValidator };
