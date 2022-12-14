export const checkValidate = elems => {
    let status = true;

    elems.forEach(elem => {
        switch (elem.getAttribute('name')) {
            case 'fio':
                if (/^[а-яё]{2,}/gi.test(elem.value.trim())) return;
                break;
            case 'tel':
                if(elem.value.length === 18) return;
                break;
            default: return;
        }

        status = false;
        elem.classList.add('error');

    });

    return status;
};