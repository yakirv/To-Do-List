const AddaboutPage = ()=>
{
    const content = document.getElementById('content');
    const dynamicContent = document.createElement('div');
    dynamicContent.id = 'dynamic-content'; 

    const aboutPage = document.createElement('div');
    aboutPage.id = 'about-page';
    aboutPage.className = 'about-page';

    const aboutPageHeader = addAboutHeader();
    aboutPage.appendChild(aboutPageHeader)

    const addressSection = addAddressSection();
    aboutPage.appendChild(addressSection);

    const contactSection = addContactSection();
    aboutPage.appendChild(contactSection);

    dynamicContent.appendChild(aboutPage);
    content.appendChild(dynamicContent);
}



function addAboutHeader ()
 {
    const aboutHeader = document.createElement('h1');
    aboutHeader.id = 'about-header';
    aboutHeader.innerText = 'About';
    return aboutHeader;
 }


 function addAddressSection ()
 {
    const addressContainer = document.createElement('div');
    addressContainer.id = 'address-container';
    addressContainer.className = 'about-container';
    
    const addressHeader = document.createElement('h2');
    addressHeader.id = 'address-header';
    addressHeader.className = 'address-header';
    addressHeader.innerText = 'Our Address';
    addressContainer.appendChild(addressHeader);

    const addressInfo = document.createElement('p');
    addressInfo.id = 'address';
    addressInfo.innerText = 'Rotchild 25, petah-tikva, Israel';
    addressContainer.appendChild(addressInfo);

    return addressContainer;
 }


 function addContactSection ()
 {
    const contactContainer = document.createElement('div');
    contactContainer.id = 'contact-container';
    contactContainer.className = 'contact-container';

    const contactHeader = document.createElement('h2');
    contactHeader.id = 'contact-header';
    contactHeader.innerText = 'Contact Us';
    contactContainer.appendChild(contactHeader);

    const contactInfo = document.createElement('p');
    contactInfo.id = 'contact-info';
    contactInfo.innerText = 'Customer Service tel.: 9720502305456';
    contactContainer.appendChild(contactInfo);

    return contactContainer;

 }


export {AddaboutPage};