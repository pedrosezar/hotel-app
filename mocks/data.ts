export type Hotel = {
  id: string;
  cover: string;
  name: string;
  price: number;
  gallery: Array<{ id: number; photo: string }>;
};

export const data: Array<Hotel> = [
  {
    id: "1",
    cover: "https://images.pexels.com/photos/2041556/pexels-photo-2041556.jpeg",
    name: "Hotel Legal",
    price: 189,
    gallery: [
      {
        id: 1,
        photo:
          "https://images.pexels.com/photos/3659683/pexels-photo-3659683.jpeg",
      },
      {
        id: 2,
        photo:
          "https://images.pexels.com/photos/2952663/pexels-photo-2952663.jpeg",
      },
      {
        id: 3,
        photo:
          "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
      },
      {
        id: 4,
        photo:
          "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg",
      },
    ],
  },
  {
    id: "2",
    cover: "https://images.pexels.com/photos/2041556/pexels-photo-2041556.jpeg",
    name: "Hotel Bacana",
    price: 209,
    gallery: [
      {
        id: 1,
        photo:
          "https://images.pexels.com/photos/3659683/pexels-photo-3659683.jpeg",
      },
      {
        id: 2,
        photo:
          "https://images.pexels.com/photos/2952663/pexels-photo-2952663.jpeg",
      },
      {
        id: 3,
        photo:
          "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
      },
      {
        id: 4,
        photo:
          "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg",
      },
    ],
  },
  {
    id: "3",
    cover: "https://images.pexels.com/photos/2041556/pexels-photo-2041556.jpeg",
    name: "Hotel Chique",
    price: 116,
    gallery: [
      {
        id: 1,
        photo:
          "https://images.pexels.com/photos/3659683/pexels-photo-3659683.jpeg",
      },
      {
        id: 2,
        photo:
          "https://images.pexels.com/photos/2952663/pexels-photo-2952663.jpeg",
      },
      {
        id: 3,
        photo:
          "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
      },
      {
        id: 4,
        photo:
          "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg",
      },
    ],
  },
];
