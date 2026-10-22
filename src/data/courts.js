import { Gavel, Handshake, Landmark, Lightbulb, Scale, Trophy } from 'lucide-react';

// Metinler: locales → courts.items.<id>
export const courts = [
  { id: 'cas', icon: Trophy, language: 'tr' },
  { id: 'istac', icon: Handshake, language: 'tr' },
  { id: 'acm', icon: Gavel, language: 'tr' },
  { id: 'aym', icon: Landmark, language: 'tr' },
  { id: 'echr', icon: Scale, language: 'en' },
  { id: 'wipo', icon: Lightbulb, language: 'en' },
];
