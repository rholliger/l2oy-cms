export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'lead',
      title: 'Lead',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'teaserImage',
      title: 'Teaser image',
      type: 'image',
      fields: [
        {
          type: 'string',
          name: 'alt',
          title: 'Alt-Text',
        },
      ],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      fields: [
        {
          type: 'string',
          name: 'alt',
          title: 'Alt-Text',
        },
      ],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      options: {
        dateFormat: 'DD.MM.YYYY',
      },
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      title: 'Only accessible through link',
      name: 'onlyAccessibleThroughLink',
      type: 'boolean',
      initialValue: false,
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
