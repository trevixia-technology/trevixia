import { useEffect } from 'react'

const SITE_NAME = 'Trevixia'
const SITE_URL = 'https://trevixia-tech.github.io/trevixia'
const DEFAULT_IMAGE = `${SITE_URL}/logo/trevixia-tbg.png`

function upsertMeta(attr, key, value) {
  if (!value) return

  let tag = document.head.querySelector(`meta[${attr}="${key}"]`)

  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, key)
    document.head.appendChild(tag)
  }

  tag.setAttribute('content', value)
}

function upsertLink(rel, href) {
  if (!href) return

  let tag = document.head.querySelector(`link[rel="${rel}"]`)

  if (!tag) {
    tag = document.createElement('link')
    tag.setAttribute('rel', rel)
    document.head.appendChild(tag)
  }

  tag.setAttribute('href', href)
}

function upsertJsonLd(id, payload) {
  if (!payload) return

  let tag = document.head.querySelector(`#${id}`)

  if (!tag) {
    tag = document.createElement('script')
    tag.type = 'application/ld+json'
    tag.id = id
    document.head.appendChild(tag)
  }

  tag.textContent = JSON.stringify(payload)
}

export default function SEO({
  title,
  description,
  path = '/',
  keywords,
  type = 'website',
  noindex = false,
  image = DEFAULT_IMAGE,
  schema,
}) {
  useEffect(() => {
    const pageTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Inspired by Nature. Built for Technology`
    const normalizedPath = path === '/' ? '/' : `/${path.replace(/^\/+|\/+$/g, '')}`
    const canonical = `${SITE_URL}${normalizedPath}`
    const robots = noindex ? 'noindex, nofollow' : 'index, follow'

    document.title = pageTitle

    upsertMeta('name', 'description', description)
    upsertMeta('name', 'keywords', keywords)
    upsertMeta('name', 'robots', robots)

    upsertMeta('property', 'og:title', pageTitle)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:type', type)
    upsertMeta('property', 'og:url', canonical)
    upsertMeta('property', 'og:site_name', SITE_NAME)
    upsertMeta('property', 'og:image', image)

    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', pageTitle)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', image)

    upsertLink('canonical', canonical)

    const defaultSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: pageTitle,
      description,
      url: canonical,
      isPartOf: {
        '@type': 'WebSite',
        name: SITE_NAME,
        url: `${SITE_URL}/`,
      },
    }

    upsertJsonLd('seo-json-ld', schema || defaultSchema)
  }, [description, image, keywords, noindex, path, schema, title, type])

  return null
}
