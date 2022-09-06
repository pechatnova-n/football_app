import './App.css';
import React, {useContext, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {LeagueContext} from "./context";
import {Layout} from "./pages/Layout";
import {HomePage} from "./pages/HomePage";
import {LeagueDetail} from "./components/LeagueDetail";


function App() {
    const [allLeagues, setAllLeagues] = useState([]);
    console.log(allLeagues);


  return (
      <LeagueContext.Provider value={{
          allLeagues,
          setAllLeagues,
      }}>
          <BrowserRouter>
              <div className="app">
                  <Routes>
                      <Route path='/' element={<Layout />}>
                          <Route index element={<HomePage  />} />
                          <Route element={<LeagueDetail />} path='/leagues/:name' />
                      </Route>
                  </Routes>
              </div>
          </BrowserRouter>
      </LeagueContext.Provider>
  );
}

export default App;
