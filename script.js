const BASE_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/'

class Search {
  constructor() {
    this.$search = document.querySelector('#search')
    this.$resultList = document.querySelector('[data-result-list]')
    this.$search.addEventListener('input', this.searchHandler) // TODO Add debounce
  }

  searchHandler = () => {
    if (this.$search.value.length >= 2) {
      this.resetResults()
      this.search()
    }
  }

  search = async () => {
    const result = await fetch(
      `${BASE_URL}${PEOPLE_URL}?search=${this.$search.value}`
    )
    const data = await result.json()

    this.renderResults(data.results)
  }

  renderResults = (results) => {
    results.forEach((result) => {
      const $div = document.createElement('div')
      $div.innerHTML = `<h2>${result.name}</h2>`

      const $filmList = document.createElement('ul')
      result.films.forEach((film) => {
        const html = `<li><a href="${film}">${film}</a></li>`
        $filmList.innerHTML = html
      })
      $div.appendChild($filmList)

      this.$resultList.appendChild($div)
    })
  }

  resetResults() {
    this.$resultList.innerHTML = ''
  }
}

const search = new Search()
