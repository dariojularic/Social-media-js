import './style.css'
import { user } from './data'
import { formatDistanceToNow } from "date-fns";

const postsList = document.querySelector(".posts");
const friendsList = document.querySelector(".friends-list");
const postForm = document.querySelector(".post-form");
const postInput = document.querySelector(".post-input");
const username = document.querySelector(".user-name");
const address = document.querySelector(".address");
const findFriends = document.querySelector(".find-friends")
const findFriendsUl = document.querySelector(".find-friends-list");
const friendsNumber = document.querySelector(".number-of-friends");
const mainContainer = document.querySelector(".container");
const loader = document.querySelector(".loader");

let postInputValue = "";
let findFriendsValue = "";

findFriends.addEventListener("input", () => findFriendsValue = findFriends.value.toLowerCase())
postInput.addEventListener("input", () => postInputValue = postInput.value)

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

  getFriends() {
    return this.friends
  }

  addPost(post) {
    this.posts.push(post)
  }

  renderPosts() {
    postsList.innerHTML = "";
    this.posts.forEach(post => {
      // let likeParagraphText = "";
      // if (post.likes.length === 1) likeParagraphText = `${post.likes[0].firstName} ${post.likes[0].lastName} likes this post`
      // if (post.likes.length === 2) likeParagraphText = `${post.likes[0].firstName} ${post.likes[0].lastName} and ${post.likes[1].firstName} ${post.likes[1].lastName} likes this post`
      // if (post.likes.length >= 3) likeParagraphText = `${post.likes[0].firstName} ${post.likes[0].lastName}, ${post.likes[1].firstName} ${post.likes[1].lastName} and ${post.likes.length - 2} others likes this post`

      // jel ok da imam puno post.id u <li> dolje?
      // provjerit ocu ovdje prvo insertat <li> pa onda renderLikes() ili odma u <li> ubacit ko je sve lajkao post? likes paragraph
      const html = `<li class="post-item post-item-${post.id}"d>
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
                            <p class="likes-paragraph likes-paragraph-${post.id}"></p>
                          </div>

                          <div class="comments-container">
                            <p class="comments-paragraph comments-paragraph-${post.id}" data-id="${post.id}">${post.comments.length} Comments</p>
                          </div>
                        </div>
                      </div>

                      <div class="post-buttons">
                        <button class="like-btn-${post.id} post-btn"><i class="fa-regular fa-thumbs-up"></i> Like</button>
                        <button class="comment-btn comment-btn-${post.id} post-btn"><i class="fa-regular fa-comments"></i> Comment</button>
                      </div>

                      <div class="add-comment">
                        <img src="images/avatar-image2.jpg" class="profile-picture-small">
                        <form class="comment-form-${post.id} comment-form">
                          <input type="text" placeholder="Write a comment" class="write-comment write-comment-${post.id}">
                          <button class="add-comment-btn">Add comment</button>
                        </form>
                      </div>

                      <div class="all-comments">
                        <ul class="comments-list" id=${post.id}></ul>
                      </div>
                    </li>`;

      postsList.insertAdjacentHTML("afterbegin", html);
      const likesParagraph = postsList.querySelector(`.likes-paragraph-${post.id}`)
      post.renderLikes(likesParagraph);

      // koja je razlika ako na sljedecoj liniji napisem postsList.querySelector umjesto document.querySelector???
      document.querySelector(`.comment-form-${post.id}`).addEventListener("submit", (event) => {
        event.preventDefault()
        const text = event.currentTarget.querySelector(".write-comment").value
        if (text.trim().length > 0) {
          const newComment = new Comment(newUser.firstName, newUser.lastName, text, newUser.img)
          post.addComment(newComment)
          event.currentTarget.querySelector(".write-comment").value = ""
          const postDom = postsList.querySelector(`.post-item-${post.id}`)
          const commentsParagraph = postDom.querySelector(`.comments-paragraph-${post.id}`)
          if (!commentsParagraph.classList.add("is-active")) commentsParagraph.classList.add("is-active")
          const currentCommentsCountDom = postDom.querySelector(".comments-paragraph")
          currentCommentsCountDom.textContent = `${post.comments.length} Comments`
        }
      })

      document.querySelector(`.like-btn-${post.id}`).addEventListener("click", () => {
        const like = new Like(newUser.firstName, newUser.lastName)
        post.addLike(like)
      })

      document.querySelector(`.comment-btn-${post.id}`).addEventListener("click", () => document.querySelector(`.write-comment-${post.id}`).focus())
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
    if (!currentCommentsList) return
    else {
      currentCommentsList.innerHTML = ""
      currentCommentsList.classList.add("is-active")
      this.renderComments(currentCommentsList)
    }
  }

  renderComments(commentsList) {
    this.comments.forEach(comment => {
      const html = `<li class="comment-item">
                      <img src="${comment.img}" class="profile-picture-small comment-img">
                      <div class="comment-info">
                        <p class="comment-owner">${comment.ownersFirstName} ${comment.ownersLastName}</p>
                        <p class="comment-text">${comment.textContent}</p>
                      </div>
                    </li>`
      commentsList.insertAdjacentHTML("afterbegin", html)
    })
  }

  // pregledat ovu funkciju, problem je sto moram provjerit jesam li vec lajko post
  addLike(newLike) {
    const likesParagraph = document.querySelector(`.likes-paragraph-${this.id}`)
    if (!this.likes.some(like => like.firstName === newLike.firstName && like.lastName === newLike.lastName)) {
      this.likes.push(newLike)
      if (!likesParagraph) return
      else {
        const likeBtn = document.querySelector(`.like-btn-${this.id}`)
        likeBtn.innerHTML = `<i class="fa-solid fa-thumbs-up liked-icon"></i> Like`
        likesParagraph.innerHTML = ""
        this.renderLikes(likesParagraph)
      }
    } else {
      const likeBtn = document.querySelector(`.like-btn-${this.id}`)
      likeBtn.innerHTML = `<i class="fa-regular fa-thumbs-up"></i> Like`
      this.likes.pop()
      likesParagraph.innerHTML = ""
      this.renderLikes(likesParagraph)
    }
  }

  renderLikes(likesParagraph) {
    if (this.likes.length === 1) likesParagraph.innerHTML = `${this.likes[0].firstName} ${this.likes[0].lastName} likes this post`
    if (this.likes.length === 2) likesParagraph.innerHTML = `${this.likes[0].firstName} ${this.likes[0].lastName} and ${this.likes[1].firstName} ${this.likes[1].lastName} likes this post`
    if (this.likes.length >= 3) likesParagraph.innerHTML = `${this.likes[0].firstName} ${this.likes[0].lastName}, ${this.likes[1].firstName} ${this.likes[1].lastName} and ${this.likes.length - 2} others likes this post`
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

function displayNumberOfFriends() {
  friendsNumber.textContent = `${newUser.friends.length} friends`
}

setTimeout(() => {
  mainContainer.style.opacity = 1;
  mainContainer.style.transition = "1s";
  loader.style.opacity = 0;
}, 1500);

const newUser = new User(user.firstName, user.lastName, user.img, user.address, user.friends)
newUser.renderFriends();
displayUsername(newUser.firstName, newUser.lastName)
displayAddress(newUser.address.city, newUser.address.country)
displayNumberOfFriends()

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

findFriends.addEventListener("keyup", () => {
  if (findFriendsValue.trim().length > 0) {
    const findFriendsList = newUser.getFriends().filter(friend => friend.firstName.toLowerCase().includes(findFriendsValue) || friend.lastName.toLowerCase().includes(findFriendsValue))
    findFriendsUl.classList.remove("hidden")
    findFriendsUl.innerHTML = "";
    findFriendsList.forEach(friend => {
      const html = `<li class="find-friend-item">
      <img src=${friend.img} class="profile-picture-small">
      <p class="find-friend-name">${friend.firstName} ${friend.lastName}</p>
      </li>`;
      findFriendsUl.insertAdjacentHTML("afterbegin", html)
    })
  } else findFriendsUl.classList.add("hidden")
})

postsList.addEventListener("click", (event) => {
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
      currentCommentsList.insertAdjacentHTML("afterbegin", html)
    })
    return
  }

  if (event.target.classList.contains("comments-paragraph") && event.target.classList.contains("is-active")){
    const postParent = event.target.closest("li")
    const currentCommentsList = postParent.querySelector(".comments-list");
    currentCommentsList.innerHTML = "";
    event.target.classList.remove("is-active")
  }
})

postForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (postInputValue.trim().length > 0) {
    const newPost = new Post(newUser.firstName, newUser.lastName, newUser.img, new Date(), postInputValue);
    newUser.addPost(newPost);
    newUser.renderPosts();
    postInput.value = "";
    postInputValue = ""
  }
})
