import droneLogo from '/drone.svg'
import './App.css'

function App() {
  return (
    <>
      <div>
        <a href="https://github.com/szympol/tello-drone-ts" target="_blank">
          <img src={droneLogo} className="logo" alt="Drone logo" />
        </a>
      </div>
      <h1>Trello Drone</h1>
    </>
  )
}

export default App
