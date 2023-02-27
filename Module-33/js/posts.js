function loadPosts(){
    const url='https://jsonplaceholder.typicode.com/posts'
    fetch(url).then(res=>res.json()).then(posts=>displayPosts(posts))
}
loadPosts()

function displayPosts(posts){
    for (const post of posts) {
        const postContainer=document.getElementById('post-container')
        const div=document.createElement('div')
        div.classList.add('post')
        div.innerHTML=`
        <h5>${post.id}</h5>
        <h4>${post.title}</h4>
        <p>${post.body}</p>
        `
        postContainer.appendChild(div)
    }
}