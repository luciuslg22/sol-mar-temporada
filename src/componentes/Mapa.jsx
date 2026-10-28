function Mapa({ endereco }) {
  if (!endereco) return null

  const enderecoCodificado = encodeURIComponent(endereco)

  const mapaEmbed = `https://maps.google.com/maps?q=${enderecoCodificado}&z=15&output=embed`

  const mapaLink = `https://www.google.com/maps/search/?api=1&query=${enderecoCodificado}`

  return (
    <section className="mapa-secao">
      <span className="mapa-etiqueta">
        LOCALIZAÇÃO
      </span>

      <h2>Onde você vai ficar</h2>

      <p>{endereco}</p>

      <div className="mapa-container">
        <iframe
          title={`Mapa da localização: ${endereco}`}
          src={mapaEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          style={{ border: 0 }}
        />
      </div>

      <a
        href={mapaLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mapa-botao"
        aria-label={`Ver localização de ${endereco} no Google Maps`}
      >
        Ver localização no Google Maps
        <span aria-hidden="true"> ↗</span>
      </a>
    </section>
  )
}

export default Mapa