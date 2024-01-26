import Header from "./components/Header";
import Input from "./components/Input";
import List from "./components/List";
import React from "react";
const App = () => {
  const [searchItem, setSearchItem] = React.useState('');

  function getSearchItem(value) {
    setSearchItem(value);
  }

  return (
    <div>
      <Header />
      <Input innerText={'Enter name or emoji'} getItem={getSearchItem} value={searchItem} />
      <List query={searchItem} />
    </div>
  )
}

export default App;