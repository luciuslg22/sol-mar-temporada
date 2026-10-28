import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Header from './componentes/Header'
import Acomodacoes from './componentes/Acomodacoes'
import DetalhesApartamento from './paginas/DetalhesApartamento'
import Sobre from './componentes/Sobre'
import Contato from './componentes/Contato'
import Footer from './componentes/Footer'
import Avaliacoes from './componentes/Avaliacoes'

import './style.css'

function ScrollParaSecao() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  useEffect(() => {
    let frame

    if (pathname !== '/') {
      window.scrollTo({
        top: 0,
        behavior: 'instant'
      })

      return
    }

    if (!hash) {
      window.scrollTo({
        top: 0,
        behavior: 'instant'
      })

      return
    }

    const id = decodeURIComponent(hash.substring(1))

    frame = requestAnimationFrame(() => {
      const elemento = document.getElementById(id)

      if (elemento) {
        elemento.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    })

    return () => {
      cancelAnimationFrame(frame)
    }
  }, [pathname, hash])

  return null
}

function Inicio() {
  return (
    <main>
      <section className="hero" id="inicio">
        <div className="hero-conteudo">
          <span className="hero-etiqueta">
            HOSPEDAGENS EXCLUSIVAS EM SANTOS
          </span>

          <h1>
            Seu refúgio perfeito
            <br />
            <em>à beira-mar.</em>
          </h1>

          <p>
            Descubra acomodações selecionadas para
            transformar seus dias no litoral em
            momentos inesquecíveis.
          </p>

          <div className="hero-botoes">
            <a href="#acomodacoes" className="btn-primary">
              Explorar acomodações
            </a>

            <a href="#sobre" className="btn-outline">
              Conheça a Sol & Mar
            </a>
          </div>
        </div>
      </section>

      <Acomodacoes />
      <Avaliacoes />
      <Sobre />
      <Contato />
      <Footer />
    </main>
  )
}

function App() {
  return (
    <>
      <ScrollParaSecao />

      <Header />

      <Routes>
        <Route path="/" element={<Inicio />} />

        <Route
          path="/apartamento/:id"
          element={<DetalhesApartamento />}
        />
      </Routes>
    </>
  )
}

export default App
