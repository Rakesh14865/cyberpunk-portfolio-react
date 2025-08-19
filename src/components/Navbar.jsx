import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Wrap = styled.nav`
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(8px);
  background: rgba(15,15,15,0.7);
  border-bottom: 1px solid var(--deep-purple);
  box-shadow: 0 0 20px rgba(106,0,255,0.4);
`
const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 14px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Brand = styled.div`
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--neon-pink);
`
const NavLinks = styled.div`
  display: none;
  gap: 18px;
`
const Icons = styled.div`
  display: flex;
  gap: 14px;
  a { filter: drop-shadow(0 0 6px var(--electric-blue)); }
`
const Btn = styled.button`
  font-family: inherit;
  border: 1px solid var(--cyan);
  background: transparent;
  color: var(--text);
  padding: 8px 12px;
  border-radius: 8px;
  box-shadow: 0 0 12px var(--cyan);
`
const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`
const Menu = styled.div`
  display: flex;
  gap: 16px;
`
export default function Navbar({ links, socials, onToggleTheme, isDark }) {
  return (
    <Wrap>
      <Inner>
        <Row>
          <Brand>Rakesh</Brand>
          <Menu>
            {links.map(l => (
              <Link key={l.to} activeClass="active" to={l.to} spy={true} smooth={true} offset={-70} duration={500}>
                {l.label}
              </Link>
            ))}
          </Menu>
        </Row>
        <Row>
          <Icons>
            <a href={socials.github} target="_blank" rel="noreferrer"><FaGithub size={20} /></a>
            <a href={socials.linkedin} target="_blank" rel="noreferrer"><FaLinkedin size={20} /></a>
            <a href={socials.twitter} target="_blank" rel="noreferrer"><FaTwitter size={20} /></a>
          </Icons>
          <Btn onClick={onToggleTheme}>{isDark ? 'Light' : 'Dark'}</Btn>
        </Row>
      </Inner>
    </Wrap>
  )
}