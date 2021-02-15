export function formValidation(el){
    const name = el.target.name;
    const namesRegExp = /^[А-Яа-яЁё\s]+$/;
    const mailRegExp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const phoneRegExp = /(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?/;
    const target = document.getElementsByName(name)[0];
    switch(name){
        case 'firstName':
        case 'lastName':
            if(namesRegExp.test(target.value)){
                target.setCustomValidity('');
                target.classList.add(`registration-form__`+ name+`_aproved`);
                return true
            }else {
                target.setCustomValidity("Имя и фамилия должны содержать только русские буквы");  
            }
            break;
        case 'email':
            if(mailRegExp.test(target.value)){
                target.setCustomValidity('');
                target.classList.add(`registration-form__`+ name+`_aproved`);
                return true
            }else {
                target.setCustomValidity("Почта должна быть введена в формате user@mail.com");
                }
            break;
        case 'phoneNumber':
            if(phoneRegExp.test(target.value)){
                target.setCustomValidity('');
                target.classList.add(`registration-form__phone_aproved`);
                return true
            }else {
                target.setCustomValidity("Телефон должен быть введен в формате +7(___)___-__-__");
                }
            break;
        default:
            return false;
    }
}
