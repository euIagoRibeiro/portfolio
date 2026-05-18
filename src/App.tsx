import { Header, Footer} from './components';
import { Hero, About, Stack, Projects, Contact } from './components/sections';

function App() {

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Contact />
      </main>  
      <Footer />
    </>
  )
}

export default App
