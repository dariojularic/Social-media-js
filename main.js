import './style.css'
import { user } from './data'
import { addDays, format } from "date-fns/fp";
import { formatDistanceToNow } from "date-fns";


const postsList = document.querySelector(".posts");
const friendsList = document.querySelector(".friends-list");
const postForm = document.querySelector(".post-form");
const postInput = document.querySelector(".post-input");
const username = document.querySelector(".user-name");
const address = document.querySelector(".address");
let postInputValue = "";
let commentInputValue = "";



postInput.addEventListener("input", () => {
  postInputValue = postInput.value
  const time = new Date()
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
      const html = `<li class="post-item" data-id="${post.id}">
                      <div class="post">
                        <div class="post-owner-info">
                          <img src="images/avatar-image2.jpg" class="profile-picture-small">
                          <div class="post-name-date">
                            <p class="post-owner-name">${this.firstName} ${this.lastName}</p>
                            <p class="post-date">${formatDistanceToNow(post.postDate)} ago</p>
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
                        <form class="comment-form-${post.id} comment-form">
                          <input type="text" placeholder="Write a comment" class="write-comment">
                          <button class="add-comment-btn">Add comment</button>
                        </form>
                      </div>

                      <div class="all-comments">
                        <ul class="comments-list" id=${post.id}></ul>
                      </div>
                    </li>`;

      postsList.insertAdjacentHTML("afterbegin", html);
      document.querySelector(`.comment-form-${post.id}`).addEventListener("submit", (event) => {
        event.preventDefault()
        const text = event.currentTarget.querySelector(".write-comment").value
        if (text.trim().length > 0) {
          const newComment = new Comment(newUser.firstName, newUser.lastName, text, newUser.img)
          post.addComment(newComment)
          event.currentTarget.querySelector(".write-comment").value = ""
        }
      })
    })
  }

  findPost(postId) {
    return this.posts.find(post => postId === post.id)
  }

  renderFriends() {
    for (let i = 0; i < 6; i++) {
      const element = this.friends[i];
      const html = `<li class="friend">
                      <img src="${element.img}" class="friend-image friend${i}">
                      <p class="friend-name">${element.firstName} ${element.lastName}</p>
                    </li>`
      friendsList.insertAdjacentHTML("afterbegin", html);
    }
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
    const currentCommentsList = document.getElementById(this.id)
    console.log(currentCommentsList)
    if (!currentCommentsList) return
    else this.renderComments(currentCommentsList)
  }

  addLike(like) {
    this.likes.push(like)
  }

  renderComments(commentsList) {
    commentsList.innerHTML = "";
    console.log(this.comments)
    this.comments.forEach(comment => {
      const html = `<li class="comment-item">
                      <img src="${comment.img}" class="profile-picture-small comment-img">
                      <div class="comment-info">
                        <p class="comment-owner">${comment.ownersFirstName} ${comment.ownersLastName}</p>
                        <p class="comment-text">${comment.textContent}</p>
                      </div>
                    </li>`
      commentsList.insertAdjacentHTML("afterend", html)
    })
  }
}

class Comment {
  constructor(ownersFirstName, ownersLastName, textContent, img) {
    this.id = crypto.randomUUID()
    this.ownersFirstName = ownersFirstName
    this.ownersLastName = ownersLastName
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

function displayUsername(firstName, lastName) {
  username.textContent = firstName + " " + lastName
}

function displayAddress(city, country) {
  address.textContent = `${city}, ${country}`
}

const newUser = new User(user.firstName, user.lastName, user.img, user.address, user.friends)
newUser.renderFriends();
displayUsername(newUser.firstName, newUser.lastName)
displayAddress(newUser.address.city, newUser.address.country)

user.posts.forEach(post => {
  const newPost = new Post(newUser.firstName, newUser.lastName, newUser.img, post.postDate, post.postText)
  post.comments.forEach(comment => {
    const newComment = new Comment(comment.firstName, comment.lastName, comment.commentText, comment.img);
    newPost.addComment(newComment)
  })
  post.likes.forEach(like => {
    const newLike = new Like(like.firstName, like.lastName)
    newPost.addLike(newLike)
  })
  newUser.addPost(newPost)
})

newUser.renderPosts()

postsList.addEventListener("click", (event) => {
// na prvo prikazivanje komentara dodaj class is active, a prije samog dodavanja komentara provjerit jel ima klasu is activ. ako ima klasu is activ, samo makni is activ klasu sakrij koment i return

  if (event.target.classList.contains("comments-paragraph") && !event.target.classList.contains("is-active")) {
    event.target.classList.add("is-active")
    const postParent = event.target.closest("li")
    const currentCommentsList = postParent.querySelector(".comments-list");
    currentCommentsList.innerHTML = ""
    const currentPost = newUser.findPost(event.target.getAttribute("data-id"))
    currentPost.comments.forEach(comment => {
      const html = `<li class="comment-item">
                      <img src="${comment.img}" class="profile-picture-small comment-img">
                      <div class="comment-info">
                        <p class="comment-owner">${comment.ownersFirstName} ${comment.ownersLastName}</p>
                        <p class="comment-text">${comment.textContent}</p>
                      </div>
                    </li>`
      currentCommentsList.insertAdjacentHTML("afterend", html)
    })
  }
})

postForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (postInputValue.trim().length > 0) {
    const newPost = new Post(newUser.firstName, newUser.lastName, newUser.img, new Date(), postInputValue);
    newUser.addPost(newPost);
    newUser.renderPosts();
    postInput.value = "";
  }
})
