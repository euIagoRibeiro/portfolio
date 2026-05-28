import { Header, Footer} from './components';
import { Hero, About, Stack, Projects, Contact } from './components/sections';

function App() {

  return (
    <div className='bg-ink min-h-screen text-slate-200'>
      <Header />
      <main className='pt-24'>
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Contact />
      </main>  
      <Footer />
    </div>
  )
}

export default App
