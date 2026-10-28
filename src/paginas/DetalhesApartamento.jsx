import { useEffect, useRef, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import { apartamentos } from '../dados/apartamentos'
import Mapa from '../componentes/Mapa'

function DetalhesApartamento() {
  const { id } = useParams()

  const [fotoSelecionada, setFotoSelecionada] = useState(0)
  const [galeriaAberta, setGaleriaAberta] = useState(false)

  const botaoFecharRef = useRef(null)
  const botaoAmpliarRef = useRef(null)

  const apartamento = apartamentos.find(
    (item) => item.id === Number(id)
  )

  const fotos = apartamento?.galeria?.length
    ? apartamento.galeria
    : apartamento?.imagem
      ? [apartamento.imagem]
      : []

  const totalFotos = fotos.length

  const proximaFoto = () => {
    if (totalFotos < 2) return

    setFotoSelecionada((atual) =>
      (atual + 1) % totalFotos
    )
  }

  const fotoAnterior = () => {
    if (totalFotos < 2) return

    setFotoSelecionada((atual) =>
      (atual - 1 + totalFotos) % totalFotos
    )
  }

  useEffect(() => {
    if (!galeriaAberta) return

    const overflowAnterior = document.body.style.overflow
    const elementoAnterior = document.activeElement

    document.body.style.overflow = 'hidden'
    botaoFecharRef.current?.focus()

    const aoPressionarTecla = (evento) => {
      if (evento.key === 'Escape') {
        setGaleriaAberta(false)
      }

      if (evento.key === 'ArrowRight' && totalFotos > 1) {
        setFotoSelecionada((atual) =>
          (atual + 1) % totalFotos
        )
      }

      if (evento.key === 'ArrowLeft' && totalFotos > 1) {
        setFotoSelecionada((atual) =>
          (atual - 1 + totalFotos) % totalFotos
        )
      }

      if (evento.key === 'Tab') {
        const modal = document.querySelector('.galeria-modal')

        if (!modal) return

        const botoes = Array.from(
          modal.querySelectorAll('button:not(:disabled)')
        )

        if (botoes.length === 0) return

        const primeiro = botoes[0]
        const ultimo = botoes[botoes.length - 1]

        if (evento.shiftKey && document.activeElement === primeiro) {
          evento.preventDefault()
          ultimo.focus()
        } else if (
          !evento.shiftKey &&
          document.activeElement === ultimo
        ) {
          evento.preventDefault()
          primeiro.focus()
        }
      }
    }

    window.addEventListener('keydown', aoPressionarTecla)

    return () => {
      document.body.style.overflow = overflowAnterior
      window.removeEventListener('keydown', aoPressionarTecla)

      if (elementoAnterior instanceof HTMLElement) {
        elementoAnterior.focus()
      }
    }
  }, [galeriaAberta, totalFotos])

  if (!apartamento) {
    return (
      <main className="detalhes">
        <h1>Apartamento não encontrado</h1>

        <Link to="/#acomodacoes" className="voltar">
          ← Voltar para acomodações
        </Link>
      </main>
    )
  }

  return (
    <main className="detalhes">

      <Link
        to="/#acomodacoes"
        className="voltar"
      >
        ← Voltar para acomodações
      </Link>

      <div className="detalhes-cabecalho">
        <span className="secao-etiqueta">
          SOL & MAR TEMPORADA
        </span>

        <h1>{apartamento.nome}</h1>

        <p>📍 {apartamento.localizacao}</p>
      </div>

      <div className="galeria-principal">

        {totalFotos > 0 && (
          <button
            ref={botaoAmpliarRef}
            type="button"
            className="foto-principal"
            onClick={() => setGaleriaAberta(true)}
            aria-label={`Ampliar fotografia ${fotoSelecionada + 1} de ${totalFotos}`}
          >
            <img
              src={fotos[fotoSelecionada]}
              alt={`${apartamento.nome} - Fotografia ${fotoSelecionada + 1}`}
              decoding="async"
            />

            <span>Ampliar fotografia ↗</span>
          </button>
        )}

        {totalFotos > 1 && (
          <div className="galeria-miniaturas">
            {fotos.map((foto, index) => (
              <button
                type="button"
                key={`${foto}-${index}`}
                className={
                  fotoSelecionada === index
                    ? 'miniatura ativa'
                    : 'miniatura'
                }
                onClick={() => setFotoSelecionada(index)}
                aria-label={`Visualizar fotografia ${index + 1}`}
                aria-pressed={fotoSelecionada === index}
              >
                <img
                  src={foto}
                  alt={`${apartamento.nome} - Foto ${index + 1}`}
                  loading="lazy"
                  decoding="async"
                />
              </button>
            ))}
          </div>
        )}

        {totalFotos > 1 && (
          <div className="galeria-controles">

            <button
              type="button"
              onClick={fotoAnterior}
              aria-label="Fotografia anterior"
            >
              ← Anterior
            </button>

            <span aria-live="polite">
              {fotoSelecionada + 1} de {totalFotos}
            </span>

            <button
              type="button"
              onClick={proximaFoto}
              aria-label="Próxima fotografia"
            >
              Próxima →
            </button>

          </div>
        )}

      </div>

      <section className="detalhes-informacoes">

        <h2>Sobre esta acomodação</h2>

        <p>{apartamento.descricao}</p>

        <h2>O que este lugar oferece</h2>

        <div className="comodidades-grid">
          {(apartamento.comodidades || []).map((item) => (
            <div className="comodidade" key={item}>
              <span aria-hidden="true">✓</span>
              {item}
            </div>
          ))}
        </div>

      </section>

      <Mapa endereco={apartamento.endereco} />

      <section className="reserva-secao">

        <div className="reserva-card">

          <span className="reserva-etiqueta">
            SUA PRÓXIMA VIAGEM COMEÇA AQUI
          </span>

          <h2>Gostou deste apartamento?</h2>

          <p>
            Consulte os preços, datas disponíveis e
            condições da hospedagem diretamente no Airbnb.
            Faça sua reserva pela plataforma oficial.
          </p>

          {apartamento.airbnb ? (
            <a
              href={apartamento.airbnb}
              target="_blank"
              rel="noopener noreferrer"
              className="reserva-botao"
              aria-label={`Reservar ${apartamento.nome} pelo Airbnb`}
            >
              Reservar pelo Airbnb ↗
            </a>
          ) : (
            <span className="reserva-indisponivel">
              Link de reserva em preparação
            </span>
          )}

          {apartamento.airbnb && (
            <div className="reserva-seguranca">
              ✓ Reserva realizada pelo Airbnb
            </div>
          )}

        </div>

      </section>

      {galeriaAberta && totalFotos > 0 && (
        <div
          className="galeria-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Galeria de fotografias"
        >

          <button
            ref={botaoFecharRef}
            type="button"
            className="fechar-galeria"
            onClick={() => setGaleriaAberta(false)}
            aria-label="Fechar galeria"
          >
            ✕
          </button>

          <button
            type="button"
            className="modal-seta"
            onClick={fotoAnterior}
            disabled={totalFotos < 2}
            aria-label="Fotografia anterior"
          >
            ❮
          </button>

          <div className="modal-conteudo">

            <img
              src={fotos[fotoSelecionada]}
              alt={`${apartamento.nome} - Foto ${fotoSelecionada + 1}`}
            />

            <p aria-live="polite">
              {fotoSelecionada + 1} / {totalFotos}
            </p>

          </div>

          <button
            type="button"
            className="modal-seta"
            onClick={proximaFoto}
            disabled={totalFotos < 2}
            aria-label="Próxima fotografia"
          >
            ❯
          </button>

        </div>
      )}

    </main>
  )
}

function PaginaDetalhesApartamento() {
  const { id } = useParams()

  return <DetalhesApartamento key={id} />
}

export default PaginaDetalhesApartamento
