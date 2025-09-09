# 📁 Prosjektstruktur

## Oversikt

```
trevl/
├── app/                    # Next.js app-mappe
│   ├── layout.tsx         # Rot-layout komponent
│   ├── page.tsx           # Hovedside
│   └── trips/             # Reisesider
├── components/            # React-komponenter
│   ├── layout/           # Layout-komponenter
│   └── shared/           # Delte/gjenbrukbare komponenter
├── i18n/                 # Internasjonalisering
│   └── messages/         # Oversettingsfiler
├── public/              # Statiske filer
│   ├── data/           # JSON-datafiler
│   └── images/         # Bildefiler
├── styles/             # Globale stiler
└── types/              # TypeScript typedefinisjoner
```

## Viktige Mapper

### `/app`
Next.js 13+ app-mappe som bruker den nye App Router. Inneholder alle sider og layouts.

#### Understrukturer:
- `trips/`: Separate sider for hver reisedestinasjon
  - `amsterdam/`: Amsterdam-reisen
  - `fredrikstad/`: Fredrikstad-reisen
  - `oslo/`: Oslo-reisen
  - `thailand/`: Thailand-reisen

### `/components`
React-komponenter organisert etter formål:
- `layout/`:
  - `Header.tsx`: Navigasjonsmeny
  - `Footer.tsx`: Bunntekst
  - `LanguageSwitcher.tsx`: Språkvelger
  - `MobileMenu.tsx`: Mobilmeny
- `shared/`:
  - `AlbumCard.tsx`: Kortkomponent for reisealbum
  - `Lightbox.tsx`: Bildevisning i fullskjerm
  - `PhotoGrid.tsx`: Rutenett for bilder

### `/i18n`
Flerspråklig støtte:
- `messages/`: 
  - `en.json`: Engelske oversettelser
  - `es.json`: Spanske oversettelser
  - `no.json`: Norske oversettelser
  - `zh-Hant.json`: Tradisjonell kinesisk
  - `I18nProvider.tsx`: Språkkontekst-provider
  - `useT.ts`: Oversettelseshook

### `/public`
Statiske ressurser:
- `data/captions/`: JSON-filer med bildetekster på alle støttede språk
- `images/`:
  - `cards/`: Miniatyrbilder for reisekort
  - `destinations/`: Reisebilder organisert per destinasjon
  - `flags/`: Språkflagg
  - `logo.png` og `logo-sunset.png`: Nettstedets logoer

### `/styles`
Stilsetting:
- `globals.css`: Globale CSS-stiler og Tailwind-imports

### `/types`
TypeScript-definisjoner:
- `trip.ts`: Typedefinisjoner for reisedata

## Nøkkelfiler

### Konfigurasjon
- `next.config.ts`: Next.js-konfigurasjon
- `tailwind.config.ts`: Tailwind CSS-konfigurasjon
- `postcss.config.js`: PostCSS-konfigurasjon
- `tsconfig.json`: TypeScript-konfigurasjon

### Kjerne-komponenter
- `app/layout.tsx`: Rot-layout med providers
- `app/page.tsx`: Hovedsiden med oversikt over reiser
