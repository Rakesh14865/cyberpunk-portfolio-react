import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Section = styled.section`
  padding: 80px 20px;
`
const Wrap = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
`
const H2 = styled.h2`
  font-size: 28px;
  color: var(--cyan);
  text-shadow: 0 0 10px var(--cyan);
`
const P = styled.p`
  line-height: 1.7;
  color: var(--text);
`

export default function About({ bio }) {
  return (
    <Section id="about">
      <Wrap as={motion.div} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <H2>About Me</H2>
        <P>{bio}</P>
      </Wrap>
    </Section>
  )
}