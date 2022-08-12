import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { searchData, searchNames, CardItem, IconName, CardWarpper, WarpperIcons } from './Icons';

const Title = styled.div`
  
`;


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
    setIcons(data)
  }, [query]);

  return (
    <div>
      {icons.length === 0 && (
        <Title>Please enter at latest 2 characters to search...</Title>
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