import { useState, useEffect} from 'react';
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';
import useDishes from '../../hooks/useDishes';
import MenuItems from './MenuItems';

const Pagination = styled(ReactPaginate)`
    list-style-type: none;
    margin: 0 auto;
    padding: 0;

    li {
        display: inline-block;
        // border: 1px solid #c3c3c3;
        // background-color: #fff;
        // padding: 10px;
    }
`;

export default function PaginatedItems({ itemsPerPage }) {
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);
    const items = useDishes();
  
    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        // setCurrentItems(items.slice(itemOffset, endOffset));
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, items]);
  
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <MenuItems currentItems={currentItems} />
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