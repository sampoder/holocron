import "./App.css";
import Holocron from "@sampoder/holocron";

function Title() {
  return <h1 style={{ color: "white" }}>The Hello World!</h1>;
}

function LaunchButton() {
  return <button style={{ color: "white" }}>Play</button>;
}

function FullscreenButton() {
  return <button style={{ color: "white" }}>Fullscreen</button>;
}

function App() {
  return (
    <div className="App">
      <Holocron
        title={<Title />}
        backgroundColor="#8492a6"
        launch={<LaunchButton />}
        fullscreen={<FullscreenButton />}
      >
        <p style={{ color: "white" }}>
          <img
            src="https://cloud-oyha4bho9.vercel.app/0screenshot_20201227-111151_jedi_challenges.jpg"
            alt="Jedi Challenges Setup"
          />
        </p>
      </Holocron>
    </div>
  );
}

export default App;
