import type { AttributifyAttributes } from '@unocss/preset-attributify'

declare module 'react' {

  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T>, AttributifyAttributes {

  }
}