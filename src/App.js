import './App.css';
import React, {useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from "./pages/Layout";
import {LeagueDetail} from "./components/LeagueDetail";
import {LeagueList} from "./components/LeagueList";
import {TeamsList} from "./components/TeamsList";


function App() {
    const [allLeagues, setAllLeagues] = useState([]);
    //console.log(allLeagues);


  return (
          <BrowserRouter>
              <div className="app">
                  <Routes>
                      <Route path='/' element={<Layout />}>
                          <Route index element={<LeagueList allLeagues={allLeagues} setAllLeagues={setAllLeagues}  />} />
                          <Route element={<LeagueDetail />} path='/leagues/:name' />
                          <Route element={<TeamsList />} path='/teams' />
                      </Route>
                  </Routes>
              </div>
          </BrowserRouter>
  );
}

export default App;
