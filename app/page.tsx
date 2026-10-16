'use client'

import { useEffect, useState } from 'react' 

function ScrollProgress() {
  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      document.documentElement.style.setProperty('--scroll-progress', max > 0 ? `${window.scrollY / max}` : '0')
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])
  return null
} 
import { ArrowDown, ArrowUpRight, ChevronDown, Heart, LockKeyhole, Moon, Sparkles, Star } from 'lucide-react'

const letterParagraphs = [
  'No sé si algún día voy a encontrar las palabras perfectas para explicarte todo lo que siento por ti, pero quiero intentarlo, una y otra vez, porque tú mereces saber lo inmensamente importante que eres para mí.',
  'Llegaste a mi vida y, de alguna manera, hiciste que el futuro volviera a parecer un lugar al que vale la pena llegar. Contigo he vuelto a ilusionarme con cosas que antes parecían tan lejanas. He vuelto a imaginar nuevos comienzos, sueños por cumplir y una vida llena de pequeños momentos que algún día podamos recordar con una sonrisa.',
  'Y es que no necesito que nuestro mundo sea perfecto. No necesito que todos los días sean fáciles ni que siempre sepamos qué hacer. Quiero compartir contigo los días hermosos, pero también aprender a acompañarte cuando las cosas pesen un poquito más. Quiero escucharte, comprenderte, aprender de ti y seguir descubriendo cada parte de la persona maravillosa que eres.',
  'No quiero que sientas que tienes que estar bien todo el tiempo conmigo. También puedes tener días difíciles, sentir miedo, estar cansada o simplemente necesitar un abrazo sin tener que explicar nada. Quiero que sepas que puedes encontrar en mí un compañero con quien hablar, descansar y volver a intentarlo cuando el mundo se sienta demasiado grande.',
  'Porque amarte no significa solamente emocionarme al pensar en ti. También significa querer cuidarte, respetarte, comprenderte y construir contigo una relación en la que ambos podamos crecer sin dejar de ser nosotros mismos.',
  'Y cuando imagino nuestro futuro, no pienso únicamente en los grandes momentos. También sueño con las cosas sencillas: nuestro primer lugarcito, ese espacio que algún día podamos llamar hogar; los días normales en los que no necesitemos hacer nada extraordinario para ser felices; las conversaciones interminables, las risas inesperadas y esos abrazos que hacen que todo parezca un poquito más tranquilo.',
  'No sé exactamente cómo será el camino que tenemos por delante, pero sí sé algo: quiero recorrerlo contigo, paso a paso, aprendiendo de nuestros errores, celebrando nuestros logros y recordándonos, incluso en los días más difíciles, por qué decidimos elegirnos.',
  'Si alguna vez la vida se vuelve una noche demasiado larga, quiero que recordemos que la oscuridad no significa que hayamos perdido la luz. A veces solo necesitamos detenernos, tomarnos de la mano y seguir avanzando juntos hasta volver a encontrarla.',
  'Y si hay algo que quiero que nunca dudes, es que eres profundamente importante para mí. Me haces feliz de maneras que todavía estoy aprendiendo a explicar. Me das motivos para soñar, para crecer y para querer convertirme en una mejor versión de mí mismo.',
  'Gracias por existir, por permitirme conocerte y por compartir conmigo una parte tan bonita de tu vida.',
  'Te amo, Valentina. No solamente por lo que eres, sino también por todo lo hermoso que despiertas en mí y por la persona que quiero seguir siendo a tu lado.',
  'Y entre todos los lugares que todavía nos quedan por conocer, todos los sueños que queremos alcanzar y todas las versiones de nosotros que todavía no existen, hay algo que me emociona más que cualquier destino:',
  'La posibilidad de seguir encontrándonos, una y otra vez, y de construir juntos un lugar al que ambos queramos volver.',
]

const promises = [
  ['En tus días difíciles', 'No tienes que poder con todo siempre. Quiero escucharte, acompañarte y recordarte que puedes darte tiempo para descansar.'],
  ['En tus días felices', 'Quiero celebrar tus pequeños y grandes logros, emocionarme con tus sueños y sentir orgullo de verte crecer.'],
  ['Cuando miremos al futuro', 'Quiero que sigamos construyendo nuestros sueños sin prisa, apoyándonos y convirtiendo poco a poco nuestras ilusiones en recuerdos.'],
  ['Cuando necesitemos recordar', 'Nuestro amor no necesita ser perfecto para ser hermoso. Necesita honestidad, paciencia, cuidado y dos personas dispuestas a seguir aprendiendo.'],
]

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow"><span />{children}<span /></p>
}

function OrnamentalDivider() {
  return <div className="ornament" aria-hidden="true"><span /><Heart size={13} fill="currentColor" /><span /></div>
}

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-sky" />
      <div className="moon" aria-hidden="true"><div className="moon-glow" /></div>
      <div className="hero-content">
        <SectionEyebrow>Para el amor de mi vida</SectionEyebrow>
        <h1>Valentina,<br /><em>mi luz en la noche.</em></h1>
        <p className="hero-lede">En un mundo lleno de noches interminables, tú eres esa luz que mi corazón jamás dejaría de buscar.</p>
        <p className="hero-lede">En un mundo tan inmenso, entre tantos caminos posibles, qué hermoso fue encontrarte a ti.</p>
        <p className="hero-subtle">Y qué hermoso es imaginar todos los caminos que todavía nos quedan por recorrer juntos.</p>
        <p className="hero-subtle">Mi amor, he creado este pequeño rincón para ti. Un lugar donde la oscuridad no representa tristeza, sino el misterio de una historia que todavía estamos escribiendo; donde cada estrella guarda un deseo y un pedacito de todo lo que siento por ti.</p>
        <a className="gold-button" href="#musica">Entrar en nuestro universo <ArrowDown size={16} /></a>
      </div>
      <a href="#musica" className="scroll-cue" aria-label="Desplazarse hacia la música"><span>Desliza para descubrir</span><ChevronDown size={18} /></a>
    </section>
  )
}

function MusicSection() {
  return <section className="music-section section-shell" id="musica">
    <div className="library-glow" aria-hidden="true" />
    <div className="music-copy"><SectionEyebrow>Nuestro universo</SectionEyebrow><h2>Una canción para<br /><em>perdernos juntos</em></h2><p>Hay sentimientos que a veces no caben en una carta. Por eso quería que también hubiera una canción acompañando este pequeño universo que hice para ti.</p><OrnamentalDivider /></div>
    <div className="music-artifact"><div className="artifact-top"><span><LockKeyhole size={13} /> Un recuerdo para guardar</span><Heart size={18} fill="currentColor" /></div><div className="spotify-frame"><iframe src="https://www.youtube-nocookie.com/embed/4jHKid6ygo0" title="To the Wilder — lyric video oficial de Woodkid en YouTube" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div><div className="track-note"><div className="vinyl-mark"><Moon size={19} /></div><div><p>To the Wilder</p><span>Woodkid</span></div><a href="https://www.youtube.com/watch?v=4jHKid6ygo0" target="_blank" rel="noreferrer">Escuchar en YouTube <ArrowUpRight size={14} /></a></div></div>
    <p className="music-dedication">Que esta canción acompañe las palabras que a veces me cuesta expresar y todo ese amor que quiero seguir demostrándote.</p>
  </section>
}

function LoveLetter() {
  return <section className="letter-section section-shell" id="carta"><div className="section-heading"><SectionEyebrow>Desde el alma</SectionEyebrow><h2>Para ti, <em>mi amor</em></h2><p>Una carta escrita desde mi corazon y alma, para que puedas volver a ella cuando quieras.</p></div><article className="letter"><div className="letter-corner corner-one" /><div className="letter-corner corner-two" /><div className="wax-seal" aria-hidden="true"><Heart size={19} fill="currentColor" /></div><div className="letter-inner"><p className="letter-salutation">El amor de mi vida, Valentina:</p>{letterParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<div className="letter-signature"><p>Con todo el amor de mi alma,</p><strong>Diego</strong></div></div></article></section>
}

function Promises() {
  const [open, setOpen] = useState<number | null>(null)
  return <section className="promises-section section-shell" id="promesas"><div className="section-heading"><SectionEyebrow>Cuatro formas de decirte te amo</SectionEyebrow><h2>Pequeñas <em>promesas</em></h2><p>Cuatro cosas que quiero cuidar, a tu lado.</p></div><div className="promise-grid">{promises.map(([title, message], index) => <button className={`promise-card ${open === index ? 'is-open' : ''}`} key={title} onClick={() => setOpen(open === index ? null : index)} aria-expanded={open === index}><span className="promise-number">0{index + 1}</span><Sparkles className="promise-icon" size={20} /><h3>{title}</h3><span className="promise-message">{message}</span><span className="promise-action">{open === index ? 'Cerrar' : 'Abrir promesa'} <ChevronDown size={14} /></span></button>)}</div></section>
}

function FutureSection() {
  return <section className="future-section section-shell" id="futuro"><div className="future-stars" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /></div><div className="future-content"><SectionEyebrow>Lo que todavía nos espera</SectionEyebrow><h2>Mi lugar favorito<br /><em>todavía nos espera</em></h2><p>No sueño solamente con grandes aventuras. Sueño con ese primer lugarcito que podamos llamar nuestro, con los días tranquilos, las pequeñas costumbres, las risas sin motivo y la paz de saber que estamos construyendo algo bonito juntos.</p></div></section>
}

function FinalReveal() {
  const [revealed, setRevealed] = useState(false)
  return <section className="final-section section-shell" id="final"><div className="dawn" aria-hidden="true" /><div className="final-content"><SectionEyebrow>Una última verdad</SectionEyebrow><h2>Si volviera<br /><em>a encontrarte...</em></h2><p>Entre todos los caminos, entre todas las noches y todos los destinos posibles, volvería a querer descubrirte. Volveria a tomar el mismo camino para llegar hasta ti, volvería a elegir la oportunidad de conocerte, de aprender a amarte y de imaginar contigo todo lo que todavía nos queda por vivir.</p><button className="gold-button" onClick={() => setRevealed(!revealed)} aria-expanded={revealed}>{revealed ? 'Guardar estas palabras' : 'Hay algo más que quiero decirte'} <Heart size={16} fill={revealed ? 'currentColor' : 'none'} /></button>{revealed && <div className="final-letter"><p>Valentina, mi amor, si alguna vez dudas de lo mucho que significas para mí, vuelve a estas palabras.</p><p>No las hice porque exista una ocasión perfecta para decirte que te amo. Las hice porque tú mereces saberlo incluso en los días normales, incluso cuando estamos lejos, incluso cuando no encontramos las palabras adecuadas.</p><p>No puedo prometerte una vida sin dificultades, pero sí quiero seguir aprendiendo a amarte de una forma que nos haga bien a los dos.</p><p>Gracias por ser parte de mi vida.</p><p>Te amo muchísimo, mi niña.</p><p>Y ojalá la vida nos regale muchos años para descubrir todo lo bonito que todavía nos espera.</p><div className="final-signature"><span>Para Valentina, con todo mi amor.</span><strong>Siempre tuyo, Diego.</strong></div></div>}</div><div className="final-heart" aria-hidden="true"><Heart size={28} fill="currentColor" /></div></section>
}

export default function Page() {
  return <main className="love-letter"><ScrollProgress /><div className="progress-bar" aria-hidden="true" /><nav className="top-nav" aria-label="Navegación principal"><a href="#inicio" className="nav-mark"><Heart size={13} fill="currentColor" /> D & V</a><div><a href="#carta">La carta</a><a href="#promesas">Promesas</a><a href="#futuro">Nuestro futuro</a></div></nav><Hero /><MusicSection /><LoveLetter /><Promises /><FutureSection /><FinalReveal /><footer><OrnamentalDivider /><p>Hecho con amor y alma.</p><span>Para el amor de mi vida, Valentina</span></footer></main>
}

