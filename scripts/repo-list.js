export const repoList = [
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

export const repoDisplay = function (obj){ return `
  <li class="list-group-item">
  <h3 class="repo-title">${obj.name}</h3>
  <p class="repo-desc">${obj.desc}</p>
  <h5 class="repo-tags">${obj.tags}</h5>
  <button class="repo-fav">* Star</button>
  </li>
  `

}
