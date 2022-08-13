import bsNames from '@icongo/bs/lib/names.json';
import * as bsdata from '@icongo/bs/lib/index.js';
import stiNames from '@icongo/sti/lib/names.json';
import * as stidata from '@icongo/sti/lib/index.js';
import diNames from '@icongo/di/lib/names.json';
import * as didata from '@icongo/di/lib/index.js';
import biNames from '@icongo/bi/lib/names.json';
import * as bidata from '@icongo/bi/lib/index.js';
import goNames from '@icongo/go/lib/names.json';
import * as godata from '@icongo/go/lib/index.js';
import vscNames from '@icongo/vsc/lib/names.json';
import * as vscdata from '@icongo/vsc/lib/index.js';
import giNames from '@icongo/gi/lib/names.json';
import * as gidata from '@icongo/gi/lib/index.js';
import scwiNames from '@icongo/scwi/lib/names.json';
import * as scwidata from '@icongo/scwi/lib/index.js';


export type Info = Record<string, {
  title: string;
  license: string;
  gh: string;
  import: string;
  names: string[];
  data: Record<string, React.FunctionComponent>;
}>;

export const searchNames: string[] = [
  ...bsNames, ...biNames, ...diNames, ...stiNames, ...goNames, ...vscNames,
  ...giNames,
  ...scwiNames,
];
export const searchData: Record<string, React.FunctionComponent> = {
  ...bsdata, ...bidata, ...didata, ...stidata, ...godata, ...vscdata,
  ...gidata,
  ...scwidata,
}

export const info: Info = {
  bootstrap: {
    title: 'Bootstrap Icons',
    license: 'MIT',
    gh: 'https://github.com/twbs/icons',
    import: `import { IconName } from "@icongo/bs";`,
    names: bsNames,
    data: bsdata,
  },
  boxicons: {
    title: 'Boxicons',
    license: 'MIT',
    gh: 'https://github.com/atisawd/boxicons',
    import: `import { IconName } from "@icongo/bi";`,
    names: biNames,
    data: bidata,
  },
  devicons: {
    title: 'Devicons',
    license: 'MIT',
    gh: 'https://github.com/vorillaz/devicons',
    import: `import { IconName } from "@icongo/di";`,
    names: diNames,
    data: didata,
  },
  gameicons: {
    title: 'Devicons',
    license: 'MIT',
    gh: 'https://github.com/game-icons/icons',
    import: `import { IconName } from "@icongo/gi";`,
    names: giNames,
    data: gidata,
  },
  octiconsicons: {
    title: 'Github Octicons Icons',
    license: 'MIT',
    gh: 'https://github.com/primer/octicons',
    import: `import { IconName } from "@icongo/go";`,
    names: goNames,
    data: godata,
  },
  scwi: {
    title: 'Adobe Spectrum-CSS Workflow Icons',
    license: 'Apache-2.0',
    gh: 'https://github.com/adobe/spectrum-css-workflow-icons',
    import: `import { IconName } from "@icongo/scwi";`,
    names: scwiNames,
    data: scwidata,
  },
  supertinyicons: {
    title: 'Super Tiny Icons',
    license: 'MIT',
    gh: 'https://github.com/edent/SuperTinyIcons',
    import: `import { IconName } from "@icongo/sti";`,
    names: stiNames,
    data: stidata,
  },
  vsc: {
    title: 'Visual Studio Code Icons',
    license: 'MIT',
    gh: 'https://github.com/microsoft/vscode-codicons',
    import: `import { IconName } from "@icongo/vsc";`,
    names: vscNames,
    data: vscdata,
  },
}
