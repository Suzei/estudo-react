import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Sale from './components/Sale';
import Features from './components/Features'
import Personas from './components/Personas'

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Sale/>
      <Features/>
      <Personas/>
      
    </div>
  );
}

export default App;
