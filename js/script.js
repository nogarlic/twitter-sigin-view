const blueSignup = document.querySelector(".phone-signup button");
const blueSignupBox = document.querySelector(".sign-up");
const mainBox = document.querySelector(".main-site");
const closeButton1 = blueSignupBox.querySelector(".close");
const next1 = blueSignupBox.querySelector(".nxt-button button");
const signupStep2 = document.querySelector(".signup-step2");
const next2 = signupStep2.querySelector(".nxt-button button");
const signupStep3 = document.querySelector(".signup-step3");
const next3 = signupStep3.querySelector(".nxt-button button");
const back1 = signupStep2.querySelector(".back");
const back2 = signupStep3.querySelector(".back");
const verifyPhone = document.querySelector(".verify-phone");
const back3 = verifyPhone.querySelector(".edit");
const SignIn = document.querySelector(".signin-box button");
const SignInBox = document.querySelector(".sign-in");
const SignInClose = SignInBox.querySelector(".close");


blueSignup.onclick = ()=>{
    blueSignupBox.classList.add("activeSignup"); 
    mainBox.classList.add("activeMain")
    console.log("active phone-sign-up")
}

closeButton1.onclick = ()=>{
    blueSignupBox.classList.remove("activeSignup");
    mainBox.classList.remove("activeMain");
    console.log("Back to Main box");
}

next1.onclick = ()=>{
    signupStep2.classList.add("activeSignup-2");
    blueSignupBox.classList.remove("activeSignup");
}

back1.onclick = ()=>{
    signupStep2.classList.remove("activeSignup-2");
    blueSignupBox.classList.add("activeSignup");
}

next2.onclick = ()=>{
    signupStep3.classList.add("activeSignup-3");
    signupStep2.classList.remove("activeSignup-2");
}

back2.onclick = ()=>{
    signupStep3.classList.remove("activeSignup-3");
    signupStep2.classList.add("activeSignup-2");
}

next3.onclick = ()=>{
    verifyPhone.classList.add("activeVerify");
    signupStep3.classList.add("activeBlurSignup-3");
}

back3.onclick = ()=>{
    verifyPhone.classList.remove("activeVerify");
    signupStep3.classList.remove("activeBlurSignup-3");
}

SignIn.onclick = ()=>{
    SignInBox.classList.add("activeSignIn");
    mainBox.classList.add("activePlain");
}

SignInClose.onclick = ()=>{
    SignInBox.classList.remove("activeSignIn");
    mainBox.classList.remove("activePlain");
}


