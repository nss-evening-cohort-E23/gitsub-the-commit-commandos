

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
  description: "No description",

},
]

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

const cardsOnDom = (array) =>{
  let domString ="";
for (const project of array){ 
  domString += `<div class="card" id="user-card" style="width: 18rem;" >
        
      <div class="body">
      <h5 class="card-title">House: ${project.projName}</h5>
      <p class= "card-txt">${project.description}</p>
      </div>
     </div>`
}
  renderToDom ('#Projects', domString);
}
