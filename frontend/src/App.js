import './App.css';
import Header from './components/header'
import About from './components/about'
import Upload from './components/upload'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <Header/>
    <div className='Sections'>
      <About/>
      <Upload/>
    </div>

    <Footer/>
    </div>
  );
}

export default App;
