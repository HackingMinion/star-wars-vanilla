const BASE_URL = "https://swapi.dev/api/"

async function loadPeople() {
  /* let promise = new Promise((res, rej) => {
    setTimeout(() => res("Now it's done!"), 1000)
  }); */

  let promise = fetch(`${BASE_URL}people/1`)
  /* .then(response => response.json())
  .then(data => console.log(data)); */

  let result = await promise

  /* result.json().then(data => {
    console.log(data.name)
  }) */

  let data = await result.json()
  console.log(data.name)
}

loadPeople()