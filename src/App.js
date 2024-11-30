// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TaskBoard from './components/TaskBoard/TaskBoard';

function App() {
  return (
      <div className="App">
          <Header />
          <TaskBoard />
          <Footer activeTasks={5} finishedTasks={10} />
      </div>
  );
}

export default App;
