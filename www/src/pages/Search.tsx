import { useContext } from 'react';
import styled from 'styled-components';
import { IconsList } from '../components/IconCard';
import { Context } from '../store/context';

const Title = styled.div``;

export const SearchPage = () => {
  const { results, setResults } = useContext(Context);

  return (
    <div>
      {results.length === 0 && (
        <Title>Please enter at latest 3 characters to search...</Title>
      )}
      <IconsList />
    </div>
  );
}