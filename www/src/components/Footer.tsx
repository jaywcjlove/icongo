import styled from "styled-components";
import { NavLink } from 'react-router-dom';


const Warpper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 3rem;
  margin-bottom: 4.5rem;
`;

export function Footer() {
  return (
    <Warpper>
      <NavLink to="/docs"> Docs </NavLink>
      <NavLink to="/icons/bi"> Icons List </NavLink>
      <NavLink to="/keywords"> Keywords </NavLink>
      <a href="https://github.com/jaywcjlove/icongo" target="__blank"> Github </a>
      <a href="https://github.com/icongo/icon-collection" target="__blank"> Icon Collection </a>
    </Warpper>
  )
}