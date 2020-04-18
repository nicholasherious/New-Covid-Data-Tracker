import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SingleList from './SingleList';

function Listing() {
  const [stateList, setStateList] = useState([]);

  useEffect(() => {
    const STATE_URL = `https://covidtracking.com/api/v1/states/current.json`;
    const fetchData = async () => {
      try {
        const response = await axios.get(STATE_URL);
        setStateList(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {stateList.map((stateData, index) => (
        <SingleList key={index} stateData={stateData} />
      ))}
    </div>
  );
}

export default Listing;
