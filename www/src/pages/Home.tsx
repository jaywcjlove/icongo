import styled from 'styled-components';
import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { LGSvg } from '@icongo/lg';
import { SearchInput } from '../components/Search';
import { Footer } from '../components/Footer';

import { searchNames } from '../data';

const Warpper = styled.div`
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background-color: var(--color-canvas-subtle);
  min-height: 100vh;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 3rem;
  margin-top: 2rem;
  font-weight: 900;
  font-family: geomanistregular,Arial,Helvetica,sans-serif;
  font-size: 3.6rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  svg {
    font-size: 3.1rem;
  }
  @media (max-width: 600px) {
    font-size: 2.6rem;
    svg {
      font-size: 2.6rem;
    }
  }
`;

const Detail = styled.div`
  padding-top: 1.3rem;
  text-align: center;
  color: var(--color-fg-subtle);
`;

const Form = styled.form`
  width: 100%;
  display: flex;
`;

export const HomePage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchValue, setSearchValue] = useState(query);
  const changeHandle = (evn: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(evn.target.value);
  }
  useEffect(() => {
    setSearchValue(query);
  }, [query]);

  const handleSubmit = (evn: React.FormEvent<HTMLFormElement>) => {
    evn && evn.preventDefault();
    const field = new FormData(evn.currentTarget!);
    navigate('/search', {
      state: field.get('query')?.toString() || ''
    });
  }
  const handleSearch = (val: string) => {
    navigate('/search', { state: val });
  }
  return (
    <Warpper>
      <Title>
        <LGSvg />
        Search Icons
      </Title>
      <Form onSubmit={handleSubmit}>
        <SearchInput
          placeholder={`Search ${searchNames.length} icons...`}
          value={searchValue}
          onSearch={(val) => handleSearch(val)}
          onChange={changeHandle}
        />
      </Form>
      <Detail>
        Include popular icons in your React projects easily icons.
      </Detail>
      <Footer />
    </Warpper>
  );
}