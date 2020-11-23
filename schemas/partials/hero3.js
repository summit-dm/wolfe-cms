/** 
 * Hero Triple Button Partial Schema
 * 
 * Use in Studio
 * {
 *  name: 'somename',
 *  title: 'title',
 *  type: 'hero3'
 * }
 */
export default {
  name: 'hero3',
  title: 'Hero Triple Section',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true
  },
  fields: [
    {
      name: 'title',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'text',
      title: 'Subheading',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'button1',
      title: 'Button One',
      type: 'buttonXL',
    },
    {
      name: 'button2',
      title: 'Button Two',
      type: 'buttonXL',
    },
    {
      name: 'button3',
      title: 'Button Three',
      type: 'buttonXL',
    }
  ]
}
