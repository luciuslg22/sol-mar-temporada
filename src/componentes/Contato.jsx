function Contato() {
  const numeroWhatsApp = '5513988375631'
  const instagram = 'solemar.temporada'

  const mensagem = encodeURIComponent(
    'Vim pelo Sol & Mar - Temporada e gostaria de falar com Sr. Lucas. (Vip)'
  )

  const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`
  const linkInstagram = `https://www.instagram.com/${instagram}/`

  return (
    <section className="contato" id="contato">
      <div className="contato-container">

        <span className="contato-etiqueta">
          ENTRE EM CONTATO
        </span>

        <h2>
          Sua próxima viagem
          <br />
          <em>começa aqui.</em>
        </h2>

        <p>
          Tem alguma dúvida sobre nossas acomodações?
          Entre em contato para saber mais sobre
          sua próxima estadia em Santos.
        </p>

        <div className="contato-redes">

          <a
            href={linkWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="contato-whatsapp"
            aria-label="Entrar em contato pelo WhatsApp"
          >
            <span>WhatsApp</span>
            <span aria-hidden="true">↗</span>
          </a>

          <a
            href={linkInstagram}
            target="_blank"
            rel="noopener noreferrer"
            className="contato-instagram"
            aria-label="Visitar o Instagram da Sol & Mar Temporada"
          >
            <span>Instagram</span>
            <span aria-hidden="true">↗</span>
          </a>

        </div>

      </div>
    </section>
  )
}

export default Contato