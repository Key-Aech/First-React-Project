import React from 'react';
import axios from 'axios';

import TopContent from '../Components/topContent';
import PizzaBlock from '../Components/PizzaBlock';
import '../scss/app.scss';

import Pagination from '../Components/Pagination';
import { Skeleton } from '../Components/PizzaBlock/Skeleton';
import { searchContext } from '../App';
import { useSelector } from 'react-redux';

const Home = () => {
  // !Redux
  const varcategoryId = useSelector((state) => state.filter.categoryId);
  const isSortPicked = useSelector((state) => state.filter.sort);
  const currentPage = useSelector((state) => state.filter.currentPage);
  // !Redux
  let [items, setItems] = React.useState([]);
  let [isLoading, setLoading] = React.useState(true);
  // let [currentPage, setCurrentPage] = React.useState(1);
  let { searchText } = React.useContext(searchContext);

  const category = varcategoryId > 0 ? `category=${varcategoryId}` : ``;
  const sort = isSortPicked.sortType.replace(`-`, ``);
  const order = isSortPicked.sortType.includes(`-`) ? 'desc' : 'asc';
  const search = searchText ? `search=${searchText}` : ``;

  React.useEffect(() => {
    setLoading(true);
    // !fetch(        старый метод который обычно возвращал данные не в понятном формате (не json)
    //   `https://635bf637fc2595be263d4f1f.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sort}&order=${order}&${search}`,
    // )
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((arr) => {
    //     setItems(arr);
    //     setLoading(false);
    //   });
    axios
      .get(
        `https://635bf637fc2595be263d4f1f.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sort}&order=${order}&${search}`,
      )
      .then((arr) => {
        setItems(arr.data);
        setLoading(false);
      });
    window.scrollTo(0, 0);
  }, [varcategoryId, isSortPicked, searchText, currentPage]);

  const skeletons = [...new Array(6)].map((_, i) => <Skeleton key={i} />);
  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);

  return (
    <div className="container">
      <TopContent />
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
      <Pagination currentPage={currentPage} />
    </div>
  );
};

export default Home;
