import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../Redux/Slices/filterSlice';

const Pagination = ({ currentPage }) => {
  const dispatch = useDispatch();

  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel="=>"
      onPageChange={(obj) => dispatch(setCurrentPage(obj.selected + 1))}
      pageRangeDisplayed={8}
      pageCount={2}
      forcePage={currentPage - 1}
      previousLabel="<="
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
