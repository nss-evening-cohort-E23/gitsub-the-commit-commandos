const data = [
  {

    type:"pinned",
    info: [
      {
        id: 1,
        title: "The Commit Commanders",
        description: "Commanding code since April 2023.",
      },
      {
        id: 2,
        title: "Code Blaster",
        description: "Create, write, and edit code seamlessly through voice.",
      },
      {
        id: 3,
        title: "Code Junkie",
        description: "Code database for various pre-made ready-to-use functional code block.",
      }
    ]

  },
  {

    type:"repos",
    info: [
      {
        id: 1,
        name: 'Cat Naming Project',
        desc: 'Project that will generate a cat name based on a series of inputs',
        tags: ['javascript', 'html', 'css', 'netlify'],
      },
      {
        id: 2,
        name: 'Spin Around Project',
        desc: 'This website takes another website and turns it upside down',
        tags: ['funny', 'javascript', 'html', 'web-modification'],
      },
      {
        id: 3,
        name: 'Word Counter',
        desc: "It's on the box. Counts words bro.",
        tags: ['counting', 'javascript', 'practical'],
      },
      {
        id: 4,
        name: 'Book Review Site',
        desc: 'Website that aggregates book reviews from several websites and give a rating',
        tags: ['books', 'website', 'javascript'],
      }
    ]
  },
  {

    type:"projects",
    info: [{
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

  },
  {

    type:"packages",
    info: [
      {
        id:1,
        name:"Docker",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        id:2,
        name:"Apache Maven",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        id:3,
        name:"NuGet",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        id:4,
        name:"RubyGems",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        id:5,
        name:"npm",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        id:6,
        name:"Containers",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }
    ]

  }
]

// Function that will add items on the page.
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};


// THOMAS' CARD
const repoDisplay = function (obj){ return `
  <li class="list-group-item">
  <h3 class="repo-title">${obj.name}</h3>
  <p class="repo-desc">${obj.desc}</p>
  <h5 class="repo-tags">${obj.tags}</h5>
  <button class="repo-fav">* Star</button>
  </li>`
}


// //THOMAS' FUNCTIONS BELOW
const rendRepo = function(){
  let domString = '';

  for (let item of data[1].info){
    domString += repoDisplay(item);
  }
  let domStringForm=`
  <h1>Create Repo</h1>
    <form id="form1">
      <div class="mb-3">
            <div>
              <label class="text-area-labels" for="projectName" class="form-name">Repo Name:</label>
            </div>
            <textarea id="title" class="text-area" rows="1" cols="30" placeholder="Please enter a repo name.."></textarea>
            </div>
          <div class="mb-3">
            <div>
              <label class="text-area-labels" for="description" class="form-description">Description below:</label>
            </div>
            <textarea id="description" class="text-area" rows="6" cols="30" placeholder="Please enter a description.."></textarea>
          </div>
          <button type="submit" class="btn btn-primary" id="repo">Create Repo</button>
    </form>`
  renderToDom("#formContainer", domStringForm)
  renderToDom('#cardContainer', domString);
}



const addRepo = function (e){
  e.preventDefault();

  let newRepo = {
    id: data[1].info +1,
    name: document.querySelector('#title').value,
    desc: document.querySelector('#description').value,
    tags: [],
  }

  data[1].info.push(newRepo);
  rendRepo();
  form.reset();
}



// //LAURA'S FUNCTION BELOW
const projectDom = () =>{
  let domString ="";
for (const project of data[2].info){ 
  domString += `<div class="card" id="user-card" style="width: 50rem;" >
        
      <div class="body">
      <h5 class="card-title">${project.projName}</h5>
      <p class= "card-txt">${project.description}</p>
      </div>
     </div>`
}
let domStringForm=`
  <h1>Create Project</h1>
    <form id="form1">
      <div class="mb-3">
            <div>
              <label class="text-area-labels" for="projectName" class="form-name">Project Name:</label>
            </div>
            <textarea id="title" class="text-area" rows="1" cols="30" placeholder="Please enter a Project name.."></textarea>
            </div>
          <div class="mb-3">
            <div>
              <label class="text-area-labels" for="description" class="form-description">Description below:</label>
            </div>
            <textarea id="description" class="text-area" rows="6" cols="30" placeholder="Please enter a description.."></textarea>
          </div>
          <button type="submit" class="btn btn-primary" id="project">Create Project</button>
    </form>`
  renderToDom("#formContainer", domStringForm)
  renderToDom ('#cardContainer', domString);
}

const createProject = (e) => {
    e.preventDefault();

     const newProjObject ={
     id: data[2].info.length +1,
     projName: document.querySelector('#title').value,
     description: document.querySelector('#description').value,
     }
     
      data[2].info.push(newProjObject);
      projectDom();
      form.reset();
    }
//LAURA'S FUNCTION END

// MASONS FUNCTION BELOW ****
const renderPackages = () =>{
  let domString=""
  data[3].info.forEach(item => {
    domString+=`
    <div class="card packages-cards";">
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">${item.description}</p>
        <a href="#" class="btn btn-primary">More info</a>
      </div>
    </div>`
  
  });
  let domStringForm=`
  <h1>Add Package</h1>
    <form id="form1">
      <div class="mb-3">
            <div>
              <label class="text-area-labels" for="projectName" class="form-name">Package Name:</label>
            </div>
            <textarea id="title" class="text-area" rows="1" cols="30" placeholder="Please enter a package name.."></textarea>
            </div>
          <div class="mb-3">
            <div>
              <label class="text-area-labels" for="description" class="form-description">Description below:</label>
            </div>
            <textarea id="description" class="text-area" rows="6" cols="30" placeholder="Please enter a description.."></textarea>
          </div>
          <button type="submit" class="btn btn-primary" id="package">Add Package</button>
    </form>`
  renderToDom("#formContainer", domStringForm)
  renderToDom("#cardContainer",domString)
}

const createPackage = (e) =>{
  console.log("createpack fun is called");
  e.preventDefault();

  const newPackageObj = {
    id:data[3].info.length+1,
    name:document.querySelector("#title").value,
    description:document.querySelector("#description").value
  }
  data[3].info.push(newPackageObj);
  renderPackages();
  form.reset()
}

// DAVIDS FUNCTION BELOW ****

const cardsOnDom = () => {
  let domString = "";
  for (const cards of data[0].info) {
    domString += `
  <div class="overview-card card">
    <div class="card-body">
      <h5 class="card-title">${cards.title}</h5>
      <p class="card-text">${cards.description}</p>
      <button class="btn btn-warning" id="delete--${cards.id}">Remove Project</button>
    </div>
  </div>`;
  }
  let domStringForm=`
  <h1>Pin Repo</h1>
    <form id="form1">
      <div class="mb-3">
            <div>
              <label class="text-area-labels" for="projectName" class="form-name">Repo Name:</label>
            </div>
            <textarea id="title" class="text-area" rows="1" cols="30" placeholder="Please enter a repo name.."></textarea>
            </div>
          <div class="mb-3">
            <div>
              <label class="text-area-labels" for="description" class="form-description">Description below:</label>
            </div>
            <textarea id="description" class="text-area" rows="6" cols="30" placeholder="Please enter a description.."></textarea>
          </div>
          <button type="submit" class="btn btn-primary" id="pin">Create Pin</button>
    </form>`
  
  renderToDom("#formContainer", domStringForm)
  renderToDom("#cardContainer", domString);
};

const createPin = (e) => {
  e.preventDefault();
  const newProject = {
    id: data[0].info.length +1,
    title: document.querySelector("#title").value,
    description: document.querySelector("#description").value
  }
  data[0].info.unshift(newProject);
  cardsOnDom();
  form.reset();
};

const filter = (catagory)=>{
  switch (catagory) {
    case "pinned":
      cardsOnDom()
      break;
  
    case "repo":
      rendRepo()
      break;

    case "project":
      projectDom()
      break;
  
    case "package":
      renderPackages()
      break;
  }
}


const startApp = () => {
  cardsOnDom()
}

startApp()

const pinBtn = document.querySelector("#pinnedBtn")
const repoBtn = document.querySelector("#reposBtn")
const projectBtn = document.querySelector("#projectsBtn")
const packageBtn = document.querySelector("#packagesBtn")

pinBtn.addEventListener("click", () =>{filter("pinned")})
repoBtn.addEventListener("click",() =>{ filter("repo")})
projectBtn.addEventListener("click",() =>{ filter("project")})
packageBtn.addEventListener("click",() =>{ filter("package")})

const form = document.querySelector("#form1")
// const pinForm=document.querySelector("#formPin")
// const repoForm=document.querySelector("#formRepo")
// const projectForm=document.querySelector("#formProject")
// const packageForm=document.querySelector("#formPackage")

// pinForm.addEventListener("submit",createPin)
// repoForm.addEventListener("submit",addRepo)
// projectForm.addEventListener("submit",createProject,)
// packageForm.addEventListener("submit",renderPackages)


form.addEventListener("submit", (e)=>{
  e.preventDefault()
  console.log(e.submitter.id);

  switch (e.submitter.id) {
    case "pin":
      console.log("pin");
      break;
  
    case "repo":
      console.log("repo");
      break;
      
    case "project":
      console.log("project");
      break;
  
    case "package":
      console.log("package");
      break;
    default:
      console.log("case is not working");
    break;
  }
})


  
