const pallets = [
  { title: null, dim: '40x40', weight: 1000 },
  { title: null, dim: '40x40', weight: 1000 },
  { title: null, dim: '40x40', weight: 1000 },
  { title: 'Books', dim: '48x48', weight: 1200 },
  { title: 'Books', dim: '48x48', weight: 1200 },
  { title: 'Bottles', dim: '48x40', weight: null },
  { title: 'Bottles', dim: '48x40', weight: null },
  { title: 'Bottles', dim: '48x40', weight: null },
];

const errors = [
  { title: 'Cargo title required', dim: '40x40', weight: 1000 },
  { title: 'Cargo title required', dim: '40x40', weight: 1000 },
  { title: 'Cargo title required', dim: '40x40', weight: 1000 },
  { title: 'Books', dim: '48x48', weight: 1200 },
  { title: 'Books', dim: '48x48', weight: 1200 },
  { title: 'Bottles', dim: '48x40', weight: 'Pallet weight required' },
  { title: 'Bottles', dim: '48x40', weight: 'Pallet weight required' },
  { title: 'Bottles', dim: '48x40', weight: 'Pallet weight required' },
];

export { pallets, errors };
