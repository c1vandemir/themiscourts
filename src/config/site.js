// Tek noktadan değiştirilecek etkinlik ayarları.
// Metinler (çevrilebilir içerik) src/locales altındadır; burada yalnızca dile bağlı olmayan veriler durur.

export const site = {
  name: 'Themis Courts',
  // Geri sayımın hedefi (ISO 8601, saat dilimiyle birlikte)
  eventDate: '2027-02-05T09:00:00+03:00',
  // false iken sayaç 00:00:00:00'da sabit durur. Tarih kesinleşince true yapın.
  countdownActive: true,
  applyUrl: 'https://forms.gle/your-application-form',
  // Formspree, Getform vb. bir uç nokta. Boş bırakılırsa form gönderimi simüle edilir.
  contactEndpoint: '',
  // Google Maps araması (API anahtarı gerekmez)
  mapQuery: 'Kadir Has Üniversitesi Cibali Kampüsü, Fatih, İstanbul',
  emails: [
    { department: 'general', address: 'info@themiscourts.com' },
    { department: 'academic', address: 'academic@themiscourts.com' },
    { department: 'pr', address: 'pr@themiscourts.com' },
    { department: 'finance', address: 'finance@themiscourts.com' },
    { department: 'logistics', address: 'logistics@themiscourts.com' },
  ],
  socials: {
    instagram: 'https://instagram.com/themiscourts',
    linkedin: 'https://linkedin.com/company/themiscourts',
    youtube: 'https://youtube.com/@themiscourts',
  },
};
