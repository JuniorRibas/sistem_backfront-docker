import React, { useCallback, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState();
  const getData = useCallback(async () => {
    const dados = await axios.get("http://localhost:3333/dados");
    setData(dados.data);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          App in Docker!!
        </a>
        <h1>{JSON.stringify(data)}</h1>
      </header>
    </div>
  );
}

export default App;
