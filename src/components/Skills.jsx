import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Section = styled.section`
  padding: 80px 20px;
  background: linear-gradient(180deg, rgba(106,0,255,0.08), transparent 60%);
  border-top: 1px solid var(--deep-purple);
  border-bottom: 1px solid var(--deep-purple);
`
const Wrap = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 16px;
  margin-top: 14px;
`
const Box = styled(motion.div)`
  border: 1px solid var(--neon-pink);
  border-radius: 12px;
  padding: 14px;
  text-align: center;
  box-shadow: 0 0 12px rgba(255,0,255,0.4);
  transition: transform 0.2s ease;
`

export default function Skills({ skills }) {
  return (
    <Section id="skills">
      <Wrap>
        <h2>Skills</h2>
        <Grid>
          {skills.map((s, i) => (
            <Box key={i} whileHover={{ scale: 1.04, rotate: 0.5 }}>{s}</Box>
          ))}
        </Grid>
      </Wrap>
    </Section>
  )
}