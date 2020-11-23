import { FaRegStar } from 'react-icons/fa'
export default {
  name: 'reviews',
  title: 'Reviews',
  type: 'document',
  icon: FaRegStar,
  options: {
    columns: 2
  },
  fields: [
    {
      name: 'author',
      title: 'Author',
      type: 'string'
    },
    {
      name: 'authorImage',
      title: 'Author Image',
      type: 'image'
    },
    {
      name: 'text',
      title: 'Review',
      type: 'text'
    }
  ]
}