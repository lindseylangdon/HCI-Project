import Header from "./Header";
import CameraBox from "./CamerBox";
import ASLBox from "./ASLBox";

function App() {
  return (
    <div className="bg-mustard-yellow h-screen grid">
      <header>
        <Header></Header>
        <CameraBox></CameraBox>
        <ASLBox></ASLBox>
      </header>
    </div>
  );
}

export default App;
