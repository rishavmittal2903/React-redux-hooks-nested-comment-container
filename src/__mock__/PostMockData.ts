import { IComment } from "../model/interfaces/IComment";

export const __mockPostData__: Array<IComment> = [
  {
    id: "1",
    comment: "Because suppose today i have 5 changes and may be tomorrow while developing other feature might be i need to add 3 more changes.",
    name: "User 1",
    date: "19/05/2023, 05:22:24",
    image:"https://picsum.photos/30/30",
    numberOfLikes:0,
    accessPolicy: {
      canDelete: true,
      canShare: true,
      canEdit: true,
    },
    comments: [],
  },
  {
    id: "2",
    comment: "comment 2",
    name: "User 2",
    date: "19/05/2023, 05:22:24",
    image:"https://picsum.photos/30/30",
    numberOfLikes:0,
    accessPolicy: {
      canDelete: true,
      canShare: true,
      canEdit: true,
    },
    comments: [
      {
        id: "3",
        comment: "Reply comment",
        name: "User 3",
        date: "19/05/2023, 05:22:24",
        image:"https://picsum.photos/30/30",
        numberOfLikes:0,
        accessPolicy: {
          canDelete: true,
          canShare: true,
          canEdit: true,
        },
        comments: [
          {
            id: "4",
            comment: "Reply comment",
            name: "User 4",
            date: "19/05/2023, 05:22:24",
            image:"https://picsum.photos/30/30",
            numberOfLikes:0,
            accessPolicy: {
              canDelete: true,
              canShare: true,
              canEdit: true,
            },
            comments: [
              {
                id: "5",
                comment: "Reply comment",
                name: "User 5",
                date: "19/05/2023, 05:22:24",
                image:"https://picsum.photos/30/30",
                numberOfLikes:0,
                accessPolicy: {
                  canDelete: true,
                  canShare: true,
                  canEdit: true,
                },
                comments: [],
              },
            ],
          },
        ],
      },
      {
        id: "10",
        comment: "Reply comment",
        name: "User 3",
        date: "19/05/2023, 05:22:24",
        image:"https://picsum.photos/30/30",
        numberOfLikes:0,
        accessPolicy: {
          canDelete: true,
          canShare: true,
          canEdit: true,
        },
        comments: []}
    ],
  },
  {
    id: "6",
    comment: "comment 3",
    name: "User 6",
    date: "19/05/2023, 05:22:24",
    image:"https://picsum.photos/30/30",
    numberOfLikes:0,
    accessPolicy: {
      canDelete: true,
      canShare: true,
      canEdit: true,
    },
    comments: [],
  },
  {
    id: "7",
    comment: "comment 3",
    name: "User 7",
    date: "19/05/2023, 05:22:24",
    image:"https://picsum.photos/30/30",
    numberOfLikes:0,
    accessPolicy: {
      canDelete: true,
      canShare: true,
      canEdit: true,
    },
    comments: [],
  },
  {
    id: "8",
    comment: "comment 3",
    name: "User 8",
    date: "19/05/2023, 05:22:24",
    image:"https://picsum.photos/30/30",
    numberOfLikes:0,
    accessPolicy: {
      canDelete: true,
      canShare: true,
      canEdit: true,
    },
    comments: [],
  },
  {
    id: "9",
    comment: "comment 3",
    name: "User 9",
    date: "19/05/2023, 05:22:24",
    image:"https://picsum.photos/30/30",
    numberOfLikes:0,
    accessPolicy: {
      canDelete: true,
      canShare: true,
      canEdit: true,
    },
    comments: [],
  }
];
