import styled from 'styled-components';
import { ChangeEvent, useEffect, useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import { SearchInput } from './components/Search';
import { searchNames } from './data';
import { STISvg } from '@icongo/sti';
import { Footer } from './components/Footer';

const Warpper = styled.div``;

const Container = styled.div`
  display: flex;
  max-width: 81.875rem;
  padding: 0 1rem;
  margin: 0 auto 1rem;
`;


const Nav = styled.nav`
  margin: 2.75rem 0 0;
  ${Container} {
    padding: 0 2rem;
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  margin: 0 0 0 2.9125rem;
  max-width: 53.125rem;
  @media (max-width: 600px) {
    margin: 0 0 0 0;
  }
`;

const Content = styled.div`
  position: relative;
  margin-top: 3.75rem;
  margin-bottom: 3rem;
  padding: 0 1rem;
  transition: all .3s;
  @media (max-width: 600px) {
    margin-top: 2.05rem;
  }
  ${Container} {
    flex-direction: column;
    max-width: 63.125rem;
    @media (max-width: 600px) {
      padding: 0 0;
    }
  }
`;

const Section = styled.section`
  padding: 2rem 2rem;
  border-radius: 0.375rem;
  box-shadow: 0.5rem 0.5rem 2rem 0 rgb(8 15 41 / 8%), 0 0 1px 0 rgb(8 15 41 / 8%);
  border: 1px solid var(--color-border-muted);
  width: 100%;
  @media (max-width: 600px) {
    padding: 1.5rem 1.5rem;
  }
`;

const Logo = styled(NavLink)`
  margin-top: 0.6125rem;
  font-size: 2rem;
  text-align: center;
  font-weight: 900;
  text-decoration: none;
  color: var(--color-fg-default);
  font-family: geomanistregular,Arial,Helvetica,sans-serif;
  display: flex;
  gap: 10px;
`;

export const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchValue, setSearchValue] = useState(query);

  useEffect(() => {
    if (location.state) {
      setSearchValue(location.state as string);
      setSearchParams({ q: location.state as string });
    }
  }, [location.state])

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
  const changeHandle = (evn: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(evn.target.value);
  }
  return (
    <Warpper>
      <Nav>
        <Container>
          <Logo to="/">
            <STISvg />
            IconGo
          </Logo>
          <Form onSubmit={handleSubmit}>
            <SearchInput
              placeholder={`Search ${searchNames.length} icons...`}
              value={searchValue}
              onSearch={(val) => handleSearch(val)}
              onChange={changeHandle}
            />
          </Form>
        </Container>
      </Nav>
      <Content>
        <Container>
          <Section>
            <Outlet />
          </Section>
          <Footer />
        </Container>
      </Content>
    </Warpper>
  )
}