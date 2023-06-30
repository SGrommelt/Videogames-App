import styles from './Cards.module.css';
import { connect } from 'react-redux';
import { React, useState } from 'react';
import Card from './Card';
import Pagination from '../Pagination/Pagination';

function Cards(props) {

    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 15;
    const totalCards = props.allVideogames.length;

    const firstIndex = cardsPerPage * (currentPage - 1);
    const lastIndex = firstIndex + cardsPerPage;

    let currentPageData = props.allVideogames.slice(firstIndex, lastIndex);

    const onPageChange= (pageNumber)=>{
        setCurrentPage(pageNumber);
    }

    return (
        <div className={styles.background}>
            <Pagination
            totalElements={totalCards}
            currentPage={currentPage}
            pageSize={cardsPerPage}
            onPageChange={onPageChange}
        />

        {
            currentPageData.length > 0 ? ( currentPageData.map(game => (
                <Card 
                    id={game.id}
                    name = {game.name}
                    genres = {game.genres}
                    image = {game.image}
                />
             )))
        : null }
        {/* <Pagination
            totalElements={totalCards}
            currentPage={currentPage}
            pageSize={cardsPerPage}
            onPageChange={onPageChange}
        /> */}
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
       allVideogames: state.allVideogames
    }
}


export default connect(mapStateToProps, null)(Cards);