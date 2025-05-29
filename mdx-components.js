import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs'

const themeComponents = getThemeComponents()

export function useMDXComponents(components){
  return {
    ...themeComponents,
    ...components,
    img: props => (
      <img
        {...props}
        className="nextra-border rounded-xl border drop-shadow-sm"
      />
    )
  }
}