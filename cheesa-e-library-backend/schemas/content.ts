export default {
  name: 'year',
  type: 'document',
  title: 'Class Year',
  fields: [
    {
      name: 'year',
      title: 'Class Year',
      type: 'string',
    },
    {
      name: 'courses',
      title: 'Courses',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'course_title',
              title: 'Course Title',
              type: 'string',
            },
            {
              name: 'course_code',
              title: 'Course Code',
              type: 'string',
            },
            {
              name: 'introduction',
              title: 'Introduction',
              type: 'text',
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
                      type: 'text',
                      title: 'Topic Description',
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
                      name: 'question_n_answers',
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
        },
      ],
    },
  ],
}
