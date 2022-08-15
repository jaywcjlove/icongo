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
  DI: (name: string) => loader(() => import(`@icongo/di/lib`), 'DI', name),
  FG: (name: string) => loader(() => import(`@icongo/fg/lib`), 'FG', name),
  GI: (name: string) => loader(() => import(`@icongo/gi/lib`), 'GI', name),
  GO: (name: string) => loader(() => import(`@icongo/go/lib`), 'GO', name),
  MD: (name: string) => loader(() => import(`@icongo/md/lib`), 'MD', name),
  PK: (name: string) => loader(() => import(`@icongo/pk/lib`), 'PK', name),
  SCWI: (name: string) => loader(() => import(`@icongo/scwi/lib`), 'SCWI', name),
  SI: (name: string) => loader(() => import(`@icongo/si/lib`), 'SI', name),
  STI: (name: string) => loader(() => import(`@icongo/sti/lib`), 'STI', name),
  TB: (name: string) => loader(() => import(`@icongo/tb/lib`), 'TB', name),
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
  devicons: {
    title: 'Devicons',
    license: 'MIT',
    gh: 'https://github.com/vorillaz/devicons',
    npm: '@icongo/di',
    names: diNames,
  },
  fg: {
    title: 'Flag Icons',
    license: 'MIT',
    gh: 'https://github.com/lipis/flag-icons',
    npm: '@icongo/fg',
    names: fgNames,
  },
  gameicons: {
    title: 'Game Icons',
    license: 'MIT',
    gh: 'https://github.com/game-icons/icons',
    npm: '@icongo/gi',
    names: giNames,
  },
  octiconsicons: {
    title: 'Github Octicons Icons',
    license: 'MIT',
    gh: 'https://github.com/primer/octicons',
    npm: '@icongo/go',
    names: goNames,
  },
  md: {
    title: 'Material Design icons by Google',
    license: 'Apache-2.0',
    gh: 'https://github.com/marella/material-design-icons',
    npm: '@icongo/md',
    names: mdNames,
  },
  pk: {
    title: 'IconPark icons by Bytedance',
    license: 'Apache-2.0',
    gh: 'https://github.com/bytedance/IconPark',
    npm: '@icongo/pk',
    names: pkNames,
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
}

export const searchNames: string[] = Object.keys(info).map(item => info[item].names).flat();