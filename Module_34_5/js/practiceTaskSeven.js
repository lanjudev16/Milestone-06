const loadDataFromApi = () => {
    const url = "https://api.github.com/users/programminghero1"
    fetch(url).then(res => res.json()).then(githubUser => {
        displayUserInformation(githubUser)
    })
}

const displayUserInformation = (githubUser) => {
    const userImage = document.getElementById('userImage')
    const userNameBlogBio = document.getElementById('userNameBlogBio')
    const joiningDate = document.getElementById('joiningDate')
    const AllRepoId = document.getElementById('AllRepoId')
    const FlowersId = document.getElementById('FlowersId')
    const FlowingId = document.getElementById('FlowingId')

    userNameBlogBio.innerHTML = `
    <h2>${githubUser.name}</h2>
    <h3>${githubUser.blog}</h3>
    <p>${githubUser.bio}</p>
    `
    userImage.innerHTML = `
    <img width="100%" height="200px" src="${githubUser.avatar_url}"/>
    `
    joiningDate.innerHTML=`
    <h3>${githubUser.created_at}</h3>
    `

    AllRepoId.innerHTML=`
    <h1>Repos</h1>
    <h2>${githubUser.public_repos}</h2>
    `
    FlowersId.innerHTML=`
    <h1>Followers</h1>
    <h2>${githubUser.followers}</h2>
    `
    FlowingId.innerHTML=`
    <h1>Following</h1>
    <h2>${githubUser.following}</h2>
    `

    displayFollowers(githubUser.followers_url)
}

const displayFollowers=(followers_url)=>{
    const url=`${followers_url}`
    fetch(url).then(res=>res.json()).then(data=>console.log(data))
}

loadDataFromApi()