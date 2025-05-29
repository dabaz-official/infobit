import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
 
export const metadata = {
  title: {
    default: 'InfoBit',
    template: '%s | InfoBit',
  },
}
 
const banner = <Banner storageKey="some-key">InfoBit by DabAZ is released 🎉</Banner>
const navbar = (
  <Navbar
    logo={<b>InfoBit</b>}
  />
)
const footer = <Footer>MIT {new Date().getFullYear()} © DabAZ.</Footer>
 
export default async function RootLayout({ children }) {
  return (
    <html
      lang="zh"
      dir="ltr"
      suppressHydrationWarning
    >
      <Head>
        <title>{metadata.title.default}</title>
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/dabaz-official/infobit/tree/main"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}