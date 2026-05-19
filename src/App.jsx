import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'
import FormularioSubida from './components/FormularioSubida'

function App() {
  // --- CEREBRO / BACKEND (No tocar) ---
  const [mods, setMods] = useState([])
  const [filtroLoader, setFiltroLoader] = useState('Todos')
  const [filtroVersion, setFiltroVersion] = useState('Todas')

  const obtenerMods = async () => {
    let query = supabase.from('mods').select('*')
    if (filtroLoader !== 'Todos') query = query.eq('loader', filtroLoader)
    if (filtroVersion !== 'Todas') query = query.eq('version', filtroVersion)
    const { data, error } = await query
    if (!error) setMods(data)
  }

  useEffect(() => {
    obtenerMods()
  }, [filtroLoader, filtroVersion])
  // ------------------------------------

  // --- TU HTML (Lienzo en blanco) ---
  return (
    <div className="contenedor">

      <p id="linea1"></p>
      <h1 id="titulo">¡Biblioteca Personal de Mods de Minecraft!</h1>
      <p id="intro">Esto es un proyecto de prueba, 
        en el cual sirve de repositorio para subir y descargar mods de Minecraft 
        de manera ordenada y sencilla</p>

        <div className="img-principal">
          <img src="/image-10.jpg" className="mc_img" alt="imagen_1" />
          <img src="/tel-aviv-impressed-tel-aviv.png" className="mc_img" alt="imagen_2" />
          <img src="/136f9e68a80960d84354a4a6ad3f6485.jpg" className="mc_img" alt="imagen_3" />
        </div>

      <section className="zonaFormulario">
        <FormularioSubida />
      </section>

      <p id="linea2"></p>
    </div>
  )
}
export default App