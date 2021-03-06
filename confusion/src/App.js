import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar light color="primary">
        <div className='container'>
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
