import './style.css'
import { user } from './data'


class User {
  constructor(firstName, lastName, img, address, friends, posts, comments, likes) {
    this.id = crypto.randomUUID()
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
  constructor(owner, img, date, textContent, likes) {
    this.id = crypto.randomUUID()
    this.owner = owner
    this.img = img
    this.date = date
    this.textContent = textContent
    this.likes = likes 
  }
}

class Comment {
  constructor(owner, textContent, img) {
    this.id = crypto.randomUUID()
    this.owner = owner
    this.textContent = textContent
    this.img = img
  }
}

class Friend {
  constructor(firstName, lastName, img) {
    this.id = crypto.randomUUID()
    this.firstName = firstName
    this.lastName = lastName
    this.img = img
  }
}


const newUser = new User(user.name, user.lastName, user.img, user.address, user.friends, user.posts, user.comments, user.likes)
// console.log(user.friends)
console.log(newUser)