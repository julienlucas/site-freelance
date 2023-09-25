export default function Button({ texte } : { texte: string }) {
  const texte1 = "Échangeons, je vous accompagne 30min"
  const texte2 = "En savoir +"
  const texte3 = "Recevoir ma prosposition gratuite"
  const texte4 = "Oui, échanger avec moi !"

  return (
    <a href="https://calendly.com/julien-lucas/talk-dev" target="_blank">
      <button>{texte === 'texte1' ? texte1 : texte === 'texte2' ? texte2 : texte === 'texte3' ? texte3 : texte4}</button>
    </a>
  )
}
