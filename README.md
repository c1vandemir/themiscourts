# Themis Courts — Etkinlik Sitesi

React 19 + Vite + Tailwind CSS v4 + react-i18next (TR/EN) ile tek sayfalık konferans sitesi.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
```

## Nereyi değiştirmeliyim?

| Ne | Nerede |
|---|---|
| Etkinlik tarihi, başvuru linki, e-postalar, sosyal medya, harita | `src/config/site.js` |
| Tüm metinler (TR / EN) | `src/locales/tr.json`, `src/locales/en.json` |
| Mahkeme, ekip, sponsor, ulaşım listeleri (dilden bağımsız veri) | `src/data/*.js` |
| Renkler, fontlar, animasyonlar | `src/index.css` (`@theme` bloğu) |

**Kural:** Çevrilecek metinler `locales` içindedir; `data` yalnızca id, isim, ikon ve görsel yolu tutar.
Yeni bir mahkeme eklemek için `data/courts.js` dosyasına `{ id, icon, language }` ekleyip her iki
locale dosyasında `courts.items.<id>` anahtarını doldurmanız yeterlidir.

## Yapı

```
src/
├── App.jsx                  # Rotalar (react-router)
├── pages/                   # Her URL için bir sayfa: Home, Courts, Team, Venue,
│                            # Sponsors, Faq, Contact, NotFound
├── main.jsx
├── index.css                # Tailwind + tasarım token'ları
├── config/site.js
├── i18n/index.js            # i18next kurulumu, dil algılama, <html lang> senkronu
├── locales/{tr,en}.json
├── data/                    # navigation, letters, courts, team, sponsors, routes
├── hooks/                   # useScrolled, useCountdown, useInView, useCountUp
└── components/
    ├── ui/                  # Container, Section, SectionHeading, Button, Tabs,
    │                        # Accordion, Avatar, Marquee, SocialIcons
    ├── layout/              # Layout, Navbar, PageHeader, LanguageToggle, Logo, Footer, ScrollToTop
    └── sections/
        ├── Hero/            # Hero, Countdown
        ├── Letters/
        ├── Stats/           # Stats, StatCard
        ├── Courts/          # Courts, CourtCard
        ├── Team/            # Team, MemberCard
        ├── Venue/           # Venue, Logistics
        ├── Sponsors/        # Sponsors, SponsorLogo
        ├── Faq/
        └── Contact/         # Contact, ContactForm
```

## Notlar

- **Dil:** Varsayılan İngilizce, ikinci dil Türkçe (`src/i18n/index.js` → `LANGUAGES`). Ziyaretçinin seçimi
  `localStorage('lang')` içinde saklanır.
- **Renkler:** Site yalnızca aydınlık temada çalışır. Beyaz zeminli bölümler `src/index.css` içindeki anlamsal
  renkleri kullanır (`bg-page`, `bg-card`, `text-ink`, `border-line`, `bg-accent` …); lacivert bantlar
  `bg-navy-950` ile yazılır.

- **Sayfalar:** `/`, `/courts`, `/team`, `/venue`, `/sponsors`, `/faq`, `/contact`. Yeni sayfa için
  `src/pages` altına bileşen ekleyip `App.jsx`'e `<Route>` ve `data/navigation.js`'e menü öğesi ekleyin.
- **Yayına alırken:** Bu bir SPA olduğundan sunucunun tüm yolları `index.html`'e yönlendirmesi gerekir
  (Netlify: `public/_redirects` → `/* /index.html 200`, Vercel: `vercel.json` rewrites).

- **İletişim formu:** `site.contactEndpoint` boşken gönderim simüle edilir. Formspree / Getform
  gibi bir servisin URL'sini yazdığınızda JSON olarak POST eder.
- **Fotoğraf ve logolar:** `public/images/...` altına koyup `data/letters.js`, `data/team.js`
  (`photo`) ve `data/sponsors.js` (`logo`) içinde yolunu verin; yoksa baş harf / wordmark gösterilir.
- **Sosyal ikonlar:** lucide-react 1.x marka ikonlarını içermediğinden `ui/SocialIcons.jsx` içinde
  sade SVG'ler var; resmî logolar için `simple-icons` path'leriyle değiştirilebilir.
