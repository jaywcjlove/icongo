import bsNames from '@icongo/bs/lib/data.json';
import stiNames from '@icongo/sti/lib/data.json';
import diNames from '@icongo/di/lib/data.json';
import biNames from '@icongo/bi/lib/data.json';
import goNames from '@icongo/go/lib/data.json';
import vscNames from '@icongo/vsc/lib/data.json';
import giNames from '@icongo/gi/lib/data.json';
import scwiNames from '@icongo/scwi/lib/data.json';
import uiwNames from '@icongo/uiw/lib/data.json';
import tbNames from '@icongo/tb/lib/data.json';
import mdNames from '@icongo/md/lib/data.json';
import siNames from '@icongo/si/lib/data.json';
import pkNames from '@icongo/pk/lib/data.json';
import fgNames from '@icongo/fg/lib/data.json';
import fiNames from '@icongo/fi/lib/data.json';
import fcNames from '@icongo/fc/lib/data.json';
import hiNames from '@icongo/hi/lib/data.json';
import riNames from '@icongo/ri/lib/data.json';
import eiNames from '@icongo/ei/lib/data.json';
import faNames from '@icongo/fa/lib/data.json';
import tiNames from '@icongo/ti/lib/data.json';
import ccpNames from '@icongo/ccp/lib/data.json';
import iiNames from '@icongo/ii/lib/data.json';
import cgNames from '@icongo/cg/lib/data.json';
import grNames from '@icongo/gr/lib/data.json';
import ioNames from '@icongo/io/lib/data.json';
import wiNames from '@icongo/wi/lib/data.json';
import fdNames from '@icongo/fd/lib/data.json';
import lgNames from '@icongo/lg/lib/data.json';
import btsNames from '@icongo/bts/lib/data.json';
import miNames from '@icongo/mi/lib/data.json';
import mpNames from '@icongo/mp/lib/data.json';
import evNames from '@icongo/ev/lib/data.json';
import ciNames from '@icongo/ci/lib/data.json';
import icNames from '@icongo/ic/lib/data.json';
import ikNames from '@icongo/ik/lib/data.json';
import irNames from '@icongo/ir/lib/data.json';
import vvNames from '@icongo/vv/lib/data.json';
import tnNames from '@icongo/tn/lib/data.json';
import luNames from '@icongo/lu/lib/data.json';
import adNames from '@icongo/ad/lib/data.json';
import jiNames from '@icongo/ji/lib/data.json';

export type Info = Record<string, {
  title: string;
  license: string;
  gh: string;
  npm: string;
  // names: string[];
  names: Record<string, (string | null)[]>;
}>;

export const info: Info = {
  ad: {
    title: 'Ant Design Icons',
    license: 'MIT',
    gh: 'https://github.com/ant-design/ant-design-icons',
    npm: '@icongo/bs',
    names: adNames,
  },
  bs: {
    title: 'Bootstrap Icons',
    license: 'MIT',
    gh: 'https://github.com/twbs/icons',
    npm: '@icongo/bs',
    names: bsNames,
  },
  bi: {
    title: 'Boxicons',
    license: 'MIT',
    gh: 'https://github.com/atisawd/boxicons',
    npm: '@icongo/bi',
    names: biNames,
  },
  bts: {
    title: 'Bytesize Icons',
    license: 'MIT',
    gh: 'https://github.com/danklammer/bytesize-icons',
    npm: '@icongo/bts',
    names: btsNames,
  },
  ccp: {
    title: 'Credit Card & Payment',
    license: 'Apache-2.0',
    gh: 'https://github.com/aaronfagan/svg-credit-card-payment-icons',
    npm: '@icongo/ccp',
    names: ccpNames,
  },
  cg: {
    title: 'CSS.gg Icons',
    license: 'MIT',
    gh: 'https://github.com/astrit/css.gg',
    npm: '@icongo/cg',
    names: cgNames,
  },
  ci: {
    title: 'CoreUI Icons',
    license: 'CC BY 4.0',
    gh: 'https://github.com/coreui/coreui-icons',
    npm: '@icongo/ci',
    names: ciNames,
  },
  di: {
    title: 'Devicons',
    license: 'MIT',
    gh: 'https://github.com/vorillaz/devicons',
    npm: '@icongo/di',
    names: diNames,
  },
  ei: {
    title: 'Evil Icons',
    license: 'MIT',
    gh: 'https://github.com/evil-icons/evil-icons',
    npm: '@icongo/ei',
    names: eiNames,
  },
  ev: {
    title: 'Eva Icons',
    license: 'MIT',
    gh: 'https://github.com/akveo/eva-icons',
    npm: '@icongo/ev',
    names: evNames,
  },
  fa: {
    title: 'Font-Awesome Icons',
    license: 'MIT',
    gh: 'https://github.com/FortAwesome/Font-Awesome',
    npm: '@icongo/fa',
    names: faNames,
  },
  fc: {
    title: 'Flat Color Icons',
    license: 'MIT',
    gh: 'https://github.com/icons8/flat-color-icons',
    npm: '@icongo/fc',
    names: fcNames,
  },
  fd: {
    title: 'Foundation Icons',
    license: 'MIT',
    gh: 'https://github.com/zurb/foundation-icon-fonts',
    npm: '@icongo/fd',
    names: fdNames,
  },
  fg: {
    title: 'Flag Icons',
    license: 'MIT',
    gh: 'https://github.com/lipis/flag-icons',
    npm: '@icongo/fg',
    names: fgNames,
  },
  fi: {
    title: 'Feather Icons',
    license: 'MIT',
    gh: 'https://github.com/feathericons/feather',
    npm: '@icongo/fi',
    names: fiNames,
  },
  gi: {
    title: 'Game Icons',
    license: 'MIT',
    gh: 'https://github.com/game-icons/icons',
    npm: '@icongo/gi',
    names: giNames,
  },
  go: {
    title: 'Github Octicons Icons',
    license: 'MIT',
    gh: 'https://github.com/primer/octicons',
    npm: '@icongo/go',
    names: goNames,
  },
  gr: {
    title: 'Grommet Icons',
    license: 'MIT',
    gh: 'https://github.com/grommet/grommet-icons',
    npm: '@icongo/gr',
    names: grNames,
  },
  hi: {
    title: 'Heroicons',
    license: 'MIT',
    gh: 'https://github.com/tailwindlabs/heroicons',
    npm: '@icongo/hi',
    names: hiNames,
  },
  lg: {
    title: 'Logos Icons',
    license: 'CC0-1.0',
    gh: 'https://github.com/gilbarbara/logos',
    npm: '@icongo/lg',
    names: lgNames,
  },
  lu: {
    title: 'Lucide Icons',
    license: 'ISC',
    gh: 'https://github.com/lucide-icons/lucide',
    npm: '@icongo/lu',
    names: luNames,
  },
  md: {
    title: 'Material Design icons by Google',
    license: 'Apache-2.0',
    gh: 'https://github.com/marella/material-design-icons',
    npm: '@icongo/md',
    names: mdNames,
  },
  mi: {
    title: 'Maki Icons',
    license: 'CC0-1.0',
    gh: 'https://github.com/mapbox/maki',
    npm: '@icongo/mi',
    names: miNames,
  },
  mp: {
    title: 'Map Icons',
    license: 'SIL OFL 1.1',
    gh: 'https://github.com/scottdejonge/map-icons',
    npm: '@icongo/mp',
    names: mpNames,
  },
  ic: {
    title: 'Azure Icon Collection',
    license: '-',
    gh: 'https://github.com/benc-uk/icon-collection',
    npm: '@icongo/ic',
    names: icNames,
  },
  ii: {
    title: 'Iconic icons',
    license: 'MIT',
    gh: 'https://github.com/iconic/open-iconic',
    npm: '@icongo/ii',
    names: iiNames,
  },
  ik: {
    title: 'Ikonate icons',
    license: 'MIT',
    gh: 'https://github.com/mikolajdobrucki/ikonate',
    npm: '@icongo/ik',
    names: ikNames,
  },
  io: {
    title: 'Ionicons Icons',
    license: 'MIT',
    gh: 'https://github.com/ionic-team/ionicons',
    npm: '@icongo/io',
    names: ioNames,
  },
  ir: {
    title: 'Iconoir Icons',
    license: 'MIT',
    gh: 'https://github.com/iconoir-icons/iconoir',
    npm: '@icongo/ir',
    names: irNames,
  },
  ji: {
    title: 'Jam Icons',
    license: 'MIT',
    gh: 'https://github.com/michaelampr/jam',
    npm: '@icongo/ir',
    names: jiNames,
  },
  pk: {
    title: 'IconPark icons by Bytedance',
    license: 'Apache-2.0',
    gh: 'https://github.com/bytedance/IconPark',
    npm: '@icongo/pk',
    names: pkNames,
  },
  ri: {
    title: 'RemixIcon icons',
    license: 'Apache-2.0',
    gh: 'https://github.com/Remix-Design/RemixIcon',
    npm: '@icongo/ri',
    names: riNames,
  },
  scwi: {
    title: 'Adobe Spectrum-CSS Workflow Icons',
    license: 'Apache-2.0',
    gh: 'https://github.com/adobe/spectrum-css-workflow-icons',
    npm: '@icongo/scwi',
    names: scwiNames,
  },
  sti: {
    title: 'Super Tiny Icons',
    license: 'MIT',
    gh: 'https://github.com/edent/SuperTinyIcons',
    npm: '@icongo/sti',
    names: stiNames,
  },
  si: {
    title: 'Simple Icons',
    license: 'CC0-1.0',
    gh: 'https://github.com/simple-icons/simple-icons',
    npm: '@icongo/si',
    names: siNames,
  },
  tb: {
    title: 'Tabler Icons',
    license: 'MIT',
    gh: 'https://github.com/tabler/tabler-icons',
    npm: '@icongo/tb',
    names: tbNames,
  },
  ti: {
    title: 'Typicons Icons',
    license: 'MIT',
    gh: 'https://github.com/stephenhutchings/typicons.font',
    npm: '@icongo/ti',
    names: tiNames,
  },
  tn: {
    title: 'Teenyicons Icons',
    license: 'CC BY-SA 4.0',
    gh: 'https://github.com/teenyicons/teenyicons',
    npm: '@icongo/tn',
    names: tnNames,
  },
  uiw: {
    title: 'UIW Icons',
    license: 'MIT',
    gh: 'https://github.com/uiwjs/icons',
    npm: '@icongo/uiw',
    names: uiwNames,
  },
  vsc: {
    title: 'Visual Studio Code Icons',
    license: 'MIT',
    gh: 'https://github.com/microsoft/vscode-codicons',
    npm: '@icongo/vsc',
    names: vscNames,
  },
  vv: {
    title: 'Vivid Icons',
    license: 'MIT',
    gh: 'https://github.com/webkul/vivid',
    npm: '@icongo/vv',
    names: vvNames,
  },
  wi: {
    title: 'Weather Icons',
    license: 'SIL OFL 1.1',
    gh: 'https://github.com/erikflowers/weather-icons',
    npm: '@icongo/wi',
    names: wiNames,
  },
}

export const searchNames: string[] = Object.keys(info).map(item => Object.keys(info[item].names)).flat();

export const iconsData: Record<string, (string | null)[]> = {};

Object.keys(info).map(key => info[key].names).flat().forEach((item) => {
  for (const keyname in item) {
    iconsData[keyname] = item[keyname];
  }
});