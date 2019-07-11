const fetchUsers = async () => {
  let response = await (await fetch(`https://reqres.in/api/users?delay=2`)).json()
  return (response.data)
}

document.addEventListener('DOMContentLoaded', () => {
  let displayDiv = document.getElementById('display');
  displayDiv.innerHTML = '<h1>Loading...</h1>'

  fetchUsers().then(persons => {
    displayDiv.innerHTML = ''
    for (let person of persons) {
      let newDiv = document.createElement('h1')
      newDiv.innerHTML = `${person.first_name} ${person.last_name}`
      displayDiv.appendChild(newDiv)
    }
  });
})



