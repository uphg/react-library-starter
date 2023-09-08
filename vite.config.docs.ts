import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import mdx from '@mdx-js/rollup'
import remarkDirective from 'remark-directive'
import { remarkReactDemo } from './plugin/remark'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  resolve: {
    alias: {
      '@banana': fileURLToPath(new URL('./src', import.meta.url)),
    }
  },
  plugins: [
    UnoCSS(),
    mdx({
      remarkPlugins: [
        remarkDirective,
        remarkReactDemo
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