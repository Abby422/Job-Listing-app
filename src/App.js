import React, { useState } from "react";
import "./App.css";
import Filter from "./Components/Filter";
import Header from "./Components/Header";
import Tablet from "./Components/Tablet";
import data from "./data.json";
import { tabletContext } from "./context/tablets";

function App() {
  const [search, setSearch] = useState([]);
  // const [render, setrender] = useState(true)

  return (
    <tabletContext.Provider
      value={{
        search,
        setSearch,
      }}
    >
      <div className="App">
        <Header />
        <div className="Main">
          {search.length > 0 ? (
            <div className="searchBar">
              <div className="searchBar-content">
                {/* "hello" */}
                <Filter />
              </div>
              <button onClick={() => setSearch([])}>Clear</button>
            </div>
          ) : null}
          {search
            ? data.filter(value => search.every(item => value.languages.concat(value.role, value.level, value.tools).includes(item))).map((company) => (
                <div key={company.id}>
                  <Tablet company={company}  />
                </div>
              ))
            : data.map((company) => (
                <div key={company.id}>
                  <Tablet company={company}  />
                </div>
              ))}
              {/* {filtered } */}
        </div>
      </div>
    </tabletContext.Provider>
  );
}

export default App;
