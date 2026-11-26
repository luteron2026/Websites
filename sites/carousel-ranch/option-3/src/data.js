// Content drawn from carouselranch.org (read November 2026).

export const CO = {
  name: 'Carousel Ranch', tagline: 'A place where therapy is disguised as fun.',
  phone: '661-268-8010', tel: '+16612688010', email: 'hello@carouselranch.org',
  address: '34289 Rocking Horse Road, Santa Clarita, CA 91390', taxId: '95-4646461',
  map: 'https://www.google.com/maps/search/?api=1&query=34289+Rocking+Horse+Road+Santa+Clarita+CA+91390',
}
export const LINKS = {
  donate: 'https://www.carouselranch.org/donate', shop: 'https://www.carouselranch.org/shop',
  waitlist: 'https://form.jotform.com/260687852647169', rtw: 'https://form.jotform.com/231787385586070',
  guidelines: 'https://static.spacecrafted.com/cee889229e8847a8a5489cbe58b8175d/r/e685e053ae724792a2d1775d27985f36/1/Volunteer_Guideline2026.pdf',
  release: 'https://static.spacecrafted.com/cee889229e8847a8a5489cbe58b8175d/r/c272ffa4cdc64bc4ba47516f22f1d677/1/Volunteer%20Information%20and%20Release.pdf',
}
export const NAV = [['Equestrian therapy', '/equestrian-therapy'], ['Ready to Work!', '/ready-to-work'], ['Our horses', '/horses'], ['Volunteer', '/volunteer'], ['Give', '/give'], ['About', '/about']]

export const MISSION = 'We are dedicated to improving the lives of children and young adults with special needs. Through equestrian therapy and vocational training, we create an atmosphere where every student can and will succeed.'

export const PAUSED = 'New therapy applications are paused while we serve the families already on our waitlist. Leave your details and we will tell you when we reopen.'

export const BENEFITS = [
  ['Physical', ['Better coordination and motor control', 'Stretching of tight or spastic muscles', 'Improved balance', 'Decreased spasticity', 'Increased range of motion']],
  ['Social', ['An age-appropriate activity', 'New experiences', 'One-to-one or three-to-one interaction', 'More self-esteem and confidence']],
  ['Learning', ['Sequencing, patterning and motor planning', 'Hand and eye coordination', 'Visual and spatial perception', 'Counting and colors', 'Speech and communication']],
  ['Behavior', ['Longer attention span', 'Sensory integration', 'Behavior modification']],
]
export const THERAPY = [
  'The movement of the horse draws a natural response from a child, relaxing tight muscles, building tone in weak ones and developing balance, coordination and control.',
  'Every student is taught individually, never in group lessons, with up to three people working with each child toward goals of their own.',
  'We use vaulting (gymnastics on a moving horse), English and Western riding, working on the same things targeted in traditional therapy, outside a clinical setting.',
]

export const RTW = {
  why: 'At age 22, young adults with special needs age out of the education system. Routines change, friends and mentors drift, and finding work can be very hard. Ready to Work! shows that each person can be a contributing member of the community.',
  levels: [
    ['Level 1', '15 weeks of the soft skills work needs: teamwork, communication, flexibility, behavior and a positive attitude. Students run retail in the Tack Shack, garden, plan Ranch events, visit local businesses, write a resume and practice interviews.', 'tack-team'],
    ['Level 2', 'Graduates work one to one with an instructor, at their own pace, on goals such as continued education, employment, personal finance and independence.', 'rtw-laptop'],
    ['RTW Academy', 'Certificate courses at College of the Canyons in customer service and warehouse logistics, with weekly classes and work experience at partners including Starbucks, Holiday Inn Express and AMS Fulfillment.', 'rtw-team'],
  ],
  split: 'Every level spends less than half its time in the classroom and the rest learning by doing.',
}

export const VOLUNTEER = {
  intro: 'Volunteers are the key to the quality of care we offer. To get started, call to schedule a visit.',
  hours: 'Tuesday to Friday, 1:00 to 5:00 p.m.', age: 'Volunteers must be 14 or older. In bad weather, call to confirm lessons are on.',
  jobs: [['Spotting and sidewalking', 'Walk beside the horse and assist the instructor and child.', 'lesson'], ['Ranch work', 'Rake, scrub and fill water buckets, clean tack and help around the barn.', 'washing'], ['Office work', 'Mailings and other help at the desk.', 'rtw-laptop'], ['Special events', 'Help organize, or pitch in on the day.', 'tack-shop']],
}

export const HORSES = ['Annie', 'BB', 'Coco', 'Cricket', 'Fiona', 'Mattie', 'Mo', 'Norah', 'Annabelle', 'Mac', 'Mijo']
export const HERD = ['horse-1', 'horse-2', 'horse-3', 'horse-4', 'horse-5', 'horse-6', 'horse-7', 'horse-8', 'horse-9', 'horse-10', 'horse-11', 'horse-12']
export const HORSE_NOTES = [
  ['Annie', 'A gentle 22-year-old mare with a quiet, intuitive way with children, and a great love of a roll in the dust right after grooming.'],
  ['BB', '“Big Bertha” is a 17-year-old Belgian mare, strong enough to carry adult students, with a steady work ethic from her earlier life with an Amish family.'],
]

export const WREATHS = { date: 'Pick up Saturday, December 5 at the Ranch', until: '2026-12-05', sizes: [['Small, 20 to 22 inches', '$36'], ['Large, 28 to 30 inches', '$44']] }
export const wreathsOpen = () => new Date().toISOString().slice(0, 10) <= WREATHS.until

export const GIVE = [
  ['Make a gift', 'Support lessons and vocational training.', LINKS.donate, 'Donate', 'reach'],
  ['Sponsor a horse', 'Help feed and care for one of the team.', `mailto:${CO.email}?subject=Horse%20sponsorship`, 'Ask about sponsoring', 'kiss'],
  ['Become a partner', 'Multi-year, event and in-kind partnerships for businesses and foundations.', `mailto:${CO.email}?subject=Partnership`, 'Talk to us', 'barn'],
  ['Legacy giving', 'Include the Ranch in your will, trust or estate plans.', `mailto:${CO.email}?subject=Legacy%20giving`, 'Start a conversation', 'arena'],
  ['Donate tack', 'Gently used tack is restored and sold by our trainees.', `tel:${CO.tel}`, 'Call the office', 'tack-work'],
  ['Shop', 'Ranch merchandise and gifts.', LINKS.shop, 'Visit the shop', 'tack-shop'],
]

export const STORY = [
  'In July 1997, Becky Graham and Denise Redmond started Carousel Ranch with one student, Kimi, and one horse in Becky’s neighbor’s backyard.',
  'Between 1997 and 2005 the program moved between five locations. In October 2005 it found a permanent home: a ranch of more than 10 acres in Agua Dulce.',
  'A covered arena followed in 2014, and in 2015 a $100,000 gift from Supervisor Antonovich officially launched Ready to Work!',
]
export const TEAM = [['Becky Graham', 'Co-founder and Program Director'], ['Taylor Adachi', 'Executive Director'], ['Denise Redmond', 'Co-founder and Executive Director Emeritus'], ['Katie Pope', 'Associate Program Director'], ['Stefanie Vine', 'Equestrian Program Coordinator']]

export const QUOTES = [
  ['We were on the wait list for a while and it was completely worth the wait. Arrow has excelled and grown as a person in so many ways.', 'Cassandra, Arrow’s mom'],
  ['Carousel Ranch is a place where every child is seen as valuable, as capable, and as having the ability to get to the next level of their development.', 'A Ranch parent'],
  ['Carousel Ranch provides a warm and caring place for us to come on Saturday mornings, full of peace, optimism, and love.', 'Ayla’s mom'],
]
