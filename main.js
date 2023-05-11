import { repoList } from "./scripts/repo-list.js";
import { repoDisplay } from "./scripts/repo-list.js";

console.log(repoList);


// Function that will add items on the page.
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};


const rendRepo = function(){
  let domString = '';

  for (let item of repoList){
    domString += repoDisplay(item);
  }

  renderToDom('#repos', domString);
}



const form = document.querySelector('#repo-form')
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

rendRepo();
form.addEventListener('submit', addRepo);


console.log(repoList)
