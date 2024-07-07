export const user = {
  id: crypto.randomUUID(),
  firstName: "Dario",
  lastName: "Jularic",
  img: "images/avatar-image2.jpg",
  backgroundImg: "images/background-image.jpg",
  address: {
    country: "Croatia",
    city: "Zagreb",
    street: "Tina Ujevica",
    socialMedia: {
      facebook: "Dario Jularic",
      instagram: "dariojularic",
    },
  },

  friends: [
    {
      id: crypto.randomUUID(),
      firstName: "Gordana",
      lastName: "Stouns",
      img: "/images/profile1.jpg",
    },
    {
      id: crypto.randomUUID(),
      firstName: "Hiroshi",
      lastName: "Tanaka",
      img: "/images/profile2.jpg",
    },
    {
      id: crypto.randomUUID(),
      firstName: "Kilibarda",
      lastName: "Petrovska",
      img: "/images/profile3.jpg",
    },
    {
      id: crypto.randomUUID(),
      firstName: "Majda",
      lastName: "Odzaklijevska",
      img: "/images/profile4.jpg",
    },
    {
      id: crypto.randomUUID(),
      firstName: "Ethan",
      lastName: "Turner",
      img: "/images/profile5.jpg",
    },
    {
      id: crypto.randomUUID(),
      firstName: "Marc",
      lastName: "Anderson",
      img: "/images/profile6.jpg",
    },
  ],

  posts: [
    {
      id: crypto.randomUUID(),
      postText: "A true hero isn't measured by the size of his strength but by the strength of his heart",
      postDate: new Date(2024, 1, 25, 10, 30),
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
          img: "/images/profile1.jpg",
        },
        {
          firstName: "Marc",
          lastName: "Anderson",
          commentText: "Absolutely love this quote!",
          img: "/images/profile6.jpg",
        },
        {
          firstName: "Hiroshi",
          lastName: "Tanaka",
          commentText: "Sometimes, it's the small gestures that make someone a hero",
          img: "/images/profile2.jpg",
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      postText: "It's not who I am underneath, but what I do that defines me.",
      postDate: new Date(2024, 4, 12, 10, 30),
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
      postDate: new Date(2024, 5, 22, 10, 30),
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
          img: "/images/profile1.jpg",
        },
        {
          firstName: "Marc",
          lastName: "Anderson",
          commentText: " Choosing between evils can be a dilemma, but your stance adds a layer of wisdom to it. ",
          img: "/images/profile6.jpg",
        },
        {
          firstName: "Ethan",
          lastName: "Turner",
          commentText: " It's a reminder that sometimes the best option is to stay true to your principles, even if the choices seem challenging.",
          img: "/images/profile5.jpg",
        },
        {
          firstName: "Majda",
          lastName: "Odzaklijevska",
          commentText: "Makes me ponder on the importance of staying true to one's moral compass. ",
          img: "/images/profile4.jpg",
        },
      ],
    },
  ],
};
