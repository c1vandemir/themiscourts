// group → locales team.groups.<group>
// role  → locales team.roles.<role>
// dept  → locales team.departments.<dept>  (role içindeki {{dept}} için)
// court → doğrudan kısaltma olarak role içindeki {{court}} yerine yazılır
// photo → src/assets/team altındaki görsel; yoksa kartta baş harfler gösterilir

import member1 from '../assets/team/member-1.jpg';
import member2 from '../assets/team/member-2.jpg';
import member3 from '../assets/team/member-3.jpg';
import member4 from '../assets/team/member-4.jpg';
import halilErdemPolat from '../assets/team/halil-erdem-polat.jpg';
import itCoHeads from '../assets/team/it-co-heads.jpg';
import tubanurVatansever from '../assets/team/tubanur-vatansever.jpg';
import yarenDoskaya from '../assets/team/yaren-doskaya.jpg';
import gorkemKanbur from '../assets/team/gorkem-kanbur.jpg';
import simayEksiciogullari from '../assets/team/simay-eksiciogullari.jpg';
import nursimaAlkan from '../assets/team/nursima-alkan.jpg';
import seyidMuhammedOzkas from '../assets/team/seyid-muhammed-ozkas.jpg';
import atesBatuPancuk from '../assets/team/ates-batu-pancuk.jpg';
import ardaIsiyel from '../assets/team/arda-isiyel.jpg';
import zeynepYilmaz from '../assets/team/zeynep-yilmaz.jpg';

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
        { name: 'Tubanur Vatansever', role: 'director', dept: 'pr', photo: tubanurVatansever },
        { name: 'Yaren Döşkaya', role: 'director', dept: 'finance', photo: yarenDoskaya },
        { name: 'Görkem Kanbur', role: 'director', dept: 'logistics', photo: gorkemKanbur },
        { name: 'Simay Ekşicioğulları', role: 'director', dept: 'sponsorship', photo: simayEksiciogullari },
        { name: 'Nursima Alkan', role: 'director', dept: 'design', photo: nursimaAlkan },
        { name: 'Seyid Muhammed Özkaş', role: 'director', dept: 'media', photo: seyidMuhammedOzkas },
        { name: 'Ateş Batu Pançuk', role: 'chiefOfStaff', photo: atesBatuPancuk },
        // İki kişi aynı fotoğrafta olduğu için tek kartta gösterilir
        { name: 'Ezgi Erol & Bekir Darakcı', role: 'itCoHeads', photo: itCoHeads },
      ],
    },
  ],
  academy: [
    {
      group: 'usgs',
      members: [
        { name: 'Halil Erdem Polat', role: 'usg', court: 'ACM', photo: halilErdemPolat },
        { name: 'Ayça Buldur', role: 'usg', court: 'ACM' },
        { name: 'Özge Zorlu', role: 'usg', court: 'AYM' },
        { name: 'Arda Isıyel', role: 'usg', court: 'CAS', photo: ardaIsiyel },
        { name: 'Zeynep Yılmaz', role: 'usg', court: 'WIPO', photo: zeynepYilmaz },
        { name: 'Yusuf Altun', role: 'usg', court: 'ISTAC' },
        { name: 'Safvet Yusuf Tığlı', role: 'usg', court: 'ECHR' },
      ],
    },
  ],
};
