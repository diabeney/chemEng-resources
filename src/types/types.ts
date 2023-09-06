type Topics = Record<"topic_title" | "topic_description", string>;
type PBooks = {
  book_title: string;
  book_url: string;
  book_image?: {
    asset: {
      url: string;
    };
  };
  book_author: string;
};
type Videos = Record<"video_title" | "video_url", string>;
type QNA = Record<"qna_url" | "question_n_answers", string>;

export type TCoursePage = {
  course_title: string;
  course_code: string;
  introduction: string;
  topics: Topics[];
  popular_books: PBooks[];
  videos: Videos[];
  qna: QNA[];
};

export type CourseResponse = {
  courses: TCoursePage[];
};

export type UpdatedCourse = Record<
  "first" | "second" | "third" | "fourth",
  CourseResponse
>;
