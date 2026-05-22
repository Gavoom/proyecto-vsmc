import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'
import CrearRepositorio from './components/CrearRepositorio'
import BuscarRepositorios from './components/BuscarRepositorio'


function App() {
  // --- CEREBRO / BACKEND (No tocar) ---
  const [mods, setMods] = useState([])
  const [filtroLoader, setFiltroLoader] = useState('Todos')
  const [filtroVersion, setFiltroVersion] = useState('Todas')

  // Por defecto, arrancamos en la vista principal
  const [vistaActual, setVistaActual] = useState('inicio')

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

  // --- TU HTML (Lienzo en blanco) ---
  return (
    <div className="contenedor">

      <div className="img-principal">
        <img src='/dihsusbackgroundlogo.png' alt="dihsuslogo" />
      </div>

      <div className="botonesSuperiores">
        <button id="inicio" className="btnS" onClick={() => setVistaActual('inicio')}>Menu Principal</button>
        <button id="buscarR" className="btnS" onClick={() => setVistaActual('buscar')}>Buscar Repositorios</button>
        <button id="crearR" className="btnS" onClick={() => setVistaActual('crear')}>Crear Repositorios</button>
      </div>
      
      {vistaActual  === 'inicio' &&(
        <>
          <h1 id="titulo">Biblioteca Personal de <strong>Mods de Minecraft</strong></h1>
          <p id="intro">Esta pagina es un repositorio digital creado para centralizar tus modificaciones de Minecraft.
            Diseñado para simplificar la gestión de archivos,
            permitiéndote almacenar y organizar tu colección en un solo lugar.
            Sube tus archivos, clasifícalos por loader y mantén un registro ordenado
            de las herramientas que dan forma a tu mundo.</p>

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
        </>
      )}
      
      {vistaActual === 'crear' && (
        <section className="zonaFormulario">
          <CrearRepositorio />
        </section>
      )}

      {vistaActual === 'buscar' && (
        <section className="zonaBuscador">
          <BuscarRepositorios />
        </section>
      )}

    </div>
  )
}
export default App