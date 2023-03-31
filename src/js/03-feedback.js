import throttle from "lodash.throttle";

const contactFormEl = document.querySelector('.feedback-form');
const userData = {};

const fillContactFormFields = () => {
    const userInfoFromLS = JSON.parse(localStorage.getItem('feedback-form-state'));
    
    if (userInfoFromLS === null) {
        return;
    }

    for (const key in userInfoFromLS) {
        contactFormEl.elements[key].value = userInfoFromLS[key];
        userData[key] = userInfoFromLS[key];  
    }
        
};

fillContactFormFields();

const onContactFormFieldChange = event => {

    const { target: contactFieldEl } = event;

    const contactFieldValue = contactFieldEl.value;
    const contactFieldName = contactFieldEl.name;
    
    userData[contactFieldName] = contactFieldValue;

    localStorage.setItem('feedback-form-state', JSON.stringify(userData));
    
};

const onContactFormSubmit = event => {
    event.preventDefault();

    
    contactFormEl.reset();
    localStorage.removeItem('feedback-form-state');
    console.log(userData);
    userData.email = '';
    userData.message = '';
};


contactFormEl.addEventListener('input', throttle(onContactFormFieldChange, 500));
contactFormEl.addEventListener('submit', onContactFormSubmit);






