import { useState } from 'react'

export default function CrearRepositorio() {

const [nombreMod, setNombreMod] = useState('')

  return (
    <div className="formulario-contenedor">
      <h2 className="titulo-form">Crear Nuevo Repositorio</h2>
      
      <form className="form-estilo">
        
        {/* 1. Nombre del Repositorio */}
        <div className="grupo-input">
          <label>Nombre del Repositorio:</label>
          <input type="text" placeholder="Ej: Pack Survival Extremo..." />
        </div>

        {/* 2. Loader (Radio Buttons) */}
        <div className="grupo-input">
          <label>Selecciona el Loader:</label>
          <div className="radio-grupo">
            <label>
              <input type="radio" name="tipoLoader" value="Forge" /> Forge
            </label>
            <label>
              <input type="radio" name="tipoLoader" value="Fabric" /> Fabric
            </label>
          </div>
        </div>

        {/* 3. Versión (Lista desplegable) */}
        <div className="grupo-input">
          <label>Versión de Minecraft:</label>
          <select>
            <option value="1.21.11">1.21.11</option>
            <option value="1.21.10">1.21.10</option>
            <option value="1.21.9">1.21.9</option>
            <option value="1.21.8">1.21.8</option>
            <option value="1.21.7">1.21.7</option>
            <option value="1.21.6">1.21.6</option>
            <option value="1.21.5">1.21.5</option>
            <option value="1.21.4">1.21.4</option>
            <option value="1.21.3">1.21.3</option>
            <option value="1.21.2">1.21.2</option>
            <option value="1.21.1">1.21.1</option>
            <option value="1.21">1.21</option>
            <option value="1.20.6">1.20.6</option>
            <option value="1.20.5">1.20.5</option>
            <option value="1.20.4">1.20.4</option>
            <option value="1.20.3">1.20.3</option>
            <option value="1.20.2">1.20.2</option>
            <option value="1.20.1">1.20.1</option>
            <option value="1.20">1.20</option>
            <option value="1.19.4">1.19.4</option>
            <option value="1.19.3">1.19.3</option>
            <option value="1.19.2">1.19.2</option>
            <option value="1.19.1">1.19.1</option>
            <option value="1.19">1.19</option>
            <option value="1.18.2">1.18.2</option>
            <option value="1.18.1">1.18.1</option>
            <option value="1.18">1.18</option>
            <option value="1.17.1">1.17.1</option>
            <option value="1.17">1.17</option>
            <option value="1.16.5">1.16.5</option>
            <option value="1.16.4">1.16.4</option>
            <option value="1.16.3">1.16.3</option>
            <option value="1.16.2">1.16.2</option>
            <option value="1.16.1">1.16.1</option>
            <option value="1.16">1.16</option>
            <option value="1.15.2">1.15.2</option>
            <option value="1.15.1">1.15.1</option>
            <option value="1.15">1.15</option>
            <option value="1.14.4">1.14.4</option>
            <option value="1.14.3">1.14.3</option>
            <option value="1.14.2">1.14.2</option>
            <option value="1.14.1">1.14.1</option>
            <option value="1.14">1.14</option>
            <option value="1.13.2">1.13.2</option>
            <option value="1.13.1">1.13.1</option>
            <option value="1.13">1.13</option>
            <option value="1.12.2">1.12.2</option>
          </select>
        </div>

        <button type="button" className="btn-enviar">Crear Repositorio</button>
        
      </form>
    </div>
  )
}