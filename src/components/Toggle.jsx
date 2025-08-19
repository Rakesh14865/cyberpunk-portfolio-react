import React from 'react'
import styled from 'styled-components'

const Switch = styled.button`
  position: relative;
  width: 64px;
  height: 32px;
  border: 2px solid var(--electric-blue);
  border-radius: 999px;
  background: var(--bg-alt);
  box-shadow: 0 0 12px var(--electric-blue), inset 0 0 12px rgba(0,170,255,0.4);
  cursor: pointer;
  transition: transform 0.2s ease;
  display: inline-flex;
  align-items: center;
  padding: 2px;
`
const Knob = styled.span`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: var(--neon-green);
  box-shadow: 0 0 10px var(--neon-green);
  transform: translateX(${props => props.active ? '32px' : '0'});
  transition: transform 0.25s ease;
`

export default function Toggle({ active, onToggle }) {
  return (
    <Switch onClick={onToggle} aria-label="Toggle dark mode">
      <Knob active={active} />
    </Switch>
  )
}