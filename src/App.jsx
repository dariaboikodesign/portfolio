import { useEffect, useRef, useState } from 'react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'

const folders = [
  { id: 'about', tab: 'GENERAL', number: '00', tone: '#e7e5dc' },
  { id: 'case-01', tab: 'CASE 01', number: '01', tone: '#d8ff54' },
  { id: 'case-02', tab: 'CASE 02', number: '02', tone: '#ff7358' },
  { id: 'case-03', tab: 'CASE 03', number: '03', tone: '#a88dff' },
  { id: 'case-04', tab: 'CASE 04', number: '04', tone: '#ffd34e' },
]

function getInitialFolder() {
  const value = new URLSearchParams(window.location.search).get('folder')
  return folders.some(({ id }) => id === value) ? value : 'about'
}

function PaperMark({ variant = 1 }) {
  return (
    <div className={`paper-mark paper-mark--${variant}`} aria-hidden="true">
      <i />
      <i />
      <i />
    </div>
  )
}

function AboutPage({ onOpenCase }) {
  return (
    <div className="folder-scroll">
      <section className="about-hero page">
        <p className="eyebrow">PORTFOLIO / SELECTED WORK</p>
        <h1>DARIA<br />BOIKO</h1>
        <div className="about-hero__footer">
          <p>Designer</p>
          <ArrowDown size={22} strokeWidth={1.4} />
          <p>Scroll to browse</p>
        </div>
      </section>

      <section className="about-index page page--dark">
        <p className="eyebrow">PROJECT INDEX</p>
        <div className="index-list">
          {folders.slice(1).map((folder) => (
            <button key={folder.id} onClick={() => onOpenCase(folder.id)}>
              <span>{folder.number}</span>
              <strong>{folder.tab}</strong>
              <ArrowUpRight size={25} strokeWidth={1.2} />
            </button>
          ))}
        </div>
      </section>
    </div>
  )
}

function CasePage({ folder }) {
  return (
    <div className="folder-scroll">
      <section className="case-cover page" style={{ '--accent': folder.tone }}>
        <div className="case-cover__meta">
          <p className="eyebrow">SELECTED PROJECT</p>
          <p>{folder.number} / 04</p>
        </div>
        <h2>CASE<br />STUDY <em>{folder.number}</em></h2>
        <PaperMark variant={Number(folder.number)} />
        <div className="case-cover__bottom">
          <span>OPEN FOLDER</span>
          <ArrowDown size={24} strokeWidth={1.25} />
        </div>
      </section>

      <section className="case-sheet page">
        <div className="sheet-number">{folder.number}</div>
        <div className="sheet-grid">
          <div>
            <p className="eyebrow">CASE STUDY</p>
            <h3>{folder.tab}</h3>
          </div>
          <p className="case-note">
            Project details and visual material are presented as a sequence of
            editorial sheets inside this folder.
          </p>
        </div>
        <PaperMark variant={(Number(folder.number) % 4) + 1} />
      </section>

      <section className="case-sheet case-sheet--split page">
        <div className="paper-card">
          <p className="eyebrow">DOCUMENT / {folder.number}</p>
          <span>{folder.number}</span>
        </div>
        <div className="paper-card paper-card--accent" style={{ background: folder.tone }}>
          <p>SELECTED WORK</p>
          <ArrowUpRight size={42} strokeWidth={1} />
        </div>
      </section>

      <section className="case-end page page--dark">
        <p className="eyebrow">END OF FOLDER</p>
        <h3>{folder.tab}</h3>
        <p>Use the tabs above to open another case.</p>
      </section>
    </div>
  )
}

export default function App() {
  const [activeId, setActiveId] = useState(getInitialFolder)
  const [order, setOrder] = useState(folders.map(({ id }) => id))
  const [switching, setSwitching] = useState(false)
  const scrollRefs = useRef({})

  const activate = (id, updateHistory = true) => {
    if (id === activeId || switching) return
    setSwitching(true)
    window.setTimeout(() => {
      setActiveId(id)
      setOrder((current) => [...current.filter((item) => item !== id), id])
      scrollRefs.current[id]?.scrollTo({ top: 0 })
      if (updateHistory) {
        const url = new URL(window.location.href)
        id === 'about'
          ? url.searchParams.delete('folder')
          : url.searchParams.set('folder', id)
        window.history.pushState({ folder: id }, '', url)
      }
      window.setTimeout(() => setSwitching(false), 500)
    }, 180)
  }

  useEffect(() => {
    const onPopState = () => activate(getInitialFolder(), false)
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  })

  useEffect(() => {
    const onKeyDown = (event) => {
      if (!/^[0-4]$/.test(event.key)) return
      activate(folders[Number(event.key)].id)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  })

  const activeFolder = folders.find(({ id }) => id === activeId)

  return (
    <main className="portfolio-shell">
      <header className="topbar">
        <button className="wordmark" onClick={() => activate('about')}>
          DARIA BOIKO
        </button>
        <p>DESIGN PORTFOLIO</p>
        <p className="topbar__hint">PRESS 1—4 TO OPEN</p>
      </header>

      <nav className="folder-tabs" aria-label="Portfolio folders">
        {folders.slice(1).map((folder, index) => (
          <button
            key={folder.id}
            onClick={() => activate(folder.id)}
            className={activeId === folder.id ? 'is-active' : ''}
            style={{ '--tab-color': folder.tone, '--tab-index': index }}
            aria-current={activeId === folder.id ? 'page' : undefined}
          >
            <span>{folder.tab}</span>
            <small>{folder.number}</small>
          </button>
        ))}
      </nav>

      <div className={`folder-stage ${switching ? 'is-switching' : ''}`}>
        {order.map((id, position) => {
          const folder = folders.find((item) => item.id === id)
          const isActive = id === activeId
          return (
            <article
              key={id}
              className={`folder ${isActive ? 'is-active' : ''}`}
              style={{
                '--folder-tone': folder.tone,
                '--stack-position': order.length - position - 1,
              }}
              aria-hidden={!isActive}
            >
              <div
                className="folder-content"
                ref={(element) => { scrollRefs.current[id] = element }}
              >
                {id === 'about'
                  ? <AboutPage onOpenCase={activate} />
                  : <CasePage folder={folder} />}
              </div>
            </article>
          )
        })}
      </div>

      <div className="active-stamp" aria-hidden="true">
        <span>{activeFolder.tab}</span>
        <b>{activeFolder.number}</b>
      </div>
    </main>
  )
}
