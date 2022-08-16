import { ChangeEvent, useEffect, useState } from 'react';
import { NavLink, Outlet, useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { SearchInput } from './components/Search';

import { searchNames } from './data';

const Warpper = styled.div`
`;

const Header = styled.header`
  padding-top: 23px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background-color: var(--color-canvas-subtle);
  height: 50vh;
  margin-bottom: 26px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 0;
`;

const Detail = styled.div`
  text-align: center;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
`;

const Content = styled.div`
  display: grid;
  grid-template-areas: 'sidebar main';
  grid-template-columns: 220px minmax(0, 3.5fr);
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 120px;
`;

const Aside = styled.aside`
  position: sticky;
  top: 0px;
  overflow: auto;
  max-height: calc(100vh - 10px);
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  > a {
    color: var(--color-fg-default);
    text-decoration: none;
    display: block;
    padding: 5px 8px;
    border-radius: 3px;
    transition: all .3s;
    &.active, &.active:hover {
      background-color: var(--color-accent-fg);
    }
    &:hover {
      background-color: var(--color-border-muted);
    }
    &.active {
      color: var(--color-canvas-default);
    }
  }
`;

const AsideWarpper = styled.div`
  grid-area: sidebar;
  background-color: var(--color-canvas-subtle);
`;

const Bold = styled.strong`
  font-weight: bold;
`;

export const Layout = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchValue, setSearchValue] = useState(query);
  const focusHandle = () => {
    navigate('/search');
  }
  const changeHandle = (evn: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(evn.target.value);
  }

  useEffect(() => {
    setSearchValue(query);
  }, [query]);

  const handleSubmit = (evn: React.FormEvent<HTMLFormElement>) => {
    evn && evn.preventDefault();
    const field = new FormData(evn.currentTarget!);
    setSearchParams({ q: field.get('query')?.toString() || '' });
  }

  return (
    <Warpper>
      <Header>
        <Title>SVG To React Component</Title>
        <Detail>
          Include popular icons in your React projects easily <Bold>({searchNames.length} icons)</Bold>
        </Detail>
        <Form onSubmit={handleSubmit}>
          <SearchInput
            placeholder={`Search ${searchNames.length} icons...`}
            value={searchValue}
            onSearch={(val) => setSearchParams({ q: val })}
            onChange={changeHandle}
            onFocus={focusHandle}
          />
        </Form>
      </Header>
      <Content>
        <AsideWarpper>
          <Aside>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/icons/bi">Boxicons</NavLink>
            <NavLink to="/icons/bootstrap">Bootstrap Icons</NavLink>
            <NavLink to="/icons/bts">Bytesize Icons</NavLink>
            <NavLink to="/icons/devicons">Devicons</NavLink>
            <NavLink to="/icons/ccp">Credit Card & Payment</NavLink>
            <NavLink to="/icons/cg">CSS.gg Icons</NavLink>
            <NavLink to="/icons/ei">Evil Icons</NavLink>
            <NavLink to="/icons/ev">Eva Icons</NavLink>
            <NavLink to="/icons/fa">Font Awesome Icons</NavLink>
            <NavLink to="/icons/fc">Flat Color Icons</NavLink>
            <NavLink to="/icons/fd">Foundation Icons</NavLink>
            <NavLink to="/icons/fg">Flag Icons</NavLink>
            <NavLink to="/icons/fi">Feather Icons</NavLink>
            <NavLink to="/icons/go">Github Octicons Icons</NavLink>
            <NavLink to="/icons/gi">Game Icons</NavLink>
            <NavLink to="/icons/gr">Grommet Icons</NavLink>
            <NavLink to="/icons/hi">Heroicons</NavLink>
            <NavLink to="/icons/ii">Iconic Icons</NavLink>
            <NavLink to="/icons/io">Ionicons Icons</NavLink>
            <NavLink to="/icons/lg">Logos Icons</NavLink>
            <NavLink to="/icons/pk">IconPark Icons</NavLink>
            <NavLink to="/icons/md">Material Design Icons</NavLink>
            <NavLink to="/icons/mi">Maki Icons</NavLink>
            <NavLink to="/icons/mp">Map Icons</NavLink>
            <NavLink to="/icons/ri">RemixIcon Icons</NavLink>
            <NavLink to="/icons/scwi">Spectrum Workflow Icons</NavLink>
            <NavLink to="/icons/si">Simple Icons</NavLink>
            <NavLink to="/icons/supertinyicons">Super Tiny Icons</NavLink>
            <NavLink to="/icons/tb">Tabler Icons</NavLink>
            <NavLink to="/icons/ti">Typicons Icons</NavLink>
            <NavLink to="/icons/uiw">UIW Icons</NavLink>
            <NavLink to="/icons/vsc">Visual Studio Code Icons</NavLink>
            <NavLink to="/icons/wi">Weather Icons</NavLink>
          </Aside>
        </AsideWarpper>
        <main>
          <Outlet />
        </main>
      </Content>
    </Warpper>
  )
}