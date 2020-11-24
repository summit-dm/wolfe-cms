/**
 * Call To Action - Triple Schema
 */
export default {
  name: 'ctaTriple',
  title: 'CTA Triple',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
    },
    {
      name: 'card1',
      title: 'Card 1',
      type: 'card'
    },
    {
      name: 'card2',
      title: 'Card 2',
      type: 'card'
    },
    {
      name: 'card3',
      title: 'Card 3',
      type: 'card'
    }
  ]
}
