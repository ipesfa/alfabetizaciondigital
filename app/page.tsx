"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import ParticlesBackground from "@/components/particles-background"
import GlowEffect from "@/components/glow-effect"

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

export default function Home() {
  const scrollRef = useRef(null)
  const [lightbox, setLightbox] = useState<{src: string, alt: string} | null>(null)

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
            <motion.h2 className="text-xl md:text-2xl mb-8 text-gray-200" variants={fadeIn}>
              Un viaje por la cultura digital, la inteligencia artificial y la educación del siglo XXI.
            </motion.h2>
            <motion.p className="text-lg md:text-xl italic max-w-2xl mx-auto mb-12 text-gray-300" variants={fadeIn}>
              "No se trata solo de usar tecnología, sino de comprender cómo nos transforma."
            </motion.p>
            <motion.div variants={fadeIn}>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white border-none text-lg px-8 py-6 rounded-full shadow-lg shadow-purple-500/20 transition-all duration-300 hover:scale-105">
                Comenzar el viaje
              </Button>
            </motion.div>
            {/* Nombre del profesor, moderno y centrado debajo del botón */}
            <div className="w-full flex justify-center md:justify-end mt-28">
              <span className="relative text-xl md:text-2xl font-semibold tracking-wide text-cyan-300 opacity-80 px-4 md:pr-16 backdrop-blur-sm">
                Prof. Leonardo Nausan
                <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-1/2 h-0.5 bg-cyan-300/40 rounded-full animate-pulse"></span>
              </span>
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

      {/* Sección 2: Pulgarcita */}
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

      {/* Sección 3: IA en el aula */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-950 py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col gap-4 h-[1000px] md:h-[1200px] w-full">
              <div className="relative flex-1 h-40 md:h-60 rounded-lg overflow-hidden shadow-xl shadow-cyan-500/10 transform hover:scale-[1.02] transition-transform duration-500">
                <Image
                  src="/ia-ninos.jpg"
                  alt="Estudiantes en clase digital"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
              </div>
              <div className="relative flex-1 h-40 md:h-60 rounded-lg overflow-hidden shadow-xl shadow-cyan-500/10 transform hover:scale-[1.02] transition-transform duration-500">
                <Image
                  src="/ia-oficina.jpg"
                  alt="Oficina de trabajo digital"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
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
            <div className="flex flex-col md:flex-row gap-8 mt-8">
              <div className="flex-1">
                <div className="relative h-64 md:h-80 max-w-2xl w-full mx-auto rounded-lg overflow-hidden shadow-xl shadow-cyan-500/10 aspect-[16/6]">
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
              href="https://www.datalytics.com/blog/que-es-la-ia-generativa-y-como-funciona/?utm_term=ia%20generativa&utm_campaign=3+-+BLOG+-+AR+Search+-+Leva+Digital+Agency+7-3-24&utm_source=adwords&utm_medium=ppc&hsa_acc=7486748770&hsa_cam=22138853906&hsa_grp=178868411492&hsa_ad=729612081302&hsa_src=g&hsa_tgt=kwd-1673839964876&hsa_kw=ia%20generativa&hsa_mt=p&hsa_net=adwords&hsa_ver=3&gad_source=1&gad_campaignid=22138853906&gbraid=0AAAAAD1RTVxpfxMqvLPZbnyZ2aE1_F0aE&gclid=CjwKCAjw_pDBBhBMEiwAmY02NgQhEAVvCk6-rzyA4KT38fz3h0VJyfqvIZY5_j3SC0UophEXZE50YhoC3BgQAvD_BwE"
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

      {/* Sección 4: Escenas de aprendizaje */}
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
                    alt="Personalización con IA"
                    fill
                    className="object-cover transition-transform duration-500 cursor-pointer"
                    onClick={() => setLightbox({src: '/personalizacion.jpg', alt: 'Personalización con IA'})}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-purple-300">Personalización con IA</h3>
                  <p className="text-gray-300">
                    Una docente usando ChatGPT para personalizar ejercicios de lectura adaptados a las necesidades
                    específicas de cada estudiante.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-800 border-gray-700 hover:border-cyan-500/50 group w-full">
                <div className="relative h-56 md:h-96 aspect-[16/6] w-full rounded-lg overflow-hidden shadow-xl shadow-purple-500/10 transform hover:scale-[1.02] transition-transform duration-500">
                  <Image
                    src="/autonomo.jpg"
                    alt="Aprendizaje autónomo"
                    fill
                    className="object-cover transition-transform duration-500 cursor-pointer"
                    onClick={() => setLightbox({src: '/autonomo.jpg', alt: 'Aprendizaje autónomo'})}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-cyan-300">Aprendizaje autónomo</h3>
                  <p className="text-gray-300">
                    Un estudiante aprendiendo programación con YouTube y foros, desarrollando habilidades de autogestión
                    del conocimiento.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-800 border-gray-700 hover:border-green-500/50 group w-full">
                <div className="relative h-56 md:h-96 aspect-[16/6] w-full rounded-lg overflow-hidden shadow-xl shadow-purple-500/10 transform hover:scale-[1.02] transition-transform duration-500">
                  <Image
                    src="/colaboracion.jpg"
                    alt="Trabajo colaborativo"
                    fill
                    className="object-cover transition-transform duration-500 cursor-pointer"
                    onClick={() => setLightbox({src: '/colaboracion.jpg', alt: 'Trabajo colaborativo'})}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-green-300">Colaboración digital</h3>
                  <p className="text-gray-300">
                    Estudiantes colaborando en un proyecto utilizando herramientas digitales para la creación colectiva
                    de conocimiento.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative w-full rounded-lg overflow-hidden shadow-xl shadow-purple-500/10 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-full aspect-[16/6] bg-[#F4F4F4] border border-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://padlet.com/embed/stncg6n3iar0eqpz"
                frameBorder="0"
                allow="camera;microphone;geolocation;display-capture;clipboard-write"
                style={{ width: '100%', height: '100%', display: 'block' }}
                className="w-full h-[350px] md:h-[608px]"
                title="Padlet colaborativo"
              ></iframe>
              <div className="flex items-center justify-end h-7">
                <a href="https://padlet.com?ref=embed" target="_blank" rel="noopener noreferrer">
                  <img src="https://padlet.net/embeds/made_with_padlet_2022.png" width="114" height="28" alt="Hecho con Padlet" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sección 5: Aula en acción */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-950 py-16 px-4 sm:px-6">
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

      {/* Sección 6: Acción */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-900 py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-400">Acción</h2>
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
                <li><b>Subida obligatoria</b> al Padlet colaborativo.</li>
              </ul>
            </div>
          </div>
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

function FlipCard({ frontText, backText, color }: { frontText: string; backText: string; color: string }) {
  const [flipped, setFlipped] = useState(false)
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
          className={`absolute w-full h-full flex items-center justify-center bg-gray-900 border border-${color}-700 rounded-lg p-6 shadow-lg backface-hidden`}
        >
          <span className="text-white text-lg font-semibold">{frontText}</span>
        </div>
        {/* Back */}
        <div
          className={`absolute w-full h-full flex items-center justify-center bg-gray-900 border border-${color}-700 rounded-lg p-6 shadow-lg rotate-y-180 backface-hidden`}
        >
          <span className="text-white text-base text-center">{backText}</span>
        </div>
      </div>
    </div>
  )
}

function InteractiveTextButton({ label, text }: { label: string; text: string }) {
  const [show, setShow] = useState(false)
  return (
    <div>
      <button
        className="w-full bg-cyan-900/50 text-cyan-300 border border-cyan-700/50 rounded-lg px-4 py-2 font-semibold mb-2 hover:bg-cyan-800 transition-colors"
        onClick={() => setShow((s) => !s)}
        type="button"
      >
        {show ? "Ocultar" : label}
      </button>
      {show && (
        <div className="bg-gray-900 text-white rounded-lg p-4 shadow mt-2 text-base text-center animate-fade-in">
          {text}
        </div>
      )}
    </div>
  )
}
