
import { Storage } from "./storage.js";
import { format  } from "date-fns";

export let tasks = [{title:'Pay-bills',descriptiopn:'Pay electric bill',priority: '2',project:'Today',date: '04/03/2024'}, 
    {title:'Learn JS',descriptiopn:'Finish the projects',priority: '1',project:'Today', date: '04/05/2022'}, 
    {title:'Gym',descriptiopn:'Work hard',priority: '3',project:'Week', date: '01/01/2025'}]

 export class UI
 {
     storage = new Storage;
     
     
     format(datenew)
     {
         date = datenew.matc;
         const formatted = 'dd/mm/yyyy';
         return formatted;
     };
  
    
     addButton = ()=>
    {
        const newTaskBtn = document.getElementById('new-task-button');
        const newTaskDialog =document.getElementById ('new-task-popup');
        
        newTaskBtn.addEventListener('click',()=>{
            newTaskDialog.showModal();
            });
    }
      
    
    
    createProjectList = ()=>
    {
        const projectList = localStorage.getItem('projects');
        const storedProjectsList =JSON.parse(projectList);
        const projectMenu = document.getElementById('projects-menu');
        const projectsListDropdown =  document.getElementById('new-task-project');
        
    
        if (this.storage.storageAvailable)
        {storedProjectsList.forEach(project => {
           const popupProjectsDropdown = document.createElement('option');
           popupProjectsDropdown.text = project;
           popupProjectsDropdown.value= project;
           projectsListDropdown.appendChild(popupProjectsDropdown)
           const projectMenuItems = document.createElement('button');
           projectMenuItems.textContent = project;
           projectMenuItems.id = `project-menu-${project}`;
           projectMenuItems.addEventListener('click',()=>{
            this.renderProjectPage(project)
           })
           projectMenu.appendChild(projectMenuItems);
           
    
        });}
    }
   
    
     renderProjectPage =(project)=>
    {
        const content = document.getElementById('content');
        if (content && content.firstChild)
        {
            content.removeChild(content.firstElementChild)
        }
       const sortedTasks= this.storage.sortTasksByDate(tasks, 'date' , false);
        console.log(tasks);
        console.log(sortedTasks);
        
        const projectPage = document.createElement('div');
        

        projectPage.id  = `${project}-page`;
        content.appendChild(projectPage);
         const refreshPageItem=()=>
            
          
         
                    {
                sortedTasks.forEach(task => {
               
                if (task.project == project)
                {   
                    const taskCard = document.createElement('div');
                    taskCard.id = `${task.title}-card`;
        
                    const cardTitle = document.createElement('p');
                    cardTitle.innerHTML = 'Title:';
                    cardTitle.className = 'card-label';

                    const cardtasktitle =  document.createElement('p');
                    cardtasktitle.id = `${task.title}-card-title`;
                    cardtasktitle.className = 'task-label'
                    cardtasktitle.innerHTML = task.title;
        

                    const cardDesc = document.createElement('p');
                    cardDesc.className = 'card-label';
                    cardDesc.innerHTML = 'Description:';

                    const cardTaskDesc = document.createElement('p');
                    cardTaskDesc.id = `${task.title}-card-desc`;
                    cardTaskDesc.className = 'task-label' 
                    cardTaskDesc.innerHTML = task.descriptiopn;
                    
        

                    const cardpriority= document.createElement('p');
                    cardpriority.className = 'card-label';
                    cardpriority.innerHTML = 'Priority:';

                    const cardTaskpriority= document.createElement('p');
                    cardTaskpriority.id = `${task.title}-card-priority`;
                    cardTaskpriority.className = 'task-label' 
                    cardTaskpriority.innerHTML = task.priority;

                    const cardDate= document.createElement('p');
                    cardDate.className = 'card-label'
                    cardDate.innerHTML = 'Date:'

                    const cardTaskDate = document.createElement('p');
                    cardTaskDate.id = `${task.title}-card-date`;
                    cardTaskDate.className = 'task-label' 
                    cardTaskDate.innerHTML = format(task.date, 'dd/MM/yyyy');
                   
        
                  
                    taskCard.appendChild(cardTitle);
                    taskCard.appendChild(cardtasktitle);
                    taskCard.appendChild(cardDesc);
                    taskCard.appendChild(cardTaskDesc);
                    taskCard.appendChild(cardpriority);
                    taskCard.appendChild(cardTaskpriority);
                    taskCard.appendChild(cardDate);
                    taskCard.appendChild(cardTaskDate);
                    
        
                    projectPage.appendChild(taskCard);
                }
           
        });
        
       
        }
        refreshPageItem(); 
    }

    getNewTaskDetails= ()=>
    {
        const dialogConfirmBtn = document.getElementById('confirmBtn');
        const dialogCancelBtn = document.getElementById('cancelBtn');
        const newtaskForm = document.getElementById('newtaskForm');
        const newTaskDialog =document.getElementById ('new-task-popup');

        dialogConfirmBtn.addEventListener('click', (event)=>
            {
                event.preventDefault();
                const formData = new FormData(newtaskForm);
                const userTaskTitle = formData.get('task-title');
                const userTaskDesc = formData.get('task-description');
                const userTaskPriority = formData.get('task-priority');
                const userTaskProject = formData.get('task-project');
                const userTaskDate = new Date(formData.get('task-date'));
                const formatedDate = format(userTaskDate, 'dd/MM/yyyy'); 
            
              
                const pageContent = document.getElementById(`${userTaskProject}-page`);
               
                const getUSerTaskDetails =()=>
                {
                    
                  
                  return({title:userTaskTitle ,descriptiopn:userTaskDesc, priority: userTaskPriority,project:userTaskProject, date: userTaskDate});
                }
               
                this.storage.storeTasks(getUSerTaskDetails())
               tasks = this.storage.sortTasksByDate(tasks, 'date' );
                newtaskForm.reset();
                newTaskDialog.close();
                if (pageContent != null)
                {
                    if (pageContent.id === `${userTaskProject}-page`)
                        {
                            this.renderProjectPage(userTaskProject)
                            console.log('ITS THE SAME PAGE');
                            
                        }
                        
                }
              

            });

            dialogCancelBtn.addEventListener('click', ()=>
            {
                
                newtaskForm.reset();
            }); 
            
    }
    
 }
