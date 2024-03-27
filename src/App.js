import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ImageDisplay from './components/ImageDisplay';
import Atendimento from './components/images/Atendimento.jpeg';
import Experiencia from './components/images/Experiencia.jpeg';
// ... importe todas as outras imagens

const images = {
  atendimento: Atendimento,
  experiencia: Experiencia,
};

const App = () => {
  return (
    <Router>
      <Sidebar />
      
      <Routes>
        <Route path="/:imageName" element={<ImageDisplay images={images} />} />
      </Routes>
    </Router>
  );
};

export default App;
