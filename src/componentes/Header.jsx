import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Header() {
  const [menuAberto, setMenuAberto] = useState(false)
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const navegarPara = (evento, destino) => {
    evento.preventDefault()
    setMenuAberto(false)

    const id = destino.split('#')[1]

    if (pathname !== '/') {
      navigate(destino)
      return
    }

    const elemento = document.getElementById(id)

    if (!elemento) return

    elemento.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })

    window.history.replaceState(
      window.history.state,
      '',
      destino
    )
  }

  const links = [
    { nome: 'Início', destino: '/#inicio' },
    { nome: 'Acomodações', destino: '/#acomodacoes' },
    { nome: 'Avaliações', destino: '/#avaliacoes' },
    { nome: 'Sobre Nós', destino: '/#sobre' },
    { nome: 'Contato', destino: '/#contato' }
  ]

  return (
    <header className="header">
      <Link
        to="/#inicio"
        className="logo"
        onClick={(evento) => navegarPara(evento, '/#inicio')}
      >
        SOL <span>&</span> MAR
        <small>TEMPORADA</small>
      </Link>

      <nav className={`menu ${menuAberto ? 'menu-aberto' : ''}`}>
        {links.map((link) => (
          <Link
            key={link.nome}
            to={link.destino}
            onClick={(evento) => navegarPara(evento, link.destino)}
          >
            {link.nome}
          </Link>
        ))}
      </nav>

      <Link
        to="/#acomodacoes"
        className="btn-header"
        onClick={(evento) => navegarPara(evento, '/#acomodacoes')}
      >
        Ver acomodações
      </Link>

      <button
        type="button"
        className="menu-toggle"
        aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={menuAberto}
        onClick={() => setMenuAberto((aberto) => !aberto)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  )
}

export default Header
