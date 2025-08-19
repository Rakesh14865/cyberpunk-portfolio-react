import { createGlobalStyle } from 'styled-components'
import { colours } from './theme'

export const GlobalStyles = createGlobalStyle`
  :root {
    --bg: ${colours.bg};
    --bg-alt: ${colours.bgAlt};
    --text: ${colours.text};
    --muted: ${colours.muted};
    --neon-pink: ${colours.neonPink};
    --cyan: ${colours.cyan};
    --electric-blue: ${colours.electricBlue};
    --neon-green: ${colours.neonGreen};
    --deep-purple: ${colours.deepPurple};
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body, #root { height: 100%; }
  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'Orbitron', 'VT323', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
    overflow-x: hidden;
  }
  a { color: inherit; text-decoration: none; }
  .scanlines::before {
    content: "";
    pointer-events: none;
    position: fixed;
    inset: 0;
    background: repeating-linear-gradient(to bottom, rgba(255,255,255,0.03), rgba(255,255,255,0.03) 1px, transparent 1px, transparent 3px);
    mix-blend-mode: overlay;
    z-index: 2;
  }
`