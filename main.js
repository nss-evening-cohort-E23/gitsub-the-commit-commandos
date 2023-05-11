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

const startApp= ()=>{
  renderPackages()
}

startApp()

const packForm = document.querySelector("#packageForm");

packForm.addEventListener("submit", createPackage)
