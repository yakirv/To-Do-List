
import './styles.css';

import {UI}from './moduls/ui.js';
import {Storage} from './moduls/storage.js'

const ui = new UI; 
ui.renderProjectPage('home');
ui.addButton();
ui.homePage();
ui.createProjectList();
ui.getNewTaskDetails();

const storage = new Storage;
storage.storeProjects();