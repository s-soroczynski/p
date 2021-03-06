export const surnameValidationHelper = (value, inputNode, errorNode) => {
    if (value.length === 0) {
        errorNode.innerText = "Pole nie może być puste";
        errorNode.classList.add('error-active');
        inputNode.classList.add('error-active');
        return false;
    } else {
        errorNode.innerText = "";
        errorNode.classList.remove('error-active');
        inputNode.classList.remove('error-active');
        return true;
    }
}

export const emailValidationHelper = (value, inputNode, errorNode) => {
    const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (value.length === 0) {
        errorNode.innerText = "Pole nie może być puste";
        errorNode.classList.add('error-active');
        inputNode.classList.add('error-active');
        return false;
    } else if (!emailRegExp.test(String(value).toLowerCase())) {
        errorNode.innerText = "Niestety email jest nie poprawny";
        errorNode.classList.add('error-active');
        inputNode.classList.add('error-active');
        return false;
    } else {
        errorNode.innerText = "";
        errorNode.classList.remove('error-active');
        inputNode.classList.remove('error-active');
        return true;
    }
}

export const phoneNumberValidationHelper = (value, inputNode, errorNode) => {
    const phoneNumberRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,6}$/im;
    const regExpWhiteSpaces = /\s/g;
    const phoneVal = value.replace(regExpWhiteSpaces, "")
    if (value.length === 0) {
        errorNode.innerText = "Pole nie może być puste";
        errorNode.classList.add('error-active');
        inputNode.classList.add('error-active');
        return false;
    } else if (!phoneNumberRegExp.test(String(phoneVal).trim())) {
        errorNode.innerText = "Nie poprawny numer telefonu";
        errorNode.classList.add('error-active');
        inputNode.classList.add('error-active');
        return false;
    } else {
        errorNode.innerText = "";
        errorNode.classList.remove('error-active');
        inputNode.classList.remove('error-active');
        return true;
    }
}

export const descriptionValidationHelper = (value, inputNode, errorNode) => {
    if (value.length === 0) {
        errorNode.innerText = "Pole nie może być puste";
        errorNode.classList.add('error-active');
        inputNode.classList.add('error-active');
        return false;
    } else if (value.length >= 256) {
        errorNode.innerText = "Zbyt długo wiadomość";
        errorNode.classList.add('error-active');
        inputNode.classList.add('error-active');
        return false;
    } else {
        errorNode.innerText = "";
        errorNode.classList.remove('error-active');
        inputNode.classList.remove('error-active');
        return true;
    }
}

export const checkboxValidationHelper = (value, errorNode) => {
    if (value) {
        errorNode.innerText = "";
        errorNode.classList.remove('error-active');
        return true;
    } else {
        errorNode.innerText = "Regulamin musi być zaakceptowany";
        errorNode.classList.add('error-active');
        return false;
    }
}

export const submitValidationHelper = (validations = []) => {
    let status = true;

    validations.forEach(validator => {
        if (!status) {
            return status;
        }
        if (typeof validator === 'function') {
            status = validator();
        }
    });
    return status;
}