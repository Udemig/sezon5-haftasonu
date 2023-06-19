import { Routes, Route } from "react-router-dom";

/**
 * Eğer klasör ismini yazarsak o klasör altındaki index.js veya index.jsx
 * dosyalarını arar, eğer bulursa import eder, bulamazsa hata verir.
 */
import Header from "./components/header";
import Footer from "./components/footer";
import MainPage from "./pages/main-page";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route index element={<MainPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
