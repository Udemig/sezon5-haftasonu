import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Anasayfa</h1>} />
        <Route path="/new" element={<h1>Yeni Oluştur</h1>} />

        <Route path="/:id">
          <Route index element={<h1>Detay Sayfası</h1>} />
          <Route path="edit" element={<h1>Düzenleme Sayfası</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
