import './style.css'
import { user } from './data'
import { addDays, format } from "date-fns/fp";
import { formatDistanceToNow } from "date-fns";


const postsList = document.querySelector(".posts");
const friendsList = document.querySelector(".friends-list");
const postForm = document.querySelector(".post-form");
const postInput = document.querySelector(".post-input");
const commentInput = document.querySelector(".write-comment")
let postInputValue = "";

postInput.addEventListener("input", () => {
  postInputValue = postInput.value
  const time = new Date()
  console.log(formatDistanceToNow(time))
  // console.log(Date.now)
})

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
    postsList.innerHTML = "";
    this.posts.forEach(post => {
      let likeParagraphText = "";
      if (post.likes.length === 1) likeParagraphText = `${post.likes[0].firstName} ${post.likes[0].lastName} likes this post`
      if (post.likes.length === 2) likeParagraphText = `${post.likes[0].firstName} ${post.likes[0].lastName} and ${post.likes[1].firstName} ${post.likes[1].lastName} likes this post`
      if (post.likes.length >= 3) likeParagraphText = `${post.likes[0].firstName} ${post.likes[0].lastName}, ${post.likes[1].firstName} ${post.likes[1].lastName} and ${post.likes.length - 2} others likes this post`
      const html = `<li class="post-item">
                      <div class="post">
                        <div class="post-owner-info">
                          <img src="images/avatar-image2.jpg" class="profile-picture-small">
                          <div class="post-name-date">
                            <p class="post-owner-name">${this.firstName} ${this.lastName}</p>
                            <p class="post-date">${formatDistanceToNow(post.postDate)}</p>
                          </div>
                        </div>

                        <p class="post-text">${post.postText}</p>

                        <div class="likes-comments-number">
                          <div class="likes-container">
                            <p class="likes-paragraph">${likeParagraphText}</p>
                          </div>

                          <div class="comments-container">
                            <p class="comments-paragraph" data-id="${post.id}">${post.comments.length} Comments</p>
                          </div>
                        </div>
                      </div>

                      <div class="post-buttons">
                        <button class="like-btn post-btn"><i class="fa-regular fa-thumbs-up"></i> Like</button>
                        <button class="comment-btn post-btn" data-id="${post.id}"><i class="fa-regular fa-comments"></i> Comment</button>
                      </div>

                      <div class="add-comment">
                        <img src="images/avatar-image2.jpg" class="profile-picture-small">
                        <input type="text" placeholder="Write a comment" class="write-comment">
                      </div>

                      <div class="all-comments">
                        <ul class="comments-list" id=${post.id}></ul>
                      </div>
                    </li>`;
      postsList.insertAdjacentHTML("afterbegin", html);
    })
  }

  findPost(postId) {
    return this.posts.find(post => postId === post.id)
  }
}

class Post {
  constructor(ownersFirstName, ownersLastName, img, postDate, postText) {
    this.id = crypto.randomUUID()
    this.ownersFirstName = ownersFirstName
    this.ownersLastName = ownersLastName
    this.img = img
    this.postDate = postDate
    this.postText = postText
    this.likes = []
    this.comments = [] 
  }

  addComment(comment) {
    this.comments.push(comment)
  }

  addLike(like) {
    this.likes.push(like)
  }

  renderComments() {
    commentsList.innerHTML = "";
    this.comments.forEach(comment => {
      const html = `<li>
                      <img >
                      <div>
                        <p class="comment-owner">${comment.firstName} ${comment.lastName}</p>
                        <p class="comment-text">${comment.commentText}</p>
                      </div>
                    </li>`
    })
    commentsList.insertAdjacentHTML("afterbegin", html)
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

// za svaki post iz data.js napravit new Post
// obratit paznju da ne gurnem u comments ili likes array nista jer podaci sadrze

const newUser = new User(user.firstName, user.lastName, user.img, user.address, user.friends)
// , user.posts, user.comments, user.likes) za ovaj dio idu metode
// console.log(user.friends)
user.posts.forEach(post => newUser.posts.push(post)) 
// user.posts.forEach(post => {
//   const newPost = new Post(post.firstName, post.lastName, post.img, post.postDate, post.postText)
//   // newPost.comments.push(new Comment())

// })
newUser.renderPosts()
const commentsList = document.querySelector(".comments-list")

postsList.addEventListener("click", (event) => {
  // console.log(event.target.classList.contains("comment-btn"))
  // if (event.target.classList.contains("comment-btn")) {

  //   const commentsList = document.querySelector(".comments-list");
  //   console.log(event.target.getAttribute("data-id"))
  //   const post = newUser.findPost(event.target.getAttribute("data-id"))
  //   console.log("post:", post)
  //   post.renderComments()
  // }
    if (event.target.classList.contains("comments-paragraph")) {
      const postParent = event.target.closest("li")
      const currentCommentsList = postParent.querySelector(".comments-list");
      const currentPost = newUser.findPost(event.target.getAttribute("data-id"))
      currentPost.comments.forEach(comment => {
        const html =  `<li>blablaa</li>`
        currentCommentsList.insertAdjacentHTML("afterbegin", html)
      })
    }
})

postForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const newPost = new Post(newUser.firstName, newUser.lastName, newUser.img, new Date(), postInputValue);
  newUser.addPost(newPost);
  newUser.renderPosts();
  postInput.value = "";
})