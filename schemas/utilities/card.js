/**
 * Card Utility Schema
 */
export default {
  name: 'card',
  title: 'Card',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'subheading',
      title: 'Subheading',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
    },
    {
      name: 'buttonLink',
      title: 'Button Link',
      type: 'reference',
      to: {type: 'page'},
    }
  ]
}
