//LAURA'S FUNCTION START

const projects= [{
  id: 1,
  projName:"Example-1",
  description: "No description",
},
{
  id: 2,
  projName:"my-goals",
  description: "No description",
},
{
  id: 3,
  projName:"Sample My Goals",
  description: "Goals for NSS Bootcamp.",

},
]

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

const projectDom = (array) =>{
  let domString ="";
for (const project of array){ 
  domString += `<div class="card" id="user-card" style="width: 50rem;" >
        
      <div class="body">
      <h5 class="card-title">${project.projName}</h5>
      <p class= "card-txt">${project.description}</p>
      </div>
     </div>`
}
  renderToDom ('#projectCard', domString);
}
projectDom(projects);


const createProject = (e) => {
    e.preventDefault();

     const newProjObject ={
     id: projects.length +1,
     projName: document.querySelector('#projectName').value,
     description: document.querySelector('#description').value,
     }
     
      projects.push(newProjObject);
      projectDom(projects);
      projForm.reset();
    }

    
   const startApp = () => {
    projectDom(projects);
    
  }

  const projectForm = document.querySelector("#projForm");

projectForm.addEventListener("submit", createProject)


//LAURA'S FUNCTION END
  
