// Content drawn from vibe-marketplace.com (read November 2026). Prices are the ones published there and need confirming.

export const CO = {
  name: 'Vibe Marketplace',
  phone: '661-803-1919',
  tel: '+16618031919',
  email: 'jayden@vibe-marketplace.com',
  instagram: 'https://www.instagram.com/vibeflorals/',
  facebook: 'https://www.facebook.com/vibeflorals',
}

export const NAV = [['Florals', '/florals'], ['Photography', '/photography'], ['Flower Cart', '/flower-cart'], ['Rentals', '/rentals'], ['Portfolio', '/portfolio'], ['About', '/about']]

export const TEAM = [['Jayden Hobbs', 'Owner, lead floral designer and photographer'], ['Jana Inabnit', 'Lead floral designer'], ['Sierra Christensen', 'Floral designer'], ['Kenzi Okonowski', 'Administrative coordinator']]

export const STORY = [
  'Vibe Marketplace is a husband and wife team in Santa Clarita, California, founded and owned by Travis and Jayden Hobbs. The company launched in December 2013 as a small business run from their apartment.',
  'Its roots are in florals, photography and woodworking, with partners adding calligraphy, hair and makeup and more.',
]

export const FLORAL_INTRO = 'We keep up with both trend and tradition and combine the two into the right look for each couple. We are fully insured for any venue, and Jayden consults personally with every client, whether the wedding is traditional or contemporary, intimate or elaborate.'

export const FLORALS = [
  ['Wedding party', 'Bridal and bridesmaid bouquets, boutonnieres for the groom and groomsmen, corsages, and little additions for the flower girl and ring bearer.', 'peony'],
  ['Ceremony', 'Arbor and trellis arrangements, two large arrangements for the ends of the aisle, chair sprigs or garlands, and petals or greenery to line the way.', 'aisle'],
  ['Reception', 'Centerpieces high or low, garlands and wreaths, head or sweetheart table decor, cake flowers, a tossing bouquet, welcome table pieces and favors.', 'tall-centerpiece'],
]

export const ELOPE = [
  ['Poppy', '$749', ['Wedding bouquet', 'Groom’s boutonniere', 'Arbor decor']],
  ['Primrose', '$899', ['Wedding bouquet', 'Groom’s boutonniere', 'Arbor decor', 'Bridal hair and makeup']],
  ['Peony', '$1,999', ['Wedding bouquet', 'Groom’s boutonniere', 'Arbor decor', 'Bridal hair and makeup', '4 to 5 hours of photography']],
]

export const PHOTO_PACKAGES = [
  ['Forever', '$3,500', ['Up to 6 hours of coverage', 'Additional photographer', 'Private online gallery']],
  ['Timeless', '$4,200', ['Up to 8 hours of coverage', 'Additional photographer', 'Private online gallery']],
  ['Lifetime', '$5,000', ['Up to 10 hours of coverage', 'Additional photographer', 'Engagement session', 'Private online gallery']],
]

export const SESSIONS = [
  ['Proposal and engagement', '$450', 'A 1 to 2 hour sunset shoot anywhere in Southern California, planned to capture the question and the moment right after.'],
  ['Engagement', '$350', 'A 1 to 2 hour sunset session with one outfit change, for announcements and save the dates.'],
  ['Bridal', '$350', 'Unhurried portraits at your venue 2 to 4 weeks before the day, with details of hair, makeup, jewelry and bouquet.'],
  ['Family or mini', '$250', 'About an hour for maternity, newborns, couples or children.'],
  ['Boudoir', '$350', 'About 45 minutes with outfit changes. Examples are available privately on request.'],
]

export const CONTENT_CREATION = [
  ['Classic', '$950', ['4 hours of coverage', 'Planning session', 'Photos and video in 24 to 48 hours', '1 recap video and 1 reel']],
  ['Luxe', '$1,350', ['6 hours of coverage', 'Planning session', 'Photos and video in 24 to 48 hours', '3 reels']],
  ['Ultimate', '$1,750', ['8 hours of coverage', 'Planning session', 'Photos and video in 24 to 48 hours', '5 reels']],
]

export const CART = [
  ['Bouquet party', 'from $495', ['One or two florists to help guests build bouquets', 'Two hours at your event', 'The cart filled with your flowers or colors', 'Each guest takes home a wrapped bouquet for an added $35 a head']],
  ['Flower crown party', 'from $595', ['One or two florists to create flower crowns with your guests', 'The cart filled with your flowers or colors']],
  ['Wedding favors', 'from $450', ['Guests buy bouquets and 30% of each purchase goes to your honeymoon fund', 'Two florists make each bouquet', 'Three hours at the event', 'About 50 wrapped bouquets of 6 to 8 stems']],
]
export const CART_NOTE = 'Bridal showers, birthdays, baby showers, church, school and company events. Travel is free within Santa Clarita; ask about the mileage fee elsewhere.'

export const RENTALS = [
  ['Arches and arbors', 'Wood arbors, hexagon arches and floral rings.', 'hex-arch'],
  ['Lanterns and signs', 'Lanterns, candles and hand-lettered signs.', 'seat-sign'],
  ['Stands and vessels', 'Tall gold stands, barrels and bud vases.', 'orange-stand'],
]

export const GAMES = [['Tumbling timbers', 'from $100', 'jenga'], ['Lawn dominoes', 'Ask for price', 'dominoes'], ['Cornhole boards', 'Custom and themed', 'cornhole']]
export const DOORS_TEXT = 'Every barn door is custom designed and built in our workshop, to your opening, bracing style, hardware and stain or paint. To order, send the dimensions, a photo of the space, the design you like and your city.'

export const QUOTES = [
  ['They made the most spectacular floral arch for my ceremony. I gave her an idea of what I wanted and she took it and made it better than I could ever imagine!', 'Mallory O.'],
  ['All morning while I was getting ready I couldn’t wait for the flowers to show up. As soon as I saw them, I was in love.', 'Kayla B.'],
  ['With a smaller budget and short timeline to the wedding, Jayden and her team did a fantastic job working with our budget and our timeline.', 'Erika F.'],
  ['When I showed up to the venue on my wedding day, the flowers were everything I envisioned and more!', 'Jade H.'],
]

const tag = (c, ids) => ids.map((i) => [i, c])
export const PORTFOLIO = [
  ...tag('Bouquets', ['peony', 'pink-bouquet', 'cascade', 'bouquet-hand', 'white-bouquet', 'lantern-bouquet', 'garland-hands', 'boutonniere']),
  ...tag('Weddings', ['golden-couple', 'arch-roses', 'vineyard', 'greenery-door', 'sunset-bride', 'yosemite', 'downtown', 'fountain', 'stairs', 'pier', 'smiles', 'boho-bride', 'tropical', 'burgundy-party', 'bridesmaids-blue', 'navy-party', 'beach-bride']),
  ...tag('Ceremony and tables', ['aisle', 'arbor-roses', 'color-arch', 'floral-ring', 'sweetheart', 'table-florals', 'cake', 'bud-vases', 'greenery-table', 'barrel', 'lanterns']),
  ...tag('Portraits', ['bride-veil', 'portrait-glance', 'veil-bridge', 'coastal-kiss', 'umbrella', 'beach-back', 'proposal', 'ring-joy', 'family-sit', 'newborn', 'flower-girl']),
]
