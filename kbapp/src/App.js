import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/scss/common.scss'

import GAListScreen from "./screens/GAListScreen";
import HomeScreen from "./screens/HomeScreen";


function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<HomeScreen/>}></Route>
              <Route path='/gaInfo' element={<GAListScreen/>}></Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
