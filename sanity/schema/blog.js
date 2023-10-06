const blogSchema = {
  name: "blog",
  title: "Blogs",
  type: "document",
  fields:[
    {
      name: "blogTitle",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "blogSlug",
      title: "Slug",
      type: "slug",
      options: {
        source: "blogTitle",
      },

    },
    {
      name: "intro",
      title: "Brief Introduction",
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: "url",
      title: "URL",
      type: "url"
    },
    {
      name: 'publishDate',
      title: 'Published',
      type: 'datetime'
    }

  ]
}

export default blogSchema;