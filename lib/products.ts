export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: 'prod-001',
    name: 'Titanium Alloy Landing Gear',
    price: 12500,
    image: '/products/Titanium Alloy Landing Gear2.jpg',
    description: 'Premium titanium alloy landing gear assembly for commercial aircraft. Certified for all weather conditions.',
    category: 'Landing Systems',
    inStock: true,
  },
  {
    id: 'prod-002',
    name: 'Composite Wing Panel',
    price: 8750,
    image: '/products/wing-panel.jpg',
    description: 'Advanced composite material wing panel for improved aerodynamics and fuel efficiency.',
    category: 'Structural',
    inStock: true,
  },
  {
    id: 'prod-003',
    name: 'Hydraulic Power Unit',
    price: 15200,
    image: '/products/hydraulic-unit.jpg',
    description: 'Industrial-grade hydraulic power unit with dual redundancy systems.',
    category: 'Hydraulics',
    inStock: true,
  },
  {
    id: 'prod-004',
    name: 'Electronic Flight Instrument System',
    price: 22000,
    image: '/products/Electronic Flight Instrument System2.jpg',
    description: 'Modern glass cockpit display system with advanced avionics integration.',
    category: 'Avionics',
    inStock: true,
  },
  {
    id: 'prod-005',
    name: 'Engine Combustion Chamber',
    price: 18900,
    image: '/products/Engine Combustion Chamber2.jpg',
    description: 'High-performance combustion chamber with thermal protection coating.',
    category: 'Engine Components',
    inStock: true,
  },
  {
    id: 'prod-006',
    name: 'Cabin Air Filtration System',
    price: 4200,
    image: '/products/air-filter.jpg',
    description: 'Advanced HEPA filtration system for aircraft cabin air quality.',
    category: 'Environmental Control',
    inStock: true,
  },
  {
    id: 'prod-007',
    name: 'Carbon Fiber Fuselage Panel',
    price: 9500,
    image: '/products/Carbon Fiber Fuselage Panel2.jpg',
    description: 'Lightweight carbon fiber fuselage panel for modern commercial aircraft.',
    category: 'Structural',
    inStock: true,
  },
  {
    id: 'prod-008',
    name: 'Pressurization Control Module',
    price: 6800,
    image: '/products/pressurization.jpg',
    description: 'Automated cabin pressurization control with redundant safety systems.',
    category: 'Environmental Control',
    inStock: false,
  },
  {
    id: 'prod-009',
    name: 'Honeywell Auxiliary Power Unit (APU)',
    price: 85000,
    image: '/products/Honeywell Auxiliary Power Unit (APU)2.jpg',
    description: 'Reliable auxiliary power unit providing pneumatic and electric power for various aircraft applications.',
    category: 'Engine Components',
    inStock: true,
  },
  {
    id: 'prod-010',
    name: 'Collins Weather Radar System',
    price: 45000,
    image: '/products/radar.jpg',
    description: 'Advanced multiscan weather radar for real-time storm detection and turbulence analysis.',
    category: 'Avionics',
    inStock: true,
  },
  {
    id: 'prod-011',
    name: 'Digital Altimeter (Certified)',
    price: 12500,
    image: '/products/Digital Altimeter (Certified)2.jpg',
    description: 'Precision digital altimeter with high-contrast display and night vision compatibility.',
    category: 'Avionics',
    inStock: true,
  },
  {
    id: 'prod-012',
    name: 'Turbine Blade Set (High Pressure)',
    price: 28000,
    image: '/products/Turbine Blade Set (High Pressure)2.jpg',
    description: 'Complete set of high-pressure turbine blades, crafted from advanced superalloys.',
    category: 'Engine Components',
    inStock: true,
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category);
}

export function getCategories(): string[] {
  return Array.from(new Set(products.map(p => p.category))).sort();
}
