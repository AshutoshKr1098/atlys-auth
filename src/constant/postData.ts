export interface Post {
  userId: number;
  username: string;
  thumbnailUrl: string;
  emoji: string;
  content: string;
  lastUpdated: string;
  isEdited: boolean;
  commentCount: number;
}

export const POST_DATA: Post[] = [
  {
    userId: 1,
    username: "Theresa Webb",
    thumbnailUrl:
      "https://res.cloudinary.com/dygjrwk78/image/upload/v1726260436/Ellipse_2_shviyb.webp",
    emoji: "👋",
    lastUpdated: "5 mins ago",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    isEdited: false,
    commentCount: 24,
  },
  {
    userId: 2,
    username: "Marvin McKinney",
    thumbnailUrl:
      "https://res.cloudinary.com/dygjrwk78/image/upload/v1726260436/Ellipse_2_1_n64t9t.webp",
    emoji: "😞",
    lastUpdated: "8 mins ago",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    isEdited: true,
    commentCount: 12,
  },
];
