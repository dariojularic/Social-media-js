import './style.css'
import { user } from './data'


class User {
  constructor(firstName, lastName, img, address, friends) {
    this.id = crypto.randomUUID()
    this.firstName = firstName
    this.lastName = lastName
    this.img = img
    this.address = address
    this.friends = friends
    this.posts = []
  }

  addPost(post) {
    this.posts.push(post)
  }

  renderPosts() {
    this.posts.forEach(post => {
      const html = `<li>
                      <div class="post">
                        <div class="post-owner-info">
                          <img >
                          <div>
                            <p class="post-owner-name"></p>
                            <p class="post-date"></p>
                          </div>
                        </div>

                        <p class="post-text"></p>

                        <div class="likes-comments-number">
                          <div class="likes-container"></div>
                          <div class="comments-container"></div>
                        </div>
                      </div>
                      <div class="post-buttons"></div>
                      <div class="add-comment"></div>
                      <div class="all-comments"></div>
                    </li>`
    })
  }
}

class Post {
  constructor(owner, img, date, textContent) {
    this.id = crypto.randomUUID()
    this.owner = owner
    this.img = img
    this.date = date
    this.textContent = textContent
    this.likes = []
    this.comments = [] 
  }

  addComment(comment) {
    this.comments.push(comment)
  }

  addLike(like) {
    this.likes.push(like)
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

class Like {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }
}


const newUser = new User(user.name, user.lastName, user.img, user.address, user.friends)
// , user.posts, user.comments, user.likes) za ovaj dio idu metode
// console.log(user.friends) 
console.log(newUser)
user.posts.forEach(post => newUser.posts.push(post))
console.log(newUser)
