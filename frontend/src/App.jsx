import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

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
      {data && <h1>{data}</h1>}
    </>
  )
}

export default App
