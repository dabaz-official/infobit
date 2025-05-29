import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import cn from 'clsx'

import { InfoBitWordmark, DabAZWordmark } from './wordmark'
 
export const metadata = {
  title: {
    default: 'InfoBit - Information Theory',
    template: '%s | InfoBit',
  },
  metadataBase: new URL('https://infobit.dabaz.me'),
  generator: 'Next.js',
  appleWebApp: {
    title: 'InfoBit'
  },
  oprnGraph: {
    url: './',
    siteName: 'InfoBit',
    locale: 'zh',
    type: 'website'
  },
  other: {
    'msapplication-TileColor': '#ffffff',
  }
}
 
const banner = <Banner>InfoBit by DabAZ is released 🎉</Banner>
const navbar = (
  <Navbar
    logo={
      <InfoBitWordmark
        height="20"
        weight="auto"
        className={cn('hover:transition-all hover:duration-1000', '[mask-image:linear-gradient(60deg,#000_25%,rgba(0,0,0,.2)_50%,#000_75%)] [mask-position:0] [mask-size:400%]','hover:[mask-position:100%]')}
      />
    }
    projectLink='https://github.com/dabaz-official/infobit'
  />
)
const footer = (
  <Footer className='flex-col items-center md:items-start'>
    <a
      className='text-xs'
      target='_blank'
      rel='noreferrer'
      title='DabAZ Homepage'
      href='https://dabaz.me?utm_source=infobit.dabaz.me'
    >
      MIT {new Date().getFullYear()} © DabAZ.
    </a>
  </Footer>
)
 
export default async function RootLayout({ children }) {
  return (
    <html
      lang="zh"
      dir="ltr"
      suppressHydrationWarning
    >
      <Head />
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/dabaz-official/infobit"
          footer={footer}
          editLink='编辑此页面'
          navigation={{
            prev: true,
            next: true
          }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}