import { useState, useEffect } from 'react'
import Typography from './components/foundations/Typography'
import Colors from './components/foundations/Colors'
import Spacing from './components/foundations/Spacing'
import Layout from './components/foundations/Layout'
import Shadows from './components/foundations/Shadows'
import Icons from './components/foundations/Icons'
import ButtonShowcase from './components/atoms/ButtonShowcase'
import AlertShowcase from './components/atoms/AlertShowcase'
import InputShowcase from './components/atoms/InputShowcase'
import CheckboxShowcase from './components/atoms/CheckboxShowcase'
import BadgeShowcase from './components/atoms/BadgeShowcase'
import CardShowcase from './components/atoms/CardShowcase'
import InformativeCardShowcase from './components/atoms/InformativeCardShowcase'
import PaginationShowcase from './components/atoms/PaginationShowcase'
import SeparatorShowcase from './components/atoms/SeparatorShowcase'
import BrandLogoShowcase from './components/atoms/BrandLogoShowcase'
import InformativeCardsSectionShowcase from './components/molecules/InformativeCardsSectionShowcase'
import SearchByMakeShowcase from './components/molecules/SearchByMakeShowcase'
import SectionTitleShowcase from './components/molecules/SectionTitleShowcase'
import NavbarShowcase from './components/molecules/NavbarShowcase'
import HeroSectionShowcase from './components/molecules/HeroSectionShowcase'
import WelcomeTextSectionShowcase from './components/molecules/WelcomeTextSectionShowcase'
import SellBuySectionShowcase from './components/molecules/SellBuySectionShowcase'
import WhyChooseUsShowcase from './components/molecules/WhyChooseUsShowcase'
import FooterShowcase from './components/molecules/FooterShowcase'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import './styles/colors.css'

const PAGES = { Typography, Colors, Spacing, Layout, Shadows, Icons, Buttons: ButtonShowcase, Alerts: AlertShowcase, Inputs: InputShowcase, Checkboxes: CheckboxShowcase, Badges: BadgeShowcase, Cards: CardShowcase, 'Info Cards': InformativeCardShowcase, Pagination: PaginationShowcase, Separator: SeparatorShowcase, 'Brand Logos': BrandLogoShowcase, 'Informative Cards': InformativeCardsSectionShowcase, 'Search By Make': SearchByMakeShowcase, 'Section Title': SectionTitleShowcase, Navbar: NavbarShowcase, 'Hero Section': HeroSectionShowcase, 'Welcome Text': WelcomeTextSectionShowcase, 'Sell/Buy': SellBuySectionShowcase, 'Why Choose Us': WhyChooseUsShowcase, Footer: FooterShowcase }

const SECTION_MAP = {
  Typography: 'Foundations', Colors: 'Foundations', Spacing: 'Foundations',
  Layout: 'Foundations', Shadows: 'Foundations', Icons: 'Foundations',
  Buttons: 'Atoms', Alerts: 'Atoms', Inputs: 'Atoms',
  Checkboxes: 'Atoms', Badges: 'Atoms', Cards: 'Atoms', 'Info Cards': 'Atoms', Pagination: 'Atoms', Separator: 'Atoms', 'Brand Logos': 'Atoms',
  'Informative Cards': 'Molecules',
  'Search By Make': 'Molecules',
  'Section Title': 'Molecules',
  Navbar: 'Molecules',
  'Hero Section': 'Molecules',
  'Welcome Text': 'Molecules',
  'Sell/Buy': 'Molecules',
  'Why Choose Us': 'Molecules',
  Footer: 'Molecules',
}

function getInitialDark() {
  const saved = localStorage.getItem('wds-theme')
  if (saved === 'dark') return true
  if (saved === 'light') return false
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export default function App() {
  const [activePage, setActivePage] = useState('Typography')
  const [darkMode, setDarkMode] = useState(getInitialDark)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const Page = PAGES[activePage]

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    localStorage.setItem('wds-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg-primary)' }}>
      <TopBar
        darkMode={darkMode}
        onToggleDark={() => setDarkMode(d => !d)}
        onToggleSidebar={() => setSidebarOpen(o => !o)}
        section={SECTION_MAP[activePage]}
        page={activePage}
        onNavigate={setActivePage}
      />
      <div style={{ display: 'flex', paddingTop: 56 }}>
        {sidebarOpen && <Sidebar activePage={activePage} onNavigate={setActivePage} />}
        <main style={{ flex: 1, overflowY: 'auto', height: 'calc(100vh - 56px)' }}>
          <Page />
        </main>
      </div>
    </div>
  )
}
