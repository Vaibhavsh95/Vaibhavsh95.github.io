// document.getElementById("btn").addEventListener("click" , function(){
//     console.log("Ojk")
// });

class SignUp{
    constructor(n,e,p){
        this.name = n;
        this.email =e;
        this.password =p
    }
}


let SignupData = JSON.parse(localStorage.getItem("users")) || []


function func1(){
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value;
    if(name==""){
        alert("Every Filed Is Required")
    }else if(email==""){
        alert("Every Filed Is Required")
    }else if(password==""){
        alert("Every Filed Is Required")
    }else{
        let s1 = new SignUp(name,email,password);
        SignupData.push(s1);
        alert("Account Created Successfully!")
        localStorage.setItem("users" , JSON.stringify(SignupData))
        window.location.href ="./login.html"
    }
}