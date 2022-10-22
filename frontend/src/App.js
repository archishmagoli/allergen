import './App.css';
import Header from './components/header'
import About from './components/about'
import Upload from './components/upload'

function App() {
  return (
    <div className="App">
      <Header/>
    <div className='Sections'>
      <About/>
      <Upload/>
    </div>
    </div>
  );
}

export default App;
