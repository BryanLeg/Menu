import data from './data';
import { useState } from 'react';
import Menus from './Menus';
import Buttons from './Buttons';

function App() {
  const categories = ['all', ...new Set(data.map(data => data.category))]
  const [menus, setMenus] = useState(data);

  const categoryFilter = (category) => {
    const menuCat = data.filter(meal => {
      let categ;
      if (meal.category === category) {
        categ = meal;
      } else if (category === "all") {
        categ = data;
      }
      return categ;
    })
    setMenus(menuCat)
  }


  return (
    <main>
      <Buttons categories={categories} categoryFilter={categoryFilter} />
      <Menus menus={menus} />
    </main>
  )
}

export default App;