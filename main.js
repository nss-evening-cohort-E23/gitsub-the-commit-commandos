// import { repoList } from "./scripts/repo-list.js";
// import { repoDisplay } from "./scripts/repo-list.js";

//LAURA'S ARRAY BELOW

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

//THOMAS' ARRAY
const repoList = [
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


// MASON'S ARRAY BELOW ****
let packages = [
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
];

// DAVIDS ARRAY BELOW ******
let cards = [
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
];


// Function that will add items on the page.
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};


//THOMAS' CARD
const repoDisplay = function (obj){ return `
  <li class="list-group-item">
  <h3 class="repo-title">${obj.name}</h3>
  <p class="repo-desc">${obj.desc}</p>
  <h5 class="repo-tags">${obj.tags}</h5>
  <button class="repo-fav">* Star</button>
  </li>
  `

}


//THOMAS' FUNCTIONS BELOW
const rendRepo = function(){
  let domString = '';

  for (let item of repoList){
    domString += repoDisplay(item);
  }

  renderToDom('#repos', domString);
}




const addRepo = function (e){
  e.preventDefault();

  let newRepo = {
    id: repoList +1,
    name: document.querySelector('#repo-name').value,
    desc: document.querySelector('#repo-desc').value,
    tags: [],
  }

  repoList.push(newRepo);
  rendRepo();
  form.reset();
}




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


//LAURA'S FUNCTION BELOW
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

    
     




//LAURA'S FUNCTION END

// MASONS FUNCTION BELOW ****
const renderPackages = () =>{
  let domString=""
  packages.forEach(item => {
    domString+=`
    <div class="card packages-cards";">
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">${item.description}</p>
        <a href="#" class="btn btn-primary">More info</a>
      </div>
    </div>`

  });
  renderToDom("#packagesContainer",domString)
}

const createPackage = (e) =>{
  console.log("createpack fun is called");
  e.preventDefault();

  const newPackageObj = {
    id:packages.length+1,
    name:document.querySelector("#packageTitle").value,
    description:document.querySelector("#packageDescription").value
  }
  packages.push(newPackageObj);
  renderPackages();
  packForm.reset()
}

// DAVIDS FUNCTION BELOW ****

const cardsOnDom = (array) => {
  let domString = "";
  for (const cards of array) {
    domString += `
  <div class="overview-card card">
    <div class="card-body">
      <h5 class="card-title">${cards.title}</h5>
      <p class="card-text">${cards.description}</p>
      <button class="btn btn-warning" id="delete--${cards.id}">Remove Project</button>
    </div>
  </div>`;
  }
  renderToDom("#renderedProjectCards", domString);
};
// cardsOnDom(cards)
const createPin = (e) => {
  e.preventDefault();
  const newProject = {
    id: cards.length +1,
    title: document.querySelector("#overviewProjectName").value,
    description: document.querySelector("#overviewProjectDescription").value
  }
  cards.unshift(newProject);
  cardsOnDom(cards);
  overviewForm.reset();
};

const form = document.querySelector('#repo-form')
const projectForm = document.querySelector("#projForm");
const overviewForm = document.querySelector("#overviewForm");
const packForm = document.querySelector("#packageForm");
const startApp= ()=>{
  document.addEventListener('DOMContentLoaded', function() {
    cardsOnDom(cards)
 }, false);
  if (document.URL.includes("index.html")) {
    cardsOnDom(cards)
    overviewForm.addEventListener('submit', createPin)
  }
  if (document.URL.includes("packages.html")) {
    renderPackages()
    packForm.addEventListener("submit", createPackage)
  }
  if (document.URL.includes("projects.html")) { 
  projectDom(projects);
  projectForm.addEventListener("submit", createProject)
 }
 if (document.URL.includes("repositories.html")) {
  rendRepo();
  form.addEventListener('submit', addRepo);
 }


}


startApp()

  
