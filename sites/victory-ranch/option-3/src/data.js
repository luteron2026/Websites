// Content drawn from vranch.org (read November 2026). Dates and prices are the Ranch's own.

export const CO = {
  name: 'Victory Ranch',
  phone: '(951) 654-7766',
  tel: '+19516547766',
  addr1: '18080 Gilman Springs Rd.',
  addr2: 'Moreno Valley, CA 92555',
  facebook: 'https://www.facebook.com/Victory-Ranch-Moreno-Valley-CA-101376880654/',
  donate: 'https://vranch.org/v1/index.php/2-uncategorised/29-donate',
  beliefs: 'https://vranch.org/v1/index.php/doctrinal-statement',
  map: 'https://www.google.com/maps/search/?api=1&query=18080+Gilman+Springs+Rd+Moreno+Valley+CA+92555',
}

export const NAV = [['Camps', '/camps'], ['Retreats', '/retreats'], ['Rent the Ranch', '/rentals'], ['About', '/about'], ['Give', '/give'], ['Visit', '/contact']]

const form = (id) => `https://pci.jotform.com/form/${id}`

export const BRING = 'Bible (non-electronic), notebook, pen, pillow and bedding, toiletries, towel, play clothes, jeans, nice clothes for evening chapel, closed-toed shoes, flashlight, water bottle, medications in their original container, spending money and a friend.'
export const LEAVE = 'Cell phones and electronic devices, magazines, fireworks, alcohol, drugs, vapes, tobacco and weapons, including pocket knives.'

export const CAMPS = [
  { id: 'winter', name: 'Winter Camp', who: 'Grades 6 to 12', date: 'December 28–30, 2026', start: '2026-12-28', end: '2026-12-30', price: '$140', early: '$130 if paid in full by December 14', photo: 'winter-friends', register: form('262965806393167'), times: 'Check in Monday 9:00 a.m. Pick up Wednesday 1:00 p.m.', text: 'Three days over the Christmas break for students: chapel, games, time by the fire and a room full of friends playing whatever the weather allows.', more: ['dominoes', 'study'] },
  { id: 'mini', name: 'Mini Camp', who: 'Grades K to 3', date: 'June 13, 2026', start: '2026-06-13', end: '2026-06-13', price: '$45', early: 'Covers one camper and one adult', photo: 'sack-race', register: form('260826653049159'), times: '9:00 a.m. to 4:00 p.m.', text: 'A single packed day made for younger campers to try camp for the first time with a parent beside them: activities, great food and chapel.', more: ['crates', 'feed-goat'] },
  { id: 'horsemanship', name: 'Horsemanship Camp', who: 'Grades 4 to 12', date: 'June 29 – July 2, 2026', start: '2026-06-29', end: '2026-07-02', price: '$380', early: '$360 with the 2026 scholarship', photo: 'trail', register: form('260817619099166'), times: 'Monday 9:00 a.m. to Thursday 1:00 p.m.', text: 'An introduction to riding with daily trail rides, classes on everything to do with horses, games and chapel. Limited to the first 18 campers paid in full, with a helmet assigned to each rider.', more: ['two-riders', 'harness', 'leather'] },
  { id: 'junior', name: 'Junior Camp', who: 'Grades 3 to 6', date: 'July 13–18, 2026', start: '2026-07-13', end: '2026-07-18', price: '$430', early: '$410 if paid in full by July 1', photo: 'splash', register: form('260827897352167'), times: 'Monday 9:00 a.m. to Saturday 10:00 a.m.', text: 'Morning Bible study and daily chapel, then swimming, archery, horse trail rides, crafts, relays and more games than a week should be able to hold.', more: ['bible-table', 'swimmers', 'kids-line'] },
  { id: 'middle-school', name: 'Middle School Camp', who: 'Grades 6 to 8', date: 'July 27 – August 1, 2026', start: '2026-07-27', end: '2026-08-01', price: '$440', early: '$420 if paid in full by July 1', photo: 'foam', register: form('260827251285156'), times: 'Monday 9:00 a.m. to Saturday 10:00 a.m.', text: 'An action-packed week of crazy games and relays, late-night recreation, horse rides, archery and the pool.', more: ['target', 'field-game', 'bench'] },
  { id: 'senior-high', name: 'Senior High Camp', who: 'Grades 9 to 12', date: 'July 20–25, 2026', start: '2026-07-20', end: '2026-07-25', price: '$450', early: '$430 if paid in full by July 1', photo: 'teen-group', register: form('260827776369171'), times: 'Monday 9:00 a.m. to Saturday 10:00 a.m.', text: 'Late-night recreation, tournaments, horse rides, archery, the pool and the rec room, with time to make new friends and keep old ones.', more: ['archery', 'slide', 'crowd'] },
  { id: 'west', name: 'W.E.S.T. Week', who: 'Age 14 and up', date: 'June 15–20, 2026', start: '2026-06-15', end: '2026-06-20', price: '$120', early: 'Application due May 31', photo: 'work-week', times: 'Monday 9:00 a.m. to Saturday 10:00 a.m.', text: 'Work Experience Staff Training for teens with a heart for ministry: archery, the General Store, food handler preparation, grounds and maintenance, housekeeping and horse wrangling. Call the camp office for an application.', more: ['harness', 'fire-truck'] },
]

export const RETREATS = [
  { id: 'ladies', name: 'Ladies’ Retreat', date: 'Spring: March 5–6, 2027', start: '2027-03-05', end: '2027-03-06', photo: 'ladies-group', price: 'Fall 2026 was $85', text: 'Chapel sessions, a campfire, archery, crafts, horseback riding, the target range, a silent auction and the Snack Shoppe open all weekend. Come Thursday to beat the traffic at no extra charge.', more: ['puzzle', 'horses-rail', 'archer-woman', 'aim'] },
  { id: 'men', name: 'Men’s Retreat', date: 'Spring: March 19–20, 2027', start: '2027-03-19', end: '2027-03-20', photo: 'chapel', price: 'Fall 2026 was $90', text: 'Three chapel sessions, range and archery competitions, volleyball under the lights, horse rides, the rec room and a steak dinner with awards to finish.', more: ['dinner', 'horseback', 'billiards', 'men-outside'] },
]

export const GATHERINGS = [
  { name: 'Family Fun Day', when: 'Held April 4 in 2026', price: '$6 a person, 2 and under free', text: 'Larger-than-life games, egg hunts and lunch for everyone from toddlers to grandparents.', photo: 'fun-day' },
  { name: 'Bonfire Bonanza', when: 'Held September 12 in 2026', price: 'Free', text: 'A youth rally and beach party at Corona del Mar State Beach with volleyball, a worship service and a campfire.', photo: 'beach' },
  { name: 'Round-Up', when: 'Held November 7 in 2026', price: 'Free lunch', text: 'The annual open day for churches, neighbors and alumni. In 2026 it marked the Ranch’s 70th anniversary.', photo: 'fire-truck' },
]

export const upcoming = (now = new Date()) => {
  const today = now.toISOString().slice(0, 10)
  return [...CAMPS, ...RETREATS.map((r) => ({ ...r, retreat: true }))].filter((e) => e.end >= today).sort((a, b) => a.start.localeCompare(b.start))
}

export const SPACES = [
  ['Main Chapel', 'Seats 200', 'Stage, piano, organ, two projection screens, microphones and a sound system.', 'chapel'],
  ['Dining Hall', 'Seats 125, or 230 with the Fireside Room', 'Home-cooked cafeteria meals with seconds ready and coffee at every meal.', 'dinner'],
  ['Fireside Room', 'Meets 80', 'A meeting room by the stone hearth that opens onto the Ranchero Inn Annex for up to 140.', 'study'],
  ['The Barnyard', 'Horses and farm animals', 'Trail rides with a wrangler, hayrides and animals to meet.', 'barn'],
  ['Swimming Pool', 'Seasonal', 'The favorite spot on a hot afternoon.', 'pool'],
  ['Rec Room and fields', 'Indoor and out', 'Pool tables, ping-pong, volleyball, basketball, archery and the target range.', 'billiards'],
]

export const LODGING = [
  ['Bunkhouse', '88 campers', '8 rooms with 2 shared restroom areas'],
  ['Las Flores', '66 campers', '6 rooms, each with its own shower and restroom'],
  ['Maverick', '10 beds', 'Dorm or semi-private housing'],
  ['Stagecoach', '12 beds', 'Dorm or semi-private housing'],
]

export const RATES = [
  ['Standard retreat', '$137', 'per person, 2 nights and 5 meals, with bunk housing and a meeting room'],
  ['Holiday weekend', '$150', 'per person, minimum 2 nights and 6 meals'],
  ['Trail ride', '$10', 'per person for 30 minutes, 12 person minimum'],
  ['Hayride', '$3.50', 'per person, 15 person minimum'],
  ['Day use', '$14', 'per person for the grounds, $18 with a meeting room'],
  ['Special housing', '$45', 'per bedroom for each three nights or part of that'],
]

export const FAMILY = ['Ages 13 and up pay the adult rate', 'Ages 7 to 12 pay 70%', 'Ages 3 to 6 pay 45%', 'Ages 2 and under are free', 'Family rates do not apply on holidays or from Memorial Day to Labor Day']
export const TERMS = 'A deposit of 10% of the contract total holds your date. The cancellation fee is one third of the contract total. The Ranch rents to groups of like faith and practice.'

export const STORY = [
  'Winding along Gilman Springs Road, through the badlands between Highway 60 and the towns of Hemet and San Jacinto, a row of pepper trees hides an oasis tucked into one of the canyons.',
  'Trees now shade hills that were once bare, and green playfields cover what used to be dirt. The two-story Hotel building, the lime kilns and the chapel, which began life as a barn, still stand from the 1800s.',
  'Summer campers are met by caring counselors who want each of them to know Jesus Christ as their own Savior. Victory Ranch is a ministry of the Regular Baptist Conference of Southern California, and has been running Christ-centered camps since 1956.',
]

export const PROJECT = 'Six new cabins are planned between the shop, the covered bridge and the playfield: twelve rooms with air conditioning, private showers and ADA restrooms. Plans are pending approval, and the goal is to build without debt.'
export const NEEDS = ['Drought-hardy trees such as Italian stone pine, deodar cedar and palo verde', 'Storage containers', 'Trail horses used to riders', 'Working vacuum cleaners', 'Recreation room pool cues', 'Your time: volunteers help keep the Ranch running']

export const DIRECTIONS = [
  ['Los Angeles and the beaches', '91 East to 60 East past Moreno Valley. Exit Gilman Springs Rd and follow it 9 miles. The Ranch is on the left.'],
  ['Riverside', '60 East past Moreno Valley. Exit Gilman Springs Rd and follow it 9 miles, on the left.'],
  ['Pasadena', '210 East to 10 East to Beaumont. Take the Beaumont Ave / Hwy 79 exit, turn right, go 6 miles, exit at Gilman Springs Rd and turn right. 1 mile, on the right.'],
  ['Santa Clarita', '5 South to 210 East to 10 East to Beaumont, then Hwy 79 south for 6 miles to Gilman Springs Rd. Turn right, 1 mile, on the right.'],
  ['San Diego', '215 North to Hwy 74 toward Hemet. In Hemet turn left on Sanderson, exit at Gilman Springs Rd, turn left. 1 mile, on the right.'],
]

export const GALLERY = [
  ['trail', 'Horses'], ['two-riders', 'Horses'], ['rider', 'Horses'], ['black-horse', 'Horses'], ['hills-riders', 'Horses'], ['harness', 'Horses'],
  ['splash', 'Summer'], ['swimmers', 'Summer'], ['pool-friends', 'Summer'], ['target', 'Summer'], ['archery', 'Summer'], ['foam', 'Summer'], ['slide', 'Summer'], ['friends', 'Summer'], ['teen-girls', 'Summer'], ['ball-game', 'Summer'], ['cowboy', 'Summer'],
  ['ladies-group', 'Retreats'], ['chapel', 'Retreats'], ['dinner', 'Retreats'], ['goats-man', 'Retreats'], ['puzzle', 'Retreats'],
  ['barn', 'Grounds'], ['pool', 'Grounds'], ['fire-truck', 'Grounds'], ['work-week', 'Grounds'],
]
