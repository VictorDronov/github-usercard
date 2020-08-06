  import axios from 'axios'
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
// axios.get('https://api.github.com/users/Victordronov')
// .then(request =>{
//   console.log('success')
// })
// .catch(error =>{
//   console.log('fail')
//   debugger
// })
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
let attachmentPoint = document.querySelector('.cards')

function personCard(userData){
// creating the content 
  const card = document.createElement('div')
  const userImg = document.createElement('img')
  const cardInfo = document.createElement('div')
  const userNameTitle = document.createElement('h3')
  const usersName = document.createElement('p')
  const location = document.createElement('p')
  const profile = document.createElement('p')
  const urlToProfile = document.createElement('a')
  const followers = document.createElement('p')
  const following = document.createElement('p')
  const bio = document.createElement('p')
// ordering the content
  card.appendChild(userImg)
  card.appendChild(cardInfo)
  cardInfo.appendChild(userNameTitle)
  cardInfo.appendChild(usersName)
  cardInfo.appendChild(location)
  cardInfo.appendChild(profile)
  profile.appendChild(urlToProfile)
  cardInfo.appendChild(followers)
  cardInfo.appendChild(following)
  cardInfo.appendChild(bio)
// Assigning classes
  card.classList.add('card')
  cardInfo.classList.add('card-info')
  userNameTitle.classList.add('name')
  usersName.classList.add('username')
// assigning data 
  userImg.src = userData.avatar_url
  userNameTitle.textContent = userData.login
  usersName.textContent = userData.name
  location.textContent = `Location: ${userData.location}`
  profile.textContent = 'Profile'
  urlToProfile.href = userData.url
  followers.textContent = `Followers: ${userData.followers}`
  following.textContent = `Followers: ${userData.following}`
  bio.textContent = `Bio: ${userData.bio}`

  return card
}

axios.get('https://api.github.com/users/Victordronov')
.then(request =>{
  const makingCard = request.data
    const newCard = personCard(makingCard)
    attachmentPoint.appendChild(newCard)
  console.log('success')
})
.catch(error =>{
  console.log('fail')
  debugger
})

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
