import { defineConfig, presetAttributify, presetUno } from 'unocss'
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx'

export default defineConfig({
  safelist: [],
  presets: [
    presetUno(),
    presetAttributify()
  ],
  transformers: [
    transformerAttributifyJsx(), // <--
  ]
})
