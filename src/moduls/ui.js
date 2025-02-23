




export const addButton = ()=>
{
    const newTaskBtn = document.getElementById('new-task-button');
    const newTaskDialog =document.getElementById ('new-task-popup');
    const newTasForm = document.getElementById('newtaskForm');
    
    newTaskBtn.addEventListener('click',()=>{
        console.log('Button clicked')
        newTaskDialog.showModal();
        });
}
  

