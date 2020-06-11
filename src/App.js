import React, {Fragment} from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Sidebar from './components/sidebar/Sidebar';
import Footer from './components/footer/Footer';
import Container from './components/container/Container';

export default function App() {

  /* Datos dinamicos Heder */
  let objHeder = {
    titulo: "Hola mundo este es mi primer pagina en ReactJS",
    parrafo: "Soy el subtitulo"
  }

  /* Datos dinamicos footer */
  const fecha = new Date().getFullYear();

  return (
     
    <Fragment>
      <Header
        titulo={objHeder.titulo}
        parrafo={objHeder.parrafo}
      />
      <Nav/>

      <div className="container" style={{marginTop:'30px'}}>
        <div className="row">
          <Sidebar/>
          <Container/>
        </div>
      </div>

      <Footer
        fecha={fecha}
      />
    </Fragment>

  );
}