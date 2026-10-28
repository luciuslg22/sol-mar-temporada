function Sobre() {
  return (
    <section className="sobre" id="sobre">
      <div className="sobre-container">

        <div className="sobre-imagem">
          <img
            src="/praia-santos.jpg"
            alt="Vista do litoral de Santos, São Paulo"
            loading="lazy"
            decoding="async"
          />

          <div className="sobre-imagem-detalhe">
            SANTOS • SÃO PAULO
          </div>
        </div>

        <div className="sobre-conteudo">
          <span className="sobre-etiqueta">
            CONHEÇA A SOL & MAR
          </span>

          <h2>
            Sua estadia merece
            <br />
            <em>ser inesquecível.</em>
          </h2>

          <div className="sobre-linha" aria-hidden="true" />

          <p>
            A Sol & Mar Temporada oferece acomodações
            para quem deseja aproveitar o melhor
            do litoral de Santos com conforto,
            praticidade e tranquilidade.
          </p>

          <p>
            Somos apaixonados por Santos e queremos
            compartilhar o melhor da cidade com você.
            Nossos apartamentos foram selecionados
            a dedo para oferecer uma excelente
            experiência de hospedagem, com localização
            privilegiada e todo o conforto que você merece.
          </p>

          <div className="sobre-beneficios">

            <div className="sobre-beneficio">
              <span aria-hidden="true">✦</span>
              <strong>Conforto</strong>
              <small>Para aproveitar cada momento</small>
            </div>

            <div className="sobre-beneficio">
              <span aria-hidden="true">✦</span>
              <strong>Localização</strong>
              <small>Hospedagens no litoral de Santos</small>
            </div>

            <div className="sobre-beneficio">
              <span aria-hidden="true">✦</span>
              <strong>Segurança</strong>
              <small>Prédios com segurança 24h</small>
            </div>

            <div className="sobre-beneficio">
              <span aria-hidden="true">✦</span>
              <strong>Qualidade</strong>
              <small>
                Ambientes limpos, confortáveis
                e bem equipados
              </small>
            </div>

          </div>

          <a href="#acomodacoes" className="sobre-botao">
            Conhecer acomodações <span aria-hidden="true">↗</span>
          </a>
        </div>

      </div>
    </section>
  )
}

export default Sobre