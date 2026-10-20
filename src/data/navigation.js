// id → `nav.<id>` çeviri anahtarı, path → sayfa adresi
export const navItems = [
  { id: 'home', path: '/' },
  { id: 'courts', path: '/courts' },
  { id: 'team', path: '/team' },
  { id: 'venue', path: '/venue' },
  { id: 'sponsors', path: '/sponsors' },
  { id: 'faq', path: '/faq' },
];

// Footer'daki hızlı bağlantılar (menüde olmayan sayfalar dahil)
export const footerLinks = [...navItems, { id: 'contact', path: '/contact' }];
