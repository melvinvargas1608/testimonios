import './App.css'
import Testimonio from './components/Testimonio' // Exportación por defecto

function App() {
  
  return (
    <main className='app'>
      <div className='container-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio 
          name='Shawn Wang'
          country='Singapur'
          img='shawn'
          position='Ingeniero de software'
          company='Amazon'
          testimony='Da miedo cambiar de carrera. Solo gané confianza en que podía codificar trabajando durante cientos de horas de lecciones gratuitas en freeCodeCamp. En un año tenía un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida' 
        />
      </div>
    </main>
  )
}

export default App