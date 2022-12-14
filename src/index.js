import { modal } from './modules/modal';
import { scrollBy } from './modules/scroll';
import { sliders } from './modules/sliders';
import { accordeon } from './modules/accordeon';
import { maskPhone } from './modules/maskPhone';
import { validate } from './modules/validate';
import { sendForm } from './modules/sendForm';

modal('.callback-btn');
modal('.services-modal');
scrollBy();
sliders();
accordeon();
maskPhone('input[name="tel"]', '+7 (___) ___-__-__');
validate();
sendForm({
    formId: '#form-callback', 
});