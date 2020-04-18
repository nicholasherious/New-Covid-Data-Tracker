import React, { useState, useEffect } from 'react';
import Main from './components/Main';
import HeaderMain from './components/HeaderMain';
import axios from 'axios';
import Listing from './components/Listing';
import { Container } from 'semantic-ui-react';

function App() {
  const [covidData, setCovidData] = useState([]);

  useEffect(() => {
    const URL = `https://covidtracking.com/api/v1/us/current.json`;
    const fetchData = async () => {
      try {
        const response = await axios.get(URL);
        const data = response.data[0];
        setCovidData(data);
      } catch (error) {
        console.error(error);
      } finally {
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <HeaderMain covidData={covidData} />
      <Main covidData={covidData} />
      <Listing />
    </Container>
  );
}

export default App;
