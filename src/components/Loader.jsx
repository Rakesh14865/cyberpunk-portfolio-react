import React from 'react'
import styled, { keyframes } from 'styled-components'

const flow = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(200%); }
`
const Bar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 4px;
  width: 100%;
  background: linear-gradient(90deg, var(--neon-pink), var(--electric-blue), var(--neon-green));
  overflow: hidden;
  z-index: 9999;
`
const Glow = styled.div`
  width: 30%;
  height: 100%;
  background: rgba(255,255,255,0.5);
  filter: blur(8px);
  animation: ${flow} 1.4s linear infinite;
`

export default function Loader(){ 
  return (
    <Bar>
      <Glow />
    </Bar>
  )
}