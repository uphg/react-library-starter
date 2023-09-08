// type ValueOf<T> = T[keyof T];

const attrs = ['className', 'border', 'font']

export function withProps<T extends object>(rawProps: T, expands?: T) {
  const keys = Object.keys(rawProps) as Array<keyof T>
  const props: T | NonNullable<unknown> = {}
  keys.forEach((key) => {
    if (key !== 'children') {
      let value
      if (attrs.includes(key as string)) {
        value = expands?.[key] ? [expands[key], rawProps[key]].join(' ') : rawProps[key]
      } else {
        value = rawProps[key]
      }
      ;(props as T)[key] = value
    }
  })
  return props as Omit<T, 'children'>
}
