/* fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json)) */



function loadData() {
      const url = "https://jsonplaceholder.typicode.com/todos/1"
      fetch(url)
            .then(response => response.json())
            .then(json => console.log(json))
}

function loadUser(){
      const url='https://jsonplaceholder.typicode.com/users'
      fetch(url).then(res=>res.json()).then(json=>displayUser(json))
}

function displayUser(data){

      const ul=document.getElementById('users-list')
      
      for (const user of data) {
            const li=document.createElement('li')
            li.innerText=user.name
            ul.appendChild(li)
      }

}