
import './App.css';
import Body from './componentes/body/body';
import Footer from './componentes/footer/footer';
import Header from './componentes/header/header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Body title="Ejercicio React" 
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, 
      quis nostrud exercitation"/>
      <Footer footerText="Copyright 2022"/>
      
    </div>
  );
}

export default App;
