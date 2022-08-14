import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import Keywords from 'react-keywords';
import { dataComps, searchNames, info } from '../data';
import { SkeletonLoader } from './SkeletonLoader';

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

export const IconName = styled.span`
  font-size: 12px;
  overflow: hidden;
`;

interface CardWarpperProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  active?: boolean;
}

export const CardWarpper = styled.div<CardWarpperProps>`
  overflow: hidden;
  text-align: center;
  cursor: pointer;
    ${CardItem}, ${IconName} {
      transition: all .3s;
    }
  &:focus {
    ${CardItem}, ${IconName} {
      border-color: var(--color-accent-emphasis) !important;
      color: var(--color-accent-emphasis);
    }
  }
  &:active {
    ${CardItem}, ${IconName} {
      border-color: var(--color-fg-default) !important;
      color: var(--color-fg-default) !important;
    }
  }
`;

export const WarpperIcons = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-auto-columns: max-content;
  grid-template-columns: repeat(auto-fill,minmax(90px, 1fr));
  gap: 15px;
`;

interface IconCardProps extends CardWarpperProps {
  name?: string;
  query?: string;
  child?: () => JSX.Element;
}

const Card: React.FC<React.PropsWithRef<IconCardProps>> = (props) => {
  const { name = '', query = '', child, ...other } = props;
  const preName = Object.keys(dataComps).find(m => {
    return new RegExp(`^${m}`).test(name)
  });
  if (!preName) {
    return null;
  }
  const fun = dataComps[preName as keyof typeof dataComps];
  const Child = !!fun && preName ? fun(name) as unknown as () => JSX.Element : null;
  return (
    <CardWarpper {...other} tabIndex={0}>
      <CardItem>
        <React.Suspense fallback={<SkeletonLoader height="64px" width="100%" radius={4} />}>
          {Child && <Child />}
        </React.Suspense>
      </CardItem>
      <IconName>
        {query ? <Keywords value={query}>{name}</Keywords> : name}
      </IconName>
    </CardWarpper>
  );
}

export interface IconsListProps {}

export const IconsList = (props: React.PropsWithChildren<IconsListProps>) => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  let data: string[] = [];
  const params = useParams<{ name: string; }>();
  if (params.name) {
    data = info[params.name.toLocaleLowerCase()]?.names || [];
    return (
      <WarpperIcons>
        {data.map((name, key) => (
          <Card key={key} name={name} query={query} />
        ))}
      </WarpperIcons>
    );
  } else {
    data = []
    if (query.length > 1) {
      searchNames.filter((k) => new RegExp(query || '','ig').test(k)).forEach((name) => {
        if (query) {
          data.push(name)
        }
      });
    }
  }
  return (
    <WarpperIcons>
      {data.map((name, key) => <Card key={key} name={name} query={query} />)}
    </WarpperIcons>
  );
}