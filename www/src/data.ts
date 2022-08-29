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
import aeNames from '@icongo/ae/lib/data.json';
import vlNames from '@icongo/vl/lib/data.json';
import ctNames from '@icongo/ct/lib/data.json';
import blNames from '@icongo/bl/lib/data.json';
import gyNames from '@icongo/gy/lib/data.json';
import mcNames from '@icongo/mc/lib/data.json';
import brNames from '@icongo/br/lib/data.json';
import wlNames from '@icongo/wl/lib/data.json';
import pbiNames from '@icongo/pbi/lib/data.json';
import psNames from '@icongo/ps/lib/data.json';
import imNames from '@icongo/im/lib/data.json';
import snNames from '@icongo/sn/lib/data.json';
import liNames from '@icongo/li/lib/data.json';
import isNames from '@icongo/is/lib/data.json';
import mnNames from '@icongo/mn/lib/data.json';
import flNames from '@icongo/fl/lib/data.json';
import iuNames from '@icongo/iu/lib/data.json';
import fpNames from '@icongo/fp/lib/data.json';
import vsiNames from '@icongo/vsi/lib/data.json';
import laNames from '@icongo/la/lib/data.json';
import fsNames from '@icongo/fs/lib/data.json';
import ixNames from '@icongo/ix/lib/data.json';
import ppNames from '@icongo/pp/lib/data.json';
import mrNames from '@icongo/mr/lib/data.json';
import coNames from '@icongo/co/lib/data.json';
import cbNames from '@icongo/cb/lib/data.json';

export type Info = Record<string, {
  title: string;
  license: string;
  gh: string;
  npm: string;
  names: Record<string, (string | null)[]>;
}>;

export const info: Info = {
  ad: {
    title: 'Ant Design Icons',
    license: 'MIT',
    gh: 'https://github.com/ant-design/ant-design-icons',
    npm: '@icongo/ad',
    names: adNames,
  },
  ae: {
    title: 'Aegis Icons',
    license: 'CC0-1.0',
    gh: 'https://github.com/aegis-icons/aegis-icons',
    npm: '@icongo/ae',
    names: aeNames,
  },
  bi: {
    title: 'Boxicons',
    license: 'MIT',
    gh: 'https://github.com/atisawd/boxicons',
    npm: '@icongo/bi',
    names: biNames,
  },
  bl: {
    title: 'Bank Logos',
    license: 'MIT',
    gh: 'https://github.com/icongo/bank-logos',
    npm: '@icongo/bl',
    names: blNames,
  },
  br: {
    title: 'Browser Logos Icons',
    license: 'MIT',
    gh: 'https://github.com/alrra/browser-logos',
    npm: '@icongo/br',
    names: brNames,
  },
  bs: {
    title: 'Bootstrap Icons',
    license: 'MIT',
    gh: 'https://github.com/twbs/icons',
    npm: '@icongo/bs',
    names: bsNames,
  },
  bts: {
    title: 'Bytesize Icons',
    license: 'MIT',
    gh: 'https://github.com/danklammer/bytesize-icons',
    npm: '@icongo/bts',
    names: btsNames,
  },
  cb: {
    title: 'Carbon Icons',
    license: 'MIT',
    gh: 'https://github.com/carbon-design-system/carbon-icons',
    npm: '@icongo/cb',
    names: cbNames,
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
  co: {
    title: 'Coolicons Icons',
    license: 'CC BY 4.0',
    gh: 'https://github.com/krystonschwarze/coolicons',
    npm: '@icongo/co',
    names: coNames,
  },
  ct: {
    title: 'Cryptocurrency Icons',
    license: 'CC0-1.0',
    gh: 'https://github.com/spothq/cryptocurrency-icons',
    npm: '@icongo/ct',
    names: ctNames,
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
  fl: {
    title: 'Flag Icons',
    license: 'MIT',
    gh: 'https://github.com/yammadev/flag-icons.git',
    npm: '@icongo/fl',
    names: flNames,
  },
  fp: {
    title: 'Flagpack Icons',
    license: 'MIT',
    gh: 'https://github.com/Yummygum/flagpack-core.git',
    npm: '@icongo/fp',
    names: fpNames,
  },
  fs: {
    title: 'Fluent UI System Icons',
    license: 'MIT',
    gh: 'https://github.com/microsoft/fluentui-system-icons',
    npm: '@icongo/fs',
    names: fsNames,
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
  gy: {
    title: 'Glyph Iconset Icons',
    license: 'MIT',
    gh: 'https://github.com/frexy/glyph-iconset',
    npm: '@icongo/gy',
    names: gyNames,
  },
  hi: {
    title: 'Heroicons',
    license: 'MIT',
    gh: 'https://github.com/tailwindlabs/heroicons',
    npm: '@icongo/hi',
    names: hiNames,
  },
  ic: {
    title: 'Icon Collection for Azure',
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
  im: {
    title: 'IcoMoon-Free Icons',
    license: 'None',
    gh: 'https://github.com/Keyamoon/IcoMoon-Free',
    npm: '@icongo/im',
    names: imNames,
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
  is: {
    title: 'Icons',
    license: 'CC BY 4.0',
    gh: 'https://github.com/materialos/icons.git',
    npm: '@icongo/is',
    names: isNames,
  },
  iu: {
    title: 'Issuer Icons',
    license: '⚠️',
    gh: 'https://github.com/raivo-otp/issuer-icons.git',
    npm: '@icongo/iu',
    names: iuNames,
  },
  ix: {
    title: 'Iconsax Icons',
    license: '⚠️',
    gh: 'https://github.com/lusaxweb/iconsax',
    npm: '@icongo/ix',
    names: ixNames,
  },
  ji: {
    title: 'Jam Icons',
    license: 'MIT',
    gh: 'https://github.com/michaelampr/jam',
    npm: '@icongo/ji',
    names: jiNames,
  },
  la: {
    title: 'Icons8 Line Awesome',
    license: 'MIT',
    gh: 'https://github.com/icons8/line-awesome',
    npm: '@icongo/la',
    names: laNames,
  },
  lg: {
    title: 'Logos Icons',
    license: 'CC0-1.0',
    gh: 'https://github.com/gilbarbara/logos',
    npm: '@icongo/lg',
    names: lgNames,
  },
  li: {
    title: 'LibreICONS Icons',
    license: 'MIT',
    gh: 'https://github.com/DiemenDesign/LibreICONS',
    npm: '@icongo/li',
    names: liNames,
  },
  lu: {
    title: 'Lucide Icons',
    license: 'ISC',
    gh: 'https://github.com/lucide-icons/lucide',
    npm: '@icongo/lu',
    names: luNames,
  },
  mc: {
    title: 'Micon Icons',
    license: 'MIT',
    gh: 'https://github.com/xtoolkit/Micon',
    npm: '@icongo/mc',
    names: mcNames,
  },
  md: {
    title: 'Material Design Icons',
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
  mn: {
    title: 'Mono Icons',
    license: 'MIT',
    gh: 'https://github.com/mono-company/mono-icons.git',
    npm: '@icongo/mn',
    names: mnNames,
  },
  mp: {
    title: 'Map Icons',
    license: 'SIL OFL 1.1',
    gh: 'https://github.com/scottdejonge/map-icons',
    npm: '@icongo/mp',
    names: mpNames,
  },
  mr: {
    title: 'Microns Icons',
    license: 'CC BY-SA',
    gh: 'https://github.com/stephenhutchings/microns',
    npm: '@icongo/mr',
    names: mrNames,
  },
  pbi: {
    title: 'Power BI Icons',
    license: 'CC-BY-4.0',
    gh: 'https://github.com/microsoft/PowerBI-Icons',
    npm: '@icongo/pbi',
    names: pbiNames,
  },
  ps: {
    title: 'Pixeden Stroke7 Icons',
    license: 'None',
    gh: 'https://github.com/olimsaidov/pixeden-stroke-7-icon',
    npm: '@icongo/ps',
    names: psNames,
  },
  pk: {
    title: 'IconPark icons',
    license: 'Apache-2.0',
    gh: 'https://github.com/bytedance/IconPark',
    npm: '@icongo/pk',
    names: pkNames,
  },
  pp: {
    title: 'Pepicons icons',
    license: 'CC-BY-4.0',
    gh: 'https://github.com/CyCraft/pepicons',
    npm: '@icongo/pp',
    names: ppNames,
  },
  ri: {
    title: 'RemixIcon icons',
    license: 'Apache-2.0',
    gh: 'https://github.com/Remix-Design/RemixIcon',
    npm: '@icongo/ri',
    names: riNames,
  },
  scwi: {
    title: 'Spectrum-CSS Workflow Icons',
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
  sn: {
    title: 'Small-n-flat Icons',
    license: 'CC0-1.0',
    gh: 'https://github.com/paomedia/small-n-flat',
    npm: '@icongo/sn',
    names: snNames,
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
  vl: {
    title: 'Vector Logo Zone Icons',
    license: 'AGPL-3.0',
    gh: 'https://github.com/VectorLogoZone/vectorlogozone',
    npm: '@icongo/vi',
    names: vlNames,
  },
  vsc: {
    title: 'VS Codicons Icons',
    license: 'MIT',
    gh: 'https://github.com/microsoft/vscode-codicons',
    npm: '@icongo/vsc',
    names: vscNames,
  },
  vsi: {
    title: 'Visual Studio Code',
    license: 'CC-BY-4.0',
    gh: 'https://github.com/microsoft/vscode-icons',
    npm: '@icongo/vsi',
    names: vsiNames,
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
  wl: {
    title: 'We Love SVG Icons',
    license: 'MIT',
    gh: 'https://github.com/icons8/welovesvg',
    npm: '@icongo/wl',
    names: wlNames,
  },
}

export const searchNames: string[] = Object.keys(info).map(item => Object.keys(info[item].names)).flat();

export const iconsData: Record<string, (string | null)[]> = {};

Object.keys(info).map(key => info[key].names).flat().forEach((item) => {
  for (const keyname in item) {
    iconsData[keyname] = item[keyname];
  }
});