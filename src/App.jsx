import './App.css';
import Calendar from './components/Calendar';
import Button from './components/Button';


function App() {
  
  return (
    <>
      <div className="justify-center
                      max-w-screen-md w-full min-h-screen mx-auto 
                      border-x-2 bg-white">

        <div className="border-b-2 font-semibold px-6 py-4"> 
          <h1 className="text-black">Calendar</h1>
          <p>Built with React + Vite</p>
        </div>

        
        <div className="grid px-6 py-4 gap-4">
          <Button />
          <Calendar />
        </div>
      
      </div>
    </>
  )
}

export default App
