export const user = {
  id: crypto.randomUUID(),
  name: "Mario",
  lastName: "Milosevic",
  img: "img/profile5.png",
  address: {
    country: "Montenegro",
    city: "Kotor",
    street: "Novo Naselje b.b.",
    socialMedia: {
      facebook: "Mario Milosevic",
      instagram: "mariomilosevic",
    },
  },

  friends: [
    {
      id: crypto.randomUUID(),
      name: "Gordana",
      lastName: "Stouns",
      img: "/img/friendImages/friend1.jpeg",
    },
    {
      id: crypto.randomUUID(),
      name: "Hiroshi",
      lastName: "Tanaka",
      img: "/img/friendImages/friend2.jpeg",
    },
    {
      id: crypto.randomUUID(),
      name: "Kilibarda",
      lastName: "Petrovska",
      img: "/img/friendImages/friend3.jpg",
    },
    {
      id: crypto.randomUUID(),
      name: "Majda",
      lastName: "Odzaklijevska",
      img: "/img/friendImages/friend4.jpg",
    },
    {
      id: crypto.randomUUID(),
      name: "Ethan",
      lastName: "Turner",
      img: "/img/friendImages/friend5.avif",
    },
    {
      id: crypto.randomUUID(),
      name: "Marc",
      lastName: "Anderson",
      img: "/img/friendImages/friend6.png",
    },
  ],

  posts: [
    {
      id: crypto.randomUUID(),
      postText: "A true hero isn't measured by the size of his strength but by the strength of his heart",
      postDate: "2 days ago",
      likes: [
        {
          name: "Gordana",
          lastName: "Stouns",
        },
        {
          name: "Hiroshi",
          lastName: "Tanaka",
        },
      ],
      comments: [
        {
          name: "Gordana",
          lastName: "Stouns",
          commentText: "Wow, this is so profound and inspiring! Couldn't agree more.",
          img: "/img/friendImages/friend1.jpeg",
        },
        {
          name: "Marc",
          lastName: "Anderson",
          commentText: "Absolutely love this quote!",
          img: "/img/friendImages/friend6.png",
        },
        {
          name: "Hiroshi",
          lastName: "Tanaka",
          commentText: "Sometimes, it's the small gestures that make someone a hero",
          img: "/img/friendImages/friend2.jpeg",
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      postText: "It's not who I am underneath, but what I do that defines me.",
      postDate: "7 days ago",
      likes: [
        {
          name: "Ethan",
          lastName: "Turner",
        },
      ],
      comments: [],
    },
    {
      id: crypto.randomUUID(),
      postText: "If I'm to choose between one evil and another, I'd rather not choose at all.",
      postDate: "1 day ago",
      likes: [
        { name: "Kilibarda", lastName: "Petrovska" },
        { name: "Hiroshi", lastName: "Tanaka" },
        { name: "Marc", lastName: "Anderson" },
        { name: "Maja", lastName: "Odzaklijevska" },
      ],
      comments: [
        {
          name: "Gordana",
          lastName: "Stouns",
          commentText: "Sometimes the choices we face are so tough, it's almost like navigating through shades of gray.",
          img: "/img/friendImages/friend1.jpeg",
        },
        {
          name: "Marc",
          lastName: "Anderson",
          commentText: " Choosing between evils can be a dilemma, but your stance adds a layer of wisdom to it. ",
          img: "/img/friendImages/friend6.png",
        },
        {
          name: "Ethan",
          lastName: "Turner",
          commentText: " It's a reminder that sometimes the best option is to stay true to your principles, even if the choices seem challenging.",
          img: "/img/friendImages/friend5.avif",
        },
        {
          name: "Majda",
          lastName: "Odzaklijevska",
          commentText: "Makes me ponder on the importance of staying true to one's moral compass. ",
          img: "/img/friendImages/friend4.jpg",
        },
      ],
    },
  ],
};