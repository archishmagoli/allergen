import './App.css'
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import About from './components/About/About.jsx';
import Upload from './components/Upload/Upload.jsx';

function App() {
  return (
    <>
      <div className="App">
        <Header/>
        <div className='Sections'>
          <About/>
          <Upload/>
        </div>

        <Footer/>
      </div>
    </>
  )
}

export default App
