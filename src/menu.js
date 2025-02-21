const startersArray = 
[
    {'mealName': 'BEEF TATAKI','mealDesc': 'unagi, caviar, pickeld carrots', 'price': '12'},
    {'mealName': 'WOOD GRILLED BRUSCHETA','mealDesc': 'white beans, roasted garlic, sliced prosciutto', 'price': '10' },
    {'mealName': 'FRICASSEE OF WILD MUSHROOMS','mealDesc': 'sherry vinegar, truffeld pulenta', 'price': '14' },
];
const entreesArray = 
[
    {'mealName': 'Grilled Salmon with Herb Butter','mealDesc': 'Tender salmon fillet grilled to perfection, topped with aromatic herb butter and served with seasonal vegetables', 'price': '52'},
    {'mealName': 'Classic Beef Wellington','mealDesc': 'Prime beef tenderloin wrapped in puff pastry with mushroom duxelles, baked until golden brown', 'price': '50' },
    {'mealName': 'Handmade Pasta with Seasonal Vegetables','mealDesc': 'Freshly made pasta tossed with a medley of seasonal vegetables in a light garlic and olive oil sauce', 'price': '64' },
]


//{'mealName': '','mealDesc': '', 'price': '' },


const menuPageData = ()=>
    {
    const content = document.getElementById('content');
    const dynamicContent = document.createElement('div');
    dynamicContent.id = 'dynamic-content';
    const menuPage = document.createElement('div');
    menuPage.id = 'menu-page';  

    //-------Add starters section-------
    const startersSection = addStarters();
    menuPage.appendChild(startersSection);
    
    //-------Add entrees section-------
    const entreesSection = addMainCourses();
    menuPage.appendChild(entreesSection);

    dynamicContent.appendChild(menuPage);
    content.appendChild(dynamicContent)
    };


    const addStarters = ()=>
    {
        const startersContianers = document.createElement('div');
        startersContianers.id= 'starters-container';
        startersContianers.className= 'meals-section-container';

        const starterHeader = document.createElement('h1');
        starterHeader.id = 'starters-header';
        starterHeader.innerText = 'Starters';
        starterHeader.style.color = 'black';
        startersContianers.appendChild(starterHeader);

        startersArray.forEach(
        (meal)=>
         {
           const newMeal = addMeal(meal.mealName,meal.mealDesc,meal.price);
           startersContianers.appendChild(newMeal);
         }); 


        return startersContianers;
    
    };

    const addMainCourses = ()=>
    {
        const mainCourseContianers = document.createElement('div');
        mainCourseContianers.id= 'mainCourse-container';
        mainCourseContianers.className= 'meals-section-container';

        const mainCourseHeader = document.createElement('h1');
        mainCourseHeader.id = 'mainCourse-header';
        mainCourseHeader.innerText = 'Main Course';
        mainCourseHeader.style.color = 'black';
        mainCourseContianers.appendChild(mainCourseHeader);

        entreesArray.forEach(
        (meal)=>
         {
           const newMeal = addMeal(meal.mealName,meal.mealDesc,meal.price);
           mainCourseContianers.appendChild(newMeal);
         }); 


        return mainCourseContianers;
    
    }





    function addMeal(mealNameInput, mealDescInput, priceInput)
    { 
        const mealContainer = document.createElement('div');
        mealContainer.className = 'meal-container';

        const mealName = document.createElement('p');
        mealName.id= `meal-name-${mealNameInput}`;
        mealName.className = `meal-name`;
        mealName.innerText = mealNameInput;
        mealContainer.appendChild(mealName);

        const mealDesc = document.createElement('p');
        mealDesc.id = `meal-desc-${mealNameInput}`;
        mealDesc.className = 'meal-desc';
        mealDesc.innerText = mealDescInput;
        mealContainer.appendChild(mealDesc);

        const mealPrice = document.createElement('p');
        mealPrice.id = `meal-price-${mealNameInput}`;
        mealPrice.innerText = priceInput;
        mealContainer.appendChild(mealPrice);

        return mealContainer;

    }

    export {menuPageData};