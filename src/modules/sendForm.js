import { checkValidate } from "./checkValidate";

export const sendForm = ({ formId }) => {
    const form = document.querySelector(formId);
    const statusBlock = document.createElement('div');
    const loadText = document.createElement('div');
    const errorText = 'Произошла ошибка при отправке...';
    const successText = '<p>Спасибо! Наш менеджер с вами свяжется!</p>';


    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json());
    };

    const submitForm = () => {
        const formElements = form.querySelectorAll('input');

        const formData = new FormData(form);
        const formBody = {};

        formData.forEach((val, key) => {
            if (val !== '') {
                formBody[key] = val;
            }

        });

        if (checkValidate(formElements)) {
            loadText.classList.add('loader');
            statusBlock.append(loadText);
            form.append(statusBlock);
            sendData(formBody)
                .then(data => {
                    statusBlock.innerHTML = successText;
                    setTimeout(() => statusBlock.innerHTML = '', 3000);
                    formElements.forEach(input => {

                        if (input.type === "text" || input.type === "tel") {
                            input.value = '';
                        }

                    });
                })
                .catch(error => {
                    statusBlock.textContent = errorText;
                    setTimeout(() => statusBlock.innerHTML = '', 3000);
                    formElements.forEach(input => {

                        if (input.type === "text" || input.type === "tel") {
                            input.value = '';
                        }

                    });
                });
        }
    };

    try {
        if (!form) {
            throw new Error('Верните форму на место, пожалуйста!');
        }
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            submitForm();

        });
    } catch (error) {
        console.log(error.message);
    }


};