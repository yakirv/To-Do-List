 export function storageAvailable(type)
{
    let storage;
    try{
        storage = window[type];
        const x = 'storage_Test';
        storage.setItem("storage_key",x);
        storage.removeItem("storage_key");
        return true;

    }
    catch (e) {
        return (
          e instanceof DOMException &&
          e.name === "QuotaExceededError" &&
          storage &&
          storage.length !== 0
        );
    }
   
};


export function storeProjects()
{
    if (storageAvailable("localStorage")) {
        const projects = ['Today', 'Week', 'Work'];
        const projectsString = JSON.stringify(projects);
        localStorage.setItem('projects', projectsString);
        const storedProjects = JSON.parse(projectsString)
        console.log(storedProjects)

      } else {
        // Too bad, no localStorage for us
      } 
}
