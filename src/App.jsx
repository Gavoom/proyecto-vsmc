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

  const imagenes = [
  "/gsuspartido.jpg",
  "/hydra.jpg",
  "/mizona.png"
];

  useEffect(() => {
    obtenerMods()
  }, [filtroLoader, filtroVersion])



  // ------------------------------------

  // --- TU HTML (Lienzo en blanco) ---
  return (
    <div className="contenedor">

      <div className="img-principal">
        <img src='/dihsusbackgroundlogo.png' alt="dihsuslogo" />
      </div>

      <div className="botonesSuperiores">
        <button id="inicio" className="btnS">Menu Principal</button>
        <button id="buscarR" className="btnS">Buscar Repositorios</button>
        <button id="crearR" className="btnS">Crear Repositorios</button>
      </div>
      
      <h1 id="titulo">¡Biblioteca Personal de Mods de Minecraft!</h1>
      <p id="intro">Esto es un proyecto de prueba, 
        en el cual sirve de repositorio para subir y descargar mods de Minecraft 
        de manera ordenada y sencilla</p>
      
      <div className="grupo-tarjetas">
  
      {/* Imagen 1 */}
      <div className="tarjeta-contenedor">
        <img src="/terror1.jpg" alt="Mod 1" className="tarjeta-img" />
        <div className="tarjeta-descripcion">
          <h3>Crear Repositorios</h3>
          <p>Puedes crear repositorios los cuales puedes subir mods filtrandolo por su tipo y version.</p>
        </div>
      </div>

      {/* Imagen 2 */}
      <div className="tarjeta-contenedor">
        <img src="/terror2.jpg" alt="Mod 2" className="tarjeta-img" />
        <div className="tarjeta-descripcion">
          <h3>Descargar Repositorios</h3>
          <p>Puedes buscar repositorios los cuales por un filtro, puedes descargarlos con total facilidad con un menu totalmente intuitivo.</p>
        </div>
      </div>

      {/* Imagen 3 */}
      <div className="tarjeta-contenedor">
        <img src="/terror3.png" alt="Mod 3" className="tarjeta-img" />
        <div className="tarjeta-descripcion">
          <h3>Buscar Repositorios</h3>
          <p>Filtro intuitivo para encontrar la cantidad extensa de repositorios disponibles.</p>
        </div>
      </div>

    </div>

      <section className="zonaFormulario">
        <FormularioSubida />
      </section>

    </div>
  )
}
export default App