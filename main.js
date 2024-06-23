import './style.css'

class User {
  constructor(firstName, lastName, img, address, friends, posts, comments, likes) {
    this.firstName = firstName
    this.lastName = lastName
    this.img = img
    this.address = address
    this.friends = friends
    this.posts = posts
    this.comments = comments
    this.likes = likes
  }
}

class userManager {
  constructor() {
    this.usersArray = []
  }
}

class Post {
  constructor() {
    
  }
}