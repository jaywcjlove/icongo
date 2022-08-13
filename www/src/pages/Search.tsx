import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { WarpperIcons } from './Icons';
import { searchData, searchNames } from '../data';
import { IconCard, IconsList } from '../components/IconCard';

const Title = styled.div``;

export const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [icons, setIcons] = useState<[string, React.FunctionComponent][]>([]);

  useEffect(() => {
    if (query.length < 2) return;
    const data: [string, React.FunctionComponent][] = []
    searchNames.filter((k) => new RegExp(query || '','ig').test(k)).forEach((name) => {
      const Comp = searchData[name as keyof typeof searchData]
      if (!!Comp && query) {
        data.push([name, Comp])
      }
    });
    setIcons(data);
  }, [query]);

  return (
    <div>
      {icons.length === 0 && (
        <Title>Please enter at latest 2 characters to search...</Title>
      )}
      <IconsList data={icons} query={query} />
    </div>
  );
}