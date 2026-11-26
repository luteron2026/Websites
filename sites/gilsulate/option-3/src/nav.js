export const NAV = [
  { label: 'Product', base: '/product', items: [
    ['Overview', '/product'], ['What is Gilsulate?', '/product/what'], ['Why Gilsulate?', '/product/why'],
    ['Setting the standard', '/product/standard'], ['Sustainability', '/product/sustainability'],
    ['Required components', '/product/components'],
  ] },
  { label: 'Systems', base: '/systems', to: '/systems' },
  { label: 'Who we help', base: '/clients', items: [
    ['Owners', '/clients/owner'], ['Engineers', '/clients/engineer'], ['Contractors', '/clients/contractor'],
    ['EPC firms', '/clients/epc'], ['Military', '/clients/military'],
  ] },
  { label: 'Technical info', base: '/tech', items: [
    ['Overview', '/tech'], ['Case studies', '/tech/case-studies'], ['FAQ', '/tech/faq'],
    ['Density', '/tech/density'], ['Documents', '/tech/documents'],
  ] },
  { label: 'News', base: '/news', to: '/news' },
  { label: 'About', base: '/about', items: [
    ['About us', '/about'], ['Mission statement', '/about/mission'], ['Quality policy', '/about/quality'],
  ] },
]

export const slug = (s) => s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
export const inGroup = (g, pathname) => pathname === g.base || pathname.startsWith(g.base + '/')
