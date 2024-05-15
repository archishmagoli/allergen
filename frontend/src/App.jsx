import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';

function App() {

  const [data, setData] = useState(null);

  const fetchData = async () => {
    const response = await axios.get('http://localhost:5000/api');
    setData(response.data.message);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      {data && <h1>{data}</h1>}
      <Footer />
    </>
  )
}

export default App
