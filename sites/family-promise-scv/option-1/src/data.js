// Content drawn from familypromisescv.org (read November 2026). Figures and guidelines are the charity's own.

export const CO = {
  name: 'Family Promise of Santa Clarita Valley',
  short: 'Family Promise SCV',
  phone: '661-251-2868', tel: '+16612512868',
  helpPhone: '661-251-2866', helpTel: '+16612512866', helpEmail: 'casemanager@familypromisescv.org',
  email: 'contact@familypromisescv.org', volunteerEmail: 'volunteer@familypromisescv.org',
  address: '23652 Newhall Ave, Newhall, CA 91321',
  mail: '24820 Orchard Village Rd, Ste A #391, Santa Clarita, CA 91355',
  hours: 'Monday to Thursday 9 a.m. to 5 p.m., Friday 9 a.m. to 1 p.m.',
  taxId: '27-0443114',
  map: 'https://www.google.com/maps/search/?api=1&query=23652+Newhall+Ave+Newhall+CA+91321',
}

export const LINKS = {
  give: 'https://familypromisescv.givingfuel.com/family-promise-donations',
  supplies: 'https://www.amazon.com/hz/wishlist/ls/2UOI4MMW2X3NX',
  wishlist: 'https://www.amazon.com/hz/wishlist/ls/34OXT3RSW8FVI',
  groceries: 'https://form.jotform.com/FPofSCV/grocery-volunteers',
  dinners: 'https://form.jotform.com/FPofSCV/dinner-volunteers',
  workshops: 'https://form.jotform.com/FPofSCV/community-workshops',
  dropSupplies: 'https://form.jotform.com/FPofSCV/supplies',
  food: 'https://form.jotform.com/FPofSCV/grocery',
}

export const NAV = [['Get help', '/get-help'], ['Programs', '/programs'], ['Hope House', '/house'], ['Volunteer', '/volunteer'], ['Give', '/donate'], ['Impact', '/impact']]

export const MISSION = 'We help families experiencing homelessness and low-income families achieve sustainable independence through a community-based response.'
export const MOTTO = 'No child should be homeless.'

export const WHO = {
  yes: ['Two-parent families, single parents and legal guardians with at least one child under 18', 'Pregnant women, with or without other children under 18', 'No formal referral is needed to ask for help'],
  no: 'We are not able to support single adults without children. Please contact Bridge to Home at 661-254-4663.',
}
export const GUIDELINES = ['Complete a criminal background screening', 'No untreated mental health conditions', 'No active domestic violence (a court order must be in place)', 'No active substance use. We test for opioids, alcohol, methamphetamine and THC', 'No pets', 'Able to share a structured group living environment supervised by program staff']
export const GUIDE_NOTE = 'In some cases we can shelter qualifying families in motels. We do not receive or hand out emergency motel vouchers.'

export const PROGRAMS = [
  ['Prevention', 'Helping families stay in the homes they have.', ['Rental assistance when funds are available', 'Shelter diversion', 'Gas cards, transit passes and rides', 'Other emergency assistance'], 'lamp'],
  ['Housing', 'A safe place while a family gets back on its feet.', ['Interim housing for 30 to 90 days', 'Short-term emergency shelter unit', 'Motel stays, case by case'], 'entry'],
  ['Stability', 'Support that carries on after the keys change hands.', ['Case management', 'Connections to community resources', 'Housing stability support', 'Graduate support services'], 'office'],
  ['Essentials', 'The everyday things that keep a household going.', ['Food and household essentials', 'Children’s services referrals', 'Community and behavioral health referrals'], 'pantry'],
]

export const STAY = [
  ['No fee to stay', 'Utilities are covered and every family has its own secured bedroom.'],
  ['Everything provided', 'A stocked kitchen, linens, toiletries and household goods.'],
  ['A plan to move forward', 'Families work with case management on jobs, credit, savings and housing, so they leave with an emergency fund.'],
]

export const FOOD = 'Trader Joe’s food distribution has run every Tuesday and the third Saturday of the month, 9:30 to 11 a.m. Call to confirm this week’s times.'

export const IMPACT = [
  ['143', 'local families received support'],
  ['111', 'families stayed safely housed through rental assistance'],
  ['18', 'families found safety in interim housing'],
  ['12', 'families graduated into permanent housing'],
  ['793+', 'safe nights in hotel and short-term emergency stays'],
  ['1,000+', 'times families were fed with grocery supplies'],
  ['606', 'times families received essential supplies'],
  ['100+', 'volunteers helped serve families'],
]
export const IMPACT_YEAR = '2025–2026'

export const WAYS = [
  { id: 'dinner', kind: 'Time', title: 'Bring a Wednesday dinner', text: 'Cook or buy a meal and deliver it to the interim house on a Wednesday evening, between 5:30 and 6:30. Students earn 2 volunteer hours.', link: ['Sign up for a dinner', LINKS.dinners], photo: 'dining' },
  { id: 'grocery', kind: 'Goods', title: 'Drop off groceries', text: 'Buy one or two bags of groceries, once or on a regular schedule. No time commitment.', link: ['Sign up for groceries', LINKS.groceries], photo: 'groceries' },
  { id: 'supplies', kind: 'Goods', title: 'Give supplies', text: 'Toiletries, cleaning supplies, paper goods, diapers and household items go straight to families at case management meetings.', link: ['Donate supplies', LINKS.dropSupplies], photo: 'frames' },
  { id: 'drive', kind: 'Goods', title: 'Host a donation drive', text: 'Schools, workplaces, churches and local groups can collect supplies or gift cards. We will help you start.', link: ['Email us about a drive', `mailto:donation@familypromisescv.org?subject=Host%20a%20Donation%20Drive`], photo: 'drive' },
  { id: 'workshop', kind: 'Time', title: 'Help at a community workshop', text: 'Monthly evenings from 6 to 7 p.m. on money, resumes, employment and more.', link: ['Sign up to help', LINKS.workshops], photo: 'living' },
  { id: 'money', kind: 'Money', title: 'Give money', text: 'Flexible gifts cover rent assistance, motel stays and transportation, often the difference between stability and crisis.', link: ['Give online', LINKS.give], photo: 'house' },
]

export const EVENTS = [
  { name: 'Holiday toy drive', date: 'Donations needed by December 3, 2026', end: '2026-12-03', text: 'New, unwrapped toys for children ages 1 to 17, for our Family Christmas Party.' },
  { name: 'Family Christmas Party', date: 'December 5, 2026', end: '2026-12-05', text: 'Our annual celebration with the families we serve.' },
  { name: 'Thanksgiving meals', date: 'Donations closed November 23, 2026', end: '2026-11-23', text: 'Cooked or uncooked meals for families and individuals.' },
  { name: 'Light Up Main Street', date: 'November 21, 2026', end: '2026-11-21', text: 'Old Town Newhall.' },
  { name: 'Par for a Purpose Golf Tournament', date: 'September 21, 2026', end: '2026-09-21', text: 'Our biggest fundraiser of the year, at The Oaks Club.' },
]
export const upcoming = () => { const t = new Date().toISOString().slice(0, 10); return EVENTS.filter((e) => e.end >= t).sort((a, b) => a.end.localeCompare(b.end)) }

export const HOUSE = {
  lead: 'Williams Hope House is our 2,700 square foot resource center, with four 815 square foot interim housing units, built through a partnership with local builder Williams Homes.',
  rooms: [['living', 'The gathering room'], ['dining', 'A table big enough for everyone'], ['kitchen', 'Kitchen and shared dining'], ['den', 'A quiet place to sit'], ['office', 'Case management office'], ['pantry', 'The supply pantry'], ['laundry', 'Laundry'], ['entry', 'A front door of their own']],
}

export const HISTORY = 'Family Promise began when Karen Olson stopped to talk with a homeless woman in New York. The first network of congregations opened its doors in October 1986, and the idea has since spread across the country.'
