export const user = {
  id: crypto.randomUUID(),
  firstName: "Mario",
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
      firstName: "Gordana",
      lastName: "Stouns",
      img: "/img/friendImages/friend1.jpeg",
    },
    {
      id: crypto.randomUUID(),
      firstName: "Hiroshi",
      lastName: "Tanaka",
      img: "/img/friendImages/friend2.jpeg",
    },
    {
      id: crypto.randomUUID(),
      firstName: "Kilibarda",
      lastName: "Petrovska",
      img: "/img/friendImages/friend3.jpg",
    },
    {
      id: crypto.randomUUID(),
      firstName: "Majda",
      lastName: "Odzaklijevska",
      img: "/img/friendImages/friend4.jpg",
    },
    {
      id: crypto.randomUUID(),
      firstName: "Ethan",
      lastName: "Turner",
      img: "/img/friendImages/friend5.avif",
    },
    {
      id: crypto.randomUUID(),
      firstName: "Marc",
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
          firstName: "Gordana",
          lastName: "Stouns",
        },
        {
          firstName: "Hiroshi",
          lastName: "Tanaka",
        },
      ],
      comments: [
        {
          firstName: "Gordana",
          lastName: "Stouns",
          commentText: "Wow, this is so profound and inspiring! Couldn't agree more.",
          img: "/img/friendImages/friend1.jpeg",
        },
        {
          firstName: "Marc",
          lastName: "Anderson",
          commentText: "Absolutely love this quote!",
          img: "/img/friendImages/friend6.png",
        },
        {
          firstName: "Hiroshi",
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
          firstName: "Ethan",
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
        { firstName: "Kilibarda", lastName: "Petrovska" },
        { firstName: "Hiroshi", lastName: "Tanaka" },
        { firstName: "Marc", lastName: "Anderson" },
        { firstName: "Maja", lastName: "Odzaklijevska" },
      ],
      comments: [
        {
          firstName: "Gordana",
          lastName: "Stouns",
          commentText: "Sometimes the choices we face are so tough, it's almost like navigating through shades of gray.",
          img: "/img/friendImages/friend1.jpeg",
        },
        {
          firstName: "Marc",
          lastName: "Anderson",
          commentText: " Choosing between evils can be a dilemma, but your stance adds a layer of wisdom to it. ",
          img: "/img/friendImages/friend6.png",
        },
        {
          firstName: "Ethan",
          lastName: "Turner",
          commentText: " It's a reminder that sometimes the best option is to stay true to your principles, even if the choices seem challenging.",
          img: "/img/friendImages/friend5.avif",
        },
        {
          firstName: "Majda",
          lastName: "Odzaklijevska",
          commentText: "Makes me ponder on the importance of staying true to one's moral compass. ",
          img: "/img/friendImages/friend4.jpg",
        },
      ],
    },
  ],
};