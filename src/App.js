import './App.css';
import React, {useState} from "react";
import {Header} from "./components/Header";
import {LeagueList} from "./components/LeagueList";





function App() {
    const [allLeagues, setAllLeagues] = useState([]);
    console.log(allLeagues);


   /* const options = {
        method: 'GET',
        headers: {
            'X-Auth-Token': '6514a50db6064d86a774da3072668946'
        }
    };

    fetch('https://api.football-data.org/v2/competitions/', options)
        .then(response => response.json())
        .then(data => console.log(data.competitions))
        .then(data => setAllLeagues(data.competitions))*/

  return (
    <div className="app">
      <Header />
      <div>
          <LeagueList allLeagues={allLeagues} setAllLeagues={setAllLeagues}/>
      </div>
    </div>
  );
}

export default App;
