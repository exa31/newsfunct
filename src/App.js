import { useState } from "react";
import Home from "./components";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

function App() {

  // state untuk menyimpan value dari search
  const [searchValue, setSearchValue] = useState('marvel')

  // function untuk menghandle search dan mengirimkan value ke parent component
  const handleSearch = (query) => {
    setSearchValue(query)
  }

  return (
    <div className="App">
      <Navbar />
      <Search setSearchValue={handleSearch} />
      <Home searchValue={searchValue} />
    </div>
  );
}

export default App;
