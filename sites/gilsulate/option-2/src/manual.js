// The site is arranged like a printed manual: numbered sections, each with its pages.
export const SECTIONS = [
  { n: '1', title: 'The Product', base: '/product', pages: [
    ['Overview', '/product'], ['What is Gilsulate?', '/product/what'], ['Why Gilsulate?', '/product/why'],
    ['Setting the Standard', '/product/standard'], ['Sustainability', '/product/sustainability'],
    ['Required Components', '/product/components'],
  ] },
  { n: '2', title: 'Systems', base: '/systems', pages: [['Index of Applications', '/systems']] },
  { n: '3', title: 'Technical Information', base: '/tech', pages: [
    ['Overview', '/tech'], ['Questions & Answers', '/tech/faq'], ['Density', '/tech/density'],
    ['Case Studies', '/tech/case-studies'], ['Documents', '/tech/documents'],
  ] },
  { n: '4', title: 'For Your Trade', base: '/clients', pages: [
    ['Owners', '/clients/owner'], ['Engineers', '/clients/engineer'], ['Contractors', '/clients/contractor'],
    ['EPC Firms', '/clients/epc'], ['Military', '/clients/military'],
  ] },
  { n: '5', title: 'News', base: '/news', pages: [['Notes from the Company', '/news']] },
  { n: '6', title: 'The Company', base: '/about', pages: [
    ['About Us', '/about'], ['Mission Statement', '/about/mission'], ['Quality Policy', '/about/quality'],
  ] },
  { n: '7', title: 'Correspondence', base: '/contact', pages: [['Request a Quotation', '/contact']] },
]

export function locate(pathname) {
  const s = SECTIONS.find((x) => pathname === x.base || pathname.startsWith(x.base + '/'))
  if (!s) return null
  let i = s.pages.findIndex(([, to]) => to === pathname)
  if (i < 0) {
    // detail pages (a system, a case study) sit under their parent page
    i = s.pages.findIndex(([, to]) => to !== s.base && pathname.startsWith(to + '/'))
    if (i < 0) i = 0
  }
  return { section: s, index: i, number: `${s.n}.${i + 1}` }
}

export const HISTORY = [
  ['1943', 'Development of the original product begins.'],
  ['1949', 'First commercial use of Gilsulate granular insulation.'],
  ['1978', '500XR enters commercial production.'],
  ['1980', 'U.S. Patent 4,231,884 granted.'],
  ['2002', 'Gilsulate International incorporated by Laura Duncan.'],
]

export const slug = (s) => s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
