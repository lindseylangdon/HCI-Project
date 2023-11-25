import Header from "./Header";
import CameraBox from "./TranslationBox";
import Footer from "./Footer";

function App() {
  return (
    <div className="bg-mustard-yellow h-screen grid">
      <header>
        <Header></Header>
        <CameraBox></CameraBox>
      </header>
      <Footer></Footer>
    </div>
  );
}

export default App;
