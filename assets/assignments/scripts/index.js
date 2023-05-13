import {append} from "../components/append.js"

let LoginData = JSON.parse(localStorage.getItem("userslogin")) || [];


if(LoginData.length==0){
    document.getElementById("navbar").innerHTML = navbar();
}else{
    document.getElementById("navbar").innerHTML = navbar2()
}


let getData = async ()=>{ 
    let query = document.getElementById("query").value; 
    if(query==""){
        window.location.reload()
    }else{
        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        let data = await res.json()
        console.log(data)
        append(data.meals)
    }
}
document.getElementById("query").addEventListener("input",getData)



// document.getElementById("navbar").innerHTML = navbar();

import {navbar,navbar2} from "../components/navbar.js";