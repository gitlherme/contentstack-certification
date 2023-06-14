export const renderOption = {
  // to render Supercharged RTE NodeType content like paragraph, link, table, order list, un-order list and more.
  p: (node: any, next: any) => {
    return `<p>${next(node.children)}</p>`
  }
}
