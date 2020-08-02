import React from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'
import CategoriasProvider from './contents/CategoriaContext'
import RecetasProvider from './contents/RecetasContext'
import ListRecetas from './components/ListRecetas'
import ModalProvider from './contents/ModalContext'
function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
       <ModalProvider> 
    <div className="App">
      <Header/> 
      <Formulario/> 
     <ListRecetas/> 
    </div>
    </ModalProvider>
    </RecetasProvider>
    </CategoriasProvider> 
  );
}

export default App;
