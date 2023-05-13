import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer'
import Main from './components/Main';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

  console.log('APP render');

  return (
    <div className="App">
      <Header />

      <Main />

      <Footer />
    </div>
  );
}

export default App;
