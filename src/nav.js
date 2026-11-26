export const NAV = [
  { label: 'Clients', base: '/clients', items: [
    ['Owner', '/clients/owner'], ['Engineer', '/clients/engineer'], ['Contractor', '/clients/contractor'],
    ['EPC', '/clients/epc'], ['Military', '/clients/military'],
  ] },
  { label: 'Product', base: '/product', items: [
    ['Overview', '/product'], ['Why Gilsulate?', '/product/why'], ['What is Gilsulate?', '/product/what'],
    ['Setting the Standard', '/product/standard'], ['Sustainability', '/product/sustainability'],
    ['Required Components', '/product/components'],
  ] },
  { label: 'Systems', base: '/systems', to: '/systems' },
  { label: 'Tech Info', base: '/tech', items: [
    ['Overview', '/tech'], ['FAQ', '/tech/faq'], ['Case Studies', '/tech/case-studies'],
    ['Density', '/tech/density'], ['Tech Documents', '/tech/documents'],
  ] },
  { label: 'News', base: '/news', to: '/news' },
  { label: 'About', base: '/about', items: [
    ['About Us', '/about'], ['Mission Statement', '/about/mission'], ['Quality Policy', '/about/quality'],
  ] },
]

export const groupFor = (pathname) => NAV.find((g) => g.items && pathname.startsWith(g.base))
