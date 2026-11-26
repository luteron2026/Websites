// Content drawn from c2ccamps.com (read November 2026). Programs, schools and links are Coast 2 Coast's own.

const FILE = 'https://www.c2ccamps.com/_files/ugd/'

export const CO = { name: 'Coast 2 Coast Camps', short: 'C2C Camps', phone: '877-830-3266', tel: '+18778303266' }

export const LINKS = {
  register: 'https://pacificcamps.wufoo.com/forms/z125qhsr1cbjo7j/',
  jobs: 'https://pacificcamps.wufoo.com/forms/z1o0tnw002gqfrd/',
  info: 'https://pacificcamps.wufoo.com/forms/zptjgyu1jf3g9l/',
  records: 'https://pacificcamps.wufoo.com/forms/k19oe4li1ebcjaa/',
  donate: 'https://www.c2ccamps.com/donate-here',
}

// The one place to change the seasonal message.
export const SEASON = { text: 'Registration is open for 2026–27 after-school programs.', short: '2026–27 after-school is open' }

export const NAV = [['After School', '/after-school'], ['Summer Camp', '/summer-camp'], ['Locations', '/locations'], ['Parents', '/parents'], ['Careers', '/careers'], ['Donate', '/donate']]

export const DOCS = {
  handbook: ['Parent handbook', FILE + '5f4863_f750ae6b3bac46c4b7f3c0c087f06304.pdf'],
  fees: ['Additional fees', FILE + 'f3892f_a691a06c183a4a658361542c3cf6adac.pdf'],
  scPrices: ['South Carolina tuition and fees', FILE + 'f3892f_4fb4617ea337453f9640dae27db984c2.pdf'],
  scSnack: ['South Carolina snack bar prices', FILE + 'f3892f_5c354b4363d5418b900f1f68738fee89.pdf'],
  caSnack: ['California snack bar prices', FILE + 'f3892f_e144afc17a87494b80d45fbfa7b27a4f.pdf'],
  licensing: ['California licensing forms (sign in person, in pen)', FILE + 'f3892f_176f0c17a7064a788e1e40660ec81e64.pdf'],
  campership: ['Campership application', FILE + 'f3892f_91f8eb8999004844a71b94b43baec1e2.pdf'],
  medication: ['Medication authorization', FILE + 'f3892f_35d9287352ab468fa63779613e1e01d2.pdf'],
  incidental: ['Incidental medical services', FILE + 'f3892f_eb6984d828124a8299fef0b45a47cf23.pdf'],
  privacy: ['Privacy policy', FILE + '5f4863_ebb4709498804687820e6c405e3ace90.pdf'],
  terms: ['Terms and conditions', FILE + '5f4863_275280f1a9a74feeb22bb72ff5ae3f3b.pdf'],
}

export const SUMMER_SCHEDULES = [
  ['TK to 5th grade, 2026', FILE + '5f4863_83d581c93c23447b83934cdf6ef5ade5.pdf'],
  ['6th to 8th grade, 2026', FILE + '5f4863_5ad3ffb4998c46ce96eae7d2ca4d3bd0.pdf'],
  ['Five Forks, 2026', FILE + 'f3892f_bbcac74135f141a89d161cff73499612.pdf'],
  ['Lyman, 2026', FILE + 'f3892f_313e8769a6ae4caf9873589602d38032.pdf'],
  ['Taylors, 2026', FILE + 'f3892f_44c608cf157c451fabd82f39029ca74d.pdf'],
]

export const STATES = { CA: 'Ventura County, California', SC: 'Upstate South Carolina' }

export const LOCATIONS = [
  { id: 'camarillo', city: 'Camarillo', state: 'CA', host: 'Good Shepherd Lutheran Church', address: '380 Arneill Rd, Camarillo, CA 93010', billing: 'camarillobilling@c2ccamps.com', photo: 'sandcastle', schools: [] },
  { id: 'oxnard', city: 'Oxnard', state: 'CA', host: 'First Presbyterian Church Oxnard', address: '850 Ivywood Dr, Oxnard, CA 93030', photo: 'paint', schools: [] },
  { id: 'thousand-oaks', city: 'Thousand Oaks', state: 'CA', host: 'Christian Church of Thousand Oaks', address: '301 W. Avenida De Las Flores, Thousand Oaks, CA 91360', photo: 'hoop', schools: [] },
  { id: 'ventura', city: 'Ventura', state: 'CA', host: 'Journey Church', address: '4050 Market St, Ventura, CA 93003', photo: 'aquarium', schools: [] },
  { id: 'five-forks', city: 'Five Forks', state: 'SC', host: 'Cross Roads Baptist Church', address: '705 Anderson Ridge Rd, Greer, SC 29651', billing: 'fiveforksbilling@c2ccamps.com', photo: 'pumpkins', schedule: SUMMER_SCHEDULES[2][1], schools: ['Bell’s Crossing', 'Bethel Elementary', 'Green Charter Simpsonville', 'Langston Charter', 'Mauldin Elementary', 'Monarch Elementary', 'Oakview Elementary', 'Plain Elementary', 'Rudolph Gordon School', 'Simpsonville Elementary'] },
  { id: 'lyman', city: 'Lyman', state: 'SC', host: 'LifeSong Church', address: '12481 W. Greenville Hwy, Lyman, SC 29365', photo: 'church', schedule: SUMMER_SCHEDULES[3][1], schools: ['Holly Springs Elementary', 'Abner Creek', 'Duncan Elementary', 'Lyman Elementary', 'Tyger River Elementary', 'Wellford Academy', 'Reidville Elementary', 'River Ridge Elementary', 'West View Elementary', 'Beech Spring Intermediate', 'Berry Shoals Intermediate', 'Abner Creek Middle School', 'D.R. Hill Middle', 'Florence Chapel Middle School', 'Fairforest', 'Green Charter Spartanburg', 'Chandler Creek Elementary', 'Crestview Elementary'] },
  { id: 'taylors', city: 'Taylors', state: 'SC', host: 'Lee Road United Methodist Church', address: '1377 E Lee Rd, Taylors, SC 29687', billing: 'taylorsbilling@c2ccamps.com', photo: 'pizza', schedule: SUMMER_SCHEDULES[4][1], schools: ['Brushy Creek', 'Buena Vista Elementary', 'East North Elementary', 'Lake Forest', 'Mitchell Road', 'Paris Elementary', 'Summit Elementary', 'Taylors Elementary', 'Woodland Elementary', 'League Middle', 'MRCA', 'Northwood Middle', 'Riverside Middle', 'Sevier Middle'] },
]

export const AFTER = {
  lead: 'Homework first, then crafts, games and chapel. Our K5 to 8th grade program supports your child academically, spiritually and socially.',
  parts: [
    ['Homework hour', 'Every afternoon starts with a scheduled hour for homework, with counselors helping it get done neatly and correctly.', 'reading'],
    ['Games and crafts', 'Once the books are closed there are themed crafts, high-energy games and room to imagine.', 'trio'],
    ['Daily chapel', 'Music, Bible lessons and Christian staff who look for moments to disciple each camper.', 'circle'],
    ['Fun Friday trips', 'Parks, bowling alleys, food spots and museums. Fridays are for getting out.', 'aquarium'],
  ],
  extra: 'We are also open for most school holidays and teacher workdays. Ask your site director about a particular date.',
}

export const SUMMER = {
  lead: 'Field trips every week, water days, crafts, team games and chapel, for campers in K5 through 8th grade.',
  parts: [
    ['Field trips', 'Water parks, museums, the beach and Chuck E. Cheese, with several trips every week.', 'airfield'],
    ['Water Day', 'Water slides, sprinklers and a lot of giggling.', 'sandcastle'],
    ['Themed fun', 'Crafts and games built around the summer theme. 2026 was Camp of Champions.', 'paint'],
    ['Chapel', 'Worship through music and lessons that take campers deeper into God’s Word.', 'church'],
  ],
  hours: 'Open 7 a.m. to 6 p.m.',
}

export const PROMISE = [
  ['Background-checked staff', 'Counselors are trained and background-checked Christians who create a loving, secure place.'],
  ['Since 1988', 'Serving Ventura County since 1988 and Upstate South Carolina since 2010.'],
  ['Christ-centered', 'Our mission is to build relationships with children that bring them and their families into a personal relationship with Jesus Christ.'],
]

export const FAQS = [
  ['Do I have to use Brightwheel?', 'Yes. Every family registers with Brightwheel. Messages, payments, check in and check out all go through it, so we recommend downloading the app.'],
  ['Do I have to be signed up for auto-pay?', 'Yes, contracts require auto-pay. For payment questions, email your location’s billing department. Summer drop-in campers are not under contract and do not need it.'],
  ['Do I pay full price if my camper misses days?', 'Weekly tuition is still required and there is no daily rate. If your camper misses a whole week for illness or something unforeseen, email billing to use a vacation week if your contract has one available.'],
  ['Are camp shirts required for field trips?', 'Yes, for safety, on all summer and full-day camp trips. Shirts are sold at the front desk.'],
  ['Are you open on school holidays?', 'We are open for most school holidays and teacher workdays. Contact your site director about a specific date.'],
  ['Is there structured homework time?', 'Yes, one scheduled hour. Sending your site a weekly list of assignments helps a lot.'],
]
