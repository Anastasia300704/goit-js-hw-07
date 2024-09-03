const form = document.querySelector('.login-form');
form.addEventListener('submit', function(event) {
    event.preventDefault()
});
const formData = new FormData(form);
const formObject = {};
let allFieldsFilled = true;

Array.from(form.elements).forEach(element => {
    if (element.tagName === 'INPUT' && element.name) {
        const value = element.value.trim();
        formObject[element.name] = value;

        if (value === '') {
            allFieldsFilled = false;
        }
    }
});
if (!allFieldsFilled) {
    alert('All form fields must be filled in');
} else {
    console.log(formObject);
    form.reset();
}




