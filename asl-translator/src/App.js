import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./pages/Error";
import History from "./pages/History";
import TranslationBox from "./components/TranslationBox";

function App() {
  return (
    <Router>
        <div className="bg-mustard-yellow h-screen grid">
            <header>
            <Header />
            <Routes>
                <Route path='/' element={<TranslationBox />} />
                <Route path='/error' element={<Error />} />
                <Route path='/history' element={<History />} />
            </Routes>
            </header>
            <Footer />
        </div>
    </Router>
  );
}

export default App;