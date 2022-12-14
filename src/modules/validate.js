import { checkValidate } from "./checkValidate";

export const validate = () => {
    
    const form = document.querySelector('#form-callback');

    const validateForm = (form) => {
        const inputs = form.querySelectorAll('input');
        inputs.forEach(input => {
            if(input.type === 'text') {
                input.addEventListener('input', ({target}) => {
                    target.value = target.value.replaceAll(/[^а-яё-\s]/gi, '');
                    if(target.classList.contains('error') && checkValidate([target])) {
                        target.classList.remove('error');
                    }
                });
            }
            if(input.type === 'tel') {
                input.addEventListener('input', ({target}) => {

                    if(target.classList.contains('error') && checkValidate([target])) {
                        target.classList.remove('error');
                    }
                });
            }
        });
    };
    validateForm(form);


};
