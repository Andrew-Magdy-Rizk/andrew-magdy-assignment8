var cardContainer = window.document.getElementById("main");

var currentActiveTab = "ingredients";





var productList = [
    {
        id: 1,
        image: { src: "images/food-1.jpg", alt: "Greek Moussaka" },
        rating: { value: 4.4, reviews: 198 },
        meta: { prepTime: "30 min", cookTime: "45 min", servings: 4 },
        tags: ["Intermediate", "Mediterranean"],
        title: "Greek Moussaka",
        description: "Traditional Greek layered eggplant casserole with minced lamb",

        warning: {
            show: true,
            title: "Extended Preparation Time",
            message: "This recipe takes more than 1 hour including baking."
        },

        ingredients: [
            "2 large eggplants",
            "500g minced lamb",
            "1 onion",
            "2 cloves garlic",
            "400g tomato sauce",
            "Olive oil",
            "Salt",
            "Black pepper"
        ],

        instructions: [
            "Slice eggplants and salt them",
            "Grill eggplants until soft",
            "Cook minced lamb with onion and garlic",
            "Add tomato sauce and simmer",
            "Layer eggplant and meat in baking dish",
            "Bake at 180°C for 45 minutes"
        ],

        nutrition: {
            calories: "480 kcal",
            protein: "18g",
            carbohydrates: "40g",
            fat: "28g",
            fiber: "6g",
            sodium: "900mg"
        },

        chefTips: [
            "Let the dish rest before slicing",
            "Use fresh eggplants",
            "Do not skip bechamel layer",
            "Bake until golden on top"
        ]
    },

    {
        id: 2,
        image: { src: "images/food-2.jpg", alt: "Margherita Pizza" },
        rating: { value: 4.7, reviews: 420 },
        meta: { prepTime: "20 min", cookTime: "15 min", servings: 2 },
        tags: ["Easy", "Italian"],
        title: "Margherita Pizza",
        description: "Classic Italian pizza with tomato and mozzarella",
        warning: { show: false },

        ingredients: [
            "Pizza dough",
            "Tomato sauce",
            "Fresh mozzarella",
            "Olive oil",
            "Fresh basil",
            "Salt",
            "Oregano"
        ],

        instructions: [
            "Preheat oven to high temperature",
            "Stretch pizza dough",
            "Spread tomato sauce evenly",
            "Add mozzarella slices",
            "Bake until crust is golden",
            "Top with basil and olive oil"
        ],

        nutrition: {
            calories: "520 kcal",
            protein: "22g",
            carbohydrates: "60g",
            fat: "20g",
            fiber: "4g",
            sodium: "800mg"
        },

        chefTips: [
            "Use pizza stone if available",
            "Do not overload toppings",
            "Bake on lowest rack",
            "Serve immediately"
        ]
    },

    {
        id: 3,
        image: { src: "images/food-3.jpg", alt: "Koshary" },
        rating: { value: 4.9, reviews: 1020 },
        meta: { prepTime: "25 min", cookTime: "30 min", servings: 5 },
        tags: ["Egyptian", "Vegan"],
        title: "Egyptian Koshary",
        description: "Rice, lentils, pasta with tomato sauce and fried onions",
        warning: { show: false },
        ingredients: [
            "Rice",
            "Brown lentils",
            "Pasta",
            "Chickpeas",
            "Tomato sauce",
            "Garlic",
            "Vinegar",
            "Fried onions"
        ],

        instructions: [
            "Cook lentils until tender",
            "Boil pasta separately",
            "Cook rice",
            "Prepare tomato sauce",
            "Heat chickpeas",
            "Assemble layers and top with onions"
        ],

        nutrition: {
            calories: "560 kcal",
            protein: "20g",
            carbohydrates: "90g",
            fat: "10g",
            fiber: "12g",
            sodium: "700mg"
        },

        chefTips: [
            "Serve hot",
            "Add garlic vinegar for flavor",
            "Use crispy onions",
            "Mix before eating"
        ]
    },

    {
        id: 4,
        image: { src: "images/food-4.jpg", alt: "Beef Burger" },
        rating: { value: 4.6, reviews: 310 },
        meta: { prepTime: "15 min", cookTime: "10 min", servings: 1 },
        tags: ["Fast Food", "American"],
        title: "Classic Beef Burger",
        description: "Juicy grilled beef burger with cheese",
        warning: { show: false },

        ingredients: [
            "Beef patty",
            "Burger bun",
            "Cheddar cheese",
            "Lettuce",
            "Tomato",
            "Onion",
            "Salt",
            "Black pepper"
        ],

        instructions: [
            "Season beef patty",
            "Heat grill pan",
            "Grill patty to desired doneness",
            "Toast burger bun",
            "Melt cheese on patty",
            "Assemble burger"
        ],

        nutrition: {
            calories: "650 kcal",
            protein: "30g",
            carbohydrates: "45g",
            fat: "38g",
            fiber: "3g",
            sodium: "950mg"
        },

        chefTips: [
            "Do not press patty",
            "Use high heat",
            "Rest meat briefly",
            "Serve fresh"
        ]
    },

    {
        id: 5,
        image: { src: "images/food-5.jpg", alt: "Chicken Curry" },
        rating: { value: 4.5, reviews: 275 },
        meta: { prepTime: "20 min", cookTime: "35 min", servings: 4 },
        tags: ["Indian", "Spicy"],
        title: "Chicken Curry",
        description: "Spiced chicken curry with creamy sauce",
        warning: { show: true, title: "Spicy Dish", message: "Adjust chili to taste" },

        ingredients: [
            "Chicken breast",
            "Onion",
            "Garlic",
            "Ginger",
            "Curry spices",
            "Coconut milk",
            "Oil"
        ],

        instructions: [
            "Sauté onion in oil",
            "Add garlic and ginger",
            "Add chicken and brown",
            "Stir in spices",
            "Pour coconut milk",
            "Simmer until cooked"
        ],

        nutrition: {
            calories: "430 kcal",
            protein: "26g",
            carbohydrates: "15g",
            fat: "28g",
            fiber: "4g",
            sodium: "650mg"
        },

        chefTips: [
            "Adjust spice level",
            "Simmer slowly",
            "Serve with rice",
            "Garnish with herbs"
        ]
    },

    {
        id: 6,
        image: { src: "images/food-6.jpg", alt: "Pasta Alfredo" },
        rating: { value: 4.3, reviews: 190 },
        meta: { prepTime: "10 min", cookTime: "20 min", servings: 3 },
        tags: ["Italian", "Creamy"],
        title: "Pasta Alfredo",
        description: "Creamy pasta with parmesan cheese",
        warning: { show: false },

        ingredients: [
            "Pasta",
            "Butter",
            "Cream",
            "Garlic",
            "Parmesan cheese",
            "Salt",
            "Black pepper"
        ],

        instructions: [
            "Boil pasta until al dente",
            "Melt butter in pan",
            "Add garlic briefly",
            "Pour cream and simmer",
            "Add parmesan",
            "Mix pasta with sauce"
        ],

        nutrition: {
            calories: "610 kcal",
            protein: "18g",
            carbohydrates: "55g",
            fat: "35g",
            fiber: "2g",
            sodium: "820mg"
        },

        chefTips: [
            "Use fresh parmesan",
            "Do not overcook pasta",
            "Serve immediately",
            "Add chicken if desired"
        ]
    },

    {
        id: 7,
        image: { src: "images/food-7.jpg", alt: "Falafel" },
        rating: { value: 4.8, reviews: 860 },
        meta: { prepTime: "20 min", cookTime: "10 min", servings: 4 },
        tags: ["Middle Eastern", "Vegan"],
        title: "Falafel",
        description: "Crispy fried chickpea patties",
        warning: { show: false },

        ingredients: [
            "Chickpeas",
            "Parsley",
            "Cilantro",
            "Garlic",
            "Onion",
            "Cumin",
            "Salt",
            "Oil"
        ],

        instructions: [
            "Soak chickpeas overnight",
            "Blend ingredients",
            "Rest mixture",
            "Shape patties",
            "Heat oil",
            "Fry until golden"
        ],

        nutrition: {
            calories: "330 kcal",
            protein: "13g",
            carbohydrates: "30g",
            fat: "18g",
            fiber: "8g",
            sodium: "400mg"
        },

        chefTips: [
            "Do not use canned chickpeas",
            "Oil must be hot",
            "Serve with tahini",
            "Eat fresh"
        ]
    },

    {
        id: 8,
        image: { src: "images/food-8.jpg", alt: "Sushi Rolls" },
        rating: { value: 4.6, reviews: 340 },
        meta: { prepTime: "40 min", cookTime: "0 min", servings: 2 },
        tags: ["Japanese", "Seafood"],
        title: "Sushi Rolls",
        description: "Fresh sushi rolls with salmon",
        warning: {
            show: true,
            title: "Raw Fish",
            message: "Use sushi-grade salmon only"
        },

        ingredients: [
            "Sushi rice",
            "Rice vinegar",
            "Nori sheets",
            "Salmon",
            "Avocado",
            "Cucumber",
            "Soy sauce"
        ],

        instructions: [
            "Cook sushi rice",
            "Season rice with vinegar",
            "Prepare fillings",
            "Lay nori on mat",
            "Roll tightly",
            "Slice and serve"
        ],

        nutrition: {
            calories: "390 kcal",
            protein: "20g",
            carbohydrates: "45g",
            fat: "12g",
            fiber: "4g",
            sodium: "500mg"
        },

        chefTips: [
            "Use sushi-grade fish",
            "Wet knife before cutting",
            "Roll tightly",
            "Serve fresh"
        ]
    },

    {
        id: 9,
        image: { src: "images/food-9.jpg", alt: "Pancakes" },
        rating: { value: 4.7, reviews: 510 },
        meta: { prepTime: "10 min", cookTime: "10 min", servings: 3 },
        tags: ["Breakfast", "Sweet"],
        title: "Fluffy Pancakes",
        description: "Soft pancakes with maple syrup",
        warning: { show: false },

        ingredients: [
            "Flour",
            "Milk",
            "Eggs",
            "Sugar",
            "Baking powder",
            "Butter",
            "Vanilla"
        ],

        instructions: [
            "Mix dry ingredients",
            "Whisk wet ingredients",
            "Combine gently",
            "Heat pan",
            "Pour batter",
            "Flip and cook"
        ],

        nutrition: {
            calories: "420 kcal",
            protein: "10g",
            carbohydrates: "55g",
            fat: "16g",
            fiber: "3g",
            sodium: "450mg"
        },

        chefTips: [
            "Do not overmix",
            "Cook on medium heat",
            "Flip once bubbles appear",
            "Serve warm"
        ]
    },

    {
        id: 10,
        image: { src: "images/food-10.jpg", alt: "Grilled Steak" },
        rating: { value: 4.8, reviews: 290 },
        meta: { prepTime: "10 min", cookTime: "15 min", servings: 1 },
        tags: ["Grill", "Protein"],
        title: "Grilled Beef Steak",
        description: "Tender grilled beef steak",

        warning: { show: false },

        ingredients: [
            "Beef steak",
            "Olive oil",
            "Salt",
            "Black pepper",
            "Garlic",
            "Rosemary"
        ],

        instructions: [
            "Season steak",
            "Preheat grill",
            "Sear steak",
            "Flip once",
            "Grill to doneness",
            "Rest before serving"
        ],

        nutrition: {
            calories: "550 kcal",
            protein: "42g",
            carbohydrates: "0g",
            fat: "38g",
            fiber: "0g",
            sodium: "600mg"
        },

        chefTips: [
            "Let meat reach room temp",
            "Use high heat",
            "Rest before slicing",
            "Season simply"
        ]
    }
];



getRondomProduct();

function changeProduct(id) {
    var activeTabBtn = document.querySelector(
        '#myTab .nav-link.active'
    );

    if (activeTabBtn) {
        currentActiveTab = activeTabBtn.getAttribute("data-bs-target").replace("#", "");
    }

    getRondomProduct(id);
}

function getRondomProduct(id) {
    var product = productList[Math.floor(Math.random() * productList.length)];

    while (product.id === id) {

        product = productList[Math.floor(Math.random() * productList.length)];
    }

    displayProduct(product);
}


function warningMsg(warning) {

    if (warning.show === true) {
        return `<div
                    class="warning-msg d-flex align-items-center gap-3 px-4 py-3 rounded-3 bg-danger bg-opacity-10 border-start border-4 border-danger mb-4">
                    <div>
                        <i class="fa-solid fa-warning fa-lg text-danger"></i>
                    </div>
                    <div>
                        <p class="mb-1 text-danger-emphasis fw-bold">${warning.title}</p>
                        <p class="m-0 text-danger">${warning.message}</p>
                    </div>
                </div>`
    } else {
        return "";
    }
}

function addIngredients(ingredients) {
    var boxIngredients = ``;
    for (var i = 0; i < ingredients.length; i++) {
        boxIngredients += `<li class="list-group-item d-flex align-items-center gap-2 bg-transparent border-0">
                                <span class="badge text-bg-primary rounded-circle">${i + 1}</span>
                                ${ingredients[i]}
                            </li>
                            `
    }

    return boxIngredients;

}




function displayProduct(product) {
    var box = `
     <div id="card"
            class="container-fluid container-lg card m-0 flex-grow-1 w-100 flex-lg-row rounded-4 overflow-hidden p-0 shadow">
            <div class="pref position-relative col-lg-5">
                <img src=${product.image.src} alt=${product.image.alt} class="w-100 h-100 object-fit-cover">
                <div class="rate bg-white position-absolute rounded-pill px-3 py-2 shadow"><i
                        class="fa-solid fa-star text-warning me-2"></i> <span class="fw-bold">${product.rating.value}</span> <span
                        class="text-body-secondary">(${product.rating.reviews}
                        reviews)</span></div>
                <div
                    class="description bg-white position-absolute rounded-4 py-3 start-50 translate-middle-x d-flex gap-4 text-center justify-content-between align-items-center p-4">
                    <div class="d-flex flex-column gap-2 justify-content-center align-items-center flex-grow-1">
                        <div>
                            <i class="fa-solid fa-clock fa-xl text-primary"></i>
                        </div>
                        <p class="text-body-secondary text-nowrap m-0">Prep Time</p>
                        <span class="fw-bold">${product.meta.prepTime}</span>
                    </div>
                    <div class="d-flex flex-column gap-2 justify-content-center align-items-center flex-grow-1">
                        <div>
                            <i class="fa-solid fa-fire-burner fa-xl text-danger"></i>
                        </div>
                        <p class="text-body-secondary text-nowrap m-0">Cook Time</p>
                        <span class="fw-bold">${product.meta.cookTime}</span>
                    </div>
                    <div class="d-flex flex-column gap-2 justify-content-center align-items-center flex-grow-1">
                        <div>
                            <i class="fa-solid fa-users fa-xl text-info"></i>
                        </div>
                        <p class="text-body-secondary text-nowrap m-0">Servings</p>
                        <span class="fw-bold">${product.meta.servings} people</span>
                    </div>
                </div>
            </div>
            <div class="col-lg-7 p-4 overflow-y-auto">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <div>
                        <div class="mb-3 tags">
                            <div><span class="rounded-pill fw-bold text-center p-2 py-1 me-2">${product.tags[0]}</span><span
                                    class="rounded-pill fw-bold text-center p-2 py-1">${product.tags[1]}n</span></div>
                        </div>
                        <h2 class="fs-1 fw-bold">${product.title}</h2>
                        <p class="text-body-secondary fs-6 fw-semibold">${product.description}
                        </p>
                    </div>
                    <div class="d-flex gap-2">
                        <div class="button p-3 rounded-4 bg-primary bg-opacity-25"><i
                                class="fa-solid fa-bookmark text-primary"></i></div>
                        <div class="button p-3 rounded-4 bg-primary bg-opacity-25"><i
                                class="fa-solid fa-share-nodes text-primary"></i></div>
                    </div>
                </div>
                ${warningMsg(product.warning)}
                <div>
                    <ul class="nav nav-tabs mb-3 border-0 row" id="myTab" role="tablist">
                        <li class="nav-item col-3" role="presentation">
                            <button class="nav-link active border-0 fw-bold" id="ingredients-tab" data-bs-toggle="tab"
                                data-bs-target="#ingredients" type="button" role="tab" aria-controls="ingredients"
                                aria-selected="true"><i
                                    class="fa-solid fa-list-check fa-xs me-1"></i>Ingredients</button>
                        </li>
                        <li class="nav-item col-3" role="presentation">
                            <button class="nav-link border-0 fw-bold" id="instructions-tab" data-bs-toggle="tab"
                                data-bs-target="#instructions" type="button" role="tab" aria-controls="instructions"
                                aria-selected="false"><i
                                    class="fa-solid fa-book-open fa-xs me-1"></i>Instructions</button>
                        </li>
                        <li class="nav-item col-3" role="presentation">
                            <button class="nav-link border-0 fw-bold" id="nutrition-tab" data-bs-toggle="tab"
                                data-bs-target="#nutrition" type="button" role="tab" aria-controls="nutrition"
                                aria-selected="false"><i class="fa-solid fa-chart-pie fa-xs me-1"></i>Nutrition</button>
                        </li>
                        <li class="nav-item col-3" role="presentation">
                            <button class="nav-link border-0 fw-bold" id="chef-tips-tab" data-bs-toggle="tab"
                                data-bs-target="#chef-tips" type="button" role="tab" aria-controls="chef-tips"
                                aria-selected="false"><i class="fa-solid fa-lightbulb fa-xs me-1"></i>Chef's
                                Tips</button>
                        </li>
                    </ul>
                    <div class="tab-content border-top border-bottom py-4" id="myTabContent">
                        <div class="tab-pane fade show active bg-warning bg-opacity-10 overflow-y-auto rounded-4 p-3"
                            id="ingredients" role="tabpanel" aria-labelledby="ingredients-tab" tabindex="0">
                            <ul class="list-group bg-transparent">
                                ${addIngredients(product.ingredients)}
                            </ul>
                        </div>
                        <div class="tab-pane fade overflow-y-auto" id="instructions" role="tabpanel"
                            aria-labelledby="instructions-tab" tabindex="0">
                            <ul class="list-group bg-transparent">
                                <li class="list-group-item d-flex align-items-center gap-2 bg-transparent border-0">
                                    <span class="badge text-bg-primary rounded-4 fs-4 p-3">1</span>
                                    ${product.instructions[0]}
                                </li>
                                <li class="list-group-item d-flex align-items-center gap-2 bg-transparent border-0">
                                    <span class="badge text-bg-primary rounded-4 fs-4 p-3">2</span>

                                    ${product.instructions[1]}
                                </li>
                                <li class="list-group-item d-flex align-items-center gap-2 bg-transparent border-0">
                                    <span class="badge text-bg-primary rounded-4 fs-4 p-3">3</span>
                                    ${product.instructions[2]}
                                </li>
                                <li class="list-group-item d-flex align-items-center gap-2 bg-transparent border-0">
                                    <span class="badge text-bg-primary rounded-4 fs-4 p-3">4</span>
                                    ${product.instructions[3]}
                                </li>
                                <li class="list-group-item d-flex align-items-center gap-2 bg-transparent border-0">
                                    <span class="badge text-bg-primary rounded-4 fs-4 p-3">5</span>
                                    ${product.instructions[4]}
                                </li>
                                <li class="list-group-item d-flex align-items-center gap-2 bg-transparent border-0">
                                    <span class="badge text-bg-primary rounded-4 fs-4 p-3">6</span>
                                    ${product.instructions[5]}
                                </li>
                            </ul>
                        </div>
                        <div class="container-fluid tab-pane fade overflow-y-auto" id="nutrition" role="tabpanel"
                            aria-labelledby="nutrition-tab" tabindex="0">
                            <div class="row g-3">
                                <div class="col-lg-6 bg-body-secondary bg-opacity-25 rounded-4 p-3">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div><span class="rounded-3 bg-primary bg-opacity-10 me-2 p-2"><i
                                                    class="fa-solid fa-fire text-primary"></i></span>
                                            <span>Calories</span></div>
                                        <h3 class="fw-bold fs-5">${product.nutrition.calories}</h3>
                                    </div>
                                </div>
                                <div class="col-lg-6 bg-body-secondary bg-opacity-25 rounded-4 p-3">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div><span class="rounded-3 bg-info bg-opacity-10 me-2 p-2"><i
                                                    class="fa-solid fa-dumbbell text-info"></i></span>
                                            <span>Protein</span></div>
                                        <h3 class="fw-bold fs-5">${product.nutrition.protein}</h3>
                                    </div>
                                </div>
                                <div class="col-lg-6 bg-body-secondary bg-opacity-25 rounded-4 p-3">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div><span class="rounded-3 bg-warning bg-opacity-10 me-2 p-2"><i
                                                    class="fa-solid fa-wheat-awn text-warning"></i></span>
                                            <span>Carbohydrates</span></div>
                                        <h3 class="fw-bold fs-5">${product.nutrition.carbohydrates}</h3>
                                    </div>
                                </div>
                                <div class="col-lg-6 bg-body-secondary bg-opacity-25 rounded-4 p-3">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div><span class="rounded-3 bg-danger bg-opacity-25 me-2 p-2"><i
                                                    class="fa-solid fa-droplet text-danger"></i></span> <span>Fat</span>
                                        </div>
                                        <h3 class="fw-bold fs-5">${product.nutrition.fat}</h3>
                                    </div>
                                </div>
                                <div class="col-lg-6 bg-body-secondary bg-opacity-25 rounded-4 p-3">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div><span class="rounded-3 bg-success bg-opacity-10 me-2 p-2"><i
                                                    class="fa-solid fa-seedling text-success"></i></span>
                                            <span>Fiber</span></div>
                                        <h3 class="fw-bold fs-5">${product.nutrition.fiber}</h3>
                                    </div>
                                </div>
                                <div class="col-lg-6 bg-body-secondary bg-opacity-25 rounded-4 p-3">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div><span class="rounded-3 bg-danger bg-opacity-10 me-2 p-2"><i
                                                    class="fa-solid fa-cube text-danger"></i></span> <span>Sodium</span>
                                        </div>
                                        <h3 class="fw-bold fs-5">${product.nutrition.sodium}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade overflow-y-auto" id="chef-tips" role="tabpanel"
                            aria-labelledby="chef-tips-tab" tabindex="0">
                            <div
                                class="warning-msg d-flex align-items-center gap-3 px-4 py-3 rounded-4 bg-warning bg-opacity-10 border-start border-4 border-warning mb-3">
                                <div>
                                    <i class="fa-solid fa-circle-check fa-lg text-warning"></i>
                                </div>
                                <div>
                                    <p class="mb-1 fs-6">${product.chefTips[0]}</p>
                                </div>
                            </div>
                            <div
                                class="warning-msg d-flex align-items-center gap-3 px-4 py-3 rounded-4 bg-warning bg-opacity-10 border-start border-4 border-warning mb-3">
                                <div>
                                    <i class="fa-solid fa-circle-check fa-lg text-warning"></i>
                                </div>
                                <div>
                                    <p class="mb-1 fs-6">${product.chefTips[1]}</p>
                                </div>
                            </div>
                            <div
                                class="warning-msg d-flex align-items-center gap-3 px-4 py-3 rounded-4 bg-warning bg-opacity-10 border-start border-4 border-warning mb-3">
                                <div>
                                    <i class="fa-solid fa-circle-check fa-lg text-warning"></i>
                                </div>
                                <div>
                                    <p class="mb-1 fs-6">${product.chefTips[2]}</p>
                                </div>
                            </div>
                            <div
                                class="warning-msg d-flex align-items-center gap-3 px-4 py-3 rounded-4 bg-warning bg-opacity-10 border-start border-4 border-warning">
                                <div>
                                    <i class="fa-solid fa-circle-check fa-lg text-warning"></i>
                                </div>
                                <div>
                                    <p class="mb-1 fs-6">${product.chefTips[3]}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pt-3">
                    <button type="button" onclick="changeProduct(${product.id})" class="btn bg-primary bg-gradient text-white fw-bold py-3 px-4 rounded-4"><i
                            class="fa-solid fa-arrows-rotate fa-lg me-2"></i><a href="#" class="">Try Another Recipe</a></button>
                </div>
            </div>
        </div>
    `

    setTimeout(() => {
    var tabBtn = document.querySelector(
        `button[data-bs-target="#${currentActiveTab}"]`
    );

    if (tabBtn) {
        new bootstrap.Tab(tabBtn).show();
    }
}, 0);



    cardContainer.innerHTML = box;
}