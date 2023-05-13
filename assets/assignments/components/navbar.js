let navbar =()=>{
    return `        <div>          
    <h3>
        <a href="index.html">Home</a>
    </h3>
</div>
<div>
    <h3 id="change">
        <a href="login.html">Log In</a>
    </h3>
    <h3>
        <a href="recipeofdat.html">Receipe Of The Day</a>
    </h3>
    <h3>
        <a href="recipes.html">Our Recepies</a>
    </h3>
</div>
</div>`
}
let LoginData = JSON.parse(localStorage.getItem("userslogin")) || [];


let navbar2 =()=>{
    return `        <div>          
    <h3>
        <a href="index.html">Home</a>
    </h3>
</div>
<div>
    <h3 id="change">
        <a href="login.html">${LoginData.name}</a>
    </h3>
    <h3>
        <a href="recipeofdat.html">Receipe Of The Day</a>
    </h3>
    <h3>
        <a href="recipes.html">Our Recepies</a>
    </h3>
</div>
</div>`
}

export {navbar ,navbar2}