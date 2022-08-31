import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { iconsData, searchNames, info } from '../data';
import { Card } from './IconCard';
import { NotFoundPage } from '../pages/NotFound';


export const WarpperIcons = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-auto-columns: max-content;
  grid-template-columns: repeat(auto-fill,minmax(90px, 1fr));
  gap: 15px;
`;

export interface IconsListProps {}

export const IconsList = (props: React.PropsWithChildren<IconsListProps>) => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  let data: string[] = [];
  const params = useParams<{ name: string; }>();
  if (params.name) {
    const reName = info[params.name.toLocaleLowerCase()]?.names;
    data = Object.keys(reName || {});
    if (!reName) {
      return <NotFoundPage />
    }
    return (
      <WarpperIcons>
        {data.map((name, key) => {
        const [prename] = name.split(',');
        const basename = reName[name];
          return (
            <Card key={`${key}-${name}`} name={name} prename={prename!} basename={basename!} query={query} path={`/icons/${params.name?.toLocaleLowerCase()}/${basename}.svg`} />
          );
        })}
      </WarpperIcons>
    );
  }
  data = []
  if (query.length > 1) {
    searchNames.filter((k) => new RegExp(query || '','ig').test(k)).forEach((name) => {
      if (query) {
        data.push(name)
      }
    });
  }
  return (
    <WarpperIcons>
      {data.map((name, key) => {
        const [prename] = name.split(',');
        const basename = iconsData[name];
        return (
          <Card key={`${key}-${name}`} basename={basename!} name={name} query={query} prename={prename?.toLocaleLowerCase() || ''} path={`/icons/${prename?.toLocaleLowerCase()}/${basename}.svg`} />
        );
      })}
    </WarpperIcons>
  );
}