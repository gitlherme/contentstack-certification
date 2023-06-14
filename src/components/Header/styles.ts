import styled from "styled-components";
import { theme } from '@/theme'

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${theme.colors.background};
  padding: 1.5rem 0;
`
export const Navbar = styled.ul`
  display: flex;
  list-style: none;
  gap: 1rem;
`
export const NavItem = styled.li`
  a {
    text-decoration: none;
    color: ${theme.colors.error};
    font-family: ${theme.fonts.primary};
    font-size: 1.2rem;
  }
`