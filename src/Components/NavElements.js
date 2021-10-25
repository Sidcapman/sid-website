import { FaBars } from 'react-icons/fa'
import { NavLink as Link } from 'react-router-dom'
import styled from 'styled-components'

export const Nav = styled.nav`
  background: hsl(205, 78%, 60%);
  height: 3.5rem;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.5rem;
  z-index: 2;
`
export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 2rem;
  cursor: pointer;
  justify-content: space-around;
  font-size: 1.2rem;

  &.active {
    color: hsl(205, 86%, 17%);
  }
`
export const Bars = styled(FaBars)`
  display: none;
  color: white;

  @media screen and (max-width: 780px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    margin: 25px;
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
