/**
 * Definition for Button Xl schema
 * Can be reused in studio with
 * {
 *  name: 'someName'
 *  title: 'title'
 *  type: 'buttonXL' 
 * }
 */
export default {
  name: 'buttonXL',
  // title: 'Button XL',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true
  },
  fieldsets: [
    {name: 'options', title: 'Button XL'}
  ],
  fields: [
    {
      name: 'text',
      title: 'Button Text',
      type: 'string',
      fieldset: 'options'
    },
    {
      name: 'docRef',
      title: 'Page Select',
      type: 'reference',
      fieldset: 'options',
      to: [{type: 'post'}]
    },
    {
      name: 'url',
      title: 'Button Alt URL',
      type: 'url',
      fieldset: 'options'
    }
  ]
}
