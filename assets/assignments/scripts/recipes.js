import {navbar,navbar2} from "../components/navbar.js";

let LoginData = JSON.parse(localStorage.getItem("userslogin")) || [];


if(LoginData.length==0){
    
    document.getElementById("navbar").innerHTML = navbar();
}else{
    document.getElementById("navbar").innerHTML = navbar2()
}

import {append,makeData,append2} from "../components/append.js"

let getData = async ()=>{
    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    let data = await res.json()
    append2(data.categories)
}

getData()