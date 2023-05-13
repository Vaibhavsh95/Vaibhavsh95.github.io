let append = (data)=>{
    let main = document.getElementById("main");
    main.innerHTML ="";
    data.forEach(function(e){
        let box = document.createElement("div");
        box.addEventListener("click" , function(){
            makeData(e)
        })
        let name = document.createElement("h4");
        name .innerText = e.strMeal;
        let Area = document.createElement("p");
        Area .innerText = e.strArea;
        let mass = document.createElement("p");
        mass .innerText = e.idMeal;

        box.append(name,Area,mass)
        main.append(box)
    })
}

function makeData(el){
    let main = document.getElementById("container");
    main.innerHTML =""
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = el.strMealThumb;
    let name = document.createElement("h3")
    name.innerText = el.strMeal
    let Area = document.createElement("h4")
    Area.innerText = el.strArea
    let data = document.createElement("p")
    data.innerText = el.strInstructions;
    div.append(img,name,Area,data);

    main.append(div)

}


function append2(data){
    let main = document.getElementById("container");
    data.forEach((el)=>{
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = el.strCategoryThumb;
        let name = document.createElement("h3")
        name.innerText = el.strCategory
        let Area = document.createElement("p")
        Area.innerText = el.strCategoryDescription;
        div.append(img,name,Area);

        main.append(div)
        
    })
}













export {append,makeData,append2};