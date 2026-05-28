
import { useState } from 'react'

function NavItens({ categoria, link }: { categoria: string, link: string }) {
  return (
    <a
      href={link} className='font-mono text-sm uppercase tracking-wider text-slate-400 hover:text-slate-200 transition-colors duration-300'>
      {categoria}
    </a>
  )
}

function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const itens = [
    { categoria: 'Sobre', link: '#sobre' },
    { categoria: 'Stack', link: '#stack' },
    { categoria: 'Projetos', link: '#projetos' },
    { categoria: 'Contato', link: '#contato' },
  ]

  return (
    <>
      <header className='flex items-center justify-between py-6 px-8 text-white fixed w-full z-10 backdrop-blur-md border-b border-ink-line'>

        <a href="#top" className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-accent animate-blink"></span>
          <span className="font-mono text-base text-slate-300">euIagoRibeiro</span>
        </a>

        <nav className="hidden sm:flex">
          <ul className='flex gap-6'>
            {itens.map((item) => (
              <li key={item.categoria}>
                <NavItens
                  categoria={item.categoria}
                  link={item.link}
                />
              </li>
            ))}
          </ul>
        </nav>


        <div className="flex items-center justify-between gap-5">

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="sm:hidden w-9 h-9 grid place-items-center rounded-full border border-ink-line hover:border-accent transition">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className="w-4 h-4">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <button className="w-9 h-9 grid place-items-center rounded-full border border-ink-line hover:border-accent transition">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className="w-4 h-4">
              <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
            </svg>
          </button>

        </div>


      </header>

      <div className={`sm:hidden fixed top-[73px] left-0 w-full bg-ink border-b border-ink-line px-8 py-6 flex flex-col gap-4 ${isMenuOpen ? 'flex' : 'hidden'}`}>
        {itens.map((item) => (
          <NavItens key={item.categoria} categoria={item.categoria} link={item.link} />
        ))}
      </div>
    </>
  )
}

export default Header