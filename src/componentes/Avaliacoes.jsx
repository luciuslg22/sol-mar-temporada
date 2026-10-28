import { useState } from 'react'
import avaliacoes from '../dados/avaliacoes'

function Avaliacoes() {
  const [indiceAtual, setIndiceAtual] = useState(0)

  const totalAvaliacoes = avaliacoes.length

  const proxima = () => {
    setIndiceAtual((atual) => (atual + 1) % totalAvaliacoes)
  }

  const anterior = () => {
    setIndiceAtual((atual) =>
      (atual - 1 + totalAvaliacoes) % totalAvaliacoes
    )
  }

  if (totalAvaliacoes === 0) return null

  const avaliacao = avaliacoes[indiceAtual]

  const notaOriginal = Number(avaliacao.nota)
  const nota = Number.isFinite(notaOriginal)
    ? Math.round(Math.max(0, Math.min(5, notaOriginal)))
    : 0

  const nome = avaliacao.nome || 'Hóspede'

  return (
    <section className="avaliacoes" id="avaliacoes">
      <div className="avaliacoes-container">

        <span className="avaliacoes-etiqueta">
          EXPERIÊNCIAS DOS HÓSPEDES
        </span>

        <h2>
          Quem se hospeda,
          <br />
          <em>tem histórias para contar.</em>
        </h2>

        <p className="avaliacoes-subtitulo">
          Um espaço para conhecer as experiências
          de quem escolheu a Sol & Mar Temporada.
        </p>

        <div className="avaliacoes-card">

          <div
            className="avaliacoes-estrelas"
            role="img"
            aria-label={`${nota} de 5 estrelas`}
          >
            <span aria-hidden="true">
              {'★'.repeat(nota)}
              {'☆'.repeat(5 - nota)}
            </span>
          </div>

          <p className="avaliacoes-comentario">
            "{avaliacao.comentario}"
          </p>

          <div className="avaliacoes-cliente">
            <span
              className="avaliacoes-avatar"
              aria-hidden="true"
            >
              {nome.charAt(0).toUpperCase()}
            </span>

            <div>
              <strong>{nome}</strong>
              <small>Hóspede</small>
            </div>
          </div>

        </div>

        {totalAvaliacoes > 1 && (
          <div className="avaliacoes-navegacao">
            <button
              type="button"
              onClick={anterior}
              aria-label="Avaliação anterior"
              aria-controls="avaliacoes-contador"
            >
              ←
            </button>

            <span
              id="avaliacoes-contador"
              role="status"
              aria-live="polite"
              aria-atomic="true"
            >
              {indiceAtual + 1} / {totalAvaliacoes}
            </span>

            <button
              type="button"
              onClick={proxima}
              aria-label="Próxima avaliação"
              aria-controls="avaliacoes-contador"
            >
              →
            </button>
          </div>
        )}

      </div>
    </section>
  )
}

export default Avaliacoes