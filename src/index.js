import './styles.css';
import {homePageData} from "./home.js";
import { menuPageData } from './menu.js';
import { AddaboutPage } from './about.js';

homePageData();  



const menuButton = document.getElementById('menu-button');
menuButton.addEventListener('click',()=>
    {
    const content = document.getElementById('content');
    const dynamicContent = document.getElementById('dynamic-content');
    content.removeChild(dynamicContent)
    menuPageData()});


    const homeButton = document.getElementById('home-button');
    homeButton.addEventListener('click',()=>
        {
        const content = document.getElementById('content');
        const dynamicContent = document.getElementById('dynamic-content');
        content.removeChild(dynamicContent)
        homePageData()})
    

        const aboutButton = document.getElementById('about-button');
        aboutButton.addEventListener('click',()=>
            {
            const content = document.getElementById('content');
            const dynamicContent = document.getElementById('dynamic-content');
             content.removeChild(dynamicContent)
             AddaboutPage()})