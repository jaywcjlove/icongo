import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { info } from '../data';

const SubLabel = styled.div`
  font-size: 12px;
  padding-top: 2px;
  color: var(--color-fg-subtle);
`;

const Aside = styled.aside`
  position: sticky;
  top: 0px;
  overflow: auto;
  max-height: calc(100vh - 10px);
  padding: 0.6rem;
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
    line-height: 16px;
    &.active, &.active:hover {
      background-color: var(--color-accent-fg);
    }
    &:hover {
      background-color: var(--color-border-muted);
    }
    &.active {
      color: var(--color-canvas-default);
      ${SubLabel} {
        color: var(--color-border-default);
      }
    }
  }
`;

const AsideWarpper = styled.div`
  grid-area: sidebar;
  background-color: var(--color-canvas-subtle);
`;

const Content = styled.div`
  display: grid;
  grid-template-areas: 'sidebar main';
  grid-template-columns: 220px minmax(0, 3.5fr);
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 600px) {
    display: block;
    ${AsideWarpper} {
      display: none;
    }
  }
`;

export function ListPage() {
  return (
    <Content>
      <AsideWarpper>
        <Aside>
          <NavLink to="/">Home</NavLink>
          {Object.keys(info).map((keyname, key) => {
            return (
              <NavLink key={key} to={`/icons/${keyname}`}>
                {info[keyname].title}
                <SubLabel>{Object.keys(info[keyname].names).length} icons</SubLabel>
              </NavLink>
            );
          })}
        </Aside>
      </AsideWarpper>
      <main>
        <Outlet />
      </main>
    </Content>
  )
}