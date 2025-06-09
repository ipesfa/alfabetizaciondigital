"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import ParticlesBackground from "@/components/particles-background"
import GlowEffect from "@/components/glow-effect"
import { CardHeader, CardTitle } from "@/components/ui/card"

// Variantes de animación para elementos
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

// Componente de pestañas
function Tabs({ tabs, activeTab, setActiveTab }: { tabs: string[], activeTab: number, setActiveTab: (index: number) => void }) {
  return (
    <div className="flex space-x-2 mb-6">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => setActiveTab(index)}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
            activeTab === index
              ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/20'
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}

function InteractiveTextButton({ label, text }: { label: string; text: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-gray-900/50 p-4 rounded-lg">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left text-purple-300 hover:text-purple-200 transition-colors"
      >
        {label}
      </button>
      {isExpanded && (
        <p className="mt-2 text-gray-300">{text}</p>
      )}
    </div>
  );
}

function FlipCard({ frontText, backText, color }: { frontText: string; backText: string; color: string }) {
  const [flipped, setFlipped] = useState(false);
  
  return (
    <div
      className="w-full md:w-1/2 h-48 perspective cursor-pointer"
      onClick={() => setFlipped((f) => !f)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform ${flipped ? "rotate-y-180" : ""}`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div
          className={`absolute w-full h-full backface-hidden bg-${color}-500 rounded-lg p-4 flex items-center justify-center`}
        >
          <p className="text-white text-center">{frontText}</p>
        </div>
        {/* Back */}
        <div
          className={`absolute w-full h-full backface-hidden bg-${color}-600 rounded-lg p-4 flex items-center justify-center rotate-y-180`}
        >
          <p className="text-white text-center">{backText}</p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const scrollRef = useRef(null)
  const [lightbox, setLightbox] = useState<{src: string, alt: string} | null>(null)
  const [activeTab, setActiveTab] = useState(0)
  const [activeActionTab, setActiveActionTab] = useState(0)

  useEffect(() => {
    if (!lightbox) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox]);

  return (
    <main className="flex flex-col items-center justify-center bg-gray-950 text-gray-100">
      {/* Sección 1: Hero */}
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1581091870622-2d5f90b2734c"
            alt="Niño usando tablet"
            fill
            className="object-cover brightness-30 blur-[2px]"
            priority
          />
          <div className="absolute inset-0 bg-black/80 z-10"></div>
        </div>

        {/* Componente de partículas */}
        <div className="absolute inset-0 z-20">
          <ParticlesBackground />
        </div>

        <GlowEffect className="z-30 max-w-4xl mx-auto text-center px-4 sm:px-6 group">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400"
              variants={fadeIn}
            >
              Alfabetización Digital
            </motion.h1>
            <motion.div variants={fadeIn} className="mb-8">
              <span className="relative text-xl md:text-2xl font-semibold tracking-wide text-cyan-300 opacity-80 px-4 backdrop-blur-sm">
                Prof. Leonardo Nausan
                <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-1/2 h-0.5 bg-cyan-300/40 rounded-full animate-pulse"></span>
              </span>
            </motion.div>
            <motion.h2 className="text-xl md:text-2xl mb-8 text-gray-200" variants={fadeIn}>
              Un viaje por la cultura digital y la educación del siglo XXI.
            </motion.h2>
            <motion.p className="text-lg md:text-xl italic max-w-2xl mx-auto mb-12 text-gray-300" variants={fadeIn}>
              "No se trata solo de usar tecnología, sino de comprender cómo nos transforma."
            </motion.p>
            <motion.div variants={fadeIn}>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white border-none text-lg px-8 py-6 rounded-full shadow-lg shadow-purple-500/20 transition-all duration-300 hover:scale-105">
                Comenzar el viaje
              </Button>
            </motion.div>
            {/* Lista de estudiantes */}
            <div className="w-full flex justify-center md:justify-end mt-28">
              <div className="flex flex-col items-end">
                <div className="flex flex-wrap gap-x-2 text-sm justify-center">
                  <span className="text-purple-300">Daiana Georgina</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-cyan-300">Susana Elizabeth</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-green-300">Maria Alejandra</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-yellow-300">Georgina Valeria</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-pink-300">Abril Soledad</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-blue-300">Joana Belen</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-orange-300">Mariana Silvina Mercedes</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-purple-300">Lucas Ezequiel</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-cyan-300">Elizabeth Margarita</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-green-300">Matias Martin</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-yellow-300">Marcelo Javier</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-pink-300">Cecilia Susana</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-blue-300">Inés</span>
                </div>
              </div>
            </div>
          </motion.div>
        </GlowEffect>
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
          animate={{
            y: [0, 10, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 2,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-purple-400"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </section>

      {/* Sección 2: Clases */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-950 py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-cyan-400 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Clases
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-800/90 border border-gray-700 hover:border-cyan-500/50 transition-colors">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex gap-4 justify-center overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-cyan-700 scrollbar-track-gray-800">
                    {['Pulgarcita', 'Misión Cabildo 2.0', 'Mensaje', 'Bibliografía', 'Mapa de Ruta', 'Repositorio'].map((tab, index) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(index)}
                        className={`px-3 py-2 text-xs sm:text-sm md:px-4 md:py-2 rounded-lg transition-all duration-300 whitespace-nowrap ${
                          activeTab === index
                            ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg'
                            : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  {activeTab === 0 && (
                    <>
                      <h3 className="text-2xl font-bold mb-6 text-cyan-300">
                        Pulgarcita y las Primeras Misiones Digitales
                      </h3>
                      <div className="bg-gray-900/50 p-4 rounded-lg mb-6">
                        <p className="text-gray-300 mb-4">
                          En la primera clase de Alfabetización Digital, iniciamos nuestro recorrido en formato taller, donde cada estudiante asumió un rol activo en su propio proceso de aprendizaje.
                        </p>
                        <p className="text-gray-300 mb-4">
                          📚 Tomamos como punto de partida el video de Michel Serres sobre "Pulgarcita", reflexionando sobre los nuevos modos de aprender, enseñar y habitar el aula en contextos profundamente atravesados por lo digital.
                        </p>
                        <p className="text-gray-300 mb-4">
                          💡 Introdujimos el concepto de IA generativa, explorando sus usos, potenciales y desafíos en el campo educativo.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="bg-cyan-900/50 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium border border-cyan-700/50">
                            #AlfabetizaciónDigital
                          </span>
                          <span className="bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full text-sm font-medium border border-purple-700/50">
                            #Pulgarcita
                          </span>
                          <span className="bg-green-900/50 text-green-300 px-3 py-1 rounded-full text-sm font-medium border border-green-700/50">
                            #IAGenerativa
                          </span>
                        </div>
                      </div>
                      <div className="relative w-full rounded-lg overflow-hidden shadow-xl shadow-cyan-500/10">
                        <div className="w-full aspect-[16/9] bg-[#F4F4F4] border border-gray-700 rounded-lg overflow-hidden">
                          <iframe
                            src="https://padlet.com/embed/stncg6n3iar0eqpz"
                            frameBorder="0"
                            allow="camera;microphone;geolocation;display-capture;clipboard-write"
                            style={{ width: '100%', height: '100%', display: 'block' }}
                            className="w-full h-[300px] md:h-[608px]"
                            title="Padlet colaborativo"
                          ></iframe>
                        </div>
                      </div>
                    </>
                  )}

                  {activeTab === 1 && (
                    <>
                      <h3 className="text-2xl font-bold mb-6 text-cyan-300">
                        Misión Cabildo 2.0
                      </h3>
                      <div className="bg-gray-900/50 p-4 rounded-lg mb-6">
                        <p className="text-gray-300 mb-4">
                          En esta segunda clase, los y las estudiantes asumieron el desafío de diseñar una propuesta digital para reimaginar el 25 de mayo en el futuro, bajo la consigna:
                        </p>
                        <p className="mb-4 font-semibold text-cyan-300">
                          "¿Cómo recordaríamos el primer gobierno patrio en el año 2125?"
                        </p>
                        <p className="text-gray-300 mb-4">
                          A través de la cápsula interactiva en Genially, se presentó la misión del día:
                          construir en grupos una escena, pieza o actividad didáctica digital para un acto escolar del futuro, rompiendo con los moldes tradicionales y pensando nuevas formas de conmemorar desde lo tecnológico, lo creativo y lo reflexivo.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="bg-cyan-900/50 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium border border-cyan-700/50">
                            #Cabildo2.0
                          </span>
                          <span className="bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full text-sm font-medium border border-purple-700/50">
                            #RevoluciónDigital
                          </span>
                          <span className="bg-green-900/50 text-green-300 px-3 py-1 rounded-full text-sm font-medium border border-green-700/50">
                            #EducaciónDelFuturo
                          </span>
                        </div>
                      </div>
                      <div className="relative w-full rounded-lg overflow-hidden shadow-xl shadow-cyan-500/10">
                        <div className="w-full aspect-[16/9] bg-[#F4F4F4] border border-gray-700 rounded-lg overflow-hidden">
                          <iframe
                            title="Año 2125 Escuela Orbital Argentina"
                            frameBorder="0"
                            width="1200"
                            height="675"
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            src="https://view.genially.com/682c82cbb342df338363e997"
                            allow="fullscreen"
                          ></iframe>
                        </div>
                      </div>
                    </>
                  )}

                  {activeTab === 2 && (
                    <>
                      <h3 className="text-2xl font-bold mb-6 text-cyan-300">
                        Mensaje
                      </h3>
                      <div className="bg-gray-900/50 p-4 rounded-lg mb-6">
                        <div style={{ position: 'relative', width: '100%', height: 0, paddingTop: '177.7778%', paddingBottom: 0, boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', marginTop: '1.6em', marginBottom: '0.9em', overflow: 'hidden', borderRadius: '8px', willChange: 'transform' }}>
                          <iframe 
                            loading="lazy" 
                            style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none', padding: 0, margin: 0 }}
                            src="https://www.canva.com/design/DAGpKRokNNo/BH_z7TNnrGzIPrxvLZJGAw/watch?embed" 
                            allowFullScreen={true}
                            allow="fullscreen"
                          />
                        </div>
                        <p className="text-gray-300 text-center mt-4">
                          <a 
                            href="https://www.canva.com/design/DAGpKRokNNo/BH_z7TNnrGzIPrxvLZJGAw/watch?utm_content=DAGpKRokNNo&utm_campaign=designshare&utm_medium=embeds&utm_source=link" 
                            target="_blank" 
                            rel="noopener"
                            className="text-purple-400 hover:text-purple-300 transition-colors"
                          >
                            Mensaje
                          </a> de Leonardo Nausan
                        </p>
                      </div>
                    </>
                  )}

                  {activeTab === 3 && (
                    <>
                      <h3 className="text-2xl font-bold mb-6 text-cyan-300">
                        Bibliografía
                      </h3>
                      <div className="bg-gray-900/50 p-4 rounded-lg mb-6">
                        <div className="space-y-6">
                          <div className="bg-gray-800/50 p-6 rounded-lg">
                            <h4 className="text-xl font-semibold text-purple-300 mb-4">Secuencia Didáctica: Alfabetización Digital</h4>
                            <div className="space-y-6">
                              <div className="border-l-4 border-cyan-500 pl-4">
                                <h5 className="text-lg font-semibold text-cyan-300 mb-2">1. Fundamentos Conceptuales</h5>
                                <p className="text-gray-300 mb-3">
                                  <a 
                                    href="https://drive.google.com/file/d/1NGG_K6NrZsSeoz-mCJqrqxmjvSN7OlOb/view?usp=sharing" 
                                    target="_blank" 
                                    rel="noopener"
                                    className="text-purple-400 hover:text-purple-300 transition-colors"
                                  >
                                    Documento Base: Alfabetización Digital
                                  </a>
                                </p>
                                <p className="text-gray-300 text-sm italic">
                                  Este documento establece los fundamentos teóricos y conceptuales de la alfabetización digital, proporcionando el marco inicial para comprender la transformación educativa en la era digital.
                                </p>
                              </div>

                              <div className="border-l-4 border-green-500 pl-4">
                                <h5 className="text-lg font-semibold text-green-300 mb-2">2. Implementación Práctica</h5>
                                <p className="text-gray-300 mb-3">
                                  <a 
                                    href="https://drive.google.com/file/d/1yAQjiDDmAE35YzDvWsxIWVN1av5c5t-s/view?usp=sharing" 
                                    target="_blank" 
                                    rel="noopener"
                                    className="text-purple-400 hover:text-purple-300 transition-colors"
                                  >
                                    Guía de Implementación: Herramientas Digitales
                                  </a>
                                </p>
                                <p className="text-gray-300 text-sm italic">
                                  Una guía práctica que detalla las estrategias y herramientas para implementar la alfabetización digital en el aula, con ejemplos concretos y casos de estudio.
                                </p>
                              </div>

                              <div className="border-l-4 border-yellow-500 pl-4">
                                <h5 className="text-lg font-semibold text-yellow-300 mb-2">3. Perspectiva Global y Futuro</h5>
                                <p className="text-gray-300 mb-3">
                                  <a 
                                    href="https://www.unesco.org/es/digital-education/artificial-intelligence" 
                                    target="_blank" 
                                    rel="noopener"
                                    className="text-purple-400 hover:text-purple-300 transition-colors"
                                  >
                                    UNESCO: Inteligencia Artificial en la Educación
                                  </a>
                                </p>
                                <p className="text-gray-300 text-sm italic">
                                  Una visión global sobre el futuro de la educación digital y el papel de la inteligencia artificial, proporcionando un marco para entender los desafíos y oportunidades emergentes.
                                </p>
                              </div>
                            </div>

                            <div className="mt-6 p-4 bg-gray-900/50 rounded-lg">
                              <h5 className="text-lg font-semibold text-cyan-300 mb-3">Objetivos de la Secuencia:</h5>
                              <ul className="list-disc list-inside space-y-2 text-gray-300">
                                <li>Comprender los fundamentos teóricos de la alfabetización digital</li>
                                <li>Adquirir herramientas prácticas para la implementación en el aula</li>
                                <li>Reflexionar sobre el futuro de la educación en la era digital</li>
                              </ul>
                            </div>
                          </div>

                          {/* Referencias Bibliográficas Adicionales */}
                          <div className="bg-gray-800/50 p-6 rounded-lg">
                            <h4 className="text-xl font-semibold text-purple-300 mb-4">Referencias Bibliográficas Adicionales</h4>
                            
                            <div className="space-y-6">
                              <div className="bg-gray-900/50 p-4 rounded-lg">
                                <h5 className="text-lg font-semibold text-purple-300 mb-2">Libros</h5>
                                <ul className="list-disc list-inside space-y-2 text-gray-300">
                                  <li>Serres, M. (2013). <span className="italic">Pulgarcita</span>. Fondo de Cultura Económica.</li>
                                  <li>Buckingham, D. (2019). <span className="italic">The Media Education Manifesto</span>. Polity Press.</li>
                                  <li>Jenkins, H. (2009). <span className="italic">Confronting the Challenges of Participatory Culture</span>. MIT Press.</li>
                                </ul>
                              </div>

                              <div className="bg-gray-900/50 p-4 rounded-lg">
                                <h5 className="text-lg font-semibold text-cyan-300 mb-2">Artículos</h5>
                                <ul className="list-disc list-inside space-y-2 text-gray-300">
                                  <li>Selwyn, N. (2019). "What's the problem with learning analytics?". <span className="italic">Journal of Learning Analytics</span>, 6(3), 11-19.</li>
                                  <li>Livingstone, S. (2018). "iGen: Why Today's Super-Connected Kids Are Growing Up Less Rebellious". <span className="italic">Journal of Children and Media</span>, 12(1), 118-123.</li>
                                </ul>
                              </div>

                              <div className="bg-gray-900/50 p-4 rounded-lg">
                                <h5 className="text-lg font-semibold text-green-300 mb-2">Recursos Digitales</h5>
                                <ul className="list-disc list-inside space-y-2 text-gray-300">
                                  <li>UNESCO. (2021). <a href="https://unesdoc.unesco.org/ark:/48223/pf0000377074" target="_blank" rel="noopener" className="text-purple-400 hover:text-purple-300 transition-colors">"Reimagining our futures together: A new social contract for education"</a></li>
                                  <li>OECD. (2021). <a href="https://www.oecd.org/education/back-to-the-future-of-education-178ef527-en.htm" target="_blank" rel="noopener" className="text-purple-400 hover:text-purple-300 transition-colors">"Back to the Future of Education"</a></li>
                                </ul>
                              </div>

                              <div className="bg-gray-900/50 p-4 rounded-lg">
                                <h5 className="text-lg font-semibold text-yellow-300 mb-2">Videos</h5>
                                <ul className="list-disc list-inside space-y-2 text-gray-300">
                                  <li>Serres, M. (2013). <a href="https://www.youtube.com/watch?v=4-LHiGq8QLI" target="_blank" rel="noopener" className="text-purple-400 hover:text-purple-300 transition-colors">"Pulgarcita: La generación que reinventará el mundo"</a></li>
                                  <li>TEDx Talks. (2018). <a href="https://www.youtube.com/watch?v=br9b3-cxTPQ" target="_blank" rel="noopener" className="text-purple-400 hover:text-purple-300 transition-colors">"¿Qué es la IA generativa? – EducaIA"</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {activeTab === 4 && (
                    <>
                      <h3 className="text-2xl font-bold mb-6 text-cyan-300">
                        Mapa de Ruta
                      </h3>
                      <div className="bg-gray-900/50 p-4 rounded-lg mb-6">
                        <p className="text-gray-300 mb-6">
                          En este encuentro, cada grupo presentó su versión del Cabildo 2.0, compartiendo propuestas creativas, con una gran dedicación y originalidad en sus producciones. Se llevó adelante una puesta en común muy enriquecedora, donde pudimos intercambiar ideas, enfoques y miradas sobre las distintas formas de narrar lo trabajado.
                        </p>
                        <p className="text-gray-300 mb-6">
                          Para cerrar la clase, exploramos juntos el Mapa de Ruta del nuevo desafío:
                          🚀 "Diseñar para transformar", que nos acompañará en los próximos encuentros.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          <span className="bg-cyan-900/50 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium border border-cyan-700/50">
                            #DiseñarParaTransformar
                          </span>
                          <span className="bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full text-sm font-medium border border-purple-700/50">
                            #Cabildo2.0
                          </span>
                          <span className="bg-green-900/50 text-green-300 px-3 py-1 rounded-full text-sm font-medium border border-green-700/50">
                            #InnovaciónEducativa
                          </span>
                          <span className="bg-yellow-900/50 text-yellow-300 px-3 py-1 rounded-full text-sm font-medium border border-yellow-700/50">
                            #AprendizajeColaborativo
                          </span>
                        </div>
                        <div style={{ position: 'relative', width: '100%', height: 0, paddingTop: '56.2500%', paddingBottom: 0, boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', marginTop: '1.6em', marginBottom: '0.9em', overflow: 'hidden', borderRadius: '8px', willChange: 'transform' }}>
                          <iframe 
                            loading="lazy" 
                            style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none', padding: 0, margin: 0 }}
                            src="https://www.canva.com/design/DAGpToZG69o/T6NhcQpnqgcRqsBU0PS8hg/watch?embed" 
                            allowFullScreen={true}
                            allow="fullscreen"
                          />
                        </div>
                        <p className="text-gray-300 text-center mt-4">
                          <a 
                            href="https://www.canva.com/design/DAGpToZG69o/T6NhcQpnqgcRqsBU0PS8hg/watch?utm_content=DAGpToZG69o&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h30e7e41627" 
                            target="_blank" 
                            rel="noopener"
                            className="text-purple-400 hover:text-purple-300 transition-colors"
                          >
                            ROAD MAP SECUENCIA DIDÁCTICA
                          </a> de Leonardo Nausan
                        </p>
                      </div>
                    </>
                  )}

                  {activeTab === 5 && (
                    <>
                      <h3 className="text-2xl font-bold mb-6 text-cyan-300">
                        Repositorio
                      </h3>
                      <div className="bg-gray-900/50 p-4 rounded-lg mb-6">
                        <div className="w-full rounded-lg overflow-hidden shadow-xl shadow-cyan-500/10">
                          <iframe
                            src="https://coherent-sycamore-5c5.notion.site/ebd/20c730929797807b8c85eff93c67f5e6"
                            width="100%"
                            height="600"
                            frameBorder="0"
                            allowFullScreen
                            className="w-full h-[400px] md:h-[600px] rounded-lg border-none"
                          />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
            <div className="mt-8 flex flex-col items-center gap-4">
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0">
                <motion.a
                  href="https://docs.google.com/spreadsheets/d/1C0cJPd6cNQHjUlVtDJdjZS7afSh118Seoe4x2h5hrhc/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-2xl">🏆</span>
                  <span>¡Consulta tu Ranking de Insignias!</span>
                  <span className="text-2xl">🏆</span>
                </motion.a>
                <motion.a
                  href="https://padlet.com/soporte188/mural-digital-alfabetizaci-n-digital-cursada-2025-stncg6n3iar0eqpz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-2xl">📝</span>
                  <span>Padlet de Actividades</span>
                  <span className="text-2xl">📝</span>
                </motion.a>
              </div>
              <p className="text-sm text-gray-400 italic text-center px-4">
                * Solo se puede acceder con tu cuenta institucional
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sección 3: Acción */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-900 py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-400">Acción</h2>
          {/* Pestañas de Acción */}
          <div className="flex gap-4 justify-center mb-8 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-cyan-700 scrollbar-track-gray-800">
            {['Diseñar para transformar', 'Cabildo 2.0'].map((tab, index) => (
              <button
                key={tab}
                onClick={() => setActiveActionTab(index)}
                className={`px-3 py-2 text-xs sm:text-sm md:px-4 md:py-2 rounded-lg transition-all duration-300 whitespace-nowrap ${
                  activeActionTab === index
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          {activeActionTab === 1 && (
            <div className="bg-gray-800/90 p-8 rounded-lg shadow-md border border-cyan-700/30 text-left text-lg text-white">
              <div className="mb-4 flex items-center gap-2">
                <span className="text-2xl">📌</span>
                <span className="font-semibold">Consigna:</span>
              </div>
              <p className="mb-6">
                En grupos de 2 a 3 personas, deberán ponerse en el rol de docentes de un área curricular (Ej: Lengua, Matemática, Educación Artística, Formación Ética, etc.) y desarrollar una breve secuencia didáctica creativa para trabajar el 25 de mayo en un aula de nivel ?
              </p>
              <div className="bg-gray-900/80 rounded-lg p-6 mb-8">
                <h3 className="text-cyan-300 font-semibold mb-3 text-lg">🧩 Incluí:</h3>
                <ul className="list-disc list-inside space-y-2 text-base">
                  <li><b>Nivel y curso</b> al que está dirigida la secuencia</li>
                  <li><b>Objetivo de aprendizaje</b></li>
                  <li><b>Actividad o escena pedagógica concreta</b> (en vínculo con la efeméride)</li>
                  <li><b>Herramienta digital utilizada</b> (Genially, video, Canva, etc.)</li>
                  <li><b>Producto final</b> (puede ser un video, mural, afiche interactivo, podcast, obra breve, infografía, etc.)</li>
                  <li><b>Subir</b> al Padlet colaborativo.</li>
                </ul>
              </div>
            </div>
          )}
          {activeActionTab === 0 && (
            <div className="bg-gray-800/90 p-8 rounded-lg shadow-md border border-cyan-700/30 text-center text-lg text-white">
              <span className="text-cyan-300 font-semibold">En producción</span>
            </div>
          )}
          <div className="w-full flex justify-center mt-8">
            <div className="relative w-full max-w-3xl aspect-[16/5] rounded-lg overflow-hidden shadow-xl shadow-cyan-500/10 bg-white flex items-center justify-center">
              <img
                src="/argentina.jpg"
                alt="Bandera de Argentina"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sección 4: Pulgarcita */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-900 py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-400">Pulgarcita</h2>
            <blockquote className="border-l-4 border-purple-500 pl-4 mb-6 italic text-lg text-gray-300">
              "La generación Pulgarcita tendrá que reinventar una forma de vivir juntos, instituciones y formas de ser y
              conocer." – Michel Serres
            </blockquote>
            <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg shadow-purple-500/10">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/4-LHiGq8QLI"
                title="Entrevista a Michel Serres"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </motion.div>
          <motion.div
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative h-[400px] md:h-[500px] w-full rounded-lg overflow-hidden shadow-xl shadow-purple-500/10 transform hover:scale-[1.02] transition-transform duration-500">
              <Image
                src="/la-tecnologia-revoluciona-la-comunicacion.jpg"
                alt="La tecnología revoluciona la comunicación"
                fill
                className="object-contain bg-black"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sección 5: Aula en acción */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-900 py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-400">Aula en acción</h2>
            <p className="text-lg text-gray-300 mb-6">
              Nuestro curso se desarrolla a través de talleres prácticos donde el aprendizaje ocurre haciendo. Los
              estudiantes exploran, experimentan y reflexionan sobre el uso de tecnologías digitales en contextos
              educativos reales.
            </p>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-6 border border-gray-700">
              <h3 className="text-xl font-semibold mb-3 text-cyan-300">Herramientas utilizadas</h3>
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="w-10 h-10 rounded-full bg-pink-900/30 flex items-center justify-center border border-pink-700/50">
                    <span className="text-pink-400 font-bold">P</span>
                  </div>
                  <span className="text-gray-300">Padlet</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center border border-blue-700/50">
                    <span className="text-blue-400 font-bold">C</span>
                  </div>
                  <span className="text-gray-300">Canva</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="w-10 h-10 rounded-full bg-green-900/30 flex items-center justify-center border border-green-700/50">
                    <span className="text-green-400 font-bold">G</span>
                  </div>
                  <span className="text-gray-300">Google Classroom</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center border border-purple-700/50">
                    <span className="text-purple-400 font-bold">AI</span>
                  </div>
                  <span className="text-gray-300">ChatGPT</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="w-10 h-10 rounded-full bg-yellow-900/30 flex items-center justify-center border border-yellow-700/50">
                    <span className="text-yellow-400 font-bold">G</span>
                  </div>
                  <span className="text-gray-300">Genially</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="w-10 h-10 rounded-full bg-gray-900/30 flex items-center justify-center border border-gray-700/50">
                    <span className="text-gray-300 font-bold">C</span>
                  </div>
                  <span className="text-gray-300">CapCut</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="w-10 h-10 rounded-full bg-orange-900/30 flex items-center justify-center border border-orange-700/50">
                    <span className="text-orange-400 font-bold">A</span>
                  </div>
                  <span className="text-gray-300">Audacity</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="w-10 h-10 rounded-full bg-green-900/30 flex items-center justify-center border border-green-700/50">
                    <span className="text-green-400 font-bold">GD</span>
                  </div>
                  <span className="text-gray-300">Google Drive</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center border border-blue-700/50">
                    <span className="text-blue-400 font-bold">I</span>
                  </div>
                  <span className="text-gray-300">Infod</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="w-10 h-10 rounded-full bg-pink-900/30 flex items-center justify-center border border-pink-700/50">
                    <span className="text-pink-400 font-bold">S</span>
                  </div>
                  <span className="text-gray-300">Social Media</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative h-56 md:h-[32rem] aspect-[16/6] w-full rounded-lg overflow-hidden shadow-xl shadow-cyan-500/10 transform hover:scale-[1.02] transition-transform duration-500 mb-8 md:mb-0">
              <Image
                src="/aula.jpg"
                alt="Aula en acción"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sección 6: IA en el aula */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-950 py-8 px-2 sm:px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col gap-2 h-auto md:h-[1000px] w-full">
              <div className="relative h-56 md:h-96 aspect-[16/9] w-full mx-auto rounded-lg overflow-hidden shadow-xl shadow-cyan-500/10">
                <Image
                  src="/ia-ninos.jpg"
                  alt="Estudiantes en clase digital"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
              </div>
              <div className="relative h-56 md:h-96 aspect-[16/9] w-full mx-auto rounded-lg overflow-hidden shadow-xl shadow-cyan-500/10">
                <Image
                  src="/ia-oficina.jpg"
                  alt="Oficina de trabajo digital"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
              </div>
              <div className="relative h-40 md:h-60 aspect-[16/9] w-full mx-auto rounded-lg overflow-hidden shadow-xl shadow-cyan-500/10">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/br9b3-cxTPQ"
                  title="¿Qué es la IA generativa? – EducaIA"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-400">IA en el aula</h2>
            <p className="text-lg text-gray-300 mb-6">
              La inteligencia artificial está transformando la educación de maneras que apenas comenzamos a comprender.
              Desde asistentes virtuales hasta sistemas de aprendizaje adaptativo, la IA ofrece nuevas posibilidades
              para personalizar la experiencia educativa, pero también plantea importantes desafíos éticos y
              pedagógicos.
            </p>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-6 border border-gray-700">
              <h3 className="text-xl font-semibold mb-3 text-cyan-300">Actividad propuesta</h3>
              <p className="text-gray-300 mb-4">"¿Texto humano o texto generado por IA?"</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full text-sm font-medium border border-purple-700/50">
                  #EfectosDeLaTecnología
                </span>
                <span className="bg-cyan-900/50 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium border border-cyan-700/50">
                  #InteligenciaArtificial
                </span>
                <span className="bg-green-900/50 text-green-300 px-3 py-1 rounded-full text-sm font-medium border border-green-700/50">
                  #EducaciónDigital
                </span>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <InteractiveTextButton
                    label="Mostrar texto 1"
                    text="La tecnología me ayuda mucho a estudiar, sobre todo YouTube y Google. Pero a veces me distrae demasiado. Siento que aprendo más cuando hago cosas con otros, como en grupo."
                  />
                </div>
                <div className="flex-1">
                  <InteractiveTextButton
                    label="Mostrar texto 2"
                    text="La tecnología representa una oportunidad transformadora en la educación, pero también exige responsabilidad. Los entornos colaborativos digitales permiten nuevas formas de construir saberes, aunque deben estar guiados por una pedagogía crítica."
                  />
                </div>
              </div>
            </div>
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-colors">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                    <p className="text-cyan-300 leading-relaxed">
                      ¿En qué situaciones de su vida académica o personal ya usaron o vieron usar IA?
                    </p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                    <p className="text-purple-300 leading-relaxed">
                      ¿Qué oportunidades abre la IA para docentes y estudiantes? ¿Qué riesgos o desafíos plantea?
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="flex flex-col md:flex-row gap-8 mt-8">
              <div className="flex-1">
              </div>
              <div className="flex-1 flex flex-col items-center">
              </div>
            </div>
          </motion.div>
        </div>
        <div className="mt-8 flex flex-col items-center">
          <div className="w-full flex justify-center items-center mb-4">
            <div className="relative w-full max-w-5xl aspect-[16/5] bg-black rounded-lg overflow-hidden shadow-xl shadow-cyan-500/10">
              <Image
                src="/sora-explore-bar.jpg"
                alt="Vista en miniatura de Sora ChatGPT Explore"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          <div className="w-full flex justify-center gap-4 my-12">
            <a
              href="https://sora.chatgpt.com/explore"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-6 rounded-lg shadow transition-colors"
            >
              Explorar Sora ChatGPT
            </a>
            <a
              href="https://www.datalytics.com/blog/que-es-la-ia-generativa-y-como-funciona/?utm_term=ia%20generativa&utm_campaign=3+-+BLOG+-+AR+Search+-+Leva+Digital+Agency+7-3-24&utm_source=adwords&utm_medium=ppc&hsa_acc=7486748770&hsa_cam=22138853906&hsa_grp=178868411492&hsa_ad=729612081302&hsa_src=g&hsa_tgt=kwd-1673839964876&hsa_mt=p&hsa_net=adwords&hsa_ver=3&gad_source=1&gad_campaignid=22138853906&gbraid=0AAAAAD1RTVxpfxMqvLPZbnyZ2aE1_F0aE&gclid=CjwKCAjw_pDBBhBMEiwAmY02NgQhEAVvCk6-rzyA4KT38fz3h0VJyfqvIZY5_j3SC0UophEXZE50YhoC3BgQAvD_BwE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-6 rounded-lg shadow transition-colors"
            >
              Ver artículo completo
            </a>
          </div>
          <ul className="bg-gray-800/80 p-6 rounded-lg text-white text-lg max-w-2xl w-full space-y-2">
            <li>• ¿Qué es una IA generativa? <span className="text-gray-400">(texto, imagen, código, audio)</span></li>
            <li>• ¿Cómo se usa hoy en educación? <span className="text-gray-400">(asistentes, corrección, generación de recursos, personalización del aprendizaje)</span></li>
            <li>• ¿Qué preguntas éticas se abren? <span className="text-gray-400">(plagio, sesgo, dependencia tecnológica)</span></li>
          </ul>
        </div>
      </section>

      {/* Sección 7: Escenas de aprendizaje */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-900 py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-cyan-400 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Escenas de aprendizaje
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeIn}>
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-800 border-gray-700 hover:border-purple-500/50 group w-full">
                <div className="relative h-56 md:h-96 aspect-[16/6] w-full rounded-lg overflow-hidden shadow-xl shadow-purple-500/10 transform hover:scale-[1.02] transition-transform duration-500">
                  <Image
                    src="/personalizacion.jpg"
                    alt="Pulgarcita en el aula"
                    fill
                    className="object-cover transition-transform duration-500 cursor-pointer"
                    onClick={() => setLightbox({src: '/personalizacion.jpg', alt: 'Pulgarcita en el aula'})}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-purple-300">1. Pulgarcita en el aula</h3>
                  <p className="text-gray-300">
                    Una adolescente entra a clase mientras responde mensajes de voz, mira TikTok y chatea en Discord. El profesor habla de las funciones del lenguaje. Ella está, pero no está. ¿Aprende? ¿Desaprende? ¿Qué tipo de atención circula?
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-800 border-gray-700 hover:border-cyan-500/50 group w-full">
                <div className="relative h-56 md:h-96 aspect-[16/6] w-full rounded-lg overflow-hidden shadow-xl shadow-purple-500/10 transform hover:scale-[1.02] transition-transform duration-500">
                  <Image
                    src="/autonomo.jpg"
                    alt="Profe ChatGPT"
                    fill
                    className="object-cover transition-transform duration-500 cursor-pointer"
                    onClick={() => setLightbox({src: '/autonomo.jpg', alt: 'Profe ChatGPT'})}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-cyan-300">2. Profe ChatGPT</h3>
                  <p className="text-gray-300">
                    Un estudiante entrega un trabajo brillante, pero el docente duda. "¿Lo hiciste vos?". El alumno responde: "Lo armé con IA, pero aprendí mucho igual". ¿Hubo trampa o hubo proceso? ¿Qué vale más: el resultado o el trayecto?
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-800 border-gray-700 hover:border-green-500/50 group w-full">
                <div className="relative h-56 md:h-96 aspect-[16/6] w-full rounded-lg overflow-hidden shadow-xl shadow-purple-500/10 transform hover:scale-[1.02] transition-transform duration-500">
                  <Image
                    src="/colaboracion.jpg"
                    alt="Tutorial de YouTube a las 3 AM"
                    fill
                    className="object-cover transition-transform duration-500 cursor-pointer"
                    onClick={() => setLightbox({src: '/colaboracion.jpg', alt: 'Tutorial de YouTube a las 3 AM'})}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-green-300">3. Tutorial de YouTube a las 3 AM</h3>
                  <p className="text-gray-300">
                    Un joven que no entiende matemáticas encuentra a la madrugada un canal que explica con memes y ejemplos. Por primera vez, resuelve un ejercicio solo. ¿Esa escena cuenta como aprendizaje?
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-green-500/50 transition-colors">
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold text-green-400 mb-4">Nuestra Escena</h3>
                <p className="text-gray-300 leading-relaxed">
                  Relaten, creen o reconstruyan una escena significativa. Puede ser con texto, collage, video, podcast, memes, etc.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-950 text-white py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p>Alfabetización Digital 2025</p>
          <p className="text-gray-400 text-sm mt-1">IPES Florentino Ameghino</p>
        </div>
      </footer>

      {lightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center w-screen h-screen bg-black/90 backdrop-blur-sm animate-fade-in" onClick={() => setLightbox(null)}>
          <div className="relative w-screen h-screen flex flex-col items-center justify-center" onClick={e => e.stopPropagation()}>
            <button
              className="absolute top-4 right-4 text-white text-2xl bg-black/60 rounded-full w-12 h-12 flex items-center justify-center hover:bg-black/80 transition-colors z-10"
              onClick={() => setLightbox(null)}
              aria-label="Cerrar imagen ampliada"
            >
              ×
            </button>
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="w-full h-full max-w-none max-h-none object-contain rounded-lg shadow-2xl animate-zoom-in"
            />
            <div className="text-center text-white mt-4 text-lg font-medium max-w-2xl px-2 absolute bottom-8 left-1/2 -translate-x-1/2">{lightbox.alt}</div>
          </div>
        </div>
      )}
    </main>
  )
}
