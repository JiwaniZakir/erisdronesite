import '../framer/styles.css'
import Logo from '../framer/logo'
import Menu from '../framer/menu'
import HeroTitle from '../framer/hero-title'
import MainFooter from '../framer/main-footer'

function App() {
  return (
    <div className='flex flex-col items-center gap-3 '>
      <header style={{ width: '100%', padding: '20px', borderBottom: '1px solid #eee' }}>
        <Logo />
        <Menu />
      </header>
      <main style={{ padding: '20px' }}>
        <HeroTitle />
        {/* Add other Framer components here as needed */}
      </main>
      <footer style={{ width: '100%', padding: '20px', borderTop: '1px solid #eee', marginTop: 'auto' }}>
        <MainFooter />
      </footer>
    </div>
  );
}

export default App
