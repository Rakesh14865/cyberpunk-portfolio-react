import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'

const glitch = keyframes`
  0% { clip-path: inset(0 0 0 0); }
  20% { clip-path: inset(0 0 0 0); }
  21% { clip-path: inset(10% 0 15% 0); transform: translateX(2px); }
  22% { clip-path: inset(0 0 0 0); transform: translateX(0); }
  50% { clip-path: inset(0 0 0 0); }
  51% { clip-path: inset(5% 0 10% 0); transform: translateX(-2px); }
  52% { clip-path: inset(0 0 0 0); transform: translateX(0); }
`

const Section = styled.section`
  min-height: 92vh;
  display: grid;
  place-items: center;
  padding: 80px 20px 40px;
  position: relative;
`
const Frame = styled.div`
  position: absolute;
  inset: 18px;
  border: 2px solid var(--deep-purple);
  filter: drop-shadow(0 0 12px var(--deep-purple));
  pointer-events: none;
`
const Container = styled.div`
  max-width: 1100px;
  width: 100%;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 28px;
  align-items: center;
`
const Title = styled.h1`
  font-size: clamp(32px, 4.5vw, 64px);
  line-height: 1.05;
  color: var(--neon-pink);
  text-shadow: 0 0 18px rgba(255,0,255,0.6);
  animation: ${glitch} 4s infinite;
`
const Tag = styled.p`
  font-size: clamp(16px, 2.2vw, 22px);
  color: var(--muted);
  margin-top: 10px;
`
const Buttons = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 22px;
`
const Btn = styled.a`
  padding: 12px 16px;
  border-radius: 10px;
  border: 1px solid var(--cyan);
  box-shadow: 0 0 12px var(--cyan);
  background: transparent;
  color: var(--text);
  transform: translateZ(0);
  transition: transform 0.25s ease;
  will-change: transform;
`
const Card = styled(motion.div)`
  border: 1px solid var(--electric-blue);
  border-radius: 16px;
  padding: 18px;
  background: radial-gradient(1200px 200px at 0% 0%, rgba(0,170,255,0.08), transparent 60%);
  box-shadow: 0 0 22px rgba(0,170,255,0.3);
`
const Avatar = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 16px;
  border: 2px solid var(--neon-green);
  box-shadow: 0 0 18px var(--neon-green);
  background: conic-gradient(from 90deg, rgba(57,255,20,0.1), transparent);
  display: grid;
  place-items: center;
  font-family: 'VT323', monospace;
  font-size: 48px;
`

export default function Hero({ name, title, tagline, resumeUrl }) {
  const [hover, setHover] = useState(false)
  return (
    <Section id="hero" className="scanlines">
      <Frame />
      <Container>
        <div>
          <Title>{name}</Title>
          <Tag>{title}</Tag>
          <Tag>{tagline}</Tag>
          <Buttons>
            <Btn href={resumeUrl} target="_blank" rel="noreferrer">Download Résumé</Btn>
            <Btn href="#contact">Hire Me</Btn>
          </Buttons>
        </div>
        <Card whileHover={{ rotateX: 6, rotateY: -6 }} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
          <Avatar>{name.split(' ').map(x=>x[0]).join('')}</Avatar>
        </Card>
      </Container>
    </Section>
  )
}