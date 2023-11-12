import Header from "./Header";
import CameraBox from "./CamerBox";
import ASLBox from "./ASLBox";
import CameraLabel from "./CameraLabel";
import ASLLabel from "./ASLLabel";

function App() {
  return (
    <div className="bg-mustard-yellow h-screen">
      <header>
        <Header></Header>
        <CameraLabel></CameraLabel>
        <CameraBox></CameraBox>
        <ASLLabel></ASLLabel>
        <ASLBox></ASLBox>
      </header>
    </div>
  );
}

export default App;
