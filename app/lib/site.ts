export const company = {
  name: 'AUIS',
  shortName: 'AUIS',
  slogan: 'Ali usman integrated service',
  descriptor: 'Ali usman integrated service',
  shortDescription:
    'AUIS delivers reliable electromechanical, civil and industrial construction services across Saudi Arabia.',
  phone: '+966 13 000 0000',
  email: 'info@auis.com.sa',
  location: 'Kingdom of Saudi Arabia',
  address: 'Saudi Arabia',
  hours: 'Sunday - Thursday | 07:00 - 18:00',
}

const demoImages = [
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1503387762-592a9e5c3b9c?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1558449033-6cf3c19b42e8?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1631545806609-56d5b9c6e7b8?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
]

const serviceNames = [
  'Process Plant Installation and Maintenance',
  'Heat Exchanger Installation & Maintenance',
  'Refurbishment of Distillation Towers & Process Towers',
  'Boiler Installation & Maintenance',
  'Cooling Tower Installation & Maintenance',
  'Construction of Water Pump Station, Terminal Station & Concrete Reservoir',
  'New Construction, Cleaning & Repair of Above Ground Storage Tanks',
  'Pipeline Construction, Maintenance & Modification',
  'Civil Construction Repair & Modification',
  'Power Generators Overhauling',
  'Revamping of Power-House Electrical System',
  'Low, Medium & High Voltage Switchgear Maintenance',
  'Low, Medium & High Voltage Motor Maintenance & Overhauling',
  'Electrical Repairing & Refurbishment',
  'Firefighting System Supply & Installation',
  'Cathodic Protection System Installation & Commissioning',
  'HVAC System Installation & Maintenance',
  'Telecom System, CCTV & MATV Supply & Installation',
]

const serviceFeatures = [
  ['Installation', 'Maintenance', 'Inspection', 'Shutdown support'],
  ['Installation', 'Inspection', 'Repair', 'Maintenance'],
  ['Tower refurbishment', 'Internal repairs', 'Modification', 'Shutdown work'],
  ['Installation', 'Inspection', 'Repair', 'Preventive maintenance'],
  ['Tower installation', 'Component replacement', 'Inspection', 'Maintenance'],
  ['Pump stations', 'Terminal stations', 'Concrete reservoirs', 'Civil works'],
  ['New construction', 'Tank cleaning', 'Tank repair', 'Asset protection'],
  ['Pipeline construction', 'Maintenance', 'Modification', 'Testing and repair'],
  ['Civil construction', 'Repair works', 'Modification', 'Structural works'],
  ['Generator inspection', 'Overhauling', 'Component repair', 'Performance testing'],
  ['System revamping', 'Electrical upgrades', 'Testing', 'Commissioning'],
  ['LV switchgear', 'MV switchgear', 'HV switchgear', 'Protection testing'],
  ['Motor maintenance', 'Overhauling', 'Testing', 'Fault diagnosis'],
  ['Electrical repair', 'Refurbishment', 'Troubleshooting', 'Testing'],
  ['System supply', 'Installation', 'Testing', 'Commissioning'],
  ['Installation', 'Commissioning', 'Maintenance', 'Corrosion protection'],
  ['HVAC installation', 'Preventive maintenance', 'Repair', 'System testing'],
  ['Telecom systems', 'CCTV supply', 'MATV supply', 'Installation'],
]

export const services = serviceNames.map((title, index) => ({
  slug: title
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, ''),
  number: String(index + 1).padStart(2, '0'),
  title,
  description: `${title} for demanding industrial, infrastructure and utility projects across Saudi Arabia.`,
  image: demoImages[index],
  features: serviceFeatures[index],
}))

export const projects = [
  {
    title: 'Industrial Plant Upgrade',
    location: 'Eastern Province, KSA',
    scope: 'Electromechanical and civil works',
    status: 'Active',
    image: demoImages[0],
  },
  {
    title: 'Process Facility Expansion',
    location: 'Saudi Arabia',
    scope: 'Construction and commissioning support',
    status: 'In progress',
    image: demoImages[1],
  },
  {
    title: 'Infrastructure Rehabilitation',
    location: 'Saudi Arabia',
    scope: 'Asset renewal and maintenance',
    status: 'Scheduled',
    image: demoImages[5],
  },
]

export const industries = [
  'Oil & Gas',
  'Petrochemicals',
  'Fertilizer',
  'Mining & Minerals',
  'Power & Water',
  'Manufacturing',
  'Infrastructure',
  'Transportation Systems',
]

export const principles = [
  { title: 'Engineering approach', text: 'Technical review and practical planning keep projects aligned with performance, risk and schedule realities.' },
  { title: 'Project control', text: 'Clear sequencing, communication and reporting support disciplined execution across complex works.' },
  { title: 'Quality assurance', text: 'Standards are applied consistently to field execution, material handling and handover arrangements.' },
  { title: 'Safety', text: 'Site safety and operational discipline remain central to every activity and workfront.' },
  { title: 'Technical execution', text: 'Our delivery model emphasizes practical solutions that are buildable, maintainable and measurable.' },
  { title: 'Client coordination', text: 'Stakeholder alignment is maintained throughout procurement, delivery and close-out processes.' },
]

export const team = [
  { name: 'PROJECT DIRECTOR', role: 'Project leadership', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80' },
  { name: 'OPERATIONS MANAGER', role: 'Operations & delivery', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80' },
  { name: 'SITE ENGINEER', role: 'Technical execution', image: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80' },
]
