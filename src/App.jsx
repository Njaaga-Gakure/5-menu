import { Menu, Categories } from "./components";
import { useState } from "react";
import data from './data'
const categories = ['all', ...new Set(data.map(item => item.category))]

const App = () => {
  const [menu, setMenu] =useState(data)
  const filterCategories = (category) => {
  const newMenu = category === 'all' ? data : data.filter(item => item.category === category)
  setMenu(newMenu)
  }
  return (
    <main className="container">
      <h1 className="title"><span>our</span> menu</h1>
      <Categories categories={categories} filterCategories={filterCategories}/>
      <Menu menu={menu}/>
    </main>
  )
};
export default App;
