import { Link } from 'react-router-dom'
import { apartamentos } from '../dados/apartamentos'

function Acomodacoes() {
  return (
    <section className="acomodacoes" id="acomodacoes">
      <div className="secao-topo">
        <span className="secao-etiqueta">
          NOSSAS ACOMODAÇÕES
        </span>

        <h2>
          Encontre seu lugar
          <em> perfeito.</em>
        </h2>

        <p>
          Conheça nossos espaços e escolha a hospedagem
          ideal para seus dias no litoral.
        </p>
      </div>

      <div className="apartamentos-grid">
        {apartamentos.map((apartamento) => (
          <article
            className="apartamento-card"
            key={apartamento.id}
          >
            <div className="apartamento-imagem">
              <img
                src={apartamento.imagem}
                alt={`Foto da acomodação ${apartamento.nome}`}
                loading="lazy"
                decoding="async"
              />

              {apartamento.destaque && (
                <span className="apartamento-destaque">
                  {apartamento.destaque}
                </span>
              )}
            </div>

            <div className="apartamento-info">
              <span className="apartamento-local">
                {apartamento.localizacao}
              </span>

              <h3>{apartamento.nome}</h3>

              <p>{apartamento.descricao}</p>

              <Link
                to={`/apartamento/${apartamento.id}`}
                className="apartamento-botao"
                aria-label={`Ver detalhes de ${apartamento.nome}`}
              >
                Ver detalhes
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Acomodacoes