export default {
  name: 'first_year',
  type: 'document',
  title: 'First Year',
  fields: [
    {
      name: 'course_title',
      type: 'string',
      title: 'Course Title',
    },
    {
      name: 'course_code',
      type: 'string',
      title: 'Course Code',
    },
    {
      name: 'course_description',
      type: 'text',
      title: 'Course Introduction',
    },
    {
      name: 'topics',
      type: 'array',
      title: 'Topics and Description',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'topic_title',
              type: 'string',
              title: 'Topic Title',
            },
            {
              name: 'topic_description',
              type: 'array',
              title: 'Topic Description',
              of: [{type: 'block'}],
            },
          ],
        },
      ],
    },
    {
      name: 'popular_books',
      type: 'array',
      title: 'Popular Books',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'book_title',
              title: 'Book Title',
              type: 'string',
            },
            {
              name: 'book_author',
              title: 'Book Author',
              type: 'string',
            },
            {
              name: 'book_image',
              title: 'Book Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'book_url',
              title: 'Book URL',
              type: 'url',
            },
          ],
        },
      ],
    },
    {
      name: 'videos',
      type: 'array',
      title: 'Videos',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'video_title',
              type: 'string',
              title: 'Video Title',
            },
            {
              name: 'video_url',
              type: 'url',
              title: 'Video URL',
            },
          ],
        },
      ],
    },
    {
      name: 'qna',
      type: 'array',
      title: 'Questions and Answers',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'question_n_anwers',
              type: 'string',
              title: 'Question and Answer',
            },
            {
              name: 'qna_url',
              type: 'url',
              title: 'Question and Answer URL',
            },
          ],
        },
      ],
    },
  ],
}
