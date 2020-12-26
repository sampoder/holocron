import './App.css'
import Holocron from '@sampoder/holocron'

function Title(){
  return <h1 style={{ color: 'white' }}>The Hello World!</h1>
}

function LaunchButton(){
  return <button style={{ color: 'white' }}>Play</button>
}

function FullscreenButton(){
  return <button style={{ color: 'white' }}>Fullscreen</button>
}

function App() {
  return (
    <div className='App'>
      <Holocron
        title={<Title />}
        backgroundColor='#8492a6'
        launch={<LaunchButton />}
        fullscreen={<FullscreenButton />}
      >
        <p style={{ color: 'white', paddingTop: '30px' }}>Hello World</p>
      </Holocron>
    </div>
  )
}

export default App
