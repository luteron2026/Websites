export const CO = {
  name: 'Gilsulate International, Inc.',
  phone: '(800) 833-3881', tel: '+18008333881', email: 'info@gilsulate.com',
  addr1: '26000 Springbrook Ave. #201', addr2: 'Santa Clarita, CA 91380',
}

export const FACTS = [
  { k: '1949', v: 'First commercial use of Gilsulate granular insulation' },
  { k: '1978', v: '500XR enters commercial production' },
  { k: '800°F+', v: 'Independently tested; the original 500 was rated to 500°F' },
  { k: '4,231,884', v: 'U.S. patent, granted 1980' },
]

export const AUDIENCES = [
  { id: 'owner', label: 'Owner', head: 'Fewer dig-ups. Lower lifetime cost.', body: 'A pour-in-place envelope that insulates and protects the line from the soil, so the system you commission is still performing decades later.' },
  { id: 'engineer', label: 'Engineer', head: 'Specified for decades, with a spec to match.', body: 'Granular insulation with a long specification history and a documented record against pre-insulated piping. Design help is available for temperatures above 800°F.' },
  { id: 'contractor', label: 'Contractor', head: 'No fabrication lead time.', body: 'Raw, uncoated pipe goes in the trench and the material is poured around it. Nothing to mix on site, and it ships in 1 cu ft or 60 cu ft bags.' },
  { id: 'epc', label: 'EPC', head: 'Ready to ship, ready to schedule.', body: 'Corrosion protection and insulation in a single material, packaged at use density so quantities are simple to plan: 100 cu ft is 100 bags.' },
  { id: 'military', label: 'Military', head: 'Built to UFGS 33 61 13.', body: 'Gilsulate states that 500XR is the only pour-in-place insulation that meets UFGS 33 61 13 and exceeds its thermal efficiency requirement.' },
]

export const STEPS = [
  { n: '01', t: 'Set the pipe', d: 'Lay raw, uncoated pipe in the trench. Temporary supports hold it until the material is consolidated.' },
  { n: '02', t: 'Pour 500XR', d: 'Pour straight from bags or bulk sacks around the pipe. No mixing, no on-site fabrication.' },
  { n: '03', t: 'Consolidate', d: 'Drag a wand-type concrete vibrator through the fill, in layers for tall envelopes, so the envelope holds its dimensions and sheds water.' },
  { n: '04', t: 'Backfill', d: 'Once consolidated, the surface can be walked on. Backfill does not compress the insulation envelope.' },
]

export const CASES = [
  { name: 'Texas A&M University', type: 'University campus' },
  { name: 'University of Texas at Austin', type: 'Heating water system' },
  { name: 'Kent State University', type: 'University campus' },
  { name: 'Georgia Institute of Technology', type: 'University campus' },
]

export const APP_CATS = ['All', 'Heating & energy', 'Cooling', 'Process & fuel', 'Structures & protection']
export const APPS = [
  ['Superheated hot water', 'Heating & energy'], ['Steam and condensate return', 'Heating & energy'],
  ['Domestic hot water', 'Heating & energy'], ['Waste heat recovery', 'Heating & energy'],
  ['Geothermal distribution', 'Heating & energy'], ['Solar system distribution', 'Heating & energy'],
  ['Critical energy recovery', 'Heating & energy'], ['District heating and cooling', 'Heating & energy'],
  ['Chilled water distribution', 'Cooling'], ['Condenser water', 'Cooling'], ['Data centers', 'Cooling'],
  ['Fuel and heavy oil transport', 'Process & fuel'], ['Process fluid transport', 'Process & fuel'],
  ['Molten sulphur lines', 'Process & fuel'], ['Oil line expansion systems', 'Process & fuel'],
  ['Freeze protection', 'Process & fuel'], ['Sanitary sewer distribution', 'Process & fuel'],
  ['Above-ground utilidor', 'Structures & protection'], ['Concrete trenches', 'Structures & protection'],
  ['Storage tanks', 'Structures & protection'], ['Corrosion protection', 'Structures & protection'],
  ['Encasement of field-applied joints', 'Structures & protection'], ['PIP system repairs', 'Structures & protection'],
  ['Load-bearing roads', 'Structures & protection'], ['Electrical and duct thermal barriers', 'Structures & protection'],
  ['Power and gas lines', 'Structures & protection'],
]

export const SPECS = [
  ['Composition', 'Inert, inorganic, non-toxic minerals, including coated calcium carbonate for dielectric properties'],
  ['Color', 'White'],
  ['Temperature range', 'Tested above 800°F (XR = extended range). Contact Gilsulate above 800°F'],
  ['Water behavior', 'Hydrophobic. Does not absorb water when properly consolidated'],
  ['Military specification', 'UFGS 33 61 13'],
  ['Packaging', '1 cu ft paper bags or 60 cu ft semi-bulk bags, both at use density'],
  ['Mixing', 'None. Pour in place'],
  ['Cathodic protection', 'Not required, but compatible'],
  ['Patent', 'U.S. 4,231,884 (1980)'],
]

export const FAQ = [
  ['Is there an equal alternative?', 'Gilsulate states the formula is patented and has no equal or replacement.'],
  ['What does “use density” mean?', 'A bag holds slightly more than 1 cubic foot before consolidation, so each bag yields about 1 cubic foot once installed. The material does not self-compact under backfill.'],
  ['Why consolidate before backfilling?', 'Consolidation keeps the insulation envelope at its specified dimensions so backfill cannot compress it.'],
  ['How is it consolidated?', 'With a wand-type concrete vibrator dragged horizontally through the material, in layers for tall envelopes.'],
  ['Why does graduated particle size matter?', 'Multi-sized, multi-faceted particles create high inter-particle friction, which increases load-bearing capacity.'],
  ['Are permanent pipe supports needed?', 'Only at the base (closed end) of an expansion loop. Temporary supports are removed once the material is consolidated.'],
  ['Can it be installed in rain?', 'A light mist is fine. If rain is imminent or begins, finish and bulkhead the section and cover it with a light layer of sand.'],
  ['What safety precautions apply?', 'It is classified as nuisance dust. A dust mask similar to a 3M 8211 is recommended. Consult the MSDS for other respirator needs.'],
  ['Can unused material be returned?', 'Yes, to the factory for credit, subject to inspection. Opened or damaged bags are not accepted and restocking fees apply.'],
  ['Can it retrofit a damaged or inefficient system?', 'Yes. Gilsulate needs specific project information to make recommendations.'],
]
export const media = (f) => import.meta.env.BASE_URL + 'media/' + f
