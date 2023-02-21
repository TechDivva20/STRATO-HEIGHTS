// signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault()

    // get users info
    const firstname = signupForm['signup-firstname'].value;
    const lastname = signupForm['signup-lastname'].value;
    const username = signupForm['signup-username'].value;
    const email = signupForm['signup-email'].value;
    const telephone = signupForm['signup-telephone'].value;
    const password = signupForm['signup-password'].value;
    const cpassword = signupForm['signup-cpassword'].value;

    // signup the user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log(cred)
    })
})