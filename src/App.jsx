import './App.css';
import Calendar from './components/Calendar';
import Button from './components/Button';


function App() {
  
  return (
    <>
      <div className="justify-center transition fade-right
                      max-w-screen-md w-full min-h-screen mx-auto
                      border-x-2 bg-white">
        
        <header className="border-b-2 border-[#eeeeee] font-semibold px-6 py-4"> 
          <h1 className="text-black">Calendar</h1>
          <p>Built with React + Vite</p>
        </header>

        
        <div className="grid px-6 py-4 gap-4 transition fade-up">
          <section>
            <Button />
          </section>
          <section>
            <Calendar />
          </section>
        </div>
      
      </div>
    </>
  )
}

export default App
