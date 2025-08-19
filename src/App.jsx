import React, { useEffect, useMemo, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './globalStyles'
import { colours } from './theme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Loader from './components/Loader'
import data from './data/resumeData'

const Main = styled.main`
  display: grid;
  gap: 0;
`

export default function App(){
  const [loading, setLoading] = useState(true)
  const [dark, setDark] = useState(true)
  useEffect(()=>{
    const t = setTimeout(()=>setLoading(false), 900)
    return ()=>clearTimeout(t)
  },[])
  const links = [
    { label: 'About', to: 'about' },
    { label: 'Skills', to: 'skills' },
    { label: 'Projects', to: 'projects' },
    { label: 'Education', to: 'education' },
    { label: 'Contact', to: 'contact' }
  ]
  return (
    <ThemeProvider theme={{ dark }}>
      <GlobalStyles />
      {loading && <Loader />}
      <Navbar links={links} socials={data.socials} onToggleTheme={()=>setDark(v=>!v)} isDark={dark} />
      <Main>
        <Hero name={data.name} title={data.title} tagline={data.tagline} resumeUrl={data.resumeUrl} />
        <About bio={data.bio} />
        <Skills skills={data.skills} />
        <section id="projects"><Projects projects={data.projects} /></section>
        {/* <section id="experience"><Timeline title="Experience" items={data.experience} /></section> */}
        <section id="education"><Timeline title="Education" items={data.education} /></section>
        <Contact email={data.contact.email} phone={data.contact.phone} location={data.contact.location} />
      </Main>
      <Footer />
    </ThemeProvider>
  )
}