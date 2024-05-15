import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import About from './components/About/About.jsx';
import Upload from './components/Upload/Upload.jsx';

function App() {

  const [data, setData] = useState(null);

  // const fetchData = async () => {
  //   const response = await axios.get('http://localhost:5000/api');
  //   setData(response.data.message);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <>
      <div className="App">
        <Header/>

        {/* {data && <h1>{data}</h1>} */}
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
