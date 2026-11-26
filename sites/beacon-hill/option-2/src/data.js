// Content drawn from beaconhillclassical.org (read November 2026). Tuition and schedules are the school's published 2026–27 figures.

export const CO = {
  name: 'Beacon Hill Classical Academy', motto: 'Truth. Beauty. Goodness.', latin: 'In lumine Tuo videbimus lumen', english: 'In your light do we see light. Psalm 36:9',
}

export const CAMPUSES = [
  { id: 'lower', name: 'Lower School', grades: 'Grades K–5', address: '2304 Antonio Ave, Camarillo, CA 93010', phone: '805-389-6581', tel: '+18053896581', tour: 'https://docs.google.com/forms/d/e/1FAIpQLSfTHC1A9yIz0C-oAKUWIViOYNoAh24UqUgMrx8wjY2XCwr8TQ/viewform' },
  { id: 'upper', name: 'Upper School', grades: 'Grades 6–12', address: '1601 Temple Ave, Camarillo, CA 93010', phone: '805-586-4880', tel: '+18055864880', tour: 'https://docs.google.com/forms/d/e/1FAIpQLSccSqutyilMI_vOtMMohn7aHMtt1WfaMyzjOYx7lSbB8qXfKQ/viewform' },
]
export const mapUrl = (a) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(a)}`

export const LINKS = {
  apply: 'https://bhca.scholae.app/apply', login: 'https://bhca.scholae.app/home', facts: 'https://online.factsmgt.com/signin/4JRTF', canvas: 'https://beaconhill.instructure.com',
  calendar: 'https://www.beaconhillclassical.org/calendar.html', athletics: 'https://www.beaconhillclassical.org/athletics.html', store: 'https://www.beaconhillclassical.org/store', giving: 'https://www.beaconhillclassical.org/giving.html',
}

export const NAV = [['About', '/about'], ['Programs', '/programs'], ['Admissions', '/admissions'], ['Tuition', '/tuition'], ['Student life', '/life'], ['Visit', '/visit']]

export const VISION = 'To graduate wise and eloquent Christians for the glory of Christ, impacting Ventura County and beyond.'
export const MISSION = 'Beacon Hill cultivates an appreciation for beauty, a love of goodness and a devotion to truth by discipling the whole person through a classical Christian education.'

export const PILLARS = [
  ['Christian education', 'The most important part of a successful education is Christian discipleship. Above all, we want our children to know Christ.'],
  ['Classical education', 'The liberal arts of grammar, logic, rhetoric and mathematics are not just subjects. They are the tools that unlock all other learning.'],
  ['Parental involvement', 'We labor alongside families of the Church to equip and inspire students.'],
  ['Accessibility', 'Full-time and collaborative programs, sibling discounts, payment plans and scholarship applications.'],
]

export const TRIVIUM = [
  ['Grammar', 'Grades K–5', 'The early years absorb facts and lay foundations: phonics, formal grammar, word studies, composition, public speaking and literature. Students memorize at least six long poems a year.', 'painting'],
  ['Logic', 'Grades 6–8', 'Students learn to think through arguments: to solve problems, build and understand arguments and spot fallacies. Formal logic begins in grade 5 and runs four years.', 'weaving'],
  ['Rhetoric', 'Grades 9–12', 'Students learn to express themselves wisely and persuasively, with a house system, senior trips and a senior year that ends in commencement.', 'retreat-hume'],
]

export const GRADES = ['Kindergarten', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
const band = (g) => (g === 'Kindergarten' ? 'k' : +g <= 5 ? 'grammar' : +g <= 8 ? 'logic' : 'rhetoric')

// 2026–27 published figures. days: Monday to Friday, true means on campus.
const T = {
  k: { full: 9113, collab: 7964, fee: 450, fullHours: '8:30 a.m. to 3:00 p.m.', hours: '8:30 to 11:30 a.m. or 12:15 to 3:00 p.m. (KinderEnrichment can fill the day)', days: [false, false, true, true, true], campus: 'lower' },
  grammar: { full: 10451, collab: 9218, fee: 450, hours: '8:30 a.m. to 3:00 p.m.', days: [false, false, true, true, true], campus: 'lower' },
  logic: { full: 10880, collab: 10256, fee: 475, hours: '8:45 a.m. to 2:55 p.m.', days: [false, true, true, true, true], campus: 'upper' },
  rhetoric: { full: 14941, collab: 14683, fee: 525, hours: '8:45 a.m. to 2:55 p.m.', days: [false, true, true, true, true], campus: 'upper' },
}

export function plan(grade, program) {
  const t = T[band(grade)]
  const full = program === 'full'
  return { tuition: full ? t.full : t.collab, fee: t.fee, hours: full ? t.fullHours || t.hours : t.hours, days: full ? [true, true, true, true, true] : t.days, campus: CAMPUSES.find((c) => c.id === t.campus), senior: grade === '12' }
}

export const TUITION = [
  ['Kindergarten', '$7,964', '$9,113'], ['Grammar, grades 1–5', '$9,218', '$10,451'], ['Logic, grades 6–8', '$10,256', '$10,880'], ['Rhetoric, grades 9–12', '$14,683', '$14,941'],
]
export const FEES = [['Application', '$75'], ['Books, technology and materials', '$450 Grammar, $475 Logic, $525 Rhetoric'], ['Commencement (seniors)', '$400'], ['Pay in full by July 1', '2.5% off (not for scholarship applicants)'], ['Younger enrolled siblings', '10% off'], ['Monthly plan', '12 payments through FACTS, July to June']]
export const GRAMMAR_NOTE = 'The Grammar four-day collaborative option costs the same as full time.'

export const STEPS = [
  ['Apply', 'Complete the online application. The $75 fee is due when you submit, and interviews are scheduled once everything is in.'],
  ['Interview', 'The office sets up a meeting with Mr. Deutsch, Head of School, about eligibility and the school’s mission.'],
  ['Assessment', 'Your student completes literature, math and any other assessments needed.'],
  ['Acceptance', 'Accepted families receive an email with instructions to finish enrollment.'],
]
export const AGES = 'Children entering kindergarten should be 5 by November 1; first grade, 6 by December 1; second grade, 7 by December 1, with some flexibility decided by the Head of School.'

export const QUOTES = [
  ['The teachers don’t just teach the kids, they love them and are truly invested in shaping their character to look like Jesus.', 'A kindergarten parent'],
  ['Nothing is dumbed down. Instead students are expected to rise to the high bar set in learning and behavior.', 'Camille Block'],
  ['Some of the most godly, polite young people I have ever been around! The teachers love the Lord and the kids!', 'Sharon Deutsch'],
]

export const ART = ['lion', 'cathedral', 'autumn-tree', 'squirrel', 'birches', 'knots', 'knights', 'portraits', 'sea-art', 'mummies', 'david', 'young-artist']
