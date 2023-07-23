let cardData=[
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": true,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
];

displayDishes(cardData,"all");

// script for data managment
function getsAlldishes(){
    let allDishes = cardData.map((dish)=>dish);

    return allDishes;
}

function getsNonVegDishes(){
    let nonVegdishes = cardData.filter((dish)=>{
        if(dish.type === "non-veg"){
            return true;
        }
        else{
            return false;
        }
    });

    return nonVegdishes;
}


function getVegDishes(){

    let vegDishes = cardData.filter((dish)=>{
        if(dish.type === "veg"){
            return true;
        }
        else{
            return false;
        }
    });

    return vegDishes;
}



function displayDishes(dishArr, dishType){

    const dataContainer = document.getElementById("main-container");
          dataContainer.setAttribute("name",dishType)
          dataContainer.innerHTML = "";    
      
    dishArr.forEach((dish)=>{


        let {name, imageSrc, time, type, isLiked, rating} = dish;

        let cardTag = 
        `<div class="card">

            <div class="img-div">
                <img class="card-img" src="${imageSrc}" alt="no image" >
            </div>

            <p class = "catgory">${type}</p>

            <div class="food-info">
                <span class = "title">${name}</span>
                <span class = "rating"><img src="../frontEnd2-contest2/Frame 28.png"><span>${rating}</span></span>
            </div>

            <div class = "delivery-timing">
                <span class = "time">${time}</span>
                
                <div class = "like-div">
                <span class = "like"><i class="fa-regular fa-heart fa-lg ${isLiked ? "liked":""}"></i></span>
                <span class="coment"><img src="../frontEnd2-contest2/Vector (1).png"></span>
                </div>
            </div>
        </div>`;

    const tempContain = document.createElement("div");
    tempContain.innerHTML = cardTag;

    dataContainer.appendChild(tempContain);

    });

}




// script for categories
const allButton = document.getElementById("bt-all");
const vegButton = document.getElementById("bt-veg");
const nonButton = document.getElementById("bt-non-veg");


allButton.addEventListener('click',()=>{

        const alldish = getsAlldishes();
        displayDishes(alldish, "all");
});


vegButton.addEventListener('click',()=>{

    const vegdish = getVegDishes();
    displayDishes(vegdish,"veg");
});


nonButton.addEventListener('click',()=>{

    const nonVegdish = getsNonVegDishes();
    displayDishes(nonVegdish,"non-veg");
});


// script for radio buttons

const radio1 = document.getElementById("r-inp-1");
const radio2 = document.getElementById("r-inp-2");

radio1.addEventListener('change', ()=>{

    const mainVessel = document.getElementById("main-container");

    const nameValue = mainVessel.getAttribute("name");

    if(nameValue === "all"){
        let allDishes = getsAlldishes();
        let dishesWithRating4 = allDishes.filter((dish)=>dish.rating >= 4);

        displayDishes(dishesWithRating4,nameValue);
        return;
    }

    if(nameValue === "veg"){
        let vegDishes = getVegDishes();
        let dishesWithRating4 = vegDishes.filter((dish)=>dish.rating >= 4);

        displayDishes(dishesWithRating4,nameValue);
        return;
    }
    if(nameValue === "non-veg"){
        let nonVegDishes = getsNonVegDishes();
        let dishesWithRating4 = nonVegDishes.filter((dish)=>dish.rating >= 4);

        displayDishes(dishesWithRating4,nameValue);
        return;
    }
});

radio2.addEventListener('click', ()=>{

    const mainVessel = document.getElementById("main-container");

    const nameValue = mainVessel.getAttribute("name");

    if(nameValue === "all"){
        let allDishes = getsAlldishes();
        let dishesWithRating4 = allDishes.filter((dish)=>dish.rating < 4);

        displayDishes(dishesWithRating4,nameValue);
        return;
    }

    if(nameValue === "veg"){
        let vegDishes = getVegDishes();
        let dishesWithRating4 = vegDishes.filter((dish)=>dish.rating < 4);

        displayDishes(dishesWithRating4,nameValue);
        return;
    }
    if(nameValue === "non-veg"){
        let nonVegDishes = getsNonVegDishes();
        let dishesWithRating4 = nonVegDishes.filter((dish)=>dish.rating < 4);

        displayDishes(dishesWithRating4,nameValue);
        return;
    }
});

const searchInput = document.getElementById("nav-inp");
const searchIcon = document.getElementById("inp-icon");


// search bar script
searchIcon.addEventListener("click", ()=>{
                     
                    const val = searchInput.value;

                    let searchedItem = cardData.filter((dish)=>dish.name === val);
                    displayDishes(searchedItem,"none");
});



// js for link buttons

const lists = document.getElementsByTagName("li");
const listArr = Array.from(lists);

listArr.forEach((lis)=>{

    lis.addEventListener('click',(e)=>{
            const ele = document.getElementsByClassName("active")[0]; 
            ele.classList.toggle("active");
            e.target.classList.add("active");      

    });

});

const filterPop = document.getElementById("filterr");
const popup = document.getElementById("rad");

filterPop.addEventListener('click',()=>{
         popup.classList.toggle("radio-disp");
})