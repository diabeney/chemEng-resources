export const courses_query = `
*[_type == "year"]{
  courses[]{
    course_title,
    course_code,
    introduction,
    topics[]{
      topic_title,
      topic_description
    },
    popular_books[]{
      book_title,
      book_author,
      book_url,
      book_image{
      asset ->{
        url
      },
      },
    },
    videos[]{
      video_title,
      video_url
    },
    qna[]{
      question_n_answers,
      qna_url
    }
  }
    
}
`;

// second, fourth, third, first
