import {defineConfig} from 'vite'
import fs from 'fs'
import path from 'path'
import { fileURLToPath, URL } from 'node:url'
import mdx from '@mdx-js/rollup'
import remarkDirective from 'remark-directive';
import { visit } from 'unist-util-visit';
import { getHighlighter } from 'shiki'

const remarkPluginTip = () => async (tree) => {
  const highlighter = await getHighlighter({ theme: 'material-theme-darker' })
  visit(tree, (node) => {
    if (node.name === 'Demo') {
      console.log('node')
      console.log(node.attributes)
      const index = node.attributes.findIndex(item => item.name === 'path')
      const filePath = node.attributes[index].value
      const demoPath = `${path.resolve('./docs')}`
      const a = path.resolve(demoPath, `${filePath}.tsx`)
      console.log('a')
      console.log(a)
      const source = fs.readFileSync(a, 'utf-8')
      console.log('source')
      console.log(source)

      node.attributes[index].value = highlighter.codeToHtml(source, { lang: 'tsx' })
    }
    if (node.type === 'root') {
      console.log('# root')
      console.log(node.children[0].data)
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

export default defineConfig({
  resolve: {
    alias: {
      'banana': fileURLToPath(new URL('./src', import.meta.url)),
    }
  },
  plugins: [
    mdx({
      remarkPlugins: [
        remarkDirective,
        remarkPluginTip
      ]
    })
  ],
  css: {
    modules: {
      // generateScopedName: (name, filename, css) => {
      //   var i = css.indexOf("." + name);
      //   var line = css.substr(0, i).split(/[\r\n]/).length;
      //   var file = path.basename(filename, ".css");
  
      //   return `${file}-${name}`
      // },
      generateScopedName: '[name]_[local]__[hash:base64:5]'
    }
  }
})