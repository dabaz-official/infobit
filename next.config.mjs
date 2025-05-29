import nextra from 'nextra'

const withNextra = nextra({
  latex: true,
  defaultShowCopyCode: true,
  whiteListTagsStyling: ['figure', 'figcaption']
})

export default withNextra({
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  }
})