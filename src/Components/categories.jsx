import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeCategoryState } from '../Redux/Slices/categorySlice';

const Categories = () => {
  const dispatch = useDispatch();
  const isActiveCategory = useSelector((state) => state.category.categoryId);
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categories.map((categories, i) => (
          <li
            key={i}
            onClick={() => dispatch(changeCategoryState(i))}
            className={isActiveCategory === i ? 'active' : ''}>
            {categories}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
