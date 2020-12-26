# 🥽 holocron
Use your Jedi Challenges headset for anything!


[![NPM](https://img.shields.io/npm/v/@sampoder/holocron.svg)](https://www.npmjs.com/package/@sampoder/holocron) 

## Install

```bash
npm install --save @sampoder/holocron 
yarn add @sampoder/holocron 
```

## Usage

```jsx
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
```

## License

MIT © [sampoder](https://github.com/sampoder)
