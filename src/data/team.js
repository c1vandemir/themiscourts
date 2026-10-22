// group → locales team.groups.<group>
// role  → locales team.roles.<role>
// dept  → locales team.departments.<dept>  (role içindeki {{dept}} için)
// court → doğrudan kısaltma olarak role içindeki {{court}} yerine yazılır

import member1 from '../assets/team/member-1.jpg';
import member2 from '../assets/team/member-2.jpg';
import member3 from '../assets/team/member-3.jpg';
import member4 from '../assets/team/member-4.jpg';

// Sekmelerin üstünde büyük portre kartlarıyla gösterilen çekirdek ekip.
export const featured = [
  { name: 'Beren Erdal', role: 'directorGeneral', photo: member3 },
  { name: 'Şevval Acar', role: 'deputyDirectorGeneral', photo: member4 },
  { name: 'İpek Elcuman', role: 'secretaryGeneral', photo: member1 },
  { name: 'Tuğra Güldoğan', role: 'deputySecretaryGeneral', photo: member2 },
];

export const team = {
  organization: [
    {
      group: 'directors',
      members: [
        { name: 'Tubanur Vatansever', role: 'director', dept: 'pr' },
        { name: 'Yaren Döşkaya', role: 'director', dept: 'finance' },
        { name: 'Görkem Kanbur', role: 'director', dept: 'logistics' },
        { name: 'Simay Ekşicioğulları', role: 'director', dept: 'sponsorship' },
        { name: 'Nursima Alkan', role: 'director', dept: 'design' },
        { name: 'Seyid Muhammed Özkaş', role: 'director', dept: 'media' },
        { name: 'Ateş Batu Pançuk', role: 'chiefOfStaff' },
        { name: 'Ezgi Erol', role: 'itCoHead' },
        { name: 'Bekir Darakcı', role: 'itCoHead' },
      ],
    },
  ],
  academy: [
    {
      group: 'usgs',
      members: [
        { name: 'Halil Erdem Polat', role: 'usg', court: 'ACM' },
        { name: 'Ayça Buldur', role: 'usg', court: 'ACM' },
        { name: 'Özge Zorlu', role: 'usg', court: 'AYM' },
        { name: 'Arda Isıyel', role: 'usg', court: 'CAS' },
        { name: 'Zeynep Yılmaz', role: 'usg', court: 'WIPO' },
        { name: 'Yusuf Altun', role: 'usg', court: 'ISTAC' },
        { name: 'Safvet Yusuf Tığlı', role: 'usg', court: 'ECHR' },
      ],
    },
  ],
};
