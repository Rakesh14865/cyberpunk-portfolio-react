import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Section = styled.section`
  padding: 80px 20px;
`
const Wrap = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  gap: 16px;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 18px;
`
const Card = styled(motion.div)`
  border: 1px solid var(--electric-blue);
  border-radius: 16px;
  background: radial-gradient(900px 150px at 0% 0%, rgba(0,170,255,0.08), transparent 70%);
  padding: 16px;
  perspective: 1000px;
`
const Img = styled.div`
  height: 150px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(255,0,255,0.25), rgba(0,170,255,0.25));
  margin-bottom: 12px;
`
const Title = styled.h3`
  font-size: 18px;
  color: var(--electric-blue);
`
const Tech = styled.div`
  font-size: 12px;
  color: var(--muted);
  margin-top: 6px;
`
const Buttons = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;
`
const Btn = styled.a`
  padding: 8px 12px;
  border: 1px solid var(--neon-green);
  border-radius: 10px;
  box-shadow: 0 0 10px var(--neon-green);
`

export default function Projects({ projects }) {
  return (
    <Section id="projects">
      <Wrap>
        <h2>Projects</h2>
        <Grid>
          {projects.map((p, i) => (
            <Card key={i} whileHover={{ rotateY: 6, translateZ: 20 }}>
              <Img />
              <Title>{p.title}</Title>
              <p>{p.description}</p>
              <Tech>{p.tech.join(' • ')}</Tech>
              <Buttons>
                {p.live && <Btn href={p.live} target="_blank" rel="noreferrer">Live Demo</Btn>}
                {p.github && <Btn href={p.github} target="_blank" rel="noreferrer">GitHub</Btn>}
              </Buttons>
            </Card>
          ))}
        </Grid>
      </Wrap>
    </Section>
  )
}