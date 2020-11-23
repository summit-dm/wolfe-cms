import { FaRegFileAlt } from 'react-icons/fa'

export default {
  name: 'home',
  title: 'Home',
  type: 'document',
  icon: FaRegFileAlt,
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'keywords',
      title: 'SEO Keywords',
      type: 'string',
      options: {
        source: 'title',
        maxLength: 126,
      },
    },
    // Hero Section
    {
      name: 'hero',
      title: 'Hero Section',
      type: 'hero3'
    },
    // Reviews Section
    {
      name: 'reviews',
      title: 'Google Reviews',
      type: 'array',
      options: {
        collapsible: true,
        collapsed: true,
      },
      of: [
        {
          type: 'reference',
          to: [{type: 'reviews'}]
        }
      ]
    }
  ]
}
