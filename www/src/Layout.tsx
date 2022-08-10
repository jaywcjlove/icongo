import { ChangeEvent, useEffect, useState } from 'react';
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

const Warpper = styled.div`
  max-width: 980px;
  margin: 0 auto;
`;

const Header = styled.header`
  padding-top: 23px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const Title = styled.h1`
  text-align: center;
`;

const Detail = styled.div`
  text-align: center;
`;

const Search = styled.input`
  line-height: 1.8rem;
  font-size: 1.2rem;
  border-radius: 6px;
  outline: none;
`;

export const Layout = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchValue, setSearchValue] = useState(query);
  const focusHandle = () => {
    navigate('/search');
    setSearchParams({ q: query });
  }
  const blurHandle = () => {
    // navigate('/')
    console.log('>>2>')
  }
  const changeHandle = (evn: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(evn.target.value);
    setSearchParams({ q: evn.target.value });
  }

  useEffect(() => {
    setSearchValue(query);
  }, [query]);

  return (
    <Warpper>
      <Header>
        <Title>SVG To React Component</Title>
        <Detail>
          Include popular icons in your React projects easily 
        </Detail>
        <Search type="text" value={searchValue} onChange={changeHandle} onFocus={focusHandle} onBlur={blurHandle} />
      </Header>
      <Outlet />
    </Warpper>
  )
}