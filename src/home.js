import homeImage from "/src/images/homeImage.jpg";

  const homePageData = ()=>
{

const content = document.getElementById('content');
const dynamicContent = document.createElement('div');
dynamicContent.id = 'dynamic-content';

const homePage = document.createElement('div');
homePage.id = 'homepage';

const addHomeImage = addImage()
const addHomeDescription = addDescription();
const addHomeHeader = addHomePageHeader();

homePage.appendChild(addHomeHeader);
homePage.appendChild(addHomeDescription)
homePage.appendChild(addHomeImage);
dynamicContent.appendChild(homePage)

content.appendChild(dynamicContent);

}

function addHomePageHeader()
{
    const homeheader = document.createElement('p');
    homeheader.id = 'home-page-header';
    homeheader.innerHTML = "Chef's Delight Restaurant";

    return homeheader;

} 
const addImage = ()=>
{
    const imgContainer = document.createElement('div');
    imgContainer.id = 'img-container';

    const homePageImage = document.createElement('img');
    homePageImage.id = 'home-image';
    homePageImage.src = homeImage;
    imgContainer.appendChild(homePageImage);
    return imgContainer
};

const addDescription = ()=>
{   
    const descContainer = document.createElement('div');
    descContainer.id = 'description-container';

    const addReviewToDiv = AddReview()
    descContainer.appendChild(addReviewToDiv);

    const AddOpenHoursToDiv = AddOpenHours();
    descContainer.appendChild(AddOpenHoursToDiv);

    return descContainer;


};

const AddReview = ()=>
{   
    const reviewContainer = document.createElement('div');
    reviewContainer.id = 'review-container';
    reviewContainer.className = 'description';
    const review = document.createElement('p');
    review.id = 'review';
    review.innerText = "Welcome to Chef's Delight, where passion meets flavor. Our expert chefs craft every dish with fresh, locally-sourced ingredients, delivering a culinary experience that excites the senses. Join us for an unforgettable journey through delicious, authentic cuisine in a warm and inviting atmosphere."; 
   /*  review.innerText = 'Welcome to my restaurant';  */
    reviewContainer.appendChild(review);
    return reviewContainer;
};

const AddOpenHours = ()=>
{
    const openHoursContainer = document.createElement('div');
    openHoursContainer.id = 'open-hours-contianer';
    openHoursContainer.className = 'description';

    const openHours = document.createElement('p');
    openHours.id = 'open-hours-week';
    openHours.innerText = "Sunday - Thursday: 8am - 8pm";
    
    const openHoursWeekend = document.createElement('p');
    openHoursWeekend.id = 'open-hours-weekend';
    openHoursWeekend.innerText = "Friday - Saturday: 8am - 10pm";

    openHoursContainer.appendChild(openHours);
    openHoursContainer.appendChild(openHoursWeekend);

    return openHoursContainer;

};
 


export {homePageData}; 