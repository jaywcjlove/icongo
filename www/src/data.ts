import { lazy } from 'react';
import bsNames from '@icongo/bs/lib/names.json';
import stiNames from '@icongo/sti/lib/names.json';
import diNames from '@icongo/di/lib/names.json';
import biNames from '@icongo/bi/lib/names.json';
import goNames from '@icongo/go/lib/names.json';
import vscNames from '@icongo/vsc/lib/names.json';
import giNames from '@icongo/gi/lib/names.json';
import scwiNames from '@icongo/scwi/lib/names.json';
import uiwNames from '@icongo/uiw/lib/names.json';
import tbNames from '@icongo/tb/lib/names.json';
import mdNames from '@icongo/md/lib/names.json';
import siNames from '@icongo/si/lib/names.json';
import pkNames from '@icongo/pk/lib/names.json';
import fgNames from '@icongo/fg/lib/names.json';
import fiNames from '@icongo/fi/lib/names.json';
import fcNames from '@icongo/fc/lib/names.json';
import hiNames from '@icongo/hi/lib/names.json';
import riNames from '@icongo/ri/lib/names.json';
import eiNames from '@icongo/ei/lib/names.json';
import faNames from '@icongo/fa/lib/names.json';
import tiNames from '@icongo/ti/lib/names.json';
import ccpNames from '@icongo/ccp/lib/names.json';
import iiNames from '@icongo/ii/lib/names.json';
import cgNames from '@icongo/cg/lib/names.json';
import grNames from '@icongo/gr/lib/names.json';
import ioNames from '@icongo/io/lib/names.json';
import wiNames from '@icongo/wi/lib/names.json';
import fdNames from '@icongo/fd/lib/names.json';

const cacheData: Partial<Record<keyof typeof dataComps, any>>= {}
function loader<T = Record<string, any>>(fn: () => Promise<T>, preName: keyof typeof dataComps , name: string) {
  if (cacheData[preName]) {
    return cacheData[preName][name]
  }
  return lazy(() => {
    return fn().then((module) => {
      cacheData[preName] = module;
      return ({
        default: module[name as keyof typeof module] as unknown as () => JSX.Element
      });
    })
  })
}

export const dataComps = {
  BI: (name: string) => loader(() => import(`@icongo/bi/lib`), 'BI', name),
  BS: (name: string) => loader(() => import(`@icongo/bs/lib`), 'BS', name),
  CCP: (name: string) => loader(() => import(`@icongo/ccp/lib`), 'CCP', name),
  CG: (name: string) => loader(() => import(`@icongo/cg/lib`), 'CG', name),
  DI: (name: string) => loader(() => import(`@icongo/di/lib`), 'DI', name),
  Ei: (name: string) => loader(() => import(`@icongo/ei/lib`), 'Ei', name),
  Wi: (name: string) => loader(() => import(`@icongo/wi/lib`), 'Wi', name),
  FA: (name: string) => loader(() => import(`@icongo/fa/lib`), 'FA', name),
  FC: (name: string) => loader(() => import(`@icongo/fc/lib`), 'FC', name),
  FD: (name: string) => loader(() => import(`@icongo/fd/lib`), 'FD', name),
  FG: (name: string) => loader(() => import(`@icongo/fg/lib`), 'FG', name),
  FI: (name: string) => loader(() => import(`@icongo/fi/lib`), 'FI', name),
  GI: (name: string) => loader(() => import(`@icongo/gi/lib`), 'GI', name),
  GO: (name: string) => loader(() => import(`@icongo/go/lib`), 'GO', name),
  GR: (name: string) => loader(() => import(`@icongo/gr/lib`), 'GR', name),
  HI: (name: string) => loader(() => import(`@icongo/hi/lib`), 'HI', name),
  MD: (name: string) => loader(() => import(`@icongo/md/lib`), 'MD', name),
  II: (name: string) => loader(() => import(`@icongo/ii/lib`), 'II', name),
  IO: (name: string) => loader(() => import(`@icongo/io/lib`), 'IO', name),
  PK: (name: string) => loader(() => import(`@icongo/pk/lib`), 'PK', name),
  RI: (name: string) => loader(() => import(`@icongo/ri/lib`), 'RI', name),
  SCWI: (name: string) => loader(() => import(`@icongo/scwi/lib`), 'SCWI', name),
  SI: (name: string) => loader(() => import(`@icongo/si/lib`), 'SI', name),
  STI: (name: string) => loader(() => import(`@icongo/sti/lib`), 'STI', name),
  TB: (name: string) => loader(() => import(`@icongo/tb/lib`), 'TB', name),
  TI: (name: string) => loader(() => import(`@icongo/ti/lib`), 'TI', name),
  UIW: (name: string) => loader(() => import(`@icongo/uiw/lib`), 'UIW', name),
  VSC: (name: string) => loader(() => import(`@icongo/vsc/lib`), 'VSC', name),
}

export type Info = Record<string, {
  title: string;
  license: string;
  gh: string;
  npm: string;
  names: string[];
}>;

export const info: Info = {
  bootstrap: {
    title: 'Bootstrap Icons',
    license: 'MIT',
    gh: 'https://github.com/twbs/icons',
    npm: '@icongo/bs',
    names: bsNames,
  },
  boxicons: {
    title: 'Boxicons',
    license: 'MIT',
    gh: 'https://github.com/atisawd/boxicons',
    npm: '@icongo/bi',
    names: biNames,
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
  devicons: {
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
  md: {
    title: 'Material Design icons by Google',
    license: 'Apache-2.0',
    gh: 'https://github.com/marella/material-design-icons',
    npm: '@icongo/md',
    names: mdNames,
  },
  ii: {
    title: 'Iconic icons',
    license: 'MIT',
    gh: 'https://github.com/iconic/open-iconic',
    npm: '@icongo/ii',
    names: iiNames,
  },
  io: {
    title: 'Ionicons Icons',
    license: 'MIT',
    gh: 'https://github.com/ionic-team/ionicons',
    npm: '@icongo/io',
    names: ioNames,
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
  supertinyicons: {
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
    license: 'CC BY-SA 4.0',
    gh: 'https://github.com/stephenhutchings/typicons.font',
    npm: '@icongo/ti',
    names: tiNames,
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
  wi: {
    title: 'Weather Icons',
    license: 'SIL OFL 1.1',
    gh: 'https://github.com/erikflowers/weather-icons',
    npm: '@icongo/wi',
    names: wiNames,
  },
}

export const searchNames: string[] = Object.keys(info).map(item => info[item].names).flat();