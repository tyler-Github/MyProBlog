import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function FourZeroFour() {
  return (
    <>
      <PageSEO title={`SEO ${siteMetadata.title}`} />
      <div>google-site-verification: google7601585b43400bf4.html</div>
    </>
  )
}
