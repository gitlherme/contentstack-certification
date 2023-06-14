import Link from "next/link"
import { HeaderWrapper, NavItem, Navbar } from "./styles"

export const Header = () => {
  return (
    <HeaderWrapper>
      <Navbar>
        <NavItem>
          <Link href="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link href="/projects">Projects</Link>
        </NavItem>
        <NavItem>
          <Link href="/resume">Resume</Link>
        </NavItem>
        <NavItem>
          <Link href="/posts">Blog</Link>
        </NavItem>
      </Navbar>
    </HeaderWrapper>
  )
}