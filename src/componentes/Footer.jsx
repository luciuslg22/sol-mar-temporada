import { Link, useLocation, useNavigate } from 'react-router-dom'

const anoAtual = new Date().getFullYear()

const links = [
  { nome: 'Início', destino: '/#inicio' },
  { nome: 'Acomodações', destino: '/#acomodacoes' },
  { nome: 'Avaliações', destino: '/#avaliacoes' },
  { nome: 'Sobre Nós', destino: '/#sobre' },
  { nome: 'Contato', destino: '/#contato' }
]

function Footer() {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const navegarPara = (evento, destino) => {
    evento.preventDefault()

    if (pathname !== '/') {
      navigate(destino)
      return
    }

    const id = destino.split('#')[1]
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

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-marca">
          <Link
            to="/#inicio"
            className="footer-logo"
            onClick={(evento) => navegarPara(evento, '/#inicio')}
          >
            SOL <span>&</span> MAR
            <small>TEMPORADA</small>
          </Link>

          <p>
            Acomodações para aproveitar o melhor
            do litoral de Santos com conforto
            e tranquilidade.
          </p>
        </div>

        <nav className="footer-links" aria-label="Navegação do rodapé">
          <h3>Navegação</h3>

          {links.map((link) => (
            <Link
              key={link.destino}
              to={link.destino}
              onClick={(evento) => navegarPara(evento, link.destino)}
            >
              {link.nome}
            </Link>
          ))}
        </nav>

        <div className="footer-localizacao">
          <h3>Localização</h3>
          <p>Santos, São Paulo</p>
          <p>Brasil</p>
        </div>

      </div>

      <div className="footer-bottom">
        <span>
          © {anoAtual} Sol & Mar Temporada -
          Todos os direitos reservados.
        </span>

        <div className="footer-dev">
          <span>💻 Dev Responsável: </span>

          <a
            href="https://www.instagram.com/luciuslg22"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-dev-link"
            aria-label="Instagram do desenvolvedor Lúcius L. Gomes"
          >
            Lúcius L. Gomes
          </a>
        </div>

        <span>
          ✨ Feito com dedicação para sua próxima viagem.
        </span>
      </div>
    </footer>
  )
}

export default Footer