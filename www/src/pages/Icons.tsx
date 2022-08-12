import { useSearchParams, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MarkdownPreview from '@uiw/react-markdown-preview';
import styled from 'styled-components';
import { STITypescript, STIGithub } from '@icongo/sti/lib/index.js';
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

type Info = Record<string, {
  title: string;
  license: string;
  gh: string;
  import: string;
  names: string[];
  data: Record<string, React.FunctionComponent>;
}>;

export const searchNames: string[] = [ ...bsNames, ...biNames, ...diNames, ...stiNames, ...goNames];
export const searchData: Record<string, React.FunctionComponent> = {...bsdata, ...bidata, ...didata, ...stidata, ...godata }

const info: Info = {
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
  octiconsicons: {
    title: 'Github Octicons Icons',
    license: 'MIT',
    gh: 'https://github.com/primer/octicons',
    import: `import { IconName } from "@icongo/go";`,
    names: goNames,
    data: godata,
  },
  supertinyicons: {
    title: 'Super Tiny Icons',
    license: 'MIT',
    gh: 'https://github.com/edent/SuperTinyIcons',
    import: `import { IconName } from "@icongo/sti";`,
    names: stiNames,
    data: stidata,
  },
}

export const CardItem = styled.div`
  box-shadow: 0 1px 3px 0 var(--color-neutral-muted);
  border: 2px solid var(--color-border-muted);
  border-radius: 5px;
  min-height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`;

export const CardWarpper = styled.div`
  overflow: hidden;
  text-align: center;
`;

export const WarpperIcons = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-auto-columns: max-content;
  grid-template-columns: repeat(auto-fill,minmax(90px, 1fr));
  gap: 15px;
`;

export const IconName = styled.span`
  font-size: 12px;
  overflow: hidden;
`;

export const Panel = styled.div`
  background-color: var(--color-neutral-muted);
  padding: 10px 20px 20px 20px;
  margin-bottom: 20px;
  color: var(--color-fg-default);
  a {
    text-decoration: none;
    svg {
      display: block;
    }
  }
  > h1 {
    margin: 0;
    font-size: 26px;
  }
  > h2 {
    margin: 0;
    font-size: 18px;
  }
  .wmde-markdown {
    background-color: transparent;
  }
`;

const Badges = styled.p`
  margin-top: 0;
  display: flex;
  gap: 5px;
  align-items: center;
`;

export const IconsPage = () => {
  const params = useParams<{ name: string; }>();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [icons, setIcons] = useState<[string, React.FunctionComponent][]>([]);
  const baseData = info[params.name?.toLocaleLowerCase()!];
  useEffect(() => {
    const data: [string, React.FunctionComponent][] = [];
    if (baseData) {
      baseData.names.filter((k) => new RegExp(query || '','ig').test(k)).forEach((name) => {
        const Comp = baseData.data[name as keyof typeof bsdata]
        if (!!Comp) {
          data.push([name, Comp])
        }
      });
    }
    setIcons(data);
  }, [query, params.name]);

  return (
    <div>
      {baseData && (
        <Panel>
          <h1>{baseData.title}</h1>
          <Badges>
            <STITypescript />
            <a href={baseData.gh} target="__blank"><STIGithub /></a>
            {baseData.license} / <a href={baseData.gh} target="__blank">Github</a>
          </Badges>
          <MarkdownPreview source={`\`\`\`js\n${baseData.import}\n\`\`\``} />
        </Panel>
      )}
      <WarpperIcons>
        {icons.map((item, key) => {
          const [name, Com]= item;
          return (
            <CardWarpper key={key}>
              <CardItem>
                <Com />
              </CardItem>
              <IconName>{name}</IconName>
            </CardWarpper>
          )
        })}
      </WarpperIcons>
    </div>
  );
}