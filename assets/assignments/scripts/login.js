
let SignupData = JSON.parse(localStorage.getItem("users")) || [];
let LoginData = JSON.parse(localStorage.getItem("userslogin")) || {};

class Login{
    constructor(e,p,n) {
        this.email = e
        this.password = p;
        this.name = n
    }
}

let func1 = ()=>{
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value;
    let filtered = filter(email,password)
    if(filtered.length>0){
        console.log(filtered)
        alert("Log In SuccessFully")
        let s1 = new Login(email,password,filtered[0].name)
        console.log(s1)
        localStorage.setItem("userslogin" , JSON.stringify(s1))
        window.location.href = "./index.html"
    }else{
        alert("Wrong Credential")
    }
}


function filter(email,password){
    console.log(SignupData)
    let filtered= SignupData.filter((e)=>{
        return e.email==email && e.password==password
    })
    console.log(filtered)
    if(filtered.length==0){
        return false
    }else{
        return filtered
    }
}