import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [categoryName, setCategory] = useState(items)
  const [filterBy, setFilterBy] = useState("Filter by category");

  function handleFilterChange(event) {
    setFilterBy(event.target.value);
  }


  const selectedCategory = categoryName.filter((category) => {
    if (filterBy === "Filter by category") {
      console.log(filterBy)
      return true;
    } else {
      console.log(category)
      return category.category === filterBy;
    }
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {selectedCategory.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
