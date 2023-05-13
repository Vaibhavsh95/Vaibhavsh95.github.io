import {navbar,navbar2} from "../components/navbar.js";

let LoginData = JSON.parse(localStorage.getItem("userslogin")) || [];


if(LoginData.length==0){
    
    document.getElementById("navbar").innerHTML = navbar();
}else{
    document.getElementById("navbar").innerHTML = navbar2()
}

import {append,makeData} from "../components/append.js";



let data1 = async()=>{
    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    let data = await res .json();
    return data.meals[0]
    
}


let main = async ()=>{
    let Maindata = await data1();
    makeData(Maindata)
}
main()

