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
  GI: (name: string) => loader(() => import(`@icongo/gi/lib`), 'GI', name),
  GO: (name: string) => loader(() => import(`@icongo/go/lib`), 'GO', name),
  SCWI: (name: string) => loader(() => import(`@icongo/scwi/lib`), 'SCWI', name),
  STI: (name: string) => loader(() => import(`@icongo/sti/lib`), 'STI', name),
  TB: (name: string) => loader(() => import(`@icongo/tb/lib`), 'TB', name),
  UIW: (name: string) => loader(() => import(`@icongo/uiw/lib`), 'UIW', name),
  VSC: (name: string) => loader(() => import(`@icongo/vsc/lib`), 'VSC', name),
}


export type Info = Record<string, {
  title: string;
  license: string;
  gh: string;
  import: string;
  names: string[];
}>;

export const searchNames: string[] = [
  ...bsNames, ...biNames, ...diNames, ...stiNames, ...goNames, ...vscNames,
  ...giNames,
  ...scwiNames,
  ...tbNames,
  ...uiwNames,
];

export const info: Info = {
  bootstrap: {
    title: 'Bootstrap Icons',
    license: 'MIT',
    gh: 'https://github.com/twbs/icons',
    import: `import { IconName } from "@icongo/bs";`,
    names: bsNames,
  },
  boxicons: {
    title: 'Boxicons',
    license: 'MIT',
    gh: 'https://github.com/atisawd/boxicons',
    import: `import { IconName } from "@icongo/bi";`,
    names: biNames,
  },
  devicons: {
    title: 'Devicons',
    license: 'MIT',
    gh: 'https://github.com/vorillaz/devicons',
    import: `import { IconName } from "@icongo/di";`,
    names: diNames,
  },
  gameicons: {
    title: 'Game Icons',
    license: 'MIT',
    gh: 'https://github.com/game-icons/icons',
    import: `import { IconName } from "@icongo/gi";`,
    names: giNames,
  },
  octiconsicons: {
    title: 'Github Octicons Icons',
    license: 'MIT',
    gh: 'https://github.com/primer/octicons',
    import: `import { IconName } from "@icongo/go";`,
    names: goNames,
  },
  scwi: {
    title: 'Adobe Spectrum-CSS Workflow Icons',
    license: 'Apache-2.0',
    gh: 'https://github.com/adobe/spectrum-css-workflow-icons',
    import: `import { IconName } from "@icongo/scwi";`,
    names: scwiNames,
  },
  supertinyicons: {
    title: 'Super Tiny Icons',
    license: 'MIT',
    gh: 'https://github.com/edent/SuperTinyIcons',
    import: `import { IconName } from "@icongo/sti";`,
    names: stiNames,
  },
  tb: {
    title: 'Tabler Icons',
    license: 'MIT',
    gh: 'https://github.com/tabler/tabler-icons',
    import: `import { IconName } from "@icongo/tb";`,
    names: tbNames,
  },
  uiw: {
    title: 'UIW Icons',
    license: 'MIT',
    gh: 'https://github.com/uiwjs/icons',
    import: `import { IconName } from "@icongo/uiw";`,
    names: uiwNames,
  },
  vsc: {
    title: 'Visual Studio Code Icons',
    license: 'MIT',
    gh: 'https://github.com/microsoft/vscode-codicons',
    import: `import { IconName } from "@icongo/vsc";`,
    names: vscNames,
  },
}
