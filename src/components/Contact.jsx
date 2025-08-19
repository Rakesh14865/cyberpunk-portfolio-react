import React, { useState } from 'react'
import styled from 'styled-components'

const Section = styled.section`
  padding: 80px 20px;
  border-top: 1px solid var(--deep-purple);
  border-bottom: 1px solid var(--deep-purple);
`
const Wrap = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
`
const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`
const Input = styled.input`
  width: 100%;
  background: transparent;
  border: 1px solid var(--cyan);
  border-radius: 10px;
  padding: 12px;
  color: var(--text);
  outline: none;
`
const TextArea = styled.textarea`
  width: 100%;
  background: transparent;
  border: 1px solid var(--cyan);
  border-radius: 10px;
  padding: 12px;
  min-height: 120px;
  color: var(--text);
  outline: none;
`
const Btn = styled.button`
  padding: 12px 16px;
  border-radius: 10px;
  border: 1px solid var(--neon-green);
  box-shadow: 0 0 12px var(--neon-green);
  background: transparent;
  color: var(--text);
  width: max-content;
`

export default function Contact({ email, phone, location }){
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [ok, setOk] = useState('')
  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const validateEmail = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
  const onSubmit = e => {
    e.preventDefault()
    if (!form.name.trim()) return setOk('Enter name')
    if (!validateEmail(form.email)) return setOk('Enter valid email')
    if (form.message.trim().length < 10) return setOk('Message too short')
    setOk('Thanks, your message is noted.')
  }
  return (
    <Section id="contact">
      <Wrap>
        <h2>Contact Me</h2>
        <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
        <p>Phone: <a href={`tel:${phone}`}>{phone}</a></p>
        <p>Location: {location}</p>
        <form onSubmit={onSubmit}>
          <Row>
            <Input placeholder="Name" name="name" value={form.name} onChange={onChange} />
            <Input placeholder="Email" name="email" value={form.email} onChange={onChange} />
          </Row>
          <TextArea placeholder="Message" name="message" value={form.message} onChange={onChange} />
          <div style={{ marginTop: 12 }}>
            <Btn type="submit">Send</Btn>
          </div>
          {ok && <p style={{ marginTop: 10 }}>{ok}</p>}
        </form>
      </Wrap>
    </Section>
  )
}