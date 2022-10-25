import ReactPaginate from 'react-paginate';
import styled from "styled-components";

export const Pagination = styled(ReactPaginate)`
    list-style-type: none;
    margin: 0 auto;
    padding: 0;

    li { display: inline-block; }
`;