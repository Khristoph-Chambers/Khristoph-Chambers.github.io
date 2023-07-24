const firstname = document.getElementById('firstname')
const lastname = document.getElementById('lastname')
const emailaddress = document.getElementById('emailaddress')
const orgname = document.getElementById('orgname')
const orgemailaddress = document.getElementById('orgemailaddress')
const orgnum = document.getElementById('orgnum')
const billadd= document.getElementById('billadd')
const addline2 = document.getElementById('addline2')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const termsandcon = document.getElementById('termsandcon')
const tellus = document.getElementById('tellus')





form.addEventListener('submit', (e) => {
    
    
    e.preventDefault();
    let messages = []

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var isValidEmail = emailRegex.test(emailaddress);


    if (firstname.value === '' || firstname.value == null){
        messages.push('First name is required')
    }
    else {
    console.log('Just a test for First name')
    }

    if (lastname.value === '' || lastname.value == null){
        messages.push('Last name is required')
    }
    else {
    console.log('Just a test for Last name')
    }


    if (isValidEmail) {
        // Email is valid, submit the form
        console.log('Email Good!')
      } else {
        // Email is invalid, display an error message or perform any other validation logic
        messages.push('Invalid email address')
      }
    
    
    /*
    if(emailaddress.value === '' || emailaddress.value == null){
        messages.push('Email is required');
     } else if (!isValidEmail(emailaddress)) {
         messages.push('Provide a valid email address');
     } 
     else{
         console.log('Just a test for email')
     }
    */
    
     if (orgname.value === '' || orgname.value == null){
        messages.push('Organization name is required')
    }
    else {
    console.log('Just a test for Organization name')
    }
    if (orgnum.value === '' || orgnum.value == null){
        messages.push('Organization number is required')
    }
    else {
    console.log('Just a test for Organization numnber')
    }

    if (billadd.value === '' || billadd.value == null){
        messages.push('Billing Address is required')
    }
    else {
    console.log('Just a test for Billing Address')
    }

    if (addline2.value === '' || addline2.value == null){
        messages.push('Billing Address is required')
    }
    else {
    console.log('Just a test for Address')
    }

    if (tellus.value === '' || tellus.value == null){
        messages.push('Tell us about your company is required')
    }
    else {
    console.log('Just a test for Tell Us')
    }


    

    if (messages.length > 0){
        
        errorElement.innerText = messages.join(', ')
    }
    /*
    

    validateInputs();
    document.getElementById("form").reset(); */
})






/*
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};


const validateInputs = () => {
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    
    
    if (firstnameValue === ''){
        setError(firstname, 'First name is required');
    } else {
        setSuccess(firstname);
        console.log('Works')
    }

    if (lastnameValue === ''){
        setError(lastname, 'Last name is required');
    } else {
        setSuccess(lastname);
    }
    if (emailaddress === ''){
        setError
    }

}
*/
