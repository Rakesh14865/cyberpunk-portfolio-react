import React from 'react'
import styled from 'styled-components'

const Foot = styled.footer`
  padding: 22px 20px;
  text-align: center;
  border-top: 1px solid var(--deep-purple);
  box-shadow: 0 -8px 20px rgba(106,0,255,0.2);
`

export default function Footer(){
  return (
    <Foot>
      <small>© {new Date().getFullYear()} Rakesh Kumar. All rights reserved.</small>
    </Foot>
  )
}