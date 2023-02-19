document.getElementById('apply-bg').addEventListener('click',function(){
    const friends=document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor='lightblue'
    }
})
document.getElementById('center-third').addEventListener('click',function(){
    const thirdFriend=document.getElementById('third-friend');
    thirdFriend.style.textAlign='center'
})
document.getElementById('add-friend').addEventListener('click',function(){
    const friendsContainer=document.getElementById('friends');
    const friend=document.createElement('div')
    friend.innerHTML=`
    <h3 class="friend-name">New Friend</h3>
    <p>this is my new friend</p>
    `
    friendsContainer.appendChild(friend)
    friend.classList.add("p-class")
})
