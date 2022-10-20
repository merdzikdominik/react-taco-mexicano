import { useState, useEffect} from 'react';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';
import MenuItems from './MenuItems';

const Pagination = styled(ReactPaginate)`
    list-style-type: none;
    margin: 0 auto;
    padding: 0;

    li { display: inline-block; }
`;

export default function PaginatedItems({ itemsPerPage, items, searchedDish }) {
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, items]);
  
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <MenuItems currentItems={currentItems} items={items} searchedDish={searchedDish} />
            <Pagination
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                marginPagesDisplayed={1}
                pageCount={pageCount}
                previousLabel="< previous"

                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"

                renderOnZeroPageCount={null}
            />
        </>
    );
  }