import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { info } from '../data';

const Warpper = styled.div`
  a {
    display: inline-block;
    padding: 0.2rem 0.3rem;
    margin: 0 0.6rem 0.6rem 0;
    font-size: .85rem;
    border-radius: 0.2rem;
    color: var(--color-fg-muted);
    background-color: var(--color-neutral-muted);
    text-decoration: none;
    transition: all .3s;
    &:hover {
      background-color: var(--color-accent-fg);
      color: var(--color-canvas-default);
    }
  }
`;

const Count = styled.span`
  font-size: .45rem;
`;

export function KeywordsPage() {
  return (
    <Warpper>
      {Object.keys(info).map((keyname, key) => {
        return (
          <NavLink key={key} to={`/icons/${keyname}`}>
            {info[keyname].title} <Count>({Object.keys(info[keyname].names).length})</Count>
          </NavLink>
        );
      })}
    </Warpper>
  )
}