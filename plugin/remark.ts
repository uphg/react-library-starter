import fs from 'fs'
import path from 'path'
import { visit } from 'unist-util-visit';
import { getHighlighter } from 'shiki'

export const remarkReactDemo = () => async (tree) => {
  const highlighter = await getHighlighter({ theme: 'material-theme-darker' })
  visit(tree, (node) => {
    if (node.name === 'Demo') {
      const index = node.attributes.findIndex(item => item.name === 'path')
      const filePath = node.attributes[index].value
      const demoPath = `${path.resolve('./docs')}`
      const component = path.resolve(demoPath, `${filePath}.tsx`)
      const source = fs.readFileSync(component, 'utf-8')
      node.attributes[index].value = highlighter.codeToHtml(source, { lang: 'tsx' })
    }
    if (node.type !== 'containerDirective' || !node.name) {
      return;
    }
    const data = node.data || (node.data = {});

    data.hName = 'div';
    data.hProperties = {
      class: `block`
    };

    node.children = [
      {
        type: 'mdxJsxFlowElement',
        name: 'Demo',
        attributes: [
          { type: 'mdxJsxAttribute', name: 'code', value: `<div></div>` },
          { type: 'mdxJsxAttribute', name: 'component', value: `Button` },
        ],
        children: [],
        data: { _mdxExplicitJsx: true }
      }
    ]

  })
}
