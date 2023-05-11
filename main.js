


// Function that will add items on the page.
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

const cards = [
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
  },
  // {
  //   id: 4,
  //   title: "Test 1",
  //   description: "Code test",
  // },
  // {
  //   id: 5,
  //   title: "Test 2",
  //   description: "Code test 2",
  // },
  // {
  //   id: 6,
  //   title: "Test 3",
  //   description: "Code test 3",
  // },
  // {
  //   id: 7,
  //   title: "Test 4",
  //   description: "Code test 4",
  // },
  // {
  //   id: 7,
  //   title: "Test 4",
  //   description: "Code test 4",
  // },
  // {
  //   id: 7,
  //   title: "Test 4",
  //   description: "Code test 4",
  // },
  // {
  //   id: 7,
  //   title: "Test 4",
  //   description: "Code test 4",
  // },
  // {
  //   id: 7,
  //   title: "Test 4",
  //   description: "Code test 4",
  // }
];

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
cardsOnDom(cards);

// style="width: 18rem;"
// createProjectButton

const projectForm = document.querySelector("#overviewForm")

const createProject = (e) => {
  e.preventDefault();
  const newProject = {
    id: cards.length +1,
    name: document.querySelector("#overviewProjectName").value,
    description: document.querySelector("#overviewProjectDescription").value,
  }
  cards.unshift(newProject);
  cardsOnDom(cards);
  overviewForm.reset();
};

projectForm.addEventListener('submit', createProject)
  // console.log("Form Button is Working");
  // alert('click');
