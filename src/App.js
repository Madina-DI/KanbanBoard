import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskDetails from './components/TaskDetails/TaskDetails';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TaskBoard from './components/TaskBoard/TaskBoard';
import mockData from './data/mockData.js';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState(null);
// localStorage.removeItem('kanbanData');

  useEffect (() => {
    const storedData = localStorage.getItem('kanbanData');
    if (storedData) {
      setData(JSON.parse(storedData));
    } else {
      setData(mockData);
      localStorage.setItem('kanbanData', JSON.stringify(mockData));

    }
  }, []);

  useEffect(() => {
    if(data) {
    console.log('Данные сохранены:', data);
    localStorage.setItem('kanbanData', JSON.stringify(data));
  } 
  }, [data]);

  return (
    <Router>    
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<TaskBoard data={data} setData={setData} />} />
          <Route path='/tasks/:id' element={< TaskDetails data={data} setData={setData} />} />
        </Routes>
        <Footer 
          activeTasks={data ? data[0]?.issues.length || 0 : 0}
          finishedTasks={data ? data[3]?.issues.length || 0 :0} 
        />
      </div>
    </Router>
  );
};

export default App;
