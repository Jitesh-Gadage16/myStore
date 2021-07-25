import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import CatHeader from './components/catHeader/CatHeader';

const App = () => {
  return (
    <>
      <Navbar />
      <CatHeader />
    </>
  )
}

export default App;
