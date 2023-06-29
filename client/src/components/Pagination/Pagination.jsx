import React  from 'react';
import styles from './Pagination.module.css';

export default function Pagination(props) {
    const { totalElements, currentPage, pageSize } = props;
    const totalPages = Math.ceil(totalElements / pageSize);
    const pages = [];

    for(let i=1 ; i<=totalPages; i++){
        pages.push(i);
    }

    const handlePageClick = (event)=>{
        props.onPageChange(Number(event.target.id));
    }

    const pageNumbers = pages.map( page => {
        return(
            <button key={page} id={page} onClick={handlePageClick} 
                className={currentPage===page ? 'active' : null}>
                {page}
            </button>
        );
    })

    return (
        <div>
            <ul className="pageNumbers"> 
                {pageNumbers}
            </ul>
        </div>
    );
}