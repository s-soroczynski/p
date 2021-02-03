import {
    surnameValidationHelper,
    emailValidationHelper,
    phoneNumberValidationHelper,
    descriptionValidationHelper,
    checkboxValidationHelper,
    submitValidationHelper,
} from './validators';
(function() {
    const formFieldsWrappers = () => {
        const inputSurnameWrapper = document.getElementById('surname');
        const inputEmailWrapper = document.getElementById('email');
        const inputNumberWrapper = document.getElementById('number');
        const inputDescriptionWrapper = document.getElementById('description');
        const inputRegulationsCheckboxWrapper = document.getElementById('regulations');

        return {
            surname: inputSurnameWrapper,
            email: inputEmailWrapper,
            number: inputNumberWrapper,
            description: inputDescriptionWrapper,
            regulations: inputRegulationsCheckboxWrapper,
        }
    }


    const formWrapper = document.getElementById('registrationFormWrapper');
    const fieldWrappers = formFieldsWrappers();
    const { surname, email, number, description, regulations } = fieldWrappers;
    const inputSurnameErrorNode = document.getElementById('surname-error');
    const inputEmailErrorNode = document.getElementById('email-error');
    const inputPhoneNumberErrorNode = document.getElementById('number-error');
    const inputDescriptionErrorNode = document.getElementById('description-error');
    const inputRegulationsErrorNode = document.getElementById('regulations-error');

    const surnameValidation = () => {
        surname.addEventListener('input', function(e) {
            surnameValidationHelper(e.target.value, this, inputSurnameErrorNode);
        });
    }

    const emailValidation = () => {
        email.addEventListener('input', function(e) {
            e.preventDefault();
            emailValidationHelper(e.target.value, this, inputEmailErrorNode)
        })
    }

    const numberValidation = () => {
        number.addEventListener('input', function(e) {
            e.preventDefault();
            phoneNumberValidationHelper(e.target.value, this, inputPhoneNumberErrorNode);
        })
    }

    const descriptionValidation = () => {
        description.addEventListener('input', function(e) {
            e.preventDefault();
            descriptionValidationHelper(e.target.value, this, inputDescriptionErrorNode);
        })
    }

    const regulationsValidation = () => {
        regulations.addEventListener('input', function(e) {
            e.preventDefault();
            checkboxValidationHelper(e.target.checked, inputRegulationsErrorNode);
        })
    }

    formWrapper.addEventListener('submit', e => {
        e.preventDefault();
        const fields = formFieldsWrappers();
        const { surname, email, number, description, regulations } = fields;

        const formValidators = [
            () => surnameValidationHelper(
                surname.value,
                surname,
                inputSurnameErrorNode
            ),
            () => emailValidationHelper(
                email.value,
                email,
                inputEmailErrorNode,
            ),
            () => phoneNumberValidationHelper(
                number.value,
                number,
                inputPhoneNumberErrorNode,
            ),
            () => descriptionValidationHelper(
                description.value,
                description,
                inputDescriptionErrorNode,
            ),
            () => checkboxValidationHelper(
                regulations.checked,
                inputRegulationsErrorNode
            ),
        ];
        submitValidationHelper(formValidators);
    })

    const registerValidation = () => {
        emailValidation();
        surnameValidation();
        numberValidation();
        descriptionValidation();
        regulationsValidation();
    }
    
    registerValidation();
})();