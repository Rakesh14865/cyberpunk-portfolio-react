import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Section = styled.section`
  padding: 80px 20px;
  border-top: 1px solid var(--deep-purple);
`
const Wrap = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  gap: 18px;
`
const Item = styled(motion.div)`
  border-left: 3px solid var(--neon-pink);
  padding-left: 12px;
`

export default function Timeline({ title, items }){
  return (
    <Section>
      <Wrap>
        <h2>{title}</h2>
        <div>
          {items.map((it, i) => (
            <Item key={i} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3>{it.role}</h3>
              <p>{it.org}</p>
              <p>{it.duration}</p>
              {it.points && <ul>{it.points.map((pt, idx)=>(<li key={idx}>{pt}</li>))}</ul>}
            </Item>
          ))}
        </div>
      </Wrap>
    </Section>
  )
}