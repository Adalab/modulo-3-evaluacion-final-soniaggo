// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './styles/index.scss';
// import App from './App.jsx'
// import { HashRouter } from 'react-router-dom';

// createRoot(document.getElementById('root')).render(
//   <HashRouter>

//   <StrictMode>
//     <App />
//   </StrictMode>



//   </HashRouter>

// )
// main.jsx
import React from 'react'; // React se importa para JSX
import { createRoot } from 'react-dom/client'; // Para renderizar tu aplicación React 18+
import './styles/index.scss'; // Importa tus estilos globales
import App from './App.jsx'; // Importa tu componente principal App
import { HashRouter } from 'react-router-dom'; // Importa HashRouter para enrutamiento basado en hash

// Localiza el elemento 'root' en tu archivo index.html para montar la aplicación React
const root = createRoot(document.getElementById('root'));

// Renderiza la aplicación React
root.render(
  // HashRouter envuelve toda la aplicación para proporcionar las funcionalidades de enrutamiento
  <HashRouter>
    {/* StrictMode es una herramienta de React para identificar problemas potenciales
        en la aplicación durante el desarrollo. Envuelve tu componente principal (App). */}
    <React.StrictMode>
      {/* El componente principal de tu aplicación */}
      <App />
    </React.StrictMode>
  </HashRouter>
);