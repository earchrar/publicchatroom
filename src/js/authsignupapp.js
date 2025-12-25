import { Authorize } from "./authorize.js";

// UI 

const signupform = document.getElementById("signupform");

// Register

signupform.addEventListener("submit",(e)=>{
    e.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("signupemail").value.trim();
    const password = document.getElementById("signuppassword").value.trim();

    console.log(fullname,email,password);

    const authorize = Authorize();
    authorize.registerUser(fullname,email,password);

});


