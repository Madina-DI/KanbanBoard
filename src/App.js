// import logo from './logo.svg';
import './App.css';
// import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TaskBoard from './components/TaskBoard/TaskBoard';
import mockData from './data/mockData.js';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState (mockData);

  useEffect (() => {
    const storedData = localStorage.getItem('kambanData');
    if (storedData) {
      setData(JSON.parse(storedData));
    } else {
      setData(mockData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('kanbanData', JSON.stringify(data));
  }, [data]);

  return (
      <div className="App">
        <Header />
        <TaskBoard data={data} setData={setData} />
        <Footer activeTasks={data[0]?.issues.length || 0} finishedTasks={data[3]?.issues.length || 0} />
        </div>
  );
};

export default App;
