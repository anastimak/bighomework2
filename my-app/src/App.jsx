import './App.css';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer'
import { Catalog } from './components/Catalog';


function App() {
  return (
    <div className="App">
      <Header />
      <Catalog />
      <Footer />
    </div>
  );
}

export default App;
