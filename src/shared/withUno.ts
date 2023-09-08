const base = ['font']

export function withUno<T>(attrs: T[]) {
  return base.concat(attrs)
}