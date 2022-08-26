import { Fragment } from 'react';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import { IconsList } from '../components/IconsList';
import { searchNames } from '../data';

const Title = styled.div`
  background-color: var(--color-neutral-muted);
  padding: 20px 20px 20px 20px;
`;

const NotFoundIcons = styled.div`
  padding-top: 10px;
  color: var(--color-danger-fg);
`;

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  let data: string[] = [];
  searchNames.filter((k) => new RegExp(query || '','ig').test(k)).forEach((name) => {
    if (query) {
      data.push(name)
    }
  });
  return (
    <div>
      {data.length === 0 && (
        <Title>
          Please enter at latest 3 characters to search...
          <NotFoundIcons> Icon Not Found! </NotFoundIcons>
        </Title>
      )}
      <IconsList />
    </div>
  );
}