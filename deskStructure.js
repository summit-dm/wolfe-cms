import S from "@sanity/desk-tool/structure-builder"

// import React Icon for list item
import { FaRegFileAlt } from 'react-icons/fa'

export default () => S.list()
  .title('Content')
  .items([
    S.listItem()
      .title('Home')
      .icon(FaRegFileAlt)
      .child(
        S.editor()
        .schemaType('home')
        .documentId('home')
      ),
    // Adds a visual divider
    S.divider(),
    // List doc types but filter out config type
    ...S.documentTypeListItems()
        .filter(listItem => !['home'].includes(listItem.getId()))
  ])
