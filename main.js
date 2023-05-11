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
console.log(cards);

// MASONS FUNCTION BELOW ****
// Function that will add items on the page.
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

const renderPackages = () =>{
  let domString=""
  packages.forEach(package => {
    domString+=`
    <div class="card packages-cards";">
      <div class="card-body">
        <h5 class="card-title">${package.name}</h5>
        <p class="card-text">${package.description}</p>
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
const createProject = (e) => {
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



const projectForm = document.querySelector("#overviewForm");
const packForm = document.querySelector("#packageForm");
const startApp= ()=>{
  document.addEventListener('DOMContentLoaded', function() {
    cardsOnDom(cards)
 }, false);
  if (document.URL.includes("index.html")) {
    cardsOnDom(cards)
    projectForm.addEventListener('submit', createProject)
  }if (document.URL.includes("packages.html")) {
    renderPackages()
    packForm.addEventListener("submit", createPackage)
  }
}

startApp()

  
